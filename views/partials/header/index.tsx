import { i18n } from "../../../src/i18n";
import { HeaderMenu } from "./components/menu";
import {
  HeaderMenuSection,
  HeaderMenuSectionType,
  type HeaderMenuSectionProps,
} from "./components/menu-section";

type MenuItem = {
  label: string;
  sections: HeaderMenuSectionProps[];
};

const getMenuItems = (): MenuItem[] => [
  {
    label: i18n().nav.investment,
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
                class={`
                  h-full
                  w-full
                `}
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
                class={`
                  h-full
                  w-full
                `}
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
                class={`
                  h-full
                  w-full
                `}
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
                class={`
                  h-full
                  w-full
                `}
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
    label: i18n().nav.rpc,
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
        ],
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
                class={`
                  h-full
                  w-full
                `}
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
                class={`
                  h-full
                  w-full
                `}
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
                class={`
                  h-full
                  w-full
                `}
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
    label: i18n().nav.services,
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
                class={`
                  h-full
                  w-full
                `}
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
                class={`
                  h-full
                  w-full
                `}
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
                class={`
                  h-full
                  w-full
                `}
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
                class={`
                  h-full
                  w-full
                `}
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
                class={`
                  h-full
                  w-full
                `}
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
                class={`
                  h-full
                  w-full
                `}
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
                    class={`
                      h-full
                      w-full
                    `}
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
                class={`
                  h-full
                  w-full
                `}
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
                class={`
                  h-full
                  w-full
                `}
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
                class={`
                  h-full
                  w-full
                `}
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
                class={`
                  h-full
                  w-full
                `}
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
    label: i18n().nav.products,
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
                class={`
                  h-full
                  w-full
                `}
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
                class={`
                  h-full
                  w-full
                `}
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
                    class={`
                      h-full
                      w-full
                    `}
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
                class={`
                  h-full
                  w-full
                `}
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
                class={`
                  h-full
                  w-full
                `}
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
                class={`
                  h-full
                  w-full
                `}
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
                class={`
                  h-full
                  w-full
                `}
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
    label: i18n().nav.corporate,
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
                class={`
                  h-full
                  w-full
                `}
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
                class={`
                  h-full
                  w-full
                `}
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
                class={`
                  h-full
                  w-full
                `}
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
                class={`
                  h-full
                  w-full
                `}
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
                class={`
                  h-full
                  w-full
                `}
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
                class={`
                  h-full
                  w-full
                `}
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
                class={`
                  h-full
                  w-full
                `}
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
                class={`
                  h-full
                  w-full
                `}
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
                class={`
                  h-full
                  w-full
                `}
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
                class={`
                  h-full
                  w-full
                `}
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
                class={`
                  h-full
                  w-full
                `}
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
                class={`
                  h-full
                  w-full
                `}
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
                class={`
                  h-full
                  w-full
                `}
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
  <header
    class={`
      group/menu
      relative
      m-4
      flex
      h-(--header-height)
      min-h-(--header-height)
      shrink-0
      items-center
      justify-center
      gap-8
      rounded-4xl
      border
      border-surface
      bg-header-bg
      font-sans
      transition-all
      duration-300
      has-checked:m-0
      has-checked:rounded-none
      has-checked:border-header-bg-checked
      has-checked:bg-header-bg-checked
      lg:has-checked:m-4
      lg:has-checked:rounded-4xl
      lg:has-checked:border-surface
      lg:has-checked:bg-header-bg
    `}
  >
    <a
      href="/"
      class={`
        absolute
        left-4
        z-60
        flex
        h-full
        items-center
      `}
    >
      <img
        src="/img/logo.svg"
        alt="node101 logo"
        class={`
          h-auto
          w-20
          shrink-0
        `}
      />
    </a>

    {/* Mobile Menu Toggle - checkbox */}
    <input
      type="checkbox"
      id="mobile-menu-toggle"
      aria-label={i18n().nav.mobileMenuToggle}
      class={`
        peer
        sr-only
      `}
    />

    {/* Navigation - Mobilde fullscreen overlay, Desktop'ta inline */}
    <nav
      class={`
        invisible
        fixed
        top-[calc(var(--banner-height)+var(--header-margin)+var(--header-height)+var(--hero-margin))]
        right-(--nav-inset)
        bottom-[calc(var(--nav-inset)+var(--hero-margin))]
        left-(--nav-inset)
        z-50
        flex
        flex-col
        items-center
        justify-items-start
        space-y-6
        overflow-y-auto
        rounded-4xl
        bg-nav-mobile-bg
        px-8
        py-8
        opacity-0
        transition-all
        duration-300
        peer-checked:visible
        peer-checked:top-[calc(var(--banner-height)+var(--header-height))]
        peer-checked:right-0
        peer-checked:bottom-0
        peer-checked:left-0
        peer-checked:rounded-none
        peer-checked:opacity-100
        lg:visible
        lg:static
        lg:right-auto
        lg:left-auto
        lg:flex-row
        lg:space-y-0
        lg:space-x-10
        lg:overflow-y-hidden
        lg:bg-transparent
        lg:px-5
        lg:py-0
        lg:opacity-100
      `}
    >
      {getMenuItems().map((item, index) => (
        <div
          class={`
            group
            flex
            w-full
            flex-col
            gap-4
            lg:w-auto
            lg:overflow-hidden
          `}
          key={index}
        >
          <button
            class={`
              inline-flex
              cursor-pointer
              items-center
              gap-1.5
              rounded-full
              text-xl
              font-medium
              text-foreground
              transition-colors
              focus:outline-none
              lg:px-3
              lg:py-2
              lg:text-sm
              lg:hover:bg-foreground/10
              lg:focus:bg-foreground/15
            `}
            type="button"
            onmousedown="event.preventDefault(); if(document.activeElement === this){ this.blur(); } else { this.focus(); }"
          >
            {item.label}
            <img
              src="/img/plus.svg"
              alt="plus icon"
              class={`
                size-3.5
                text-foreground
                transition-transform
                group-focus-within:rotate-45
                lg:size-2.5
              `}
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
        class={`
          lg:transition-duration-300
          lg:absolute
          lg:right-(--header-padding)
          lg:mt-0
          lg:h-[calc(var(--header-height)-2*var(--header-padding))]
          lg:w-auto
          lg:rounded-lg
          lg:py-2.5
          lg:text-sm
          lg:transition-[border-radius]
          mt-auto
          w-full
          cursor-pointer
          rounded-xl
          bg-primary
          px-8
          py-3
          text-center
          text-base
          font-medium
          whitespace-nowrap
          text-primary-foreground
          transition-transform
          lg:hover:rounded-sm
          lg:active:scale-98
        `}
      >
        {i18n().common.contactUs}
      </a>
    </nav>

    {/* Mobile Hamburger Toggle Label */}
    <label
      for="mobile-menu-toggle"
      class={`
        absolute
        right-5
        z-60
        flex
        h-10
        w-10
        cursor-pointer
        flex-col
        items-center
        justify-center
        gap-1.5
        rounded-lg
        transition-colors
        lg:hidden
      `}
    >
      <span
        class={`
          block
          h-0.5
          w-5
          origin-center
          bg-foreground
          transition-all
          duration-300
          group-has-checked/menu:translate-y-1
          group-has-checked/menu:rotate-45
        `}
      />
      <span
        class={`
          block
          h-0.5
          w-5
          origin-center
          bg-foreground
          transition-all
          duration-300
          group-has-checked/menu:-translate-y-1
          group-has-checked/menu:-rotate-45
        `}
      />
    </label>
  </header>
);
