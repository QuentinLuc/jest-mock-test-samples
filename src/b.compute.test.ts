import { Compute } from './compute';

describe('Compute', () => {
  it('adds 5 + 4 to equal 9', () => {
    const compute = new Compute();
    expect(compute.sum(5, 4)).toBe(9);
  });

  it('subs 5 - 1 to equal 4', () => {
    const compute = new Compute();
    expect(compute.sub(5, 1)).toBe(4);
  });
});
