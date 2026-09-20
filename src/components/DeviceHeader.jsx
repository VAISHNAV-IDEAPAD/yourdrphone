import React from 'react';
import { Smartphone, RefreshCw, Battery, ShieldAlert, Cpu, CheckCircle2 } from 'lucide-react';

export default function DeviceHeader({ connectedDevice, isScanning, onScan, onSelectDevice }) {
  return (
    <header className="h-16 bg-surface-850/80 backdrop-blur border-b border-surface-750 px-6 flex items-center justify-between shrink-0">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2.5">
          <div className={`p-2 rounded-lg ${connectedDevice ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-surface-800 text-slate-400'}`}>
            <Smartphone className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold text-white">
                {connectedDevice ? connectedDevice.model : 'Ready for Connection'}
              </h2>
              {connectedDevice && (
                <span className="text-[10px] uppercase font-bold tracking-wide px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {connectedDevice.state}
                </span>
              )}
            </div>
            <p className="text-xs text-slate-400">
              {connectedDevice 
                ? `Mode: ${connectedDevice.mode} • Serial: ${connectedDevice.serial}`
                : 'Connect Android (USB Debugging/Fastboot) or Apple iOS device via USB'}
            </p>
          </div>
        </div>
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-3">
        {connectedDevice && connectedDevice.batteryLevel && (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-800 border border-surface-700 text-xs text-slate-300">
            <Battery className="w-3.5 h-3.5 text-emerald-400" />
            <span>{connectedDevice.batteryLevel}</span>
          </div>
        )}

        <button
          onClick={onScan}
          disabled={isScanning}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-800 hover:bg-surface-750 text-slate-200 border border-surface-700 text-xs font-semibold transition active:scale-95 disabled:opacity-50"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin text-brand-400' : 'text-slate-400'}`} />
          <span>{isScanning ? 'Scanning USB...' : 'Scan Devices'}</span>
        </button>
      </div>
    </header>
  );
}
