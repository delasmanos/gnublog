# GNU Band website

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support
- ✅ Configurable TOC
- ✅ CMS funcionality via Decap CMS (not yet full implemented TODOS: create custom backend so non githubusers can login and to get rid of the dependency to netlify)
- ✅ optimized by jamstack

## TODO

- [ ] Fix combine PRs workflow or install github [cli](<https://github.com/cli/cli>). [info](https://marcreichel.dev/blog/combine-dependabot-pull-requests)
- [ ] Pagination
- [ ] Category list

## 🚀 Project Structure

```text
.
├── astro.config.mjs
├── directory-structure-.txt
├── package-lock.json
├── package.json
├── public
│   ├── admin
│   │   └── config.yml
│   ├── favicon.svg
│   ├── fonts
│   └── images
├── src
│   ├── assets
│   │   ├── images
│   │   └── svg
│   ├── components
│   │   ├── atoms
│   │   ├── molecules
│   │   └── organisms
│   ├── consts.ts
│   ├── content
│   │   ├── blog
│   │   ├── config.ts
│   │   ├── navigation
│   │   │   ├── footer.json
│   │   │   └── main.json
│   │   ├── page
│   │   └── settings
│   │       └── site.json
│   ├── env.d.ts
│   ├── layouts
│   ├── pages
│   │   ├── blog
│   │   └── rss.xml.js
│   ├── server
│   │   └── remark-plugins
│   │       ├── astro-collapsible-toc.mjs
│   │       ├── patched-remark-collapse.mjs
│   │       └── remark-reading-time.mjs
│   ├── styles
│   │   └── global.css
│   └── util
│       ├── id.ts
│       └── reading-time-formatter.ts
├── tailwind.config.mjs
└── tsconfig.json

```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

It also contains data collections so it's possible to reference data in a frontmatter block

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `"lighthouse"`            | Spin up a http-server and serve the build and optimized site to check lighthouse scores                     |
| `"dir-tree"`              | Generates a dir tree so one can copy it and paste it into markdown                   |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
