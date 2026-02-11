import { defineMiddleware, sequence } from "astro:middleware";
import { middleware as i18nMiddleware } from "astro:i18n";

// i18n middleware — skip admin routes
const i18n = defineMiddleware((context, next) => {
  if (context.url.pathname.startsWith("/admin")) return next();
  return i18nMiddleware({
    prefixDefaultLocale: true,
    redirectToDefaultLocale: false,
  })(context, next);
});

// Admin auth middleware — only applies to /admin routes
const adminAuth = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  if (!pathname.startsWith("/admin")) return next();

  if (import.meta.env.DEV) return next();

  const runtime = context.locals as App.Locals;
  const env = runtime.runtime.env;

  const teamDomain = env.CF_ACCESS_TEAM_DOMAIN;
  const aud = env.CF_ACCESS_AUD;

  if (!teamDomain || !aud) {
    return new Response(
      "Server misconfiguration: CF Access variables are not set.",
      { status: 500 },
    );
  }

  const token = context.request.headers.get("CF-Access-JWT-Assertion");
  if (!token) {
    return new Response("Forbidden: missing access token.", { status: 403 });
  }

  const isValid = await verifyJwt(token, teamDomain, aud);
  if (!isValid) {
    return new Response("Forbidden: invalid access token.", { status: 403 });
  }

  return next();
});

export const onRequest = sequence(i18n, adminAuth);

// --- JWT verification helpers ---

interface JwkKey {
  kid: string;
  kty: string;
  n: string;
  e: string;
  alg: string;
}

async function fetchJwks(teamDomain: string): Promise<JwkKey[]> {
  const certsUrl = `https://${teamDomain}.cloudflareaccess.com/cdn-cgi/access/certs`;

  const cache = caches.default;
  const cacheKey = new Request(certsUrl);
  let response = await cache.match(cacheKey);

  if (!response) {
    response = await fetch(certsUrl);
    if (!response.ok) return [];

    const headers = new Headers(response.headers);
    headers.set("Cache-Control", "max-age=3600");
    response = new Response(response.body, { ...response, headers });

    await cache.put(cacheKey, response.clone());
  }

  const data = (await response.json()) as { keys: JwkKey[] };
  return data.keys ?? [];
}

function base64UrlDecode(str: string): Uint8Array<ArrayBuffer> {
  const padded = str.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

async function verifyJwt(
  token: string,
  teamDomain: string,
  aud: string,
): Promise<boolean> {
  const parts = token.split(".");
  if (parts.length !== 3) return false;

  const [headerB64, payloadB64, signatureB64] = parts;

  // Decode and validate header
  let header: { alg?: string; kid?: string };
  try {
    header = JSON.parse(new TextDecoder().decode(base64UrlDecode(headerB64)));
  } catch {
    return false;
  }
  if (header.alg !== "RS256" || !header.kid) return false;

  // Decode and validate payload
  let payload: { aud?: string[]; exp?: number };
  try {
    payload = JSON.parse(new TextDecoder().decode(base64UrlDecode(payloadB64)));
  } catch {
    return false;
  }

  // Check expiry
  if (!payload.exp || payload.exp < Math.floor(Date.now() / 1000)) return false;

  // Check audience
  if (!payload.aud || !payload.aud.includes(aud)) return false;

  // Fetch JWKS and find matching key
  const keys = await fetchJwks(teamDomain);
  const jwk = keys.find((k) => k.kid === header.kid);
  if (!jwk) return false;

  // Import public key and verify signature
  try {
    const cryptoKey = await crypto.subtle.importKey(
      "jwk",
      jwk,
      { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
      false,
      ["verify"],
    );

    const signature = base64UrlDecode(signatureB64);
    const data = new TextEncoder().encode(`${headerB64}.${payloadB64}`);

    return await crypto.subtle.verify(
      "RSASSA-PKCS1-v1_5",
      cryptoKey,
      signature,
      data,
    );
  } catch {
    return false;
  }
}
