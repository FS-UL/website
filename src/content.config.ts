import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      author: z.string(),
      // Optional; the newsroom falls back to the first 25 words of the post.
      excerpt: z.string().optional(),
      // Set to true to show the post as a slide in the home page carousel.
      featured: z.boolean().default(false),
      // Optional background for the carousel slide; falls back to the default team photo.
      image: image().optional(),
    }),
});

// Events shown in the home page carousel until their date has passed.
const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      location: z.string().optional(),
      // Optional description shown under the title.
      excerpt: z.string().optional(),
      // Optional link; the slide gets a button when this is set.
      link: z.string().url().optional(),
      linkText: z.string().default('Find out more'),
      image: image().optional(),
    }),
});

export const collections = { posts, events };
