import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPublishedPosts } from "~util/collection-helper";
import { LINK_PREFIX, SITE_DESCRIPTION, SITE_TITLE } from "../consts";

const base = LINK_PREFIX;

export const GET = async (context: APIContext) => {
  const posts = await getPublishedPosts();

  return rss({
    title: SITE_TITLE + " blog",
    description: SITE_DESCRIPTION,
    site: context.site ?? "",
    items: posts.map((post) => ({
      title: `${post.data.title}${
        post.data.subTitle ? " - " + post.data.subTitle : ""
      }`,
      pubDate: post.data.pubDate,
      link: `${base}/blog/${post.slug}/`,
    })),
  });
};
