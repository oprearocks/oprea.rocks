---
layout: article
title: "How to properly override the ENTRYPOINT using docker run"
date_created_on: 2017-01-17 4:15 PM
date_published_on: 2017-01-17 4:40 PM
date_modified_on: 2017-01-17 4:40 PM
tags:
  - devops
published: true
author: "Adrian Oprea"
twitter: "@oprearocks"
keywords: docker, devops, cloud, infrastructure as a service, productivity, software development, automation, continuous integration, continuous delivery, continuous deployment
image: /images/posts/how-to-properly-override-the-entrypoint-using-docker-run/post.jpg
---

As we all know, Docker is an amazing piece of software. I don't want to go over its benefits. That's
for another article, coming very soon. What I do want to share with you is the way to properly override
a Docker image `entrypoint` when using `docker run`.

READMORE

From [the official documentation](https://docs.docker.com/engine/reference/run/#entrypoint-default-command-to-execute-at-runtime):

> The ENTRYPOINT of an image is similar to a COMMAND because it specifies **what executable to run**
> when the container starts, but it is (purposely) more difficult to override

Keep in mind the "**what executable to run**" part!

Many people trying to override the `ENTRYPOINT` at runtime, using `docker run` will make mistake
of passing the executable's arguments directly after it, like so (happy horizontal scrolling):

```shell
docker run --entrypoint "/bin/ls -al /root" debian
```

What is the problem here? Well the documentation clearly states that the `ENTRYPOINT` only specifies
**the executable** to run, when the container starts.

So they get an error like below

```shell
container_linux.go:247: starting container process caused "exec: \"/usr/bin/ls -al\": stat /usr/bin/ls -al: no such file or directory"
docker: Error response from daemon: oci runtime error: container_linux.go:247: starting container process caused "exec: \"/usr/bin/ls -al\": stat /usr/bin/ls -al: no such file or directory".
ERRO[0001] error getting events from daemon: net/http: request canceled
```

There is something a bit counter-intuitive here and if you take a good look at the example commands
on [the documentation page](https://docs.docker.com/engine/reference/run/#entrypoint-default-command-to-execute-at-runtime),
you'll see that the arguments are being passed after the image name.

```shell
docker run -it --entrypoint /usr/bin/redis-cli example/redis --help
```

This means that if we want to pass the `-al` flags to our `ls` command we should write the whole thing
like this:

```shell
docker run --entrypoint "/bin/ls" debian -al /root
```

Hope this clears things out for you and saves you a ton of headaches.

## Updates

1. Add link to the proper section in the official documentation.

> Photo credits:
> [kyohei ito](https://www.flickr.com/photos/134416355@N07/) --- [Docker-4](https://flic.kr/p/Q2dXow)
