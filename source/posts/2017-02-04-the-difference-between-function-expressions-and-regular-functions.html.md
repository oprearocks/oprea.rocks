---
layout: article
title: "How are regular functions and function expressions different in JavaScript?"
date_created_on: 2017-02-04 1:50 PM
date_published_on: 2017-02-06 11:30 AM
date_modified_on: 2017-02-06 11:30 AM
tags:
  - ecmascript
published: true
author: "Adrian Oprea"
twitter: "@oprearocks"
keywords: javascript, nodejs, anonymous functions, function expressions, javascript functions, es6 functions, arrow functions
image: /images/posts/the-difference-between-function-expressions-and-regular-functions-in-javascript/post.jpg
---

I've been asked this question countless times during mentorship meetings, meetup networking sessions
and forums.

*--- What is the difference between assigning an anonymous function to a variable and a regular function?*

To know this difference the only requirement is to know how [hoisting](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/function#Function_declaration_hoisting) works in JavaScript.

READMORE

## TL;DR --- Hoisting

The main difference between a **function expression** and a **regular function** is the following:

Regular functions are hoisted to the top of the scope, with their full body whilst function expressions
are hoisted like regular variables.

Here is an example to outline the process:

```js
// Your code
function scopeFunc() {
  var a = 5;
  function fn1() {
    fn2();
    console.log('fn1()');
  }

  fn1();

  var fn2 = function() {
    console.log('fn2()');
  }
}

// After hoisting
function scopeFunc() {
  function fn1() {
    fn2();
    console.log('fn1()');
  }

  var a;
  var fn2;

  fn1();
  fn2 = function() {
    console.log('fn2()');
  }
}
```

If you run `scopeFunc` you will get the following result:

```js
> scopeFunc()
> TypeError: fn2 is not a function
```

## The longer story

In JavaScript, variables and functions within a scope are hoisted to the top.
The nuance is that everything is hoisted based on the way it was declared / defined.

Take the following example:

```javascript
function printSum() {
  var a = 5;
  var b = 7;

  function sum(x, y) {
    return x+y;
  }

  var message = 'sum = ';

  function print(string) {
    console.log(string);
  }

  print(message + sum(a,b));
}

printSum();
```

When parsed, the code will end up looking something like this:

```js
function printSum() {
  function sum(x, y) {
    return x+y;
  }

  function print(string) {
    console.log(string);
  }

  var a;
  var b;
  var message;


  a = 5;
  b = 7;
  message = 'sum = ';


  print(message + sum(a,b));
}
```
Running the `printSum` function will have the following output.

```js
> printSum();
> "sum = 12"
```
It is clear that all variable declarations have been "hoisted" to the top of the scope. Not only that
but the functions have been hoisted as well.

Unlike regular variables, functions get hoisted to the top of the scope, with their body.

If you ever wondered why you can call a function before it has been defined, this is the reason.

```js
function scopeFunc() {
  function fn1() {
    fn2();
    console.log('fn1()');
  }

  fn1(); // Execute first function which in turn, calls second function

  function fn2() {
    console.log('fn2()');
  }
}

scopeFunc(); // Execute wrapping function
```

The reason you can call `fn2` inside `fn1` even before it has been defined is hoisting.
I'm guessing that the engine hoists functions based on their call site.

If the engine had a simple top-down approach, with no prioritization, `fn1` would have been hoisted
before `fn2` and a `ReferenceError` would have been thrown.

As you can see, we are able to call `fn2` which makes me believe that the engine either keeps track
of where the function is being used, either it hoists whatever it finds, in reverse order.

I hope this clarifies the main difference between **function expressions** and **regular functions** in JavaScript.
Do use the comments section or ask questions on Twitter if you have any suggestions.

## Reference

- [MDN - Function declaration](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/function#Function_declaration_hoisting)
- [MDN - Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)


> Photo credits:
> [Sean MacEntee](https://www.flickr.com/photos/smemon/) &mdash; [Cranes](https://flic.kr/p/oKtiYv)
