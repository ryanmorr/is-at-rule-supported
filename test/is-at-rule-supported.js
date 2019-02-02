import isAtRuleSupported from '../src/is-at-rule-supported';

describe('isAtRuleSupported', () => {
    const rules = [
        'charset',
        'font-face',
        'import',
        'keyframes',
        'media',
        'style'
    ];

    rules.forEach((rule) => {
        it(`should return true for the ${rule} at-rule`, () => {
            expect(isAtRuleSupported('@' + rule)).to.equal(true);
        });
    });

    it('should return false for unsupported at-rules', () => {
        const rules = [
            'foo',
            'bar',
            'baz'
        ];
        rules.forEach((rule) => {
            expect(isAtRuleSupported('@' + rule)).to.equal(false);
        });
    });
});
