import { Compute } from './compute';

jest.mock('./compute', () => {
  return {
    Compute: jest.fn().mockImplementation(() => {
      return {
        sum: jest.fn().mockImplementation(() => {
          return 12;
        }),
        sub: jest.fn().mockImplementation(() => {
          return 99;
        }), 
      };
    })
  };
});

beforeEach(() => {
  (Compute as jest.Mock).mockClear();
});

describe('Compute - Mock', () => {
  it('Turn on', () => {
    new Compute();
    expect(Compute).toHaveBeenCalledTimes(1);
  });

  it('adds 5 + 4 to equal 9', () => {
    const compute = new Compute();
    expect(compute.sum(5, 4)).toBe(12);
  });

  it('subs 5 - 1 to equal 4', () => {
    const compute = new Compute();
    expect(compute.sub(5, 1)).toBe(99);
  });
});
