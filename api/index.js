const express = require('express');
const cors = require('cors');
const firmwareService = require('../server/services/firmwareService');

const app = express();

app.use(cors());
app.use(express.json());

// 1. Firmware Brands
app.get('/api/firmware/brands', (req, res) => {
  res.json({
    success: true,
    brands: [
      { id: 'apple', name: 'Apple (iPhone & iPad)', icon: 'Apple', count: '170+ Models' },
      { id: 'honor', name: 'Honor (Magic / Number / X)', icon: 'Smartphone', count: 'MagicOS & dload Service ROMs' },
      { id: 'motorola', name: 'Motorola (Edge / Razr / Moto G)', icon: 'Radio', count: 'Hello UI & Fastboot XML' },
      { id: 'vivo', name: 'Vivo & iQOO', icon: 'Smartphone', count: 'Funtouch OS & Fastboot ROMs' },
      { id: 'oppo', name: 'Oppo & Realme', icon: 'Zap', count: 'ColorOS / Realme UI OFP' },
      { id: 'redmi', name: 'Redmi Series (Note / K / A)', icon: 'Cpu', count: '60+ Models (HyperOS & Fastboot)' },
      { id: 'xiaomi', name: 'Xiaomi & POCO', icon: 'Cpu', count: 'HyperOS & Fastboot ROMs' },
      { id: 'samsung', name: 'Samsung Galaxy', icon: 'Smartphone', count: 'Multi-CSC Stock ROMs' },
      { id: 'google', name: 'Google Pixel', icon: 'Globe', count: 'Official Factory Images' },
      { id: 'oneplus', name: 'OnePlus', icon: 'Zap', count: 'OxygenOS Stock Packages' },
      { id: 'htc', name: 'HTC (One / U / Desire / HD2)', icon: 'Cpu', count: 'Official RUU Stock Images' },
      { id: 'nokia', name: 'Nokia (Symbian & S40 Java)', icon: 'Radio', count: 'S60 / Symbian^3 / S40' },
      { id: 'sonyericsson', name: 'Sony Ericsson (Java & UIQ)', icon: 'Disc', count: 'Walkman / Cyber-shot / A2' },
      { id: 'samsung_feature', name: 'Samsung Keypad (Java Feature)', icon: 'Smartphone', count: 'Guru Music / Metro / Duos' },
      { id: 'blackberry', name: 'BlackBerry (BB10, Android & BBOS)', icon: 'Shield', count: 'Autoloaders & Fastboot' },
      { id: 'jio', name: 'Reliance JioPhone (KaiOS & Pragati)', icon: 'Radio', count: 'QFIL Firehose & SPD PAC' },
      { id: 'micromax', name: 'Micromax (IN Series & Canvas)', icon: 'Smartphone', count: 'SP Flash Tool & PAC' },
      { id: 'lava', name: 'Lava (Agni 5G, Blaze & Yuva)', icon: 'Flame', count: 'Dimensity & Unisoc ROMs' },
      { id: 'max', name: 'Max / Maxx Mobile (Android & Keypad)', icon: 'Zap', count: 'SP Flash & SPD PAC' },
      { id: 'nokia_android', name: 'Nokia (Android / HMD Global)', icon: 'Radio', count: 'PureView, G & X Series (Fastboot)' },
      { id: 'lg', name: 'LG Electronics', icon: 'Smartphone', count: 'Wing, Velvet, V60 (Official KDZ)' },
      { id: 'panasonic', name: 'Panasonic Mobile', icon: 'Cpu', count: 'Eluga & P Series (SP Flash)' },
      { id: 'sony', name: 'Sony Xperia', icon: 'Disc', count: 'Xperia 1 / 5 / 10 (Newflasher .sin)' }
    ]
  });
});

// 2. Models
app.get('/api/firmware/:brand/models', async (req, res) => {
  try {
    const models = await firmwareService.getModelsByBrand(req.params.brand);
    res.json({ success: true, brand: req.params.brand, models });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 3. Firmwares
app.get('/api/firmware/:brand/:modelCode', async (req, res) => {
  try {
    const details = await firmwareService.getFirmwares(req.params.brand, req.params.modelCode);
    if (!details) {
      return res.status(404).json({ success: false, error: 'Model or firmware not found' });
    }
    res.json({ success: true, data: details });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 4. Device & Drivers Status (Cloud / Web Mode)
app.get('/api/devices', (req, res) => {
  res.json({
    success: true,
    devices: [],
    note: 'Cloud Web Mode: For direct physical USB flashing via Fastboot/Odin, launch the local desktop companion.'
  });
});

app.get('/api/drivers', (req, res) => {
  res.json({
    success: true,
    drivers: {
      adb: true,
      samsung: true,
      apple: true,
      fastboot: true
    }
  });
});

app.get('/api/downloads', (req, res) => {
  res.json({ success: true, downloads: [] });
});

app.get('/api/downloads/local', (req, res) => {
  res.json({ success: true, files: [] });
});

module.exports = app;
