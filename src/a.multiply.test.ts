import { multiply } from "./multiply";

jest.mock('./multiply', () => {
    return {
        multiply: jest.fn().mockImplementation(() => {
            return 22;
        })
    };
});

describe('Multiply - Mock', () => {
    it('multiply 4 * 5 = ', () => {
        expect(multiply(4, 5)).toBe(22);
    });
});