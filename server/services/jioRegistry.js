// Official Registry of Reliance Jio Phones (KaiOS, Android Pragati OS, and Jio Bharat)
// Supports Qualcomm QFIL / QFlash firehose packages, Spreadtrum SPD ResearchDownload PAC files

const JIO_REGISTRY = [
  // ==========================================
  // JIOPHONE 1 & 2 (KAIOS FEATURE PHONES)
  // ==========================================
  {
    model: 'JioPhone F220B (Black)',
    code: 'LYF-F220B',
    brand: 'jio',
    series: 'JioPhone 1 (Qualcomm)',
    chipset: 'Qualcomm Snapdragon 205 (MSM8905)',
    bootKey: 'Hold * (Star) Key while inserting USB cable',
    firmwares: [
      {
        version: 'KaiOS 2.5 Official Flash File (LYF-F220B-003-01-38-080519)',
        build: '003-01-38-080519',
        date: 'May 2019',
        size: '850 MB',
        region: 'India / Jio Official',
        type: 'Official Qualcomm QFIL / QFlash Package',
        url: 'https://archive.org/download/jiophone-official-stock-roms/LYF-F220B-003-01-38-080519_QFIL.zip',
        signed: true,
        components: ['prog_emmc_firehose_8909_ddr.mbn', 'rawprogram0.xml', 'patch0.xml', 'boot.img', 'system.img', 'recovery.img']
      }
    ]
  },
  {
    model: 'JioPhone F90M',
    code: 'LYF-F90M',
    brand: 'jio',
    series: 'JioPhone 1 (Qualcomm)',
    chipset: 'Qualcomm Snapdragon 205 (MSM8905)',
    bootKey: 'Hold Center / 1 Key while inserting USB cable',
    firmwares: [
      {
        version: 'KaiOS 2.5 Flash File (LYF-F90M-000-02-23-280219)',
        build: '000-02-23-280219',
        date: 'Feb 2019',
        size: '780 MB',
        region: 'India / Jio Official',
        type: 'Official Qualcomm QFIL / QFlash Package',
        url: 'https://archive.org/download/jiophone-official-stock-roms/LYF-F90M-000-02-23-280219_QFIL.zip',
        signed: true,
        components: ['prog_emmc_firehose_8909.mbn', 'rawprogram0.xml', 'patch0.xml']
      }
    ]
  },
  {
    model: 'JioPhone F120B',
    code: 'LYF-F120B',
    brand: 'jio',
    series: 'JioPhone 1 (Qualcomm)',
    chipset: 'Qualcomm Snapdragon 205 (MSM8905)',
    bootKey: 'Hold * + # Keys while inserting USB cable',
    firmwares: [
      {
        version: 'KaiOS 2.5 Flash File (LYF-F120B-001-01-21-270818)',
        build: '001-01-21-270818',
        date: 'Aug 2018',
        size: '720 MB',
        region: 'India / Jio Official',
        type: 'Official Qualcomm QFIL / QFlash Package',
        url: 'https://archive.org/download/jiophone-official-stock-roms/LYF-F120B-001-01-21-270818_QFIL.zip',
        signed: true
      }
    ]
  },
  {
    model: 'JioPhone F320B (Latest JP1)',
    code: 'LYF-F320B',
    brand: 'jio',
    series: 'JioPhone 1 (Spreadtrum)',
    chipset: 'Spreadtrum SC9820A',
    bootKey: 'Hold * (Star) Key while inserting USB cable',
    firmwares: [
      {
        version: 'KaiOS 2.5.4 Official PAC File (F320B-000-01-18-120521)',
        build: '000-01-18-120521',
        date: 'May 2021',
        size: '590 MB',
        region: 'India / Jio Official',
        type: 'Official SPD ResearchDownload / Upgrade Tool (.pac)',
        url: 'https://archive.org/download/jiophone-official-stock-roms/LYF-F320B-000-01-18-120521.pac',
        signed: true,
        components: ['F320B.pac', 'fdl1.bin', 'fdl2.bin', 'boot.img', 'system.img']
      }
    ]
  },
  {
    model: 'JioPhone F50Y',
    code: 'LYF-F50Y',
    brand: 'jio',
    series: 'JioPhone 1 (Qualcomm)',
    chipset: 'Qualcomm Snapdragon 205 (MSM8905)',
    bootKey: 'Hold Up Navigation Key while inserting USB cable',
    firmwares: [
      {
        version: 'KaiOS 2.5 Flash File (LYF-F50Y-000-01-20-140219)',
        build: '000-01-20-140219',
        date: 'Feb 2019',
        size: '760 MB',
        region: 'India / Jio Official',
        type: 'Official Qualcomm QFIL / QFlash Package',
        url: 'https://archive.org/download/jiophone-official-stock-roms/LYF-F50Y-000-01-20-140219_QFIL.zip',
        signed: true
      }
    ]
  },
  {
    model: 'JioPhone F61F',
    code: 'LYF-F61F',
    brand: 'jio',
    series: 'JioPhone 1 (Spreadtrum)',
    chipset: 'Spreadtrum SC9820E',
    bootKey: 'Hold Green Call Key while inserting USB cable',
    firmwares: [
      {
        version: 'KaiOS 2.5 Official PAC File (F61F-000-01-22-100419)',
        build: '000-01-22-100419',
        date: 'Apr 2019',
        size: '620 MB',
        region: 'India / Jio Official',
        type: 'Official SPD ResearchDownload PAC File (.pac)',
        url: 'https://archive.org/download/jiophone-official-stock-roms/LYF-F61F-000-01-22-100419.pac',
        signed: true
      }
    ]
  },
  {
    model: 'JioPhone 2 (QWERTY Keyboard)',
    code: 'LYF-F211S',
    brand: 'jio',
    series: 'JioPhone 2',
    chipset: 'Qualcomm Snapdragon 205 (MSM8905)',
    bootKey: 'Hold Q or P Key while inserting USB cable',
    firmwares: [
      {
        version: 'KaiOS 2.5 QWERTY Flash File (F211S-000-01-18-201018)',
        build: '000-01-18-201018',
        date: 'Oct 2018',
        size: '810 MB',
        region: 'India / Jio Official',
        type: 'Official Qualcomm QFIL Package',
        url: 'https://archive.org/download/jiophone-official-stock-roms/LYF-F211S-000-01-18-201018_QFIL.zip',
        signed: true
      }
    ]
  },

  // ==========================================
  // JIOPHONE NEXT (SMARTPHONE)
  // ==========================================
  {
    model: 'JioPhone Next (Smartphone)',
    code: 'LS1542QW',
    brand: 'jio',
    series: 'Jio Smartphone',
    chipset: 'Qualcomm Snapdragon 215 (QM215 Quad-Core)',
    bootKey: 'Hold Volume Down + Power for Fastboot / EDL Test Point',
    firmwares: [
      {
        version: 'Pragati OS / Android 11 Go Edition (LS1542QW_01.02.05)',
        build: 'LS1542QW_01.02.05_20220615',
        date: 'Jun 2022',
        size: '2.35 GB',
        region: 'India / Official Jio-Google Pragati OS',
        type: 'Official Qualcomm QFIL & Fastboot Flash Package',
        url: 'https://archive.org/download/jiophone-official-stock-roms/JioPhone_Next_LS1542QW_PragatiOS_QFIL.zip',
        signed: true,
        components: ['prog_emmc_firehose_8917_ddr.mbn', 'rawprogram_unsparse.xml', 'patch0.xml', 'boot.img', 'super.img']
      }
    ]
  },

  // ==========================================
  // JIO BHARAT (4G KEYPAD SERIES)
  // ==========================================
  {
    model: 'Jio Bharat V2 / B1 (4G Keypad)',
    code: 'JBD-V2',
    brand: 'jio',
    series: 'Jio Bharat 4G',
    chipset: 'ASR / Unisoc 4G Feature Platform',
    bootKey: 'Hold Center / Call Key while inserting Micro-USB',
    firmwares: [
      {
        version: 'Jio Bharat 4G Official Firmware (.pac)',
        build: 'JBD-V2-V1.0.8',
        date: 'Aug 2023',
        size: '145 MB',
        region: 'India Official',
        type: 'Official SPD Upgrade Tool PAC Package (.pac)',
        url: 'https://archive.org/download/jiophone-official-stock-roms/Jio_Bharat_V2_JBD-V2_V1.0.8.pac',
        signed: true
      }
    ]
  }
];

module.exports = {
  JIO_REGISTRY
};
