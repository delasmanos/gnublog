import { z, type SchemaContext, reference } from "astro:content";

export const postSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    subTitle: z.string().optional(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
    heroImageAltText: z.string().optional(),
    minutesRead: z.string().optional(),
    showHeadingPermalink: z.boolean().optional(),
    showToc: z.boolean().optional(),
    relatedPosts: z.array(reference("blog")).optional(),
    author: reference("band-mates").optional(),
    tags: z.enum(["article", "music-production", "coding"]).default("article"),
    published: z.boolean(),
  });
