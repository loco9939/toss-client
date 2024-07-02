import { Asset } from '@/types';

const convertAssetResponse = (
  asset: Record<string, number | string>,
): Asset[] => {
  const assetList: Asset[] = [];

  Object.entries(asset).forEach(([key, value]) => {
    if (key !== 'id' && key !== 'date') {
      assetList.push({ name: key, price: value as number });
    }
  });
  return assetList;
};

export default convertAssetResponse;
