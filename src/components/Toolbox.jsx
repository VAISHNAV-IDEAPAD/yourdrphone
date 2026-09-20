import React, { useState } from 'react';
import { 
  RotateCcw, 
  TerminalSquare, 
  ShieldAlert, 
  Smartphone, 
  Battery, 
  Cpu, 
  Lock, 
  Unlock, 
  Layers, 
  Info,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function Toolbox({ connectedDevice, deviceDetails, onReboot }) {
  const [rebootMsg, setRebootMsg] = useState(null);
  const [activeFRPBrand, setActiveFRPBrand] = useState('samsung');

  const handleReboot = async (target) => {
    if (!connectedDevice) {
      alert('Please connect an Android phone via USB first.');
      return;
    }
    try {
      const res = await onReboot(connectedDevice.serial, target);
      setRebootMsg({ type: 'success', text: res.message || `Rebooting to ${target}...` });
      setTimeout(() => setRebootMsg(null), 4000);
    } catch (err) {
      setRebootMsg({ type: 'error', text: err.message || 'Reboot command failed.' });
    }
  };

  const frpGuides = {
    samsung: [
      'For Android 11, 12, 13, 14: Use the Emergency Dialer code *#0*# to open test mode, then send ADB enable exploit.',
      'If test code *#0*# is blocked by modern security patches: Use Alliance Shield X or Smart Switch PC restoration method.',
      'Ensure Samsung USB Mobile drivers are installed so the PC detects modem AT commands on port COM.'
    ],
    xiaomi: [
      'Mi Account Lock: Enter Recovery Mode (Volume Up + Power), select "Connect with MIAssistant", and flash official global ROM.',
      'HyperOS / MIUI FRP: Access browser via accessibility menu / TalkBack settings, then open Settings > Second Space or Reset App Preferences.'
    ],
    google: [
      'Google Pixel FRP: Boot into setup wizard, activate TalkBack (Volume Up + Down for 3s), draw an inverted "L", tap "Use voice commands" and say "Open Google Assistant".',
      'From Google Assistant, say "Open Settings" -> Apps -> Disable Google Play Services -> Complete Setup -> Re-enable.'
    ]
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-white">Phone Toolbox & Diagnostics</h1>
        <p className="text-xs text-slate-400 mt-1">
          1-Click device power controls, hardware property inspector, and FRP unlock assistance.
        </p>
      </div>

      {/* Reboot Message Banner */}
      {rebootMsg && (
        <div className={`p-4 rounded-xl text-xs flex items-center gap-2 ${
          rebootMsg.type === 'success'
            ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-300'
            : 'bg-rose-500/10 border border-rose-500/20 text-rose-300'
        }`}>
          {rebootMsg.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
          <span>{rebootMsg.text}</span>
        </div>
      )}

      {/* 1-Click Power & Mode Switching Controls */}
      <div className="p-6 rounded-2xl bg-surface-850 border border-surface-750 space-y-4">
        <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <RotateCcw className="w-4 h-4 text-brand-400" />
          <span>1-Click Mode Switcher (ADB / Fastboot)</span>
        </h2>
        <p className="text-xs text-slate-400">
          Instantly reboot your connected phone into any recovery or bootloader state without holding physical buttons.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <button
            onClick={() => handleReboot('system')}
            className="p-3.5 rounded-xl bg-surface-800 hover:bg-surface-750 text-white border border-surface-700 font-semibold text-xs transition flex flex-col items-center gap-1.5 active:scale-95"
          >
            <RotateCcw className="w-4 h-4 text-brand-400" />
            <span>Reboot System</span>
          </button>
          <button
            onClick={() => handleReboot('recovery')}
            className="p-3.5 rounded-xl bg-surface-800 hover:bg-surface-750 text-white border border-surface-700 font-semibold text-xs transition flex flex-col items-center gap-1.5 active:scale-95"
          >
            <Layers className="w-4 h-4 text-emerald-400" />
            <span>Reboot Recovery</span>
          </button>
          <button
            onClick={() => handleReboot('bootloader')}
            className="p-3.5 rounded-xl bg-surface-800 hover:bg-surface-750 text-white border border-surface-700 font-semibold text-xs transition flex flex-col items-center gap-1.5 active:scale-95"
          >
            <Cpu className="w-4 h-4 text-amber-400" />
            <span>Reboot Fastboot</span>
          </button>
          <button
            onClick={() => handleReboot('edl')}
            className="p-3.5 rounded-xl bg-surface-800 hover:bg-surface-750 text-white border border-surface-700 font-semibold text-xs transition flex flex-col items-center gap-1.5 active:scale-95"
          >
            <ShieldAlert className="w-4 h-4 text-rose-400" />
            <span>Reboot EDL (9008)</span>
          </button>
        </div>
      </div>

      {/* Hardware & Diagnostics Details */}
      <div className="p-6 rounded-2xl bg-surface-850 border border-surface-750 space-y-4">
        <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <Info className="w-4 h-4 text-brand-400" />
          <span>Device Property Inspector</span>
        </h2>

        {connectedDevice ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-surface-800/80 border border-surface-700 space-y-1">
              <span className="text-slate-400 font-semibold">Device Model</span>
              <p className="font-bold text-white">{connectedDevice.model}</p>
              <p className="text-[11px] text-slate-500 font-mono">Serial: {connectedDevice.serial}</p>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-800/80 border border-surface-700 space-y-1">
              <span className="text-slate-400 font-semibold">Current State</span>
              <p className="font-bold text-emerald-400">{connectedDevice.state.toUpperCase()}</p>
              <p className="text-[11px] text-slate-500 font-mono">{connectedDevice.mode}</p>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-800/80 border border-surface-700 space-y-1">
              <span className="text-slate-400 font-semibold">Platform Architecture</span>
              <p className="font-bold text-white">{connectedDevice.platform.toUpperCase()}</p>
              <p className="text-[11px] text-slate-500 font-mono">USB Debug Mode</p>
            </div>
          </div>
        ) : (
          <div className="p-6 rounded-xl bg-surface-800/40 border border-surface-700 text-center text-xs text-slate-400">
            No physical device connected. Connect phone via USB to inspect hardware properties.
          </div>
        )}
      </div>

      {/* FRP (Google Account Lock) & Screen Lock Removal Guide */}
      <div className="p-6 rounded-2xl bg-surface-850 border border-surface-750 space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Unlock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                FRP & Screen Lock Bypass Assistant
              </h2>
              <p className="text-xs text-slate-400">Verified procedures for factory reset protection unlock</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-surface-800 border border-surface-700">
            {['samsung', 'xiaomi', 'google'].map((b) => (
              <button
                key={b}
                onClick={() => setActiveFRPBrand(b)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition ${
                  activeFRPBrand === b
                    ? 'bg-brand-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-surface-900/60 border border-surface-750 space-y-2.5">
          <h3 className="font-bold text-white text-xs capitalize">{activeFRPBrand} FRP Bypass Method:</h3>
          <ul className="space-y-2 text-xs text-slate-300">
            {frpGuides[activeFRPBrand]?.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-surface-750 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
