import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION, LINK_PREFIX } from "../consts";
import type { APIContext } from "astro";
const base = LINK_PREFIX;
export const GET = async (context: APIContext) => {
  const posts = await getCollection("blog");

  return rss({
    title: SITE_TITLE + " blog",
    description: SITE_DESCRIPTION,
    site: context.site ?? "",
    // items: [{ title: "bernd", pubDate: "2323-11-11", link: "/" }],
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      link: `${base}/blog/${post.slug}/`,
    })),
  });
};
