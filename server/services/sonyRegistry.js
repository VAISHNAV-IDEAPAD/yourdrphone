// Official Registry of Sony Mobile Communications (Xperia Series)
// Supports official .sin firmware files via Newflasher, XperiFirm bundles, Flashtool (.FTF), and Sony Emma Developer Flasher.
// Boot modes:
//   - Flashmode (Green LED): Power off -> Hold Volume Down -> Plug USB cable.
//   - Fastboot (Blue LED): Power off -> Hold Volume Up -> Plug USB cable.

const SONY_REGISTRY = [
  // ==========================================
  // XPERIA 1 FLAGSHIP SERIES
  // ==========================================
  {
    model: 'Sony Xperia 1 VI',
    code: 'XQ-EC54',
    brand: 'sony',
    series: 'Xperia 1 Series (Snapdragon 8 Gen 3 Flagship)',
    chipset: 'Qualcomm Snapdragon 8 Gen 3 (SM8650-AB)',
    bootKey: 'Hold Volume Down while plugging in USB cable (Green LED - Flashmode)',
    firmwares: [
      {
        version: 'Android 14 Official Stock Firmware (69.0.A.2.44)',
        build: '69.0.A.2.44_R3A',
        date: 'June 2024',
        size: '3.8 GB',
        region: 'Global / Europe (Customized EU)',
        type: 'Official Sony Newflasher / .sin Package',
        url: 'https://archive.org/download/sony-xperia-official-firmwares/Xperia_1_VI_XQ-EC54_69.0.A.2.44.zip',
        signed: true,
        components: ['boot.sin', 'super.sin', 'init_boot.sin', 'vbmeta.sin', 'userdata.sin', 'partition.image']
      }
    ]
  },
  {
    model: 'Sony Xperia 1 V',
    code: 'XQ-DQ54',
    brand: 'sony',
    series: 'Xperia 1 Series (Exmor T Sensor)',
    chipset: 'Qualcomm Snapdragon 8 Gen 2 (SM8550-AB)',
    bootKey: 'Hold Volume Down while inserting USB cable (Green LED - Flashmode)',
    firmwares: [
      {
        version: 'Android 14 Official Stock ROM (67.1.A.2.220)',
        build: '67.1.A.2.220_R6A',
        date: 'March 2024',
        size: '3.6 GB',
        region: 'Global / Europe (Customized EU)',
        type: 'Official Sony Newflasher / .sin Package',
        url: 'https://archive.org/download/sony-xperia-official-firmwares/Xperia_1_V_XQ-DQ54_67.1.A.2.220.zip',
        signed: true,
        components: ['boot.sin', 'super.sin', 'init_boot.sin', 'vbmeta.sin', 'userdata.sin']
      },
      {
        version: 'Android 13 Stock ROM (67.0.A.4.22)',
        build: '67.0.A.4.22_R1A',
        date: 'July 2023',
        size: '3.4 GB',
        region: 'Global / Asia',
        type: 'Official Sony Newflasher Package',
        url: 'https://archive.org/download/sony-xperia-official-firmwares/Xperia_1_V_XQ-DQ54_67.0.A.4.22.zip',
        signed: false
      }
    ]
  },
  {
    model: 'Sony Xperia 1 IV',
    code: 'XQ-CT54',
    brand: 'sony',
    series: 'Xperia 1 Series (Continuous Optical Zoom 85-125mm)',
    chipset: 'Qualcomm Snapdragon 8 Gen 1 (SM8450)',
    bootKey: 'Hold Volume Down while plugging USB cable (Green LED)',
    firmwares: [
      {
        version: 'Android 13 Official Stock Firmware (64.1.A.0.992)',
        build: '64.1.A.0.992_R4A',
        date: 'January 2023',
        size: '3.5 GB',
        region: 'Global / Europe (Customized EU)',
        type: 'Official Sony Newflasher Package',
        url: 'https://archive.org/download/sony-xperia-official-firmwares/Xperia_1_IV_XQ-CT54_64.1.A.0.992.zip',
        signed: true,
        components: ['boot.sin', 'super.sin', 'vbmeta.sin', 'userdata.sin']
      }
    ]
  },

  // ==========================================
  // XPERIA PRO SERIES
  // ==========================================
  {
    model: 'Sony Xperia PRO-I',
    code: 'XQ-BE62',
    brand: 'sony',
    series: 'Xperia PRO Series (1.0-inch Exmor RS Sensor)',
    chipset: 'Qualcomm Snapdragon 888 5G (SM8350)',
    bootKey: 'Hold Volume Down while plugging USB cable (Green LED)',
    firmwares: [
      {
        version: 'Android 13 Official Stock ROM (61.2.F.0.147)',
        build: '61.2.F.0.147_R2A',
        date: 'March 2023',
        size: '3.6 GB',
        region: 'Global / Customized US',
        type: 'Official Sony Newflasher Package',
        url: 'https://archive.org/download/sony-xperia-official-firmwares/Xperia_PRO_I_XQ-BE62_61.2.F.0.147.zip',
        signed: true,
        components: ['boot.sin', 'super.sin', 'vbmeta.sin', 'userdata.sin']
      }
    ]
  },

  // ==========================================
  // XPERIA 5 SERIES (COMPACT FLAGSHIP)
  // ==========================================
  {
    model: 'Sony Xperia 5 V',
    code: 'XQ-DE54',
    brand: 'sony',
    series: 'Xperia 5 Series (Compact Flagship 5G)',
    chipset: 'Qualcomm Snapdragon 8 Gen 2 (SM8550-AB)',
    bootKey: 'Hold Volume Down while plugging USB cable (Green LED)',
    firmwares: [
      {
        version: 'Android 14 Official Stock Firmware (67.1.A.2.220)',
        build: '67.1.A.2.220_R3A',
        date: 'April 2024',
        size: '3.5 GB',
        region: 'Europe / Customized EU',
        type: 'Official Sony Newflasher Package',
        url: 'https://archive.org/download/sony-xperia-official-firmwares/Xperia_5_V_XQ-DE54_67.1.A.2.220.zip',
        signed: true,
        components: ['boot.sin', 'super.sin', 'init_boot.sin', 'vbmeta.sin']
      }
    ]
  },
  {
    model: 'Sony Xperia 5 IV',
    code: 'XQ-CQ54',
    brand: 'sony',
    series: 'Xperia 5 Series',
    chipset: 'Qualcomm Snapdragon 8 Gen 1 (SM8450)',
    bootKey: 'Hold Volume Down while connecting USB cable',
    firmwares: [
      {
        version: 'Android 13 Official Stock Firmware (64.1.A.0.992)',
        build: '64.1.A.0.992_R5A',
        date: 'February 2023',
        size: '3.3 GB',
        region: 'Global / Europe',
        type: 'Official Sony Newflasher Package',
        url: 'https://archive.org/download/sony-xperia-official-firmwares/Xperia_5_IV_XQ-CQ54_64.1.A.0.992.zip',
        signed: true,
        components: ['boot.sin', 'super.sin', 'vbmeta.sin']
      }
    ]
  },

  // ==========================================
  // XPERIA 10 SERIES (MID-RANGE & BATTERY HERO)
  // ==========================================
  {
    model: 'Sony Xperia 10 VI',
    code: 'XQ-ES54',
    brand: 'sony',
    series: 'Xperia 10 Series (2-Day Battery Lightweight)',
    chipset: 'Qualcomm Snapdragon 6 Gen 1 (SM6450)',
    bootKey: 'Hold Volume Down while connecting USB cable (Green LED)',
    firmwares: [
      {
        version: 'Android 14 Official Stock Firmware (68.0.A.0.605)',
        build: '68.0.A.0.605_R2A',
        date: 'June 2024',
        size: '3.2 GB',
        region: 'Global / Europe',
        type: 'Official Sony Newflasher Package',
        url: 'https://archive.org/download/sony-xperia-official-firmwares/Xperia_10_VI_XQ-ES54_68.0.A.0.605.zip',
        signed: true,
        components: ['boot.sin', 'super.sin', 'init_boot.sin', 'vbmeta.sin']
      }
    ]
  },
  {
    model: 'Sony Xperia 10 V',
    code: 'XQ-DC54',
    brand: 'sony',
    series: 'Xperia 10 Series',
    chipset: 'Qualcomm Snapdragon 695 5G (SM6375)',
    bootKey: 'Hold Volume Down while connecting USB cable',
    firmwares: [
      {
        version: 'Android 14 Official Stock ROM (68.1.A.2.93)',
        build: '68.1.A.2.93_R4A',
        date: 'May 2024',
        size: '3.1 GB',
        region: 'Global / Europe',
        type: 'Official Sony Newflasher Package',
        url: 'https://archive.org/download/sony-xperia-official-firmwares/Xperia_10_V_XQ-DC54_68.1.A.2.93.zip',
        signed: true,
        components: ['boot.sin', 'super.sin', 'vbmeta.sin']
      }
    ]
  },

  // ==========================================
  // XPERIA XZ & Z CLASSIC LEGENDS
  // ==========================================
  {
    model: 'Sony Xperia XZ Premium',
    code: 'G8141',
    brand: 'sony',
    series: 'Xperia XZ Series (First 4K HDR 960fps)',
    chipset: 'Qualcomm Snapdragon 835 (MSM8998)',
    bootKey: 'Hold Volume Down while plugging USB cable (Flashmode Green LED)',
    firmwares: [
      {
        version: 'Android 9.0 Pie Official Final Firmware (47.2.A.11.228)',
        build: '47.2.A.11.228_R2C',
        date: 'September 2019',
        size: '2.8 GB',
        region: 'Global / Customized GEL',
        type: 'Official Sony Newflasher / FTF Package',
        url: 'https://archive.org/download/sony-xperia-official-firmwares/Xperia_XZ_Premium_G8141_47.2.A.11.228.zip',
        signed: true,
        components: ['boot.sin', 'system.sin', 'vendor.sin', 'oem.sin', 'kernel.sin']
      }
    ]
  },
  {
    model: 'Sony Xperia XZ3',
    code: 'H9436',
    brand: 'sony',
    series: 'Xperia XZ Series (First BRAVIA OLED)',
    chipset: 'Qualcomm Snapdragon 845 (SDM845)',
    bootKey: 'Hold Volume Down while connecting USB cable',
    firmwares: [
      {
        version: 'Android 10 Official Final ROM (52.1.A.3.49)',
        build: '52.1.A.3.49_R3C',
        date: 'June 2020',
        size: '2.9 GB',
        region: 'Europe / Customized EU',
        type: 'Official Sony Newflasher Package',
        url: 'https://archive.org/download/sony-xperia-official-firmwares/Xperia_XZ3_H9436_52.1.A.3.49.zip',
        signed: true,
        components: ['boot.sin', 'system.sin', 'vendor.sin', 'userdata.sin']
      }
    ]
  },
  {
    model: 'Sony Xperia Z5 Premium',
    code: 'E6853',
    brand: 'sony',
    series: 'Xperia Z Series (World First 4K Display)',
    chipset: 'Qualcomm Snapdragon 810 (MSM8994)',
    bootKey: 'Hold Volume Down while inserting USB cable (Green LED)',
    firmwares: [
      {
        version: 'Android 7.1.1 Nougat Official Final FTF (32.4.A.1.54)',
        build: '32.4.A.1.54_R3E',
        date: 'December 2017',
        size: '2.6 GB',
        region: 'Global / Europe',
        type: 'Official Flashtool FTF Package',
        url: 'https://archive.org/download/sony-xperia-official-firmwares/Xperia_Z5_Premium_E6853_32.4.A.1.54.ftf',
        signed: true,
        components: ['kernel.sin', 'system.sin', 'fotakernel.sin', 'amss_fs_1.sin']
      }
    ]
  },
  {
    model: 'Sony Xperia Z3',
    code: 'D6603',
    brand: 'sony',
    series: 'Xperia Z Series (All-Time Legend)',
    chipset: 'Qualcomm Snapdragon 801 (MSM8974AC)',
    bootKey: 'Hold Volume Down while connecting USB cable (Green LED)',
    firmwares: [
      {
        version: 'Android 6.0.1 Marshmallow Official Final FTF (23.5.A.1.291)',
        build: '23.5.A.1.291_R3D',
        date: 'August 2016',
        size: '1.6 GB',
        region: 'Global / Europe',
        type: 'Official Flashtool FTF Package',
        url: 'https://archive.org/download/sony-xperia-official-firmwares/Xperia_Z3_D6603_23.5.A.1.291.ftf',
        signed: true,
        components: ['kernel.sin', 'system.sin', 'loader.sin']
      }
    ]
  }
];

module.exports = {
  SONY_REGISTRY
};
