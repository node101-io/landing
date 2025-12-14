import { HeaderMenu } from "./components/menu";
import {
  HeaderMenuSection,
  HeaderMenuSectionType,
  type HeaderMenuSectionProps,
  type GridCategory,
} from "./components/menu-section";

type MenuItem = {
  label: string;
  sections: HeaderMenuSectionProps[];
};

const menuItems: MenuItem[] = [
  {
    label: "Yatırım",
    sections: [
      {
        type: HeaderMenuSectionType.GRID,
        title: "DESTEKLEDİĞİMİZ POPÜLER BLOKZİNCİRLER",
        items: [
          {
            icon: "/img/networks/ethereum.webp",
            name: "Ethereum",
            symbol: "ETH",
            href: "/networks/ethereum",
          },
          {
            icon: "/img/networks/bitcoin.webp",
            name: "Bitcoin",
            symbol: "BTC",
            href: "/networks/bitcoin",
          },
          {
            icon: "/img/networks/solana.webp",
            name: "Solana",
            symbol: "SOL",
            href: "/networks/solana",
          },
          {
            icon: "/img/networks/avalanche.webp",
            name: "Avalanche",
            symbol: "AVAX",
            href: "/networks/avalanche",
          },
          {
            icon: "/img/networks/sui.webp",
            name: "Sui",
            symbol: "SUI",
            href: "/networks/sui",
          },
          {
            icon: "/img/networks/walrus.webp",
            name: "Walrus",
            symbol: "WAL",
            href: "/networks/walrus",
          },
          {
            icon: "/img/networks/celestia.webp",
            name: "Celestia",
            symbol: "TIA",
            href: "/networks/celestia",
          },
          {
            icon: "/img/networks/cosmos.webp",
            name: "Cosmos",
            symbol: "ATOM",
            href: "/networks/cosmos",
          },
          {
            icon: "/img/networks/band.webp",
            name: "Band",
            symbol: "BAND",
            href: "/networks/band",
          },
          {
            icon: "/img/networks/starknet.webp",
            name: "Starknet",
            symbol: "STRK",
            href: "/networks/starknet",
          },
        ],
      },
      {
        type: HeaderMenuSectionType.LIST,
        title: "TEKRARLI GETİRİ",
        items: [
          {
            icon: (
              <img
                src="/img/header-icons/btc-restaking.webp"
                alt="BTC Restaking icon"
                class="w-full h-full"
              />
            ),
            label: "BTC Yatırım Getirisi",
            description: "Bitcoinlerinizi Babylon üzerinde stake edin",
            href: "",
          },
          {
            icon: (
              <img
                src="/img/header-icons/eth-restaking.webp"
                alt="ETH Restaking icon"
                class="w-full h-full"
              />
            ),
            label: "ETH Tekrarlı Getiri",
            description: "Ethereumlarınızı EigenLayer ile restake edin",
            href: "",
          },
        ],
        footnote:
          "Desteklediğimiz ağların hepsinde bütün hizmetlerimiz bulunmayabilir. Daha fazla bilgiyi ağ sayfalarında bulabilirsiniz.",
      },
      {
        type: HeaderMenuSectionType.LIST,
        title: "KURUMSAL YATIRIM",
        items: [
          {
            icon: (
              <img
                src="/img/header-icons/whitelabel-validation.webp"
                alt="Whitelabel Validation icon"
                class="w-full h-full"
              />
            ),
            label: "Fason Validatörlük",
            description: "Kendi validatörünüzü kurun node101 yürütsün",
            href: "",
          },
          {
            icon: (
              <img
                src="/img/header-icons/referral-program.webp"
                alt="Referral Program icon"
                class="w-full h-full"
              />
            ),
            label: "Referans Programı",
            description:
              "İşbirlikleri ve referanslar oluşturun kazançtan pay alın",
            href: "",
          },
        ],
      },
    ],
  },
  {
    label: "RPC",
    sections: [
      {
        type: HeaderMenuSectionType.MULTI_GRID,
        title: "RPC HİZMETLERİ",
        categories: [
          {
            title: "ŞU ANDA POPÜLER",
            columns: 1,
            items: [
              {
                icon: "/img/networks/ethereum.webp",
                name: "Ethereum",
                symbol: "ETH",
                href: "/rpc/ethereum",
              },
              {
                icon: "/img/networks/celestia.webp",
                name: "Celestia",
                symbol: "TIA",
                href: "/rpc/celestia",
              },
              {
                icon: "/img/networks/celestia.webp",
                name: "Celestia",
                symbol: "TIA",
                href: "/rpc/celestia",
              },
              {
                icon: "/img/networks/celestia.webp",
                name: "Celestia",
                symbol: "TIA",
                href: "/rpc/celestia",
              },
            ],
          },
          {
            title: "YENİ",
            columns: 1,
            items: [
              {
                icon: "/img/networks/ethereum.webp",
                name: "Ethereum",
                symbol: "ETH",
                href: "/rpc/ethereum",
              },
              {
                icon: "/img/networks/celestia.webp",
                name: "Celestia",
                symbol: "TIA",
                href: "/rpc/celestia",
              },
              {
                icon: "/img/networks/celestia.webp",
                name: "Celestia",
                symbol: "TIA",
                href: "/rpc/celestia",
              },
              {
                icon: "/img/networks/celestia.webp",
                name: "Celestia",
                symbol: "TIA",
                href: "/rpc/celestia",
              },
            ],
          },
          {
            title: "EN ÇOK KULLANILANLAR",
            columns: 2,
            items: [
              {
                icon: "/img/networks/ethereum.webp",
                name: "Ethereum",
                symbol: "ETH",
                href: "/rpc/ethereum",
              },
              {
                icon: "/img/networks/celestia.webp",
                name: "Celestia",
                symbol: "TIA",
                href: "/rpc/celestia",
              },
              {
                icon: "/img/networks/celestia.webp",
                name: "Celestia",
                symbol: "TIA",
                href: "/rpc/celestia",
              },
              {
                icon: "/img/networks/celestia.webp",
                name: "Celestia",
                symbol: "TIA",
                href: "/rpc/celestia",
              },
              {
                icon: "/img/networks/celestia.webp",
                name: "Celestia",
                symbol: "TIA",
                href: "/rpc/celestia",
              },
              {
                icon: "/img/networks/celestia.webp",
                name: "Celestia",
                symbol: "TIA",
                href: "/rpc/celestia",
              },
              {
                icon: "/img/networks/celestia.webp",
                name: "Celestia",
                symbol: "TIA",
                href: "/rpc/celestia",
              },
              {
                icon: "/img/networks/celestia.webp",
                name: "Celestia",
                symbol: "TIA",
                href: "/rpc/celestia",
              },
            ],
          },
        ] as GridCategory[],
      },
      {
        type: HeaderMenuSectionType.LIST,
        title: "",
        items: [
          {
            icon: (
              <img
                src="/img/header-icons/pricing.webp"
                alt="Pricing icon"
                class="w-full h-full"
              />
            ),
            label: "Ücretlendirme",
            description: "RPC hizmeti ile ilgili ücretlendirme detayları",
            href: "",
          },
          {
            icon: (
              <img
                src="/img/header-icons/free-rpc.webp"
                alt="Free RPC icon"
                class="w-full h-full"
              />
            ),
            label: "Ücretsiz RPC",
            description: "Ücretsiz RPC hizmeti detayları",
            href: "",
          },
          {
            icon: (
              <img
                src="/img/header-icons/documents.webp"
                alt="Documents icon"
                class="w-full h-full"
              />
            ),
            label: "Belgeler",
            description: "RPC hizmeti ile ilgili tüm belgeler",
            href: "",
          },
        ],
      },
    ],
  },
  {
    label: "Hizmetler",
    sections: [
      {
        type: HeaderMenuSectionType.LIST,
        title: "DÜĞÜM HİZMETLERİ",
        items: [
          {
            icon: (
              <img
                src="/img/header-icons/crypto-asset-investment.webp"
                alt="Crypto Asset Investment icon"
                class="w-full h-full"
              />
            ),
            label: "node101 ile Kripto Yatırımı Yapın",
            description:
              "Valide ettiğimiz düğümlere stake edin, kripto kazanın",
            href: "",
          },
          {
            icon: (
              <img
                src="/img/header-icons/whitelabel-validation.webp"
                alt="Whitelabel Validation icon"
                class="w-full h-full"
              />
            ),
            label: "Fason Validatörlük",
            description: "Kendi validatörünüzü kurun node101 yürütsün",
            href: "",
            subItems: [
              {
                label: "BTC Fason Madencilik",
                description: "Sizin için Bitcoin miner'ı kuralım ve yürütelim",
                href: "",
              },
              {
                label: "ETH Fason Validatörlük",
                description: "Sizin için Ethereum düğümü kuralım ve yürütelim",
                href: "",
              },
            ],
          },
          {
            icon: (
              <img
                src="/img/header-icons/btc-restaking.webp"
                alt="BTC Restaking icon"
                class="w-full h-full"
              />
            ),
            label: "BTC Yatırım Getirisi",
            description:
              "Bitcoinlerinizi Babylon üzerinde stake edin, kripto kazanın",
            href: "",
          },
          {
            icon: (
              <img
                src="/img/header-icons/eth-restaking.webp"
                alt="ETH Restaking icon"
                class="w-full h-full"
              />
            ),
            label: "ETH Tekrarlı Getiri",
            description: "Ethereumlarınızı EigenLayer ile restake edin",
            href: "",
          },
        ],
      },
      {
        type: HeaderMenuSectionType.LIST,
        title: "DANIŞMANLIK",
        items: [
          {
            icon: (
              <img
                src="/img/header-icons/architectural-consulting.webp"
                alt="Architectural Consulting icon"
                class="w-full h-full"
              />
            ),
            label: "Mimari Danışmanlık",
            description:
              "İhtiyacınız olan teknik mimariyi birlikte inşa edelim",
            href: "",
          },
          {
            icon: (
              <img
                src="/img/header-icons/blockchain-consulting.webp"
                alt="Blockchain Consulting icon"
                class="w-full h-full"
              />
            ),
            label: "Blokzincir 101 Danışmanlığı",
            description:
              "Kripto varlıklara ve blokzincire ilginiz var ama ne yapacağınızı bilmiyorsanız, node101'a ulaşın",
            href: "",
          },
        ],
        additionalGroups: [
          {
            title: "BLOKZİNCİR ÜRETİMİ",
            items: [
              {
                icon: (
                  <img
                    src="/img/header-icons/product-development.webp"
                    alt="Product Development icon"
                    class="w-full h-full"
                  />
                ),
                label: "Ürün Üretimi",
                description:
                  "İhtiyacınız olan ürünün tamamını ya da bir parçasını, tecrübeli ekibimizle tasarlar ve üretiriz",
                href: "",
              },
            ],
          },
        ],
      },
      {
        type: HeaderMenuSectionType.LIST,
        title: "ETKİNLİKLER VE KOMÜNİTE",
        items: [
          {
            icon: (
              <img
                src="/img/header-icons/turkish-ecosystem.webp"
                alt="Turkish Ecosystem Gateway icon"
                class="w-full h-full"
              />
            ),
            label: "Türk ekosistemine açılan kapı",
            description:
              "node101, Blokzincir şirketlerinin Türk yazılımcılara ulaşmasını planlar ve partnerleriyle uygular.",
            href: "",
            subItems: [
              {
                label: "Sui Türkiye Komünite Etkinlikleri",
                href: "",
              },
              {
                label: "Celestia Türkiye Komünite Etkinlikleri",
                href: "",
              },
            ],
          },
          {
            icon: (
              <img
                src="/img/header-icons/builders-week-istanbul.webp"
                alt="Builders Week Istanbul icon"
                class="w-full h-full"
              />
            ),
            label: "Builders Week Istanbul",
            description:
              "BWI blokzincir ekosistemini ölçeklendirmek için tasarlanmış, bir haftalık etkinlikler dizisidir.",
            href: "",
          },
          {
            icon: (
              <img
                src="/img/header-icons/ethistanbul.webp"
                alt="ETHIstanbul Conference icon"
                class="w-full h-full"
              />
            ),
            label: "ETHIstanbul",
            description:
              "Ethereum felsefesinin genç yetenekler arasında kök salmasının hedeflendiği konferans ve hackathon",
            href: "",
          },
          {
            icon: (
              <img
                src="/img/header-icons/cryptist.webp"
                alt="Cryptist icon"
                class="w-full h-full"
              />
            ),
            label: "Cryptist",
            description:
              "Cryptist; sıfır bilgi, gizlilik ve kriptografiye odaklanan yıllık bir topluluk odaklı etkinliktir",
            href: "",
          },
        ],
      },
    ],
  },
  {
    label: "Ürünler",
    sections: [
      {
        type: HeaderMenuSectionType.LIST,
        title: "PROTOKOL",
        items: [
          {
            icon: (
              <img
                src="/img/header-icons/pulsar.webp"
                alt="Pulsar Chain icon"
                class="w-full h-full"
              />
            ),
            label: "Pulsar Chain",
            description:
              "Sıfır-Bilgi altyapısını Interchain altyapısı ile buluşturur",
            href: "",
          },
          {
            icon: (
              <img
                src="/img/header-icons/zkvot.webp"
                alt="zkVot icon"
                class="w-full h-full"
              />
            ),
            label: "zkVot",
            description: "Oylama süreçlerinde mahremiyet ve merkeziyetsizlik",
            href: "",
          },
        ],
        additionalGroups: [
          {
            title: "DİĞER",
            items: [
              {
                icon: (
                  <img
                    src="/img/header-icons/hackathons.webp"
                    alt="Hackathon Ürünlerimiz icon"
                    class="w-full h-full"
                  />
                ),
                label: "Hackathon Ürünlerimiz",
                description: "Hackathonlarda neler inşa ettiğimizi keşfedin",
                href: "",
              },
            ],
          },
        ],
      },
      {
        type: HeaderMenuSectionType.LIST,
        title: "UYGULAMA",
        items: [
          {
            icon: (
              <img
                src="/img/header-icons/pulsar.webp"
                alt="Pulsar icon"
                class="w-full h-full"
              />
            ),
            label: "Pulsar",
            description:
              "Sıfır-Bilgi altyapısı ile kurulmuş ilk merkeziyetsiz borsa",
            href: "",
          },
          {
            icon: (
              <img
                src="/img/header-icons/punch.webp"
                alt="PUNCH icon"
                class="w-full h-full"
              />
            ),
            label: "PUNCH",
            description: "Merkeziyetsiz yayın platformu",
            href: "",
          },
        ],
      },
      {
        type: HeaderMenuSectionType.LIST,
        title: "TOOLING",
        items: [
          {
            icon: (
              <img
                src="/img/header-icons/validatier.webp"
                alt="Validatier icon"
                class="w-full h-full"
              />
            ),
            label: "Validatier",
            description:
              "Blokzincir yazılımcılarının tüm aktivitelerine ulaşın",
            href: "",
          },
          {
            icon: (
              <img
                src="/img/header-icons/blockchain-developer-report.webp"
                alt="Blockchain Developer Report icon"
                class="w-full h-full"
              />
            ),
            label: "Blockchain Developer Report",
            description:
              "Blokzincir yazılımcılarının tüm aktivitelerine ulaşın",
            href: "",
          },
        ],
      },
    ],
  },
  {
    label: "Kurumsal",
    sections: [
      {
        type: HeaderMenuSectionType.LIST,
        title: "KURUMSAL UZMANLIK",
        items: [
          {
            icon: (
              <img
                src="/img/header-icons/financial-institutions.webp"
                alt="Financial Institutions icon"
                class="w-full h-full"
              />
            ),
            label: "Finansal Kurumlar",
            description: "Blokzincir teknik altyapı çözümlerimizi keşfedin",
            href: "",
          },
          {
            icon: (
              <img
                src="/img/header-icons/centralized-exchanges.webp"
                alt="Centralized Exchanges icon"
                class="w-full h-full"
              />
            ),
            label: "Merkezi Kripto Borsaları",
            description:
              "Validatörlük, RPC & API ve diğer teknik hizmetlerimize erişin",
            href: "",
          },
          {
            icon: (
              <img
                src="/img/header-icons/custodials.webp"
                alt="Custodials icon"
                class="w-full h-full"
              />
            ),
            label: "Saklamacılar",
            description:
              "Staking API'larımızı, %99 uptime garantili SLA'lerimiz ile Blokzincir işlemlerinizde kullanın",
            href: "",
          },
          {
            icon: (
              <img
                src="/img/header-icons/foundations.webp"
                alt="Foundations icon"
                class="w-full h-full"
              />
            ),
            label: "Foundationlar",
            description:
              "node101 ile protokolünüzü güvenle kodlayın, mainnete çıkın ve büyütün",
            href: "",
          },
          {
            icon: (
              <img
                src="/img/header-icons/companies.webp"
                alt="Companies icon"
                class="w-full h-full"
              />
            ),
            label: "Şirketler",
            description: "Blokzincir dünyasına ilk adımınızı node101 ile atın",
            href: "",
          },
        ],
      },
      {
        type: HeaderMenuSectionType.LIST,
        title: "node101",
        items: [
          {
            icon: (
              <img
                src="/img/header-icons/about-node101.webp"
                alt="About node101 icon"
                class="w-full h-full"
              />
            ),
            label: "node101 Hakkında",
            description: "Türkiye'nin en büyük validatörünün hikayesi",
            href: "",
          },
          {
            icon: (
              <img
                src="/img/header-icons/team.webp"
                alt="Team icon"
                class="w-full h-full"
              />
            ),
            label: "Takım",
            description: "Küresel düzeyde rekabet en iyilerle mümkündür",
            href: "",
          },
          {
            icon: (
              <img
                src="/img/header-icons/career.webp"
                alt="Career icon"
                class="w-full h-full"
              />
            ),
            label: "Kariyer",
            description: "Size en uygun pozisyona başvurun",
            href: "",
          },
          {
            icon: (
              <img
                src="/img/header-icons/brand-details.webp"
                alt="Brand Details icon"
                class="w-full h-full"
              />
            ),
            label: "Marka Detayları",
            description: "node101 branding hikayesi",
            href: "",
          },
        ],
      },
      {
        type: HeaderMenuSectionType.LIST,
        title: "VERİ MERKEZİ",
        items: [
          {
            icon: (
              <img
                src="/img/header-icons/blog.webp"
                alt="Blog icon"
                class="w-full h-full"
              />
            ),
            label: "Blog",
            description:
              "node101 kütüphanesini keşfedin, ürettiğimiz tüm içeriklere erişin",
            href: "",
          },
          {
            icon: (
              <img
                src="/img/header-icons/support-center.webp"
                alt="Support Center icon"
                class="w-full h-full"
              />
            ),
            label: "Destek Merkezi",
            description: "Bizlere 7/24 istediğiniz anda ulaşın",
            href: "",
          },
          {
            icon: (
              <img
                src="/img/header-icons/faq.webp"
                alt="FAQ icon"
                class="w-full h-full"
              />
            ),
            label: "SSS",
            description:
              "node101 hizmetleri ve blokzincir terimleri ile alakalı sıkça sorulan sorular",
            href: "",
          },
          {
            icon: (
              <img
                src="/img/header-icons/case-studies.webp"
                alt="Case Studies icon"
                class="w-full h-full"
              />
            ),
            label: "Vaka Çalışmaları",
            description: "Söylediklerimize değil aksiyonlarımıza odaklanın",
            href: "",
          },
        ],
      },
    ],
  },
];

export const Header = () => (
  <header class="group/menu relative flex items-center justify-center h-(--header-height) min-h-(--header-height) shrink-0 gap-8 font-sans bg-header-bg rounded-4xl px-5 border border-surface m-4 transition-all duration-300 has-checked:m-0 lg:has-checked:m-4 has-checked:rounded-none lg:has-checked:rounded-4xl has-checked:border-header-bg-checked lg:has-checked:border-surface has-checked:bg-header-bg-checked lg:has-checked:bg-header-bg">
    <a href="/" class="absolute left-5 h-full flex items-center z-60">
      <img
        src="/img/logo.svg"
        alt="node101 logo"
        class="w-20 shrink-0 h-auto"
      />
    </a>

    {/* Mobile Menu Toggle - checkbox */}
    <input type="checkbox" id="mobile-menu-toggle" class="peer sr-only" />

    {/* Navigation - Mobilde fullscreen overlay, Desktop'ta inline */}
    <nav class="overflow-y-scroll lg:overflow-y-hidden fixed top-[calc(var(--banner-height)+var(--header-height))] left-0 right-0 bottom-0 flex flex-col justify-items-start items-center space-y-6 px-8 py-8 lg:py-0 bg-nav-mobile-bg opacity-0 invisible transition-all duration-300 z-50 peer-checked:opacity-100 peer-checked:visible lg:static lg:flex-row lg:bg-transparent lg:opacity-100 lg:visible lg:space-y-0 lg:space-x-10 lg:px-5">
      {menuItems.map((item, index) => (
        <div
          class="group w-full lg:w-auto lg:overflow-hidden flex flex-col gap-4"
          key={index}
        >
          <button
            class="inline-flex items-center gap-1.5 lg:px-3 lg:py-2 text-xl lg:text-sm font-medium text-foreground rounded-full transition-colors lg:hover:bg-foreground/10 lg:focus:bg-foreground/15 focus:outline-none cursor-pointer"
            type="button"
            onmousedown="event.preventDefault(); if(document.activeElement === this){ this.blur(); } else { this.focus(); }"
          >
            {item.label}
            <img
              src="/img/plus.svg"
              alt="plus icon"
              class="size-3.5 lg:size-2.5 transition-transform group-focus-within:rotate-45 text-foreground"
            />
          </button>
          <HeaderMenu>
            {item.sections.map((section, sectionIndex) => (
              <HeaderMenuSection key={sectionIndex} {...section} />
            ))}
          </HeaderMenu>
        </div>
      ))}

      {/* Bize Ulaşın */}
      <a
        href="/contact"
        class="w-full lg:w-auto mt-auto lg:mt-0 lg:absolute lg:right-5 active:scale-98 transition-transform cursor-pointer bg-primary text-primary-foreground px-8 py-4 lg:py-2.5 rounded-xl lg:rounded-lg font-medium text-base lg:text-sm text-center lg:hover:scale-104 whitespace-nowrap"
      >
        Bize Ulaşın
      </a>
    </nav>

    {/* Mobile Hamburger Toggle Label */}
    <label
      for="mobile-menu-toggle"
      class="lg:hidden absolute right-5 z-60 flex flex-col justify-center items-center w-10 h-10 cursor-pointer rounded-lg transition-colors gap-1.5"
    >
      <span class="block w-5 h-0.5 bg-foreground transition-all duration-300 origin-center group-has-checked/menu:rotate-45 group-has-checked/menu:translate-y-1" />
      <span class="block w-5 h-0.5 bg-foreground transition-all duration-300 origin-center group-has-checked/menu:-rotate-45 group-has-checked/menu:-translate-y-1" />
    </label>
  </header>
);
