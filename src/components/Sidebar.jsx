import React from 'react';
import { 
  LayoutDashboard, 
  Wrench, 
  DownloadCloud, 
  Flame, 
  FolderDown, 
  TerminalSquare, 
  ShieldCheck, 
  Usb,
  Smartphone
} from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, downloadCount = 0, connectedDevice, wsConnected }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: null },
    { id: 'firmware', label: 'Firmware Hub', icon: DownloadCloud, badge: 'Live' },
    { id: 'flasher', label: 'Flash & Install', icon: Flame, badge: null },
    { id: 'downloads', label: 'Downloads', icon: FolderDown, badge: downloadCount > 0 ? downloadCount : null },
    { id: 'repair', label: 'System Repair', icon: Wrench, badge: null },
    { id: 'toolbox', label: 'Phone Toolbox', icon: TerminalSquare, badge: null },
    { id: 'drivers', label: 'Driver Doctor', icon: Usb, badge: null },
  ];

  return (
    <aside className="w-64 bg-surface-850 border-r border-surface-750 flex flex-col justify-between shrink-0 select-none">
      {/* App Header */}
      <div>
        <div className="p-5 border-b border-surface-750">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-400 flex items-center justify-center shadow-lg shadow-brand-500/25">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-brand-300 bg-clip-text text-transparent">
                  Dr.Firmware
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-brand-500/20 text-brand-300 border border-brand-500/30">
                  PRO
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">Universal Repair Suite</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="p-3 space-y-1">
          <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Main Features
          </div>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-150 ${
                  isActive
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30 font-semibold'
                    : 'text-slate-300 hover:bg-surface-800 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : item.badge === 'Live'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-brand-500 text-white'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Connection & Status Footer */}
      <div className="p-4 border-t border-surface-750 bg-surface-900/60 m-3 rounded-2xl">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-slate-300">Device Link</span>
          <div className="flex items-center gap-1.5">
            <span
              className={`w-2 h-2 rounded-full ${
                connectedDevice ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'
              }`}
            />
            <span className="text-[11px] text-slate-400">
              {connectedDevice ? 'Online' : 'Searching'}
            </span>
          </div>
        </div>

        {connectedDevice ? (
          <div className="p-2.5 rounded-xl bg-surface-800 border border-emerald-500/30 text-xs">
            <p className="font-bold text-slate-200 truncate">{connectedDevice.model}</p>
            <p className="text-[10px] text-emerald-400 font-mono mt-0.5 truncate">
              {connectedDevice.mode}
            </p>
          </div>
        ) : (
          <div className="p-2.5 rounded-xl bg-surface-800/80 border border-surface-700 text-xs text-slate-400">
            <p className="text-[11px] text-slate-400">No phone detected.</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Plug in via USB cable</p>
          </div>
        )}

        <div className="mt-3 pt-2 border-t border-surface-750/60 flex items-center justify-between text-[10px] text-slate-500">
          <span>Engine v1.0.4</span>
          <span className="flex items-center gap-1">
            <span className={`w-1.5 h-1.5 rounded-full ${wsConnected ? 'bg-indigo-400' : 'bg-amber-400'}`} />
            {wsConnected ? 'Sync Ready' : 'Connecting'}
          </span>
        </div>
      </div>
    </aside>
  );
}
