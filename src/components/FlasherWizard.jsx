import React, { useState, useEffect, useRef } from 'react';
import { 
  Flame, 
  AlertTriangle, 
  CheckCircle2, 
  Terminal, 
  Smartphone, 
  ShieldAlert, 
  RotateCcw, 
  Play, 
  StopCircle, 
  Cpu,
  Layers,
  FileCode,
  HardDrive,
  Radio,
  Disc
} from 'lucide-react';

export default function FlasherWizard({ 
  flashTarget, 
  connectedDevice, 
  flashLogs = [], 
  flashStatus, 
  onFlashPartition, 
  onFlashSideload, 
  onAbortFlash,
  onReboot 
}) {
  const [flashMode, setFlashMode] = useState('fastboot_partition'); // fastboot_partition, sideload, guided_samsung, guided_apple, guided_nokia, guided_se, guided_samsung_keypad
  const [selectedPartition, setSelectedPartition] = useState('boot');
  const [filePath, setFilePath] = useState('');
  const [confirmedBackup, setConfirmedBackup] = useState(false);
  const [confirmedBattery, setConfirmedBattery] = useState(false);
  const terminalEndRef = useRef(null);

  // Auto-fill from target if passed from FirmwareHub or DownloadManager
  useEffect(() => {
    if (flashTarget) {
      if (flashTarget.localFilePath) {
        setFilePath(flashTarget.localFilePath);
      }
      if (flashTarget.brand === 'samsung') {
        setFlashMode('guided_samsung');
      } else if (flashTarget.brand === 'apple') {
        setFlashMode('guided_apple');
      } else if (flashTarget.brand === 'honor') {
        setFlashMode('guided_honor');
      } else if (flashTarget.brand === 'nokia') {
        setFlashMode('guided_nokia');
      } else if (flashTarget.brand === 'sonyericsson') {
        setFlashMode('guided_se');
      } else if (flashTarget.brand === 'samsung_feature') {
        setFlashMode('guided_samsung_keypad');
      }
    }
  }, [flashTarget]);

  // Auto-scroll terminal
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [flashLogs]);

  const handleStartFlash = () => {
    if (!filePath) {
      alert('Please specify the file path to flash.');
      return;
    }

    if (flashMode === 'fastboot_partition') {
      onFlashPartition({
        serial: connectedDevice?.serial,
        partition: selectedPartition,
        filePath
      });
    } else if (flashMode === 'sideload') {
      onFlashSideload({
        serial: connectedDevice?.serial,
        filePath
      });
    }
  };

  const partitionsList = [
    { id: 'boot', label: 'Kernel Boot (boot.img)', desc: 'Kernel, ramdisk & bootloader init' },
    { id: 'init_boot', label: 'Init Boot (init_boot.img)', desc: 'Android 13+ generic ramdisk' },
    { id: 'recovery', label: 'Recovery (recovery.img)', desc: 'Stock or custom recovery' },
    { id: 'vbmeta', label: 'VBMeta (vbmeta.img)', desc: 'Android Verified Boot verification' },
    { id: 'dtbo', label: 'DTBO (dtbo.img)', desc: 'Device tree blob overlay' },
    { id: 'vendor_boot', label: 'Vendor Boot (vendor_boot.img)', desc: 'OEM vendor ramdisk modules' },
    { id: 'system', label: 'System (system.img)', desc: 'Main Android OS image' }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-white">Firmware Install & Flasher</h1>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Flasher Engine
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Direct Fastboot partition flasher, ADB sideload, and guided Samsung Odin & Apple DFU restoration.
          </p>
        </div>

        {connectedDevice && (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-850 border border-surface-750 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Target: <strong className="text-white">{connectedDevice.model}</strong></span>
          </div>
        )}
      </div>

      {/* Flashing Mode Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { id: 'fastboot_partition', title: 'Fastboot Partition', desc: 'Flash boot, recovery, vbmeta, or system', icon: Cpu },
          { id: 'sideload', title: 'ADB Sideload', desc: 'Install full OTA zip in recovery mode', icon: HardDrive },
          { id: 'guided_samsung', title: 'Samsung Odin Guide', desc: 'Stock 4-File (BL, AP, CP, CSC) flashing', icon: Layers },
          { id: 'guided_apple', title: 'Apple IPSW Restore', desc: 'DFU / Recovery mode official restore', icon: Smartphone },
          { id: 'guided_honor', title: 'Honor dload & eRecovery', desc: 'Hold Vol Up+Down+Power or Fastboot', icon: Smartphone },
          { id: 'guided_nokia', title: 'Nokia Dead USB Flasher', desc: 'Phoenix & BEST S60/S40 Dead Mode', icon: Radio },
          { id: 'guided_se', title: 'Sony Ericsson "C" Mode', desc: 'Hold "C" / 2+5 Key A2 Platform', icon: Disc },
          { id: 'guided_samsung_keypad', title: 'Samsung Keypad FlashLoader', desc: 'Spreadtrum & Swift FlashLoader', icon: Smartphone },
        ].map((mode) => {
          const Icon = mode.icon;
          const isSelected = flashMode === mode.id;
          return (
            <div
              key={mode.id}
              onClick={() => setFlashMode(mode.id)}
              className={`p-4 rounded-2xl cursor-pointer border transition ${
                isSelected
                  ? 'bg-brand-600/15 border-brand-500 text-white shadow-lg'
                  : 'bg-surface-850 border-surface-750 hover:border-surface-600 text-slate-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-brand-600 text-white' : 'bg-surface-800 text-slate-400'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold">{mode.title}</h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">{mode.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mode Content: 1. Fastboot Partition / Sideload */}
      {(flashMode === 'fastboot_partition' || flashMode === 'sideload') && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Configuration Form */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-surface-850 border border-surface-750 space-y-5">
              <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                {flashMode === 'fastboot_partition' ? 'Partition Flasher Setup' : 'ADB Sideload Setup'}
              </h2>

              {flashMode === 'fastboot_partition' && (
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300">Target Partition</label>
                  <select
                    value={selectedPartition}
                    onChange={(e) => setSelectedPartition(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-800 border border-surface-700 text-xs text-white focus:outline-none focus:border-brand-500"
                  >
                    {partitionsList.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.label} - {p.desc}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* File Path input */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300">Firmware Image or Package File</label>
                <div className="relative">
                  <FileCode className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Enter file path (e.g. C:\Downloads\boot.img or update.zip)"
                    value={filePath}
                    onChange={(e) => setFilePath(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-800 border border-surface-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 font-mono"
                  />
                </div>
                <p className="text-[11px] text-slate-500">
                  Tip: You can select downloaded firmwares directly from the <strong className="text-slate-400">Download Center</strong>.
                </p>
              </div>

              {/* Safety Checklist */}
              <div className="p-4 rounded-xl bg-surface-900/60 border border-surface-750 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Pre-Flash Safety Checklist</span>
                </div>

                <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={confirmedBattery}
                    onChange={(e) => setConfirmedBattery(e.target.checked)}
                    className="rounded bg-surface-800 border-surface-700 text-brand-500 focus:ring-0"
                  />
                  <span>Phone battery is at least 50% or connected to charger</span>
                </label>

                <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={confirmedBackup}
                    onChange={(e) => setConfirmedBackup(e.target.checked)}
                    className="rounded bg-surface-800 border-surface-700 text-brand-500 focus:ring-0"
                  />
                  <span>I understand flashing partitions modifies device software</span>
                </label>
              </div>

              {/* Flash action buttons */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={handleStartFlash}
                  disabled={flashStatus?.isFlashing || !confirmedBattery || !confirmedBackup || !filePath}
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-400 hover:to-rose-500 disabled:opacity-40 text-white font-bold text-xs shadow-lg shadow-amber-500/20 transition active:scale-95"
                >
                  <Flame className="w-4 h-4" />
                  <span>{flashStatus?.isFlashing ? 'Flashing in Progress...' : 'Start Flashing'}</span>
                </button>

                {flashStatus?.isFlashing && (
                  <button
                    onClick={onAbortFlash}
                    className="px-4 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition"
                  >
                    <StopCircle className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Quick Fastboot Mode Guide */}
            <div className="p-4 rounded-2xl bg-surface-850/60 border border-surface-750 text-xs space-y-2">
              <h4 className="font-bold text-white flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-brand-400" />
                How to enter Fastboot / Bootloader Mode
              </h4>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                1. Power off device completely.<br />
                2. Press and hold <strong className="text-white">Volume Down + Power</strong> buttons simultaneously until the Fastboot/Bootloader screen appears.<br />
                3. Connect to PC via USB cable. Run <code>fastboot devices</code> to verify connection.
              </p>
            </div>
          </div>

          {/* Right: Live Terminal Console Output */}
          <div className="lg:col-span-6 flex flex-col h-[520px] rounded-2xl bg-[#080c14] border border-surface-750 overflow-hidden shadow-2xl">
            {/* Terminal titlebar */}
            <div className="h-10 bg-surface-900 border-b border-surface-800 px-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 ml-2">fastboot-flasher-terminal</span>
              </div>

              {connectedDevice && (
                <button
                  onClick={() => onReboot(connectedDevice.serial, 'system')}
                  className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-400 hover:text-white"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reboot Device</span>
                </button>
              )}
            </div>

            {/* Terminal logs list */}
            <div className="flex-1 p-4 font-mono text-xs overflow-y-auto space-y-1 select-text">
              {flashLogs.length === 0 ? (
                <div className="text-slate-500 italic py-4">
                  Waiting for flash command... logs will stream here in real-time.
                </div>
              ) : (
                flashLogs.map((log, idx) => {
                  let colorClass = 'text-slate-300';
                  if (log.logType === 'cmd') colorClass = 'text-amber-400 font-bold';
                  if (log.logType === 'success') colorClass = 'text-emerald-400 font-bold';
                  if (log.logType === 'error') colorClass = 'text-rose-400 font-bold';
                  if (log.logType === 'info') colorClass = 'text-brand-300';

                  return (
                    <div key={idx} className={`leading-relaxed break-all ${colorClass}`}>
                      <span className="text-slate-600 text-[10px] mr-2">[{log.timestamp}]</span>
                      <span>{log.message}</span>
                    </div>
                  );
                })
              )}
              <div ref={terminalEndRef} />
            </div>

            {/* Terminal status bar */}
            <div className="h-8 bg-surface-900/90 border-t border-surface-800 px-4 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${flashStatus?.isFlashing ? 'bg-amber-400 animate-ping' : 'bg-slate-500'}`} />
                <span>Status: {flashStatus?.status || 'Idle'}</span>
              </div>
              <span>Progress: {flashStatus?.progress || 0}%</span>
            </div>
          </div>
        </div>
      )}

      {/* Mode Content: 2. Samsung Odin Guide */}
      {flashMode === 'guided_samsung' && (
        <div className="p-8 rounded-2xl bg-surface-850 border border-surface-750 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Samsung Stock 4-File Odin Restoration</h2>
              <p className="text-xs text-slate-400">How to flash official Samsung multi-file ROMs onto Galaxy smartphones</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { slot: 'BL', title: 'Bootloader', desc: 'Select file starting with BL_... (sboot, param, tz)' },
              { slot: 'AP', title: 'System / PDA', desc: 'Select file starting with AP_... (boot, system, recovery, userdata)' },
              { slot: 'CP', title: 'Modem / Phone', desc: 'Select file starting with CP_... (baseband radio modem)' },
              { slot: 'CSC', title: 'Consumer Software', desc: 'CSC_... for full clean wipe; HOME_CSC_... to retain data' },
            ].map((slot) => (
              <div key={slot.slot} className="p-4 rounded-xl bg-surface-800/80 border border-surface-700">
                <span className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 font-mono font-bold flex items-center justify-center text-xs mb-2">
                  {slot.slot}
                </span>
                <h4 className="font-bold text-white text-xs">{slot.title}</h4>
                <p className="text-[11px] text-slate-400 mt-1">{slot.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-surface-900/60 border border-surface-750 space-y-3">
            <h3 className="font-bold text-white text-xs">How to enter Samsung Download Mode</h3>
            <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-300">
              <li>Power off the Samsung phone completely.</li>
              <li>Press and hold <strong className="text-white">Volume Up + Volume Down</strong> buttons together.</li>
              <li>While holding both volume buttons, plug in the USB cable connected to your PC.</li>
              <li>When the teal Warning screen appears, press <strong className="text-white">Volume Up</strong> once to enter Download Mode.</li>
            </ol>
          </div>
        </div>
      )}

      {/* Mode Content: 3. Apple IPSW Restore Guide */}
      {flashMode === 'guided_apple' && (
        <div className="p-8 rounded-2xl bg-surface-850 border border-surface-750 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Apple iOS IPSW Restoration Guide</h2>
              <p className="text-xs text-slate-400">Restore or update iPhone and iPad using official Apple IPSW firmware files</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-xl bg-surface-800/80 border border-surface-700 space-y-3">
              <h4 className="font-bold text-white text-xs">Option A: Recovery Mode Restore (Retain or Clean)</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                1. Connect iPhone to PC via Lightning/USB-C.<br />
                2. Press <strong className="text-white">Volume Up</strong> quickly, then <strong className="text-white">Volume Down</strong> quickly, then press and hold the <strong className="text-white">Power Button</strong> until the cable-to-computer icon appears.<br />
                3. Open iTunes / Apple Devices / Finder, hold <strong className="text-white">Shift</strong> (on Windows) and click <strong className="text-white">Restore iPhone...</strong>, then select your downloaded <code>.ipsw</code> file.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface-800/80 border border-surface-700 space-y-3">
              <h4 className="font-bold text-white text-xs">Option B: DFU Mode (Deep Firmware Upgrade)</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                DFU mode completely bypasses iBoot/bootloader for deep unbricking:<br />
                1. Connect phone to PC.<br />
                2. Quickly press Vol Up, Vol Down, then hold Power for 10s until screen turns black.<br />
                3. Keep holding Power and press Vol Down for 5s.<br />
                4. Release Power but continue holding Vol Down for 10s. The screen must stay completely black while PC detects "Apple Mobile Device in Recovery Mode".
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Mode Content: 4. Nokia Dead USB Flashing Guide */}
      {flashMode === 'guided_nokia' && (
        <div className="p-8 rounded-2xl bg-surface-850 border border-surface-750 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Radio className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Nokia Symbian & S40 Dead USB Flashing</h2>
              <p className="text-xs text-slate-400">Flash bricked Nokia Symbian (S60 / Belle) and Series 40 Java phones via Dead USB Mode</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { slot: 'MCU / CORE', title: 'Main Code Unit', desc: 'Core operating system and boot code (.core.fpsx or .mcu)' },
              { slot: 'PPM / ROFS2', title: 'Language & Fonts', desc: 'Regional language pack, fonts and dictionaries (.rofs2.fpsx or .ppm)' },
              { slot: 'CNT / ROFS3', title: 'Content / Apps', desc: 'Default gallery media, ringtones and Java apps (.rofs3.fpsx or .image.fpsx)' },
              { slot: 'APE / UDA', title: 'User Data / Variant', desc: 'Internal user disk initialization and operator settings (.uda.fpsx)' },
            ].map((slot) => (
              <div key={slot.slot} className="p-4 rounded-xl bg-surface-800/80 border border-surface-700">
                <span className="w-auto px-2 h-7 rounded-lg bg-blue-500/20 text-blue-400 font-mono font-bold inline-flex items-center justify-center text-[10px] mb-2">
                  {slot.slot}
                </span>
                <h4 className="font-bold text-white text-xs">{slot.title}</h4>
                <p className="text-[11px] text-slate-400 mt-1">{slot.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-surface-900/60 border border-surface-750 space-y-3">
            <h3 className="font-bold text-white text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              How to Trigger Nokia Dead USB ROM Mode (Even if Phone Won't Turn On):
            </h3>
            <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-300">
              <li>Open Phoenix Service Software or Infinity BEST (BB5 Easy Service Tool).</li>
              <li>Select your Product RM code (e.g. <strong className="text-white">RM-596</strong> for N8, <strong className="text-white">RM-159</strong> for N95, <strong className="text-white">RM-217</strong> for 6300).</li>
              <li>Tick <strong className="text-amber-400 font-semibold">Dead Phone USB Flashing</strong> in flashing settings.</li>
              <li><strong className="text-white">Remove the phone battery</strong>, then connect the USB cable to PC.</li>
              <li>Click <strong className="text-white">SW Update / Refurbish</strong> in the flasher.</li>
              <li>Insert the battery back into the phone and press the <strong className="text-white">Power Button for 1 second</strong>.</li>
              <li>Windows detects <code className="text-emerald-300">Nokia USB ROM (VID_0421)</code> and flashing begins immediately!</li>
            </ol>
          </div>
        </div>
      )}

      {/* Mode Content: 5. Sony Ericsson Flash Mode Guide */}
      {flashMode === 'guided_se' && (
        <div className="p-8 rounded-2xl bg-surface-850 border border-surface-750 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Disc className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Sony Ericsson Java (A2 Platform) Flashing Guide</h2>
              <p className="text-xs text-slate-400">Flash and debrand Cyber-shot and Walkman Java series phones (K800, W810, W995, C905)</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-surface-800/80 border border-surface-700">
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono font-bold text-[10px] block w-fit mb-2">
                MAIN (MBN)
              </span>
              <h4 className="font-bold text-white text-xs">Main Firmware Binary</h4>
              <p className="text-[11px] text-slate-400 mt-1">Core operating system software and baseband radio drivers.</p>
            </div>
            <div className="p-4 rounded-xl bg-surface-800/80 border border-surface-700">
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono font-bold text-[10px] block w-fit mb-2">
                FS (FBN)
              </span>
              <h4 className="font-bold text-white text-xs">File System Image</h4>
              <p className="text-[11px] text-slate-400 mt-1">Language packs, default Walkman skins, T9 dictionary, and themes.</p>
            </div>
            <div className="p-4 rounded-xl bg-surface-800/80 border border-surface-700">
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono font-bold text-[10px] block w-fit mb-2">
                CDA / CUSTOM
              </span>
              <h4 className="font-bold text-white text-xs">Customization Pack</h4>
              <p className="text-[11px] text-slate-400 mt-1">Debrands operator locks and finishes the file system installation.</p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-surface-900/60 border border-surface-750 space-y-3">
            <h3 className="font-bold text-white text-xs">How to enter Sony Ericsson "C" Key Flash Mode:</h3>
            <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-300">
              <li>Make sure Gordon's Gate USB Flash Driver is installed.</li>
              <li>Power off the phone and remove battery for 5 seconds, then re-insert battery.</li>
              <li>Press and hold down the <strong className="text-white">"C" Key</strong> (or keys <strong className="text-white">2 + 5</strong> on slider phones).</li>
              <li>While holding the key, connect the FastPort / USB cable to PC.</li>
              <li>The tool (A2 Flashtool / XS++) will detect the phone CID and start flashing.</li>
            </ol>
          </div>
        </div>
      )}

      {/* Mode Content: 6. Samsung Keypad FlashLoader Guide */}
      {flashMode === 'guided_samsung_keypad' && (
        <div className="p-8 rounded-2xl bg-surface-850 border border-surface-750 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Samsung Keypad (Java Feature Phone) Flashing</h2>
              <p className="text-xs text-slate-400">Flash Samsung Guru Music 2, Metro 313, Duos E2252, and C3322 using Flash Loader & SPD Tool</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-xl bg-surface-800/80 border border-surface-700 space-y-3">
              <h4 className="font-bold text-white text-xs">Method A: Spreadtrum SPD Flash Tool (Guru Music / Metro 313)</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                1. Load the <code>.PAC</code> firmware file into SPD Upgrade Tool / ResearchDownload.<br />
                2. Click the Play / Start button.<br />
                3. Remove battery from Samsung phone, then re-insert battery.<br />
                4. Press and hold the <strong className="text-white">Center OK / Home Key</strong>.<br />
                5. While holding OK, plug in the micro-USB cable. Release when progress bar turns blue.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface-800/80 border border-surface-700 space-y-3">
              <h4 className="font-bold text-white text-xs">Method B: Flash Loader 7.4.7 (Duos E2252 / C3322)</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                1. Select Main .PTT file and load <code>.cla</code>, <code>.tfs</code>, and <code>.csc</code> files.<br />
                2. Click <strong className="text-white">START</strong>.<br />
                3. Hold down keys <strong className="text-white">1 + 3</strong> or <strong className="text-white">Center OK</strong> while plugging in USB cable without battery, then insert battery.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Mode Content: 7. Honor dload & eRecovery Guide */}
      {flashMode === 'guided_honor' && (
        <div className="p-8 rounded-2xl bg-surface-850 border border-surface-750 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Honor Stock Firmware Flashing Guide</h2>
              <p className="text-xs text-slate-400">Official dload Service Method (UPDATE.APP), Fastboot Mode, and Honor eRecovery</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Method 1: dload Service Mode */}
            <div className="p-5 rounded-xl bg-surface-800/80 border border-surface-700 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-300">
                  RECOMMENDED FOR BRICKED PHONES
                </span>
              </div>
              <h4 className="font-bold text-white text-xs">Method 1: SD Card / OTG dload Mode (UPDATE.APP)</h4>
              <ol className="list-decimal list-inside space-y-2 text-xs text-slate-300 leading-relaxed">
                <li>Prepare a MicroSD Card or USB-OTG drive formatted as <strong className="text-white">FAT32 or exFAT</strong>.</li>
                <li>Create a folder named <code className="text-cyan-300">dload</code> in the root directory.</li>
                <li>Extract the firmware and copy <code className="text-cyan-300">UPDATE.APP</code> (and regional update files) into the <code className="text-cyan-300">dload</code> folder.</li>
                <li>Turn off your Honor phone completely.</li>
                <li>Press and hold <strong className="text-white">Volume Up + Volume Down + Power</strong> simultaneously.</li>
                <li>Release keys when the Honor Software Upgrade screen appears. The update will verify and flash automatically!</li>
              </ol>
            </div>

            {/* Method 2: Fastboot & eRecovery Mode */}
            <div className="p-5 rounded-xl bg-surface-800/80 border border-surface-700 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/20 text-indigo-300">
                  MODERN MAGICOSE RECOVERY
                </span>
              </div>
              <h4 className="font-bold text-white text-xs">Method 2: Honor Fastboot & Wi-Fi eRecovery</h4>
              <ol className="list-decimal list-inside space-y-2 text-xs text-slate-300 leading-relaxed">
                <li><strong className="text-white">Fastboot Mode:</strong> Power off phone. Hold <strong className="text-white">Volume Down</strong> and plug in USB cable connected to PC. The white Fastboot / Rescue screen will appear.</li>
                <li><strong className="text-white">eRecovery Wi-Fi Restore:</strong> Power off phone. Hold <strong className="text-white">Volume Up + Power</strong> while USB is connected. Choose <strong className="text-white">"Download latest version and recovery"</strong> to install official certified firmware directly over Wi-Fi.</li>
                <li><strong className="text-white">Honor Suite:</strong> Connect phone in normal mode or eRecovery and select System Update / Recovery in Honor PC Suite.</li>
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
