import { i18n } from "@/i18n";
import { HeaderMenu } from "./components/menu";
import {
  HeaderMenuSection,
  HeaderMenuSectionType,
  type HeaderMenuSectionProps,
} from "./components/menu-section";

type MenuItem = {
  label: string;
  sections: HeaderMenuSectionProps[];
  hideOnDesktop?: boolean;
};

const investmentSections: HeaderMenuSectionProps[] = [
  {
    type: HeaderMenuSectionType.GRID,
    title: i18n().menu.investment.popularBlockchains,
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
    title: i18n().menu.investment.recurringYield,
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
        label: i18n().menu.investment.btcRestaking.label,
        description: i18n().menu.investment.btcRestaking.description,
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
        label: i18n().menu.investment.ethRestaking.label,
        description: i18n().menu.investment.ethRestaking.description,
        href: "",
      },
    ],
    footnote: i18n().menu.investment.footnote,
  },
  {
    type: HeaderMenuSectionType.LIST,
    title: i18n().menu.investment.corporateInvestment,
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
        label: i18n().menu.investment.whitelabelValidation.label,
        description: i18n().menu.investment.whitelabelValidation.description,
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
        label: i18n().menu.investment.referralProgram.label,
        description: i18n().menu.investment.referralProgram.description,
        href: "",
      },
    ],
  },
];

const rpcSections: HeaderMenuSectionProps[] = [
  {
    type: HeaderMenuSectionType.MULTI_GRID,
    title: i18n().menu.rpc.rpcServices,
    categories: [
      {
        title: i18n().menu.rpc.currentlyPopular,
        columns: 1,
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
        title: i18n().menu.rpc.new,
        hideOnMobile: true,
        columns: 1,
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
        title: i18n().menu.rpc.mostUsed,
        hideOnMobile: true,
        columns: 2,
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
        label: i18n().menu.rpc.pricing.label,
        description: i18n().menu.rpc.pricing.description,
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
        label: i18n().menu.rpc.freeRpc.label,
        description: i18n().menu.rpc.freeRpc.description,
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
        label: i18n().menu.rpc.documents.label,
        description: i18n().menu.rpc.documents.description,
        href: "",
      },
    ],
  },
];

const eventsAndCommunitySection: HeaderMenuSectionProps = {
  type: HeaderMenuSectionType.LIST,
  title: i18n().menu.services.eventsAndCommunity,
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
      label: i18n().menu.services.turkishEcosystem.label,
      description: i18n().menu.services.turkishEcosystem.description,
      href: "",
      subItems: [
        {
          label: i18n().menu.services.turkishEcosystem.subItems.suiTurkey,
          href: "",
        },
        {
          label: i18n().menu.services.turkishEcosystem.subItems.celestiaTurkey,
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
      label: i18n().menu.services.buildersWeek.label,
      description: i18n().menu.services.buildersWeek.description,
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
      label: i18n().menu.services.ethIstanbul.label,
      description: i18n().menu.services.ethIstanbul.description,
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
      label: i18n().menu.services.cryptist.label,
      description: i18n().menu.services.cryptist.description,
      href: "",
    },
  ],
};

const servicesSections: HeaderMenuSectionProps[] = [
  {
    type: HeaderMenuSectionType.LIST,
    title: i18n().menu.services.nodeServices,
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
        label: i18n().menu.services.cryptoInvestment.label,
        description: i18n().menu.services.cryptoInvestment.description,
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
        label: i18n().menu.services.whitelabelValidation.label,
        description: i18n().menu.services.whitelabelValidation.description,
        href: "",
        subItems: [
          {
            label:
              i18n().menu.services.whitelabelValidation.subItems.btcMining
                .label,
            description:
              i18n().menu.services.whitelabelValidation.subItems.btcMining
                .description,
            href: "",
          },
          {
            label:
              i18n().menu.services.whitelabelValidation.subItems.ethValidation
                .label,
            description:
              i18n().menu.services.whitelabelValidation.subItems.ethValidation
                .description,
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
        label: i18n().menu.services.btcRestaking.label,
        description: i18n().menu.services.btcRestaking.description,
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
        label: i18n().menu.services.ethRestaking.label,
        description: i18n().menu.services.ethRestaking.description,
        href: "",
      },
    ],
  },
  {
    type: HeaderMenuSectionType.LIST,
    title: i18n().menu.services.consulting,
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
        label: i18n().menu.services.architecturalConsulting.label,
        description: i18n().menu.services.architecturalConsulting.description,
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
        label: i18n().menu.services.blockchainConsulting.label,
        description: i18n().menu.services.blockchainConsulting.description,
        href: "",
      },
    ],
    additionalGroups: [
      {
        title: i18n().menu.services.blockchainProduction,
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
            label: i18n().menu.services.productDevelopment.label,
            description: i18n().menu.services.productDevelopment.description,
            href: "",
          },
        ],
      },
    ],
  },
  // Reused eventsAndCommunitySection with hideOnMobile override
  {
    ...eventsAndCommunitySection,
    hideOnMobile: true,
  },
];

const productsSections: HeaderMenuSectionProps[] = [
  {
    type: HeaderMenuSectionType.LIST,
    title: i18n().menu.products.protocol,
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
        label: i18n().menu.products.pulsarChain.label,
        description: i18n().menu.products.pulsarChain.description,
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
        label: i18n().menu.products.zkvot.label,
        description: i18n().menu.products.zkvot.description,
        href: "",
      },
    ],
    additionalGroups: [
      {
        title: i18n().menu.products.other,
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
            label: i18n().menu.products.hackathonProducts.label,
            description: i18n().menu.products.hackathonProducts.description,
            href: "",
          },
        ],
      },
    ],
  },
  {
    type: HeaderMenuSectionType.LIST,
    title: i18n().menu.products.application,
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
        label: i18n().menu.products.pulsar.label,
        description: i18n().menu.products.pulsar.description,
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
        label: i18n().menu.products.punch.label,
        description: i18n().menu.products.punch.description,
        href: "",
      },
    ],
  },
  {
    type: HeaderMenuSectionType.LIST,
    title: i18n().menu.products.tooling,
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
        label: i18n().menu.products.validatier.label,
        description: i18n().menu.products.validatier.description,
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
        label: i18n().menu.products.blockchainDevReport.label,
        description: i18n().menu.products.blockchainDevReport.description,
        href: "",
      },
    ],
  },
];

const node101Section: HeaderMenuSectionProps = {
  type: HeaderMenuSectionType.LIST,
  title: i18n().menu.corporate.node101,
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
      label: i18n().menu.corporate.aboutNode101.label,
      description: i18n().menu.corporate.aboutNode101.description,
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
      label: i18n().menu.corporate.team.label,
      description: i18n().menu.corporate.team.description,
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
      label: i18n().menu.corporate.career.label,
      description: i18n().menu.corporate.career.description,
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
      label: i18n().menu.corporate.brandDetails.label,
      description: i18n().menu.corporate.brandDetails.description,
      href: "",
    },
  ],
};

const corporateSections: HeaderMenuSectionProps[] = [
  {
    type: HeaderMenuSectionType.LIST,
    title: i18n().menu.corporate.corporateExpertise,
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
        label: i18n().menu.corporate.financialInstitutions.label,
        description: i18n().menu.corporate.financialInstitutions.description,
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
        label: i18n().menu.corporate.centralizedExchanges.label,
        description: i18n().menu.corporate.centralizedExchanges.description,
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
        label: i18n().menu.corporate.custodials.label,
        description: i18n().menu.corporate.custodials.description,
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
        label: i18n().menu.corporate.foundations.label,
        description: i18n().menu.corporate.foundations.description,
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
        label: i18n().menu.corporate.companies.label,
        description: i18n().menu.corporate.companies.description,
        href: "",
      },
    ],
  },
  {
    ...node101Section,
    hideOnMobile: true,
  },
  {
    type: HeaderMenuSectionType.LIST,
    title: i18n().menu.corporate.dataCenter,
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
        label: i18n().menu.corporate.blog.label,
        description: i18n().menu.corporate.blog.description,
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
        label: i18n().menu.corporate.supportCenter.label,
        description: i18n().menu.corporate.supportCenter.description,
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
        label: i18n().menu.corporate.faq.label,
        description: i18n().menu.corporate.faq.description,
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
        label: i18n().menu.corporate.caseStudies.label,
        description: i18n().menu.corporate.caseStudies.description,
        href: "",
      },
    ],
  },
];

const getMenuItems = (): MenuItem[] => [
  {
    label: i18n().nav.investment,
    sections: investmentSections,
  },
  {
    label: i18n().nav.rpc,
    sections: rpcSections,
  },
  {
    label: i18n().nav.services,
    sections: servicesSections,
  },
  {
    label: i18n().nav.eventsAndCommunity,
    hideOnDesktop: true,
    sections: [eventsAndCommunitySection],
  },
  {
    label: i18n().nav.products,
    sections: productsSections,
  },
  {
    label: i18n().nav.corporate,
    sections: corporateSections,
  },
  {
    label: i18n().menu.corporate.node101,
    hideOnDesktop: true,
    sections: [node101Section],
  },
];

export const Header = () => (
  <header
    class={`
      group/menu
      absolute
      m-(--header-margin)
      flex
      h-(--header-height)
      min-h-(--header-height)
      min-w-[calc(100dvw-var(--hero-margin)*2-var(--header-margin)*2)]
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
      has-checked:min-w-dvw
      has-checked:rounded-none
      has-checked:border-header-bg-checked
      has-checked:bg-header-bg-checked
      lg:has-checked:m-(--header-margin)
      lg:has-checked:min-w-[calc(100dvw-var(--hero-margin)*2-var(--header-margin)*2)]
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
        space-y-4
        overflow-y-auto
        rounded-4xl
        bg-nav-mobile-bg
        px-8
        py-8
        opacity-0
        transition-all
        duration-300
        will-change-[opacity,transform]
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
            ${item.hideOnDesktop ? "lg:hidden" : ""}
          `}
          key={index}
        >
          <button
            class={`
              inline-flex
              cursor-pointer
              items-center
              justify-between
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
            onmousedown="event.preventDefault(); if(document.activeElement === this){ this.blur(); } else { this.focus(); setTimeout(() => { this.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 300); }"
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
