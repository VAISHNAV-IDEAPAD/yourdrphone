const fs = require('fs');
const path = require('path');
const axios = require('axios');
const crypto = require('crypto');
const https = require('https');

const httpsAgent = new https.Agent({
  rejectUnauthorized: false
});

class DownloadManager {
  constructor() {
    this.downloads = new Map();
    this.wsBroadcaster = null;
    this.downloadsDir = path.resolve(__dirname, '../../downloads');

    if (!fs.existsSync(this.downloadsDir)) {
      fs.mkdirSync(this.downloadsDir, { recursive: true });
    }
  }

  setBroadcaster(fn) {
    this.wsBroadcaster = fn;
  }

  broadcast(type, data) {
    if (this.wsBroadcaster) {
      this.wsBroadcaster({ type, ...data });
    }
  }

  getDownloads() {
    return Array.from(this.downloads.values()).map(d => ({
      id: d.id,
      filename: d.filename,
      url: d.url,
      totalBytes: d.totalBytes,
      receivedBytes: d.receivedBytes,
      progress: d.progress,
      speed: d.speed,
      eta: d.eta,
      status: d.status,
      error: d.error,
      model: d.model,
      brand: d.brand,
      version: d.version,
      filePath: d.filePath,
      hashMatch: d.hashMatch
    }));
  }

  startDownload({ url, filename, model, brand, version, expectedSha256, expectedMd5, expectedSha1 }) {
    // Generate clean filename if not specified
    if (!filename) {
      const urlParts = url.split('/');
      filename = decodeURIComponent(urlParts[urlParts.length - 1].split('?')[0]) || `${brand}_${model}_firmware.bin`;
    }

    const id = 'dl_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
    const filePath = path.join(this.downloadsDir, filename);

    const downloadItem = {
      id,
      url,
      filename,
      filePath,
      model: model || 'Unknown Device',
      brand: brand || 'Unknown Brand',
      version: version || 'Stock Firmware',
      expectedSha256,
      expectedMd5,
      expectedSha1,
      totalBytes: 0,
      receivedBytes: 0,
      progress: 0,
      speed: '0 KB/s',
      eta: '--',
      status: 'starting',
      error: null,
      abortController: new AbortController(),
      lastBytes: 0,
      lastTime: Date.now()
    };

    this.downloads.set(id, downloadItem);
    this._executeDownload(downloadItem);

    return { id, filename, status: 'starting' };
  }

  async _executeDownload(item) {
    try {
      item.status = 'connecting';
      this.broadcast('download_updated', { item: this._formatItem(item) });

      const response = await axios({
        method: 'GET',
        url: item.url,
        responseType: 'stream',
        signal: item.abortController.signal,
        timeout: 20000,
        httpsAgent,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36'
        }
      });

      const totalLength = parseInt(response.headers['content-length'] || 0, 10);
      item.totalBytes = totalLength;
      item.status = 'downloading';

      const fileStream = fs.createWriteStream(item.filePath);
      const sha256Hash = crypto.createHash('sha256');

      let lastUpdate = Date.now();

      response.data.on('data', (chunk) => {
        item.receivedBytes += chunk.length;
        sha256Hash.update(chunk);

        const now = Date.now();
        if (now - lastUpdate > 600) {
          const timeDiff = (now - item.lastTime) / 1000;
          const bytesDiff = item.receivedBytes - item.lastBytes;
          const bytesPerSec = timeDiff > 0 ? bytesDiff / timeDiff : 0;

          item.speed = this._formatSpeed(bytesPerSec);
          if (item.totalBytes > 0) {
            item.progress = Math.min(100, Math.round((item.receivedBytes / item.totalBytes) * 100));
            const remainingBytes = item.totalBytes - item.receivedBytes;
            const remainingSeconds = bytesPerSec > 0 ? Math.round(remainingBytes / bytesPerSec) : 0;
            item.eta = this._formatEta(remainingSeconds);
          } else {
            item.progress = 50; // indeterminate
          }

          item.lastBytes = item.receivedBytes;
          item.lastTime = now;
          lastUpdate = now;

          this.broadcast('download_progress', { item: this._formatItem(item) });
        }
      });

      response.data.pipe(fileStream);

      fileStream.on('finish', async () => {
        item.status = 'verifying';
        item.progress = 100;
        item.speed = 'Verifying Hash...';
        this.broadcast('download_updated', { item: this._formatItem(item) });

        const calculatedSha256 = sha256Hash.digest('hex');
        item.calculatedSha256 = calculatedSha256;

        if (item.expectedSha256) {
          item.hashMatch = calculatedSha256.toLowerCase() === item.expectedSha256.toLowerCase();
        } else {
          item.hashMatch = true;
        }

        item.status = 'completed';
        item.speed = 'Completed';
        item.eta = 'Done';
        this.broadcast('download_completed', { item: this._formatItem(item) });
      });

      fileStream.on('error', (err) => {
        item.status = 'error';
        item.error = err.message;
        this.broadcast('download_error', { item: this._formatItem(item) });
      });

    } catch (err) {
      if (item.status === 'cancelled') {
        return;
      }
      item.status = 'error';
      item.error = err.message || 'Download failed or server rejected connection';
      this.broadcast('download_error', { item: this._formatItem(item) });
    }
  }

  cancelDownload(id) {
    const item = this.downloads.get(id);
    if (item) {
      item.status = 'cancelled';
      try {
        item.abortController.abort();
      } catch (e) {}
      if (fs.existsSync(item.filePath)) {
        try {
          fs.unlinkSync(item.filePath);
        } catch (e) {}
      }
      this.downloads.delete(id);
      this.broadcast('download_cancelled', { id });
      return true;
    }
    return false;
  }

  _formatItem(item) {
    return {
      id: item.id,
      filename: item.filename,
      model: item.model,
      brand: item.brand,
      version: item.version,
      totalBytes: item.totalBytes,
      receivedBytes: item.receivedBytes,
      progress: item.progress,
      speed: item.speed,
      eta: item.eta,
      status: item.status,
      error: item.error,
      filePath: item.filePath,
      hashMatch: item.hashMatch
    };
  }

  _formatSpeed(bytesPerSec) {
    if (bytesPerSec > 1024 * 1024) {
      return `${(bytesPerSec / (1024 * 1024)).toFixed(2)} MB/s`;
    }
    return `${(bytesPerSec / 1024).toFixed(1)} KB/s`;
  }

  _formatEta(seconds) {
    if (seconds <= 0) return '0s';
    if (seconds < 60) return `${seconds}s`;
    const minutes = Math.floor(seconds / 60);
    const remSeconds = seconds % 60;
    if (minutes < 60) return `${minutes}m ${remSeconds}s`;
    const hours = Math.floor(minutes / 60);
    return `${hours}h ${minutes % 60}m`;
  }
}

module.exports = new DownloadManager();
