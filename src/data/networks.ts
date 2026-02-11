// Types
export type NetworkFeature = "rpc" | "staking";

export interface KVNetwork {
  id: string;
  name: string;
  symbol: string;
  description: { tr: string; en: string };
  href: string;
  apr: number;
  features: NetworkFeature[];
  logoKey: string;
}

export interface NetworkCategories {
  popularBlockchains: string[];
  currentlyPopular: string[];
  new: string[];
  mostUsed: string[];
}

export const CATEGORY_DEFS = [
  {
    key: "popularBlockchains" as const,
    label: "Popular Blockchains (Investment Menu)",
  },
  { key: "currentlyPopular" as const, label: "Currently Popular (RPC Menu)" },
  { key: "new" as const, label: "New (RPC Menu)" },
  { key: "mostUsed" as const, label: "Most Used (RPC Menu)" },
];

export const EMPTY_CATEGORIES: NetworkCategories = {
  popularBlockchains: [],
  currentlyPopular: [],
  new: [],
  mostUsed: [],
};

// KV access — encapsulates the repeated try/catch/cast/fallback pattern
type KVNamespace = {
  get(key: string, type: "json"): Promise<unknown>;
  put(key: string, value: string): Promise<void>;
};

export async function getNetworks(KV: KVNamespace): Promise<KVNetwork[]> {
  const data = (await KV.get("networks", "json")) as KVNetwork[] | null;
  return data ?? [];
}

export async function putNetworks(
  KV: KVNamespace,
  networks: KVNetwork[],
): Promise<void> {
  await KV.put("networks", JSON.stringify(networks));
}

export async function getNetworkCategories(
  KV: KVNamespace,
): Promise<NetworkCategories> {
  const data = (await KV.get(
    "network-categories",
    "json",
  )) as NetworkCategories | null;
  return data ?? { ...EMPTY_CATEGORIES };
}

export async function putNetworkCategories(
  KV: KVNamespace,
  categories: NetworkCategories,
): Promise<void> {
  await KV.put("network-categories", JSON.stringify(categories));
}

// Remove a network ID from all categories (used on network delete)
export function removeFromCategories(
  categories: NetworkCategories,
  networkId: string,
): boolean {
  let changed = false;
  for (const key of Object.keys(categories) as (keyof NetworkCategories)[]) {
    const before = categories[key].length;
    categories[key] = categories[key].filter((id) => id !== networkId);
    if (categories[key].length !== before) changed = true;
  }
  return changed;
}
