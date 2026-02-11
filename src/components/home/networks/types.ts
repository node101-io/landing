import { type NetworkFeature } from "@/data/networks";

export type CardType =
  | "rectangle-big"
  | "square-big"
  | "rectangle-small"
  | "square-small"
  | "cta";

export interface SearchableNetwork {
  id: string;
  name: string;
  symbol: string;
  description: string;
  apr: number;
  logoSrc: string;
  logoWidth: number;
  logoHeight: number;
  features: NetworkFeature[];
  searchText: string;
}

export interface GridItem {
  type: CardType;
  grid: string;
  displayClass: string;
  slotIndex?: number;
  network?: SearchableNetwork;
}

const imgStyle = [
  "aspect-square",
  "object-contain",
  "rounded-[calc(var(--vw)*4)]",
  "lg:rounded-[calc(var(--vw)*1)]",
];

export const featureRowClass = ["flex", "gap-[calc(var(--vw)*0.5)]"];
export const featurePillClass = [
  "flex",
  "size-[calc(var(--vw)*4)]",
  "aspect-square",
  "items-center",
  "justify-center",
  "rounded-full",
  "lg:size-[calc(var(--vw)*1.5)]",
];
export const featureIconClass = [
  "size-[calc(var(--vw)*2.2)]",
  "lg:size-[calc(var(--vw)*0.8)]",
];

export const featureBgClass: Record<NetworkFeature, string> = {
  rpc: "bg-lavender",
  staking: "bg-ice-blue",
};

export const imgClass: Record<Exclude<CardType, "cta">, string[]> = {
  "rectangle-big": ["w-[35%]", "h-fit", "shrink-0", ...imgStyle],
  "square-big": [
    "w-[calc(50%-var(--vw)*6)]",
    "lg:w-[calc(50%-var(--vw)*2.1)]",
    "h-fit",
    ...imgStyle,
  ],
  "square-small": ["size-full", ...imgStyle],
  "rectangle-small": [
    "h-[calc(var(--vw)*13)]",
    "lg:h-[calc(var(--vw)*3.686)]",
    "w-auto",
    ...imgStyle,
  ],
};
