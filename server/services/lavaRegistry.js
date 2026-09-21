// Official Registry of Lava International & Maxx Mobile Devices
// Includes Lava Agni 5G series, Blaze series, Yuva series, legacy Iris series, and Maxx Mobile devices.
// Flashing utilities: SP Flash Tool (MediaTek Scatter), SPD ResearchDownload (Unisoc/Spreadtrum .PAC).

const LAVA_REGISTRY = [
  // ==========================================
  // AGNI 5G FLAGSHIP SERIES
  // ==========================================
  {
    model: 'Lava Agni 2 5G',
    code: 'LXX503',
    brand: 'lava',
    series: 'Agni Series (Flagship 5G)',
    chipset: 'MediaTek Dimensity 7050 (MT6877V)',
    bootKey: 'Hold Volume Down while plugging in USB cable (MTK Preloader/BROM)',
    firmwares: [
      {
        version: 'Android 13 Official Stock Firmware (LXX503_SW_V10_20230818)',
        build: 'Lava_Agni2_5G_LXX503_V10',
        date: 'August 2023',
        size: '3.1 GB',
        region: 'India (IN)',
        type: 'Official SP Flash Tool Scatter Firmware',
        url: 'https://archive.org/download/lava-official-stock-roms/Lava_Agni_2_5G_LXX503_MT6877_V10.zip',
        signed: true,
        components: ['MT6877_Android_scatter.txt', 'preloader_lxx503.bin', 'boot.img', 'super.img', 'vbmeta.img', 'dtbo.img']
      }
    ]
  },
  {
    model: 'Lava Agni 5G',
    code: 'LXX501',
    brand: 'lava',
    series: 'Agni Series (Flagship 5G)',
    chipset: 'MediaTek Dimensity 810 (MT6833V)',
    bootKey: 'Hold Volume Up + Down while inserting USB cable',
    firmwares: [
      {
        version: 'Android 11 / 12 Official Stock Firmware (LXX501_SW_V08_20220612)',
        build: 'Lava_Agni_5G_LXX501_V08',
        date: 'June 2022',
        size: '2.8 GB',
        region: 'India (IN)',
        type: 'Official SP Flash Tool Scatter Firmware',
        url: 'https://archive.org/download/lava-official-stock-roms/Lava_Agni_5G_LXX501_MT6833_V08.zip',
        signed: true,
        components: ['MT6833_Android_scatter.txt', 'preloader_lxx501.bin', 'boot.img', 'super.img', 'vbmeta.img']
      }
    ]
  },

  // ==========================================
  // BLAZE 5G & 4G SERIES
  // ==========================================
  {
    model: 'Lava Blaze Curve 5G',
    code: 'LXX506',
    brand: 'lava',
    series: 'Blaze Series (Curved AMOLED 5G)',
    chipset: 'MediaTek Dimensity 7050 (MT6877V)',
    bootKey: 'Hold Volume Down while connecting USB cable',
    firmwares: [
      {
        version: 'Android 13 Official Stock ROM (LXX506_SW_V05_20240410)',
        build: 'Lava_Blaze_Curve_5G_LXX506_V05',
        date: 'April 2024',
        size: '3.2 GB',
        region: 'India (IN)',
        type: 'Official SP Flash Tool Scatter Firmware',
        url: 'https://archive.org/download/lava-official-stock-roms/Lava_Blaze_Curve_5G_LXX506_V05.zip',
        signed: true,
        components: ['MT6877_Android_scatter.txt', 'preloader_lxx506.bin', 'boot.img', 'super.img', 'vbmeta.img']
      }
    ]
  },
  {
    model: 'Lava Blaze 5G',
    code: 'LXX502',
    brand: 'lava',
    series: 'Blaze Series (Budget 5G Champion)',
    chipset: 'MediaTek Dimensity 700 (MT6833)',
    bootKey: 'Hold Volume Down while inserting USB cable',
    firmwares: [
      {
        version: 'Android 13 Official Clean Stock ROM (LXX502_SW_V09_20231105)',
        build: 'Lava_Blaze_5G_LXX502_V09',
        date: 'November 2023',
        size: '2.6 GB',
        region: 'India (IN)',
        type: 'Official SP Flash Tool Scatter Firmware',
        url: 'https://archive.org/download/lava-official-stock-roms/Lava_Blaze_5G_LXX502_MT6833_V09.zip',
        signed: true,
        components: ['MT6833_Android_scatter.txt', 'preloader_lxx502.bin', 'boot.img', 'super.img', 'vbmeta.img']
      }
    ]
  },
  {
    model: 'Lava Blaze Pro',
    code: 'LXX504',
    brand: 'lava',
    series: 'Blaze Series (50MP Triple Cam)',
    chipset: 'MediaTek Helio G37 (MT6765V/CB)',
    bootKey: 'Hold Volume Down while inserting USB cable',
    firmwares: [
      {
        version: 'Android 12 Official Stock ROM (LXX504_SW_V04_20221220)',
        build: 'Lava_Blaze_Pro_LXX504_V04',
        date: 'December 2022',
        size: '2.1 GB',
        region: 'India (IN)',
        type: 'Official SP Flash Tool Scatter Firmware',
        url: 'https://archive.org/download/lava-official-stock-roms/Lava_Blaze_Pro_LXX504_MT6765_V04.zip',
        signed: true,
        components: ['MT6765_Android_scatter.txt', 'preloader_lxx504.bin', 'boot.img', 'super.img', 'recovery.img']
      }
    ]
  },

  // ==========================================
  // YUVA SERIES (UNISOC / MEDIATEK BUDGET)
  // ==========================================
  {
    model: 'Lava Yuva 3 5G',
    code: 'LXX507',
    brand: 'lava',
    series: 'Yuva Series',
    chipset: 'Unisoc Tiger T750 5G (UMS9230)',
    bootKey: 'Hold Volume Down while connecting USB cable (SPD Download Mode)',
    firmwares: [
      {
        version: 'Android 13 Official Stock PAC File (LXX507_SW_V03_20240315)',
        build: 'Lava_Yuva_3_5G_LXX507_V03',
        date: 'March 2024',
        size: '2.4 GB',
        region: 'India (IN)',
        type: 'Official SPD Upgrade PAC Package',
        url: 'https://archive.org/download/lava-official-stock-roms/Lava_Yuva_3_5G_LXX507_PAC.zip',
        signed: true,
        components: ['Lava_Yuva_3_5G_LXX507.pac', 'fdl1.bin', 'fdl2.bin', 'boot.img', 'super.img']
      }
    ]
  },
  {
    model: 'Lava Yuva 2 Pro',
    code: 'LXX505',
    brand: 'lava',
    series: 'Yuva Series',
    chipset: 'MediaTek Helio G37 (MT6765)',
    bootKey: 'Hold Volume Down while inserting USB cable',
    firmwares: [
      {
        version: 'Android 12 Official Stock ROM (LXX505_SW_V06_20230610)',
        build: 'Lava_Yuva_2_Pro_LXX505_V06',
        date: 'June 2023',
        size: '1.9 GB',
        region: 'India (IN)',
        type: 'Official SP Flash Tool Scatter Firmware',
        url: 'https://archive.org/download/lava-official-stock-roms/Lava_Yuva_2_Pro_LXX505_MT6765_V06.zip',
        signed: true,
        components: ['MT6765_Android_scatter.txt', 'preloader_lxx505.bin', 'boot.img', 'super.img']
      }
    ]
  },
  {
    model: 'Lava Yuva 2',
    code: 'LXX508',
    brand: 'lava',
    series: 'Yuva Series',
    chipset: 'Unisoc Tiger T606 (UMS9230)',
    bootKey: 'Hold Volume Down while connecting USB cable',
    firmwares: [
      {
        version: 'Android 13 Official PAC Firmware (LXX508_SW_V02_20230912)',
        build: 'Lava_Yuva_2_LXX508_V02',
        date: 'September 2023',
        size: '2.0 GB',
        region: 'India (IN)',
        type: 'Official SPD Upgrade PAC Package',
        url: 'https://archive.org/download/lava-official-stock-roms/Lava_Yuva_2_LXX508_PAC.zip',
        signed: true,
        components: ['Lava_Yuva_2_LXX508.pac', 'fdl1.bin', 'fdl2.bin', 'boot.img', 'super.img']
      }
    ]
  },

  // ==========================================
  // IRIS & Z SERIES (LEGACY CLASSICS)
  // ==========================================
  {
    model: 'Lava Iris X8',
    code: 'LXX8',
    brand: 'lava',
    series: 'Iris Series (Octa-Core Classic)',
    chipset: 'MediaTek MT6592M Octa-Core 1.4GHz',
    bootKey: 'Hold Volume Down while inserting USB cable',
    firmwares: [
      {
        version: 'Android 5.1 Lollipop Official Upgrade ROM (Iris_X8_S105)',
        build: 'Lava_Iris_X8_S105_20150918',
        date: 'September 2015',
        size: '760 MB',
        region: 'India (IN)',
        type: 'Official SP Flash Tool Scatter Firmware',
        url: 'https://archive.org/download/lava-official-stock-roms/Lava_Iris_X8_MT6592M_S105.zip',
        signed: true,
        components: ['MT6592_Android_scatter.txt', 'preloader_lxx8.bin', 'boot.img', 'system.img', 'recovery.img']
      }
    ]
  },
  {
    model: 'Lava Z60',
    code: 'LZ60',
    brand: 'lava',
    series: 'Z Series',
    chipset: 'MediaTek MT6737M Quad-Core',
    bootKey: 'Hold Volume Down while connecting USB cable',
    firmwares: [
      {
        version: 'Android 7.0 Nougat Star OS (Lava_Z60_S116)',
        build: 'Lava_Z60_S116_20180420',
        date: 'April 2018',
        size: '1.2 GB',
        region: 'India (IN)',
        type: 'Official SP Flash Tool Scatter Firmware',
        url: 'https://archive.org/download/lava-official-stock-roms/Lava_Z60_MT6737M_S116.zip',
        signed: true,
        components: ['MT6737M_Android_scatter.txt', 'preloader_lz60.bin', 'boot.img', 'system.img']
      }
    ]
  },

  // ==========================================
  // LAVA FEATURE PHONE
  // ==========================================
  {
    model: 'Lava Hero 600+',
    code: 'Hero-600-Plus',
    brand: 'lava',
    series: 'Hero Series (Feature Phone)',
    chipset: 'Spreadtrum SC6531E Keypad Chipset',
    bootKey: 'Hold Center / Call Key while inserting USB cable',
    firmwares: [
      {
        version: 'Official Factory Flash File (Hero_600+_V03)',
        build: 'Hero_600+_SC6531E_V03',
        date: 'August 2021',
        size: '8 MB',
        region: 'India (IN)',
        type: 'SPD ResearchDownload PAC Package',
        url: 'https://archive.org/download/lava-official-stock-roms/Lava_Hero_600_Plus_SC6531E.zip',
        signed: true,
        components: ['Hero_600_Plus.pac', 'fdl1.bin', 'fdl2.bin']
      }
    ]
  }
];

// ==========================================
// MAXX / MAX MOBILE REGISTRY
// ==========================================
const MAXX_REGISTRY = [
  {
    model: 'Maxx AX8 Race',
    code: 'AX8',
    brand: 'max',
    series: 'AX Series (Android Smartphone)',
    chipset: 'MediaTek MT6577 Dual-Core 1.0GHz',
    bootKey: 'Hold Volume Down while inserting USB cable',
    firmwares: [
      {
        version: 'Android 4.0.4 Ice Cream Sandwich Official ROM (AX8_V1.1)',
        build: 'Maxx_AX8_V1.1_20130510',
        date: 'May 2013',
        size: '320 MB',
        region: 'India (IN)',
        type: 'Official SP Flash Tool Scatter Firmware',
        url: 'https://archive.org/download/maxx-mobile-official-firmwares/Maxx_AX8_Race_MT6577.zip',
        signed: true,
        components: ['MT6577_Android_scatter_emmc.txt', 'preloader.bin', 'boot.img', 'system.img', 'recovery.img']
      }
    ]
  },
  {
    model: 'Maxx AX50',
    code: 'AX50',
    brand: 'max',
    series: 'AX Series (Android Smartphone)',
    chipset: 'MediaTek MT6575 1.0GHz',
    bootKey: 'Hold Volume Up while connecting USB cable',
    firmwares: [
      {
        version: 'Android 2.3.6 Gingerbread Official Stock ROM',
        build: 'Maxx_AX50_V1.0_20121115',
        date: 'November 2012',
        size: '210 MB',
        region: 'India (IN)',
        type: 'Official SP Flash Tool Scatter Firmware',
        url: 'https://archive.org/download/maxx-mobile-official-firmwares/Maxx_AX50_MT6575.zip',
        signed: true,
        components: ['MT6575_Android_scatter.txt', 'preloader.bin', 'boot.img', 'system.img']
      }
    ]
  },
  {
    model: 'Maxx Sleek MX400',
    code: 'MX400',
    brand: 'max',
    series: 'MX Feature Phone Series',
    chipset: 'Spreadtrum SC6531 Keypad SoC',
    bootKey: 'Hold Center D-Pad button while plugging USB cable',
    firmwares: [
      {
        version: 'Official Factory PAC Firmware (MX400_V2.0)',
        build: 'Maxx_MX400_SC6531_V2.0',
        date: 'April 2015',
        size: '6 MB',
        region: 'India (IN)',
        type: 'SPD Upgrade Tool PAC Package',
        url: 'https://archive.org/download/maxx-mobile-official-firmwares/Maxx_MX400_SC6531.zip',
        signed: true,
        components: ['Maxx_MX400.pac', 'fdl1.bin', 'fdl2.bin']
      }
    ]
  },
  {
    model: 'Maxx Turbo M204',
    code: 'M204',
    brand: 'max',
    series: 'Turbo Keypad Series',
    chipset: 'MediaTek MT6261DA Keypad SoC',
    bootKey: 'Hold Call Key while inserting USB cable',
    firmwares: [
      {
        version: 'Official Stock Flash File (M204_MT6261)',
        build: 'Maxx_Turbo_M204_MT6261',
        date: 'July 2017',
        size: '4 MB',
        region: 'India (IN)',
        type: 'FlashTool / Miracle Box MTK Bin',
        url: 'https://archive.org/download/maxx-mobile-official-firmwares/Maxx_Turbo_M204_MT6261.zip',
        signed: true,
        components: ['ROM_0.bin', 'MT6261DA.cfg']
      }
    ]
  }
];

module.exports = {
  LAVA_REGISTRY,
  MAXX_REGISTRY
};
