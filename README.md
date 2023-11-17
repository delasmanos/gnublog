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

- author rewrite
<https://stackoverflow.com/questions/750172/how-do-i-change-the-author-and-committer-name-email-for-multiple-commits>
`
2132

NOTE: This answer changes SHA1s, so take care when using it on a branch that has already been pushed. If you only want to fix the spelling of a name or update an old email, Git lets you do this without rewriting history using .mailmap. See my other answer.

Using Rebase
First, if you haven't already done so, you will likely want to fix your name in git-config:

git config --global user.name "New Author Name"
git config --global user.email "<email@address.example>"
This is optional, but it will also make sure to reset the committer name, too, assuming that's what you need.

To rewrite metadata for a range of commits using a rebase, do

git rebase -r <some commit before all of your bad commits> \
    --exec 'git commit --amend --no-edit --reset-author'
--exec will run the git commit step after each commit is rewritten (as if you ran git commit && git rebase --continue repeatedly).

If you also want to change your first commit (also called the 'root' commit), you will have to add --root to the rebase call.

This will change both the committer and the author to your user.name/user.email configuration. If you did not want to change that config, you can use --author "New Author Name <email@address.example>" instead of --reset-author. Note that doing so will not update the committer -- just the author.

Single Commit
If you just want to change the most recent commit, a rebase is not necessary. Just amend the commit:

 git commit --amend --no-edit --reset-author
Entire project history
git rebase -r --root --exec "git commit --amend --no-edit --reset-author"
For older Git clients (pre-July 2020)
-r,--rebase-merges may not exist for you. As a replacement, you can use -p. Note that -p has serious issues and is now deprecated.
`

- tailwind integration to allow injecting postcssplugins like postcss-preset-env and enable nesting in css files
- webform for contact with reactt and zod
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
