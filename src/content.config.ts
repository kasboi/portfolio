import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * Content Collection Schema for Projects
 * Provides type-safe frontmatter validation for project markdown files
 */
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    liveLink: z.string().url(),
    gitLink: z.string(),
    technologies: z.array(z.string()),
    featured: z.boolean().optional().default(false),
    order: z.number().optional().default(99),
  }),
});

export const collections = { projects };
