/*
 * Common variables
 */
const prefixes = ['MOZ_', 'WEBKIT_', 'O_', 'MS_', ''];
const atRe = /^@/;

/*
 * Feature test CSS at-rule support
 *
 * @param {String} rule
 * @return {Boolean}
 */
export default function isAtRuleSupported(rule) {
    let support = false;
    let length = prefixes.length;
    rule = rule.replace(atRe, '').toUpperCase().split('-').join('_') + '_RULE';
    while (!support && length--) {
        support = (prefixes[length] + rule) in CSSRule;
    }
    return support;
}
