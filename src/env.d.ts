/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference path="../worker-configuration.d.ts" />

// Cloudflare Workers exposes `caches.default` but DOM lib's CacheStorage omits it.
interface CacheStorage {
  readonly default: Cache;
}

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}
