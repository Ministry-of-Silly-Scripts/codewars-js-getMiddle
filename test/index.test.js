const { getMiddle } = require('../src/index');

describe('the getMiddle canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('getMiddle', () => {
  it('should return "A" for input equal to "A"', () => {
    expect(getMiddle('A')).toBe('A');
  });

  it('should return "b" for input equal to "AbA"', () => {
    expect(getMiddle('AbA')).toBe('b');
  });

  it('should return "t" for input equal to "testing"', () => {
    expect(getMiddle('testing')).toBe('t');
  });

  it('should return "aa" for input equal to "aa"', () => {
    expect(getMiddle('aa')).toBe('aa');
  });

  it('should return "ab" for input equal to "ab"', () => {
    expect(getMiddle('ab')).toBe('ab');
  });

  it('should return "dd" for input equal to "middle"', () => {
    expect(getMiddle('middle')).toBe('dd');
  });
});
