import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Static pages are discovered from src/pages; anything dynamic or non-HTML is excluded.
const pageFiles = import.meta.glob('./*.astro');
const staticPaths = Object.keys(pageFiles)
  .map((f) => f.replace('./', '').replace('.astro', ''))
  .filter((n) => n !== '404' && !n.startsWith('['))
  .map((n) => (n === 'index' ? '/' : `/${n}/`));

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection('posts');
  const entries = [
    ...staticPaths.map((path) => ({ path, lastmod: undefined as Date | undefined })),
    ...posts.map((p) => ({ path: `/${p.id}/`, lastmod: p.data.date })),
  ].sort((a, b) => a.path.localeCompare(b.path));

  const urls = entries
    .map(
      (e) =>
        `  <url>\n    <loc>${new URL(e.path, site).href}</loc>${
          e.lastmod ? `\n    <lastmod>${e.lastmod.toISOString().slice(0, 10)}</lastmod>` : ''
        }\n  </url>`,
    )
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
