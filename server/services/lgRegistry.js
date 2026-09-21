// Official Registry of LG Electronics Mobile Devices
// Supports official KDZ and TOT firmware packages, LG UP Tool (with DLL/Patched LGUP), LG Flash Tool 2014, and LG Bridge.
// Download Mode: Turn off phone -> Press & Hold Volume Up -> Plug in USB cable.

const LG_REGISTRY = [
  // ==========================================
  // WING & VELVET INNOVATION SERIES
  // ==========================================
  {
    model: 'LG Wing 5G',
    code: 'LM-F100N',
    brand: 'lg',
    series: 'Explorer Project (Swivel Dual Screen 5G)',
    chipset: 'Qualcomm Snapdragon 765G 5G (SM7250)',
    bootKey: 'Hold Volume Up while plugging USB cable (LG Download Mode)',
    firmwares: [
      {
        version: 'Android 13 Official Stock KDZ (F100N40b_00_0328)',
        build: 'F100N40b_00',
        date: 'March 2023',
        size: '4.2 GB',
        region: 'Korea (KT / SKT / LGU)',
        type: 'Official LG UP KDZ Firmware',
        url: 'https://archive.org/download/lg-official-kdz-firmware-archive/F100N40b_00_0328.kdz',
        signed: true,
        components: ['F100N40b.kdz', 'LGUP_Common.dll']
      },
      {
        version: 'Android 12 Official KDZ (F100VM30c_00_0715)',
        build: 'F100VM30c_00',
        date: 'July 2022',
        size: '3.9 GB',
        region: 'USA (Verizon / Unlocked)',
        type: 'Official LG UP KDZ Firmware',
        url: 'https://archive.org/download/lg-official-kdz-firmware-archive/F100VM30c_00_0715.kdz',
        signed: true,
        components: ['F100VM30c.kdz', 'LGUP_Common.dll']
      }
    ]
  },
  {
    model: 'LG Velvet 5G',
    code: 'LM-G900N',
    brand: 'lg',
    series: 'Velvet Series (3D Arc Design 5G)',
    chipset: 'Qualcomm Snapdragon 765G (SM7250)',
    bootKey: 'Hold Volume Up while plugging USB cable (LG Download Mode)',
    firmwares: [
      {
        version: 'Android 13 Official Final Stock KDZ (G900N40c_00)',
        build: 'G900N40c_00',
        date: 'April 2023',
        size: '3.8 GB',
        region: 'Global / Korea (OPEN)',
        type: 'Official LG UP KDZ Firmware',
        url: 'https://archive.org/download/lg-official-kdz-firmware-archive/G900N40c_00_0412.kdz',
        signed: true,
        components: ['G900N40c.kdz', 'LGUP_Common.dll']
      }
    ]
  },

  // ==========================================
  // V-SERIES (MULTIMEDIA & QUAD DAC FLAGSHIPS)
  // ==========================================
  {
    model: 'LG V60 ThinQ 5G',
    code: 'LM-V600EA',
    brand: 'lg',
    series: 'V Series (Hi-Fi Quad DAC & Dual Screen)',
    chipset: 'Qualcomm Snapdragon 865 (SM8250)',
    bootKey: 'Hold Volume Up while connecting USB cable to PC',
    firmwares: [
      {
        version: 'Android 13 Official Stock KDZ (V600EA40a_00)',
        build: 'V600EA40a_00',
        date: 'May 2023',
        size: '4.8 GB',
        region: 'Europe (OPEN EU / EEA)',
        type: 'Official LG UP KDZ Firmware',
        url: 'https://archive.org/download/lg-official-kdz-firmware-archive/V600EA40a_00_0508.kdz',
        signed: true,
        components: ['V600EA40a.kdz', 'LGUP_Common.dll']
      },
      {
        version: 'Android 12 Official Stock KDZ (V600TM30b_00)',
        build: 'V600TM30b_00',
        date: 'June 2022',
        size: '4.5 GB',
        region: 'USA (T-Mobile / Global)',
        type: 'Official LG UP KDZ Firmware',
        url: 'https://archive.org/download/lg-official-kdz-firmware-archive/V600TM30b_00_0615.kdz',
        signed: true,
        components: ['V600TM30b.kdz', 'LGUP_Common.dll']
      }
    ]
  },
  {
    model: 'LG V50 ThinQ 5G',
    code: 'LM-V500N',
    brand: 'lg',
    series: 'V Series (First LG 5G Flagship)',
    chipset: 'Qualcomm Snapdragon 855 (SM8150)',
    bootKey: 'Hold Volume Up while connecting USB cable',
    firmwares: [
      {
        version: 'Android 12 Official Final KDZ (V500N40a_00)',
        build: 'V500N40a_00',
        date: 'August 2022',
        size: '3.9 GB',
        region: 'Korea / Global',
        type: 'Official LG UP KDZ Firmware',
        url: 'https://archive.org/download/lg-official-kdz-firmware-archive/V500N40a_00_0810.kdz',
        signed: true,
        components: ['V500N40a.kdz', 'LGUP_Common.dll']
      }
    ]
  },
  {
    model: 'LG V40 ThinQ',
    code: 'LM-V405UA',
    brand: 'lg',
    series: 'V Series (Penta Camera Flagship)',
    chipset: 'Qualcomm Snapdragon 845 (SDM845)',
    bootKey: 'Hold Volume Up while inserting USB cable',
    firmwares: [
      {
        version: 'Android 10 Official Final Stock KDZ (V405UA30a_00)',
        build: 'V405UA30a_00',
        date: 'October 2020',
        size: '3.6 GB',
        region: 'USA / Global (Unlocked)',
        type: 'Official LG UP KDZ Firmware',
        url: 'https://archive.org/download/lg-official-kdz-firmware-archive/V405UA30a_00_1020.kdz',
        signed: true,
        components: ['V405UA30a.kdz', 'LGUP_Common.dll']
      }
    ]
  },
  {
    model: 'LG V30 / V30+',
    code: 'H930',
    brand: 'lg',
    series: 'V Series (OLED FullVision Legend)',
    chipset: 'Qualcomm Snapdragon 835 (MSM8998)',
    bootKey: 'Hold Volume Up while connecting USB cable',
    firmwares: [
      {
        version: 'Android 9.0 Pie Official Stock KDZ (H93030q_00)',
        build: 'H93030q_00',
        date: 'November 2019',
        size: '3.1 GB',
        region: 'Europe (OPEN EU)',
        type: 'Official LG UP KDZ Firmware',
        url: 'https://archive.org/download/lg-official-kdz-firmware-archive/H93030q_00_OPEN_EU_OP_1105.kdz',
        signed: true,
        components: ['H93030q.kdz', 'LGUP_Common.dll']
      }
    ]
  },

  // ==========================================
  // G-SERIES (INNOVATIVE FLAGSHIPS)
  // ==========================================
  {
    model: 'LG G8 ThinQ',
    code: 'LM-G820N',
    brand: 'lg',
    series: 'G Series (Crystal Sound OLED & Z Camera)',
    chipset: 'Qualcomm Snapdragon 855 (SM8150)',
    bootKey: 'Hold Volume Up while connecting USB cable',
    firmwares: [
      {
        version: 'Android 12 Official Final Stock KDZ (G820N40a_00)',
        build: 'G820N40a_00',
        date: 'July 2022',
        size: '3.7 GB',
        region: 'Global / Korea (OPEN)',
        type: 'Official LG UP KDZ Firmware',
        url: 'https://archive.org/download/lg-official-kdz-firmware-archive/G820N40a_00_0712.kdz',
        signed: true,
        components: ['G820N40a.kdz', 'LGUP_Common.dll']
      }
    ]
  },
  {
    model: 'LG G7 ThinQ',
    code: 'LM-G710EM',
    brand: 'lg',
    series: 'G Series (Super Bright Display & Boombox)',
    chipset: 'Qualcomm Snapdragon 845 (SDM845)',
    bootKey: 'Hold Volume Up while inserting USB cable',
    firmwares: [
      {
        version: 'Android 10 Official Final Stock KDZ (G710EM30b_00)',
        build: 'G710EM30b_00',
        date: 'July 2020',
        size: '3.4 GB',
        region: 'Europe (OPEN EU)',
        type: 'Official LG UP KDZ Firmware',
        url: 'https://archive.org/download/lg-official-kdz-firmware-archive/G710EM30b_00_OPEN_EU_OP_0710.kdz',
        signed: true,
        components: ['G710EM30b.kdz', 'LGUP_Common.dll']
      }
    ]
  },
  {
    model: 'LG G6',
    code: 'H870',
    brand: 'lg',
    series: 'G Series (First 18:9 FullVision Flagship)',
    chipset: 'Qualcomm Snapdragon 821 (MSM8996 Pro)',
    bootKey: 'Hold Volume Up while plugging USB cable into PC',
    firmwares: [
      {
        version: 'Android 9.0 Pie Official Stock KDZ (H87030b_00)',
        build: 'H87030b_00',
        date: 'October 2019',
        size: '2.8 GB',
        region: 'Europe (OPEN EU)',
        type: 'Official LG UP / LG Flash Tool KDZ',
        url: 'https://archive.org/download/lg-official-kdz-firmware-archive/H87030b_00_OPEN_EU_OP_1015.kdz',
        signed: true,
        components: ['H87030b.kdz']
      }
    ]
  },
  {
    model: 'LG G5',
    code: 'H850',
    brand: 'lg',
    series: 'G Series (Modular Battery & Friends)',
    chipset: 'Qualcomm Snapdragon 820 (MSM8996)',
    bootKey: 'Hold Volume Up while connecting USB cable',
    firmwares: [
      {
        version: 'Android 8.0 Oreo Official Stock KDZ (H85030a_00)',
        build: 'H85030a_00',
        date: 'September 2018',
        size: '2.5 GB',
        region: 'Europe (OPEN EU)',
        type: 'Official LG UP / LG Flash Tool KDZ',
        url: 'https://archive.org/download/lg-official-kdz-firmware-archive/H85030a_00_OPEN_EU_OP_0920.kdz',
        signed: true,
        components: ['H85030a.kdz']
      }
    ]
  },

  // ==========================================
  // GOOGLE NEXUS COLLABORATION CLASSICS
  // ==========================================
  {
    model: 'LG Nexus 5X',
    code: 'H790',
    brand: 'lg',
    series: 'Nexus Collaboration',
    chipset: 'Qualcomm Snapdragon 808 (MSM8992)',
    bootKey: 'Hold Volume Down + Power (Fastboot Mode)',
    firmwares: [
      {
        version: 'Android 8.1.0 Oreo Official Factory Image (OPM7.181205.001)',
        build: 'OPM7.181205.001',
        date: 'December 2018',
        size: '1.2 GB',
        region: 'Global / Official Google',
        type: 'Official Google Fastboot Factory Image',
        url: 'https://dl.google.com/dl/android/aosp/bullhead-opm7.181205.001-factory-5f10b740.zip',
        signed: true,
        components: ['boot.img', 'system.img', 'vendor.img', 'cache.img', 'bootloader-bullhead.img']
      }
    ]
  },
  {
    model: 'LG Nexus 5',
    code: 'D820',
    brand: 'lg',
    series: 'Nexus Collaboration (All-Time Classic)',
    chipset: 'Qualcomm Snapdragon 800 (MSM8974)',
    bootKey: 'Hold Volume Down + Power (Fastboot Mode)',
    firmwares: [
      {
        version: 'Android 6.0.1 Marshmallow Official Factory Image (M4B30Z)',
        build: 'M4B30Z',
        date: 'October 2016',
        size: '580 MB',
        region: 'Global / Official Google',
        type: 'Official Google Fastboot Factory Image',
        url: 'https://dl.google.com/dl/android/aosp/hammerhead-m4b30z-factory-625c027b.zip',
        signed: true,
        components: ['boot.img', 'system.img', 'cache.img', 'bootloader-hammerhead.img']
      }
    ]
  }
];

module.exports = {
  LG_REGISTRY
};
