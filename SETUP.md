# Local Dev Setup

This document describes the simple steps you need to take
to set up a simple local development environment for OpenUI5.
It's based on NodeJS, a couple of modules, and a small server
script.

## Prerequisites

A basic development environment consists of an editor, a web
server, and a browser. First, choose your own editor
(such as Sublime Text, Atom, Notepad++ or even Eclipse, if you're
feeling reckless!).

After installing and setting up your editor, [download NodeJS](http://nodejs.org/download/)
and install it.

Finally, make sure you have [Chrome](https://www.google.com/chrome/browser/)
installed. There are other browsers but the developer tools in Chrome
that we use for examining and debugging OpenUI5-based applications are
excellent.

## Target Setup

The target setup that we want to achieve here is a single folder, in
which we'll have a simple web server script that we'll execute with
NodeJS, and one or more folders containing unpacked versions of the
OpenUI5 SDK. You only need one version, the latest, but it's often
worthwhile having a couple of different releases, and you'll end up
with that situation anyway as you pull down the latest releases as
they become available.

The simple web server script will serve the OpenUI5 SDK documentation
as well as the OpenUI5 runtime, and we'll also configure it to server
another folder where you'll keep your projects. Feel free to configure
all this to suit your tastes and existing setup.

This is what the target setup will look like, assuming that the OpenUI5
folder that we're talking about will be in your home folder, as will
the projects folder:

```
<home>
  |
  +-- OpenUI5-OSCON-2014/
        |
        +-- static_server.js
        |
        +-- latest/               // symlink to openui5-sdk-1.20.9/
        +-- openui5-sdk-1.20.9/   // unpacked OpenUI5 SDK 1.20.9
        +-- openui5-sdk-1.20.8/   // unpacked OpenUI5 SDK 1.20.8
        |
        +-- projects/             // where your OpenUI5 projects go
              |
              +-- ...
```

## Step by Step

### 1. Clone this repo

Clone this repo to your home folder. You should see only the following:

```
<home>
  |
  +-- OpenUI5-OSCON-2014/
        |
        +-- static_server.js
        |
        +-- projects/
```

### 2. Download and unpack the latest OpenUI5 SDK

From the [OpenUI5 download page](http://openui5.org/download.html), retrieve the
latest SDK (make sure it's the "UI5 SDK" and not just the runtime).

Create a new folder named after the specific release (e.g. "openui5-sdk-1.20.9/")
and unpack the contents of the SDK into it. You should end up with something like
this:

```
<home>
  |
  +-- OpenUI5-OSCON-2014/
        |
        +-- static_server.js
        |
        +-- openui5-sdk-1.20.9/
        |     |
        |     +-- LICENCE.txt
        |     +-- NOTICE.txt
        |     +-- content/
        |     +-- demoapps.html
        |     +-- discovery/
        |     +-- docs/
        |     +-- index.html
        |     +-- js/
        |     +-- resources/
        |     +-- search.html
        |     +-- test-resources/
        |     +-- theme/
        |
        +-- projects/
```
(From now on the contents of the openui5 SDK folder won't be shown).

### Create a symbolic link for "latest"

Navigate to the OpenUI5-OSCON-2014/ folder and create a symlink 'latest' to
point to the latest (currently the only) SDK folder. On OSX and Linux
this would be:

`ln -s openui5-sdk-1.20.9/ latest`

At this stage you should have:

```
<home>
  |
  +-- OpenUI5-OSCON-2014/
        |
        +-- static_server.js
        |
        +-- latest/   ---------------+
        |                            | symlinked
        +-- openui5-sdk-1.20.9/   <--+
        |
        +-- projects/
```

### Start up the server

While still in the OpenUI5-OSCON-2014/ folder, start up the web
server like this:

`node ./static_server.js`

and your browser should open showing your local OpenUI5 SDK. You're
all set!
