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
import {loadEnv} from "vite"

const { PUBLIC_BASE_PATH } = loadEnv(process.env.PUBLIC_BASE_PATH, process.cwd(),"");
console.log('conf',PUBLIC_BASE_PATH);

const summaryFn = str => `Open ${str}`;

// https://astro.build/config
export default defineConfig({
  site: 'https://delasmanos.github.io/',
  base: PUBLIC_BASE_PATH,
  markdown: {
    remarkPlugins: [remarkUnwrapImages, remarkReadingTime, [collapsibleToc, {
      test: 'contents',
      summary: summaryFn,
      detailsClassname: 'toc-details-collapse',
      remarkTocOptions: {}
    }]],
    rehypePlugins: [rehypeHeadingIds, [rehypeAutolinkHeadings, {
      behavior: 'append',
      properties: {
        class: 'autolinked-heading'
      },
      content: [h('span.visually-hidden', ' permalink'), s('span.icon-link-value', ' 🔗')]
    }]]
  },
  integrations: [mdx(), sitemap(), 
    tailwind({applyBaseStyles: false})
  ]
});