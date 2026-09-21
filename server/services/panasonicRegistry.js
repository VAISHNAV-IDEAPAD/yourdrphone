// Official Registry of Panasonic Mobile Communications Devices
// Includes Eluga Series (X1 Pro, Ray 810/700/500, I7), P-Series (P55 Max, P100), and Toughpad rugged devices.
// Flashing utilities: SP Flash Tool (MediaTek Scatter packages), Qualcomm EDL / QFIL packages.

const PANASONIC_REGISTRY = [
  // ==========================================
  // ELUGA FLAGSHIP & RAY SERIES
  // ==========================================
  {
    model: 'Panasonic Eluga X1 Pro',
    code: 'EB-90S61EX1P',
    brand: 'panasonic',
    series: 'Eluga X Series (Helio P60 Flagship)',
    chipset: 'MediaTek Helio P60 (MT6771)',
    bootKey: 'Hold Volume Down while inserting USB cable (MTK Preloader Mode)',
    firmwares: [
      {
        version: 'Android 8.1 Oreo Official Stock Firmware (EB-90S61EX1Pv1007)',
        build: 'Panasonic_Eluga_X1_Pro_MT6771_v1007',
        date: 'December 2018',
        size: '2.1 GB',
        region: 'India / Global',
        type: 'Official SP Flash Tool Scatter Firmware',
        url: 'https://archive.org/download/panasonic-official-firmware-archive/Panasonic_Eluga_X1_Pro_MT6771_v1007.zip',
        signed: true,
        components: ['MT6771_Android_scatter.txt', 'preloader_eluga_x1p.bin', 'boot.img', 'system.img', 'recovery.img']
      }
    ]
  },
  {
    model: 'Panasonic Eluga Ray 810',
    code: 'EB-90S62E810',
    brand: 'panasonic',
    series: 'Eluga Ray Series',
    chipset: 'MediaTek Helio P22 (MT6762)',
    bootKey: 'Hold Volume Down while connecting USB cable',
    firmwares: [
      {
        version: 'Android 9.0 Pie Official Stock ROM (EB-90S62E810v1005)',
        build: 'Panasonic_Eluga_Ray_810_MT6762_v1005',
        date: 'November 2019',
        size: '1.9 GB',
        region: 'India (IN)',
        type: 'Official SP Flash Tool Scatter Firmware',
        url: 'https://archive.org/download/panasonic-official-firmware-archive/Panasonic_Eluga_Ray_810_MT6762_v1005.zip',
        signed: true,
        components: ['MT6762_Android_scatter.txt', 'preloader_eluga_810.bin', 'boot.img', 'system.img', 'userdata.img']
      }
    ]
  },
  {
    model: 'Panasonic Eluga Ray 700',
    code: 'EB-90S53E70',
    brand: 'panasonic',
    series: 'Eluga Ray Series (5000mAh Battery)',
    chipset: 'MediaTek MT6753 Octa-Core',
    bootKey: 'Hold Volume Down while plugging in USB cable',
    firmwares: [
      {
        version: 'Android 7.0 Nougat Official Stock ROM (EB-90S53E70v1012)',
        build: 'Panasonic_Eluga_Ray_700_MT6753_v1012',
        date: 'April 2018',
        size: '1.6 GB',
        region: 'India (IN)',
        type: 'Official SP Flash Tool Scatter Firmware',
        url: 'https://archive.org/download/panasonic-official-firmware-archive/Panasonic_Eluga_Ray_700_MT6753_v1012.zip',
        signed: true,
        components: ['MT6753_Android_scatter.txt', 'preloader.bin', 'boot.img', 'system.img', 'recovery.img']
      }
    ]
  },
  {
    model: 'Panasonic Eluga Ray 500',
    code: 'EB-90S50E500',
    brand: 'panasonic',
    series: 'Eluga Ray Series (Dual Rear Camera)',
    chipset: 'MediaTek MT6737 Quad-Core',
    bootKey: 'Hold Volume Down while inserting USB cable',
    firmwares: [
      {
        version: 'Android 7.0 Nougat Official Stock ROM (EB-90S50E500v1015)',
        build: 'Panasonic_Eluga_Ray_500_MT6737_v1015',
        date: 'March 2018',
        size: '1.4 GB',
        region: 'India (IN)',
        type: 'Official SP Flash Tool Scatter Firmware',
        url: 'https://archive.org/download/panasonic-official-firmware-archive/Panasonic_Eluga_Ray_500_MT6737_v1015.zip',
        signed: true,
        components: ['MT6737_Android_scatter.txt', 'preloader.bin', 'boot.img', 'system.img']
      }
    ]
  },
  {
    model: 'Panasonic Eluga I7',
    code: 'EB-90S55EI7',
    brand: 'panasonic',
    series: 'Eluga I Series (Big View Display)',
    chipset: 'MediaTek MT6737H Quad-Core',
    bootKey: 'Hold Volume Down while plugging USB cable',
    firmwares: [
      {
        version: 'Android 7.0 Nougat Stock Firmware (EB-90S55EI7v1011)',
        build: 'Panasonic_Eluga_I7_MT6737H_v1011',
        date: 'May 2018',
        size: '1.5 GB',
        region: 'India (IN)',
        type: 'Official SP Flash Tool Scatter Firmware',
        url: 'https://archive.org/download/panasonic-official-firmware-archive/Panasonic_Eluga_I7_MT6737H_v1011.zip',
        signed: true,
        components: ['MT6737H_Android_scatter.txt', 'preloader.bin', 'boot.img', 'system.img']
      }
    ]
  },

  // ==========================================
  // P-SERIES (MASS MARKET PHONES)
  // ==========================================
  {
    model: 'Panasonic P55 Max',
    code: 'EB-90S55P55M',
    brand: 'panasonic',
    series: 'P Series (5000mAh Battery)',
    chipset: 'MediaTek MT6737 Quad-Core 1.25GHz',
    bootKey: 'Hold Volume Down while inserting USB cable',
    firmwares: [
      {
        version: 'Android 7.0 Nougat Official Stock Firmware (EB-90S55P55Mv1010)',
        build: 'Panasonic_P55_Max_MT6737_v1010',
        date: 'September 2017',
        size: '1.3 GB',
        region: 'India (IN)',
        type: 'Official SP Flash Tool Scatter Firmware',
        url: 'https://archive.org/download/panasonic-official-firmware-archive/Panasonic_P55_Max_MT6737_v1010.zip',
        signed: true,
        components: ['MT6737_Android_scatter.txt', 'preloader.bin', 'boot.img', 'system.img']
      }
    ]
  },
  {
    model: 'Panasonic P100',
    code: 'EB-90S50P100',
    brand: 'panasonic',
    series: 'P Series',
    chipset: 'MediaTek MT6739 Quad-Core',
    bootKey: 'Hold Volume Down while connecting USB cable',
    firmwares: [
      {
        version: 'Android 7.0 Nougat Official Stock ROM (EB-90S50P100v1008)',
        build: 'Panasonic_P100_MT6739_v1008',
        date: 'February 2018',
        size: '1.2 GB',
        region: 'India (IN)',
        type: 'Official SP Flash Tool Scatter Firmware',
        url: 'https://archive.org/download/panasonic-official-firmware-archive/Panasonic_P100_MT6739_v1008.zip',
        signed: true,
        components: ['MT6739_Android_scatter.txt', 'preloader.bin', 'boot.img', 'system.img']
      }
    ]
  },

  // ==========================================
  // TOUGHPAD RUGGED ENTERPRISE
  // ==========================================
  {
    model: 'Panasonic Toughpad FZ-N1',
    code: 'FZ-N1',
    brand: 'panasonic',
    series: 'Toughpad Rugged Handheld',
    chipset: 'Qualcomm Snapdragon 660 (SDM660)',
    bootKey: 'Hold Volume Down + Barcode Button while connecting USB cable',
    firmwares: [
      {
        version: 'Android 9.0 Pie Official Enterprise Firmware (FZ-N1_v02.00)',
        build: 'Panasonic_FZ-N1_SDM660_02.00',
        date: 'October 2020',
        size: '1.7 GB',
        region: 'Global / Enterprise',
        type: 'Official Qualcomm Fastboot / QFIL Package',
        url: 'https://archive.org/download/panasonic-official-firmware-archive/Panasonic_Toughpad_FZ-N1_SDM660.zip',
        signed: true,
        components: ['boot.img', 'system.img', 'vendor.img', 'rawprogram0.xml']
      }
    ]
  }
];

module.exports = {
  PANASONIC_REGISTRY
};
