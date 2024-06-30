import { Asset, AssetResponse } from '@/types';

const convertAssetResponse = (asset: AssetResponse): Asset[] => {
  const assetList: Asset[] = [];

  Object.entries(asset).forEach(([key, value]) => {
    if (key !== 'id' && key !== 'date') {
      assetList.push({ name: key, price: value as number });
    }
  });
  return assetList;
};

export default convertAssetResponse;
