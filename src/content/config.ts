import {
  defineCollection,
  z,
  type SchemaContext,
  reference,
} from "astro:content";

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
const bandMateSchema = ({ image }: SchemaContext) =>
  z.object({
    name: z.string(),
    nickName: z.string(),
    postion: z.string(),
    avatar: image(),
    memberSince: z.union([z.coerce.date(), z.string()]).optional(),
    aboutMe: z.string(),
  });

const bandMates = defineCollection({
  type: "data",
  schema: bandMateSchema,
});
const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: postSchema,
});

const settings = defineCollection({
  type: "data",
  schema: z.object({
    siteName: z.string(),
    brandSlogan: z.string(),
    domain: z.string(),
    email: z.string().email(),
    telephone: z.object({
      prefix: z.string(),
      number: z.string(),
    }),
  }),
});

const NavItemSchema = z.object({
  displayName: z.string(),
  path: z.string(),
});

const navigation = defineCollection({
  type: "data",
  schema: z.array(NavItemSchema),
});

export const collections = {
  blog,
  settings,
  navigation,
  "band-mates": bandMates,
};
