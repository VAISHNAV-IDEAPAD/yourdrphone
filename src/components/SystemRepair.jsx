import React, { useState } from 'react';
import { 
  Wrench, 
  ShieldCheck, 
  Smartphone, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight, 
  RefreshCw, 
  Flame, 
  HardDrive,
  Cpu,
  Layers
} from 'lucide-react';

export default function SystemRepair({ connectedDevice, onNavigate, onPrepareFlash }) {
  const [osType, setOsType] = useState('ios'); // ios or android
  const [repairMode, setRepairMode] = useState('standard'); // standard (no data loss) or advanced (clean wipe)
  const [selectedIssue, setSelectedIssue] = useState(null);

  const iosIssues = [
    'Stuck on White / Black Apple Logo',
    'iPhone Boot Loop (Keeps Restarting)',
    'Stuck in Recovery Mode (Connect to PC screen)',
    'Black Screen of Death (Device vibrates but no display)',
    'Frozen Screen / Touch Not Responding',
    'iTunes Restore Error 4013, 9, 14, 1110'
  ];

  const androidIssues = [
    'Stuck on Brand Boot Logo (Samsung / Pixel / Mi)',
    'System UI has stopped / Constant App Crashes',
    'Stuck in Fastboot or Download Mode',
    'Soft Brick after OTA Update or Custom ROM',
    'Bootlooping after Root / Magisk Module',
    'Screen Locked with Forgotten Pattern/PIN'
  ];

  const issues = osType === 'ios' ? iosIssues : androidIssues;

  const handleStartRepair = () => {
    // Direct user to Firmware Hub to acquire the specific verified firmware
    onNavigate('firmware');
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-extrabold text-white">System Repair Center</h1>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
            Dr.Fone Engine
          </span>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          Resolve over 150+ iOS and Android system errors, bootloops, frozen screens, and soft bricks.
        </p>
      </div>

      {/* OS Type Selector */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => { setOsType('ios'); setSelectedIssue(null); }}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs transition border ${
            osType === 'ios'
              ? 'bg-brand-600 border-brand-500 text-white shadow-lg shadow-brand-600/30'
              : 'bg-surface-850 border-surface-750 text-slate-400 hover:text-white'
          }`}
        >
          <span className="text-sm"></span>
          <span>Apple iOS / iPadOS Repair</span>
        </button>

        <button
          onClick={() => { setOsType('android'); setSelectedIssue(null); }}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs transition border ${
            osType === 'android'
              ? 'bg-brand-600 border-brand-500 text-white shadow-lg shadow-brand-600/30'
              : 'bg-surface-850 border-surface-750 text-slate-400 hover:text-white'
          }`}
        >
          <Smartphone className="w-4 h-4 text-emerald-400" />
          <span>Android System Repair</span>
        </button>
      </div>

      {/* Repair Modes Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Mode 1: Standard Repair */}
        <div
          onClick={() => setRepairMode('standard')}
          className={`p-6 rounded-2xl cursor-pointer border transition ${
            repairMode === 'standard'
              ? 'bg-brand-600/10 border-brand-500 shadow-xl'
              : 'bg-surface-850 border-surface-750 hover:border-surface-600'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Standard Mode (Retain Data)</h3>
                <span className="text-[10px] font-bold text-emerald-400">Zero Data Loss</span>
              </div>
            </div>
            <input
              type="radio"
              checked={repairMode === 'standard'}
              onChange={() => setRepairMode('standard')}
              className="text-brand-600 focus:ring-0"
            />
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Repairs common system glitches, bootloops, and frozen screens by re-installing core system software without erasing personal photos, WhatsApp messages, or app data.
          </p>
        </div>

        {/* Mode 2: Advanced Deep Repair */}
        <div
          onClick={() => setRepairMode('advanced')}
          className={`p-6 rounded-2xl cursor-pointer border transition ${
            repairMode === 'advanced'
              ? 'bg-rose-500/10 border-rose-500 shadow-xl'
              : 'bg-surface-850 border-surface-750 hover:border-surface-600'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Advanced Deep Repair</h3>
                <span className="text-[10px] font-bold text-rose-400">Full Factory Clean Wipe</span>
              </div>
            </div>
            <input
              type="radio"
              checked={repairMode === 'advanced'}
              onChange={() => setRepairMode('advanced')}
              className="text-rose-600 focus:ring-0"
            />
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Completely re-formats all storage partitions and installs pristine factory firmware. Resolves stubborn hardware communication errors and severe bricked states.
          </p>
        </div>
      </div>

      {/* Select Problem / Issue */}
      <div className="p-6 rounded-2xl bg-surface-850 border border-surface-750 space-y-4">
        <h2 className="text-sm font-bold text-white uppercase tracking-wider">
          Select What Happened to Your Device:
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {issues.map((issue, idx) => {
            const isSelected = selectedIssue === issue;
            return (
              <button
                key={idx}
                onClick={() => setSelectedIssue(issue)}
                className={`p-3.5 rounded-xl text-left text-xs font-semibold transition border flex items-center justify-between ${
                  isSelected
                    ? 'bg-brand-600/20 border-brand-500 text-white'
                    : 'bg-surface-800/60 border-surface-750 hover:bg-surface-800 text-slate-300'
                }`}
              >
                <span>{issue}</span>
                {isSelected && <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 ml-2" />}
              </button>
            );
          })}
        </div>

        {/* Repair Action Step */}
        <div className="pt-4 border-t border-surface-750 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            {selectedIssue ? (
              <span className="text-slate-200">
                Selected issue: <strong className="text-white">{selectedIssue}</strong>
              </span>
            ) : (
              <span>Select an issue from above to proceed with diagnostic repair.</span>
            )}
          </div>

          <button
            onClick={handleStartRepair}
            disabled={!selectedIssue}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-500 hover:from-brand-500 hover:to-indigo-400 disabled:opacity-40 text-white font-bold text-xs shadow-lg shadow-brand-600/30 transition active:scale-95"
          >
            <span>Proceed to Download Firmware</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
