import { getCollection, type CollectionEntry } from 'astro:content';

/** All posts, newest first. */
export async function getSortedPosts() {
  return (await getCollection('posts')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** The post's own excerpt, or the first 25 words of its body. */
export function postExcerpt(entry: CollectionEntry<'posts'>) {
  if (entry.data.excerpt) return entry.data.excerpt;
  const words = (entry.body ?? '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links: keep the text
    .replace(/<[^>]+>/g, '')
    .replace(/^#+\s*/gm, '')
    .replace(/[*_`]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ');
  return words.slice(0, 25).join(' ') + (words.length > 25 ? '…' : '');
}
