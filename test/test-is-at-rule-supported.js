describe('isAtRuleSupported', function(){
    'use strict';

    var expect = chai.expect;

    // Thanks to Modernizr: https://github.com/Modernizr/Modernizr/blob/master/test/browser/src/atRule.js

    it('should return undefined when the browser does not support CSSRule', function(){
        var ref = window.CSSRule;
        window.CSSRule = undefined;
        expect(isAtRuleSupported('charset')).to.equal(undefined);
        window.CSSRule = ref;
    });

    if(window.CSSRule){
        it('should return true when an at-rule is supported', function(){
            var rules = [
                'style',
                'import'
            ];
            rules.forEach(function(rule){
                expect(isAtRuleSupported('@' + rule)).to.equal(true);
            });
        });

        it('should return false when an at-rule is not supported', function(){
            var rules = [
                'foo',
                'bar',
                'baz'
            ];
            rules.forEach(function(rule){
                expect(isAtRuleSupported('@' + rule)).to.equal(false);
            });
        });
    }

});