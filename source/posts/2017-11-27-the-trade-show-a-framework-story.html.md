---
layout: article
title: "The trade show &mdash; a framework story"
date_created_on: 2017-11-27 05:00 PM
date_published_on: 2017-11-27 05:00 PM
date_modified_on: 2017-11-27 05:00 PM
tags:
  - javascript
  - opinion
  - coding-stories
published: true
author: "Adrian Oprea"
twitter: "@oprearocks"
keywords: software development, javascript, react, angular, angularjs, reactjs, trade show, programming
image: /images/posts/the-trade-show-a-framework-story/post.jpg
---

This post is a short story I wrote after some interesting discussions I had after my presentation at JSTalks Sofia. I started thinking about how new projects unfold in software development shops and the developer behaviors I've both seen and exhibited. It also contains a list of practical advice you can apply right now. So without further ado, I hope you enjoy this short story. 

If you enjoyed it, make sure that others will read it, as well. Share it with your team, friends, managers, grandparents... you get the point. Share it! 😂

READMORE

New project comes in.

**Business ☎️**: &mdash; We want the application to be able to provide X to the user. We need this for the trade show happening 1 month from now.

Devs start making a list of technologies:

**Dev1 💬**: &mdash; We need a front-end framework. I always wanted to use React.

**Dev2 💬**: &mdash; Me too, let's do it! I really like the uni-directional data flow thing.

**Dev3 💬**: &mdash; Yeah but, none of us knows React. We're using Angular right now, and we have some knowledge. It will also take a while to lear...

**Dev1 💬, Dev2 💬**: &mdash; Don't worry! It's faster, It has a lot of tooling. We'll just use create-react-app and Redux and we'll deliver that bad boy in 2 weeks. And we also get the Webpack configuration out of the box so we don't have to knock our head against the walls with that. I heard people complain that it's tricky.

**Dev2 💬**: &mdash; We will also add a caching system so that we don't hit the database every time. 

**Dev1 💬**: &mdash; Actually, let's make it a Progressive Web App and we don't even need the caching system!

**Dev2 💬**: &mdash; Yeah! I heard those are pretty good for offline use and accessibility and the patterns for PWA are amazing. And create-react-app generates a PWA out of the box. With a Service Worker and everything. It'll be a breeze

**Dev3 💬**: &mdash; ...learn the patterns and the ecosystem. Why don't we use Angular for this one, too, and then try to incrementally migrate pieces to React, I heard it can do that..

**Dev1 💬**: &mdash; Yes but that would mean extra work, we're doing React from the beginning. 

**Dev3 💬**: Mmmm... okay..

*[coding starts]*

...

*[one month later]*

**Business ☎️**: &mdash; Hey people, how's it going? Where are we with the new functionality, do we have anything to show?

**Dev1 ☎️**: &mdash; Oh, we're good, this React thing is amazing, it has components, everything is modular! We just have to figure out how to architect the state so that it matches the backend responses. 

**Dev2 ☎️**: &mdash; We might have to do some backend refactoring so that we get the responses just like we need them.

**Dev3 ☎️**: &mdash; I built a prototype in Angular, on the side, and it works with our actual backend, we could build upon that and then use the work we already.

**Dev2 ☎️**: &mdash; But we already invested time and resources in the React version. We should go with that, why work so we can throw it away later.

**Dev3 ☎️**: &mdash; We would to it so we can show something to the user while we work on a more stable, solid functionality. And it takes away the burden of re-working the backend, for now. You know that it's tricky to deploy backend changes right now. We have to reset caches, re-configure load balancers. 

**Dev1 ☎️**: &mdash; It's okay, we got this. We'll just need 2 more days to figure this out and we're good.

[status meeting: 4 days later]

**Dev2 💬**: &mdash; Still can't figure out that state thing. The comments need to be nested with the posts. Dan Abramov says we should flatten the state, avoid deep nesting but our backend cannot accommodate that. Oh, in Angular we could've done it so much easier.

**Dev1 💬**: &mdash; Did you fix that problem we had with the API responses? I couldn't figure out why I god the same response even though I modified the backend code.

**Dev3 💬**: &mdash; Here's the prototype I built, it already does that, we just need to fix a couple of CSS issues and we can deploy it. And your problem is coming from the PWA. The concept is fairly new and also needs some time getting used to. You're getting the same response because the Service Worker is caching them and serving them to you. That's the fast user experience you wanted, right?

**Dev1 💬**: &mdash; Ok, we'll use that, but we need to come back to this React version because I really want to run React in production.

**Dev3 💬**: &mdash; Sure, but let's just get this thing out the door and we can revisit the React version.


## The moral(s) of the story

Don't use a concept you only know in theory, when you have a tight delivery date.

Don't assume that if everybody is using it, it's the right thing for you.

When introducing new concepts, add them one at a time. Too much change in complexity can lead to problems you didn't anticipate.

Use technologies because they solve a problem better, faster, easier, more secure, not because you want to work with them.

Always create a tightly-scoped proof-of-concept that you can discard without feeling like you're throwing away good work.

Listen to other peoples' opinions with the intention of understanding, not just to give them an answer and move on with your theory (guilty of this myself, countless times)

Talk with business people in terms they understand. Unless they have a technical background, business people don't care about your developer experience, refactorings, modularization. They translate most of the things into man hours and then into money. If you're not talking about value that is easily translatable to one of those, then it's worthless, you'll just confuse them.

Do some form of high-level architecture that implements the requirements

Always do code design. Don't just start typing the code for a function. Type its name, its arguments and then write comments inside it with what the code should do. Better yet, write a couple of tests that describe what that functionality should do. 

The further down the project lifecycle you will discover an error, the more expensive it will be to fix it, the less inclined you will be to communicate that error and have it fixed.


## The truth

Some of the items above are on my wishlist. 

I'm not always able to follow those rules. 

That's because we don't live in an ideal world. 

New projects have a tendency to appear with the "we need it last week" label, communication is not always straightforward and many more impediments that you can think of.

Nevertheless, it is worth listing them out, for myself, first and foremost, and for others to see. 

I don't plan on being the brightest bulb in the chandelier here, I'm not. 

But I want to help people figure out what they are doing wrong and also how they can improve. 

It's easy to point out problems in others, it's harder to identify them in yourself and also provide solutions.

## The famous "Bottom line"

Be more like **Dev3** and less like **Dev1** and **Dev2**!

Thank you!


> Photo credits:
>
> [Michael Coghlan](https://www.flickr.com/photos/mikecogh/) &mdash; [Tangles](https://flic.kr/p/dPrHvF)
