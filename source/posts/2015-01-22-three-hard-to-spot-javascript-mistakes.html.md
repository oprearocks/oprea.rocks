---
layout: article
title: "Three hard to spot JavaScript mistakes"
pub_date: 2015-01-22 12:00:00 AM
last_modified: 2015-01-22 12:00:00 AM
categories: javascript
author: 'Adrian Oprea'
twitter: '@opreaadrian'
categories:
    - javascript
    - productivity
    - tips
tags:
    - javascript
    - tips
keywords: javascript, validation, mistakes, beginner, code, programming, objects, indexOf, for-in, loops
image: /images/posts/mistakes.jpg
---

Having worked on quite a number of large ecommerce projects for the past couple of years, 
I often found myself in a situation where one component, or the whole application my team was working on, was working properly in all scenarios.
It was wonderful! The project was on track, the client was very satisfied and the application worked in all cases.

All except one...

&mdash; *It's backend's fault!* ... someone would mutter.  

&mdash; *Yeah! They messed up the data, again!* ... goes another.  

&mdash; *God doesn't love us today.*  ... I'd say to myself.  

Some were using debuggers, others were littering the code with `console.log`s. 
When nothing would work, we would simply relax, as this was something divine, 
something that us mortals would never understand.
The next morning, I'd go back to work after a good night sleep(4-5 hours). 
I'd take one last look at the divine piece of code, and the first *WTF?!* would suddenly find its way into the office.  
This is an open-ended story and you can choose your version from the 3 options below. Enjoy!

READMORE

## Table of contents
{:.no_toc}

* Table of contents(will contain all headings execept the "Table of contents" one above)
{:toc}

## `Array#indexOf()` and `String#indexOf()`

In order to find if a certain substring exists within a given string, or if a certain key exists within a given array, the go-to method is `indexOf()`.

Let's say that we have the following setup:

```javascript
var myString = 'The quick brown fox jumps over the lazy developer\'s head';
```

Calling `myString.indexOf('developer');` would give us the index at which the word/substring "developer" is found within the given string, in our case `40`.

Let's say that we have a function that checks whether a certain word is present within a given sentence, and returns true or false based on this verification. Our code would look something like this:

```javascript
function checkWordOccurrenceInSentence(word, sentence) {
    if (!word || !sentence) {
        throw new Error('Please provide both parameters.');
    }

    if (sentence.indexOf(word)) {
        return true;
    } else {
        return false;
    }
}

var myString = 'The quick brown fox jumps over the lazy developer\'s head';
if (checkWordOccurrenceInSentence('programmer', myString)) {
    console.log('Found programmer');
} else {
    console.log('Programmer not found');
}
```

You would think that the piece of code above will say "Programmer not found" but you are wrong. As you might already know, the falsy values in JavaScript(values that evaluate to false) are 5: `NaN`, `Null`, `undefined`, `0` and `''`. Nowhere does it say that `-1`, the value that `indexOf()` returns if it does not find anything, will evaluate to false.

So basically what happens when you say `if (checkWordOccurrenceInSentence('programmer', myString))`
is that `indexOf()` will return `-1` inside `checkWordOccurrenceInSentence()` and that will be evaluated as `true` and this will be propagated and evaluated in your `if` statement.

A better way to do this is to refactor your function to look like the one below:

```javascript
function checkWordOccurrenceInSentence(word, sentence) {
    if (!word || !sentence) {
        throw new Error('Please provide both parameters.');
    }

    // Using "!=" instead of "!=="(identity operator) as indexOf() will not trick us
    // You can use >= 0 instead of != -1
    if (sentence.indexOf(word) != -1) {
        return true;
    } else {
        return false;
    }
}
```


## Checking object properties
> Object.property/Object['key']

Let's assume that you get a JSON object from an API, that returns error data from an error aggregator based on a certain query, and displays only certain errors. You will obviously need to validate if the error key exists, and display it's value.

Let's take the following JSON object as an example of error data, and check whether the `fatalErrorsCount` property exists as we would only want to show the fatal errors.

```javascript
// /errors/startDateMiliseconds/endDateMiliseconds
var errorData = $http.get('https://api.company.com/errors/14201436816409/1421882120458');
[table creation code goes here...]

if (errorData.fatalErrorsCount) {
    ui.components.show('fatal-errors-count', errorData.fatalErrorsCount);
}
```

Again, like with `indexOf`, you would think that this works fine: you get data, you check if the key exists, and BAM!, you output those damn fatal errors. Not so fast!
What if there are no fatal errors for that period, so `errorData.fatalErrorsCount` is 0. Well, then our `if` statement there doesn't look so good, does it? This also happens if `fatalErrorsCount` is set to any falsy value, so a better way to do this would be to use the `in` operator as follows:

```javascript
[...]
if ('fatalErrorsCount' in errorData) {
    ui.components.show('fatal-errors-count', errorData.fatalErrorsCount);
}
```

and now you are safe!

EDIT 2015/03/08: As per [@jakobparker's tweet](https://twitter.com/jacobparker/status/568519846050205696) I promised I'll make an edit and put the information here, so here it goes.
Use the `in` operator with caution, as it triggers prototype lookups, and you might get the property that you're looking for, from another object, further up the prototype chain.

Let's say you have the following structure:

```
+ Object
    - toString()
    |
    + Parent
        + Child
```

If you do this: `var childHasTostringMethod = 'toString' in Child;` you will see that your variable will be set to `true` as this will trigger a prototype lookup, that in plain english looks like this:

&mdash; *`Child` do you have a `toString` property?*

&mdash; *No, I don't!*

&mdash; *Okay, I'll ask your parents.* [.. walks up the `prototype`, to ask the child's `Parent`.]

&mdash; *`Parent` do you have a `toString` property your child inherited?*

&mdash; *No, I don't!*

&mdash; *Okay, then I guess your parent should have it, otherwise I'll tell the people who told me to ask you, that it's `undefined`.*

&mdash; *`Object` do you have a `toString` property?*

&mdash; *Yes I do, here it is!*

*[FIN...]*

Bottom line is that if you want to restrict your lookup to the current object and stay safe from prototype lookups, you should use the `hasOwnProperty()` method, to check if the key you're looking for is available on your object.

## `for...in` on Array(s)

I'll just tell you from the start that this is an EFFIN' bad idea. First of all because in JavaScript it is perfectly okay to have an array like this:

```javascript
var arr = [];

arr[3] = 11;
console.log(arr); //[ , , , 11 ]

for (var el in arr) {
    console.log(el); // will log 3
}
```

This means that if we perform a `for` loop on our array and log out each element would get 3xundefined and then 11.
But when performing a `for-in` loop, we get the index of the last element, as the statement treats our array as an object, treating the index `3` as the key, and 11 as the value because in JavaScript it is perfectly legal to have an object looking like this:

```javascript
var object = {
    '0' : 'First value',
    '1' : 'Second value'
};
```

I think it is also worth mentioning [Paul Irish's asshole effect](http://vimeo.com/12529436#t=272) as somebody could do something like this:

```javascript
// in another js file
Array.prototype.assholeVar = 'I haz a dude'; // http://lolcode.org/

// in your module
for (var el in arr) {
    console.log(el); // will log "3" and "assholeVar" for all arrays
}
```

Key takeaway here, is __NEVER USE `for...in` ON ARRAYS__. Use `for`, `while`, `do...while`, `forEach` and the list goes on.

I hope the info that I shared here is valuable to developers, especially beginners, and if you know any other "little" mistakes like the ones outlined in this article, please feel free to share them in the comments section, and I might even update the post publish them, for the sake of posterity.

P.S. I had one more, about `i++` but I'll publish that one in an update to this post.

> Image credits: [Some mistake, surely ...](https://flic.kr/p/nrHJrx) by [Tim Green](https://www.flickr.com/photos/atoach/)
