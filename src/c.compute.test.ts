import { Compute } from './compute';


describe('Compute - Mock', () => {

  let compute: Compute;
  let spiedSum: jest.SpyInstance;

  beforeEach(() => {
    compute = new Compute();
    
    spiedSum = jest.spyOn(compute, 'sum').mockImplementation(() => {
      return 12;
    });
    jest.spyOn(compute, 'sub').mockImplementation(() => {
      return 99;
    });
  });

  it('adds 5 + 4 to equal 9', () => {
    expect(compute.sum(5, 4)).toBe(12);
  });

  it('subs 5 - 1 to equal 4', () => {
    expect(compute.sub(5, 1)).toBe(99);
  });

  it('restore original function', () => {
    spiedSum.mockRestore();
    expect(compute.sum(2, 3)).toBe(5);
  });
});
