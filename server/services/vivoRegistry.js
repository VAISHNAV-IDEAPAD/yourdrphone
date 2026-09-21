// Official Registry of Vivo & iQOO Smartphones & Stock Funtouch OS / OriginOS Firmwares
// Supports Vivo X-Series Flagships, V-Series Portraits, Y-Series, and iQOO Gaming Devices

const VIVO_REGISTRY = [
  // ==========================================
  // VIVO X SERIES (ZEISS FLAGSHIPS)
  // ==========================================
  {
    model: 'Vivo X100 Pro 5G',
    code: 'V2324A',
    brand: 'vivo',
    series: 'Vivo X Flagship',
    chipset: 'Dimensity 9300',
    firmwares: [
      {
        version: 'Funtouch OS 14 / Android 14 (PD2324F_EX_A_14.0.15.2.W30)',
        build: '14.0.15.2.W30',
        date: 'Aug 2024',
        size: '6.95 GB',
        region: 'Global / India (EX)',
        type: 'Full Fastboot Service Package (AFTool)',
        url: 'https://vivofirmware.com/get/PD2324F_EX_A_14.0.15.2.W30_vivo_qcom_mtk_firmware.zip',
        signed: true,
        components: ['boot.img', 'super.img', 'recovery.img', 'vbmeta.img', 'fastboot_flash.bat']
      },
      {
        version: 'Funtouch OS 14 Recovery Zip',
        build: 'PD2324F_EX_14.0.15.2',
        date: 'Aug 2024',
        size: '5.85 GB',
        region: 'Global',
        type: 'Official Recovery Update Package (.zip)',
        url: 'https://vivofirmware.com/get/PD2324F_EX_OTA_14.0.15.2.zip',
        signed: true
      }
    ]
  },
  {
    model: 'Vivo X100 5G',
    code: 'V2309',
    brand: 'vivo',
    series: 'Vivo X Flagship',
    chipset: 'Dimensity 9300',
    firmwares: [
      {
        version: 'Funtouch OS 14 / Android 14 (PD2309F_EX_A_14.0.16.1.W30)',
        build: '14.0.16.1.W30',
        date: 'Jul 2024',
        size: '6.75 GB',
        region: 'Global / India',
        type: 'Full Fastboot Service Package',
        url: 'https://vivofirmware.com/get/PD2309F_EX_A_14.0.16.1.W30_vivo_firmware.zip',
        signed: true
      }
    ]
  },
  {
    model: 'Vivo X90 Pro 5G',
    code: 'V2219',
    brand: 'vivo',
    series: 'Vivo X Flagship',
    chipset: 'Dimensity 9200',
    firmwares: [
      {
        version: 'Funtouch OS 14 / Android 14 (PD2242F_EX_A_14.0.12.3.W30)',
        build: '14.0.12.3.W30',
        date: 'May 2024',
        size: '6.45 GB',
        region: 'Global / Europe / India',
        type: 'Full Fastboot Service Package',
        url: 'https://vivofirmware.com/get/PD2242F_EX_A_14.0.12.3.W30_vivo_firmware.zip',
        signed: true
      }
    ]
  },
  {
    model: 'Vivo X80 Pro',
    code: 'V2185A',
    brand: 'vivo',
    series: 'Vivo X Flagship',
    chipset: 'Snapdragon 8 Gen 1',
    firmwares: [
      {
        version: 'Funtouch OS 14 / Android 14 (PD2185F_EX_A_14.0.10.4.W30)',
        build: '14.0.10.4.W30',
        date: 'Mar 2024',
        size: '6.20 GB',
        region: 'Global / India',
        type: 'Full Fastboot Service Package (QFIL / Fastboot)',
        url: 'https://vivofirmware.com/get/PD2185F_EX_A_14.0.10.4.W30_qcom_firmware.zip',
        signed: true
      }
    ]
  },

  // ==========================================
  // VIVO V SERIES (PORTRAIT MASTERS)
  // ==========================================
  {
    model: 'Vivo V30 Pro 5G',
    code: 'V2319',
    brand: 'vivo',
    series: 'Vivo V Series',
    chipset: 'Dimensity 8200',
    firmwares: [
      {
        version: 'Funtouch OS 14 / Android 14 (PD2325F_EX_A_14.0.8.2.W30)',
        build: '14.0.8.2.W30',
        date: 'Jul 2024',
        size: '6.10 GB',
        region: 'Global / India',
        type: 'Full Fastboot Service Package',
        url: 'https://vivofirmware.com/get/PD2325F_EX_A_14.0.8.2.W30_vivo_firmware.zip',
        signed: true
      }
    ]
  },
  {
    model: 'Vivo V30 5G',
    code: 'V2318',
    brand: 'vivo',
    series: 'Vivo V Series',
    chipset: 'Snapdragon 7 Gen 3',
    firmwares: [
      {
        version: 'Funtouch OS 14 / Android 14 (PD2323F_EX_A_14.0.9.1.W30)',
        build: '14.0.9.1.W30',
        date: 'Jul 2024',
        size: '5.90 GB',
        region: 'Global / India',
        type: 'Full Fastboot Service Package',
        url: 'https://vivofirmware.com/get/PD2323F_EX_A_14.0.9.1.W30_qcom_firmware.zip',
        signed: true
      }
    ]
  },
  {
    model: 'Vivo V29 Pro 5G',
    code: 'V2251',
    brand: 'vivo',
    series: 'Vivo V Series',
    chipset: 'Dimensity 8200',
    firmwares: [
      {
        version: 'Funtouch OS 14 / Android 14 (PD2284F_EX_A_14.0.7.3.W30)',
        build: '14.0.7.3.W30',
        date: 'May 2024',
        size: '5.65 GB',
        region: 'Global / India',
        type: 'Full Fastboot Service Package',
        url: 'https://vivofirmware.com/get/PD2284F_EX_A_14.0.7.3.W30_vivo_firmware.zip',
        signed: true
      }
    ]
  },
  {
    model: 'Vivo V29 5G',
    code: 'V2250',
    brand: 'vivo',
    series: 'Vivo V Series',
    chipset: 'Snapdragon 778G 5G',
    firmwares: [
      {
        version: 'Funtouch OS 14 / Android 14 (PD2283F_EX_A_14.0.8.1.W30)',
        build: '14.0.8.1.W30',
        date: 'Jun 2024',
        size: '5.50 GB',
        region: 'Global / India',
        type: 'Full Fastboot Service Package',
        url: 'https://vivofirmware.com/get/PD2283F_EX_A_14.0.8.1.W30_qcom_firmware.zip',
        signed: true
      }
    ]
  },
  {
    model: 'Vivo V27 Pro 5G',
    code: 'V2285',
    brand: 'vivo',
    series: 'Vivo V Series',
    chipset: 'Dimensity 8200',
    firmwares: [
      {
        version: 'Funtouch OS 14 / Android 14 (PD2252F_EX_A_14.0.6.2.W30)',
        build: '14.0.6.2.W30',
        date: 'Apr 2024',
        size: '5.35 GB',
        region: 'Global / India',
        type: 'Full Fastboot Service Package',
        url: 'https://vivofirmware.com/get/PD2252F_EX_A_14.0.6.2.W30_vivo_firmware.zip',
        signed: true
      }
    ]
  },

  // ==========================================
  // VIVO Y SERIES (BUDGET & EVERYDAY)
  // ==========================================
  {
    model: 'Vivo Y200 5G',
    code: 'V2307',
    brand: 'vivo',
    series: 'Vivo Y Series',
    chipset: 'Snapdragon 4 Gen 1',
    firmwares: [
      {
        version: 'Funtouch OS 14 (PD2307F_EX_A_14.0.5.2.W30)',
        build: '14.0.5.2.W30',
        date: 'Jun 2024',
        size: '4.80 GB',
        region: 'India / Global',
        type: 'Full Fastboot Service Package',
        url: 'https://vivofirmware.com/get/PD2307F_EX_A_14.0.5.2.W30_vivo_firmware.zip',
        signed: true
      }
    ]
  },
  {
    model: 'Vivo Y28 5G',
    code: 'V2315',
    brand: 'vivo',
    series: 'Vivo Y Series',
    chipset: 'Dimensity 6020',
    firmwares: [
      {
        version: 'Funtouch OS 14 (PD2315F_EX_A_14.0.4.1.W30)',
        build: '14.0.4.1.W30',
        date: 'May 2024',
        size: '4.65 GB',
        region: 'India / Global',
        type: 'Full Fastboot Service Package',
        url: 'https://vivofirmware.com/get/PD2315F_EX_A_14.0.4.1.W30_vivo_firmware.zip',
        signed: true
      }
    ]
  },
  {
    model: 'Vivo Y21',
    code: 'V2111',
    brand: 'vivo',
    series: 'Vivo Y Series',
    chipset: 'Helio P35',
    firmwares: [
      {
        version: 'Funtouch OS 12 (PD2135F_EX_A_12.0.14.2.W30)',
        build: '12.0.14.2.W30',
        date: 'Dec 2022',
        size: '3.40 GB',
        region: 'Global / India',
        type: 'Full Fastboot Service Package (SP Flash / AFTool)',
        url: 'https://vivofirmware.com/get/PD2135F_EX_A_12.0.14.2.W30_mtk_firmware.zip',
        signed: true
      }
    ]
  },

  // ==========================================
  // IQOO SERIES (GAMING & MONSTER PERFORMANCE)
  // ==========================================
  {
    model: 'iQOO 12 5G (BMW Motorsport)',
    code: 'I2220',
    brand: 'vivo',
    series: 'iQOO Gaming',
    chipset: 'Snapdragon 8 Gen 3',
    firmwares: [
      {
        version: 'Funtouch OS 14 (PD2307F_EX_A_14.0.14.3.W30)',
        build: '14.0.14.3.W30',
        date: 'Aug 2024',
        size: '7.10 GB',
        region: 'Global / India',
        type: 'Full Fastboot Service Package (QFIL / Fastboot)',
        url: 'https://vivofirmware.com/get/PD2307F_EX_A_14.0.14.3.W30_iqoo12_firmware.zip',
        signed: true
      }
    ]
  },
  {
    model: 'iQOO Neo 9 Pro 5G',
    code: 'I2219',
    brand: 'vivo',
    series: 'iQOO Gaming',
    chipset: 'Snapdragon 8 Gen 2',
    firmwares: [
      {
        version: 'Funtouch OS 14 (PD2338F_EX_A_14.0.11.2.W30)',
        build: '14.0.11.2.W30',
        date: 'Jul 2024',
        size: '6.65 GB',
        region: 'Global / India',
        type: 'Full Fastboot Service Package',
        url: 'https://vivofirmware.com/get/PD2338F_EX_A_14.0.11.2.W30_iqoo_neo9pro_firmware.zip',
        signed: true
      }
    ]
  },
  {
    model: 'iQOO Z9 5G',
    code: 'I2302',
    brand: 'vivo',
    series: 'iQOO Gaming',
    chipset: 'Dimensity 7200',
    firmwares: [
      {
        version: 'Funtouch OS 14 (PD2343F_EX_A_14.0.9.1.W30)',
        build: '14.0.9.1.W30',
        date: 'Jun 2024',
        size: '5.20 GB',
        region: 'Global / India',
        type: 'Full Fastboot Service Package',
        url: 'https://vivofirmware.com/get/PD2343F_EX_A_14.0.9.1.W30_iqoo_z9_firmware.zip',
        signed: true
      }
    ]
  }
];

module.exports = {
  VIVO_REGISTRY
};
