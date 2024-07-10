import fixtures from '@/fixtures';
import addMissingMonths from './addMissingMonths';

const { yearAssets, yearAssetsResponse } = fixtures;
describe('addMissingMonths', () => {
  it('returns by adding missing month', () => {
    expect(addMissingMonths(yearAssetsResponse)).toEqual(yearAssets);
  });
});
