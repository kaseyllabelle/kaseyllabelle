import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      tag: z.string().optional(),
      title: z.string(),
      description: z.string(),
      thumbnailSrc: image(),
      thumbnailAlt: z.string(),
      stack: z.string().optional(),
      sortOrder: z.number()
    }),
});

export const collections = {
  projects: projectsCollection,
};