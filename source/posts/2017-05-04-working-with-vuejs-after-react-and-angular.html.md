---
layout: article
title: "Working with Vue.js after React and Angular"
date_created_on: 2017-05-04 1:50 PM
date_published_on: 2017-05-04 3:30 PM
date_modified_on: 2017-05-04 3:30 PM
tags:
  - javascript
  - angular
  - reactjs
  - vuejs
published: true
author: "Adrian Oprea"
twitter: "@oprearocks"
keywords: javascript, ecmascript, angularjs, angular, react, reactjs, vue, vuejs
image: /images/posts/working-with-vuejs-after-react-and-angular/vue-logo.png
---

I wanted to work with Vue.js on a “real” project for quite some time. Last night, I decided to migrate a very small portion of a larger project to Vue. In the next week or so, I plan on publishing a small series of articles about this experience.

READMORE

## Setup

Very quick setup, no headaches. The guide is straightforward and the fact that they also offer a CLI makes the experience more enjoyable for command-line junkies like myself.

I wanted to use Webpack and was surprised to see that they had that option built in. Here’s a list of available **official **templates:

![List of official vue-cli application templates](/images/posts/working-with-vuejs-after-react-and-angular/vue-cli-application-templates.png)*List of official vue-cli application templates*

So, what I ended up doing was to issue a the command below and after answering a couple of questions, I got a neatly organized Vue.js project, with Webpack and all the bells and whistles — ESLint , AirBnB’s JavaScript style guide.

![Initialize a new Vue.js project using vue-cli](/images/posts/working-with-vuejs-after-react-and-angular/vue-cli-webpack-output.png)*Initialize a new Vue.js project using vue-cli*

## Development

While I was working for a company, on large e-commerce websites, I used Backbone.js extensively. For this particular reason, Vue.js feels rather familiar. The way you structure your components is very similar to the way you would declare your Models, Views or Collections in Backbone.js.

I was expecting some Webpack issues while starting the development server but there were no such issues. I did have some trouble making TinyMCE work with Webpack but the mistake was mine.

TinyMCE sets itself as a global variable, and the holy Internet suggested a way to use imports-loader and exports-loader to make it work properly. The only problem was that I had some errors I could not work around.

After wasting 1.5 hours trying to debug this, I finally decided to read TinyMCE’s documentation properly. It worked flawlessly without any loaders.

## Links

* [Using TinyMCE with module loaders](https://www.tinymce.com/docs/advanced/usage-with-module-loaders/)

* [Shimming modules in Webpack 2](https://webpack.js.org/guides/shimming/#components/sidebar/sidebar.jsx)

* [Vue 2.0 documentation](https://vuejs.org/v2/guide/)

* [ESLint](http://eslint.org)

* [Airbnb’s JavaScript style guide](https://github.com/airbnb/javascript)

* [Backbone.js](http://backbonejs.org/)

* [imports-loader](https://www.npmjs.com/package/imports-loader)

* [exports-loader](https://www.npmjs.com/package/exports-loader)

## Future topics

* Making REST API calls in Vue 2.0

* Asynchronous computed properties

* Splitting a Vue app in feature folders

> Photo credits:
>
> [Vue Logo](https://vuejs.org/)
