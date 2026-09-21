// Official Registry of BlackBerry Smartphones & Autoloader / Apploader Stock Firmwares
// Supports BlackBerry 10 (Passport, Classic, Q10, Z10), Android BlackBerry (Priv, KEYone, KEY2), and Classic BBOS 7/5 (Bold 9900, Curve 8520)

const BLACKBERRY_REGISTRY = [
  // ==========================================
  // BLACKBERRY 10 AUTOLOADERS (.EXE)
  // ==========================================
  {
    model: 'BlackBerry Passport',
    code: 'SQW100-1',
    brand: 'blackberry',
    series: 'BlackBerry 10',
    chipset: 'Snapdragon 801 (Quad-core)',
    firmwares: [
      {
        version: 'BlackBerry 10 OS 10.3.3.3216 (Official Final)',
        build: '10.3.3.3216 / SR 10.3.3.2163',
        date: 'Apr 2018',
        size: '2.15 GB',
        region: 'Global / All Carriers',
        type: 'Official Autoloader Executable (.exe)',
        url: 'https://archive.org/download/blackberry-10-autoloaders-collection/Passport_10.3.03.3216_SQW100-1-2-3-4.exe',
        signed: true,
        components: ['BlackBerryAutoloader.exe', 'bootrom.bin', 'os.nb2', 'radio.nb2']
      },
      {
        version: 'BlackBerry 10 OS 10.3.2.2876',
        build: '10.3.2.2876 / SR 10.3.2.2836',
        date: 'Nov 2015',
        size: '1.98 GB',
        region: 'Global',
        type: 'Official Autoloader Executable (.exe)',
        url: 'https://archive.org/download/blackberry-10-autoloaders-collection/Passport_10.3.02.2876_SQW100-1-2-3-4.exe',
        signed: true
      }
    ]
  },
  {
    model: 'BlackBerry Classic (Q20)',
    code: 'SQC100-1',
    brand: 'blackberry',
    series: 'BlackBerry 10',
    chipset: 'Snapdragon S4 Plus',
    firmwares: [
      {
        version: 'BlackBerry 10 OS 10.3.3.3216 (Final)',
        build: '10.3.3.3216 / SR 10.3.3.2163',
        date: 'Apr 2018',
        size: '1.92 GB',
        region: 'Global / SQC100-1-2-3-4-5',
        type: 'Official Autoloader Executable (.exe)',
        url: 'https://archive.org/download/blackberry-10-autoloaders-collection/Classic_10.3.03.3216_SQC100-1-2-3-4-5.exe',
        signed: true
      }
    ]
  },
  {
    model: 'BlackBerry Q10',
    code: 'SQN100-3',
    brand: 'blackberry',
    series: 'BlackBerry 10',
    chipset: 'Snapdragon S4 Plus',
    firmwares: [
      {
        version: 'BlackBerry 10 OS 10.3.3.3216 (Final)',
        build: '10.3.3.3216 / SR 10.3.3.2163',
        date: 'Apr 2018',
        size: '1.85 GB',
        region: 'Global / SQN100-1-2-3-4-5',
        type: 'Official Autoloader Executable (.exe)',
        url: 'https://archive.org/download/blackberry-10-autoloaders-collection/Q10_Q5_10.3.03.3216_SQN-SQR.exe',
        signed: true
      }
    ]
  },
  {
    model: 'BlackBerry Z10 (LTE / 3G)',
    code: 'STL100-1',
    brand: 'blackberry',
    series: 'BlackBerry 10',
    chipset: 'TI OMAP 4470 / Snapdragon S4 Plus',
    firmwares: [
      {
        version: 'BlackBerry 10 OS 10.3.3.3216 (Final)',
        build: '10.3.3.3216 / SR 10.3.3.2163',
        date: 'Apr 2018',
        size: '1.82 GB',
        region: 'Global / STL100-2-3-4 (Qualcomm)',
        type: 'Official Autoloader Executable (.exe)',
        url: 'https://archive.org/download/blackberry-10-autoloaders-collection/Z10_10.3.03.3216_STL100-2-3-4.exe',
        signed: true
      },
      {
        version: 'BlackBerry 10 OS 10.3.3.3216 (STL100-1 TI OMAP)',
        build: '10.3.3.3216 / SR 10.3.3.2163',
        date: 'Apr 2018',
        size: '1.75 GB',
        region: 'Global / STL100-1 (OMAP)',
        type: 'Official Autoloader Executable (.exe)',
        url: 'https://archive.org/download/blackberry-10-autoloaders-collection/Z10_10.3.03.3216_STL100-1.exe',
        signed: true
      }
    ]
  },
  {
    model: 'BlackBerry Z30',
    code: 'STA100-2',
    brand: 'blackberry',
    series: 'BlackBerry 10',
    chipset: 'Snapdragon S4 Pro',
    firmwares: [
      {
        version: 'BlackBerry 10 OS 10.3.3.3216 (Final)',
        build: '10.3.3.3216 / SR 10.3.3.2163',
        date: 'Apr 2018',
        size: '1.95 GB',
        region: 'Global / STA100-1-2-3-4-5',
        type: 'Official Autoloader Executable (.exe)',
        url: 'https://archive.org/download/blackberry-10-autoloaders-collection/Z30_10.3.03.3216_STA100-1-2-3-4-5.exe',
        signed: true
      }
    ]
  },

  // ==========================================
  // BLACKBERRY ANDROID SERIES (FASTBOOT AUTOLOADERS)
  // ==========================================
  {
    model: 'BlackBerry KEY2',
    code: 'BBF100-1',
    brand: 'blackberry',
    series: 'BlackBerry Android',
    chipset: 'Snapdragon 660',
    firmwares: [
      {
        version: 'Android 8.1 Oreo (ACF205)',
        build: 'ACF205 / Aug 2019 Security Patch',
        date: 'Aug 2019',
        size: '2.45 GB',
        region: 'Global Unlocked',
        type: 'Official Fastboot Autoloader Package (.zip)',
        url: 'https://archive.org/download/blackberry-android-firmwares/KEY2_BBF100-1_ACF205_Fastboot_Autoloader.zip',
        signed: true,
        components: ['flashall.bat', 'flashall.sh', 'boot.img', 'system.img', 'vendor.img', 'radio.img']
      }
    ]
  },
  {
    model: 'BlackBerry KEYone',
    code: 'BBB100-1',
    brand: 'blackberry',
    series: 'BlackBerry Android',
    chipset: 'Snapdragon 625',
    firmwares: [
      {
        version: 'Android 8.1 Oreo (ABA691)',
        build: 'ABA691 / Official Final',
        date: 'Dec 2018',
        size: '2.10 GB',
        region: 'Global / BBB100-1-2-3',
        type: 'Official Fastboot Autoloader Package (.zip)',
        url: 'https://archive.org/download/blackberry-android-firmwares/KEYone_BBB100-1_ABA691_Fastboot_Autoloader.zip',
        signed: true
      }
    ]
  },
  {
    model: 'BlackBerry Priv (Slider)',
    code: 'STV100-1',
    brand: 'blackberry',
    series: 'BlackBerry Android',
    chipset: 'Snapdragon 808',
    firmwares: [
      {
        version: 'Android 6.0.1 Marshmallow (AAF018)',
        build: 'AAF018 / Official Final',
        date: 'May 2017',
        size: '1.85 GB',
        region: 'Global / STV100-1',
        type: 'Official Fastboot Autoloader (.zip)',
        url: 'https://archive.org/download/blackberry-android-firmwares/Priv_STV100-1_AAF018_Autoloader.zip',
        signed: true
      }
    ]
  },

  // ==========================================
  // BLACKBERRY OS CLASSIC LEGENDS (BBOS 7 / 5)
  // ==========================================
  {
    model: 'BlackBerry Bold 9900 (Dakota)',
    code: 'Bold-9900',
    brand: 'blackberry',
    series: 'BlackBerry OS 7 Classic',
    chipset: 'Qualcomm Snapdragon S2 (MSM8655 1.2GHz)',
    firmwares: [
      {
        version: 'BlackBerry OS 7.1.0.1098 (All Languages)',
        build: '7.1.0.1098 / Bundle 2807',
        date: 'Aug 2013',
        size: '285 MB',
        region: 'Global / Multilanguage',
        type: 'Official Desktop Desktop Apploader Package (.exe)',
        url: 'https://archive.org/download/blackberry-legacy-os-firmwares/9900jAllLang_PBr7.1.0_rel2807_PL5.1.0.532_A7.1.0.1098.exe',
        signed: true,
        components: ['Apploader.exe', 'Java/Blackberry.alx', 'Vendor.xml']
      }
    ]
  },
  {
    model: 'BlackBerry Curve 8520 (Gemini Trackpad)',
    code: 'Curve-8520',
    brand: 'blackberry',
    series: 'BlackBerry OS 5 Classic',
    chipset: 'Marvell PXA930 512MHz',
    firmwares: [
      {
        version: 'BlackBerry OS 5.0.0.1067 (Official Final)',
        build: '5.0.0.1067 / Bundle 1728',
        date: 'May 2012',
        size: '142 MB',
        region: 'Global / Multilanguage',
        type: 'Official Apploader Service Package (.exe)',
        url: 'https://archive.org/download/blackberry-legacy-os-firmwares/8520_M_5.0.0.1067.exe',
        signed: true
      }
    ]
  },
  {
    model: 'BlackBerry Torch 9800 (Slider + Touch)',
    code: 'Torch-9800',
    brand: 'blackberry',
    series: 'BlackBerry OS 6 Classic',
    chipset: 'Marvell PXA940 624MHz',
    firmwares: [
      {
        version: 'BlackBerry OS 6.0.0.706 (Official Final)',
        build: '6.0.0.706 / Bundle 3084',
        date: 'Jan 2013',
        size: '188 MB',
        region: 'Global / Multilanguage',
        type: 'Official Apploader Service Package (.exe)',
        url: 'https://archive.org/download/blackberry-legacy-os-firmwares/9800M_PBr6.0.0_rel3084_PL6.6.0.246_A6.0.0.706.exe',
        signed: true
      }
    ]
  }
];

module.exports = {
  BLACKBERRY_REGISTRY
};
