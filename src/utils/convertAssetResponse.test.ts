import fixtures from '../fixtures';
import convertAssetResponse from './convertAssetResponse';

const { assetResponse } = fixtures;
describe('convertAssetResponse', () => {
  it('returns assetList', () => {
    const assetList = convertAssetResponse(assetResponse);

    expect(assetList).toHaveLength(5);
    expect(assetList[0]).toHaveProperty('name');
    expect(assetList[0]).toHaveProperty('price');
  });
});
