import React, { useState, useEffect } from 'react';
import { 
  DownloadCloud, 
  Search, 
  CheckCircle2, 
  XCircle, 
  HardDrive, 
  Calendar, 
  ExternalLink, 
  Copy, 
  Check, 
  Flame, 
  Sparkles,
  Smartphone,
  Info,
  Layers
} from 'lucide-react';

export default function FirmwareHub({ onStartDownload, onPrepareFlash }) {
  const [selectedBrand, setSelectedBrand] = useState('apple');
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);
  const [firmwaresData, setFirmwaresData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [loadingModels, setLoadingModels] = useState(false);
  const [loadingFirmwares, setLoadingFirmwares] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(null);
  const [onlySigned, setOnlySigned] = useState(false);

  const brands = [
    { id: 'apple', name: 'Apple iOS / iPad', logo: '' },
    { id: 'motorola', name: 'Motorola', logo: 'M' },
    { id: 'vivo', name: 'Vivo & iQOO', logo: 'vivo' },
    { id: 'oppo', name: 'Oppo & Realme', logo: 'oppo' },
    { id: 'honor', name: 'Honor', logo: 'H' },
    { id: 'redmi', name: 'Redmi Series', logo: 'Redmi' },
    { id: 'xiaomi', name: 'Xiaomi / POCO', logo: 'Mi' },
    { id: 'samsung', name: 'Samsung Galaxy', logo: 'S' },
    { id: 'google', name: 'Google Pixel', logo: 'G' },
    { id: 'oneplus', name: 'OnePlus', logo: '1+' },
    { id: 'htc', name: 'HTC', logo: 'htc' },
    { id: 'nokia', name: 'Nokia (Symbian & Java)', logo: 'N' },
    { id: 'sonyericsson', name: 'Sony Ericsson (Java)', logo: 'SE' },
    { id: 'samsung_feature', name: 'Samsung Keypad (Java)', logo: '123' },
    { id: 'blackberry', name: 'BlackBerry', logo: 'BB' },
    { id: 'jio', name: 'Reliance Jio', logo: 'Jio' },
    { id: 'micromax', name: 'Micromax', logo: 'MMX' },
    { id: 'lava', name: 'Lava', logo: 'Lava' },
    { id: 'max', name: 'Maxx Mobile', logo: 'Maxx' },
    { id: 'nokia_android', name: 'Nokia (Android)', logo: 'NOK' },
    { id: 'lg', name: 'LG Electronics', logo: 'LG' },
    { id: 'panasonic', name: 'Panasonic', logo: 'Pana' },
    { id: 'sony', name: 'Sony Xperia', logo: 'Sony' },
  ];

  // Fetch models whenever brand changes
  useEffect(() => {
    fetchModels(selectedBrand);
  }, [selectedBrand]);

  const fetchModels = async (brand) => {
    setLoadingModels(true);
    setSelectedModel(null);
    setFirmwaresData(null);

    // Direct client fetch for Apple devices for 100% reliability on Vercel & Web
    if (brand === 'apple') {
      try {
        let list = null;
        try {
          const controller = new AbortController();
          const tId = setTimeout(() => controller.abort(), 3500);
          const res = await fetch('/api/firmware/apple/models', { signal: controller.signal });
          clearTimeout(tId);
          const data = await res.json();
          if (data.success && data.models && data.models.length > 0) {
            list = data.models;
          }
        } catch (e) {}

        // If local API didn't return, directly fetch official open IPSW API in browser
        if (!list || list.length === 0) {
          const directRes = await fetch('https://api.ipsw.me/v4/devices');
          const allDevs = await directRes.json();
          list = allDevs
            .filter(d => d.identifier && (d.identifier.startsWith('iPhone') || d.identifier.startsWith('iPad')))
            .map(d => ({
              model: d.name,
              code: d.identifier,
              brand: 'apple',
              type: d.identifier.startsWith('iPhone') ? 'iPhone' : 'iPad'
            }))
            .sort((a, b) => {
              if (a.type !== b.type) return a.type === 'iPhone' ? -1 : 1;
              const numA = parseFloat((a.code.match(/\d+[\.,]?\d*/)?.[0] || '0').replace(',', '.'));
              const numB = parseFloat((b.code.match(/\d+[\.,]?\d*/)?.[0] || '0').replace(',', '.'));
              if (numA !== numB) return numB - numA;
              return a.model.localeCompare(b.model);
            });
        }

        if (list && list.length > 0) {
          setModels(list);
          selectModel('apple', list[0].code);
          setLoadingModels(false);
          return;
        }
      } catch (err) {
        console.warn('Direct Apple fetch failed, using fallback list:', err);
      }
    }

    try {
      const res = await fetch(`/api/firmware/${brand}/models`);
      const data = await res.json();
      if (data.success) {
        setModels(data.models || []);
        if (data.models && data.models.length > 0) {
          selectModel(brand, data.models[0].code);
        }
      }
    } catch (err) {
      console.error('Failed to load models:', err);
    } finally {
      setLoadingModels(false);
    }
  };

  const selectModel = async (brand, code) => {
    setSelectedModel(code);
    setLoadingFirmwares(true);

    // Direct client fetch for Apple firmwares for zero latency and real-time iOS updates
    if (brand === 'apple') {
      let loaded = false;
      try {
        const controller = new AbortController();
        const tId = setTimeout(() => controller.abort(), 3500);
        const res = await fetch(`/api/firmware/apple/${code}`, { signal: controller.signal });
        clearTimeout(tId);
        const data = await res.json();
        if (data.success && data.data && data.data.firmwares && data.data.firmwares.length > 0) {
          setFirmwaresData(data.data);
          loaded = true;
        }
      } catch (e) {}

      if (!loaded) {
        try {
          const directRes = await fetch(`https://api.ipsw.me/v4/device/${code}`);
          const ipswData = await directRes.json();
          const firmwares = (ipswData.firmwares || []).map(f => {
            const sizeGB = (f.filesize / (1024 * 1024 * 1024)).toFixed(2);
            return {
              version: `iOS ${f.version} (${f.buildid})`,
              rawVersion: f.version,
              build: f.buildid,
              date: f.releasedate ? f.releasedate.split('T')[0] : 'Official Apple',
              size: `${sizeGB} GB`,
              filesizeBytes: f.filesize,
              url: f.url,
              sha1: f.sha1sum,
              sha256: f.sha256sum,
              md5: f.md5sum,
              signed: f.signed,
              type: f.signed ? 'Official Apple Signed (Restorable)' : 'Official Apple Unsigned'
            };
          }).sort((a, b) => (b.signed === a.signed ? 0 : b.signed ? 1 : -1));

          setFirmwaresData({
            model: ipswData.name || code,
            code,
            brand: 'apple',
            boardConfig: ipswData.boardconfig,
            firmwares
          });
          loaded = true;
        } catch (err) {
          console.warn('Direct IPSW query error:', err);
        }
      }

      if (loaded) {
        setLoadingFirmwares(false);
        return;
      }
    }

    try {
      const res = await fetch(`/api/firmware/${brand}/${code}`);
      const data = await res.json();
      if (data.success) {
        setFirmwaresData(data.data);
      }
    } catch (err) {
      console.error('Failed to load firmwares:', err);
    } finally {
      setLoadingFirmwares(false);
    }
  };

  const handleCopy = (url) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  const filteredModels = models.filter((m) =>
    m.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-white">Firmware Download Hub</h1>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Official Servers
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Search, download and verify stock firmwares for Apple, Samsung, Pixel, Xiaomi, and OnePlus.
          </p>
        </div>

        {/* Brand Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-surface-850 border border-surface-750 overflow-x-auto">
          {brands.map((b) => (
            <button
              key={b.id}
              onClick={() => setSelectedBrand(b.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap flex items-center gap-2 ${
                selectedBrand === b.id
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-surface-800'
              }`}
            >
              <span className="w-5 h-5 rounded-lg bg-black/20 flex items-center justify-center text-xs font-mono font-bold">
                {b.logo}
              </span>
              <span>{b.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Two-Column Layout: Left Model Picker, Right Firmware List */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Model Selector & Search */}
        <div className="lg:col-span-4 bg-surface-850 rounded-2xl border border-surface-750 p-4 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={`Search ${selectedBrand} models...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-surface-800 border border-surface-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
            />
          </div>

          <div className="text-[11px] font-bold text-slate-400 px-1 uppercase tracking-wider flex items-center justify-between">
            <span>Available Models ({filteredModels.length})</span>
            {loadingModels && <span className="text-brand-400 animate-pulse">Loading...</span>}
          </div>

          <div className="max-h-[580px] overflow-y-auto space-y-1 pr-1">
            {filteredModels.map((m) => {
              const isSelected = selectedModel === m.code;
              return (
                <button
                  key={m.code}
                  onClick={() => selectModel(selectedBrand, m.code)}
                  className={`w-full text-left p-3 rounded-xl transition flex items-center justify-between ${
                    isSelected
                      ? 'bg-brand-600/20 border border-brand-500/50 text-white'
                      : 'bg-surface-800/40 hover:bg-surface-800 text-slate-300 border border-transparent'
                  }`}
                >
                  <div className="truncate pr-2">
                    <p className="font-semibold text-xs truncate">{m.model}</p>
                    <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                      <span className="text-[10px] text-slate-400 font-mono">{m.code}</span>
                      {m.series && (
                        <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                          {m.series}
                        </span>
                      )}
                      {m.chipset && (
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-surface-750 text-slate-400">
                          {m.chipset}
                        </span>
                      )}
                      {m.osType && (
                        <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-surface-750 text-indigo-300">
                          {m.osType}
                        </span>
                      )}
                    </div>
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-brand-400 shrink-0" />
                  )}
                </button>
              );
            })}

            {filteredModels.length === 0 && !loadingModels && (
              <div className="text-center py-8 text-xs text-slate-500">
                No matching models found.
              </div>
            )}
          </div>
        </div>

        {/* Right: Firmware Versions & Download Actions */}
        <div className="lg:col-span-8 space-y-4">
          {loadingFirmwares ? (
            <div className="bg-surface-850 rounded-2xl border border-surface-750 p-12 text-center">
              <div className="inline-block w-8 h-8 border-2 border-brand-500 border-t-transparent rounded-full animate-spin mb-3" />
              <p className="text-xs text-slate-400">Querying official firmware database...</p>
            </div>
          ) : firmwaresData ? (
            <>
              {/* Selected Model Header Banner */}
              <div className="p-5 rounded-2xl bg-surface-850 border border-surface-750 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">{firmwaresData.model}</h2>
                    <p className="text-xs text-slate-400 font-mono">
                      Identifier / Model Code: <span className="text-slate-200">{firmwaresData.code}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {selectedBrand === 'apple' && (
                    <button
                      onClick={() => setOnlySigned(!onlySigned)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 border ${
                        onlySigned
                          ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50'
                          : 'bg-surface-800 text-slate-400 border-surface-700 hover:text-white'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {onlySigned ? 'Showing Signed Only' : 'Filter Signed Only'}
                    </button>
                  )}
                  <span className="px-3 py-1.5 rounded-xl bg-surface-800 border border-surface-700 text-xs text-slate-300 font-medium">
                    {firmwaresData.firmwares
                      ? `${(onlySigned ? firmwaresData.firmwares.filter(f => f.signed) : firmwaresData.firmwares).length} Versions`
                      : 'Ready'}
                  </span>
                </div>
              </div>

              {/* Firmware Items List */}
              <div className="space-y-3">
                {firmwaresData.firmwares &&
                  firmwaresData.firmwares
                    .filter((fw) => !onlySigned || fw.signed)
                    .map((fw, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-surface-850 border border-surface-750 hover:border-surface-600 transition space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2.5">
                          <h3 className="font-bold text-white text-sm">{fw.version}</h3>
                          {fw.signed !== undefined && (
                            <span
                              className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                fw.signed
                                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                  : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                              }`}
                            >
                              {fw.signed ? (
                                <>
                                  <CheckCircle2 className="w-3 h-3" /> Signed (Flashable)
                                </>
                              ) : (
                                <>
                                  <XCircle className="w-3 h-3" /> Unsigned
                                </>
                              )}
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                          {fw.build && <span>Build: <code className="text-slate-300">{fw.build}</code></span>}
                          {fw.date && (
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3 text-slate-500" />
                              {fw.date}
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <HardDrive className="w-3 h-3 text-slate-500" />
                            {fw.size}
                          </span>
                          {fw.type && (
                            <span className="px-2 py-0.5 rounded bg-surface-800 text-[10px] font-medium text-slate-300">
                              {fw.type}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-2 pt-2 sm:pt-0">
                        <button
                          onClick={() => handleCopy(fw.url)}
                          title="Copy Direct URL"
                          className="p-2 rounded-xl bg-surface-800 hover:bg-surface-750 text-slate-300 border border-surface-700 transition"
                        >
                          {copiedUrl === fw.url ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                        </button>
                        <button
                          onClick={() => onStartDownload({
                            url: fw.url,
                            model: firmwaresData.model,
                            brand: firmwaresData.brand,
                            version: fw.version,
                            expectedSha256: fw.sha256,
                            expectedMd5: fw.md5,
                            expectedSha1: fw.sha1
                          })}
                          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs shadow-md shadow-brand-600/30 transition active:scale-95"
                        >
                          <DownloadCloud className="w-3.5 h-3.5" />
                          <span>Download</span>
                        </button>
                        <button
                          onClick={() => onPrepareFlash({
                            firmware: fw,
                            model: firmwaresData.model,
                            brand: firmwaresData.brand
                          })}
                          className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-surface-800 hover:bg-surface-750 text-amber-300 border border-surface-700 text-xs font-semibold transition"
                        >
                          <Flame className="w-3.5 h-3.5" />
                          <span>Flash</span>
                        </button>
                      </div>
                    </div>

                    {/* Checksum Hash info */}
                    {(fw.sha256 || fw.sha1 || fw.md5) && (
                      <div className="p-2.5 rounded-xl bg-surface-900/60 border border-surface-800 flex items-center gap-2 text-[11px] font-mono text-slate-400 truncate">
                        <span className="text-slate-500 font-bold shrink-0">HASH:</span>
                        <span className="truncate text-slate-300">
                          {fw.sha256 ? `SHA256: ${fw.sha256}` : fw.sha1 ? `SHA1: ${fw.sha1}` : `MD5: ${fw.md5}`}
                        </span>
                      </div>
                    )}

                    {/* Multi-component Flash Package Files (Symbian / Java / Odin) */}
                    {fw.components && (
                      <div className="p-2.5 rounded-xl bg-surface-900/60 border border-surface-800 space-y-1.5 text-[11px] font-mono">
                        <span className="text-slate-400 font-bold block text-[10px] uppercase tracking-wider">
                          Package Components (MCU / PPM / CNT / APE):
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {fw.components.map((comp, cIdx) => (
                            <span key={cIdx} className="px-2 py-0.5 rounded bg-surface-800 text-brand-300 border border-surface-700 text-[10px]">
                              {comp}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="p-12 rounded-2xl bg-surface-850 border border-surface-750 text-center text-slate-400">
              Select a phone model on the left to view official firmwares.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
