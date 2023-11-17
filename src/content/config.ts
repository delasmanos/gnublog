import { defineCollection } from "astro:content";
import { bandMateSchema } from "schemas/bandmates-schema";
import { navigationSchema } from "schemas/navigation-schema";
import { postSchema } from "schemas/post-schema";
import { settingsSchema } from "schemas/settings-schema";

const bandMates = defineCollection({
  type: "content",
  schema: bandMateSchema,
});
const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: postSchema,
});
const settings = defineCollection({
  type: "data",
  schema: settingsSchema,
});
const navigation = defineCollection({
  type: "data",
  schema: navigationSchema,
});

export const collections = {
  blog,
  settings,
  navigation,
  "band-mates": bandMates,
};
