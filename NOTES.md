# NOTES

## Github

setup github withoput ssh key (repo not found error):

```bash
git remote rm origin

git remote add origin https://GITHUB_USERNAME:PERSONAL_ACCESS_TOKEN@github.com/GITHUB_USERNAME/REPO_NAME.git
```

[generate new token](https://github.com/settings/tokens)

Personal access tokens (classic) function like ordinary OAuth access tokens. They can be used instead of a password for Git over HTTPS, or can be used to authenticate to the API over Basic Authentication.

## features MUST

- last update remark plugin
- publishdate
- flat file cms (decap osr static cms)
- <https://docs.astro.build/en/guides/markdown-content/>
  - disable auto toc via frontmatter

## accounts

- netlify until i have time to develop a selfhosted serveless oauth handler for github auth or other providers (<https://decapcms.org/docs/external-oauth-clients/>)

## serverless cms

- <https://www.control-alt-del.org/blog/serverless-blog-howto/>
- [alternative to decap cms not feature aprity](https://github.com/sveltia/sveltia-cms)
- (local cms in vscode): <https://frontmatter.codes/docs/getting-started>
