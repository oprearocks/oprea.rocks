---
layout: article
title: "ES6 arrow functions in depth"
pub_date: 2016-05-19 4:40:00 PM
last_modified: 2016-09-07 1:42:00 PM
tags:
  - ecmascript
published: true
author: "Adrian Oprea"
twitter: "@opreaadrian"
canonical_url: https://codesi.nz/es6-arrow-functions-in-depth/
keywords: JavaScript, ES6, ECMAScript6, arrows, functions, lambdas, anonymous functions, arrow functions, Babel
image: /images/posts/es6-arrow-functions-in-depth/post.jpg
---

One of the prettiest features of ES6, it could easily win a beauty contest, if such a contest would be held. What many people don’t know is that the arrow function is not simply a form of syntactic sugar that we can use instead of the regular callback.
As I like to explain it to the people who attend my trainings/workshops, arrow functions are `this`-less, `arguments`-less, `new.target`-less and `super`-less.
Let us now get past the shorter syntax and dive deeper into the specifics of the arrow function.

READMORE

## Table of contents
{:.no_toc}

* Table of contents(will contain all headings execept the "Table of contents" one above)
{:toc}

## Lexically-bound this

Previously, regular functions would have their `this` value set to the global object if they were used as callbacks, to a new object in case they were called with the `new` operator or, in the case of libraries like jQuery, they would be set to the object that triggered an event in case of event handlers, or the current element in a `$.each` iteration.This situation proved very confusing even for experienced developers.
Let’s say you have a piece of code like the one below.

```javascript
var obj = {
  nameValue: 'default',
  initializeHandlers: function() {
    var nameInput = document.querySelector('#name');

    nameInput.addEventListener('blur', function(event) {
      this.nameValue = event.target.value;
    });
  }
};

obj.initializeHandlers();
```

The problem is that `this` inside the `blur` event handler is set to the global object rather than obj. In strict mode &mdash; `‘use strict’;` &mdash; you risk breaking your application because `this` is set to `undefined`. In order to side-step this issue we have two options:

- Convert the event handler to a function bound to the outer scope, using [`Function.prototype.bind`](https://developer.mozilla.org/en-US/docs/Web)
- Use the dirty `var self = this;` expression in the `initializeHandlers` function (I see this as a hack)

Both options are illustrated below.

```javascript
[...]
initializeHandlers: function() {
  var nameInput = document.querySelector('#name');
  // more elegant but we can do better
  var blurHandler = function(event) {
    this.nameValue = event.target.value;
  }.bind(this)

  nameInput.addEventListener('blur', blurHandler);
}
[...]
```

```javascript
[...]
initializeHandlers: function() {
  var nameInput = document.querySelector('#name');
  // ugly and error-prone
  var self = this;

  nameInput.addEventListener('blur', function(event) {
    self.nameValue = event.target.value;
  });
}
[...]

```

On the other hand, arrow functions have no internal context. They inherit their context from the outer scope. Let’s take a look at how arrow functions solve this problem.

```javascript
const obj = {
  nameValue: 'default',
  initializeHandlers: function() {
    const nameInput = document.querySelector('#name');

    nameInput.addEventListener('blur', (event) => {
      // this references obj instead of the global object
      this.nameValue = event.target.value;
    });
  }
};
```

In our new implementation `this` is a hard reference to the `obj` object and doesn’t get lost due to nesting.

## Lexical arguments

Have you ever tried to access the `arguments` object inside an arrow function? I have, and I wasted 3 solid hours trying to figure out why do I get the arguments of the outer function instead of those of the arrow functions.
Thankfully, MDN exists, and as good practice dictates, you check the documentation at the end, when you sit in a corner, knees tucked to your chest, rocking and repeating to yourself: “I should have been a carpenter!”
Fun aside, arrow functions do not expose an `arguments` object. If you try to access it, you will get the arguments of the surrounding function. In our case, given the fact that the outer function is an arrow function as well, and we have no more functions further up the chain, we will get a `ReferenceError`.

```javascript
const variadicAdder = (x) => {

  return () => {
    let args = Array.prototype.slice.call(arguments, 0);
    return args.reduce((accumulator, current) => {
      return accumulator + current;
    }, x);
  }
}

const variadicAdderOf5 = variadicAdder(5);

console.log(variadicAdderOf5(10, 11, 12));
// ReferenceError: arguments is not defined
```

There is no fix here, as there is nothing broken. What we can do is to return a plain function, rather than an arrow, from our `variadicAdder()`.
This will give us the opportunity to access the `arguments` object without an issue. The updated code will look like the one below with the only difference
that it will actually work and not throw an error.

```javascript
const variadicAdder = (x) => {

  return function() {
    let args = Array.prototype.slice.call(arguments, 0);
    return args.reduce((accumulator, current) => {
      return accumulator + current;
    }, x);
  }
}

const variadicAdderOf5 = variadicAdder(5);

console.log(variadicAdderOf5(10, 11, 12));
// 38
```

To find out more about `Array.prototype.reduce`, head to the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce).

## Other characteristics
As I mentioned in the introductory section of this article, arrow functions have several more characteristics besides the context and the arguments.

### Implicit return
A very powerful feature is the ability to implicitly return the result of the logic being executed within it. This is available only for functions that have a single block of code as their body and it is called [concise body / block body](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#Function_body "More info on arrow functions concise body"). Basically, if your function is a one-liner, then you can use concise notation and reap the benefits.

Take a look at the example below and let's see how we can simplify it and make use of this powerful feature.

```javascript

function regularMultiplyBy2(n) {
  return n * 2;
}

const multiplyBy2Arrow = (n) => {
  return n * 2;
};

const multiplyBy2ArrowWithImplicitReturn = (n) => n * 2;
```

We can even go a step further and remove the parens around the function's argument.

```javascript
const multiplyBy2 = n => n * 2;
```

### No `new` calls

Being completely anonymous and dependent on their surrounding context, you are unable to use the `new` operator with arrow functions. As a direct implication, arrow functions also don’t have `super()`. Snippets like the one below would simply throw a `TypeError`.

```javascript
const Person = (name) => {
  this.name = name;
};

let p = new Person('John');
// TypeError: Person is not a constructor
```

### No `new.target`

The third characteristic, which is as well, a direct implication of the inability to use the `new` operator, is the fact that arrow functions don’t have `new.target`. In a nutshell, `new.target` allows you to detect whether or not a function has been called as a constructor.
Arrow functions, inherit `new.target` from their surrounding scope. If the outer scope is a function, and it is called like a constructor (e.g. `new Person('Adrian');`), then `new.target` will point to the outer function.
The Mozilla Developer Network hosts a detailed explanation on `new.target` and I encourage you to check it out.

## Closing thoughts

Now that you got a bit more detail into how arrow functions work, go and use them like they were intended!
I can't help recommending that you go through the [Mozilla Developer Network JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) as
there is an abundance of knowledge that will help you in the long run, in your web development career.
Feel free to leave comments, suggest edits and especially share with your peers.

## Update 1

Added the [**Implicit return**](#implicit-return) section.

## Update 2

Just published an article called [Using ES6 arrow functions in production-ready apps](/using-es6-arrow-functions-in-production-ready-apps/ "Article link: Using ES6 arrow functions in production-ready apps") that is directly tied to this article.

Cheers!

> Photo credits:
> [Richard Elzey](https://www.flickr.com/photos/elzey/) &mdash; [Arrow Signs](https://flic.kr/p/9ZDxat)
