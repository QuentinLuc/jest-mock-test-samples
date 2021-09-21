import StringUtils from "./string-utils";

describe('StringUtils', () => {
    it('merge aaa, bbb = ', () => {
        const stringUtils = new StringUtils();
        expect(stringUtils.merge('aaa', 'bbb')).toBe('aaabbb');
    });
});