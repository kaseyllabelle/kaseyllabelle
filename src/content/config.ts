import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    tag: z.string().optional(),
    title: z.string(),
    description: z.string(),
    imageSrc: z.string(),
    imageAlt: z.string(),
    stack: z.string().optional(),
    sortOrder: z.number()
  }),
});

export const collections = {
  projects: projectsCollection,
};