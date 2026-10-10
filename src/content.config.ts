import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const localized = z.object({ en: z.string(), pl: z.string() })

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number().int(),
      // Featured projects are on the home page; every project is on /projects/ with a case study.
      featured: z.boolean().default(true),
      // Shown as a plain label on the card and the case study while the project is still being built.
      status: z.enum(['in-progress']).optional(),
      // Card copy is shown on both language versions of the home page.
      tagline: localized,
      summary: localized,
      // Meta description for the case study when the summary runs past what search results show.
      description: z.string().max(160).optional(),
      facts: z.array(z.object({ value: z.string(), label: localized })).max(3),
      stack: z.array(z.string()),
      repo: z.string().url(),
      releases: z.string().url().optional(),
      // Screenshots are added by hand later; nothing renders while they are missing.
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
})

export const collections = { projects }
