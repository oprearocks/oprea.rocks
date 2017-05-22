---
layout: article
title: "Some technical advice for startups"
date_created_on: 2016-05-23 4:00 PM
date_published_on: 2016-05-23 4:00 PM
date_modified_on: 2016-05-23 4:00 PM
tags:
  - architecture
  - startups
published: true
author: "Adrian Oprea"
twitter: "@opreaadrian"
keywords: startups, tech, fintech, architecture
image: /images/posts/some-technical-advice-for-startups/post.jpg
---

## TL;DR

Stop creating monoliths. Stop the brainless, head-first dive into development. Buy the cheapest notebook and some pens and start scribbling. You'll thank yourselves!

## The story

From time to time, I get the chance to interact with tech startups and I formed the nasty habit of asking about their codebase. Whenever I ask this question, I get two types of answers depending on who's answering:

**The CEO**, or any non-technical C-level person, almost always complain they're moving too slow because of poorly written code.

&mdash; I don't believe this is the only reason.

**The CTO** and the developers say that they're moving as fast as they can, given their current architecture. They mostly complain about
consultants, or freelancers who worked before and made a mess.

&mdash; C'mon! Not all consultants are crap throwing monkeys looking to make your life a living hell. 🐒💩

As always, the truth is somewhere in the middle. It's always a combination of lack of process, tight deadlines and hasty business and
architectural decisions.

READMORE

## There's no time for clean code 'round here!

Whenever I talk to people about startup programming, I always hear a variation of the "there's no time for clean code" mantra. It seems like people are actually trying to convince themselves of this. They try hard to believe in it.

I find this to be lacking in substance.

## *Think-Do&#8482;* not *Do-Panic-Redo&#8482;*

Most of the times, the argument is that there's no time to think enough about the functionality you're implementing. I've also been told that writing clean code is pointless because it will be discarded in a couple of weeks when new ideas will need to be implemented.

Actually, I believe that if you begin your startup's codebase by thinking about the architecture, you make every future decision easier. Integrate a *Think-Do&#8482;* process, instead of *Do-Panic-Redo&#8482;*.

> Whatever you do, no matter if you're going to be successful or not, you will end up having to think and then act!
> It's just a matter of when and at what cost.

## Less maintenance, more time to code
Another reason that gets brought up a lot is maintenance / operation cost. A monolithic application is cheaper to run than a set of services / APIs.

This is correct, but the cost of changing or removing functionality from a modular architecture is way lower than in a monolithic application.
If we take into account that in startups, the most frequent development activities revolve around tuning existing functionality and adding new functionality, you can see the clear win of running services instead of a monolith.

There's also the advantage of having a reduced blast radius when things go south. If you have a monolith and a part of it crashes, the whole thing crashes.

With services, on the other hand, you're more likely going to be able to shut down only that part of the application and let the rest of it run, granted the affected part is not critical functionality.

## No time for performance

You can't think about code performance in startups. True, there's no time for polishing your algorithms until they all work in O(log (n)) time but you can try to abstain from littering your codebase with useless stuff.

If you can achieve your goal with one loop instead of two, do it!

Use [`Query#lean()`](http://mongoosejs.com/docs/api.html#query_Query-lean) if you use MongoDB and Mongoosejs, to get plain JS objects instead of passing full Mongoose-wrapped objects around.

Cache object properties, to prevent prototype lookups if you access them more than once. Minify and bundle your front-end code instead of delivering it as-is.

Don't use the development build of your framework of choice, when running in production. Don't pass the full object when all your function needs are two properties on that object.

## Bottom line

I'm sticking with the process I mentioned previously, which I called *Think-Do*. I'm guilty of ignoring thinking, myself, and I still have to give myself frequent reality checks to make sure I'm on the right track. Whenever I have to implement something that I think would take more than a day to develop, I automatically take out some pen and paper, if there's no whiteboard around, and start writing stuff down.

## Bonus(es)

A couple of things that have served me well over the years both in working with startups and donig client work.

Whenever you find your mind looping over some meaningless detail, you need a 15.000 ft. view. Stop whatever you're doing and have a look at the bigger picture.

Only plan for the things you have details for. Don't try to see into the future, don't try to predict what's going to come. If you find yourself tempted to do so, discuss your ideas with your partner, associate, CEO. You may be able to offer valuable feedback and ideas they haven't thought about. Don't try to surprise them, though. In startups, more than anywhere else, change is the only certainty.

Always code static / hardcoded versions, validate them with your peers / partners, then go dynamic. Don't waste time creating models and all that goodness to show a user profile page, only to find that you have to throw away half your work. Put some dummy data and show it. Showing is essential in getting useful feedback. You will see that you'll get different suggestions from people when describing the functionality vs. showing it.

Try to choose technologies based on community size, download count, StackOverflow community and backers. Refrain from choosing based on the number of GitHub stars, Twitter hashtag popularity or the newest conference buzz. Here's an article I wrote some time ago, that details [the process I use for choosing libraries / frameworks](/blog/top-5-things-to-consider-when-choosing-a-new-technology/).

Last but not least, document the decisions you make. You may find it very useful, to document not only the winning technology, but also the competitors and the reasons why a certain technology was chosen and why others weren't.

> Photo credits:
>
> [HAMZA BUTT](https://www.flickr.com/photos/141735806@N08/) &mdash; [startup](https://flic.kr/p/Ub2RKU)
