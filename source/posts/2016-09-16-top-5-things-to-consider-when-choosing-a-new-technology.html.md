---
layout: article
title: "Top 5 things to consider when choosing a new technology"
date_created_on: 2016-09-16 10:00:00 AM
date_published_on: 2016-09-16 10:00:00 AM
date_modified_on: 2016-09-16 10:00:00 AM
permalink: /top-5-things-to-consider-when-choosing-a-new-technology/
categories:
  - prouctivity
tags:
  - productivity
  - architecture
  - libraries
  - frameworks
published: true
author: "Adrian Oprea"
twitter: "@opreaadrian"
keywords: productivity, scalability, technologies, software development, recipes, javascript, reactjs, react, angular, angular2, aurelia, libraries, front-end
image: /images/posts/top-5-things-to-consider-when-choosing-a-new-technology/post.jpg
---

There is a saying that naming things is the most difficult part of software development and it is 100% true. At the same time, choosing technologies, libraries, platforms or programming languages can be just as hard.
There are many aspects to consider, besides how we feel about it or if it is trendy or not. Judging a framework, for example, only by its popularity and how bad you want to work with it, without looking at some numbers is a thing I call Resume-Driven Development (RDD) and has nothing to do with healthy software development practices. In this article, I will share with you, my process for making such difficult choices.

READMORE

## Table of contents
{:.no_toc}

* Table of contents(will contain all headings execept the "Table of contents" one above)
{:toc}

## A bit of context

During my career as a consultant, I've always offered technical guidance to clients. From choosing between cloud providers to optimizing the development process to choosing a front-end framework, I've done it all.
One of the frequent issues I faced when working with the the client's team on choosing a specific technology was the lack of process. They either did not have a process or they did not know about it.

If you own a business or you are a decision maker, you should know that migrating to new technologies without a clear process and careful consideration from the teams involved, can be highly detrimental.
I'm not saying that you should have a 3-month analysis process, requiring detailed documentation and sign-off from 5 stakeholders. Far from it! These processes need to be light and streamlined. The only thing I'm suggesting is that a process should be in place and it should be known by all team members.

Think about the following scenario:

Your team chooses a framework they know litte about. They are under pressure and they can't take the time to look at some stats for each available framework. They know little about available learning materials and don't have time to evaluate the learning curve. One of two things can happen, and the latter is more likely than the former:

1. Your company is an early adopter of a technology that is about to hit the mainstream. You get to be several steps in front of your competitors.
2. You end up with an unknown technology that only a specific team in your company knows.

If you end up in situation #2, which is almost always the case, not only is your project delivery going to be affected but you might also have trouble hiring the right people further down the road.

## Case study

Let's pretend for a moment that you want to migrate an application written in Flash, to modern web technologies and your team needs to choose the front-end stack to develop on.
I will outline the process you should use to evaluate the most known front-end frameworks/libraries and decide on the stack the team would later use to develop the new application.

## The evaluation process

1. Create a list of (relevant) candidate front-end libraries
2. Establish the evaluation criteria
3. Brief the team on the list and the criteria. Offer useful links for each technology
4. Set up 1 or 2 meetings to discuss, clarify and decide
5. Create a proof of concept using the chosen library

The advantage of having this process is that you can stop after step 5 and decide whether it is worth going with framework X or if you need another round.

Below is a list of the most relevant front-end libraries, in no particular order.

- [Angular 2](https://angular.io/ "Angular 2 official website"){:target="blank"}
- [React.js](https://facebook.github.io/react/ "React JS GitHub page"){:target="blank"} / [Redux](http://redux.js.org "Redux official website"){:target="blank"}
- [Cycle.js](http://cycle.js.org/ "Cycle.js official website"){:target="blank"}
- [Aurelia](http://aurelia.io/ "Aurelia.js official website"){:target="blank"}
- [Vue.js](http://vuejs.org/ "Vue.js official website"){:target="blank"}


## The evaluation criteria

This is the most important aspect of the whole process. This is your filter and it should reflect your actual needs. Listed below are the criteria I use for all my client projects.

### Community size

My recommendation is to stick with a library that has a large community. By community you can think of everything ranging from Twitter hashtags, StackOverflow community, IRC channels, Slack Channels.
Another important aspect is the number of events (meetups, conferences) in your area.

### GitHub activity

A big part of the decision is the GitHub repository. I'm not talking about GitHub stars. I can't tell you the number of times I starred a project that I later forgot about. I'm talking about actual activity.

Take into account the following aspects:

- Contributors (more is better)
- Commits (more is better)
- Resolved / Pending issues (more is better / less is better)
- Pending pull requests (less is better)

Each of the indicators above signal the level of activity and the involvelment of the community in the development / maintenance process. For example, if there are many pull requests and some of them are pretty old and left hanging, that is a clear sign of a slow-moving community. This is probably due to the fact that open-source projects are usually side-projects that people maintain out of passion, outside their working hours.

### Npm stats

This is simple. If it has a lot of downloads that means that it is used. compared to GitHub fork count or stars, which only indicate the level of interest of that community, the download count literally means that the module is in use. I don't have a threshold or an orientative number but always look for the highest number of downloads.

### Official documentation maturity

Sift through the documentation of the library. If you can make sense of it, then you probably have a good candidate for the final round. Note that this doesn't mean everyone can understand the documentation. Make sure you get input from the team every step of the way. You might also find that for your sample application everything is very clear, but when you work on non-trivial applications, things can get more complicated. Always be sure to check what people are saying on forums and websites. Some documentations are available on GitHub so you might find some useful information directly on the repository.

### Learning material availability

I won't go into much detail on this, as it is self-explanatory. All I do is follow the list of steps outlined below.

- Google for the library and eye-ball the number of blog articles available
- Search for courses on training sites such as: [pluralsight.com](http://pluralsight.com "Link to Pluralsight website"){:target="blank"}, [egghead.io](http://egghead.io "Link to Egghead.io website"){:target="blank"}, [tutsplus.com](http://tutsplus.com "Link to Tutsplus.com website"){:target="blank"}
- Look on Twitter and other popular tech news aggregators like [echojs.com]() for mentions.


### Extra criteria

If after going through the process above, you still haven't found "the right one" there are two more steps that you can take:

1. Check if the project is backed by a company. As I mentioned before, OSS projects are usually passion projects of people who also have a day job. This is usually a risk factor as they might grow tired or bored of the project, or they might not have the time to maintain it anymore. On the other hand, companies have people or entire teams dedicated to the development of a project, which brings more stability in terms of project maintenance.
2. Check the activity of the main contributor / contributors since the project started. If they dropped development on a framework to go work for a company and after that they left the company and started a new framework, I would advise you to think a bit more about the reliability of the project. It might be an extraordinary piece of software but unless you want to possibly become a contributor, you need to stay away from projects like this.

## Closing thoughts

If you expected me to bash all the libraries in the list and come up with a winner, you got tricked. I'm not going to declare winners here, but you can use [this document](/resources/frontend_libraries_comparison.pdf){:target="blank"} I put together a couple of weeks ago for a client of mine and decide for yourself.

> Originally published on [codesi.nz](https://codesi.nz/top-5-things-to-consider-when-choosing-a-new-technology/)
>
> Photo credits:
> [Kyle Pearce](https://www.flickr.com/photos/keepitsurreal/) &mdash; [Choices](https://flic.kr/p/aiJFxH)

