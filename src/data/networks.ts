import type { ImageMetadata } from "astro";
import type { TranslationKey } from "@/i18n/utils";

import ethereumLogo from "@/assets/images/networks/ethereum.webp";
import bitcoinLogo from "@/assets/images/networks/bitcoin.webp";
import solanaLogo from "@/assets/images/networks/solana.webp";
import avalancheLogo from "@/assets/images/networks/avalanche.webp";
import suiLogo from "@/assets/images/networks/sui.webp";
import walrusLogo from "@/assets/images/networks/walrus.webp";
import celestiaLogo from "@/assets/images/networks/celestia.webp";
import cosmosLogo from "@/assets/images/networks/cosmos.webp";
import bandLogo from "@/assets/images/networks/band.webp";
import starknetLogo from "@/assets/images/networks/starknet.webp";

export type NetworkFeature = "rpc" | "staking";

export interface NetworkData {
  id: string;
  logo: ImageMetadata;
  name: string;
  symbol: string;
  descriptionKey: TranslationKey;
  href: string;
  apr: number;
  features: NetworkFeature[];
}

export const networks: NetworkData[] = [
  {
    id: "ethereum",
    logo: ethereumLogo,
    name: "Ethereum",
    symbol: "ETH",
    descriptionKey: "networks.ethereum.description",
    href: "/networks/ethereum",
    apr: 3.2,
    features: ["rpc", "staking"],
  },
  {
    id: "bitcoin",
    logo: bitcoinLogo,
    name: "Bitcoin",
    symbol: "BTC",
    descriptionKey: "networks.bitcoin.description",
    href: "/networks/bitcoin",
    apr: 2.1,
    features: ["staking"],
  },
  {
    id: "solana",
    logo: solanaLogo,
    name: "Solana",
    symbol: "SOL",
    descriptionKey: "networks.solana.description",
    href: "/networks/solana",
    apr: 7.1,
    features: ["rpc", "staking"],
  },
  {
    id: "avalanche",
    logo: avalancheLogo,
    name: "Avalanche",
    symbol: "AVAX",
    descriptionKey: "networks.avalanche.description",
    href: "/networks/avalanche",
    apr: 8.2,
    features: ["rpc", "staking"],
  },
  {
    id: "sui",
    logo: suiLogo,
    name: "Sui",
    symbol: "SUI",
    descriptionKey: "networks.sui.description",
    href: "/networks/sui",
    apr: 3.5,
    features: ["rpc", "staking"],
  },
  {
    id: "walrus",
    logo: walrusLogo,
    name: "Walrus",
    symbol: "WAL",
    descriptionKey: "networks.walrus.description",
    href: "/networks/walrus",
    apr: 5.8,
    features: ["rpc", "staking"],
  },
  {
    id: "celestia",
    logo: celestiaLogo,
    name: "Celestia",
    symbol: "TIA",
    descriptionKey: "networks.celestia.description",
    href: "/networks/celestia",
    apr: 14.1,
    features: ["rpc", "staking"],
  },
  {
    id: "cosmos",
    logo: cosmosLogo,
    name: "Cosmos",
    symbol: "ATOM",
    descriptionKey: "networks.cosmos.description",
    href: "/networks/cosmos",
    apr: 16.5,
    features: ["rpc", "staking"],
  },
  {
    id: "band",
    logo: bandLogo,
    name: "Band",
    symbol: "BAND",
    descriptionKey: "networks.band.description",
    href: "/networks/band",
    apr: 12.3,
    features: ["rpc", "staking"],
  },
  {
    id: "starknet",
    logo: starknetLogo,
    name: "Starknet",
    symbol: "STRK",
    descriptionKey: "networks.starknet.description",
    href: "/networks/starknet",
    apr: 4.6,
    features: ["rpc", "staking"],
  },
];
