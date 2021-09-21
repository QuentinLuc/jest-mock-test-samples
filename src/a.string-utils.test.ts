import StringUtils from "./string-utils";

jest.mock('./string-utils', () => {
    return {
        __esModule: true,
        default: jest.fn().mockImplementation(() => {
            return {
              merge: jest.fn().mockImplementation(() => {
                return 'ttt';
              }),
            };
          })
    };
});

describe('StringUtils', () => {
    it('merge aaa, bbb = ', () => {
        const stringUtils = new StringUtils();
        expect(stringUtils.merge('aaa', 'bbb')).toBe('ttt');
    });
});