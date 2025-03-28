import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const systems = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "src/pages" }),
  schema: z.object({
    name: z.string().nonempty(),
  }),
});

export const collections = { systems };
