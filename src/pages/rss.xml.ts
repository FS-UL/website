import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { SITE_NAME, SITE_DESCRIPTION, base } from '../consts';
import { getSortedPosts, postExcerpt } from '../lib/posts';

const escapeXml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const GET: APIRoute = async ({ site }) => {
  const posts = await getSortedPosts();
  return rss({
    title: `${SITE_NAME} news`,
    description: SITE_DESCRIPTION,
    site: site!,
    xmlns: { dc: 'http://purl.org/dc/elements/1.1/' },
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: postExcerpt(post),
      link: `${base}/${post.id}/`,
      // RSS <author> must be an email address, so credit the writer with dc:creator instead.
      customData: `<dc:creator>${escapeXml(post.data.author)}</dc:creator>`,
    })),
  });
};
