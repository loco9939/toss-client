import convertKRW from './convertKRW';

const context = describe;
describe('convertKRW', () => {
  context('when it received 1 ~ 999', () => {
    it('it returns price as it is but string', () => {
      expect(convertKRW(1)).toBe('1');
      expect(convertKRW(999)).toBe('999');
    });
  });

  context('when it received 1000 ~ 10000', () => {
    it('it returns a string seperated by "," for every thousand units ', () => {
      expect(convertKRW(1000)).toBe('1,000');
      expect(convertKRW(10000)).toBe('10,000');
    });
  });
});
