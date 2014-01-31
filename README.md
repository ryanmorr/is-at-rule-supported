# isRuleSupported

Feature test support for CSS at-rules in JavaScript by checking for the existance of the corresponding type constant of the `CSSRule` interface. Please refer to [http://www.ryanmorr.com/feature-testing-css-at-rules/](http://www.ryanmorr.com/feature-testing-css-at-rules/) to read more.

## Usage

To use the method, simply provide a string of the CSS at-rule

```javascript
// is the @keyframes rule supported
isRuleSupported('keyframes');
// is the @font-face rule supported
isRuleSupported('font-face');
// is the @supports rule supported
isRuleSupported('supports');
```

## Tests

Included is a test file that feature tests the browser's support for various at-rules currently defined in the specification. Open `test.html` in your browser to view. See a working example at [http://ryanmorr.com/demos/is-rule-supported/](http://ryanmorr.com/demos/is-rule-supported/).

## Browser Support

Chrome, Firefox, Opera, Safari, Internet Explorer 9+

## License

This project is dedicated to the public domain as described by the [Unlicense](http://unlicense.org/).
