import { getCollection, type CollectionEntry } from "astro:content";
type GetPublishedPostFn = (
  sortByDate?: "latest-first" | "latest-last",
  filter?: (entry: CollectionEntry<"blog">) => unknown,
) => Promise<CollectionEntry<"blog">[]>;

export const getPublishedPosts: GetPublishedPostFn = async (
  sortByDate = "latest-first",
  filter,
) =>
  (
    await getCollection("blog", (p) => {
      if (filter) {
        return p.data.published && filter(p);
      }
      return p.data.published;
    })
  ).sort((a, b) =>
    sortByDate === "latest-first"
      ? b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
      : a.data.pubDate.valueOf() - b.data.pubDate.valueOf(),
  );
