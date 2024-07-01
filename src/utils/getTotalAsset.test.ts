import fixtures from '@/fixtures';
import getTotalAssets from './getTotalAsset';

const { assetList } = fixtures;
describe('getTotalAssets', () => {
  it('returns sum of total Assets price', () => {
    expect(getTotalAssets(assetList)).toBe(11_400_000);
  });
});
