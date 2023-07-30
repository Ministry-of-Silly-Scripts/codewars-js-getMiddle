const { getMiddle } = require('../src/index');

describe('the getMiddle canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('getMiddle', () => {
  it('should return "A" for input equalt to "A"', () => {
    expect(getMiddle('A')).toBe('A');
  });

  it('should return "b" for input equalt to "AbA"', () => {
    expect(getMiddle('AbA')).toBe('b');
  });
});
