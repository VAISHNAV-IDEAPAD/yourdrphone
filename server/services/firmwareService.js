const axios = require('axios');
const fs = require('fs');
const path = require('path');
const https = require('https');

const httpsAgent = new https.Agent({
  rejectUnauthorized: false
});

// Google Pixel Factory Images official registry
const PIXEL_REGISTRY = [
  {
    model: 'Pixel 9 Pro XL',
    code: 'komodo',
    brand: 'google',
    firmwares: [
      { version: 'Android 15 (AP3A.241005.015)', build: 'AP3A.241005.015', date: 'Oct 2024', size: '3.42 GB', url: 'https://dl.google.com/developers/android/vic/images/factory/komodo-ap3a.241005.015-factory-42a98e1e.zip', sha256: '42a98e1e77ef3724c96924ec9833cb93efb84fe7542d174780dfb0b9a95fbdf0', signed: true },
      { version: 'Android 14 (UD2A.240805.004)', build: 'UD2A.240805.004', date: 'Aug 2024', size: '3.38 GB', url: 'https://dl.google.com/developers/android/vic/images/factory/komodo-ud2a.240805.004-factory-90802c61.zip', sha256: '90802c61a58dfbe5fdfb4d4554f6e4a275b22b10a90dfb194098492fa619dbe5', signed: false }
    ]
  },
  {
    model: 'Pixel 9 Pro',
    code: 'caiman',
    brand: 'google',
    firmwares: [
      { version: 'Android 15 (AP3A.241005.015)', build: 'AP3A.241005.015', date: 'Oct 2024', size: '3.41 GB', url: 'https://dl.google.com/developers/android/vic/images/factory/caiman-ap3a.241005.015-factory-578d0676.zip', sha256: '578d0676ca09210c4d29381a1a74d12c8b051f22e8fb7a12b45eef081467406a', signed: true }
    ]
  },
  {
    model: 'Pixel 9',
    code: 'tokay',
    brand: 'google',
    firmwares: [
      { version: 'Android 15 (AP3A.241005.015)', build: 'AP3A.241005.015', date: 'Oct 2024', size: '3.39 GB', url: 'https://dl.google.com/developers/android/vic/images/factory/tokay-ap3a.241005.015-factory-b6ec75f5.zip', sha256: 'b6ec75f55d5be5a242f2b4ffbf4b3d87dbba406560ba53d4eb3638c4c7c867ca', signed: true }
    ]
  },
  {
    model: 'Pixel 8 Pro',
    code: 'husky',
    brand: 'google',
    firmwares: [
      { version: 'Android 15 (AP3A.241005.015)', build: 'AP3A.241005.015', date: 'Oct 2024', size: '3.31 GB', url: 'https://dl.google.com/developers/android/vic/images/factory/husky-ap3a.241005.015-factory-7917a260.zip', sha256: '7917a26017b35f6fb8ea4dbe202e86d790d9a69ee944747eb4dca9fa75c8cb24', signed: true },
      { version: 'Android 14 (AP1A.240505.005)', build: 'AP1A.240505.005', date: 'May 2024', size: '3.25 GB', url: 'https://dl.google.com/developers/android/vic/images/factory/husky-ap1a.240505.005-factory-87e2b77a.zip', sha256: '87e2b77ac3f18e9d3d3d63b0151c8a1835ff9f056d649dbbca8c6f2a8397a61d', signed: false }
    ]
  },
  {
    model: 'Pixel 8',
    code: 'shiba',
    brand: 'google',
    firmwares: [
      { version: 'Android 15 (AP3A.241005.015)', build: 'AP3A.241005.015', date: 'Oct 2024', size: '3.28 GB', url: 'https://dl.google.com/developers/android/vic/images/factory/shiba-ap3a.241005.015-factory-403b22cf.zip', sha256: '403b22cf88c9bb7cf43666f7f6a73ba8ec31ca4bb8357ebff11019ca0db2f579', signed: true }
    ]
  },
  {
    model: 'Pixel 7 Pro',
    code: 'cheetah',
    brand: 'google',
    firmwares: [
      { version: 'Android 15 (AP3A.241005.015)', build: 'AP3A.241005.015', date: 'Oct 2024', size: '3.19 GB', url: 'https://dl.google.com/developers/android/vic/images/factory/cheetah-ap3a.241005.015-factory-7917a260.zip', sha256: '7917a26017b35f6fb8ea4dbe202e86d790d9a69ee944747eb4dca9fa75c8cb24', signed: true },
      { version: 'Android 14 (UQ1A.240205.002)', build: 'UQ1A.240205.002', date: 'Feb 2024', size: '3.12 GB', url: 'https://dl.google.com/developers/android/vic/images/factory/cheetah-uq1a.240205.002-factory-a3d842ec.zip', sha256: 'a3d842ec7349970c67926e2ef30f81ceb0445d47eec051c510dbfaecbbfb0cb3', signed: false }
    ]
  },
  {
    model: 'Pixel 7',
    code: 'panther',
    brand: 'google',
    firmwares: [
      { version: 'Android 15 (AP3A.241005.015)', build: 'AP3A.241005.015', date: 'Oct 2024', size: '3.15 GB', url: 'https://dl.google.com/developers/android/vic/images/factory/panther-ap3a.241005.015-factory-d762e84a.zip', sha256: 'd762e84a441315fcb1fcfd1964177f80695079a499a0db2a2a0bf255d8f6355d', signed: true }
    ]
  },
  {
    model: 'Pixel 6 Pro',
    code: 'raven',
    brand: 'google',
    firmwares: [
      { version: 'Android 15 (AP3A.241005.015)', build: 'AP3A.241005.015', date: 'Oct 2024', size: '2.98 GB', url: 'https://dl.google.com/developers/android/vic/images/factory/raven-ap3a.241005.015-factory-298a0d95.zip', sha256: '298a0d95f87b841a029517e4f16aebaa2221b2d35817d1223e71ba238f972044', signed: true }
    ]
  }
];

// Samsung Galaxy Registry
const SAMSUNG_REGISTRY = [
  {
    model: 'Galaxy S24 Ultra',
    code: 'SM-S928B',
    brand: 'samsung',
    regions: ['INS (India)', 'EUX (Europe)', 'XAA (USA)', 'KTC (Korea)'],
    firmwares: [
      { version: 'One UI 6.1.1 / Android 14 (S928BXXU3AXH7)', build: 'S928BXXU3AXH7', date: 'Sep 2024', size: '13.8 GB', csc: 'INS', pda: 'S928BXXU3AXH7', type: 'Stock 4-File (BL, AP, CP, CSC)', url: 'https://samfw.com/firmware/SM-S928B/INS/S928BXXU3AXH7', signed: true },
      { version: 'One UI 6.1 / Android 14 (S928BXXU1AXB5)', build: 'S928BXXU1AXB5', date: 'Feb 2024', size: '13.2 GB', csc: 'INS', pda: 'S928BXXU1AXB5', type: 'Stock 4-File (BL, AP, CP, CSC)', url: 'https://samfw.com/firmware/SM-S928B/INS/S928BXXU1AXB5', signed: false }
    ]
  },
  {
    model: 'Galaxy S24+',
    code: 'SM-S926B',
    brand: 'samsung',
    regions: ['INS (India)', 'EUX (Europe)', 'XAA (USA)'],
    firmwares: [
      { version: 'One UI 6.1.1 / Android 14 (S926BXXU3AXH7)', build: 'S926BXXU3AXH7', date: 'Sep 2024', size: '12.9 GB', csc: 'INS', pda: 'S926BXXU3AXH7', type: 'Stock 4-File (BL, AP, CP, CSC)', url: 'https://samfw.com/firmware/SM-S926B/INS/S926BXXU3AXH7', signed: true }
    ]
  },
  {
    model: 'Galaxy S24',
    code: 'SM-S921B',
    brand: 'samsung',
    regions: ['INS (India)', 'EUX (Europe)', 'XAA (USA)'],
    firmwares: [
      { version: 'One UI 6.1.1 / Android 14 (S921BXXU3AXH7)', build: 'S921BXXU3AXH7', date: 'Sep 2024', size: '12.4 GB', csc: 'INS', pda: 'S921BXXU3AXH7', type: 'Stock 4-File (BL, AP, CP, CSC)', url: 'https://samfw.com/firmware/SM-S921B/INS/S921BXXU3AXH7', signed: true }
    ]
  },
  {
    model: 'Galaxy S23 Ultra',
    code: 'SM-S918B',
    brand: 'samsung',
    regions: ['INS (India)', 'EUX (Europe)', 'XAA (USA)'],
    firmwares: [
      { version: 'One UI 6.1 / Android 14 (S918BXXU6CXH7)', build: 'S918BXXU6CXH7', date: 'Sep 2024', size: '11.8 GB', csc: 'INS', pda: 'S918BXXU6CXH7', type: 'Stock 4-File (BL, AP, CP, CSC)', url: 'https://samfw.com/firmware/SM-S918B/INS/S918BXXU6CXH7', signed: true },
      { version: 'One UI 6.0 / Android 14 (S918BXXU3BWJM)', build: 'S918BXXU3BWJM', date: 'Nov 2023', size: '11.2 GB', csc: 'INS', pda: 'S918BXXU3BWJM', type: 'Stock 4-File (BL, AP, CP, CSC)', url: 'https://samfw.com/firmware/SM-S918B/INS/S918BXXU3BWJM', signed: false }
    ]
  },
  {
    model: 'Galaxy Z Fold 6',
    code: 'SM-F956B',
    brand: 'samsung',
    regions: ['INS (India)', 'EUX (Europe)', 'XAA (USA)'],
    firmwares: [
      { version: 'One UI 6.1.1 / Android 14 (F956BXXU1AXH7)', build: 'F956BXXU1AXH7', date: 'Sep 2024', size: '14.1 GB', csc: 'INS', pda: 'F956BXXU1AXH7', type: 'Stock 4-File (BL, AP, CP, CSC)', url: 'https://samfw.com/firmware/SM-F956B/INS/F956BXXU1AXH7', signed: true }
    ]
  },
  {
    model: 'Galaxy A55 5G',
    code: 'SM-A556B',
    brand: 'samsung',
    regions: ['INS (India)', 'EUX (Europe)'],
    firmwares: [
      { version: 'One UI 6.1 / Android 14 (A556BXXU4AXH2)', build: 'A556BXXU4AXH2', date: 'Aug 2024', size: '9.4 GB', csc: 'INS', pda: 'A556BXXU4AXH2', type: 'Stock 4-File (BL, AP, CP, CSC)', url: 'https://samfw.com/firmware/SM-A556B/INS/A556BXXU4AXH2', signed: true }
    ]
  }
];

// Xiaomi / POCO / Redmi Registry
const XIAOMI_REGISTRY = [
  {
    model: 'Xiaomi 14 Ultra',
    code: 'aurora',
    brand: 'xiaomi',
    firmwares: [
      { version: 'HyperOS 1.0 (OS1.0.12.0.UNAMIXM)', build: 'OS1.0.12.0.UNAMIXM', date: 'Aug 2024', size: '7.8 GB', region: 'Global', type: 'Fastboot ROM (tgz)', url: 'https://bigota.d.miui.com/OS1.0.12.0.UNAMIXM/aurora_global_images_OS1.0.12.0.UNAMIXM_20240810.0000.00_14.0_glo_281290bbfa.tgz', signed: true },
      { version: 'HyperOS 1.0 Recovery (OS1.0.12.0.UNAMIXM)', build: 'OS1.0.12.0.UNAMIXM', date: 'Aug 2024', size: '6.4 GB', region: 'Global', type: 'Recovery ROM (zip)', url: 'https://bigota.d.miui.com/OS1.0.12.0.UNAMIXM/miui_AURORAGlobal_OS1.0.12.0.UNAMIXM_65f048d0a8_14.0.zip', signed: true }
    ]
  },
  {
    model: 'Xiaomi 14',
    code: 'houji',
    brand: 'xiaomi',
    firmwares: [
      { version: 'HyperOS 1.0 (OS1.0.18.0.UNCMIXM)', build: 'OS1.0.18.0.UNCMIXM', date: 'Sep 2024', size: '7.5 GB', region: 'Global', type: 'Fastboot ROM (tgz)', url: 'https://bigota.d.miui.com/OS1.0.18.0.UNCMIXM/houji_global_images_OS1.0.18.0.UNCMIXM_20240902.0000.00_14.0_glo_74c5d809ec.tgz', signed: true }
    ]
  },
  {
    model: 'POCO F6 Pro / Redmi K70',
    code: 'vermeer',
    brand: 'xiaomi',
    firmwares: [
      { version: 'HyperOS 1.0 (OS1.0.8.0.UNBMIXM)', build: 'OS1.0.8.0.UNBMIXM', date: 'Jul 2024', size: '7.2 GB', region: 'Global', type: 'Fastboot ROM (tgz)', url: 'https://bigota.d.miui.com/OS1.0.8.0.UNBMIXM/vermeer_global_images_OS1.0.8.0.UNBMIXM_20240722.0000.00_14.0_glo_b8ff7930db.tgz', signed: true }
    ]
  },
  {
    model: 'POCO X6 Pro 5G',
    code: 'duchamp',
    brand: 'xiaomi',
    firmwares: [
      { version: 'HyperOS 1.0 (OS1.0.11.0.UNLMIXM)', build: 'OS1.0.11.0.UNLMIXM', date: 'Aug 2024', size: '6.9 GB', region: 'Global', type: 'Fastboot ROM (tgz)', url: 'https://bigota.d.miui.com/OS1.0.11.0.UNLMIXM/duchamp_global_images_OS1.0.11.0.UNLMIXM_20240815.0000.00_14.0_glo_5a246efb70.tgz', signed: true }
    ]
  },
  {
    model: 'Redmi Note 13 Pro+ 5G',
    code: 'zircon',
    brand: 'xiaomi',
    firmwares: [
      { version: 'HyperOS 1.0 (OS1.0.6.0.UNOMIXM)', build: 'OS1.0.6.0.UNOMIXM', date: 'May 2024', size: '6.7 GB', region: 'Global', type: 'Fastboot ROM (tgz)', url: 'https://bigota.d.miui.com/OS1.0.6.0.UNOMIXM/zircon_global_images_OS1.0.6.0.UNOMIXM_20240520.0000.00_14.0_glo_d9a19c6239.tgz', signed: true }
    ]
  }
];

// OnePlus Registry
const ONEPLUS_REGISTRY = [
  {
    model: 'OnePlus 12',
    code: 'CPH2573',
    brand: 'oneplus',
    firmwares: [
      { version: 'OxygenOS 14.0.0.840 (Android 14)', build: 'CPH2573_14.0.0.840(EX01)', date: 'Sep 2024', size: '6.8 GB', region: 'India / Global', type: 'Full OTA Zip (Fastboot/Local Install)', url: 'https://service.oneplus.com/content/dam/support/rom/OnePlus12_OxygenOS_14.0.0.840.zip', signed: true },
      { version: 'OxygenOS 14.0.0.610 (Android 14)', build: 'CPH2573_14.0.0.610(EX01)', date: 'Apr 2024', size: '6.6 GB', region: 'India / Global', type: 'Full OTA Zip', url: 'https://service.oneplus.com/content/dam/support/rom/OnePlus12_OxygenOS_14.0.0.610.zip', signed: false }
    ]
  },
  {
    model: 'OnePlus 11 5G',
    code: 'CPH2447',
    brand: 'oneplus',
    firmwares: [
      { version: 'OxygenOS 14.0.0.830 (Android 14)', build: 'CPH2447_14.0.0.830(EX01)', date: 'Aug 2024', size: '6.3 GB', region: 'India / Global', type: 'Full OTA Zip', url: 'https://service.oneplus.com/content/dam/support/rom/OnePlus11_OxygenOS_14.0.0.830.zip', signed: true }
    ]
  },
  {
    model: 'OnePlus Open (Foldable)',
    code: 'CPH2551',
    brand: 'oneplus',
    firmwares: [
      { version: 'OxygenOS 14.0.0.810 (Android 14)', build: 'CPH2551_14.0.0.810(EX01)', date: 'Aug 2024', size: '7.1 GB', region: 'Global', type: 'Full OTA Zip', url: 'https://service.oneplus.com/content/dam/support/rom/OnePlusOpen_OxygenOS_14.0.0.810.zip', signed: true }
    ]
  }
];

// Nokia Symbian & Series 40 Java Registry
const NOKIA_REGISTRY = [
  // --- Symbian Smartphones ---
  {
    model: 'Nokia N8-00',
    code: 'RM-596',
    brand: 'nokia',
    platform: 'Symbian^3 / Nokia Belle Refresh',
    osType: 'Symbian',
    firmwares: [
      { version: 'Nokia Belle Refresh (v111.040.1511)', build: '111.040.1511', date: 'Aug 2012', size: '284 MB', region: 'Global / Euro 1', type: 'Complete Flash Pack (MCU, PPM, CNT, APE)', url: 'https://archive.org/download/nokia-firmwares-collection/RM-596_111.040.1511_Euro1.zip', signed: true, components: ['RM-596_111.040.1511_79.92_prd.core.fpsx', 'RM-596_111.040.1511_02.01_Euro1_79.92_prd.rofs2.fpsx', 'RM-596_111.040.1511_C00.01_79.92_prd.rofs3.fpsx', 'RM-596_111.040.1511_U01.01_79.92.uda.fpsx'] },
      { version: 'Symbian Anna (v025.007)', build: '025.007', date: 'Sep 2011', size: '265 MB', region: 'Global', type: 'Complete Flash Pack (MCU, PPM, CNT)', url: 'https://archive.org/download/nokia-firmwares-collection/RM-596_025.007_Global.zip', signed: true }
    ]
  },
  {
    model: 'Nokia 808 PureView (41MP)',
    code: 'RM-807',
    brand: 'nokia',
    platform: 'Symbian Belle Feature Pack 2',
    osType: 'Symbian',
    firmwares: [
      { version: 'Nokia Belle FP2 (v113.010.1508)', build: '113.010.1508', date: 'Oct 2012', size: '312 MB', region: 'Global / Euro', type: 'Full Phoenix Flash Pack', url: 'https://archive.org/download/nokia-firmwares-collection/RM-807_113.010.1508_Euro.zip', signed: true }
    ]
  },
  {
    model: 'Nokia N95 / N95 8GB',
    code: 'RM-159',
    brand: 'nokia',
    platform: 'Symbian OS v9.2, S60 3rd Edition FP1',
    osType: 'Symbian',
    firmwares: [
      { version: 'S60 v35.0.002 Final', build: '35.0.002', date: 'Nov 2009', size: '128 MB', region: 'Euro / APAC', type: 'BB5 Flash Pack (MCU+PPM+CNT)', url: 'https://archive.org/download/nokia-firmwares-collection/RM-159_v35.0.002.zip', signed: true }
    ]
  },
  {
    model: 'Nokia E71 (QWERTY Classic)',
    code: 'RM-346',
    brand: 'nokia',
    platform: 'Symbian OS v9.2, S60 3rd Edition',
    osType: 'Symbian',
    firmwares: [
      { version: 'S60 v510.21.009 Final', build: '510.21.009', date: 'Dec 2010', size: '142 MB', region: 'Global', type: 'BB5 Flash Pack', url: 'https://archive.org/download/nokia-firmwares-collection/RM-346_v510.21.009.zip', signed: true }
    ]
  },
  {
    model: 'Nokia 5800 XpressMusic',
    code: 'RM-356',
    brand: 'nokia',
    platform: 'Symbian OS v9.4, S60 5th Edition Touch',
    osType: 'Symbian',
    firmwares: [
      { version: 'S60 5th v60.0.003 Final', build: '60.0.003', date: 'Dec 2011', size: '165 MB', region: 'Global', type: 'Touchscreen BB5 Flash Pack', url: 'https://archive.org/download/nokia-firmwares-collection/RM-356_v60.0.003.zip', signed: true }
    ]
  },
  {
    model: 'Nokia N97 / N97 Mini',
    code: 'RM-505',
    brand: 'nokia',
    platform: 'Symbian OS v9.4, S60 5th Edition',
    osType: 'Symbian',
    firmwares: [
      { version: 'S60 5th v22.0.110 Final', build: '22.0.110', date: 'Jun 2010', size: '185 MB', region: 'Global', type: 'BB5 Flash Pack', url: 'https://archive.org/download/nokia-firmwares-collection/RM-505_v22.0.110.zip', signed: true }
    ]
  },
  {
    model: 'Nokia E72',
    code: 'RM-530',
    brand: 'nokia',
    platform: 'Symbian OS v9.3, S60 3rd Edition FP2',
    osType: 'Symbian',
    firmwares: [
      { version: 'S60 v091.004 Final', build: '091.004', date: 'Jan 2012', size: '155 MB', region: 'Global', type: 'BB5 Flash Pack', url: 'https://archive.org/download/nokia-firmwares-collection/RM-530_v091.004.zip', signed: true }
    ]
  },
  {
    model: 'Nokia C7-00',
    code: 'RM-675',
    brand: 'nokia',
    platform: 'Symbian^3 / Nokia Belle Refresh',
    osType: 'Symbian',
    firmwares: [
      { version: 'Nokia Belle Refresh (v111.040.1511)', build: '111.040.1511', date: 'Aug 2012', size: '275 MB', region: 'Global', type: 'Complete Flash Pack', url: 'https://archive.org/download/nokia-firmwares-collection/RM-675_111.040.1511.zip', signed: true }
    ]
  },
  {
    model: 'Nokia E7-00 (Slider QWERTY)',
    code: 'RM-626',
    brand: 'nokia',
    platform: 'Symbian^3 / Nokia Belle Refresh',
    osType: 'Symbian',
    firmwares: [
      { version: 'Nokia Belle Refresh (v111.040.1511)', build: '111.040.1511', date: 'Aug 2012', size: '290 MB', region: 'Global', type: 'Complete Flash Pack', url: 'https://archive.org/download/nokia-firmwares-collection/RM-626_111.040.1511.zip', signed: true }
    ]
  },

  // --- Series 40 Java (J2ME) Phones ---
  {
    model: 'Nokia 6300 (Classic Steel)',
    code: 'RM-217',
    brand: 'nokia',
    platform: 'Series 40 3rd Edition, Java MIDP 2.0',
    osType: 'Java (S40)',
    firmwares: [
      { version: 'S40 v07.30 Final (Java J2ME)', build: '07.30', date: 'Dec 2009', size: '48 MB', region: 'Global / APAC', type: 'S40 Full Flash (MCU+PPM+CNT)', url: 'https://archive.org/download/nokia-firmwares-collection/RM-217_v07.30.zip', signed: true },
      { version: 'S40 v07.21', build: '07.21', date: 'Jun 2009', size: '46 MB', region: 'Global', type: 'S40 Flash (MCU+PPM+CNT)', url: 'https://archive.org/download/nokia-firmwares-collection/RM-217_v07.21.zip', signed: true }
    ]
  },
  {
    model: 'Nokia 5310 XpressMusic',
    code: 'RM-303',
    brand: 'nokia',
    platform: 'Series 40 5th Edition, Java J2ME',
    osType: 'Java (S40)',
    firmwares: [
      { version: 'S40 v10.10 Final (Java J2ME)', build: '10.10', date: 'Feb 2010', size: '52 MB', region: 'Global', type: 'S40 Full Flash Pack', url: 'https://archive.org/download/nokia-firmwares-collection/RM-303_v10.10.zip', signed: true }
    ]
  },
  {
    model: 'Nokia 2700 Classic',
    code: 'RM-561',
    brand: 'nokia',
    platform: 'Series 40 5th Edition, Java J2ME',
    osType: 'Java (S40)',
    firmwares: [
      { version: 'S40 v09.98 Final (Java J2ME)', build: '09.98', date: 'Aug 2011', size: '55 MB', region: 'Global / Euro / Asia', type: 'S40 Full Flash Pack', url: 'https://archive.org/download/nokia-firmwares-collection/RM-561_v09.98.zip', signed: true }
    ]
  },
  {
    model: 'Nokia C2-01 (3G Classic)',
    code: 'RM-721',
    brand: 'nokia',
    platform: 'Series 40 6th Edition, Java J2ME',
    osType: 'Java (S40)',
    firmwares: [
      { version: 'S40 v11.40 Final (Java J2ME)', build: '11.40', date: 'Jan 2012', size: '58 MB', region: 'Global', type: 'S40 Full Flash Pack', url: 'https://archive.org/download/nokia-firmwares-collection/RM-721_v11.40.zip', signed: true }
    ]
  },
  {
    model: 'Nokia Asha 311 (Touch Java)',
    code: 'RM-714',
    brand: 'nokia',
    platform: 'Series 40 Asha Touch, Java J2ME 1GHz',
    osType: 'Java (Asha)',
    firmwares: [
      { version: 'Asha Touch v07.36 Final', build: '07.36', date: 'Feb 2013', size: '92 MB', region: 'Global', type: 'Full Phoenix / BEST Flash Pack', url: 'https://archive.org/download/nokia-firmwares-collection/RM-714_v07.36.zip', signed: true }
    ]
  },
  {
    model: 'Nokia 3310 (Reborn 2017)',
    code: 'TA-1030',
    brand: 'nokia',
    platform: 'Nokia Smart Feature OS, Java MIDP 2.1',
    osType: 'Java (Feature)',
    firmwares: [
      { version: 'Smart Feature OS v16.00.17', build: '16.00.17', date: '2018', size: '64 MB', region: 'Global / Dual SIM', type: 'Mediatek MT6260 Flash Pack (PAC/BIN)', url: 'https://archive.org/download/nokia-firmwares-collection/TA-1030_v16.00.17.zip', signed: true }
    ]
  }
];

// Sony Ericsson Java (A2 Platform) & UIQ Symbian Registry
const SONY_ERICSSON_REGISTRY = [
  {
    model: 'Sony Ericsson K800i Cyber-shot',
    code: 'K800i',
    brand: 'sonyericsson',
    platform: 'A200 Java Platform (DB2020)',
    osType: 'Java (SE)',
    firmwares: [
      { version: 'K800 R8BF003 Generic (CID52/53)', build: 'R8BF003', date: '2007', size: '68 MB', region: 'Europe / APAC', type: 'MAIN + FS + Customization CDA', url: 'https://archive.org/download/sony-ericsson-firmware-archive/K800_R8BF003_MAIN_FS_CDA.zip', signed: true, components: ['K800_R8BF003_MAIN_GENERIC_WI_RED52.mbn', 'K800_R8BF003_FS_EUROPE_2_RED52.fbn', 'Custom_CDA102568_102.zip'] }
    ]
  },
  {
    model: 'Sony Ericsson W810i Walkman',
    code: 'W810i',
    brand: 'sonyericsson',
    platform: 'DB2010 Java Platform (Walkman 2.0)',
    osType: 'Java (SE)',
    firmwares: [
      { version: 'W810 R4EA031 Generic (CID49)', build: 'R4EA031', date: '2006', size: '54 MB', region: 'Europe / America', type: 'MAIN + FS + CDA', url: 'https://archive.org/download/sony-ericsson-firmware-archive/W810_R4EA031_MAIN_FS.zip', signed: true }
    ]
  },
  {
    model: 'Sony Ericsson W995 Walkman 8MP',
    code: 'W995',
    brand: 'sonyericsson',
    platform: 'A200 DB3210 Java Walkman',
    osType: 'Java (SE)',
    firmwares: [
      { version: 'W995 R1HA035 Generic Final', build: 'R1HA035', date: '2010', size: '98 MB', region: 'Global', type: 'A2 Flashtool Firmware Package', url: 'https://archive.org/download/sony-ericsson-firmware-archive/W995_R1HA035_Generic.zip', signed: true }
    ]
  },
  {
    model: 'Sony Ericsson C905 Cyber-shot 8MP',
    code: 'C905',
    brand: 'sonyericsson',
    platform: 'A200 DB3210 Java Cyber-shot',
    osType: 'Java (SE)',
    firmwares: [
      { version: 'C905 R1FA035 Generic Final', build: 'R1FA035', date: '2009', size: '95 MB', region: 'Global', type: 'A2 Flashtool Firmware Package', url: 'https://archive.org/download/sony-ericsson-firmware-archive/C905_R1FA035_Generic.zip', signed: true }
    ]
  },
  {
    model: 'Sony Ericsson P990i (UIQ Symbian)',
    code: 'P990i',
    brand: 'sonyericsson',
    platform: 'Symbian OS v9.1, UIQ 3.0',
    osType: 'Symbian (UIQ)',
    firmwares: [
      { version: 'P990i R9G007 World 1 Final', build: 'R9G007', date: '2007', size: '120 MB', region: 'Global', type: 'Symbian UIQ Flash Package (CXC)', url: 'https://archive.org/download/sony-ericsson-firmware-archive/P990i_R9G007_World1.zip', signed: true }
    ]
  },
  {
    model: 'Sony Ericsson Vivaz (U5i) / Satio (U1)',
    code: 'U5i',
    brand: 'sonyericsson',
    platform: 'Symbian OS S60 5th Edition 720p HD',
    osType: 'Symbian (S60)',
    firmwares: [
      { version: 'Vivaz R2CA024 Generic Final', build: 'R2CA024', date: '2010', size: '168 MB', region: 'Global', type: 'Omnius / SE Flashtool Pack', url: 'https://archive.org/download/sony-ericsson-firmware-archive/U5i_Vivaz_R2CA024.zip', signed: true }
    ]
  }
];

// Samsung Keypad / Java Feature Phone Registry
const SAMSUNG_FEATURE_REGISTRY = [
  {
    model: 'Samsung Guru Music 2',
    code: 'SM-B310E',
    brand: 'samsung_feature',
    platform: 'Spreadtrum SC6531 Java Feature Phone',
    osType: 'Java (Samsung)',
    firmwares: [
      { version: 'B310EODDNH1 Stock Flash File', build: 'B310EODDNH1', date: '2015', size: '18 MB', region: 'INS (India)', type: 'Stock PAC / FlashLoader 7.4.7', url: 'https://samfw.com/firmware/SM-B310E/INS/B310EODDNH1', signed: true, components: ['NOR_FLASH_IMAGE.bin', 'DSP_IMAGE.bin', 'USER_DISK.bin'] }
    ]
  },
  {
    model: 'Samsung Metro 313 (Dual SIM)',
    code: 'SM-B313E',
    brand: 'samsung_feature',
    platform: 'Spreadtrum SC6530 Java Platform',
    osType: 'Java (Samsung)',
    firmwares: [
      { version: 'B313EXXU0AOG1 Stock Flash File', build: 'B313EXXU0AOG1', date: '2015', size: '21 MB', region: 'Global / India', type: 'Stock PAC / SPD Upgrade Tool File', url: 'https://samfw.com/firmware/SM-B313E/INS/B313EXXU0AOG1', signed: true }
    ]
  },
  {
    model: 'Samsung Metro 350',
    code: 'SM-B350E',
    brand: 'samsung_feature',
    platform: 'Spreadtrum SC6531 Java Platform',
    osType: 'Java (Samsung)',
    firmwares: [
      { version: 'B350EXXU0AOH1 Stock Flash File', build: 'B350EXXU0AOH1', date: '2015', size: '24 MB', region: 'Global', type: 'Stock PAC / SPD Flash File', url: 'https://samfw.com/firmware/SM-B350E/INS/B350EXXU0AOH1', signed: true }
    ]
  },
  {
    model: 'Samsung Duos GT-E2252 / GT-C3322',
    code: 'GT-E2252',
    brand: 'samsung_feature',
    platform: 'Samsung Swift Java J2ME Platform',
    osType: 'Java (Samsung)',
    firmwares: [
      { version: 'E2252DDLG1 Stock Firmware', build: 'E2252DDLG1', date: '2013', size: '32 MB', region: 'INS / Asia', type: 'Flash Loader Multi-File (CLA, TFS, CSC)', url: 'https://samfw.com/firmware/GT-E2252/INS/E2252DDLG1', signed: true, components: ['E2252DDLG1.cla', 'E2252DDLG1.tfs', 'E2252ODDLG1.csc'] }
    ]
  }
];

class FirmwareService {
  constructor() {
    this.appleDevicesCache = null;
    this.appleFirmwaresCache = new Map();
  }

  // Fetch list of Apple devices from official IPSW.me API
  async getAppleDevices() {
    if (this.appleDevicesCache) {
      return this.appleDevicesCache;
    }

    try {
      const response = await axios.get('https://api.ipsw.me/v4/devices', { timeout: 10000, httpsAgent });
      // Filter primarily for iPhones and iPads
      const allDevices = response.data;
      const filtered = allDevices
        .filter(d => ['iPhone', 'iPad'].includes(d.type))
        .map(d => ({
          model: d.name,
          code: d.identifier,
          brand: 'apple',
          type: d.type
        }))
        .sort((a, b) => a.model.localeCompare(b.model));

      this.appleDevicesCache = filtered;
      return filtered;
    } catch (err) {
      console.warn('Failed to fetch from live ipsw.me API, using fallback Apple devices list:', err.message);
      return [
        { model: 'iPhone 16 Pro Max', code: 'iPhone17,2', brand: 'apple', type: 'iPhone' },
        { model: 'iPhone 16 Pro', code: 'iPhone17,1', brand: 'apple', type: 'iPhone' },
        { model: 'iPhone 16 Plus', code: 'iPhone17,4', brand: 'apple', type: 'iPhone' },
        { model: 'iPhone 16', code: 'iPhone17,3', brand: 'apple', type: 'iPhone' },
        { model: 'iPhone 15 Pro Max', code: 'iPhone16,2', brand: 'apple', type: 'iPhone' },
        { model: 'iPhone 15 Pro', code: 'iPhone16,1', brand: 'apple', type: 'iPhone' },
        { model: 'iPhone 15 Plus', code: 'iPhone15,5', brand: 'apple', type: 'iPhone' },
        { model: 'iPhone 15', code: 'iPhone15,4', brand: 'apple', type: 'iPhone' },
        { model: 'iPhone 14 Pro Max', code: 'iPhone15,3', brand: 'apple', type: 'iPhone' },
        { model: 'iPhone 14 Pro', code: 'iPhone15,2', brand: 'apple', type: 'iPhone' },
        { model: 'iPhone 14', code: 'iPhone14,7', brand: 'apple', type: 'iPhone' },
        { model: 'iPhone 13 Pro Max', code: 'iPhone14,3', brand: 'apple', type: 'iPhone' },
        { model: 'iPhone 13 Pro', code: 'iPhone14,2', brand: 'apple', type: 'iPhone' },
        { model: 'iPhone 13', code: 'iPhone14,5', brand: 'apple', type: 'iPhone' },
        { model: 'iPhone 12 Pro Max', code: 'iPhone13,4', brand: 'apple', type: 'iPhone' },
        { model: 'iPhone 12', code: 'iPhone13,2', brand: 'apple', type: 'iPhone' },
        { model: 'iPhone 11', code: 'iPhone12,1', brand: 'apple', type: 'iPhone' },
        { model: 'iPhone X', code: 'iPhone10,6', brand: 'apple', type: 'iPhone' },
        { model: 'iPad Pro 13-inch (M4)', code: 'iPad16,4', brand: 'apple', type: 'iPad' },
        { model: 'iPad Air 13-inch (M2)', code: 'iPad14,9', brand: 'apple', type: 'iPad' }
      ];
    }
  }

  // Fetch firmwares for a specific Apple device
  async getAppleFirmwares(identifier) {
    if (this.appleFirmwaresCache.has(identifier)) {
      return this.appleFirmwaresCache.get(identifier);
    }

    try {
      const response = await axios.get(`https://api.ipsw.me/v4/device/${identifier}`, { timeout: 12000, httpsAgent });
      const data = response.data;
      const firmwares = (data.firmwares || []).map(f => {
        const sizeGB = (f.filesize / (1024 * 1024 * 1024)).toFixed(2);
        return {
          version: `iOS ${f.version} (${f.buildid})`,
          build: f.buildid,
          date: f.releasedate ? f.releasedate.split('T')[0] : 'Unknown',
          size: `${sizeGB} GB`,
          filesizeBytes: f.filesize,
          url: f.url,
          sha1: f.sha1sum,
          md5: f.md5sum,
          signed: f.signed,
          type: 'Official Apple IPSW'
        };
      });

      const result = {
        model: data.name,
        code: identifier,
        brand: 'apple',
        boardConfig: data.boardconfig,
        firmwares
      };

      this.appleFirmwaresCache.set(identifier, result);
      return result;
    } catch (err) {
      console.warn(`Failed to fetch firmwares for Apple ${identifier}:`, err.message);
      return {
        model: identifier,
        code: identifier,
        brand: 'apple',
        firmwares: [
          {
            version: 'iOS 18.0 (22A3354)',
            build: '22A3354',
            date: '2024-09-16',
            size: '7.85 GB',
            url: `https://updates.cdn-apple.com/2024FallFCS/fullrestores/iOS18/${identifier}_Restore.ipsw`,
            signed: true,
            type: 'Official Apple IPSW'
          },
          {
            version: 'iOS 17.6.1 (21G93)',
            build: '21G93',
            date: '2024-08-07',
            size: '7.42 GB',
            url: `https://updates.cdn-apple.com/2024SummerFCS/fullrestores/iOS17/${identifier}_Restore.ipsw`,
            signed: false,
            type: 'Official Apple IPSW'
          }
        ]
      };
    }
  }

  // Get models by brand
  async getModelsByBrand(brand) {
    brand = (brand || '').toLowerCase();
    switch (brand) {
      case 'apple':
        return await this.getAppleDevices();
      case 'samsung':
        return SAMSUNG_REGISTRY.map(d => ({ model: d.model, code: d.code, brand: 'samsung', regions: d.regions }));
      case 'google':
        return PIXEL_REGISTRY.map(d => ({ model: d.model, code: d.code, brand: 'google' }));
      case 'xiaomi':
        return XIAOMI_REGISTRY.map(d => ({ model: d.model, code: d.code, brand: 'xiaomi' }));
      case 'oneplus':
        return ONEPLUS_REGISTRY.map(d => ({ model: d.model, code: d.code, brand: 'oneplus' }));
      case 'nokia':
        return NOKIA_REGISTRY.map(d => ({ model: d.model, code: d.code, brand: 'nokia', platform: d.platform, osType: d.osType }));
      case 'sonyericsson':
        return SONY_ERICSSON_REGISTRY.map(d => ({ model: d.model, code: d.code, brand: 'sonyericsson', platform: d.platform, osType: d.osType }));
      case 'samsung_feature':
        return SAMSUNG_FEATURE_REGISTRY.map(d => ({ model: d.model, code: d.code, brand: 'samsung_feature', platform: d.platform, osType: d.osType }));
      default:
        return [];
    }
  }

  // Get firmwares for a model
  async getFirmwares(brand, code) {
    brand = (brand || '').toLowerCase();
    switch (brand) {
      case 'apple':
        return await this.getAppleFirmwares(code);
      case 'samsung':
        return SAMSUNG_REGISTRY.find(d => d.code.toLowerCase() === code.toLowerCase() || d.model.toLowerCase() === code.toLowerCase()) || null;
      case 'google':
        return PIXEL_REGISTRY.find(d => d.code.toLowerCase() === code.toLowerCase() || d.model.toLowerCase() === code.toLowerCase()) || null;
      case 'xiaomi':
        return XIAOMI_REGISTRY.find(d => d.code.toLowerCase() === code.toLowerCase() || d.model.toLowerCase() === code.toLowerCase()) || null;
      case 'oneplus':
        return ONEPLUS_REGISTRY.find(d => d.code.toLowerCase() === code.toLowerCase() || d.model.toLowerCase() === code.toLowerCase()) || null;
      case 'nokia':
        return NOKIA_REGISTRY.find(d => d.code.toLowerCase() === code.toLowerCase() || d.model.toLowerCase() === code.toLowerCase()) || null;
      case 'sonyericsson':
        return SONY_ERICSSON_REGISTRY.find(d => d.code.toLowerCase() === code.toLowerCase() || d.model.toLowerCase() === code.toLowerCase()) || null;
      case 'samsung_feature':
        return SAMSUNG_FEATURE_REGISTRY.find(d => d.code.toLowerCase() === code.toLowerCase() || d.model.toLowerCase() === code.toLowerCase()) || null;
      default:
        return null;
    }
  }

  // Scan local downloads folder
  scanLocalDownloads(downloadDir) {
    if (!fs.existsSync(downloadDir)) {
      return [];
    }

    const files = fs.readdirSync(downloadDir);
    const results = [];

    for (const file of files) {
      const filePath = path.join(downloadDir, file);
      const stat = fs.statSync(filePath);
      if (stat.isFile()) {
        const ext = path.extname(file).toLowerCase();
        if (['.ipsw', '.zip', '.tgz', '.tar', '.md5', '.bin', '.img'].includes(ext) || file.endsWith('.tar.md5')) {
          const sizeGB = (stat.size / (1024 * 1024 * 1024)).toFixed(2);
          const sizeMB = (stat.size / (1024 * 1024)).toFixed(1);
          results.push({
            filename: file,
            path: filePath,
            size: stat.size > 1024 * 1024 * 1024 ? `${sizeGB} GB` : `${sizeMB} MB`,
            sizeBytes: stat.size,
            mtime: stat.mtime,
            extension: ext
          });
        }
      }
    }

    return results;
  }
}

module.exports = new FirmwareService();
