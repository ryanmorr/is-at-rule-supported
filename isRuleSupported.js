/*
 * isRuleSupported
 * Feature test CSS at-rule support
 * @param {String} rule
 * @return {Boolean}
 */

(function(win){
    'use strict'; 

    // Create a shortcut for the CSSRule interface
    var CSSRule = win.CSSRule, 
    // Define prefixes as they are used in this context
    prefixes = ['MOZ_', 'WEBKIT_', 'O_', 'MS_', ''], 
    // Define common variables
    support, 
    length;

    // Define the function globally
    win.isRuleSupported = function(rule, unprefixed){
        unprefixed = typeof unprefixed !== 'undefined' ?  unprefixed : false;
        // Convert the rule name to a form compatible with the CSSRule type constants
        rule = rule.toUpperCase().split('-').join('_') + '_RULE';
        // If we are looking for unprefixed support, we don't need to loop through anything; just
        // check for the rule name in the CSSRule window property
        if (unprefixed) {
            return rule in CSSRule;
        }
        // Support is false to start, must be proven
        support = false;
        // Cache the length of prefixes for the while loop
        length = prefixes.length;
        // Loop the prefixes while support is yet to be determined
        while(!support && length--){
            // Support will be tested with no prefix first before 
            // prepending each vendor prefix to the constant name and testing it
            support = (prefixes[length] + rule) in CSSRule;
        }
        // Return support
        return support;
    };
	
})(this);