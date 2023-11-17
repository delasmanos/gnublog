import { z } from "astro:content";

export const settingsSchema = z.object({
  siteName: z.string(),
  siteDescription: z.string(),
  brandSlogan: z.string(),
  domain: z.string(),
  email: z.string().email(),
  telephone: z.object({
    prefix: z.string(),
    number: z.string(),
  }),
});
