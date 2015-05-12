# WebVR Boilerplate

A starting point for web-based VR experiences that work well in both
Google Cardboard and Oculus Rift. Also provides a good fallback for
experiencing the same content without requiring a VR device.

Uses the [webvr-polyfill project][polyfill] to provide VR support even
if no VR device is available. This gives good fallbacks for Cardboard,
mobile devices and desktop devices.

[polyfill]: https://github.com/borismus/webvr-polyfill

# What's inside...

[**THREE.js** `three.min.js`](http://threejs.org/)

- WebGL helper library that greatly simplifies 3D graphics.

[**VRControls** `VRControls.js`](https://github.com/mrdoob/three.js/blob/master/examples/js/controls/VRControls.js)

- THREE.js controls which take advantage of the WebVR API.
- Usually attached to the THREE.Camera to look around the scene.

[**VREffect** `VREffect.js`](https://github.com/mrdoob/three.js/blob/master/examples/js/effects/VREffect.js)

- THREE.js effect which renders a scene with two cameras in it.
- Puts the two images side-by-side.

[**WebVR polyfill** `webvr-polyfill.js`](https://github.com/borismus/webvr-polyfill)

- For Cardboard rendering.
- On mobile, supports rotation via DeviceOrientation.
- On desktop, supports looking with the mouse or with arrow keys.

**WebVR manager** `webvr-manager.js` (lives in this repository)

- Feature detects for WebVR (or the polyfill).
- If WebVR is available, places an active WebVR button on the bottom.
- Other means of getting into VR mode: double click anywhere, double tap
  anywhere.
- For desktop, if an HMD is connected, goes into split-screen rendering
  mode. Otherwise, goes into immersive fullscreen mode (with pointer lock).
- For mobile, goes into Cardboard side-by-side rendering mode.

TODO: Provide a configuration UI for switching modes if we guessed
wrong.

# Instructions

1. Include webvr-polyfill.js in your project.
2. Include webvr-manager.js and instantiate a WebVRManager object,
   passing in your VREffect instance (from the THREE.js effect library)
   as first argument.

For example,

    var effect = new THREE.VREffect(renderer);
    var mgr = new WebVRManager(effect);

For more information, see index.html, which should be well commented and
self-explanatory.


# Related projects

- WebVR Polyfill: <https://github.com/borismus/webvr-polyfill>
- A yeoman-based getting started template: <https://github.com/dmarcos/vrwebgl>
- LEAP's VR quickstart: <https://github.com/leapmotion-examples/javascript/blob/master/v2/vr-quickstart/index.html>
- A WebVR Polyfill that is unfortunately incomplete: <https://github.com/thomasfoster96/WebVR-polyfill>
- A three.js + VR starting point: <https://github.com/MozVR/vr-web-examples/tree/master/threejs-vr-boilerplate>


# Useful resources

- Cardboard Java SDK: https://github.com/googlesamples/cardboard-java
- Brandon's info on Chrome's WebVR implementation: http://blog.tojicode.com/2014/07/bringing-vr-to-chrome.html
- Vlad's quick guide to the WebVR API: http://blog.bitops.com/blog/2014/06/26/first-steps-for-vr-on-the-web/
- The WebVR IDL: https://github.com/vvuk/gecko-dev/blob/oculus/dom/webidl/VRDevice.webidl




# [HTML5 Boilerplate](https://html5boilerplate.com)

[![Build Status](https://travis-ci.org/h5bp/html5-boilerplate.svg)](https://travis-ci.org/h5bp/html5-boilerplate)
[![devDependency Status](https://david-dm.org/h5bp/html5-boilerplate/dev-status.svg)](https://david-dm.org/h5bp/html5-boilerplate#info=devDependencies)

HTML5 Boilerplate is a professional front-end template for building
fast, robust, and adaptable web apps or sites.

This project is the product of many years of iterative development and
combined community knowledge. It does not impose a specific development
philosophy or framework, so you're free to architect your code in the
way that you want.

* Homepage: [https://html5boilerplate.com](https://html5boilerplate.com)
* Source: [https://github.com/h5bp/html5-boilerplate](https://github.com/h5bp/html5-boilerplate)
* Twitter: [@h5bp](https://twitter.com/h5bp)


## Quick start

Choose one of the following options:

1. Download the latest stable release from
   [html5boilerplate.com](https://html5boilerplate.com/) or create a
   custom build using [Initializr](http://www.initializr.com).
2. Clone the git repo — `git clone
   https://github.com/h5bp/html5-boilerplate.git` - and checkout the
   [tagged release](https://github.com/h5bp/html5-boilerplate/releases)
   you'd like to use.


## Features

* HTML5 ready. Use the new elements with confidence.
* Designed with progressive enhancement in mind.
* Includes:
  * [`Normalize.css`](https://necolas.github.com/normalize.css/)
    for CSS normalizations and common bug fixes
  * [`jQuery`](https://jquery.com/) via CDN, with a local fallback
  * A custom build of  [`Modernizr`](http://modernizr.com/) for feature
    detection
  * [`Apache Server Configs`](https://github.com/h5bp/server-configs-apache)
    that, among other, improve the web site's performance and security
* Placeholder CSS Media Queries.
* Useful CSS helper classes.
* Default print styles, performance optimized.
* An optimized version of the Google Universal Analytics snippet.
* Protection against any stray `console` statements causing JavaScript
  errors in older browsers.
* "Delete-key friendly." Easy to strip out parts you don't need.
* Extensive inline and accompanying documentation.


## Browser support

* Chrome *(latest 2)*
* Firefox *(latest 2)*
* Internet Explorer 8+
* Opera *(latest 2)*
* Safari *(latest 2)*

*This doesn't mean that HTML5 Boilerplate cannot be used in older browsers,
just that we'll ensure compatibility with the ones mentioned above.*

If you need legacy browser support (IE 6+, Firefox 3.6+, Safari 4+) you
can use [HTML5 Boilerplate v4](https://github.com/h5bp/html5-boilerplate/tree/v4),
but is no longer actively developed.


## Documentation

Take a look at the [documentation table of contents](dist/doc/TOC.md).
This documentation is bundled with the project, which makes it readily
available for offline reading and provides a useful starting point for
any documentation you want to write about your project.


## Contributing

Hundreds of developers have helped make the HTML5 Boilerplate what it is
today. Anyone and everyone is welcome to [contribute](CONTRIBUTING.md),
however, if you decide to get involved, please take a moment to review
the [guidelines](CONTRIBUTING.md):

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)


## License

The code is available under the [MIT license](LICENSE.txt).
