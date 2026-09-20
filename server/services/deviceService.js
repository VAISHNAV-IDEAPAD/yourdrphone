const { exec } = require('child_process');
const path = require('path');
const util = require('util');
const execPromise = util.promisify(exec);

class DeviceService {
  constructor() {
    this.adbPath = path.resolve(__dirname, '../../bin/platform-tools/adb.exe');
    this.fastbootPath = path.resolve(__dirname, '../../bin/platform-tools/fastboot.exe');
  }

  async scanConnectedDevices() {
    const devices = [];

    // 1. Scan ADB devices
    try {
      const { stdout: adbOut } = await execPromise(`"${this.adbPath}" devices -l`, { timeout: 4000 });
      const lines = adbOut.trim().split('\n').slice(1); // skip 'List of devices attached'

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue;
        const parts = trimmed.split(/\s+/);
        const serial = parts[0];
        const state = parts[1]; // device, unauthorized, recovery, sideload, offline

        if (state === 'unauthorized') {
          devices.push({
            id: serial,
            serial,
            brand: 'Android Device',
            model: 'Needs Authorization',
            state: 'unauthorized',
            mode: 'ADB (Please allow USB debugging on phone screen)',
            platform: 'android'
          });
        } else if (state === 'device') {
          // Extract model, product, device if present in line
          let model = 'Android Device';
          let product = 'Unknown';
          const modelMatch = trimmed.match(/model:([^\s]+)/);
          const productMatch = trimmed.match(/product:([^\s]+)/);
          if (modelMatch) model = modelMatch[1].replace(/_/g, ' ');
          if (productMatch) product = productMatch[1];

          devices.push({
            id: serial,
            serial,
            brand: 'Android',
            model,
            product,
            state: 'connected',
            mode: 'Normal (ADB Debugging)',
            platform: 'android'
          });
        } else if (state === 'recovery') {
          devices.push({
            id: serial,
            serial,
            brand: 'Android',
            model: 'Recovery Mode',
            state: 'recovery',
            mode: 'Recovery Mode',
            platform: 'android'
          });
        } else if (state === 'sideload') {
          devices.push({
            id: serial,
            serial,
            brand: 'Android',
            model: 'ADB Sideload',
            state: 'sideload',
            mode: 'ADB Sideload Mode',
            platform: 'android'
          });
        }
      }
    } catch (err) {
      // ignore adb scan errors
    }

    // 2. Scan Fastboot devices
    try {
      const { stdout: fbOut } = await execPromise(`"${this.fastbootPath}" devices`, { timeout: 4000 });
      const fbLines = fbOut.trim().split('\n');

      for (const line of fbLines) {
        const trimmed = line.trim();
        if (!trimmed) continue;
        const parts = trimmed.split(/\s+/);
        const serial = parts[0];
        const mode = parts[1] || 'fastboot';

        devices.push({
          id: serial,
          serial,
          brand: 'Android',
          model: 'Fastboot / Bootloader Device',
          state: 'fastboot',
          mode: mode.toUpperCase(),
          platform: 'android'
        });
      }
    } catch (err) {
      // ignore fastboot errors
    }

    // 3. Scan Apple USB Devices via Windows PowerShell PnP
    try {
      const psCmd = `powershell -Command "Get-PnpDevice -PresentOnly -Class 'USBDevice', 'MobileDevice' -ErrorAction SilentlyContinue | Where-Object { $_.FriendlyName -match 'Apple|iPhone|iPad|Samsung|SAMSUNG' } | Select-Object -Property FriendlyName, Status"`;
      const { stdout: pnpOut } = await execPromise(psCmd, { timeout: 4000 });
      if (pnpOut && pnpOut.includes('Apple')) {
        // Only add if not already in adb list
        devices.push({
          id: 'apple_usb_' + Math.random().toString(36).substring(7),
          serial: 'Apple Mobile Device',
          brand: 'Apple',
          model: 'Apple iPhone / iPad',
          state: 'connected',
          mode: 'Apple Mobile Device (USB)',
          platform: 'ios'
        });
      }
    } catch (e) {
      // ignore pnp query
    }

    return devices;
  }

  async getDeviceDetails(serial) {
    if (!serial) throw new Error('Device serial is required');

    try {
      const [brandOut, modelOut, versionOut, patchOut, bootloaderOut, batteryOut] = await Promise.all([
        execPromise(`"${this.adbPath}" -s ${serial} shell getprop ro.product.brand`, { timeout: 3000 }).catch(() => ({ stdout: '' })),
        execPromise(`"${this.adbPath}" -s ${serial} shell getprop ro.product.model`, { timeout: 3000 }).catch(() => ({ stdout: '' })),
        execPromise(`"${this.adbPath}" -s ${serial} shell getprop ro.build.version.release`, { timeout: 3000 }).catch(() => ({ stdout: '' })),
        execPromise(`"${this.adbPath}" -s ${serial} shell getprop ro.build.version.security_patch`, { timeout: 3000 }).catch(() => ({ stdout: '' })),
        execPromise(`"${this.adbPath}" -s ${serial} shell getprop ro.boot.flash.locked`, { timeout: 3000 }).catch(() => ({ stdout: '' })),
        execPromise(`"${this.adbPath}" -s ${serial} shell dumpsys battery`, { timeout: 3000 }).catch(() => ({ stdout: '' }))
      ]);

      let batteryLevel = 'Unknown';
      if (batteryOut.stdout) {
        const levelMatch = batteryOut.stdout.match(/level:\s*(\d+)/);
        if (levelMatch) batteryLevel = `${levelMatch[1]}%`;
      }

      return {
        serial,
        brand: brandOut.stdout.trim() || 'Android',
        model: modelOut.stdout.trim() || 'Generic Device',
        androidVersion: versionOut.stdout.trim() || 'Unknown',
        securityPatch: patchOut.stdout.trim() || 'Unknown',
        bootloaderLocked: bootloaderOut.stdout.trim() === '1' ? 'Locked (Secure)' : 'Unlocked / Unspecified',
        batteryLevel
      };
    } catch (err) {
      return {
        serial,
        brand: 'Android',
        model: 'Device (Limited info in current mode)',
        batteryLevel: 'Unknown'
      };
    }
  }

  async rebootDevice(serial, target = 'system') {
    let cmd = '';
    target = target.toLowerCase();

    if (target === 'recovery') {
      cmd = `"${this.adbPath}" -s ${serial} reboot recovery`;
    } else if (target === 'bootloader' || target === 'fastboot') {
      cmd = `"${this.adbPath}" -s ${serial} reboot bootloader`;
    } else if (target === 'edl') {
      cmd = `"${this.adbPath}" -s ${serial} reboot edl`;
    } else if (target === 'download') {
      cmd = `"${this.adbPath}" -s ${serial} reboot download`;
    } else {
      cmd = `"${this.adbPath}" -s ${serial} reboot`;
    }

    try {
      const { stdout, stderr } = await execPromise(cmd, { timeout: 6000 });
      return { success: true, message: `Rebooting to ${target}...`, output: stdout || stderr };
    } catch (err) {
      // Try fastboot reboot if ADB failed
      try {
        const fbCmd = `"${this.fastbootPath}" -s ${serial} reboot`;
        await execPromise(fbCmd, { timeout: 6000 });
        return { success: true, message: `Fastboot rebooted device to system.` };
      } catch (e) {
        throw new Error(err.message);
      }
    }
  }

  async checkDrivers() {
    const drivers = {
      adb: false,
      samsung: false,
      apple: false,
      fastboot: false
    };

    try {
      const { stdout } = await execPromise(`"${this.adbPath}" version`, { timeout: 2000 });
      drivers.adb = stdout.includes('Android Debug Bridge');
      drivers.fastboot = true;
    } catch (e) {}

    try {
      const psCmd = `powershell -Command "Get-PnpDevice -Class 'USBDevice', 'Ports', 'AndroidUsbDeviceClass' -ErrorAction SilentlyContinue | Select-Object -ExpandProperty FriendlyName"`;
      const { stdout } = await execPromise(psCmd, { timeout: 3000 });
      if (stdout.includes('SAMSUNG') || stdout.includes('Samsung')) drivers.samsung = true;
      if (stdout.includes('Apple') || stdout.includes('Apple Mobile Device')) drivers.apple = true;
    } catch (e) {}

    return drivers;
  }
}

module.exports = new DeviceService();
