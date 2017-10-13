---
layout: article
title: "[VIDEO] How to copy a file from a Docker container to the host machine"
date_created_on: 2017-09-06 6:00 PM
date_published_on: 2017-09-06 6:00 PM
date_modified_on: 2017-09-06 6:00 PM
tags:
  - docker
  - devops
published: true
author: "Adrian Oprea"
twitter: "@oprearocks"
keywords: docker, devops, tips, automation, aws
image: /images/posts/copy-files-from-docker-containers-to-the-host-machine/post.jpg
---

I created a short video to help you understand the basics of using the `docker cp` command.

It is meant to help people who are using Docker understand how to copy a file from a running Docker container to their host machine. In my case, I'm using a container I built for a personal project, which creates PDF documents from websites. The generated document, resides exclusively inside the container. It is then copied using `docker cp` to my host machine, where I can open and inspect it.

READMORE

## The video
<br>
<iframe width="100%" height="400" src="https://www.youtube.com/embed/KtujZdV3G1E" frameborder="0" allowfullscreen></iframe>
<br>

> Photo credits:
>
> [Matt Brown](https://www.flickr.com/photos/londonmatt/) &mdash; [Dockers sculpture](https://flic.kr/p/rKPmYB)
