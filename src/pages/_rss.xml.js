import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
  const posts = await getCollection("blog");

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    iems:[
      {title: 'bernd',
      pubDat: '2323-11-11',
      link: '/'
    }
    ]
    // items: posts.map((post) => ({
    //   tite: post.data.title,
    //   pubDate: post.data.pubDate,
    //   link: `/blog/${post.slug}/`,
    // })),
  });
}
