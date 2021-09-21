import divide from "./divide";

describe('Divide', () => {
    it('divide 100 / 10 = 10', () => {
        expect(divide(100, 10)).toBe(10);
    });
});