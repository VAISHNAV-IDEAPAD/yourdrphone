// Official Registry of Oppo & Realme Smartphones & Stock ColorOS / Realme UI Firmwares
// Supports Oppo Find Flagships, Reno Series, F/A Series, and Realme GT & Number Series

const OPPO_REGISTRY = [
  // ==========================================
  // OPPO FIND SERIES (ULTRA FLAGSHIPS & FOLDABLES)
  // ==========================================
  {
    model: 'Oppo Find X7 Ultra',
    code: 'PHY110',
    brand: 'oppo',
    series: 'Oppo Find Flagship',
    chipset: 'Snapdragon 8 Gen 3',
    firmwares: [
      {
        version: 'ColorOS 14 / Android 14 (PHY110_14.0.1.628)',
        build: 'PHY110_14.0.1.628(CN01)',
        date: 'Aug 2024',
        size: '7.45 GB',
        region: 'China / Global OFP',
        type: 'Official OFP Fastboot Flash Package (MSM Tool)',
        url: 'https://oppostockrom.com/get/PHY110_14.0.1.628_ColorOS14_Oppo_Find_X7_Ultra.zip',
        signed: true,
        components: ['boot.img', 'super.img', 'my_manifest.xml', 'prog_firehose_ddr.elf']
      }
    ]
  },
  {
    model: 'Oppo Find N3 (Foldable)',
    code: 'CPH2499',
    brand: 'oppo',
    series: 'Oppo Find Foldable',
    chipset: 'Snapdragon 8 Gen 2',
    firmwares: [
      {
        version: 'ColorOS 14 / Android 14 (CPH2499_14.0.0.810)',
        build: 'CPH2499_14.0.0.810(EX01)',
        date: 'Jul 2024',
        size: '7.20 GB',
        region: 'Global (EX)',
        type: 'Official Fastboot OFP Package',
        url: 'https://oppostockrom.com/get/CPH2499_14.0.0.810_ColorOS14_Oppo_Find_N3.zip',
        signed: true
      }
    ]
  },
  {
    model: 'Oppo Find X6 Pro',
    code: 'PGEM10',
    brand: 'oppo',
    series: 'Oppo Find Flagship',
    chipset: 'Snapdragon 8 Gen 2',
    firmwares: [
      {
        version: 'ColorOS 14 / Android 14 (PGEM10_14.0.0.702)',
        build: 'PGEM10_14.0.0.702(CN01)',
        date: 'Jun 2024',
        size: '6.90 GB',
        region: 'China / Global',
        type: 'Official OFP Flash Package',
        url: 'https://oppostockrom.com/get/PGEM10_14.0.0.702_ColorOS14_Oppo_Find_X6_Pro.zip',
        signed: true
      }
    ]
  },
  {
    model: 'Oppo Find X5 Pro',
    code: 'CPH2305',
    brand: 'oppo',
    series: 'Oppo Find Flagship',
    chipset: 'Snapdragon 8 Gen 1',
    firmwares: [
      {
        version: 'ColorOS 14 / Android 14 (CPH2305_14.0.0.501)',
        build: 'CPH2305_14.0.0.501(EX01)',
        date: 'Apr 2024',
        size: '6.55 GB',
        region: 'Global / Europe',
        type: 'Official OFP Flash Package',
        url: 'https://oppostockrom.com/get/CPH2305_14.0.0.501_ColorOS14_Oppo_Find_X5_Pro.zip',
        signed: true
      }
    ]
  },

  // ==========================================
  // OPPO RENO SERIES (PORTRAIT HEROES)
  // ==========================================
  {
    model: 'Oppo Reno 12 Pro 5G',
    code: 'CPH2629',
    brand: 'oppo',
    series: 'Oppo Reno Series',
    chipset: 'Dimensity 7300-Energy',
    firmwares: [
      {
        version: 'ColorOS 14.1 / Android 14 (CPH2629_14.1.0.420)',
        build: 'CPH2629_14.1.0.420(EX01)',
        date: 'Aug 2024',
        size: '6.85 GB',
        region: 'Global / India (EX)',
        type: 'Official OFP Flash Package',
        url: 'https://oppostockrom.com/get/CPH2629_14.1.0.420_ColorOS14.1_Oppo_Reno12_Pro.zip',
        signed: true
      }
    ]
  },
  {
    model: 'Oppo Reno 12 5G',
    code: 'CPH2625',
    brand: 'oppo',
    series: 'Oppo Reno Series',
    chipset: 'Dimensity 7300-Energy',
    firmwares: [
      {
        version: 'ColorOS 14.1 / Android 14 (CPH2625_14.1.0.415)',
        build: 'CPH2625_14.1.0.415(EX01)',
        date: 'Aug 2024',
        size: '6.65 GB',
        region: 'Global / Europe',
        type: 'Official OFP Flash Package',
        url: 'https://oppostockrom.com/get/CPH2625_14.1.0.415_ColorOS14.1_Oppo_Reno12.zip',
        signed: true
      }
    ]
  },
  {
    model: 'Oppo Reno 11 Pro 5G',
    code: 'CPH2607',
    brand: 'oppo',
    series: 'Oppo Reno Series',
    chipset: 'Dimensity 8200',
    firmwares: [
      {
        version: 'ColorOS 14 / Android 14 (CPH2607_14.0.0.510)',
        build: 'CPH2607_14.0.0.510(EX01)',
        date: 'May 2024',
        size: '6.40 GB',
        region: 'Global / India',
        type: 'Official OFP Flash Package',
        url: 'https://oppostockrom.com/get/CPH2607_14.0.0.510_ColorOS14_Oppo_Reno11_Pro.zip',
        signed: true
      }
    ]
  },
  {
    model: 'Oppo Reno 10 Pro+ 5G',
    code: 'CPH2521',
    brand: 'oppo',
    series: 'Oppo Reno Series',
    chipset: 'Snapdragon 8+ Gen 1',
    firmwares: [
      {
        version: 'ColorOS 14 / Android 14 (CPH2521_14.0.0.601)',
        build: 'CPH2521_14.0.0.601(EX01)',
        date: 'Apr 2024',
        size: '6.35 GB',
        region: 'Global / India',
        type: 'Official OFP Flash Package',
        url: 'https://oppostockrom.com/get/CPH2521_14.0.0.601_ColorOS14_Oppo_Reno10_ProPlus.zip',
        signed: true
      }
    ]
  },
  {
    model: 'Oppo Reno 8 Pro 5G',
    code: 'CPH2357',
    brand: 'oppo',
    series: 'Oppo Reno Series',
    chipset: 'Dimensity 8100-Max',
    firmwares: [
      {
        version: 'ColorOS 14 / Android 14 (CPH2357_14.0.0.400)',
        build: 'CPH2357_14.0.0.400(EX01)',
        date: 'Mar 2024',
        size: '5.90 GB',
        region: 'Global / India',
        type: 'Official OFP Flash Package',
        url: 'https://oppostockrom.com/get/CPH2357_14.0.0.400_ColorOS14_Oppo_Reno8_Pro.zip',
        signed: true
      }
    ]
  },

  // ==========================================
  // OPPO F & A SERIES
  // ==========================================
  {
    model: 'Oppo F27 Pro+ 5G (IP69 Armor)',
    code: 'CPH2643',
    brand: 'oppo',
    series: 'Oppo F Series',
    chipset: 'Dimensity 7050',
    firmwares: [
      {
        version: 'ColorOS 14 / Android 14 (CPH2643_14.0.1.320)',
        build: 'CPH2643_14.0.1.320(EX01)',
        date: 'Jul 2024',
        size: '5.75 GB',
        region: 'India / Global',
        type: 'Official OFP Flash Package',
        url: 'https://oppostockrom.com/get/CPH2643_14.0.1.320_ColorOS14_Oppo_F27_ProPlus.zip',
        signed: true
      }
    ]
  },
  {
    model: 'Oppo F25 Pro 5G',
    code: 'CPH2603',
    brand: 'oppo',
    series: 'Oppo F Series',
    chipset: 'Dimensity 7050',
    firmwares: [
      {
        version: 'ColorOS 14 / Android 14 (CPH2603_14.0.1.310)',
        build: 'CPH2603_14.0.1.310(EX01)',
        date: 'Jun 2024',
        size: '5.60 GB',
        region: 'India / Global',
        type: 'Official OFP Flash Package',
        url: 'https://oppostockrom.com/get/CPH2603_14.0.1.310_ColorOS14_Oppo_F25_Pro.zip',
        signed: true
      }
    ]
  },
  {
    model: 'Oppo A78 5G',
    code: 'CPH2483',
    brand: 'oppo',
    series: 'Oppo A Series',
    chipset: 'Dimensity 700',
    firmwares: [
      {
        version: 'ColorOS 14 / Android 14 (CPH2483_14.0.0.500)',
        build: 'CPH2483_14.0.0.500(EX01)',
        date: 'May 2024',
        size: '5.20 GB',
        region: 'Global / India',
        type: 'Official OFP Flash Package',
        url: 'https://oppostockrom.com/get/CPH2483_14.0.0.500_ColorOS14_Oppo_A78_5G.zip',
        signed: true
      }
    ]
  },

  // ==========================================
  // REALME POWERHOUSES
  // ==========================================
  {
    model: 'Realme GT 6 5G',
    code: 'RMX3851',
    brand: 'oppo',
    series: 'Realme GT Flagship',
    chipset: 'Snapdragon 8s Gen 3',
    firmwares: [
      {
        version: 'Realme UI 5.0 / Android 14 (RMX3851_14.0.1.610)',
        build: 'RMX3851_14.0.1.610(EX01)',
        date: 'Jul 2024',
        size: '6.75 GB',
        region: 'Global / India',
        type: 'Official OFP Flash Package',
        url: 'https://oppostockrom.com/get/RMX3851_14.0.1.610_RealmeUI5_Realme_GT_6.zip',
        signed: true
      }
    ]
  },
  {
    model: 'Realme 12 Pro+ 5G',
    code: 'RMX3840',
    brand: 'oppo',
    series: 'Realme Number Series',
    chipset: 'Snapdragon 7s Gen 2',
    firmwares: [
      {
        version: 'Realme UI 5.0 / Android 14 (RMX3840_14.0.0.812)',
        build: 'RMX3840_14.0.0.812(EX01)',
        date: 'Jun 2024',
        size: '6.30 GB',
        region: 'Global / India',
        type: 'Official OFP Flash Package',
        url: 'https://oppostockrom.com/get/RMX3840_14.0.0.812_RealmeUI5_Realme_12_ProPlus.zip',
        signed: true
      }
    ]
  },
  {
    model: 'Realme 11 Pro+ 5G',
    code: 'RMX3740',
    brand: 'oppo',
    series: 'Realme Number Series',
    chipset: 'Dimensity 7050',
    firmwares: [
      {
        version: 'Realme UI 5.0 / Android 14 (RMX3740_14.0.0.500)',
        build: 'RMX3740_14.0.0.500(EX01)',
        date: 'May 2024',
        size: '6.15 GB',
        region: 'Global / India',
        type: 'Official OFP Flash Package',
        url: 'https://oppostockrom.com/get/RMX3740_14.0.0.500_RealmeUI5_Realme_11_ProPlus.zip',
        signed: true
      }
    ]
  }
];

module.exports = {
  OPPO_REGISTRY
};
