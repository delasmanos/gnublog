import { getCollection, type CollectionEntry } from "astro:content";
type GetPublishedPostFn = (
  sortByDate?: "latest-first" | "latest-last",
  filter?: (entry: CollectionEntry<"blog">) => unknown,
) => Promise<CollectionEntry<"blog">[]>;

export const getPublishedPosts: GetPublishedPostFn = async (
  sortByDate = "latest-first",
  filter,
) =>
  (await getCollection("blog", (p) => defaultFilter(p, filter))).sort((a, b) =>
    sortByDate === "latest-first"
      ? b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
      : a.data.pubDate.valueOf() - b.data.pubDate.valueOf(),
  );
type filter = (entry: CollectionEntry<"blog">, f?: filter) => unknown;
const defaultFilter: filter = (entry, f) => {
  const baseCondition = import.meta.env.PROD ? entry.data.published : true;
  if (f) {
    return baseCondition && f(entry);
  }
  return baseCondition;
};
