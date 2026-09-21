// Official Registry of HTC Smartphones & Stock RUU (ROM Update Utility) Firmwares
// Supports HTC 10, One Series (M7, M8, M9), U Series (U23 Pro, U12+, U11), and Historic Icons (HD2, G1 Dream)

const HTC_REGISTRY = [
  // ==========================================
  // HTC ONE & FLAGSHIP NUMBER SERIES
  // ==========================================
  {
    model: 'HTC 10 (Flagship)',
    code: '2PS6200',
    brand: 'htc',
    series: 'HTC Flagship',
    chipset: 'Snapdragon 820',
    firmwares: [
      {
        version: 'Android 8.0 Oreo (3.16.401.2)',
        build: '3.16.401.2',
        date: 'Feb 2018',
        size: '2.15 GB',
        region: 'Europe (WWE / CID HTC__001)',
        type: 'Official RUU Zip (2PS6IMG.zip)',
        url: 'https://androidfilehost.com/?fid=673956719939818816',
        signed: true,
        components: ['2PS6IMG.zip', 'boot.img', 'system.img', 'recovery.img', 'radio.img', 'hosd.img']
      },
      {
        version: 'Android 7.0 Nougat (2.41.401.4)',
        build: '2.41.401.4',
        date: 'Jan 2017',
        size: '1.95 GB',
        region: 'Europe (WWE)',
        type: 'Official RUU Executable (.exe)',
        url: 'https://androidfilehost.com/?fid=745425885120697775',
        signed: true
      }
    ]
  },
  {
    model: 'HTC One M9',
    code: '0PJA100',
    brand: 'htc',
    series: 'HTC One Series',
    chipset: 'Snapdragon 810',
    firmwares: [
      {
        version: 'Android 7.0 Nougat (4.28.401.3)',
        build: '4.28.401.3',
        date: 'Feb 2017',
        size: '2.25 GB',
        region: 'Europe (WWE / Unlocked)',
        type: 'Official RUU Zip (0PJAIMG.zip)',
        url: 'https://androidfilehost.com/?fid=817550096634747201',
        signed: true
      }
    ]
  },
  {
    model: 'HTC One M8 (Duo Camera)',
    code: '0P6B100',
    brand: 'htc',
    series: 'HTC One Series',
    chipset: 'Snapdragon 801',
    firmwares: [
      {
        version: 'Android 6.0 Marshmallow (6.12.401.4)',
        build: '6.12.401.4',
        date: 'Jan 2016',
        size: '1.58 GB',
        region: 'Europe (WWE / CID HTC__001)',
        type: 'Official RUU Zip (0P6BIMG.zip)',
        url: 'https://androidfilehost.com/?fid=24369303960687057',
        signed: true
      }
    ]
  },
  {
    model: 'HTC One M7 (Beats Audio Icon)',
    code: 'PN07100',
    brand: 'htc',
    series: 'HTC One Series',
    chipset: 'Snapdragon 600',
    firmwares: [
      {
        version: 'Android 5.0.2 Lollipop (7.19.401.51)',
        build: '7.19.401.51',
        date: 'Aug 2015',
        size: '1.45 GB',
        region: 'Europe (WWE)',
        type: 'Official RUU Zip (PN07IMG.zip)',
        url: 'https://androidfilehost.com/?fid=24052804347799519',
        signed: true
      }
    ]
  },

  // ==========================================
  // HTC U SERIES (SQUEEZE / MODERN)
  // ==========================================
  {
    model: 'HTC U23 Pro',
    code: '2QC9100',
    brand: 'htc',
    series: 'HTC U Series',
    chipset: 'Snapdragon 7 Gen 1',
    firmwares: [
      {
        version: 'Android 13 Stock (1.00.401.5)',
        build: '1.00.401.5',
        date: 'Oct 2023',
        size: '3.40 GB',
        region: 'Global / Europe',
        type: 'Official Fastboot Recovery Package',
        url: 'https://androidfilehost.com/?fid=10620683726822068695',
        signed: true
      }
    ]
  },
  {
    model: 'HTC U12+',
    code: '2Q55100',
    brand: 'htc',
    series: 'HTC U Series',
    chipset: 'Snapdragon 845',
    firmwares: [
      {
        version: 'Android 9.0 Pie (2.55.401.1)',
        build: '2.55.401.1',
        date: 'Aug 2019',
        size: '2.50 GB',
        region: 'Europe (WWE / Dual SIM)',
        type: 'Official RUU Zip (2Q55IMG.zip)',
        url: 'https://androidfilehost.com/?fid=6006931924117904018',
        signed: true
      }
    ]
  },
  {
    model: 'HTC U11 (Edge Sense)',
    code: '2PZC100',
    brand: 'htc',
    series: 'HTC U Series',
    chipset: 'Snapdragon 835',
    firmwares: [
      {
        version: 'Android 9.0 Pie (3.31.401.1)',
        build: '3.31.401.1',
        date: 'Jul 2019',
        size: '2.35 GB',
        region: 'Europe (WWE)',
        type: 'Official RUU Zip (2PZCIMG.zip)',
        url: 'https://androidfilehost.com/?fid=6006931924117897042',
        signed: true
      }
    ]
  },

  // ==========================================
  // HTC DESIRE SERIES
  // ==========================================
  {
    model: 'HTC Desire EYE (Dual 13MP)',
    code: '0PF8100',
    brand: 'htc',
    series: 'HTC Desire',
    chipset: 'Snapdragon 801',
    firmwares: [
      {
        version: 'Android 6.0.1 Marshmallow (3.14.401.1)',
        build: '3.14.401.1',
        date: 'Jun 2016',
        size: '1.40 GB',
        region: 'Europe (WWE)',
        type: 'Official RUU Zip (0PF8IMG.zip)',
        url: 'https://androidfilehost.com/?fid=24591000424941913',
        signed: true
      }
    ]
  },
  {
    model: 'HTC Desire HD (Aluminum Unibody)',
    code: 'A9191',
    brand: 'htc',
    series: 'HTC Desire',
    chipset: 'Snapdragon S2 (MSM8255)',
    firmwares: [
      {
        version: 'Android 2.3.5 Gingerbread / Sense 3.0 (3.12.405.1)',
        build: '3.12.405.1',
        date: 'Dec 2011',
        size: '320 MB',
        region: 'Europe (WWE)',
        type: 'Official RUU Executable (.exe)',
        url: 'https://androidfilehost.com/?fid=9390169635556426462',
        signed: true
      }
    ]
  },

  // ==========================================
  // HTC HISTORIC LEGENDS
  // ==========================================
  {
    model: 'HTC HD2 (The Immortal Multiboot Legend)',
    code: 'T8585',
    brand: 'htc',
    series: 'HTC Vintage Legend',
    chipset: 'Qualcomm Snapdragon S1 (QSD8250 1GHz)',
    firmwares: [
      {
        version: 'Windows Mobile 6.5.3 Professional (3.14.405.2)',
        build: '3.14.405.2 WWE',
        date: 'Nov 2010',
        size: '198 MB',
        region: 'Europe / World WWE',
        type: 'Official HTC RUU Leo Flash Package (.exe / LEOIMG.nbh)',
        url: 'https://archive.org/download/htc-hd2-leo-ruu-stock-roms/RUU_Leo_HTC_WWE_3.14.405.2_Radio_15.42.50.11U_2.15.50.14_LEO_Ship.exe',
        signed: true,
        components: ['LEOIMG.nbh', 'Radio 2.15.50.14', 'HSPL Bootloader 2.08']
      },
      {
        version: 'CyanogenMod 7 (Android 2.3.7 Gingerbread Native NAND)',
        build: 'CM7.2-HD2-NAND',
        date: 'Jun 2012',
        size: '115 MB',
        region: 'Global NAND',
        type: 'MAGLDR / cLK Native Android Flash Pack',
        url: 'https://archive.org/download/htc-hd2-leo-ruu-stock-roms/CM7_HD2_Native_NAND.zip',
        signed: true
      }
    ]
  },
  {
    model: 'HTC Dream / Google G1 (World\'s 1st Android Phone)',
    code: 'DREA110',
    brand: 'htc',
    series: 'HTC Vintage Legend',
    chipset: 'Qualcomm MSM7201A 528MHz',
    firmwares: [
      {
        version: 'Android 1.6 Donut (DMD64)',
        build: 'CRC1 - Official OTA',
        date: 'Oct 2009',
        size: '68 MB',
        region: 'T-Mobile US / Global',
        type: 'Official SPL Recovery Flash Package (DREAIMG.nbh)',
        url: 'https://archive.org/download/htc-dream-g1-official-firmware/DREAIMG.NBH',
        signed: true,
        components: ['DREAIMG.nbh', 'SPL 0.95.0000']
      }
    ]
  }
];

module.exports = {
  HTC_REGISTRY
};
