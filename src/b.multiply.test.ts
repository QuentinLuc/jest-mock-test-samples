import { multiply } from "./multiply";

describe('Multiply', () => {
    it('multiply 4 * 5 = ', () => {
        expect(multiply(4, 5)).toBe(20);
    });
});