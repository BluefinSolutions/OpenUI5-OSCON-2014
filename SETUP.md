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
as well as the OpenUI5 runtime, and we'll also configure it to serve
another folder where you'll keep your projects. Feel free to configure
all this to suit your tastes and existing setup.

This is what the target setup will look like, assuming that the OpenUI5
folder that we're talking about will be in your home folder, and the
projects folder will be inside that.

```
<home>
  |
  +-- OpenUI5-OSCON-2014/
        |
        +-- package.json
        +-- static_server.js
        |
        +-- openui5-sdk/          // unpacked OpenUI5 SDK
        |
        +-- projects/             // where your OpenUI5 projects go
              |
              +-- ...
```

## Step by Step

### 1. Clone this repo

Clone [this repo](https://github.com/BluefinSolutions/OpenUI5-OSCON-2014/)
to your home folder, or just use the "Download ZIP" button on the repository page and extract the folder (make sure to remove the "-master" appended at the end of the folder name). You should see the following
(and `projects/` will be an empty folder, save for a `.gitignore` file in it):

```
<home>
  |
  +-- OpenUI5-OSCON-2014/
        |
        +-- package.json
        +-- static_server.js
        |
        +-- projects/
```

### 2. Download and unpack the latest OpenUI5 SDK

From the [OpenUI5 download page](http://openui5.org/download.html), retrieve the
latest SDK (version 1.22.4, make sure it's the "UI5 SDK" and not just the runtime).

Create a new folder named `openui5-sdk/`
and unpack the contents of the SDK into it. You should end up with something like
this:

```
<home>
  |
  +-- OpenUI5-OSCON-2014/
        |
        +-- package.json
        +-- static_server.js
        |
        +-- openui5-sdk/
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
(From now on the contents of the `openui5-sdk/` folder won't be shown).

### 3. Install required modules

This is where the `package.json` comes in. The simple web server
`static_server.js` uses a couple of NodeJS modules. These are declared
in `package.json`.

While in the `OpenUI5-OSCON-2014/` folder with a console window, install the modules like
this:

`npm install`

This will perform an install local to this folder (rather than a global install),
creating a `node_modules/` folder in the process.

When behind a proxy, npm will complain and you have to configure the proxy first, like
```
npm config set proxy http://proxy:8080
npm config set https-proxy http://proxy:8080
```

### 5. Start up the server

While still in the `OpenUI5-OSCON-2014/` folder, start up the web
server like this:

`node ./static_server.js`

and your browser should open showing your local OpenUI5 SDK. You're
all set!
