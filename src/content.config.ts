import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    // Optional; the newsroom falls back to the first 25 words of the post.
    excerpt: z.string().optional(),
  }),
});

export const collections = { posts };
