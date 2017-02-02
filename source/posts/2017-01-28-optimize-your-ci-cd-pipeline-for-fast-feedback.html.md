---
layout: article
title: "[WIP] Optimize your CI/CD pipeline for fast feedback"
date_created_on: 2016-01-28 10:00 PM
date_published_on: 2017-01-30 12:00 PM
date_modified_on: 2017-02-02 3:30 PM
campaign: docker
tags:
  - productivity
  - devops
published: true
author: "Adrian Oprea"
twitter: "@opreaadrian"
keywords: continuous integration, continuous delivery, continuous deployment, microservices, productivity, infrastructure, devops, docker, docker containers
image: /images/posts/optimize-your-ci-cd-pipeline-for-faster-feedback/post.jpg
---

One of the biggest issues that plagues teams doing some form of Continuous Integration / Delivery / Deployment is **execution time**.
If the pipeline is slow, then the feedback loop is slow.  

If the code takes 30 minutes to pass through the pipeline
and build only to fail in UAT or even worse, production, precious time is wasted (and money).

Going fast is not only about shipping fast but also about failing fast.
The faster you fail, the cheaper the solution.

Read on to find out how to optimize your pipeline for faster feedback.

READMORE

> This article is Work-In-Progress and will be updated in the following days

## Table of contents
{:.no_toc}

* Table of contents(will contain all headings execept the "Table of contents" one above)
{:toc}

## The slow pipeline

Let's assume we have a team practice continuous integration (CI) for 6 months. The next step would be to implement a continuous delivery (CD) pipeline.
This means automating the build process as well as storing the results of successful builds. The team can later deploy the resulting artefacts at the push of a button.

The structure of the CI workflow is as follows: `code quality` &rarr; `unit tests`

In the past 6 months, the team also focused heavily on writing end-to-end tests and run them locally using [Selenium](http://www.seleniumhq.org/).

For almost every new feature added to the application, they also have an end-to-end test written. This way, whenever someone changes the user interface,
the system will be able to catch the differences and signal the team about any issues.
They're still not integrated in the main pipeline. The plan is to merge them in to gain more confidence in what they build.
The tests should run whenever anyone pushes changes to the git repository.

Work starts on the new CD pipeline and everything is set up accordingly. The pipeline structure looks like below:

`code quality` &rarr; `unit tests` &rarr; `build` &rarr; `staging deployment` &rarr; `e2e test`

For every developer pushing code to the repo, the system kicks off a process and runs the whole pipeline.

What is slow here? It's the E2E test suite, of course!

Running it at every code push is costly, not only in terms of resource utilization (machines, networks, servers) but also in terms of developer time.  
Whenever the build breaks, all work should stop and the build should be fixed before introducing more features (and possibly more problems).
The developer has to wait for the build to pass in order to move on. 

Imagine there are 2 or more developers working on that branch. They would have to push to version control only when they are sure the functionality is 100% ready.
This leads to more problems. I remember when we used to work with SVN and we could only push when the feature was ready. Otherwise, we would break the application
for every person working on the project.

## Types of tests

In my experience, teams aspiring to implement Continuous Delivery always had to implement at least the categories of tests outlined below.
For a more in-depth list of tests, check out the [resources](#resources) section at the end of the article.

### Unit tests

These tests are the fastest and also the most important. They provide fast feedback about the correctness of the code.
If everything is green at this step, it means that your code is sound. Note that it doesn't mean it won't fail once it reaches production. 

No project can do CD without a proper CI pipeline. The two pillars of CI pipelines are tests and code quality(standardization).
Without coding standars, a static code analysis tool to automate the validation process and a lot of unit tests,
you can't even plan to implement Continuous Delivery.

### Integration tests

These usually fall into 2 categories.  

When talking about modules of the same application, the integration tests make sure that the new module being added, plays well with the already existing modules. 

The second category are the inter-service tests. In a microservices architecture you need to make sure that the updates you perform to one service,
don't mess everything up for the other services.

### End-to-end tests

Although it can be done with microservices as well, end-to-end testing is very popular today with front-end applications. These tests assess that a specific workflow
in your application, can be carried out successfully, without errors, under the conditions described by the specs. 

A good end-to-end testing framework will allow you a bare minimum of interactions, outlined below:

- Open the application in a browser
- Interact with the application (click buttons and links)
- Fill and submit forms (add strings to input fields, manipulating select boxes, checkboxes, etc.)
- Validate if certain areas of the page are present
- Validate if areas of the page are visible or invisible

This category of tests are the biggest confidence boosters. If these tests pass, you have a 95% chance for everything to be fine in production, too.

The problem is that people tend to overdo these tests. Because they are highly visual, managers love them, QA people love them (it was their previous job), everyone loves them.
Except when  have an E2E test for every button click.
If QA pick up on the skills to write the tests themselves (and they should), they will tend to automate everything they can click on.
This becomes a pain because you might not want to run the login screen test 15 times, just so you can perform different actions in the application.

### Load/stress tests

In the case of an SLA(Service Level Agreement) terms such as latency, response time and uptime may be required. In this situation, the code has to pass unit tests,
integrate well with the rest of the functionalities and behave well with other parts of the larger system but it should do all of these in a performant way.

This is where load and stress tests come in. They enable us to validate the boundaries to which the application behaves normally. 

They offer a pretty clear view how the application will behave in production, under a specific load. This helps a lot with resource dimensioning,
the number of application instances to have up under regular traffic conditions and a lot more. They can also provide a decent baseline for performance improvement
actions, during a project's lifecycle.

## Order and discipline

With the knowledge from the previous section, let's take a look at how we can improve our pipeline. We'll properly split the pipeline as well as arrange the 
tests in such a way that we can get feedback as soon as something is wrong.

## Putting it all together
A conclusion for everything presented so far and a quick story about why I dropped Babel and went full NodeJS-compliant ES6 on a set of client services.

## Resources

- [Martin Fowler - TestPyramid](https://martinfowler.com/bliki/TestPyramid.html)
- [Introducing the software testing ice-cream cone (anti-pattern)](https://watirmelon.blog/2012/01/31/introducing-the-software-testing-ice-cream-cone/)
- [Introducing the Software Testing Cupcake (Anti-Pattern)](https://www.thoughtworks.com/insights/blog/introducing-software-testing-cupcake-anti-pattern)
- [Wikipedia - Software Testing - Testing Types](https://en.wikipedia.org/wiki/Software_testing#Testing_types)
- [Software Testing Help - Types of software Testing](http://www.softwaretestinghelp.com/types-of-software-testing/)

> Photo credits:
> [Dirk Haun](https://www.flickr.com/photos/dhaun/) &mdash; [I Broke The Build](https://flic.kr/p/9zewGu)
