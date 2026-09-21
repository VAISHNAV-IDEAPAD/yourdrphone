// Official Registry of Motorola Smartphones & Stock Fastboot / Rescue Firmwares
// Supports Modern Edge 50/40, Razr Foldables, Moto G & E Series, and Classic Legends (Nexus 6, Moto X, Moto G1)

const MOTOROLA_REGISTRY = [
  // ==========================================
  // MOTOROLA EDGE & RAZR SERIES (FLAGSHIPS)
  // ==========================================
  {
    model: 'Motorola Edge 50 Ultra',
    code: 'XT2401-2',
    brand: 'motorola',
    series: 'Edge Flagship',
    chipset: 'Snapdragon 8s Gen 3',
    firmwares: [
      {
        version: 'Hello UI / Android 14 (U3US34.39-70)',
        build: 'U3US34.39-70',
        date: 'Aug 2024',
        size: '5.85 GB',
        region: 'Global / RETEU',
        type: 'Fastboot Service Package (flashfile.xml)',
        url: 'https://mirrors.lolinet.com/firmware/lenovo/motorola/macan/official/RETEU/XT2401-2_MACAN_RETEU_14_U3US34.39-70_subsidy-DEFAULT_regulatory-DEFAULT_CFC.xml.zip',
        signed: true,
        components: ['flashfile.xml', 'boot.img', 'init_boot.img', 'super.img_sparsechunk.*', 'vbmeta.img']
      }
    ]
  },
  {
    model: 'Motorola Edge 50 Pro',
    code: 'XT2403-2',
    brand: 'motorola',
    series: 'Edge Flagship',
    chipset: 'Snapdragon 7 Gen 3',
    firmwares: [
      {
        version: 'Hello UI / Android 14 (U1UM34.42-38)',
        build: 'U1UM34.42-38',
        date: 'Jul 2024',
        size: '5.40 GB',
        region: 'Global / RETIN / RETEU',
        type: 'Fastboot Service Package (flashfile.xml)',
        url: 'https://mirrors.lolinet.com/firmware/lenovo/motorola/milan/official/RETIN/XT2403-2_MILAN_RETIN_14_U1UM34.42-38_subsidy-DEFAULT_regulatory-DEFAULT_CFC.xml.zip',
        signed: true,
        components: ['flashfile.xml', 'boot.img', 'init_boot.img', 'super.img_sparsechunk.*']
      }
    ]
  },
  {
    model: 'Motorola Edge 50 Fusion',
    code: 'XT2429-1',
    brand: 'motorola',
    series: 'Edge Flagship',
    chipset: 'Snapdragon 7s Gen 2',
    firmwares: [
      {
        version: 'Hello UI / Android 14 (U1UV34.28-48)',
        build: 'U1UV34.28-48',
        date: 'Jul 2024',
        size: '4.95 GB',
        region: 'Global / RETIN',
        type: 'Fastboot Service Package (flashfile.xml)',
        url: 'https://mirrors.lolinet.com/firmware/lenovo/motorola/cusco/official/RETIN/XT2429-1_CUSCO_RETIN_14_U1UV34.28-48_subsidy-DEFAULT_regulatory-DEFAULT_CFC.xml.zip',
        signed: true
      }
    ]
  },
  {
    model: 'Motorola Razr 50 Ultra / Razr+ 2024',
    code: 'XT2451-3',
    brand: 'motorola',
    series: 'Razr Foldable',
    chipset: 'Snapdragon 8s Gen 3',
    firmwares: [
      {
        version: 'Hello UI / Android 14 (U3UW34.29-38)',
        build: 'U3UW34.29-38',
        date: 'Aug 2024',
        size: '6.10 GB',
        region: 'Global / RETEU',
        type: 'Fastboot Service Package (flashfile.xml)',
        url: 'https://mirrors.lolinet.com/firmware/lenovo/motorola/lynx/official/RETEU/XT2451-3_LYNX_RETEU_14_U3UW34.29-38_subsidy-DEFAULT_regulatory-DEFAULT_CFC.xml.zip',
        signed: true
      }
    ]
  },
  {
    model: 'Motorola Razr 40 Ultra / Razr+ 2023',
    code: 'XT2321-1',
    brand: 'motorola',
    series: 'Razr Foldable',
    chipset: 'Snapdragon 8+ Gen 1',
    firmwares: [
      {
        version: 'Android 14 (U1TZ34.2-34)',
        build: 'U1TZ34.2-34',
        date: 'Jun 2024',
        size: '5.65 GB',
        region: 'Global / RETEU',
        type: 'Fastboot Service Package (flashfile.xml)',
        url: 'https://mirrors.lolinet.com/firmware/lenovo/motorola/zeekr/official/RETEU/XT2321-1_ZEEKR_RETEU_14_U1TZ34.2-34_subsidy-DEFAULT_regulatory-DEFAULT_CFC.xml.zip',
        signed: true
      }
    ]
  },
  {
    model: 'Motorola Edge 40 Pro',
    code: 'XT2301-4',
    brand: 'motorola',
    series: 'Edge Flagship',
    chipset: 'Snapdragon 8 Gen 2',
    firmwares: [
      {
        version: 'Android 14 (U1TR34.8-30)',
        build: 'U1TR34.8-30',
        date: 'May 2024',
        size: '5.25 GB',
        region: 'Global / RETEU',
        type: 'Fastboot Service Package (flashfile.xml)',
        url: 'https://mirrors.lolinet.com/firmware/lenovo/motorola/rtwo/official/RETEU/XT2301-4_RTWO_RETEU_14_U1TR34.8-30_subsidy-DEFAULT_regulatory-DEFAULT_CFC.xml.zip',
        signed: true
      }
    ]
  },
  {
    model: 'Motorola Edge 30 Ultra',
    code: 'XT2241-2',
    brand: 'motorola',
    series: 'Edge Flagship',
    chipset: 'Snapdragon 8+ Gen 1',
    firmwares: [
      {
        version: 'Android 14 (U1SQ34.25-24)',
        build: 'U1SQ34.25-24',
        date: 'Apr 2024',
        size: '4.85 GB',
        region: 'Global / RETEU',
        type: 'Fastboot Service Package (flashfile.xml)',
        url: 'https://mirrors.lolinet.com/firmware/lenovo/motorola/eqs/official/RETEU/XT2241-2_EQS_RETEU_14_U1SQ34.25-24_subsidy-DEFAULT_regulatory-DEFAULT_CFC.xml.zip',
        signed: true
      }
    ]
  },

  // ==========================================
  // MOTO G SERIES (BESTSELLERS)
  // ==========================================
  {
    model: 'Moto G84 5G',
    code: 'XT2347-2',
    brand: 'motorola',
    series: 'Moto G Series',
    chipset: 'Snapdragon 695 5G',
    firmwares: [
      {
        version: 'Android 14 (U1TC34.84-28)',
        build: 'U1TC34.84-28',
        date: 'Jun 2024',
        size: '4.35 GB',
        region: 'Global / RETIN / RETEU',
        type: 'Fastboot Service Package (flashfile.xml)',
        url: 'https://mirrors.lolinet.com/firmware/lenovo/motorola/penangf/official/RETIN/XT2347-2_PENANGF_RETIN_14_U1TC34.84-28_subsidy-DEFAULT_regulatory-DEFAULT_CFC.xml.zip',
        signed: true
      }
    ]
  },
  {
    model: 'Moto G54 5G',
    code: 'XT2343-1',
    brand: 'motorola',
    series: 'Moto G Series',
    chipset: 'Dimensity 7020',
    firmwares: [
      {
        version: 'Android 14 (U1TD34.94-12)',
        build: 'U1TD34.94-12',
        date: 'Jul 2024',
        size: '4.20 GB',
        region: 'Global / RETIN',
        type: 'Fastboot Service Package (flashfile.xml)',
        url: 'https://mirrors.lolinet.com/firmware/lenovo/motorola/cancunf/official/RETIN/XT2343-1_CANCUNF_RETIN_14_U1TD34.94-12_subsidy-DEFAULT_regulatory-DEFAULT_CFC.xml.zip',
        signed: true
      }
    ]
  },
  {
    model: 'Moto G64 5G',
    code: 'XT2431-1',
    brand: 'motorola',
    series: 'Moto G Series',
    chipset: 'Dimensity 7025',
    firmwares: [
      {
        version: 'Android 14 (U1UE34.48-18)',
        build: 'U1UE34.48-18',
        date: 'Jun 2024',
        size: '4.15 GB',
        region: 'India / Global',
        type: 'Fastboot Service Package (flashfile.xml)',
        url: 'https://mirrors.lolinet.com/firmware/lenovo/motorola/cancun/official/RETIN/XT2431-1_CANCUN_RETIN_14_U1UE34.48-18_subsidy-DEFAULT_regulatory-DEFAULT_CFC.xml.zip',
        signed: true
      }
    ]
  },
  {
    model: 'Moto G73 5G',
    code: 'XT2237-1',
    brand: 'motorola',
    series: 'Moto G Series',
    chipset: 'Dimensity 930',
    firmwares: [
      {
        version: 'Android 14 (U1TN34.82-15)',
        build: 'U1TN34.82-15',
        date: 'May 2024',
        size: '3.95 GB',
        region: 'Global / RETEU',
        type: 'Fastboot Service Package (flashfile.xml)',
        url: 'https://mirrors.lolinet.com/firmware/lenovo/motorola/devonf/official/RETEU/XT2237-1_DEVONF_RETEU_14_U1TN34.82-15_subsidy-DEFAULT_regulatory-DEFAULT_CFC.xml.zip',
        signed: true
      }
    ]
  },
  {
    model: 'Moto G52',
    code: 'XT2221-1',
    brand: 'motorola',
    series: 'Moto G Series',
    chipset: 'Snapdragon 680',
    firmwares: [
      {
        version: 'Android 13 (T1SRS33.72-22-4)',
        build: 'T1SRS33.72-22-4',
        date: 'Jan 2024',
        size: '3.65 GB',
        region: 'Global / RETIN',
        type: 'Fastboot Service Package (flashfile.xml)',
        url: 'https://mirrors.lolinet.com/firmware/lenovo/motorola/rhode/official/RETIN/XT2221-1_RHODE_RETIN_13_T1SRS33.72-22-4_subsidy-DEFAULT_regulatory-DEFAULT_CFC.xml.zip',
        signed: true
      }
    ]
  },
  {
    model: 'Moto G60',
    code: 'XT2135-2',
    brand: 'motorola',
    series: 'Moto G Series',
    chipset: 'Snapdragon 732G',
    firmwares: [
      {
        version: 'Android 12 (S1PIS32.32-67-15)',
        build: 'S1PIS32.32-67-15',
        date: 'Nov 2022',
        size: '3.40 GB',
        region: 'Global / RETIN',
        type: 'Fastboot Service Package (flashfile.xml)',
        url: 'https://mirrors.lolinet.com/firmware/lenovo/motorola/hanoip/official/RETIN/XT2135-2_HANOIP_RETIN_12_S1PIS32.32-67-15_subsidy-DEFAULT_regulatory-DEFAULT_CFC.xml.zip',
        signed: true
      }
    ]
  },
  {
    model: 'Moto G8 Power',
    code: 'XT2041-3',
    brand: 'motorola',
    series: 'Moto G Series',
    chipset: 'Snapdragon 665',
    firmwares: [
      {
        version: 'Android 11 (RPES31.Q4U-47-35-11)',
        build: 'RPES31.Q4U-47-35-11',
        date: 'Jan 2022',
        size: '2.85 GB',
        region: 'Global / RETEU',
        type: 'Fastboot Service Package (flashfile.xml)',
        url: 'https://mirrors.lolinet.com/firmware/lenovo/motorola/sofiar/official/RETEU/XT2041-3_SOFIAR_RETEU_11_RPES31.Q4U-47-35-11_subsidy-DEFAULT_regulatory-DEFAULT_CFC.xml.zip',
        signed: true
      }
    ]
  },

  // ==========================================
  // MOTOROLA CLASSICS & ICONS
  // ==========================================
  {
    model: 'Google Nexus 6 (Motorola Shamu)',
    code: 'shamu',
    brand: 'motorola',
    series: 'Google Nexus Legend',
    chipset: 'Snapdragon 805',
    firmwares: [
      {
        version: 'Android 7.1.1 Nougat (N6F27M)',
        build: 'N6F27M',
        date: 'Oct 2017',
        size: '1.25 GB',
        region: 'Global Official Factory Image',
        type: 'Google Factory Fastboot Package',
        url: 'https://dl.google.com/dl/android/aosp/shamu-n6f27m-factory-a7bb500c.zip',
        signed: true,
        components: ['boot.img', 'recovery.img', 'system.img', 'cache.img', 'userdata.img', 'radio.img']
      }
    ]
  },
  {
    model: 'Moto G (1st Gen 2013)',
    code: 'falcon',
    brand: 'motorola',
    series: 'Moto Classics',
    chipset: 'Snapdragon 400',
    firmwares: [
      {
        version: 'Android 5.1 Lollipop (221.21.31)',
        build: 'LPB23.13-56',
        date: 'Sep 2015',
        size: '620 MB',
        region: 'Global / RETEU',
        type: 'Fastboot Service Package (xml)',
        url: 'https://mirrors.lolinet.com/firmware/lenovo/motorola/falcon/official/RETEU/XT1032_FALCON_RETEU_5.1_LPB23.13-56_cid7_CFC.xml.zip',
        signed: true
      }
    ]
  },
  {
    model: 'Moto X (1st Gen 2013)',
    code: 'ghost',
    brand: 'motorola',
    series: 'Moto Classics',
    chipset: 'Motorola X8 Mobile Computing',
    firmwares: [
      {
        version: 'Android 5.1 Lollipop (222.21.15)',
        build: 'LPA23.12-15.5',
        date: 'Aug 2015',
        size: '780 MB',
        region: 'Global / RETEU',
        type: 'Fastboot Service Package (xml)',
        url: 'https://mirrors.lolinet.com/firmware/lenovo/motorola/ghost/official/RETEU/XT1052_GHOST_RETEU_5.1_LPA23.12-15.5_cid7_CFC.xml.zip',
        signed: true
      }
    ]
  },
  {
    model: 'Motorola Droid RAZR',
    code: 'XT910',
    brand: 'motorola',
    series: 'Moto Classics',
    chipset: 'TI OMAP 4460 Dual-core',
    firmwares: [
      {
        version: 'Android 4.1.2 Jelly Bean (98.72.16)',
        build: '9.8.2O-124_SPU-4',
        date: 'Apr 2013',
        size: '650 MB',
        region: 'Global / Europe',
        type: 'Fastboot XML Service Pack',
        url: 'https://mirrors.lolinet.com/firmware/lenovo/motorola/umts_spyder/official/Retail_British/SPD-98.72.16_Retail_En_EU.xml.zip',
        signed: true
      }
    ]
  }
];

module.exports = {
  MOTOROLA_REGISTRY
};
