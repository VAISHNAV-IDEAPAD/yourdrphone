# Dr.Firmware (YourDrPhone) - Universal Mobile Repair & Firmware Flashing Suite
*A comprehensive, modern alternative to Wondershare Dr.Fone*

- 🌐 **GitHub Repository**: [https://github.com/VAISHNAV-IDEAPAD/yourdrphone](https://github.com/VAISHNAV-IDEAPAD/yourdrphone)
- ⚡ **Vercel Deploy Link**: [Deploy yourdrphone on Vercel](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FVAISHNAV-IDEAPAD%2Fyourdrphone&project-name=yourdrphone)
- 🚀 **Production URL**: `https://yourdrphone.vercel.app`

Dr.Firmware is an all-in-one desktop application for Windows engineered for mobile technicians, repair shops, and enthusiasts. It provides an automated stock firmware catalog, multi-threaded high-speed downloads, live hardware diagnostics via ADB/Fastboot, and a guided flashing engine for Apple iOS, Samsung, Google Pixel, Xiaomi, and OnePlus.

---

## 🚀 Key Capabilities

### 1. 🌐 Universal Firmware Download Hub
- **Apple iOS / iPadOS**: Direct connection to official Apple CDN (`updates.cdn-apple.com`) via IPSW.me API. Supports all iPhones (iPhone 16 Pro Max down to legacy devices) with signed/unsigned status indicators, build numbers, and SHA-1/MD5 checksum verification.
- **Google Pixel**: Full official Google Factory Images registry (Pixel 9 Pro XL to Pixel 5) with Android 15, 14, 13, SHA-256 hashes, and fastboot extraction.
- **Samsung Galaxy**: Stock multi-file ROM sets (AP, BL, CP, CSC, PIT) for Galaxy S24 Ultra, S23, S22, Z Fold 6, Z Flip 6, A-series with region/CSC support (INS, XAA, EUX, etc.).
- **Xiaomi / Redmi / POCO**: Fastboot ROMs (`.tgz`) and Recovery ROMs (`.zip`) for HyperOS 1.0 and MIUI 14 directly from official Xiaomi servers (`bigota.d.miui.com`).
- **OnePlus**: Full official OxygenOS OTA zip archives.
- **Manual URL Downloader**: Paste any direct firmware link to download with chunked streaming, progress bar, speed meter, and ETA.

### 2. ⚡ Flash & Install Engine
- **Fastboot Partition Flasher**: Direct execution of `fastboot flash <partition> <image>` (`boot`, `init_boot`, `recovery`, `vbmeta`, `system`, `vendor_boot`) with real-time colored terminal console output.
- **ADB Sideload**: Install full recovery OTA update zips with live percentage tracking.
- **Samsung Odin Guide**: Step-by-step 4-file slot placement guide (BL, AP, CP, CSC) and download mode key combination instructions.
- **Apple IPSW Restoration**: Step-by-step DFU and Recovery mode restoration procedures for iTunes and Apple Devices app.

### 3. 🛠️ Phone Toolbox & Diagnostics
- **1-Click Mode Switcher**: Reboot to System, Recovery, Bootloader/Fastboot, or Qualcomm 9008 EDL mode via ADB without touching hardware buttons.
- **Device Property Inspector**: Reads device model, serial, Android version, security patch level, bootloader lock state, and battery level.
- **FRP Bypass Assistant**: Verified procedures for Samsung (*#0*# test mode), Xiaomi (MiAssistant), and Google Pixel FRP removal.

### 4. 🩺 Driver Doctor
- Real-time diagnostic check for Google ADB/Fastboot drivers, Samsung USB Drivers, and Apple Mobile Device Support.

---

## 🖥️ How to Launch the Application

Double-click `launch.bat` in the root folder, or run in PowerShell:

```powershell
.\launch.ps1
```

The script will:
1. Initialize the embedded portable Node.js and Google Android Platform Tools.
2. Start the local server on `http://localhost:4500`.
3. Open a sleek, native desktop application window via Microsoft Edge (`--app` mode).

---

## 📂 Project Structure

```
phone-repair-tool/
├── .runtime/               # Embedded portable Node.js v20 LTS
├── bin/platform-tools/     # Official Google ADB & Fastboot binaries
├── downloads/              # Local downloaded firmwares library
├── server/
│   ├── server.js           # Express REST API & WebSocket server
│   └── services/
│       ├── firmwareService.js   # Multi-brand catalog & API aggregator
│       ├── downloadManager.js   # Resumable chunked downloader
│       ├── deviceService.js     # ADB/Fastboot device scanner & inspector
│       └── flasherService.js    # Partition flasher & live terminal logger
├── src/                    # Modern React 18 + Tailwind UI
│   ├── components/         # Dashboard, FirmwareHub, FlasherWizard, etc.
│   └── App.jsx
├── launch.bat              # 1-Click Windows desktop launcher
└── launch.ps1              # PowerShell desktop launcher
```
