---
layout: article
title: "React Native + NavigatorIOS + Bad Habits = 2 wasted hours"
date_created_on: 2016-05-08 1:50 PM
date_published_on: 2016-05-08 3:30 PM
date_modified_on: 2016-05-08 3:30 PM
tags:
  - javascript
  - reactjs
  - react-native
  - ios
  - mobile
published: true
author: "Adrian Oprea"
twitter: "@opreaadrian"
keywords: javascript, jsx, ecmascript, react-native, reactjs, react, mobile development, development 
image: /images/posts/react-native-navigator-ios/post.png
---

Long story short: I’ve never worked with React Native and wanted to give it a spin. Setup was a breeze, and I was able to get the app to work in the iOS simulator in a matter of minutes. What came after, is a story about bad habits.

A couple of stack traces and some style updates later, I said to myself: “Does this thing have navigation?”. So I found NavigatorIOS in the docs. Everything went well, I went through a couple of examples, then I did what any serious developer would do: I found the best StackOverflow answer and copied the code. My component looked like this:

```jsx
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  NavigatorIOS
} from 'react-native';

import MainPage from './mainPage.ios';

export default class dresspaper extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigatorIOS
          initialRoute={{
            component: MainPage,
            title: 'MainPage',
            navigationBarHidden: true,
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

AppRegistry.registerComponent('dresspaper', () => dresspaper);
```

2 hours later I was still trying to figure out why I couldn’t get anything to display on the screen. All I managed to do was to view the navigation bar which showed the title of my screen — MainPage.

![Blank app screen](/images/posts/react-native-navigator-ios/blank-screen.png)

As it turns out, I wasn’t doing anything wrong, at least according to the example I found on StackOverflow. Only after pasting the actual example provided on the NavigatorIOS documentation page, I realised how I managed to waste 2 hours. As it turns out, all I had to do was to remove the <View> component, wrapping my NavigatorIOS component and I got everything to display properly.

![App screen](/images/posts/react-native-navigator-ios/app-screen.png)

My code ended up looking like this:

```jsx
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} from 'react-native';

import MainPage from './mainPage.ios';

export default class dresspaper extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MainPage,
          title: 'MainPage',
          navigationBarHidden: true,
        }}/>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});


AppRegistry.registerComponent('dresspaper', () => dresspaper);
```

## What did I learn?

I learned something very important. Something I always encourage others to do: **RTFM!**

This isn’t the first time I copy and paste examples from StackOverflow disregarding the official examples. If I would have to track down the origin of this behaviour, it is probably my belief that most of the times, documentation is left aside and out of date.

I think it’s time to get over this belief. Open source software evolved tremendously since I started coding. Documentation and tests are first class citizens, a priority for most of the maintainers of important projects such as React Native.

If I haven’t made myself clear, let me say it again: RTFM!

## Resources

* [RTFM definition](https://en.wikipedia.org/wiki/RTFM)

* [React Native documentation — NavigatorIOS](https://facebook.github.io/react-native/docs/navigatorios.html)
