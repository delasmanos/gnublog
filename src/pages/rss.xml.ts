import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPublishedPosts, getSiteSettings } from "~util/collection-helper";

const { siteDescription, siteName } = await getSiteSettings();

export const GET = async (context: APIContext) => {
  if (!context.site) {
    throw new Error(
      'In order to construct the right urls for the feed, you must set the stie config to the url of your Blog. eg.: "https://www.myblog.com"',
    );
  }
  const posts = await getPublishedPosts();

  return rss({
    title: siteName + " blog",
    description: siteDescription,
    site: context.site ?? "",
    items: posts.map((post) => ({
      title: `${post.data.title}${
        post.data.subTitle ? " - " + post.data.subTitle : ""
      }`,
      pubDate: post.data.pubDate,
      link: `${context.site?.href}/blog/${post.slug}/`,
    })),
  });
};
