---
title: Git tricks
description: Hot to defat your best friend
pubDate: NOV 17 2023
heroImage: "./chaos-rehearsal-1.jpg"
heroImageAltText: some image
showHeadingPermalink: true
showToc: true
author: delasmanos
tags: article
published: true
---

## Delete all merged bbranches

git branch --merged | egrep -v "(^\*|main)" | xargs git branch -d

## Reqrite commiter name

before set your username

 ```shell
git config user.email <me@me.me>
git config user.name "Me idioti"
```

or

```nano .git/config``` and add manualle like:

```shell

[user]
    name = MEEMEME
    email = me@me.me
```

## Single Commit

[source](https://stackoverflow.com/questions/750172/how-do-i-change-the-author-and-committer-name-email-for-multiple-commits)

If you just want to change the most recent commit, a rebase is not necessary. Just amend the commit:

 ```shell
 git commit --amend --no-edit --reset-author
 ```

## Entire project history

 ```shell

git rebase -r --root --exec "git commit --amend --no-edit --reset-author"
```
