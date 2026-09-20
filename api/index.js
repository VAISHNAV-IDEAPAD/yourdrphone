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
      { id: 'apple', name: 'Apple (iPhone & iPad)', icon: 'Apple', count: '100+ Models' },
      { id: 'samsung', name: 'Samsung Galaxy', icon: 'Smartphone', count: 'Multi-CSC Stock ROMs' },
      { id: 'google', name: 'Google Pixel', icon: 'Globe', count: 'Official Factory Images' },
      { id: 'xiaomi', name: 'Xiaomi / Redmi / POCO', icon: 'Cpu', count: 'HyperOS & Fastboot ROMs' },
      { id: 'oneplus', name: 'OnePlus', icon: 'Zap', count: 'OxygenOS Stock Packages' },
      { id: 'nokia', name: 'Nokia (Symbian & S40 Java)', icon: 'Radio', count: 'S60 / Symbian^3 / S40' },
      { id: 'sonyericsson', name: 'Sony Ericsson (Java & UIQ)', icon: 'Disc', count: 'Walkman / Cyber-shot / A2' },
      { id: 'samsung_feature', name: 'Samsung Keypad (Java Feature)', icon: 'Smartphone', count: 'Guru Music / Metro / Duos' }
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
