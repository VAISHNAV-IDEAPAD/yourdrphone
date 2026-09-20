const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

class FlasherService {
  constructor() {
    this.adbPath = path.resolve(__dirname, '../../bin/platform-tools/adb.exe');
    this.fastbootPath = path.resolve(__dirname, '../../bin/platform-tools/fastboot.exe');
    this.isFlashing = false;
    this.currentProcess = null;
    this.wsBroadcaster = null;
  }

  setBroadcaster(fn) {
    this.wsBroadcaster = fn;
  }

  broadcastLog(line, type = 'info') {
    if (this.wsBroadcaster) {
      this.wsBroadcaster({
        type: 'flash_log',
        timestamp: new Date().toLocaleTimeString(),
        message: line,
        logType: type
      });
    }
  }

  broadcastStatus(status, progress = 0) {
    if (this.wsBroadcaster) {
      this.wsBroadcaster({
        type: 'flash_status',
        status,
        progress,
        isFlashing: this.isFlashing
      });
    }
  }

  async flashPartition({ serial, partition, filePath }) {
    if (this.isFlashing) {
      throw new Error('A flashing process is already in progress.');
    }

    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }

    this.isFlashing = true;
    this.broadcastStatus('starting', 10);
    this.broadcastLog(`[INFO] Preparing to flash partition '${partition}' with file: ${path.basename(filePath)}`, 'info');

    return new Promise((resolve, reject) => {
      const args = [];
      if (serial) {
        args.push('-s', serial);
      }
      args.push('flash', partition, filePath);

      this.broadcastLog(`[CMD] fastboot ${args.join(' ')}`, 'cmd');

      const proc = spawn(this.fastbootPath, args);
      this.currentProcess = proc;

      proc.stdout.on('data', (data) => {
        const lines = data.toString().split('\n');
        lines.forEach(line => {
          if (line.trim()) this.broadcastLog(line.trim(), 'stdout');
        });
      });

      proc.stderr.on('data', (data) => {
        const lines = data.toString().split('\n');
        lines.forEach(line => {
          if (line.trim()) {
            // Fastboot outputs most progress info to stderr
            const isError = line.toLowerCase().includes('failed') || line.toLowerCase().includes('error');
            this.broadcastLog(line.trim(), isError ? 'error' : 'stdout');
          }
        });
      });

      proc.on('close', (code) => {
        this.isFlashing = false;
        this.currentProcess = null;

        if (code === 0) {
          this.broadcastLog(`[SUCCESS] Partition '${partition}' flashed successfully!`, 'success');
          this.broadcastStatus('completed', 100);
          resolve({ success: true, message: `Partition '${partition}' flashed successfully.` });
        } else {
          this.broadcastLog(`[ERROR] Flashing failed with exit code ${code}`, 'error');
          this.broadcastStatus('error', 0);
          reject(new Error(`Fastboot exited with code ${code}`));
        }
      });

      proc.on('error', (err) => {
        this.isFlashing = false;
        this.currentProcess = null;
        this.broadcastLog(`[ERROR] Process error: ${err.message}`, 'error');
        this.broadcastStatus('error', 0);
        reject(err);
      });
    });
  }

  async runSideload({ serial, filePath }) {
    if (this.isFlashing) {
      throw new Error('A flashing process is already in progress.');
    }

    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }

    this.isFlashing = true;
    this.broadcastStatus('starting', 5);
    this.broadcastLog(`[INFO] Starting ADB Sideload for: ${path.basename(filePath)}`, 'info');

    return new Promise((resolve, reject) => {
      const args = [];
      if (serial) {
        args.push('-s', serial);
      }
      args.push('sideload', filePath);

      this.broadcastLog(`[CMD] adb ${args.join(' ')}`, 'cmd');

      const proc = spawn(this.adbPath, args);
      this.currentProcess = proc;

      proc.stdout.on('data', (data) => {
        const lines = data.toString().split('\n');
        lines.forEach(line => {
          if (line.trim()) {
            this.broadcastLog(line.trim(), 'stdout');
            // Parse progress e.g. "serving: 'update.zip'  (~45%)"
            const match = line.match(/~(\d+)%/);
            if (match) {
              this.broadcastStatus('flashing', parseInt(match[1], 10));
            }
          }
        });
      });

      proc.stderr.on('data', (data) => {
        const lines = data.toString().split('\n');
        lines.forEach(line => {
          if (line.trim()) this.broadcastLog(line.trim(), 'stdout');
        });
      });

      proc.on('close', (code) => {
        this.isFlashing = false;
        this.currentProcess = null;

        if (code === 0) {
          this.broadcastLog(`[SUCCESS] Sideload update completed successfully!`, 'success');
          this.broadcastStatus('completed', 100);
          resolve({ success: true, message: 'ADB Sideload completed.' });
        } else {
          this.broadcastLog(`[ERROR] Sideload failed with exit code ${code}`, 'error');
          this.broadcastStatus('error', 0);
          reject(new Error(`ADB Sideload exited with code ${code}`));
        }
      });
    });
  }

  abortFlashing() {
    if (this.currentProcess) {
      this.currentProcess.kill('SIGKILL');
      this.isFlashing = false;
      this.broadcastLog('[ABORT] Flashing process was aborted by user.', 'warn');
      this.broadcastStatus('aborted', 0);
      return true;
    }
    return false;
  }
}

module.exports = new FlasherService();
