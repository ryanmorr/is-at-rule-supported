/*
 * isAtRuleSupported
 * Feature test CSS at-rule support
 * @param {String} rule
 * @return {Boolean}
 */

(function(win){
    'use strict'; 

    var CSSRule = win.CSSRule, 
    prefixes = ['MOZ_', 'WEBKIT_', 'O_', 'MS_', ''], 
    atRe = /^@/,
    support, 
    length;

    win.isAtRuleSupported = function(rule){
        // If the `CSSRule` interface doesn't exist, return undefined
        if(!win.CSSRule){
            return undefined;
        }
        support = false;
        // Convert the rule string to a form compatible with the `CSSRule` type constants: 
        // https://wiki.csswg.org/spec/cssom-constants#cssruletype-enumeration
        rule = rule.replace(atRe, '').toUpperCase().split('-').join('_') + '_RULE';
        length = prefixes.length;
        while(!support && length--){
            // Starting with the unprefixed version, iterate over all the vendor
            // prefixes to determine browser support
            support = (prefixes[length] + rule) in CSSRule;
        }
        return support;
    };
	
})(this);