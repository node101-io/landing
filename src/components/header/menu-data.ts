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
// MENU ITEM BUILDERS
// =============================================================================

function buildInvestmentMenu(t: TranslationFn, networks: GridItemProps[]): MenuItem {
  return {
    label: t("nav.investment"),
    sections: [
      {
        type: "grid",
        title: t("menu.investment.popularBlockchains"),
        items: networks,
      },
      {
        type: "list",
        title: t("menu.investment.recurringYield"),
        footnote: t("menu.investment.footnote"),
        items: [
          {
            iconSrc: "/img/header-icons/btc-restaking.webp",
            iconAlt: t("menu.investment.btcRestaking.iconAlt"),
            label: t("menu.investment.btcRestaking.label"),
            description: t("menu.investment.btcRestaking.description"),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/eth-restaking.webp",
            iconAlt: t("menu.investment.ethRestaking.iconAlt"),
            label: t("menu.investment.ethRestaking.label"),
            description: t("menu.investment.ethRestaking.description"),
            href: "",
          },
        ],
      },
      {
        type: "list",
        title: t("menu.investment.corporateInvestment"),
        items: [
          {
            iconSrc: "/img/header-icons/whitelabel-validation.webp",
            iconAlt: t("menu.investment.whitelabelValidation.iconAlt"),
            label: t("menu.investment.whitelabelValidation.label"),
            description: t("menu.investment.whitelabelValidation.description"),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/referral-program.webp",
            iconAlt: t("menu.investment.referralProgram.iconAlt"),
            label: t("menu.investment.referralProgram.label"),
            description: t("menu.investment.referralProgram.description"),
            href: "",
          },
        ],
      },
    ],
  };
}

function buildRpcMenu(t: TranslationFn, networks: GridItemProps[]): MenuItem {
  return {
    label: t("nav.rpc"),
    sections: [
      {
        type: "multi_grid",
        title: t("menu.rpc.rpcServices"),
        categories: [
          {
            title: t("menu.rpc.currentlyPopular"),
            columns: 1,
            items: networks,
          },
          {
            title: t("menu.rpc.new"),
            hideOnMobile: true,
            columns: 1,
            items: networks,
          },
          {
            title: t("menu.rpc.mostUsed"),
            hideOnMobile: true,
            columns: 2,
            items: networks,
          },
        ],
      },
      {
        type: "list",
        title: "",
        items: [
          {
            iconSrc: "/img/header-icons/pricing.webp",
            iconAlt: t("menu.rpc.pricing.iconAlt"),
            label: t("menu.rpc.pricing.label"),
            description: t("menu.rpc.pricing.description"),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/free-rpc.webp",
            iconAlt: t("menu.rpc.freeRpc.iconAlt"),
            label: t("menu.rpc.freeRpc.label"),
            description: t("menu.rpc.freeRpc.description"),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/documents.webp",
            iconAlt: t("menu.rpc.documents.iconAlt"),
            label: t("menu.rpc.documents.label"),
            description: t("menu.rpc.documents.description"),
            href: "",
          },
        ],
      },
    ],
  };
}

function buildServicesMenu(t: TranslationFn): MenuItem {
  return {
    label: t("nav.services"),
    sections: [
      {
        type: "list",
        title: t("menu.services.nodeServices"),
        items: [
          {
            iconSrc: "/img/header-icons/crypto-asset-investment.webp",
            iconAlt: t("menu.services.cryptoInvestment.iconAlt"),
            label: t("menu.services.cryptoInvestment.label"),
            description: t("menu.services.cryptoInvestment.description"),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/whitelabel-validation.webp",
            iconAlt: t("menu.services.whitelabelValidation.iconAlt"),
            label: t("menu.services.whitelabelValidation.label"),
            description: t("menu.services.whitelabelValidation.description"),
            href: "",
            subItems: [
              {
                label: t(
                  "menu.services.whitelabelValidation.subItems.btcMining.label",
                ),
                description: t(
                  "menu.services.whitelabelValidation.subItems.btcMining.description",
                ),
                href: "",
              },
              {
                label: t(
                  "menu.services.whitelabelValidation.subItems.ethValidation.label",
                ),
                description: t(
                  "menu.services.whitelabelValidation.subItems.ethValidation.description",
                ),
                href: "",
              },
            ],
          },
          {
            iconSrc: "/img/header-icons/btc-restaking.webp",
            iconAlt: t("menu.services.btcRestaking.iconAlt"),
            label: t("menu.services.btcRestaking.label"),
            description: t("menu.services.btcRestaking.description"),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/eth-restaking.webp",
            iconAlt: t("menu.services.ethRestaking.iconAlt"),
            label: t("menu.services.ethRestaking.label"),
            description: t("menu.services.ethRestaking.description"),
            href: "",
          },
        ],
      },
      {
        type: "list",
        title: t("menu.services.consulting"),
        items: [
          {
            iconSrc: "/img/header-icons/architectural-consulting.webp",
            iconAlt: t("menu.services.architecturalConsulting.iconAlt"),
            label: t("menu.services.architecturalConsulting.label"),
            description: t("menu.services.architecturalConsulting.description"),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/blockchain-consulting.webp",
            iconAlt: t("menu.services.blockchainConsulting.iconAlt"),
            label: t("menu.services.blockchainConsulting.label"),
            description: t("menu.services.blockchainConsulting.description"),
            href: "",
          },
        ],
        additionalGroups: [
          {
            title: t("menu.services.blockchainProduction"),
            items: [
              {
                iconSrc: "/img/header-icons/product-development.webp",
                iconAlt: t("menu.services.productDevelopment.iconAlt"),
                label: t("menu.services.productDevelopment.label"),
                description: t("menu.services.productDevelopment.description"),
                href: "",
              },
            ],
          },
        ],
      },
      {
        type: "list",
        title: t("menu.services.eventsAndCommunity"),
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
      iconAlt: t("menu.services.turkishEcosystem.iconAlt"),
      label: t("menu.services.turkishEcosystem.label"),
      description: t("menu.services.turkishEcosystem.description"),
      href: "",
      subItems: [
        {
          label: t("menu.services.turkishEcosystem.subItems.suiTurkey"),
          href: "",
        },
        {
          label: t("menu.services.turkishEcosystem.subItems.celestiaTurkey"),
          href: "",
        },
      ],
    },
    {
      iconSrc: "/img/header-icons/builders-week-istanbul.webp",
      iconAlt: t("menu.services.buildersWeek.iconAlt"),
      label: t("menu.services.buildersWeek.label"),
      description: t("menu.services.buildersWeek.description"),
      href: "",
    },
    {
      iconSrc: "/img/header-icons/ethistanbul.webp",
      iconAlt: t("menu.services.ethIstanbul.iconAlt"),
      label: t("menu.services.ethIstanbul.label"),
      description: t("menu.services.ethIstanbul.description"),
      href: "",
    },
    {
      iconSrc: "/img/header-icons/cryptist.webp",
      iconAlt: t("menu.services.cryptist.iconAlt"),
      label: t("menu.services.cryptist.label"),
      description: t("menu.services.cryptist.description"),
      href: "",
    },
  ];
}

function buildEventsCommunityMobileMenu(t: TranslationFn): MenuItem {
  return {
    label: t("nav.eventsAndCommunity"),
    hideOnDesktop: true,
    sections: [
      {
        type: "list",
        title: t("menu.services.eventsAndCommunity"),
        items: buildEventsAndCommunityItems(t),
      },
    ],
  };
}

function buildProductsMenu(t: TranslationFn): MenuItem {
  return {
    label: t("nav.products"),
    sections: [
      {
        type: "list",
        title: t("menu.products.protocol"),
        items: [
          {
            iconSrc: "/img/header-icons/pulsar.webp",
            iconAlt: t("menu.products.pulsarChain.iconAlt"),
            label: t("menu.products.pulsarChain.label"),
            description: t("menu.products.pulsarChain.description"),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/zkvot.webp",
            iconAlt: t("menu.products.zkvot.iconAlt"),
            label: t("menu.products.zkvot.label"),
            description: t("menu.products.zkvot.description"),
            href: "",
          },
        ],
        additionalGroups: [
          {
            title: t("menu.products.other"),
            items: [
              {
                iconSrc: "/img/header-icons/hackathons.webp",
                iconAlt: t("menu.products.hackathonProducts.iconAlt"),
                label: t("menu.products.hackathonProducts.label"),
                description: t("menu.products.hackathonProducts.description"),
                href: "",
              },
            ],
          },
        ],
      },
      {
        type: "list",
        title: t("menu.products.application"),
        items: [
          {
            iconSrc: "/img/header-icons/pulsar.webp",
            iconAlt: t("menu.products.pulsar.iconAlt"),
            label: t("menu.products.pulsar.label"),
            description: t("menu.products.pulsar.description"),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/punch.webp",
            iconAlt: t("menu.products.punch.iconAlt"),
            label: t("menu.products.punch.label"),
            description: t("menu.products.punch.description"),
            href: "",
          },
        ],
      },
      {
        type: "list",
        title: t("menu.products.tooling"),
        items: [
          {
            iconSrc: "/img/header-icons/validatier.webp",
            iconAlt: t("menu.products.validatier.iconAlt"),
            label: t("menu.products.validatier.label"),
            description: t("menu.products.validatier.description"),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/blockchain-developer-report.webp",
            iconAlt: t("menu.products.blockchainDevReport.iconAlt"),
            label: t("menu.products.blockchainDevReport.label"),
            description: t("menu.products.blockchainDevReport.description"),
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
      iconAlt: t("menu.corporate.aboutNode101.iconAlt"),
      label: t("menu.corporate.aboutNode101.label"),
      description: t("menu.corporate.aboutNode101.description"),
      href: "",
    },
    {
      iconSrc: "/img/header-icons/team.webp",
      iconAlt: t("menu.corporate.team.iconAlt"),
      label: t("menu.corporate.team.label"),
      description: t("menu.corporate.team.description"),
      href: "",
    },
    {
      iconSrc: "/img/header-icons/career.webp",
      iconAlt: t("menu.corporate.career.iconAlt"),
      label: t("menu.corporate.career.label"),
      description: t("menu.corporate.career.description"),
      href: "",
    },
    {
      iconSrc: "/img/header-icons/brand-details.webp",
      iconAlt: t("menu.corporate.brandDetails.iconAlt"),
      label: t("menu.corporate.brandDetails.label"),
      description: t("menu.corporate.brandDetails.description"),
      href: "",
    },
  ];
}

function buildCorporateMenu(t: TranslationFn): MenuItem {
  return {
    label: t("nav.corporate"),
    sections: [
      {
        type: "list",
        title: t("menu.corporate.corporateExpertise"),
        items: [
          {
            iconSrc: "/img/header-icons/financial-institutions.webp",
            iconAlt: t("menu.corporate.financialInstitutions.iconAlt"),
            label: t("menu.corporate.financialInstitutions.label"),
            description: t("menu.corporate.financialInstitutions.description"),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/centralized-exchanges.webp",
            iconAlt: t("menu.corporate.centralizedExchanges.iconAlt"),
            label: t("menu.corporate.centralizedExchanges.label"),
            description: t("menu.corporate.centralizedExchanges.description"),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/custodials.webp",
            iconAlt: t("menu.corporate.custodials.iconAlt"),
            label: t("menu.corporate.custodials.label"),
            description: t("menu.corporate.custodials.description"),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/foundations.webp",
            iconAlt: t("menu.corporate.foundations.iconAlt"),
            label: t("menu.corporate.foundations.label"),
            description: t("menu.corporate.foundations.description"),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/companies.webp",
            iconAlt: t("menu.corporate.companies.iconAlt"),
            label: t("menu.corporate.companies.label"),
            description: t("menu.corporate.companies.description"),
            href: "",
          },
        ],
      },
      {
        type: "list",
        title: t("menu.corporate.node101"),
        hideOnMobile: true,
        items: buildNode101Items(t),
      },
      {
        type: "list",
        title: t("menu.corporate.dataCenter"),
        items: [
          {
            iconSrc: "/img/header-icons/blog.webp",
            iconAlt: t("menu.corporate.blog.iconAlt"),
            label: t("menu.corporate.blog.label"),
            description: t("menu.corporate.blog.description"),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/support-center.webp",
            iconAlt: t("menu.corporate.supportCenter.iconAlt"),
            label: t("menu.corporate.supportCenter.label"),
            description: t("menu.corporate.supportCenter.description"),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/faq.webp",
            iconAlt: t("menu.corporate.faq.iconAlt"),
            label: t("menu.corporate.faq.label"),
            description: t("menu.corporate.faq.description"),
            href: "",
          },
          {
            iconSrc: "/img/header-icons/case-studies.webp",
            iconAlt: t("menu.corporate.caseStudies.iconAlt"),
            label: t("menu.corporate.caseStudies.label"),
            description: t("menu.corporate.caseStudies.description"),
            href: "",
          },
        ],
      },
    ],
  };
}

function buildNode101MobileMenu(t: TranslationFn): MenuItem {
  return {
    label: t("menu.corporate.node101"),
    hideOnDesktop: true,
    sections: [
      {
        type: "list",
        title: t("menu.corporate.node101"),
        items: buildNode101Items(t),
      },
    ],
  };
}

// =============================================================================
// MAIN EXPORT
// =============================================================================

export function getMenuItems(t: TranslationFn, networks: GridItemProps[]): MenuItem[] {
  return [
    buildInvestmentMenu(t, networks),
    buildRpcMenu(t, networks),
    buildServicesMenu(t),
    buildEventsCommunityMobileMenu(t),
    buildProductsMenu(t),
    buildCorporateMenu(t),
    buildNode101MobileMenu(t),
  ];
}
