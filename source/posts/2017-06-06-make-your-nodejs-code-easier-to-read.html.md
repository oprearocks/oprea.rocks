---
layout: article
title: "A simple trick to make your Node.js code easier to read"
date_created_on: 2017-06-06 4:00 PM
date_published_on: 2017-06-06 4:00 PM
date_modified_on: 2017-06-06 4:00 PM
tags:
  - javascript
  - nodejs
published: true
author: "Adrian Oprea"
twitter: "@oprearocks"
keywords: javascript, nodejs, node.js, error, error handling, expressjs, express, mongoose, mongodb
image: /images/posts/make-your-nodejs-code-easier-to-read/post.jpg
---

In this short article I plan to share with you a simple trick I use to make my Node.js code read better. It’s not wizardry so don’t get discouraged by the “trick” in the title.

READMORE

Here’s a regular Expressjs route handler executing a database interrogation using Mongoose:

```javascript
router.get('/user/:userId',(request, response) => {
  User.find({ id: req.params.userId }, (error, data) => {
    if (error) {
      return response.status(500).json({
        status: 500,
        error: 'The query failed',
      });
    }

    if (!data) {
      return response
        .status(404)
        .json({
          statusCode: 404,
          message: 'Not Found',
          user: {}
        });
    }

    return response
      .status(200)
      .json({
        statusCode: 200,
        message: 'OK',
        user: data
      });
  });
});
```

From reading the code, I can figure out what it does, but its readability can be further improved. Just by typing a few more characters, we can let other people reading our code, what type of error we are actually talking about.

```javascript
router.get('/user/:userId', (request, response) => {
  User.find({ id: req.params.userId}, (databaseError, user) => {
    if (databaseError) {
      return response.status(500).json({
        status: 500,
        error: 'The query failed',
      });
    }

    if (!user) {
      return response
        .status(404)
        .json({
          statusCode: 404,
          message: 'Not Found',
          user: {}
        });
    }

    return response
      .status(200)
      .json({
        statusCode: 200,
        message: 'OK',
        user
      });
  });
});
```

Simple, right? Just rename the error parameter to databaseError or queryFailedError, or whatever you feel is meaningful. I also renamed the data parameter to what it actually is, a user object.
If this doesn’t ring a bell, think of a junior developer reading that code. What would they understand from the first version and from the second.
Here’s another example. Parsing JSON strings.
let userData = null;

try {
  userData = JSON.parse(dataString);
} catch (e) {
  throw e;
}
Not too bad. For anybody who knows what JSON is, this is plain simple. You just try to parse dataString into a JavaScript object and if something goes wrong, an exception gets thrown.
To a junior dev, on the other hand, it may not mean much when reading the code. What does it throw? What could be the reason? Compare it to the snippet below:

```javascript
let userData = null;

try {
  userData = JSON.parse(dataString);
} catch (malformedJSONStringException) {
  throw malformedJSONStringException;
}
```

I know for some of us it may sound a bit too “Java” but it’s the truth. It’s easier to read through this code and understand the reason it would throw an exception.
Key takeaway
If you know the type of error you are receiving, throwing or forwarding, make it obvious in your code. It might mean a lot to people just getting started with programming, or even to your own colleagues, who are just getting familiar with the codebase.

> Photo credits:
>
> [Nicolas Alejandro ](https://www.flickr.com/photos/nalejandro/) &mdash; [the big trick](https://flic.kr/p/nDn71n)
