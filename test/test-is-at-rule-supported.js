describe('isAtRuleSupported', function(){
    'use strict';

    // Thanks to Modernizr: https://github.com/Modernizr/Modernizr/blob/master/test/browser/src/atRule.js

    it('should return undefined when the browser does not support CSSRule', function(){
        var ref = window.CSSRule;
        window.CSSRule = undefined;
        expect(isAtRuleSupported('charset')).to.equal(undefined);
        window.CSSRule = ref;
    });

    if(window.CSSRule){
        it('should return true when an at-rule is supported', function(){
            expect(isAtRuleSupported('@style')).to.equal(true);
            expect(isAtRuleSupported('@import')).to.equal(true);
        });

        it('should return false when an at-rule is not supported', function(){
            expect(isAtRuleSupported('@foo')).to.equal(false);
        });
    }

});