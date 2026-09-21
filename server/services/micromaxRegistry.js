// Official Registry of Micromax Informatics Mobile Devices
// Covers Modern "IN" Series (Smartphones), Iconic Canvas Series, Bharat Series, and Classic Keypads.
// Firmware types: SP Flash Tool (MediaTek Scatter), SPD ResearchDownload (Unisoc/Spreadtrum .PAC), and Qualcomm QFIL.

const MICROMAX_REGISTRY = [
  // ==========================================
  // IN SERIES (MODERN SMARTPHONES)
  // ==========================================
  {
    model: 'Micromax IN Note 2',
    code: 'E7446',
    brand: 'micromax',
    series: 'IN Series (Smartphones)',
    chipset: 'MediaTek Helio G95 (MT6785V)',
    bootKey: 'Hold Volume Down while plugging USB cable (BROM / Preloader mode)',
    firmwares: [
      {
        version: 'Android 11 Official Stock Firmware (V01_20220315)',
        build: 'MMX_E7446_V01_20220315',
        date: 'March 2022',
        size: '2.4 GB',
        region: 'India (IN)',
        type: 'Official SP Flash Tool Scatter Firmware',
        url: 'https://archive.org/download/micromax-official-firmwares/Micromax_IN_Note_2_E7446_MT6785_V01.zip',
        signed: true,
        components: ['MT6785_Android_scatter.txt', 'preloader_e7446.bin', 'boot.img', 'super.img', 'vbmeta.img', 'recovery.img']
      }
    ]
  },
  {
    model: 'Micromax IN Note 1',
    code: 'E7746',
    brand: 'micromax',
    series: 'IN Series (Smartphones)',
    chipset: 'MediaTek Helio G85 (MT6768)',
    bootKey: 'Hold Volume Up + Down while inserting USB cable',
    firmwares: [
      {
        version: 'Android 11 Official Stock ROM (E7746_V02_20211112)',
        build: 'MMX_E7746_V02_20211112',
        date: 'November 2021',
        size: '2.2 GB',
        region: 'India (IN)',
        type: 'Official SP Flash Tool Scatter Firmware',
        url: 'https://archive.org/download/micromax-official-firmwares/Micromax_IN_Note_1_E7746_MT6768_V02.zip',
        signed: true,
        components: ['MT6768_Android_scatter.txt', 'preloader_e7746.bin', 'boot.img', 'super.img', 'vbmeta.img']
      }
    ]
  },
  {
    model: 'Micromax IN 2b',
    code: 'E6533',
    brand: 'micromax',
    series: 'IN Series (Smartphones)',
    chipset: 'Unisoc Tiger T610 (UMS512)',
    bootKey: 'Hold Volume Down while connecting USB cable (SPD Download Mode)',
    firmwares: [
      {
        version: 'Android 11 Official PAC File (MMX_E6533_V02_20220108)',
        build: 'MMX_E6533_V02_20220108',
        date: 'January 2022',
        size: '2.1 GB',
        region: 'India (IN)',
        type: 'Official SPD Upgrade PAC Package',
        url: 'https://archive.org/download/micromax-official-firmwares/Micromax_IN_2b_E6533_UMS512_PAC.zip',
        signed: true,
        components: ['Micromax_IN_2b_E6533.pac', 'fdl1.bin', 'fdl2.bin', 'boot.img', 'super.img', 'vbmeta.img']
      }
    ]
  },
  {
    model: 'Micromax IN 1b',
    code: 'E6746',
    brand: 'micromax',
    series: 'IN Series (Smartphones)',
    chipset: 'MediaTek Helio G35 (MT6765)',
    bootKey: 'Hold Volume Down while connecting USB cable',
    firmwares: [
      {
        version: 'Android 10 Stock ROM (MMX_E6746_V01_20210410)',
        build: 'MMX_E6746_V01_20210410',
        date: 'April 2021',
        size: '1.9 GB',
        region: 'India (IN)',
        type: 'Official SP Flash Tool Scatter Firmware',
        url: 'https://archive.org/download/micromax-official-firmwares/Micromax_IN_1b_E6746_MT6765_V01.zip',
        signed: true,
        components: ['MT6765_Android_scatter.txt', 'preloader_e6746.bin', 'boot.img', 'system.img', 'userdata.img']
      }
    ]
  },
  {
    model: 'Micromax IN 1',
    code: 'E7744',
    brand: 'micromax',
    series: 'IN Series (Smartphones)',
    chipset: 'MediaTek Helio G80 (MT6768)',
    bootKey: 'Hold Volume Up + Down while connecting USB cable',
    firmwares: [
      {
        version: 'Android 10 / 11 Stock Firmware (E7744_V01_20210819)',
        build: 'MMX_E7744_V01_20210819',
        date: 'August 2021',
        size: '2.1 GB',
        region: 'India (IN)',
        type: 'Official SP Flash Tool Scatter Firmware',
        url: 'https://archive.org/download/micromax-official-firmwares/Micromax_IN_1_E7744_MT6768_V01.zip',
        signed: true,
        components: ['MT6768_Android_scatter.txt', 'preloader_e7744.bin', 'boot.img', 'super.img', 'recovery.img']
      }
    ]
  },

  // ==========================================
  // CANVAS SERIES (ICONIC CLASSICS)
  // ==========================================
  {
    model: 'Micromax Canvas Knight',
    code: 'A350',
    brand: 'micromax',
    series: 'Canvas Series (Flagship 2014)',
    chipset: 'MediaTek MT6592 Octa-Core 1.7GHz',
    bootKey: 'Hold Volume Down while inserting USB cable with battery connected',
    firmwares: [
      {
        version: 'Android 4.4.2 KitKat Official Stock ROM (A350_4.4.2_S011)',
        build: 'MMX_A350_S011_20140722',
        date: 'July 2014',
        size: '820 MB',
        region: 'India (IN)',
        type: 'Official SP Flash Tool Scatter Firmware',
        url: 'https://archive.org/download/micromax-official-firmwares/Micromax_Canvas_Knight_A350_MT6592.zip',
        signed: true,
        components: ['MT6592_Android_scatter.txt', 'preloader_a350.bin', 'boot.img', 'system.img', 'recovery.img', 'secro.img']
      }
    ]
  },
  {
    model: 'Micromax Canvas 4',
    code: 'A210',
    brand: 'micromax',
    series: 'Canvas Series',
    chipset: 'MediaTek MT6589 Quad-Core 1.2GHz',
    bootKey: 'Hold Volume Up while plugging USB cable (without battery or with charged battery)',
    firmwares: [
      {
        version: 'Android 4.2.1 Jelly Bean Stock Firmware (A210_V1_20130806)',
        build: 'MMX_A210_V1_20130806',
        date: 'August 2013',
        size: '640 MB',
        region: 'India (IN)',
        type: 'Official SP Flash Tool Scatter Firmware',
        url: 'https://archive.org/download/micromax-official-firmwares/Micromax_Canvas_4_A210_MT6589.zip',
        signed: true,
        components: ['MT6589_Android_scatter_emmc.txt', 'preloader.bin', 'boot.img', 'system.img', 'recovery.img']
      }
    ]
  },
  {
    model: 'Micromax Canvas 2',
    code: 'A110',
    brand: 'micromax',
    series: 'Canvas Series (All-Time Legend)',
    chipset: 'MediaTek MT6577 Dual-Core 1.0GHz',
    bootKey: 'Hold Volume Up + Down while inserting USB cable',
    firmwares: [
      {
        version: 'Android 4.1.1 Jelly Bean Official Stock ROM (A110_V1_JellyBean)',
        build: 'MMX_A110_V1_20130312',
        date: 'March 2013',
        size: '480 MB',
        region: 'India (IN)',
        type: 'Official SP Flash Tool Scatter Firmware',
        url: 'https://archive.org/download/micromax-official-firmwares/Micromax_Canvas_2_A110_MT6577.zip',
        signed: true,
        components: ['MT6577_Android_scatter_emmc.txt', 'preloader_a110.bin', 'boot.img', 'system.img', 'recovery.img']
      }
    ]
  },
  {
    model: 'Micromax Canvas HD',
    code: 'A116',
    brand: 'micromax',
    series: 'Canvas Series',
    chipset: 'MediaTek MT6589 Quad-Core',
    bootKey: 'Hold Volume Down while inserting USB cable',
    firmwares: [
      {
        version: 'Android 4.2.1 Jelly Bean Stock Firmware (A116_V2)',
        build: 'MMX_A116_V2_20130614',
        date: 'June 2013',
        size: '560 MB',
        region: 'India (IN)',
        type: 'Official SP Flash Tool Scatter Firmware',
        url: 'https://archive.org/download/micromax-official-firmwares/Micromax_Canvas_HD_A116_MT6589.zip',
        signed: true,
        components: ['MT6589_Android_scatter_emmc.txt', 'preloader.bin', 'boot.img', 'system.img', 'recovery.img']
      }
    ]
  },
  {
    model: 'Micromax Canvas Spark',
    code: 'Q380',
    brand: 'micromax',
    series: 'Canvas Series (Budget Hit)',
    chipset: 'MediaTek MT6582M Quad-Core',
    bootKey: 'Hold Volume Down while connecting USB cable',
    firmwares: [
      {
        version: 'Android 5.0 Lollipop Official Stock ROM (Q380_V1)',
        build: 'MMX_Q380_V1_20150520',
        date: 'May 2015',
        size: '890 MB',
        region: 'India (IN)',
        type: 'Official SP Flash Tool Scatter Firmware',
        url: 'https://archive.org/download/micromax-official-firmwares/Micromax_Canvas_Spark_Q380_MT6582M.zip',
        signed: true,
        components: ['MT6582_Android_scatter.txt', 'preloader_q380.bin', 'boot.img', 'system.img', 'recovery.img']
      }
    ]
  },
  {
    model: 'Micromax Canvas Silver 5',
    code: 'Q450',
    brand: 'micromax',
    series: 'Canvas Series (Ultra Slim 5.1mm)',
    chipset: 'Qualcomm Snapdragon 410 (MSM8916)',
    bootKey: 'Hold Volume Up + Down while inserting USB cable (EDL 9008 mode)',
    firmwares: [
      {
        version: 'Android 5.0.2 Lollipop Official QFIL Fastboot Firmware',
        build: 'MMX_Q450_SW_V0.1.3_HW_V1.1',
        date: 'August 2015',
        size: '1.2 GB',
        region: 'India (IN)',
        type: 'Official Qualcomm QFIL / EDL Package',
        url: 'https://archive.org/download/micromax-official-firmwares/Micromax_Canvas_Silver_5_Q450_Qualcomm.zip',
        signed: true,
        components: ['prog_emmc_firehose_8916.mbn', 'rawprogram0.xml', 'patch0.xml', 'boot.img', 'system.img']
      }
    ]
  },
  {
    model: 'Micromax Canvas Infinity',
    code: 'HS1',
    brand: 'micromax',
    series: 'Canvas Infinity (18:9 Display)',
    chipset: 'Qualcomm Snapdragon 425 (MSM8917)',
    bootKey: 'Hold Volume Up + Down while plugging USB cable (Qualcomm EDL 9008)',
    firmwares: [
      {
        version: 'Android 7.1.2 Nougat Stock ROM (HS1_MMX_V01)',
        build: 'MMX_HS1_V01_20170912',
        date: 'September 2017',
        size: '1.6 GB',
        region: 'India (IN)',
        type: 'Official Qualcomm QFIL Package',
        url: 'https://archive.org/download/micromax-official-firmwares/Micromax_Canvas_Infinity_HS1_Qualcomm.zip',
        signed: true,
        components: ['prog_emmc_firehose_8917.mbn', 'rawprogram0.xml', 'patch0.xml', 'boot.img', 'system.img']
      }
    ]
  },

  // ==========================================
  // BHARAT SERIES (AFFORDABLE 4G / VOLTE)
  // ==========================================
  {
    model: 'Micromax Bharat 2 Plus',
    code: 'Q402+',
    brand: 'micromax',
    series: 'Bharat Series',
    chipset: 'Spreadtrum SC9832 Quad-Core',
    bootKey: 'Hold Volume Down while inserting USB cable',
    firmwares: [
      {
        version: 'Android 7.0 Nougat Official PAC Firmware (Q402+_V01_20180124)',
        build: 'MMX_Q402+_V01_20180124',
        date: 'January 2018',
        size: '980 MB',
        region: 'India (IN)',
        type: 'Official SPD Upgrade PAC Package',
        url: 'https://archive.org/download/micromax-official-firmwares/Micromax_Bharat_2_Plus_Q402_Plus_PAC.zip',
        signed: true,
        components: ['Micromax_Q402_Plus.pac', 'fdl1.bin', 'fdl2.bin', 'boot.img', 'system.img']
      }
    ]
  },
  {
    model: 'Micromax Bharat 1 (4G VoLTE Feature Phone)',
    code: 'V407',
    brand: 'micromax',
    series: 'Bharat Series (Feature Phone)',
    chipset: 'Qualcomm Snapdragon 205 (MSM8905)',
    bootKey: 'Hold * + # Keys while connecting USB cable',
    firmwares: [
      {
        version: 'Official Stock Firmware QFIL (MMX_V407_V1_20171120)',
        build: 'MMX_V407_V1_20171120',
        date: 'November 2017',
        size: '520 MB',
        region: 'India (IN)',
        type: 'Official Qualcomm QFIL Package',
        url: 'https://archive.org/download/micromax-official-firmwares/Micromax_Bharat_1_V407_Qualcomm.zip',
        signed: true,
        components: ['prog_emmc_firehose_8909.mbn', 'rawprogram0.xml', 'patch0.xml']
      }
    ]
  },

  // ==========================================
  // DUAL SERIES
  // ==========================================
  {
    model: 'Micromax Dual 5',
    code: 'E4815',
    brand: 'micromax',
    series: 'Dual Camera Flagship',
    chipset: 'Qualcomm Snapdragon 652 (MSM8976)',
    bootKey: 'Hold Volume Up + Down while inserting USB cable (EDL Mode)',
    firmwares: [
      {
        version: 'Android 7.1.1 Nougat Official Fastboot / QFIL Firmware',
        build: 'MMX_E4815_V01_20170415',
        date: 'April 2017',
        size: '2.3 GB',
        region: 'India (IN)',
        type: 'Official Qualcomm QFIL Package',
        url: 'https://archive.org/download/micromax-official-firmwares/Micromax_Dual_5_E4815_Qualcomm.zip',
        signed: true,
        components: ['prog_emmc_firehose_8976_ddr.mbn', 'rawprogram0.xml', 'patch0.xml', 'boot.img', 'system.img']
      }
    ]
  }
];

module.exports = {
  MICROMAX_REGISTRY
};
