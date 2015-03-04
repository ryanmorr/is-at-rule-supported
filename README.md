# isAtRuleSupported

Feature test support for CSS at-rules in JavaScript by checking for the existance of the corresponding type constant of the `CSSRule` interface. Please refer to the [blog post](http://www.ryanmorr.com/feature-testing-css-at-rules/) to read more, or see a working example on [CodePen](http://codepen.io/ryanmorr/pen/XJMYOG).

## Usage

To use the method, simply provide a string of the CSS at-rule

```javascript
// is the @keyframes rule supported
isAtRuleSupported('@keyframes');
// is the @font-face rule supported
isAtRuleSupported('@font-face');
// is the @supports rule supported
isAtRuleSupported('@supports');
```

## Browser Support

* Chrome *
* Android *
* Firefox *
* Opera *
* Safari *
* Internet Explorer 9+

## License

This project is dedicated to the public domain as described by the [Unlicense](http://unlicense.org/).
