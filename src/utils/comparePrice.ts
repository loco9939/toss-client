import { Asset, AssetResponse } from '../types';

const comparePrice = (curAsset: Asset, prevAssetResponse: AssetResponse) => {
  return (
    curAsset.price -
    (prevAssetResponse
      ? prevAssetResponse[
          curAsset.name as keyof Omit<AssetResponse, 'id' | 'date'>
        ]
      : curAsset.price)
  );
};

export default comparePrice;
