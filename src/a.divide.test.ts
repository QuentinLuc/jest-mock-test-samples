import divide from "./divide";

jest.mock('./divide', () => {
    return {
        __esModule: true,
        default: jest.fn().mockImplementation(() => {
            return 12;
        }),
    };
 });

describe('Divide - Mock', () => {
    it('divide 100 / 10 = 10', () => {
        expect(divide(100, 10)).toBe(12);
    });
});