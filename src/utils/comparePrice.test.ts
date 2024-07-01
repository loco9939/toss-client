import fixtures from '@/fixtures';
import comparePrice from './comparePrice';

const { assetList, prevAssetResponse } = fixtures;
describe('comparePrice', () => {
  it('returns the gap between prev asset and curr asset', () => {
    const dwAsset = assetList.find(asset => asset.name === 'dw') ?? {
      name: 'dw',
      price: 0,
    };
    expect(comparePrice(dwAsset, prevAssetResponse)).toBe(100000);
  });

  it('returns the gap between prev asset and curr asset', () => {
    const savingAsset = assetList.find(asset => asset.name === 'saving') ?? {
      name: 'saving',
      price: 0,
    };
    expect(comparePrice(savingAsset, prevAssetResponse)).toBe(500000);
  });

  it('returns the gap between prev asset and curr asset', () => {
    const debtAsset = assetList.find(asset => asset.name === 'debt') ?? {
      name: 'debt',
      price: 0,
    };
    expect(comparePrice(debtAsset, prevAssetResponse)).toBe(-1000000);
  });
});
