const express = require('express');
const http = require('http');
const cors = require('cors');
const path = require('path');
const { WebSocketServer } = require('ws');

const firmwareService = require('./services/firmwareService');
const downloadManager = require('./services/downloadManager');
const deviceService = require('./services/deviceService');
const flasherService = require('./services/flasherService');

const app = express();
const PORT = process.env.PORT || 4500;

app.use(cors());
app.use(express.json());

// Serve static frontend files in production
const distPath = path.resolve(__dirname, '../dist');
app.use(express.static(distPath));

// Create HTTP and WebSocket Server
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

// Set up WebSocket broadcast
const broadcastWS = (data) => {
  const payload = JSON.stringify(data);
  wss.clients.forEach((client) => {
    if (client.readyState === 1) { // WebSocket.OPEN
      client.send(payload);
    }
  });
};

downloadManager.setBroadcaster(broadcastWS);
flasherService.setBroadcaster(broadcastWS);

wss.on('connection', (ws) => {
  // Send initial state
  ws.send(JSON.stringify({
    type: 'initial_state',
    downloads: downloadManager.getDownloads(),
    isFlashing: flasherService.isFlashing
  }));
});

// --- REST API Endpoints ---

// 1. Devices & Hardware
app.get('/api/devices', async (req, res) => {
  try {
    const devices = await deviceService.scanConnectedDevices();
    res.json({ success: true, devices });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/devices/:serial/details', async (req, res) => {
  try {
    const details = await deviceService.getDeviceDetails(req.params.serial);
    res.json({ success: true, details });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/devices/:serial/reboot', async (req, res) => {
  try {
    const { target } = req.body;
    const result = await deviceService.rebootDevice(req.params.serial, target);
    res.json({ success: true, ...result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/drivers', async (req, res) => {
  try {
    const drivers = await deviceService.checkDrivers();
    res.json({ success: true, drivers });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 2. Firmware Catalog
app.get('/api/firmware/brands', (req, res) => {
  res.json({
    success: true,
    brands: [
      { id: 'apple', name: 'Apple (iPhone & iPad)', icon: 'Apple', count: '100+ Models' },
      { id: 'samsung', name: 'Samsung Galaxy', icon: 'Smartphone', count: 'Multi-CSC Stock ROMs' },
      { id: 'google', name: 'Google Pixel', icon: 'Globe', count: 'Official Factory Images' },
      { id: 'xiaomi', name: 'Xiaomi / Redmi / POCO', icon: 'Cpu', count: 'HyperOS & Fastboot ROMs' },
      { id: 'oneplus', name: 'OnePlus', icon: 'Zap', count: 'OxygenOS Stock Packages' }
    ]
  });
});

app.get('/api/firmware/:brand/models', async (req, res) => {
  try {
    const models = await firmwareService.getModelsByBrand(req.params.brand);
    res.json({ success: true, brand: req.params.brand, models });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

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

// 3. Downloads
app.get('/api/downloads', (req, res) => {
  res.json({ success: true, downloads: downloadManager.getDownloads() });
});

app.post('/api/downloads/start', (req, res) => {
  try {
    const { url, filename, model, brand, version, expectedSha256, expectedMd5, expectedSha1 } = req.body;
    if (!url) {
      return res.status(400).json({ success: false, error: 'Download URL is required.' });
    }
    const item = downloadManager.startDownload({
      url,
      filename,
      model,
      brand,
      version,
      expectedSha256,
      expectedMd5,
      expectedSha1
    });
    res.json({ success: true, item });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/downloads/:id/cancel', (req, res) => {
  const success = downloadManager.cancelDownload(req.params.id);
  res.json({ success });
});

app.get('/api/downloads/local', (req, res) => {
  const downloadsDir = path.resolve(__dirname, '../downloads');
  const files = firmwareService.scanLocalDownloads(downloadsDir);
  res.json({ success: true, files, downloadsDir });
});

// 4. Flashing
app.post('/api/flash/partition', async (req, res) => {
  try {
    const { serial, partition, filePath } = req.body;
    if (!partition || !filePath) {
      return res.status(400).json({ success: false, error: 'Partition and filePath are required' });
    }
    const result = await flasherService.flashPartition({ serial, partition, filePath });
    res.json({ success: true, ...result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/flash/sideload', async (req, res) => {
  try {
    const { serial, filePath } = req.body;
    if (!filePath) {
      return res.status(400).json({ success: false, error: 'filePath is required' });
    }
    const result = await flasherService.runSideload({ serial, filePath });
    res.json({ success: true, ...result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/flash/abort', (req, res) => {
  const aborted = flasherService.abortFlashing();
  res.json({ success: aborted });
});

// Fallback to index.html for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'), (err) => {
    if (err) {
      res.status(200).send('Dr.Firmware Suite backend is running. Please build or run the Vite UI.');
    }
  });
});

server.listen(PORT, () => {
  console.log(`[Dr.Firmware] Server running on http://localhost:${PORT}`);
});
