import React, { useState, useEffect } from 'react';
import { 
  DownloadCloud, 
  X, 
  CheckCircle2, 
  AlertCircle, 
  HardDrive, 
  Flame, 
  Folder, 
  Link, 
  RefreshCw,
  Clock,
  ShieldCheck,
  Play
} from 'lucide-react';

export default function DownloadManager({ downloads, onCancelDownload, onPrepareFlash, onStartManualDownload }) {
  const [localFiles, setLocalFiles] = useState([]);
  const [loadingLocal, setLoadingLocal] = useState(false);
  const [manualUrl, setManualUrl] = useState('');
  const [manualName, setManualName] = useState('');

  useEffect(() => {
    fetchLocalDownloads();
  }, [downloads]);

  const fetchLocalDownloads = async () => {
    setLoadingLocal(true);
    try {
      const res = await fetch('/api/downloads/local');
      const data = await res.json();
      if (data.success) {
        setLocalFiles(data.files || []);
      }
    } catch (err) {
      console.error('Failed to load local downloads:', err);
    } finally {
      setLoadingLocal(false);
    }
  };

  const handleManualSubmit = (e) => {
    e.preventDefault();
    if (!manualUrl) return;
    onStartManualDownload({
      url: manualUrl.trim(),
      filename: manualName.trim() || undefined
    });
    setManualUrl('');
    setManualName('');
  };

  const activeDownloads = downloads.filter((d) => d.status !== 'completed' && d.status !== 'error');

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Download Center & Library</h1>
          <p className="text-xs text-slate-400 mt-1">
            High-speed chunked downloads with automatic hash verification and local file library.
          </p>
        </div>

        <button
          onClick={fetchLocalDownloads}
          disabled={loadingLocal}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-850 hover:bg-surface-800 text-slate-200 border border-surface-750 text-xs font-semibold"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loadingLocal ? 'animate-spin text-brand-400' : 'text-slate-400'}`} />
          <span>Refresh Local Files</span>
        </button>
      </div>

      {/* Manual URL Downloader Bar */}
      <form onSubmit={handleManualSubmit} className="p-4 rounded-2xl bg-surface-850 border border-surface-750 flex flex-col md:flex-row gap-3">
        <div className="flex-1 relative">
          <Link className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="url"
            placeholder="Paste any direct firmware URL (.ipsw, .zip, .tgz, .tar.md5)..."
            value={manualUrl}
            onChange={(e) => setManualUrl(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-surface-800 border border-surface-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
          />
        </div>
        <div className="w-full md:w-64">
          <input
            type="text"
            placeholder="Custom Filename (Optional)"
            value={manualName}
            onChange={(e) => setManualName(e.target.value)}
            className="w-full px-4 py-2 rounded-xl bg-surface-800 border border-surface-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
          />
        </div>
        <button
          type="submit"
          disabled={!manualUrl}
          className="px-5 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 disabled:opacity-50 text-white font-semibold text-xs flex items-center justify-center gap-2 transition"
        >
          <DownloadCloud className="w-4 h-4" />
          <span>Start Download</span>
        </button>
      </form>

      {/* Active Downloads Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <span>Active Downloads</span>
            {activeDownloads.length > 0 && (
              <span className="w-5 h-5 rounded-full bg-brand-600 text-white text-[10px] font-bold flex items-center justify-center">
                {activeDownloads.length}
              </span>
            )}
          </h2>
        </div>

        {downloads.length === 0 ? (
          <div className="p-8 rounded-2xl bg-surface-850/50 border border-surface-750 text-center text-xs text-slate-400">
            No active downloads. Browse the <span className="text-brand-400 font-semibold">Firmware Hub</span> to start downloading.
          </div>
        ) : (
          <div className="space-y-3">
            {downloads.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-surface-850 border border-surface-750 space-y-3 shadow-lg"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-surface-750 text-slate-300">
                        {item.brand}
                      </span>
                      <h3 className="font-bold text-white text-sm truncate">{item.filename}</h3>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">{item.model} • {item.version}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        item.status === 'completed'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : item.status === 'error'
                          ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                          : 'bg-brand-500/20 text-brand-300 border border-brand-500/30 animate-pulse'
                      }`}
                    >
                      {item.status}
                    </span>

                    {item.status !== 'completed' && (
                      <button
                        onClick={() => onCancelDownload(item.id)}
                        className="p-1.5 rounded-lg bg-surface-800 hover:bg-surface-750 text-slate-400 hover:text-rose-400 transition"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}

                    {item.status === 'completed' && (
                      <button
                        onClick={() => onPrepareFlash({
                          firmware: { version: item.version },
                          model: item.model,
                          brand: item.brand,
                          localFilePath: item.filePath
                        })}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 text-xs font-semibold transition"
                      >
                        <Flame className="w-3.5 h-3.5" />
                        <span>Flash This</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1.5">
                  <div className="w-full h-2.5 rounded-full bg-surface-800 overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        item.status === 'completed'
                          ? 'bg-emerald-500'
                          : item.status === 'error'
                          ? 'bg-rose-500'
                          : 'bg-gradient-to-r from-brand-600 to-indigo-400'
                      }`}
                      style={{ width: `${item.progress || 0}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <div className="flex items-center gap-3">
                      <span>{item.progress}% Completed</span>
                      <span>Speed: {item.speed}</span>
                      <span>ETA: {item.eta}</span>
                    </div>

                    {item.hashMatch && (
                      <span className="flex items-center gap-1 text-emerald-400 font-medium">
                        <ShieldCheck className="w-3.5 h-3.5" /> Hash Verified
                      </span>
                    )}
                  </div>
                </div>

                {item.error && (
                  <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-300 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{item.error}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Local Firmware Library */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Folder className="w-4 h-4 text-brand-400" />
              <span>Downloaded Firmware Library ({localFiles.length})</span>
            </h2>
            <p className="text-xs text-slate-400">Firmwares stored locally ready for offline flashing</p>
          </div>
        </div>

        {localFiles.length === 0 ? (
          <div className="p-8 rounded-2xl bg-surface-850/50 border border-surface-750 text-center text-xs text-slate-500">
            No local firmware packages detected in downloads directory.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {localFiles.map((f, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-surface-850 border border-surface-750 hover:border-surface-600 transition flex items-center justify-between gap-3"
              >
                <div className="space-y-1 truncate">
                  <p className="font-bold text-white text-xs truncate">{f.filename}</p>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                    <span className="text-emerald-400">{f.size}</span>
                    <span>•</span>
                    <span className="uppercase">{f.extension}</span>
                  </div>
                </div>

                <button
                  onClick={() => onPrepareFlash({
                    firmware: { version: f.filename },
                    model: 'Local Firmware',
                    brand: 'Local',
                    localFilePath: f.path
                  })}
                  className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 text-xs font-semibold transition"
                >
                  <Flame className="w-3.5 h-3.5" />
                  <span>Flash</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
