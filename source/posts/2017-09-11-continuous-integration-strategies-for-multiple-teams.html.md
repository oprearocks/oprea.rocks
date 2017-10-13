---
layout: article
title: "Centralized vs. decentralized CI / CD strategies for multiple teams"
date_created_on: 2017-09-11 02:00 PM
date_published_on: 2017-09-11 02:00 PM
date_modified_on: 2017-09-11 02:00 PM
tags:
  - architecture
  - continuous-integration
  - devops
published: true
author: "Adrian Oprea"
twitter: "@oprearocks"
keywords: continuous integration, continuous delivery, continuous deployment, devops, agile, ci
image: /images/posts/continuous-integration-strategies-for-multiple-teams/post.jpg
---

Last week I saw [this very interesting Twitter thread](https://twitter.com/tdpauw/status/903590379638939648),
about CI/CD strategies for multiple teams.

The question was whether or not one should go on a centralized,
or a decentralized strategy for setting up continuous integration for multiple teams inside the same organization.

This article tries to distil the key points of that discussion.

READMORE

## The centralized model

You might be right, thinking that going centralized is the best choice. Everybody uses the same infrastructure,
the same technologies and future, cross-cutting projects can look like a breeze.

This is true if you live in an ideal software development world. When reality kicks in, you realize that
you may have teams working with the same technology stack but with different needs in terms of tooling or
build / deployment steps. Their needs might differ when it comes to scripts or environment configurations.

Although the initial setup of a centralized CI / CD infrastructure might be a breeze, problems usually arise
when updates are required. This is mostly due to different team / project needs.

I'd say that the only situations when such a setup would work, would be when teams contribute to the same
product. Their development / testing / production environments should be highly standardised.

The centralized model can prove difficult to maintain even for teams supporting the same LOB (Line Of Business).
One of the key benefits of this approach, shared knowledge, might be a small win, compared to  the maintenance
and update costs.

## The decentralized model

First, let me admit that I am biased towards this way of setting up things. This is mostly because I am a big fan of
microservices and service-based architectures. Decoupling / untangling things is one of my core abilities but I
am even happier if things are already decoupled.

Think about it this way: you are implementing microservices at the CI / CD infrastructure level.
Why not extend the Single Responsibility Principle(SRP) to infrastructure, as well? Why would we limit the principle's
application only to software development?

The same same way microservices enable teams to experiment with different technologies and techniques, CI / CD tooling should
do the same. A decentralized model empowers individual teams to make decisions based on their own needs not some pre-configured
corporate policy.

Note that I'm not recommending the elimination of rules. Certain boundaries need to exist, to serve as guidelines for critical
decisions.

The most eloquent example in terms of boundaries is Netflix. They use microservices and they empower their teams to experiment
with different technologies. The only real constraint is that the languages they use should be JVM-based.
Most of their application ecosystem is written in Java, so this means they have a lot of JVM-related knowledge, internally.
It comes natural to them to debug or optimize the performance of any application in their ecosystem.

## The hybrid way

One of the participants to the discussion recommended a hybrid model. They said they are running a decentralized continuous
integration setup and a centralized contiunous delivery/deployment. This sounds really interesting as CI is mostly the
bottleneck in this situation. It is the place where team needs might differ.

Deployment, in its simplest form, is just a matter of copying a build artifact on a server and running a couple of commands
(app stop, app start, etc.). This can be easily standardised and maintained as a set of per-team configurations running on the same
infrastructure.

Although I am not 100% convinced about this model, it definitely seems like a better way of doing things, mostly because
it is more close to the "middle way". It's something that both centralized and decentralized supporters would go with.

There's a gist I created related to this hybrid approach, if you need more info. You can find it [here](https://gist.github.com/oprearocks/a7c3f2b5d0ca6cfb45a5af60f68eb7f2).

## Conclusions

A centralized model would suit teams and projects with a high degree of process standardization.
This means both the teams and the projects are mature enough, their needs have thoroughly been assessed and taken care of.

A decentralized model is suitable for teams and projects where the degree of uncertainty is higher.
It also takes into account the human component. It is flexible enough to make people feel empowered
in making their own technology chooices. There is no company-wide imposed set of technologies.

It is beneficial to set clear boundaries and guidelines to prevent people from abusing the freedom this
approach offers.

The hybrid model is also a good way of approaching uncertainty while maintaining structure and standards.
It empowers teams to use creativity and freeform approaches, for the things that immediately impact their project.
At the same time, it prevents team decisions that are *too creative*, from impacting in a negative way, the product their project integrates into.

The freedom this approach offers can usually be felt at the continuous integration level, in the form of team-specific plugins,
extensions, scripts, task runners or reporting software.

Tools should be chosen based on needs, not based on protocols. As long as they keep a common core,
teams should be allowed to vary their toolchain.

## Resources

- [Thierry de Pauw's initial Twitter thread](https://twitter.com/tdpauw/status/903590379638939648){:target="_blank"}
- [Nico Mommaerts's answer](https://twitter.com/nico_mommaerts/status/903683121312399360){:target="_blank"}
- [The Gist I created from Nico's Pastebin](https://gist.github.com/oprearocks/a7c3f2b5d0ca6cfb45a5af60f68eb7f2){:target="_blank"}

> Photo credits:
>
> [David Brossard](https://www.flickr.com/photos/string_bass_dave/) &mdash; [Centralized Traffic Control](https://flic.kr/p/pG5oyt)
