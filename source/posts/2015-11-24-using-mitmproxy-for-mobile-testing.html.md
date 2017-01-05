---
layout: article
title: "Quick tip: Using mitmproxy for mobile testing"
pub_date: 2015-11-24 12:00:00 PM
last_modified: 2015-11-24 12:00:00 PM
categories: development
author: "Adrian Oprea"
twitter: "@opreaadrian"
canonical_url: https://codesi.nz/using-mitmproxy-for-mobile-testing/
tags:
  - productivity
  - mobile
keywords: mobile, testing, mitmproxy, hosts, hostfile, nodejs
image: /images/posts/using-mitmproxy-for-mobile-testing/post.jpg
---

This article is meant to offer a hopefully simple solution for testing web applications that run on
your local machine, on actual mobile devices, without altering your router's DNS configuration,
or resorting to other, less elegant solutions.

READMORE

## Table of contents
{:.no_toc}

* Table of contents(will contain all headings execept the "Table of contents" one above)
{:toc}

## Use case

I have an application running on my machine, and I access it on `http://myapp.dev` as it depends on
the domain it is running on, in order to bootstrap itself and offer different functionality based
on the domain where it is being loaded.
I want to be able to navigate to `http://myapp.dev` on my phone and get the application running on
my computer.

## Solution 1
Have the mapping added to my local DNS(the router's DNS) and every time a device on my network
navigates to `http://myapp.dev` it will be redirected to my machine &mdash; highly impractical as
I have multiple devices and I'd probably like to keep my router's config as sane as possible.

## Solution 2

Set my computer as a
<a href="https://en.wikipedia.org/wiki/Man-in-the-middle_attack"
	title="Wikipedia link to Man-In-The-Middle attack definition"
	target="_blank">Man-In-The-Middle</a>
between my phone and the Internet &mdash; in other words, make my computer act as an HTTP proxy.
This way, I can trick the phone into believeing that all its traffic needs to be routed through my laptop.

## How DNS resolution works

* I navigate to `http://myapp.dev` from my phone
* My phone looks at its internal hostfile &mdash; usually `/etc/hosts` on UNIX-like operating
systems &mdash; for entries resolving to that specific hostname.
* If it doesn't find anything it looks at the local DNS (the router's DNS)
* If no result is returned by the local DNS, then the external DNS is queried - via recursion
* If nothing comes back from the external DNS, then it means that the address is either inexistent
  or down.

## The setup

* A copy of <a href="https://mitmproxy.org/" title="Link to mitmproxy official website"
  target="_blank">mitmproxy</a>
* A mobile device to test on

## Workflow


What I want to do is to trick my phone into thinking that `http://myapp.dev` resolves to
192.168.xxx.xxx &mdash; my laptop's local IP address &mdash; and the way I can do that is by using
<a href="https://mitmproxy.org/" title="Link to mitmproxy official website" target="_blank">mitmproxy</a>.

If you're on a Mac, you have two options for installing `mitmproxy`:

* Through <a href="https://pip.pypa.io/en/stable/" title="Link to Python package manager, pip"
  target="_blank">pip</a> by issuing `pip install mitmproxy` at your
terminal prompt.
* Through <a href="http://brew.sh/" title="Link to Homebrew - Mac OS X package manager" target="_blank">homebrew</a>
by issuing another command at your terminal prompt: `brew install mitmproxy`.

If you are on a different operating system please check the
<a href="http://docs.mitmproxy.org/en/stable/install.html" title="Mitmproxy official installation docs" target="_blank">mitmproxy installation guide</a>

## Proxy server setup
All you have to do now is to start the proxy server, and set your machine's local IP
(192.168.xxx.xxx) as the proxy through which the phone connects to the Internet.

```bash
# Start the proxy server on port 7654
$ mitmproxy -p 7654
```
After starting the proxy server go to your phone's wireless network settings, and add your
computer's ip as an HTTP proxy that every connection on your phone goes through.
Note that the phone and the computer need to be on the same network, or otherwise you will need to
get the public IP that your computer uses when it accesses the Internet.

```bash
# UNIX - Get your computer's router-assigned IP (see image below)
$ ifconfig -a | grep inet

# Windows - Get the network configuration for all interfaces
> ipconfig /all
```

<figure>
<img src="/images/posts/using-mitmproxy-for-mobile-testing/ifconfig.png" alt="Image of the output of the ifconfig
command on UNIX like systems.">
<!--- <figcaption>Using ifconfig to get your IP address</figcaption> --->
</figure>

## iPhone proxy setup

In order to add a proxy to your wireless connection, navigate to "Settings -> Wi-Fi", find the
network you whish to connect to and tap the "i" symbol, to the far  right of the network's name.
This will move you to the network's settings panel, and at the bottom of this panel you have the
"HTTP PROXY" section, which is set to "Off" by default.
Tap "Manual" and add your machine's IP and the port you used when you started `mitmproxy`. The
setup should look like the image below.

<figure>
<img src="/images/posts/using-mitmproxy-for-mobile-testing/iphone-proxy.png" alt="Image of HTTP PROXY settings on the iPhone">
</figure>

Once you're done performing the steps above, you should try and visit any web page, and you will
see some activity in the terminal window where you started `mitmproxy`. 
This means that the proxy is working correctly and that your phone's connection is routed through
your laptop.  
Now, you can start your application on your machine, add an entry to your `/etc/hosts` file, that
makes `myapp.dev` point to your local machine's IP, and visit `http://myapp.dev:<port>` from your
phone.

You're done! You should now be able to see the application that is running on your computer.

> Credits:
> [kevin](https://www.flickr.com/photos/believekevin/) &mdash; [Lot of mobile phones + accessories (FREE)](https://flic.kr/p/8mGycA)
