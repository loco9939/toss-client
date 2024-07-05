import parseKRW from './parseKRW';

describe('parseKRW', () => {
  it('returns parsed ","', () => {
    expect(parseKRW('10,000')).toBe('10000');
    expect(parseKRW('1,000,000')).toBe('1000000');
    expect(parseKRW('1000')).toBe('1000');
  });
});
