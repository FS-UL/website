import type { APIRoute } from 'astro';
import { base } from '../consts';

export const GET: APIRoute = ({ site }) =>
  new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${new URL(`${base}/sitemap-index.xml`, site).href}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
