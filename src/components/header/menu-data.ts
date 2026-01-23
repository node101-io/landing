import type {
  GridItemProps,
  MenuSectionItemData,
  GridCategory,
  ListGroup,
  SectionType,
} from "./components/MenuSection.astro";
import type { TranslationFn } from "@/i18n/utils";

export type MenuSectionData = {
  type: SectionType;
  title: string;
  footnote?: string;
  hideOnMobile?: boolean;
  items?: MenuSectionItemData[] | GridItemProps[];
  additionalGroups?: ListGroup[];
  categories?: GridCategory[];
};

export type MenuItem = {
  label: string;
  sections: MenuSectionData[];
  hideOnDesktop?: boolean;
};


// =============================================================================
// STATIC DATA
// =============================================================================

const networks: GridItemProps[] = [
  { icon: "/img/networks/ethereum.webp", name: "Ethereum", symbol: "ETH", href: "/networks/ethereum" },
  { icon: "/img/networks/bitcoin.webp", name: "Bitcoin", symbol: "BTC", href: "/networks/bitcoin" },
  { icon: "/img/networks/solana.webp", name: "Solana", symbol: "SOL", href: "/networks/solana" },
  { icon: "/img/networks/avalanche.webp", name: "Avalanche", symbol: "AVAX", href: "/networks/avalanche" },
  { icon: "/img/networks/sui.webp", name: "Sui", symbol: "SUI", href: "/networks/sui" },
  { icon: "/img/networks/walrus.webp", name: "Walrus", symbol: "WAL", href: "/networks/walrus" },
  { icon: "/img/networks/celestia.webp", name: "Celestia", symbol: "TIA", href: "/networks/celestia" },
  { icon: "/img/networks/cosmos.webp", name: "Cosmos", symbol: "ATOM", href: "/networks/cosmos" },
  { icon: "/img/networks/band.webp", name: "Band", symbol: "BAND", href: "/networks/band" },
  { icon: "/img/networks/starknet.webp", name: "Starknet", symbol: "STRK", href: "/networks/starknet" },
];

// =============================================================================
// MENU ITEM BUILDERS
// =============================================================================

function buildInvestmentMenu(t: TranslationFn): MenuItem {
  return {
    label: t('nav.investment'),
    sections: [
      {
        type: 'grid',
        title: t('menu.investment.popularBlockchains'),
        items: networks,
      },
      {
        type: 'list',
        title: t('menu.investment.recurringYield'),
        footnote: t('menu.investment.footnote'),
        items: [
          {
            iconSrc: "/img/header-icons/btc-restaking.webp",
            iconAlt: "BTC Restaking icon",
            label: t('menu.investment.btcRestaking.label'),
            description: t('menu.investment.btcRestaking.description'),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/eth-restaking.webp",
            iconAlt: "ETH Restaking icon",
            label: t('menu.investment.ethRestaking.label'),
            description: t('menu.investment.ethRestaking.description'),
            href: "",
          },
        ],
      },
      {
        type: 'list',
        title: t('menu.investment.corporateInvestment'),
        items: [
          {
            iconSrc: "/img/header-icons/whitelabel-validation.webp",
            iconAlt: "Whitelabel Validation icon",
            label: t('menu.investment.whitelabelValidation.label'),
            description: t('menu.investment.whitelabelValidation.description'),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/referral-program.webp",
            iconAlt: "Referral Program icon",
            label: t('menu.investment.referralProgram.label'),
            description: t('menu.investment.referralProgram.description'),
            href: "",
          },
        ],
      },
    ],
  };
}

function buildRpcMenu(t: TranslationFn): MenuItem {
  return {
    label: t('nav.rpc'),
    sections: [
      {
        type: 'multi_grid',
        title: t('menu.rpc.rpcServices'),
        categories: [
          {
            title: t('menu.rpc.currentlyPopular'),
            columns: 1,
            items: networks,
          },
          {
            title: t('menu.rpc.new'),
            hideOnMobile: true,
            columns: 1,
            items: networks,
          },
          {
            title: t('menu.rpc.mostUsed'),
            hideOnMobile: true,
            columns: 2,
            items: networks,
          },
        ],
      },
      {
        type: 'list',
        title: '',
        items: [
          {
            iconSrc: "/img/header-icons/pricing.webp",
            iconAlt: "Pricing icon",
            label: t('menu.rpc.pricing.label'),
            description: t('menu.rpc.pricing.description'),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/free-rpc.webp",
            iconAlt: "Free RPC icon",
            label: t('menu.rpc.freeRpc.label'),
            description: t('menu.rpc.freeRpc.description'),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/documents.webp",
            iconAlt: "Documents icon",
            label: t('menu.rpc.documents.label'),
            description: t('menu.rpc.documents.description'),
            href: "",
          },
        ],
      },
    ],
  };
}

function buildServicesMenu(t: TranslationFn): MenuItem {
  return {
    label: t('nav.services'),
    sections: [
      {
        type: 'list',
        title: t('menu.services.nodeServices'),
        items: [
          {
            iconSrc: "/img/header-icons/crypto-asset-investment.webp",
            iconAlt: "Crypto Asset Investment icon",
            label: t('menu.services.cryptoInvestment.label'),
            description: t('menu.services.cryptoInvestment.description'),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/whitelabel-validation.webp",
            iconAlt: "Whitelabel Validation icon",
            label: t('menu.services.whitelabelValidation.label'),
            description: t('menu.services.whitelabelValidation.description'),
            href: "",
            subItems: [
              {
                label: t('menu.services.whitelabelValidation.subItems.btcMining.label'),
                description: t('menu.services.whitelabelValidation.subItems.btcMining.description'),
                href: "",
              },
              {
                label: t('menu.services.whitelabelValidation.subItems.ethValidation.label'),
                description: t('menu.services.whitelabelValidation.subItems.ethValidation.description'),
                href: "",
              },
            ],
          },
          {
            iconSrc: "/img/header-icons/btc-restaking.webp",
            iconAlt: "BTC Restaking icon",
            label: t('menu.services.btcRestaking.label'),
            description: t('menu.services.btcRestaking.description'),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/eth-restaking.webp",
            iconAlt: "ETH Restaking icon",
            label: t('menu.services.ethRestaking.label'),
            description: t('menu.services.ethRestaking.description'),
            href: "",
          },
        ],
      },
      {
        type: 'list',
        title: t('menu.services.consulting'),
        items: [
          {
            iconSrc: "/img/header-icons/architectural-consulting.webp",
            iconAlt: "Architectural Consulting icon",
            label: t('menu.services.architecturalConsulting.label'),
            description: t('menu.services.architecturalConsulting.description'),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/blockchain-consulting.webp",
            iconAlt: "Blockchain Consulting icon",
            label: t('menu.services.blockchainConsulting.label'),
            description: t('menu.services.blockchainConsulting.description'),
            href: "",
          },
        ],
        additionalGroups: [
          {
            title: t('menu.services.blockchainProduction'),
            items: [
              {
                iconSrc: "/img/header-icons/product-development.webp",
                iconAlt: "Product Development icon",
                label: t('menu.services.productDevelopment.label'),
                description: t('menu.services.productDevelopment.description'),
                href: "",
              },
            ],
          },
        ],
      },
      {
        type: 'list',
        title: t('menu.services.eventsAndCommunity'),
        hideOnMobile: true,
        items: buildEventsAndCommunityItems(t),
      },
    ],
  };
}

function buildEventsAndCommunityItems(t: TranslationFn): MenuSectionItemData[] {
  return [
    {
      iconSrc: "/img/header-icons/turkish-ecosystem.webp",
      iconAlt: "Turkish Ecosystem Gateway icon",
      label: t('menu.services.turkishEcosystem.label'),
      description: t('menu.services.turkishEcosystem.description'),
      href: "",
      subItems: [
        {
          label: t('menu.services.turkishEcosystem.subItems.suiTurkey'),
          href: "",
        },
        {
          label: t('menu.services.turkishEcosystem.subItems.celestiaTurkey'),
          href: "",
        },
      ],
    },
    {
      iconSrc: "/img/header-icons/builders-week-istanbul.webp",
      iconAlt: "Builders Week Istanbul icon",
      label: t('menu.services.buildersWeek.label'),
      description: t('menu.services.buildersWeek.description'),
      href: "",
    },
    {
      iconSrc: "/img/header-icons/ethistanbul.webp",
      iconAlt: "ETHIstanbul Conference icon",
      label: t('menu.services.ethIstanbul.label'),
      description: t('menu.services.ethIstanbul.description'),
      href: "",
    },
    {
      iconSrc: "/img/header-icons/cryptist.webp",
      iconAlt: "Cryptist icon",
      label: t('menu.services.cryptist.label'),
      description: t('menu.services.cryptist.description'),
      href: "",
    },
  ];
}

function buildEventsCommunityMobileMenu(t: TranslationFn): MenuItem {
  return {
    label: t('nav.eventsAndCommunity'),
    hideOnDesktop: true,
    sections: [
      {
        type: 'list',
        title: t('menu.services.eventsAndCommunity'),
        items: buildEventsAndCommunityItems(t),
      },
    ],
  };
}

function buildProductsMenu(t: TranslationFn): MenuItem {
  return {
    label: t('nav.products'),
    sections: [
      {
        type: 'list',
        title: t('menu.products.protocol'),
        items: [
          {
            iconSrc: "/img/header-icons/pulsar.webp",
            iconAlt: "Pulsar Chain icon",
            label: t('menu.products.pulsarChain.label'),
            description: t('menu.products.pulsarChain.description'),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/zkvot.webp",
            iconAlt: "zkVot icon",
            label: t('menu.products.zkvot.label'),
            description: t('menu.products.zkvot.description'),
            href: "",
          },
        ],
        additionalGroups: [
          {
            title: t('menu.products.other'),
            items: [
              {
                iconSrc: "/img/header-icons/hackathons.webp",
                iconAlt: "Hackathon Products icon",
                label: t('menu.products.hackathonProducts.label'),
                description: t('menu.products.hackathonProducts.description'),
                href: "",
              },
            ],
          },
        ],
      },
      {
        type: 'list',
        title: t('menu.products.application'),
        items: [
          {
            iconSrc: "/img/header-icons/pulsar.webp",
            iconAlt: "Pulsar icon",
            label: t('menu.products.pulsar.label'),
            description: t('menu.products.pulsar.description'),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/punch.webp",
            iconAlt: "PUNCH icon",
            label: t('menu.products.punch.label'),
            description: t('menu.products.punch.description'),
            href: "",
          },
        ],
      },
      {
        type: 'list',
        title: t('menu.products.tooling'),
        items: [
          {
            iconSrc: "/img/header-icons/validatier.webp",
            iconAlt: "Validatier icon",
            label: t('menu.products.validatier.label'),
            description: t('menu.products.validatier.description'),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/blockchain-developer-report.webp",
            iconAlt: "Blockchain Developer Report icon",
            label: t('menu.products.blockchainDevReport.label'),
            description: t('menu.products.blockchainDevReport.description'),
            href: "",
          },
        ],
      },
    ],
  };
}

function buildNode101Items(t: TranslationFn): MenuSectionItemData[] {
  return [
    {
      iconSrc: "/img/header-icons/about-node101.webp",
      iconAlt: "About node101 icon",
      label: t('menu.corporate.aboutNode101.label'),
      description: t('menu.corporate.aboutNode101.description'),
      href: "",
    },
    {
      iconSrc: "/img/header-icons/team.webp",
      iconAlt: "Team icon",
      label: t('menu.corporate.team.label'),
      description: t('menu.corporate.team.description'),
      href: "",
    },
    {
      iconSrc: "/img/header-icons/career.webp",
      iconAlt: "Career icon",
      label: t('menu.corporate.career.label'),
      description: t('menu.corporate.career.description'),
      href: "",
    },
    {
      iconSrc: "/img/header-icons/brand-details.webp",
      iconAlt: "Brand Details icon",
      label: t('menu.corporate.brandDetails.label'),
      description: t('menu.corporate.brandDetails.description'),
      href: "",
    },
  ];
}

function buildCorporateMenu(t: TranslationFn): MenuItem {
  return {
    label: t('nav.corporate'),
    sections: [
      {
        type: 'list',
        title: t('menu.corporate.corporateExpertise'),
        items: [
          {
            iconSrc: "/img/header-icons/financial-institutions.webp",
            iconAlt: "Financial Institutions icon",
            label: t('menu.corporate.financialInstitutions.label'),
            description: t('menu.corporate.financialInstitutions.description'),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/centralized-exchanges.webp",
            iconAlt: "Centralized Exchanges icon",
            label: t('menu.corporate.centralizedExchanges.label'),
            description: t('menu.corporate.centralizedExchanges.description'),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/custodials.webp",
            iconAlt: "Custodials icon",
            label: t('menu.corporate.custodials.label'),
            description: t('menu.corporate.custodials.description'),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/foundations.webp",
            iconAlt: "Foundations icon",
            label: t('menu.corporate.foundations.label'),
            description: t('menu.corporate.foundations.description'),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/companies.webp",
            iconAlt: "Companies icon",
            label: t('menu.corporate.companies.label'),
            description: t('menu.corporate.companies.description'),
            href: "",
          },
        ],
      },
      {
        type: 'list',
        title: t('menu.corporate.node101'),
        hideOnMobile: true,
        items: buildNode101Items(t),
      },
      {
        type: 'list',
        title: t('menu.corporate.dataCenter'),
        items: [
          {
            iconSrc: "/img/header-icons/blog.webp",
            iconAlt: "Blog icon",
            label: t('menu.corporate.blog.label'),
            description: t('menu.corporate.blog.description'),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/support-center.webp",
            iconAlt: "Support Center icon",
            label: t('menu.corporate.supportCenter.label'),
            description: t('menu.corporate.supportCenter.description'),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/faq.webp",
            iconAlt: "FAQ icon",
            label: t('menu.corporate.faq.label'),
            description: t('menu.corporate.faq.description'),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/case-studies.webp",
            iconAlt: "Case Studies icon",
            label: t('menu.corporate.caseStudies.label'),
            description: t('menu.corporate.caseStudies.description'),
            href: "",
          },
        ],
      },
    ],
  };
}

function buildNode101MobileMenu(t: TranslationFn): MenuItem {
  return {
    label: t('menu.corporate.node101'),
    hideOnDesktop: true,
    sections: [
      {
        type: 'list',
        title: t('menu.corporate.node101'),
        items: buildNode101Items(t),
      },
    ],
  };
}

// =============================================================================
// MAIN EXPORT
// =============================================================================

export function getMenuItems(t: TranslationFn): MenuItem[] {
  return [
    buildInvestmentMenu(t),
    buildRpcMenu(t),
    buildServicesMenu(t),
    buildEventsCommunityMobileMenu(t),
    buildProductsMenu(t),
    buildCorporateMenu(t),
    buildNode101MobileMenu(t),
  ];
}
