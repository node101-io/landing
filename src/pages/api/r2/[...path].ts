import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ params, locals }) => {
  const path = params.path;
  if (!path) return new Response('Not found', { status: 404 });

  const R2 = locals.runtime?.env?.R2;
  if (!R2) return new Response('R2 not available', { status: 500 });

  const object = await R2.get(path);
  if (!object) return new Response('Not found', { status: 404 });

  return new Response(object.body, {
    headers: {
      'Content-Type': object.httpMetadata?.contentType || 'application/octet-stream',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
