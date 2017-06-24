---
layout: article
title: "Fix Ctrl-P indexing in Vim/NeoVim"
date_created_on: 2017-01-12 09:30 PM
date_published_on: 2017-01-12 09:30 PM
date_modified_on: 2017-01-13 12:00 PM
tags:
  - productivity
published: true
author: "Adrian Oprea"
twitter: "@oprearocks"
keywords: productivity, vim, neovim, nvim, gvim, vi, editor, ctrlp, ctrl-p, plugin, fuzzy finder
image: /images/posts/fix-ctrlp-indexing/post.jpg
---

I started using NeoVim a year ago and I siwtch between it and Visual Studio Code quite often. I use NeoVim
mostly when I do text editing. I use it almost exclusively when writing blog articles, notes or doing research.

In the past couple of weeks, whenever I tried to use Ctrl-P to find an article and edit it, it seemed like
it could not find anything in my `posts` directory. I tried other directories and had the same behavior.

This is a short post in which I'd like to share the solution to my problem, as many others might have the same issue.

READMORE

At first I thought there was a Python issue because I'm using `pymatcher` as `ctrlp_match_func` as it is supposed to make things fast.
This was fuelled by the fact that [YouCompleteMe](https://valloric.github.io/YouCompleteMe/) was complaining about Python support.

Finally, today I found [this comment of the original plugin author](https://github.com/kien/ctrlp.vim/issues/234#issuecomment-6926482), on an issue similar to mine.

As far as my problem goes, all I had to do was to run `:CtrlPClearAllCaches` and allow the plugin to re-index the projects I was working on, at startup.

Hope it helps!

> Photo credits:
> [rachaelvoorhees](https://www.flickr.com/photos/rachaelvoorhees/) --- [i'll give YOU a tip...](https://flic.kr/p/2gcwRA)
