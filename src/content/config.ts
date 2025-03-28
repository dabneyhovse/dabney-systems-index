import { defineCollection, z } from "astro:content";

const systems = defineCollection({
  type: "content",
  schema: z.object({}),
});

export const collections = { systems };
