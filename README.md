# isAtRuleSupported

[![Version Badge][version-image]][project-url]
[![Build Status][build-image]][build-url]
[![License][license-image]][license-url]

> Feature test support for CSS at-rules

## Install

Download the [development](http://github.com/ryanmorr/is-at-rule-supported/raw/master/dist/is-at-rule-supported.js) or [minified](http://github.com/ryanmorr/is-at-rule-supported/raw/master/dist/is-at-rule-supported.min.js) version, or install via NPM:

``` sh
npm install @ryanmorr/is-at-rule-supported
```

## Usage

To use the method, simply provide a string of the CSS at-rule:

```javascript
import isAtRuleSupported from '@ryanmorr/is-at-rule-supported';

// Check if the @keyframes rule supported
isAtRuleSupported('@keyframes');

// Check if the @supports rule supported
isAtRuleSupported('@supports');
```

## License

This project is dedicated to the public domain as described by the [Unlicense](http://unlicense.org/).

[project-url]: https://github.com/ryanmorr/is-at-rule-supported
[version-image]: https://badge.fury.io/gh/ryanmorr%2Fis-at-rule-supported.svg
[build-url]: https://travis-ci.org/ryanmorr/is-at-rule-supported
[build-image]: https://travis-ci.org/ryanmorr/is-at-rule-supported.svg
[license-image]: https://img.shields.io/badge/license-Unlicense-blue.svg
[license-url]: UNLICENSE
