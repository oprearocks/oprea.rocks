---
layout: article
title: "jQuery, Babel, React Native and the importance of making mistakes"
date_created_on: 2017-05-19 1:50 PM
date_published_on: 2017-05-19 3:30 PM
date_modified_on: 2017-05-19 3:30 PM
tags:
  - javascript
  - jquery
  - react-native
  - babel
published: true
author: "Adrian Oprea"
twitter: "@oprearocks"
keywords: react, babel, react native, jquery, babeljs, javascript, ecmascript, es6, web platform, standards
image: /images/posts/jquery-babel-react-native-and-the-importance-of-making-mistakes/post.jpg
---

It wasn't very long ago when we didn't have all these generators, scaffolders, bootstraps etc. Not long since we used to include a small library into every project. You got it right, people, I'm talking about jQuery.

Actually, the article is not about jQuery. The title can be regarded as a clickbait but I had to draw your attention to something important. Consider this article a parallel between jQuery and the web platform's current state of affairs.

READMORE

A couple of days ago, I saw this tweet from Dan Abramov:

<blockquote class="twitter-tweet" data-lang="en"><p lang="und" dir="ltr">Babel is the new jQuery.</p>&mdash; Dan Abramov (@dan_abramov) <a href="https://twitter.com/dan_abramov/status/864519406231093249">May 16, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

I know Dan's intention was not to offend, and he even mentions this in a later reply. Still, it got me thinking deeper about the importance of some projects to the web community. I even replied on that thread with what is supposed to be the essence of this article.

Let's look at jQuery. It was the first library that **really** made the DOM friendlier to non-programmers. It opened up DOM manipulation to design professionals, junior developers, HTML/CSS developers -- yes, there was such a thing. You didn't have to be a programming wiz to hide and show a text block when clicking on a button.

Besides making interacting with the DOM a trivial task, it also allowed us to make mistakes. A lot of them -- mistakes and people 😎! Some learned important lessons and modern day frameworks started to take shape. People noticed that code started becoming too verbose and everyone wrote JavaScript **Their Way&#8482;**. They quickly realised they needed to standardise development, so tools were created to account for that need. This is how JSHint, JSLint and ESLint were born.

The core idea is that jQuery enabled a whole generation of professionals to ease their way into JavaScript development. Don’t forget that many of us might not have learned how fade-in and fade-out work if we would’ve kept writing HTML and CSS for IE6 —  with the validator.w3.org badge in the footer, of course.

We tend to forget that ES5 was published in 2009 and updated in 2011. It was the first real update since ES3 was standardised, in June 2001 and after work on ES4 was dropped in 2007. We tend to forget that it took until around 2011 for many projects to drop old IEs and migrate to ES5. There are projects out there still running on ES3. People maintain those codebases.

Fast-forward to 2017, Babel is in a similar position jQuery was, years ago. Glancing over the web platform, today, we see a lot of improvements. There are a lot of things currently being worked out and a hell lot more that have been finalised. Sensors, camera and mic access, phone vibration, File API, LocalStorage and Progressive Web Apps, just to name a few.

To my knowledge, what Babel did for the web platform is unprecedented. It helped us get rid of shims, shivs, or whatever they call them these days. Babel enabled us to use standards-to-be. It enabled people on the TC39 committee to iterate quicker, and based on real feedback from the community, rather than publishing some brittle specification and hope everyone complies. It saved us from waiting for the next major release to see a fix in the language, or a new feature.

Today, if you want to use generators, async-await, reflection, you just drop Babel in and start coding. A friend of mine told me that Babel is all about the output, and the trans-compilation. I disagree. I think that Babel is all about the source code. Up to this point, for me, it was like that scarf that goes well with all my other clothes. You know? Like that watch that compliments your dress / suite.

Once again, just like jQuery, it allowed a whole generation of people, not that into classes, or with decent programming knowledge, to make mistakes and dive into less accessible concepts.

Of course, it's worth mentioning that JavaScript has its merits here. Its flexibility and ubiquity allowed many less-capable beings like myself to explore concepts without having to install a compiler, a transpiler, a linter, a linker, a helicopter and two slices of ham to get things working.

I have nothing against **Other Languages&#8482;** but if I have to type 23847 characters and spend 40 minutes configuring an environment just to print `"Hello world"`, I'll pass. JavaScript is easy: pop-open your browser's developer tools and write the damn thing.

![Hello world in JavaScript](/images/posts/jquery-babel-react-native-and-the-importance-of-making-mistakes/helloworld.png)

Looking a bit into the future, I can see that React Native interest is trending upwards. StackOverflow published [an interesting article on their blog](https://stackoverflow.blog/2017/05/16/exploring-state-mobile-development-stack-overflow-trends/), which I recommend you to read. I see React Native like the natural step in the cascade of technologies I mentioned in this article.
Of course, it builds on the shoulders of giants. Cordova, Ionic, NativeScript, and the native platforms it supports, they've all contributed to its popularity. I see it as the next best thing that came out of our mistakes and learnings from using tools like our heroes, jQuery and Babel. Just like them, React Native will probably open up reserved field, to the many developers without an interest in learning native mobile technologies. This is exactly the kind of “juice” that enables startups to iterate quickly and bring the amazing products we all have installed on our phones.

Lastly, don’t forget that a couple of years ago, many of us, developers and recruiters alike, thought jQuery was a programming language. Don’t forget we were looking for AngularJS developers with 6 years of experience, in 2011. With that in mind, always stay curious, challenge the rules, break them and most importantly, **learn from your mistakes**!

> Photo credits:
>
> [Jussi](https://www.flickr.com/photos/nesster/) &mdash; [RANT, this way](https://flic.kr/p/4nScvy)
