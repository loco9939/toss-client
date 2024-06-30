import fixtures from '@/fixtures';
import comparePrice from './comparePrice';
import convertAssetResponse from './convertAssetResponse';

const { assetResponse, prevAssetResponse } = fixtures;
const assetList = convertAssetResponse(assetResponse);
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
    const deptAsset = assetList.find(asset => asset.name === 'dept') ?? {
      name: 'dept',
      price: 0,
    };
    expect(comparePrice(deptAsset, prevAssetResponse)).toBe(-1000000);
  });
});
