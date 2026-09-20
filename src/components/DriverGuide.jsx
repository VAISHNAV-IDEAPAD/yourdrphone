import React, { useState, useEffect } from 'react';
import { 
  Usb, 
  CheckCircle2, 
  XCircle, 
  RefreshCw, 
  ExternalLink, 
  DownloadCloud, 
  AlertTriangle,
  Smartphone,
  Cpu
} from 'lucide-react';

export default function DriverGuide({ driverStatus, onScanDrivers }) {
  const [checking, setChecking] = useState(false);

  const driversList = [
    {
      name: 'Android Debug Bridge (ADB) & Fastboot',
      brand: 'Google / AOSP',
      desc: 'Enables device communication, system profiling, partition flashing, and 1-click reboot commands.',
      status: driverStatus?.adb ? 'Installed (Active)' : 'Bundled with Suite',
      isOk: true,
      url: 'https://developer.android.com/tools/releases/platform-tools'
    },
    {
      name: 'Samsung Mobile USB Driver v1.7.59',
      brand: 'Samsung Electronics',
      desc: 'Required for Odin 4-file flashing, Download Mode communication, and Galaxy device detection.',
      status: driverStatus?.samsung ? 'Detected on System' : 'Recommended for Samsung Phones',
      isOk: driverStatus?.samsung || false,
      url: 'https://developer.samsung.com/android-usb-driver'
    },
    {
      name: 'Apple Mobile Device Support / USBDk',
      brand: 'Apple Inc.',
      desc: 'Required for iPhone & iPad DFU mode, Recovery Mode communication, and IPSW restore.',
      status: driverStatus?.apple ? 'Detected on System' : 'Recommended for Apple Devices',
      isOk: driverStatus?.apple || false,
      url: 'https://support.apple.com/en-us/HT210384'
    },
    {
      name: 'Qualcomm HS-USB QDLoader 9008 Driver',
      brand: 'Qualcomm',
      desc: 'Required for emergency unbricking (EDL mode) on Xiaomi, OnePlus, Motorola, and Oppo devices.',
      status: 'Optional (Emergency EDL)',
      isOk: true,
      url: 'https://www.qualcomm.com'
    },
    {
      name: 'MediaTek (MTK) USB VCOM Driver',
      brand: 'MediaTek Inc.',
      desc: 'Required for flashing MediaTek Dimensity and Helio chipset smartphones via SP Flash Tool.',
      status: 'Optional (MTK Devices)',
      isOk: true,
      url: 'https://www.mediatek.com'
    }
  ];

  const handleRefresh = async () => {
    setChecking(true);
    await onScanDrivers();
    setChecking(false);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-white">Driver Doctor & USB Diagnostics</h1>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Plug & Play
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Ensure your Windows PC has verified OEM USB drivers to avoid disconnection during flashing.
          </p>
        </div>

        <button
          onClick={handleRefresh}
          disabled={checking}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-850 hover:bg-surface-800 text-slate-200 border border-surface-750 text-xs font-semibold transition"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${checking ? 'animate-spin text-brand-400' : 'text-slate-400'}`} />
          <span>{checking ? 'Scanning Drivers...' : 'Scan Drivers'}</span>
        </button>
      </div>

      {/* Driver Cards */}
      <div className="space-y-4">
        {driversList.map((driver, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-surface-850 border border-surface-750 flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-xl mt-0.5 ${driver.isOk ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>
                <Usb className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-white text-sm">{driver.name}</h3>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-surface-750 text-slate-300">
                    {driver.brand}
                  </span>
                </div>
                <p className="text-xs text-slate-400 max-w-2xl">{driver.desc}</p>
                <div className="flex items-center gap-2 text-xs pt-1">
                  <span className={`flex items-center gap-1 font-semibold ${driver.isOk ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {driver.isOk ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertTriangle className="w-3.5 h-3.5" />}
                    {driver.status}
                  </span>
                </div>
              </div>
            </div>

            <a
              href={driver.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface-800 hover:bg-surface-750 text-slate-200 border border-surface-700 text-xs font-semibold transition"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Driver Page</span>
            </a>
          </div>
        ))}
      </div>

      {/* Pro Tech Tip */}
      <div className="p-5 rounded-2xl bg-surface-900/60 border border-surface-750 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="text-xs text-slate-300 space-y-1">
          <h4 className="font-bold text-white">Technician Best Practice for Flashing</h4>
          <p className="text-slate-400 leading-relaxed">
            Always plug your USB cable directly into the motherboard's rear USB 2.0 or USB 3.0 port on desktop PCs (or directly into the laptop port without external USB hubs) to avoid sudden packet dropouts while writing partition data.
          </p>
        </div>
      </div>
    </div>
  );
}
