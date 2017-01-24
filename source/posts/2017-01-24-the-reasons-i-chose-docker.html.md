---
layout: article
title: "The reasons I chose Docker"
date_created_on: 2016-01-20 10:00 AM
date_published_on: 2017-01-24 2:00 PM
date_modified_on: 2017-01-24 2:00 PM
campaign: docker
tags:
  - infrastructure
  - devops
published: true
author: "Adrian Oprea"
twitter: "@opreaadrian"
keywords: productivity, infrastructure, devops, docker, containers
image: /images/posts/moving-to-the-future-with-docker/post.jpg
---

Technology changes really fast. Sometimes, it changes so fast you don't even
notice when bleeding-edge novelties become industry standard.
In this article I will be using my 2 years of experience migrating projects to
Docker and give you the necessary arguments to help you make the decision to
migrate to Docker.

READMORE

## Table of contents
{:.no_toc}

* Table of contents(will contain all headings execept the "Table of contents" one above)
{:toc}

## What is Docker?

In short, according to the official website *"Docker is a software containerization platform"*.
It allows you to bundle you application code / artifacts along with the
environment used to run your application, into a single chunk called the Docker image.
For even more plagiarism, the OS-specific download description reads like this:

> An integrated, easy-to-deploy environment for building, assembling,
> and shipping applications [...]

Docker is not a virtualization platform. Although some people find it easier to
understand Docker images by comparing them to virtual machines, the concepts
are divergent.
To get a clear view on the difference between VMs and Docker containers, have a look
at the images below, coming straight from Docker's official website.

**Virtual machines** contain your application and an entire operating system along with libraries,
binaries. If you're lucky, this can mean a couple hundreds of MBs. Most of the times, their size
tends to be in the realm of GBs.

![Virtual Machines](/images/posts/moving-to-the-future-with-docker/WhatIsDocker_2_VMs_0-2_2.png)

**Containers** also include your application and its dependencies but they share the kernel and certain
libraries. They run as isolated processes and can run on any infrastructure.

![Docker containers](/images/posts/moving-to-the-future-with-docker/WhatIsDocker_3_Containers_2_0.png)

Let's say you have a NodeJS application. If you want to run it in a container,
all you need to do is create a file and add some directives to it.
The file is called `Dockerfile` and it defines the base OS image
the application will run on. It also contains some instructions for copying
your application code to the image and the ports your application exposes.

```dockerfile
# Dockerfile

## Use the NodeJS 7.x.x base image from the official docker registry
FROM node:7

## Copy application code to a path in the image
COPY . /opt/application

## Expose the port that the application uses to accept requests
EXPOSE 8080

## The command used to start your application
## Automatically called when instantiating a container
CMD node /opt/application/app.js
```

What you just created is a consistent environment to run your application, using
the latest version of NodeJS 7.

For more in-depth info about this topic, here are 2 wonderful resources:

- [How is Docker different from a normal virtual machine? (StackOverflow)](http://stackoverflow.com/questions/16047306/how-is-docker-different-from-a-normal-virtual-machine)
- [What is Docker? (Docker official site)](https://www.docker.com/what-docker)

We talked about what Docker is, and what it is not. Now, let's talk about the advantages
it brings to the table.

## No more *"It works on my machine"*

Have you ever heard this? If you're lucky, you heard it during QA. Unfortunately,
I've heard and said this during demo meetings or after deploying to production.
Most of the times, there's an inconsistency between what's installed on your machine and
what you're running in production.

Migrating your development environment to Docker, enables you to run your production
environment on a your local machine. This shortens the feedback loop.
The biggest productivity win here, is that you don't have to wait until the code reaches
staging or production to know that you're using an unavailable feature.

> The shorter the feedback loop, the faster you fail, the faster you learn, the faster you adapt.
>
> &mdash; Anonymous

## Infrastructure as code

If you take a look back at our application's `Dockerfile` you quickly realize that
you can add it to version control and operate on it the same way you do with your code.
As an added benefit, services like GitLab offer powerful Docker integrations. If you add
your Dockerfile to the root of your application's repository, and set up a simple GitLab CI
file, you could have your image built automatically, without you having to do anything by hand.

On a side note, I once attended a talk at a conference where the speaker said this:
*"Treat your infrastructure as cattle, not pets"*.
Now, I'm not a big fan of how cattle ar treated in today's economy, but he had
a point. In the past, we used to treat our servers as pets, we manually installed software
on them, we gave them names and we knew their configs by heart. There's no time for that,
today. We need automation, so we need to start treating our infrastructure as disposable items.
If you can automatically create builds of your application, deploy them to a cloud infrastructure
and not care about how resource allocation, load balancing or instance counts are peformed,
you can focus on what is important, delivering a higher value to your clients.

## Docker images are versions of your product

Docker allows you to tag your images when you build them. You can
label each image with the application version that comes bundled inside.
Now think how easy it will be to compare and benchmark them.

## Faster automation

Because the application is bundled along with the environment it runs in, you don't
need to worry about services being started, or available. Everything should be up
and running before your application boots. This allows you to automate stress
tests, end-to-end tests, even deployments with less effort and reduced costs.

## Faster version updates

If you're in a situation where you have to push a new version to production, Docker
enables you to launch it in paralell with your current version and only update the
load balancer once everything is set. Besindes that, containers have a really fast boot time (a couple of seconds)
which makes them suitable for high-traffic, real-time systems.
Need to perform a rollback? Just pull the old image and run it. It's as  simple as that.
Docker containers shut down and boot up fast.

## Shorter feedback loop

As I mentioned before, having a clone of the production environment, on your development
machines cuts the feedback loop in half. Instead of having to push code to version control,
trigger a build and wait for a deployment on a staging machine to take place, just to find out
that there's a version mismatch between some libraries, you can get that feedback while
developing.

As with any choice in life, adopting Docker doesn't come without its drawbacks. Below,
I will outline the issues I found during my 2 years working with Docker.

## Challenge 1: Culture

Docker is not just another technology your development team adopts to get instantly productive.
It requires a shift in mentality.
If the responsibility for the shift falls only on the developer, your organization
won't reap all the benefits.
It is important that your organizational culture is an open one.
You should empower your employees to emit ideas and take action based on them.
If the people aren't encouraged to experiment, research topics
unrelated to the task at hand, they will most likely treat Docker as another stone
they'll have to drag around to do their job.

We are creatures of habit and we're reluctant to abrupt change. Even in the healthiest
organisations, there will still be some people who hate change. This doesn't mean they
should be fired, nor that they are right and you should not use Docker. You just have
to make small changes instead of coming in one day and say *"From now on, we're using Docker!"*.

## Challenge 2: Lack of expertise

This is hard to avoid. Especially with Docker, being a young technology. You won't find
senior Docker specialists on the market, right now. Except for the people who contributed to the project
itself.

If you plan on building your skills in-house, without any external trainings or
consultants coming in and helping you to get started, you should be patient. Docker makes
infrastructure more accessible for developers. If you have devs working on it, give
them time to adapt, they're pretty resourceful people 😊 .

## Conclusions

There are clearly more benefits than there are drawbacks, and this article would get really big
if I would enumerate all of them.
If you take anything away from this article, I would like you to remember that Docker offers you
platform independence and enables you to bundle your application along with its surrounding environment.

> Photo credits:
> [kyohei ito](https://www.flickr.com/photos/134416355@N07/) &mdash; [Docker-3](https://flic.kr/p/Q2dWtq)
