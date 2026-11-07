import { getCollection } from 'astro:content';
import { base, formatDate } from '../consts';
import { getSortedPosts, postExcerpt } from './posts';

export interface Slide {
  /** Small label above the title, e.g. "Event" or "News". */
  kind: string;
  title: string;
  /** Date / location / author line. */
  meta?: string;
  text?: string;
  href?: string;
  cta?: string;
  image?: ImageMetadata;
}

/**
 * Slides for the home page carousel: upcoming events (soonest first), then featured posts (newest first).
 * The site is static, so an event drops off the carousel on the first build after its date.
 */
export async function getHighlights(limit = 4): Promise<Slide[]> {
  const startOfToday = new Date();
  startOfToday.setUTCHours(0, 0, 0, 0);

  const events = (await getCollection('events'))
    .filter((e) => e.data.date >= startOfToday)
    .sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf())
    .map<Slide>((e) => ({
      kind: 'Event',
      title: e.data.title,
      meta: [formatDate(e.data.date), e.data.location].filter(Boolean).join(' · '),
      text: e.data.excerpt,
      href: e.data.link,
      cta: e.data.linkText,
      image: e.data.image,
    }));

  const posts = (await getSortedPosts())
    .filter((p) => p.data.featured)
    .map<Slide>((p) => ({
      kind: 'News',
      title: p.data.title,
      meta: `${formatDate(p.data.date)} · By ${p.data.author}`,
      text: postExcerpt(p),
      href: `${base}/${p.id}/`,
      cta: 'Read more →',
      image: p.data.image,
    }));

  return [...events, ...posts].slice(0, limit);
}
