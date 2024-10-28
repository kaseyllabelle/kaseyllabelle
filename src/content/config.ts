import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    sortOrder: z.number(),
    tag: z.string().optional(),
    title: z.string(),
    description: z.string(),
    imageSrc: z.string(),
    imageAlt: z.string(),
    stack: z.string().optional()
  }),
});

export const collections = {
  projects: projectsCollection,
};