import { defineCollection, z } from "astro:content";
export const postSchema = ({ image }) =>
  z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
    heroImageAltText: z.string().optional(),
    minutesRead: z.string().optional(),
    showHeadingPermalink: z.boolean().optional(),
    showToc: z.boolean().optional(),
  });
const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: postSchema,
});

// const page = defineCollection({
//   schema: z.object({
//     title: z.string(),
//     description: z.string(),
//     subTitle: z.string().optional(),
//     heroImage: z.string().optional(),
//   }),
// });

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
    address: z.object({
      street: z.string(),
      zip: z.string(),
    }),
    officeHours: z.array(
      z.object({
        time: z.string(),
        day: z.string(),
      }),
    ),
    telephoneHours: z.array(
      z.object({
        time: z.string(),
        day: z.string(),
      }),
    ),
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
export const collections = { blog, settings, navigation };
