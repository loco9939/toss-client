import convertPrice from './convertPrice';

const context = describe;
describe('convertPrice', () => {
  context('when it received less than 99_999_999', () => {
    it('returns the value converted to "만원" unit', () => {
      expect(convertPrice(10_000)).toBe('1만원');
      expect(convertPrice(20_000)).toBe('2만원');
      expect(convertPrice(100_000)).toBe('10만원');
      expect(convertPrice(50_000_000)).toBe('5000만원');
    });
  });

  context('when it received greater than 100_000_000', () => {
    it('returns the value converted to "만원" unit', () => {
      expect(convertPrice(100_000_000)).toBe('1억원');
      expect(convertPrice(200_000_000)).toBe('2억원');
      expect(convertPrice(1_000_000_000)).toBe('10억원');
      expect(convertPrice(50_000_000_000)).toBe('500억원');
    });
  });

  context('when it received negative number', () => {
    it('returns the value converted unit with negative', () => {
      expect(convertPrice(-10_000)).toBe('1만원');
      expect(convertPrice(-20_000)).toBe('2만원');
      expect(convertPrice(-1_000_000_000)).toBe('10억원');
      expect(convertPrice(-50_000_000_000)).toBe('500억원');
    });
  });
});
