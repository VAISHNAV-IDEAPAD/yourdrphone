// Official Registry of Nokia Android Devices (HMD Global Era)
// Flashing utilities: OST LA (Online Service Tool), Fastboot / Fastbootd, Qualcomm EDL (QFIL), and MediaTek / Unisoc tools.

const NOKIA_ANDROID_REGISTRY = [
  // ==========================================
  // FLAGSHIP & PREMIUM SERIES
  // ==========================================
  {
    model: 'Nokia 9 PureView',
    code: 'TA-1087',
    brand: 'nokia_android',
    series: 'PureView Flagship (Penta-Lens Zeiss)',
    chipset: 'Qualcomm Snapdragon 845 (SDM845)',
    bootKey: 'Hold Volume Down + Power while inserting USB cable (Fastboot Mode)',
    firmwares: [
      {
        version: 'Android 10 Official Stock ROM (00WW_5_140)',
        build: '00WW_5_140_SP01',
        date: 'August 2020',
        size: '2.1 GB',
        region: 'Global / Europe (00WW)',
        type: 'Official OST LA / Fastboot Flash Package',
        url: 'https://archive.org/download/nokia-android-firmware-archive/Nokia_9_PureView_TA-1087_00WW_5_140.zip',
        signed: true,
        components: ['boot.img', 'system.img', 'vendor.img', 'abl.elf', 'xbl.elf', 'rawprogram0.xml']
      }
    ]
  },
  {
    model: 'Nokia 8 Sirocco',
    code: 'TA-1005',
    brand: 'nokia_android',
    series: '8 Series (Curved pOLED Flagship)',
    chipset: 'Qualcomm Snapdragon 835 (MSM8998)',
    bootKey: 'Hold Volume Down + Power while plugging USB cable (Fastboot Mode)',
    firmwares: [
      {
        version: 'Android 10 Official Stock ROM (00WW_5_120)',
        build: '00WW_5_120_SP01',
        date: 'July 2020',
        size: '1.9 GB',
        region: 'Global (00WW)',
        type: 'Official OST LA / Fastboot Package',
        url: 'https://archive.org/download/nokia-android-firmware-archive/Nokia_8_Sirocco_TA-1005_00WW_5_120.zip',
        signed: true,
        components: ['boot.img', 'system.img', 'vendor.img', 'abl.elf', 'rawprogram0.xml']
      }
    ]
  },
  {
    model: 'Nokia 8.3 5G',
    code: 'TA-1243',
    brand: 'nokia_android',
    series: '8 Series (First 5G PureDisplay)',
    chipset: 'Qualcomm Snapdragon 765G 5G (SM7250)',
    bootKey: 'Hold Volume Down while plugging USB cable (Fastboot Mode)',
    firmwares: [
      {
        version: 'Android 12 Official Stock ROM (00WW_3_380)',
        build: '00WW_3_380_SP02',
        date: 'April 2022',
        size: '2.8 GB',
        region: 'Global (00WW)',
        type: 'Official HMD Fastboot / OST Package',
        url: 'https://archive.org/download/nokia-android-firmware-archive/Nokia_8.3_5G_TA-1243_00WW_3_380.zip',
        signed: true,
        components: ['super.img', 'boot.img', 'vbmeta.img', 'dtbo.img', 'abl.elf']
      }
    ]
  },
  {
    model: 'Nokia 7 Plus',
    code: 'TA-1062',
    brand: 'nokia_android',
    series: '7 Series (Legendary Android One Hit)',
    chipset: 'Qualcomm Snapdragon 660 (SDM660)',
    bootKey: 'Hold Volume Down + Power while inserting USB cable',
    firmwares: [
      {
        version: 'Android 10 Official Stock ROM (00WW_4_15C)',
        build: '00WW_4_15C_SP03',
        date: 'October 2020',
        size: '1.8 GB',
        region: 'Global (00WW)',
        type: 'Official OST LA Service Package (NBX)',
        url: 'https://archive.org/download/nokia-android-firmware-archive/Nokia_7_Plus_B2N_00WW_4_15C.zip',
        signed: true,
        components: ['B2N-415C-0-00WW-B01.nbx', 'boot.img', 'system.img', 'vendor.img']
      }
    ]
  },
  {
    model: 'Nokia 6.1 Plus (Nokia X6)',
    code: 'TA-1103',
    brand: 'nokia_android',
    series: '6 Series (Compact Notch Hit)',
    chipset: 'Qualcomm Snapdragon 636 (SDM636)',
    bootKey: 'Hold Volume Down + Power while inserting USB cable',
    firmwares: [
      {
        version: 'Android 10 Official Stock ROM (00WW_4_15B)',
        build: '00WW_4_15B_SP02',
        date: 'September 2020',
        size: '1.7 GB',
        region: 'Global / India (00WW / IN)',
        type: 'Official OST LA Service Package (DRG)',
        url: 'https://archive.org/download/nokia-android-firmware-archive/Nokia_6.1_Plus_DRG_00WW_4_15B.zip',
        signed: true,
        components: ['DRG-415B-0-00WW-B01.nbx', 'boot.img', 'system.img', 'vendor.img']
      }
    ]
  },

  // ==========================================
  // X & G SERIES (MODERN 5G & LONGEVITY)
  // ==========================================
  {
    model: 'Nokia X30 5G',
    code: 'TA-1450',
    brand: 'nokia_android',
    series: 'X Series (Eco 100% Recycled 5G)',
    chipset: 'Qualcomm Snapdragon 695 5G (SM6375)',
    bootKey: 'Hold Volume Down while inserting USB cable into PC',
    firmwares: [
      {
        version: 'Android 13 Official Stock ROM (00WW_2_230)',
        build: '00WW_2_230_SP01',
        date: 'September 2023',
        size: '3.1 GB',
        region: 'Global (00WW)',
        type: 'Official Fastbootd Service Package',
        url: 'https://archive.org/download/nokia-android-firmware-archive/Nokia_X30_5G_TA-1450_Android13.zip',
        signed: true,
        components: ['super.img', 'boot.img', 'init_boot.img', 'vbmeta.img', 'vendor_boot.img']
      }
    ]
  },
  {
    model: 'Nokia G21',
    code: 'TA-1404',
    brand: 'nokia_android',
    series: 'G Series (3-Day Battery Champion)',
    chipset: 'Unisoc Tiger T606 (UMS9230)',
    bootKey: 'Hold Volume Down while inserting USB cable (SPD Download Mode)',
    firmwares: [
      {
        version: 'Android 13 Official PAC Flash File (00WW_3_180)',
        build: '00WW_3_180_SP01',
        date: 'November 2023',
        size: '2.4 GB',
        region: 'Global (00WW)',
        type: 'Official SPD Upgrade PAC Package',
        url: 'https://archive.org/download/nokia-android-firmware-archive/Nokia_G21_TA-1404_UMS9230_PAC.zip',
        signed: true,
        components: ['Nokia_G21_TA-1404.pac', 'fdl1.bin', 'fdl2.bin', 'super.img', 'boot.img']
      }
    ]
  },
  {
    model: 'Nokia 5.4',
    code: 'TA-1340',
    brand: 'nokia_android',
    series: '5 Series (Cinema Quad Camera)',
    chipset: 'Qualcomm Snapdragon 662 (SM6115)',
    bootKey: 'Hold Volume Down + Power while plugging USB cable',
    firmwares: [
      {
        version: 'Android 12 Official Stock ROM (00WW_3_210)',
        build: '00WW_3_210_SP02',
        date: 'December 2022',
        size: '2.5 GB',
        region: 'Global (00WW)',
        type: 'Official OST LA / Fastboot Package',
        url: 'https://archive.org/download/nokia-android-firmware-archive/Nokia_5.4_TA-1340_Android12.zip',
        signed: true,
        components: ['super.img', 'boot.img', 'vbmeta.img', 'abl.elf']
      }
    ]
  },

  // ==========================================
  // C & BUDGET SERIES (UNISOC & MEDIATEK)
  // ==========================================
  {
    model: 'Nokia C31',
    code: 'TA-1497',
    brand: 'nokia_android',
    series: 'C Series (Mass Budget Phone)',
    chipset: 'Unisoc SC9863A Octa-Core',
    bootKey: 'Hold Volume Down while connecting USB cable',
    firmwares: [
      {
        version: 'Android 12 Official Stock PAC File (00WW_1_340)',
        build: '00WW_1_340_SP01',
        date: 'March 2023',
        size: '2.1 GB',
        region: 'Global (00WW)',
        type: 'Official SPD Upgrade PAC Package',
        url: 'https://archive.org/download/nokia-android-firmware-archive/Nokia_C31_TA-1497_SC9863A_PAC.zip',
        signed: true,
        components: ['Nokia_C31_TA-1497.pac', 'fdl1.bin', 'fdl2.bin', 'super.img']
      }
    ]
  },
  {
    model: 'Nokia 2.4',
    code: 'TA-1277',
    brand: 'nokia_android',
    series: '2 Series (MediaTek Helio P22)',
    chipset: 'MediaTek Helio P22 (MT6762)',
    bootKey: 'Hold Volume Down while connecting USB cable (MTK BROM / Preloader)',
    firmwares: [
      {
        version: 'Android 12 Official Stock Scatter ROM (00WW_3_220)',
        build: '00WW_3_220_SP01',
        date: 'July 2022',
        size: '2.0 GB',
        region: 'Global (00WW)',
        type: 'Official SP Flash Tool Scatter Firmware',
        url: 'https://archive.org/download/nokia-android-firmware-archive/Nokia_2.4_TA-1277_MT6762_Scatter.zip',
        signed: true,
        components: ['MT6762_Android_scatter.txt', 'preloader_ta1277.bin', 'super.img', 'boot.img', 'vbmeta.img']
      }
    ]
  },
  {
    model: 'Nokia 1 (Android Go Edition)',
    code: 'TA-1047',
    brand: 'nokia_android',
    series: '1 Series (First Android Go Nokia)',
    chipset: 'MediaTek MT6737M Quad-Core',
    bootKey: 'Hold Volume Up + Down while inserting USB cable',
    firmwares: [
      {
        version: 'Android 10 Go Edition Official Stock ROM (00WW_3_120)',
        build: '00WW_3_120_SP01',
        date: 'August 2020',
        size: '940 MB',
        region: 'Global (00WW)',
        type: 'Official SP Flash Tool Scatter Firmware',
        url: 'https://archive.org/download/nokia-android-firmware-archive/Nokia_1_TA-1047_MT6737M_Scatter.zip',
        signed: true,
        components: ['MT6737M_Android_scatter.txt', 'preloader_ta1047.bin', 'system.img', 'boot.img', 'recovery.img']
      }
    ]
  }
];

module.exports = {
  NOKIA_ANDROID_REGISTRY
};
