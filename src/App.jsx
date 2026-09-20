import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import DeviceHeader from './components/DeviceHeader';
import Dashboard from './components/Dashboard';
import FirmwareHub from './components/FirmwareHub';
import DownloadManager from './components/DownloadManager';
import FlasherWizard from './components/FlasherWizard';
import Toolbox from './components/Toolbox';
import SystemRepair from './components/SystemRepair';
import DriverGuide from './components/DriverGuide';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [connectedDevice, setConnectedDevice] = useState(null);
  const [deviceDetails, setDeviceDetails] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [downloads, setDownloads] = useState([]);
  const [flashLogs, setFlashLogs] = useState([]);
  const [flashStatus, setFlashStatus] = useState({ status: 'Idle', progress: 0, isFlashing: false });
  const [flashTarget, setFlashTarget] = useState(null);
  const [driverStatus, setDriverStatus] = useState(null);
  const [wsConnected, setWsConnected] = useState(false);

  const wsRef = useRef(null);

  // Initialize WebSocket connection
  useEffect(() => {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    // When running Vite dev server on 5173, backend is on 4500
    const host = window.location.port === '5173' ? 'localhost:4500' : window.location.host;
    const wsUrl = `${protocol}//${host}`;

    let socket;
    try {
      socket = new WebSocket(wsUrl);
      wsRef.current = socket;

      socket.onopen = () => {
        setWsConnected(true);
      };

      socket.onclose = () => {
        setWsConnected(false);
      };

      socket.onerror = () => {
        setWsConnected(false);
      };

      socket.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          handleWebSocketMessage(data);
        } catch (e) {}
      };
    } catch (e) {}

    return () => {
      if (socket) socket.close();
    };
  }, []);

  const handleWebSocketMessage = (data) => {
    switch (data.type) {
      case 'initial_state':
        if (data.downloads) setDownloads(data.downloads);
        if (data.isFlashing !== undefined) {
          setFlashStatus(prev => ({ ...prev, isFlashing: data.isFlashing }));
        }
        break;

      case 'download_progress':
      case 'download_updated':
      case 'download_completed':
      case 'download_error':
        if (data.item) {
          setDownloads((prev) => {
            const index = prev.findIndex((d) => d.id === data.item.id);
            if (index >= 0) {
              const updated = [...prev];
              updated[index] = data.item;
              return updated;
            } else {
              return [data.item, ...prev];
            }
          });
        }
        break;

      case 'download_cancelled':
        setDownloads((prev) => prev.filter((d) => d.id !== data.id));
        break;

      case 'flash_log':
        setFlashLogs((prev) => [...prev, {
          timestamp: data.timestamp,
          message: data.message,
          logType: data.logType
        }]);
        break;

      case 'flash_status':
        setFlashStatus({
          status: data.status,
          progress: data.progress,
          isFlashing: data.isFlashing
        });
        break;

      default:
        break;
    }
  };

  // Scan devices on mount and periodically
  useEffect(() => {
    scanDevices();
    scanDrivers();

    const interval = setInterval(() => {
      scanDevices(false);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const scanDevices = async (showLoading = true) => {
    if (showLoading) setIsScanning(true);
    try {
      const res = await fetch('/api/devices');
      const data = await res.json();
      if (data.success && data.devices) {
        if (data.devices.length > 0) {
          const current = data.devices[0];
          setConnectedDevice(current);
          // fetch deep properties
          if (current.state === 'connected' && current.platform === 'android') {
            fetchDeviceDetails(current.serial);
          }
        } else {
          setConnectedDevice(null);
          setDeviceDetails(null);
        }
      }
    } catch (err) {
      // Backend not yet reached or offline
    } finally {
      if (showLoading) setIsScanning(false);
    }
  };

  const fetchDeviceDetails = async (serial) => {
    try {
      const res = await fetch(`/api/devices/${serial}/details`);
      const data = await res.json();
      if (data.success) {
        setDeviceDetails(data.details);
      }
    } catch (err) {}
  };

  const scanDrivers = async () => {
    try {
      const res = await fetch('/api/drivers');
      const data = await res.json();
      if (data.success) {
        setDriverStatus(data.drivers);
      }
    } catch (err) {}
  };

  // Actions
  const handleStartDownload = async (fw) => {
    try {
      const res = await fetch('/api/downloads/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fw)
      });
      const data = await res.json();
      if (data.success) {
        setActiveTab('downloads');
      }
    } catch (err) {
      alert('Failed to start download: ' + err.message);
    }
  };

  const handleCancelDownload = async (id) => {
    try {
      await fetch(`/api/downloads/${id}/cancel`, { method: 'POST' });
    } catch (err) {}
  };

  const handlePrepareFlash = (target) => {
    setFlashTarget(target);
    setActiveTab('flasher');
  };

  const handleFlashPartition = async (payload) => {
    setFlashLogs([
      { timestamp: new Date().toLocaleTimeString(), message: '--- Flashing Session Initiated ---', logType: 'info' }
    ]);
    try {
      const res = await fetch('/api/flash/partition', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!data.success) {
        alert(data.error || 'Flashing partition failed.');
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const handleFlashSideload = async (payload) => {
    setFlashLogs([
      { timestamp: new Date().toLocaleTimeString(), message: '--- ADB Sideload Initiated ---', logType: 'info' }
    ]);
    try {
      const res = await fetch('/api/flash/sideload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!data.success) {
        alert(data.error || 'Sideload failed.');
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const handleAbortFlash = async () => {
    try {
      await fetch('/api/flash/abort', { method: 'POST' });
    } catch (err) {}
  };

  const handleReboot = async (serial, target) => {
    const res = await fetch(`/api/devices/${serial}/reboot`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ target })
    });
    return await res.json();
  };

  return (
    <div className="flex h-screen w-screen bg-surface-900 text-slate-100 overflow-hidden font-sans">
      {/* Sidebar Navigation */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        downloadCount={downloads.filter(d => d.status === 'downloading').length}
        connectedDevice={connectedDevice}
        wsConnected={wsConnected}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Device Banner Header */}
        <DeviceHeader
          connectedDevice={connectedDevice}
          isScanning={isScanning}
          onScan={() => scanDevices(true)}
        />

        {/* Dynamic View Panel */}
        <main className="flex-1 overflow-y-auto bg-surface-900/40">
          {activeTab === 'dashboard' && (
            <Dashboard
              onNavigate={setActiveTab}
              connectedDevice={connectedDevice}
              deviceDetails={deviceDetails}
              onQuickDownload={handleStartDownload}
              driverStatus={driverStatus}
            />
          )}

          {activeTab === 'firmware' && (
            <FirmwareHub
              onStartDownload={handleStartDownload}
              onPrepareFlash={handlePrepareFlash}
            />
          )}

          {activeTab === 'downloads' && (
            <DownloadManager
              downloads={downloads}
              onCancelDownload={handleCancelDownload}
              onPrepareFlash={handlePrepareFlash}
              onStartManualDownload={handleStartDownload}
            />
          )}

          {activeTab === 'flasher' && (
            <FlasherWizard
              flashTarget={flashTarget}
              connectedDevice={connectedDevice}
              flashLogs={flashLogs}
              flashStatus={flashStatus}
              onFlashPartition={handleFlashPartition}
              onFlashSideload={handleFlashSideload}
              onAbortFlash={handleAbortFlash}
              onReboot={handleReboot}
            />
          )}

          {activeTab === 'repair' && (
            <SystemRepair
              connectedDevice={connectedDevice}
              onNavigate={setActiveTab}
              onPrepareFlash={handlePrepareFlash}
            />
          )}

          {activeTab === 'toolbox' && (
            <Toolbox
              connectedDevice={connectedDevice}
              deviceDetails={deviceDetails}
              onReboot={handleReboot}
            />
          )}

          {activeTab === 'drivers' && (
            <DriverGuide
              driverStatus={driverStatus}
              onScanDrivers={scanDrivers}
            />
          )}
        </main>
      </div>
    </div>
  );
}
