import { z } from "astro:content";

const NavItemSchema = z.object({
  displayName: z.string(),
  path: z.string(),
});

export const navigationSchema = z.array(NavItemSchema);
