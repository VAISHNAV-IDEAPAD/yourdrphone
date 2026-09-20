import React from 'react';
import { 
  Wrench, 
  DownloadCloud, 
  Flame, 
  TerminalSquare, 
  Smartphone, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  HardDrive,
  Cpu,
  RefreshCw,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

export default function Dashboard({ 
  onNavigate, 
  connectedDevice, 
  deviceDetails, 
  onQuickDownload,
  driverStatus 
}) {
  const quickFeatures = [
    {
      id: 'repair',
      title: 'System Repair',
      desc: 'Fix bootloops, black screen, frozen recovery, and Apple logo without data loss.',
      icon: Wrench,
      gradient: 'from-blue-600 to-cyan-500',
      tag: 'Most Popular'
    },
    {
      id: 'firmware',
      title: 'Firmware Download Hub',
      desc: 'Download official signed stock firmwares for Apple iOS, Samsung, Pixel & Xiaomi.',
      icon: DownloadCloud,
      gradient: 'from-brand-600 to-indigo-500',
      tag: 'Live Catalog'
    },
    {
      id: 'flasher',
      title: 'Flash & Install',
      desc: 'Automated Fastboot partition flasher, ADB sideload, and Odin/DFU guided restoration.',
      icon: Flame,
      gradient: 'from-amber-600 to-rose-500',
      tag: 'Flash Engine'
    },
    {
      id: 'toolbox',
      title: 'Phone Toolbox',
      desc: '1-click reboot to Bootloader/Recovery/EDL, FRP unlock guide & hardware inspector.',
      icon: TerminalSquare,
      gradient: 'from-emerald-600 to-teal-500',
      tag: 'Tech Tools'
    }
  ];

  const trendingFirmwares = [
    {
      brand: 'Apple',
      model: 'iPhone 15 Pro Max',
      version: 'iOS 18.0 (Official Signed)',
      size: '7.85 GB',
      brandId: 'apple',
      modelCode: 'iPhone16,2',
      url: 'https://updates.cdn-apple.com/2024FallFCS/fullrestores/iOS18/iPhone16,2_18.0_22A3354_Restore.ipsw'
    },
    {
      brand: 'Samsung',
      model: 'Galaxy S24 Ultra (INS)',
      version: 'One UI 6.1.1 / Android 14',
      size: '13.8 GB',
      brandId: 'samsung',
      modelCode: 'SM-S928B',
      url: 'https://samfw.com/firmware/SM-S928B/INS/S928BXXU3AXH7'
    },
    {
      brand: 'Google',
      model: 'Pixel 9 Pro XL',
      version: 'Android 15 (AP3A.241005.015)',
      size: '3.42 GB',
      brandId: 'google',
      modelCode: 'komodo',
      url: 'https://dl.google.com/developers/android/vic/images/factory/komodo-ap3a.241005.015-factory-42a98e1e.zip'
    },
    {
      brand: 'Xiaomi',
      model: 'Xiaomi 14 Ultra (Global)',
      version: 'HyperOS 1.0 (OS1.0.12.0.UNAMIXM)',
      size: '7.8 GB',
      brandId: 'xiaomi',
      modelCode: 'aurora',
      url: 'https://bigota.d.miui.com/OS1.0.12.0.UNAMIXM/aurora_global_images_OS1.0.12.0.UNAMIXM_20240810.0000.00_14.0_glo_281290bbfa.tgz'
    }
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-surface-850 via-surface-800 to-indigo-950/40 border border-surface-700/80 p-8 shadow-2xl">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-semibold mb-4">
            <Zap className="w-3.5 h-3.5 text-brand-400" />
            Next-Gen Mobile Firmware & Repair Station
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
            Fix, Recover & Flash Any Smartphone with Ease
          </h1>
          <p className="mt-3 text-slate-300 text-sm leading-relaxed">
            Universal firmware downloader with direct Apple CDN, Samsung stock multi-file ROMs, Google Pixel factory images, and automated fastboot flashing tools.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('firmware')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shadow-lg shadow-brand-600/30 transition active:scale-95"
            >
              <DownloadCloud className="w-4 h-4" />
              <span>Browse Firmwares</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
            <button
              onClick={() => onNavigate('flasher')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-750 hover:bg-surface-700 text-slate-100 font-semibold text-sm border border-surface-600 transition active:scale-95"
            >
              <Flame className="w-4 h-4 text-amber-400" />
              <span>Flash Connected Phone</span>
            </button>
          </div>
        </div>

        {/* Subtle decorative background glow */}
        <div className="absolute -right-16 -top-16 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Connected Device Card or Connection Prompt */}
      {connectedDevice ? (
        <div className="p-6 rounded-2xl bg-surface-850 border border-emerald-500/30 shadow-xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
                <Smartphone className="w-8 h-8" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">Active Device Connected</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <h3 className="text-xl font-bold text-white mt-0.5">{connectedDevice.model}</h3>
                <p className="text-xs text-slate-400">
                  Serial: <span className="font-mono text-slate-300">{connectedDevice.serial}</span> • Mode: <span className="text-emerald-300 font-semibold">{connectedDevice.mode}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('flasher')}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition"
              >
                Flash Firmware to Device
              </button>
              <button
                onClick={() => onNavigate('toolbox')}
                className="px-4 py-2 rounded-xl bg-surface-800 hover:bg-surface-750 text-slate-200 border border-surface-700 font-semibold text-xs transition"
              >
                Device Toolbox
              </button>
            </div>
          </div>

          {/* Deep specs if available */}
          {deviceDetails && (
            <div className="mt-5 pt-4 border-t border-surface-750 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-surface-800/60 border border-surface-700">
                <span className="text-slate-400">Android Version</span>
                <p className="font-bold text-white mt-1">{deviceDetails.androidVersion || 'N/A'}</p>
              </div>
              <div className="p-3 rounded-xl bg-surface-800/60 border border-surface-700">
                <span className="text-slate-400">Security Patch</span>
                <p className="font-bold text-white mt-1">{deviceDetails.securityPatch || 'N/A'}</p>
              </div>
              <div className="p-3 rounded-xl bg-surface-800/60 border border-surface-700">
                <span className="text-slate-400">Bootloader Lock</span>
                <p className="font-bold text-white mt-1">{deviceDetails.bootloaderLocked || 'Unknown'}</p>
              </div>
              <div className="p-3 rounded-xl bg-surface-800/60 border border-surface-700">
                <span className="text-slate-400">Battery Level</span>
                <p className="font-bold text-white mt-1">{deviceDetails.batteryLevel || 'Unknown'}</p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="p-6 rounded-2xl bg-surface-850/60 border border-dashed border-surface-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-surface-800 flex items-center justify-center text-slate-400">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">No Physical Phone Connected</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Connect your Android or iPhone via USB cable to unlock 1-click repair, diagnostics, and automated partition flashing.
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('drivers')}
            className="shrink-0 px-4 py-2 rounded-xl bg-surface-800 hover:bg-surface-750 text-slate-200 border border-surface-700 text-xs font-semibold"
          >
            Check USB Drivers
          </button>
        </div>
      )}

      {/* 4 Main Module Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {quickFeatures.map((feat) => {
          const Icon = feat.icon;
          return (
            <div
              key={feat.id}
              onClick={() => onNavigate(feat.id)}
              className="group cursor-pointer p-6 rounded-2xl bg-surface-850 hover:bg-surface-800 border border-surface-750 hover:border-surface-600 transition-all duration-200 hover:-translate-y-1 shadow-lg hover:shadow-xl relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${feat.gradient} flex items-center justify-center text-white shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-surface-750 text-slate-300">
                    {feat.tag}
                  </span>
                </div>
                <h3 className="font-bold text-white text-base group-hover:text-brand-300 transition">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-surface-750/70 flex items-center text-xs font-semibold text-brand-400 group-hover:text-brand-300">
                <span>Open Tool</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 transition transform group-hover:translate-x-1" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Trending / Recommended Official Firmwares */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white">Latest Stock Firmwares</h2>
            <p className="text-xs text-slate-400">Direct high-speed official downloads with checksum verification</p>
          </div>
          <button
            onClick={() => onNavigate('firmware')}
            className="text-xs font-semibold text-brand-400 hover:text-brand-300 flex items-center gap-1"
          >
            <span>View All Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trendingFirmwares.map((fw, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-surface-850 border border-surface-750 hover:border-surface-600 transition flex items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-surface-750 text-slate-300">
                    {fw.brand}
                  </span>
                  <span className="text-xs font-bold text-white">{fw.model}</span>
                </div>
                <p className="text-xs text-slate-400">{fw.version}</p>
                <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                  <span>Size: {fw.size}</span>
                  <span>•</span>
                  <span className="text-emerald-400 font-medium">Verified Official</span>
                </div>
              </div>

              <button
                onClick={() => onQuickDownload(fw)}
                className="shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand-600/90 hover:bg-brand-600 text-white font-semibold text-xs transition shadow-md"
              >
                <DownloadCloud className="w-3.5 h-3.5" />
                <span>Download</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
