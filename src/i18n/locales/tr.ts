import type { Translations } from "./types";

export const tr: Translations = {
  meta: {
    title: "node101",
    description: "node101 - Blokzincir altyapı sağlayıcısı",
  },
  common: {
    contactUs: "Bize Ulaşın",
    learnMore: "Daha Fazla",
    allNetworks: "Tüm Ağları Gör",
    viewAllProtocols: "Tüm Protokolleri Gör",
  },
  banner: {
    text: "node101, $40M+ kripto varlık yatırımıyla Türkiye'nin en büyük validatörü.",
  },
  hero: {
    badge: "TÜRKİYE'NİN EN BÜYÜK VALİDATÖRÜ",
    titleLine1: "BLOKZİNCİRLERE ERİŞMEK",
    titleLine2: "BİZİMLE MÜMKÜN",
    description:
      "node101; validasyon, ürün geliştirme, danışmanlık ve kurumsal RPC çözümleriyle 2022'den beri Türkiye'nin en büyük blokzincir altyapı sağlayıcısı",
  },
  nav: {
    investment: "Yatırım",
    rpc: "RPC",
    services: "Hizmetler",
    products: "Ürünler",
    corporate: "Kurumsal",
    mobileMenuToggle: "Mobil menüyü aç/kapat",
  },
  menu: {
    investment: {
      popularBlockchains: "DESTEKLEDİĞİMİZ POPÜLER BLOKZİNCİRLER",
      recurringYield: "TEKRARLI GETİRİ",
      corporateInvestment: "KURUMSAL YATIRIM",
      btcRestaking: {
        label: "BTC Yatırım Getirisi",
        description: "Bitcoinlerinizi Babylon üzerinde stake edin",
      },
      ethRestaking: {
        label: "ETH Tekrarlı Getiri",
        description: "Ethereumlarınızı EigenLayer ile restake edin",
      },
      whitelabelValidation: {
        label: "Fason Validatörlük",
        description: "Kendi validatörünüzü kurun node101 yürütsün",
      },
      referralProgram: {
        label: "Referans Programı",
        description: "İşbirlikleri ve referanslar oluşturun kazançtan pay alın",
      },
      footnote:
        "Desteklediğimiz ağların hepsinde bütün hizmetlerimiz bulunmayabilir.",
    },
    rpc: {
      rpcServices: "RPC HİZMETLERİ",
      currentlyPopular: "ŞU ANDA POPÜLER",
      new: "YENİ",
      mostUsed: "EN ÇOK KULLANILANLAR",
      pricing: {
        label: "Ücretlendirme",
        description: "RPC hizmeti ile ilgili ücretlendirme detayları",
      },
      freeRpc: {
        label: "Ücretsiz RPC",
        description: "Ücretsiz RPC hizmeti detayları",
      },
      documents: {
        label: "Belgeler",
        description: "RPC hizmeti ile ilgili tüm belgeler",
      },
    },
    services: {
      nodeServices: "DÜĞÜM HİZMETLERİ",
      consulting: "DANIŞMANLIK",
      blockchainProduction: "BLOKZİNCİR ÜRETİMİ",
      eventsAndCommunity: "ETKİNLİKLER VE KOMÜNİTE",
      cryptoInvestment: {
        label: "node101 ile Kripto Yatırımı Yapın",
        description: "Valide ettiğimiz düğümlere stake edin, kripto kazanın",
      },
      whitelabelValidation: {
        label: "Fason Validatörlük",
        description: "Kendi validatörünüzü kurun node101 yürütsün",
        subItems: {
          btcMining: {
            label: "BTC Fason Madencilik",
            description: "Sizin için Bitcoin mineri kuralım ve yürütelim",
          },
          ethValidation: {
            label: "ETH Fason Validatörlük",
            description: "Sizin için Ethereum düğümü kuralım ve yürütelim",
          },
        },
      },
      btcRestaking: {
        label: "BTC Yatırım Getirisi",
        description:
          "Bitcoinlerinizi Babylon üzerinde stake edin, kripto kazanın",
      },
      ethRestaking: {
        label: "ETH Tekrarlı Getiri",
        description: "Ethereumlarınızı EigenLayer ile restake edin",
      },
      architecturalConsulting: {
        label: "Mimari Danışmanlık",
        description: "İhtiyacınız olan teknik mimariyi birlikte inşa edelim",
      },
      blockchainConsulting: {
        label: "Blokzincir 101 Danışmanlığı",
        description:
          "Kripto varlıklara ve blokzincire ilginiz var ama ne yapacağınızı bilmiyorsanız, node101'a ulaşın",
      },
      productDevelopment: {
        label: "Ürün Üretimi",
        description:
          "İhtiyacınız olan ürünün tamamını ya da bir parçasını, tecrübeli ekibimizle tasarlar ve üretiriz",
      },
      turkishEcosystem: {
        label: "Türk ekosistemine açılan kapı",
        description:
          "node101, Blokzincir şirketlerinin Türk yazılımcılara ulaşmasını planlar ve partnerleriyle uygular.",
        subItems: {
          suiTurkey: "Sui Türkiye Komünite Etkinlikleri",
          celestiaTurkey: "Celestia Türkiye Komünite Etkinlikleri",
        },
      },
      buildersWeek: {
        label: "Builders Week Istanbul",
        description:
          "BWI blokzincir ekosistemini ölçeklendirmek için tasarlanmış, bir haftalık etkinlikler dizisidir.",
      },
      ethIstanbul: {
        label: "ETHIstanbul",
        description:
          "Ethereum felsefesinin genç yetenekler arasında kök salmasının hedeflendiği konferans ve hackathon",
      },
      cryptist: {
        label: "Cryptist",
        description:
          "Cryptist; sıfır bilgi, gizlilik ve kriptografiye odaklanan yıllık bir topluluk odaklı etkinliktir",
      },
    },
    products: {
      protocol: "PROTOKOL",
      application: "UYGULAMA",
      tooling: "TOOLING",
      other: "DİĞER",
      pulsarChain: {
        label: "Pulsar Chain",
        description:
          "Sıfır-Bilgi altyapısını Interchain altyapısı ile buluşturur",
      },
      zkvot: {
        label: "zkVot",
        description: "Oylama süreçlerinde mahremiyet ve merkeziyetsizlik",
      },
      hackathonProducts: {
        label: "Hackathon Ürünlerimiz",
        description: "Hackathonlarda neler inşa ettiğimizi keşfedin",
      },
      pulsar: {
        label: "Pulsar",
        description:
          "Sıfır-Bilgi altyapısı ile kurulmuş ilk merkeziyetsiz borsa",
      },
      punch: {
        label: "PUNCH",
        description: "Merkeziyetsiz yayın platformu",
      },
      validatier: {
        label: "Validatier",
        description: "Blokzincir yazılımcılarının tüm aktivitelerine ulaşın",
      },
      blockchainDevReport: {
        label: "Blockchain Developer Report",
        description: "Blokzincir yazılımcılarının tüm aktivitelerine ulaşın",
      },
    },
    corporate: {
      corporateExpertise: "KURUMSAL UZMANLIK",
      node101: "node101",
      dataCenter: "VERİ MERKEZİ",
      financialInstitutions: {
        label: "Finansal Kurumlar",
        description: "Blokzincir teknik altyapı çözümlerimizi keşfedin",
      },
      centralizedExchanges: {
        label: "Merkezi Kripto Borsaları",
        description:
          "Validatörlük, RPC & API ve diğer teknik hizmetlerimize erişin",
      },
      custodials: {
        label: "Saklamacılar",
        description:
          "Staking API'larımızı, %99 uptime garantili SLA'lerimiz ile Blokzincir işlemlerinizde kullanın",
      },
      foundations: {
        label: "Foundation'lar",
        description:
          "node101 ile protokolünüzü güvenle kodlayın, mainnete çıkın ve büyütün",
      },
      companies: {
        label: "Şirketler",
        description: "Blokzincir dünyasına ilk adımınızı node101 ile atın",
      },
      aboutNode101: {
        label: "node101 Hakkında",
        description: "Türkiye'nin en büyük validatörünün hikayesi",
      },
      team: {
        label: "Takım",
        description: "Küresel düzeyde rekabet en iyilerle mümkündür",
      },
      career: {
        label: "Kariyer",
        description: "Size en uygun pozisyona başvurun",
      },
      brandDetails: {
        label: "Marka Detayları",
        description: "node101 branding hikayesi",
      },
      blog: {
        label: "Blog",
        description:
          "node101 kütüphanesini keşfedin, ürettiğimiz tüm içeriklere erişin",
      },
      supportCenter: {
        label: "Destek Merkezi",
        description: "Bizlere 7/24 istediğiniz anda ulaşın",
      },
      faq: {
        label: "SSS",
        description:
          "node101 hizmetleri ve blokzincir terimleri ile alakalı sıkça sorulan sorular",
      },
      caseStudies: {
        label: "Vaka Çalışmaları",
        description: "Söylediklerimize değil aksiyonlarımıza odaklanın",
      },
    },
  },
  footer: {
    copyright: "2025 node101. Tüm hakları saklıdır.",
  },
};
