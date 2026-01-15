import { defineCollection, z } from 'astro:content';

const thinking = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['essay', 'note', 'talk']),
    topics: z.array(z.string()),
    publishedAt: z.date(),
    updatedAt: z.date(),
    status: z.enum(['draft', 'growing', 'evergreen']).optional(),
  }),
});

const lab = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['active', 'archived', 'experiment']),
    embedType: z.enum(['react', 'iframe', 'link']),
    embedUrl: z.string().optional(),
    image: z.string().optional(),
    date: z.date(),
    topics: z.array(z.string()),
  }),
});

export const collections = { thinking, lab };
