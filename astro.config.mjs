import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkUnwrapImages from 'remark-unwrap-images';
import { remarkReadingTime } from "./src/server/remark-plugins/remark-reading-time.mjs";
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { h, s } from 'hastscript';
import { collapsibleToc } from "./src/server/remark-plugins/astro-collapsible-toc.mjs";
import tailwind from "@astrojs/tailwind";
import { loadEnv } from "vite";
import { PERMALINK_CLASSNAME, TOC_DETAILS_CLASSNAME } from "./src/server/remark-plugins/consts";
import react from "@astrojs/react";
const {
  PUBLIC_BASE_PATH
} = loadEnv(process.env.PUBLIC_BASE_PATH, process.cwd(), "");
console.log('astro.config basepath: ', PUBLIC_BASE_PATH);
const summaryFn = str => `Open ${str}`;


// https://astro.build/config
export default defineConfig({
  site: 'https://delasmanos.github.io/',
  base: PUBLIC_BASE_PATH,
  markdown: {
    remarkPlugins: [remarkUnwrapImages, remarkReadingTime, [collapsibleToc, {
      test: 'contents',
      summary: summaryFn,
      detailsClassname: TOC_DETAILS_CLASSNAME,
      remarkTocOptions: {}
    }]],
    rehypePlugins: [rehypeHeadingIds, [rehypeAutolinkHeadings, {
      behavior: 'append',
      properties: {
        class: PERMALINK_CLASSNAME
      },
      content: [h('span.visually-hidden', ' permalink'), s('span.icon-link-value', ' 🔗')]
    }]]
  },
  integrations: [mdx(), sitemap(), tailwind({
    applyBaseStyles: false
  }), react()]
});