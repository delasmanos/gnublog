import { z, type SchemaContext } from "astro:content";

export const bandMateSchema = ({ image }: SchemaContext) =>
  z.object({
    name: z.string(),
    nickName: z.string(),
    postion: z.string(),
    avatar: image(),
    memberSince: z.string().or(z.coerce.date()).optional(),
    // memberSince: z.union([z.coerce.date(), z.string()]).optional(),
  });
