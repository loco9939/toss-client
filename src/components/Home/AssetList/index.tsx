import { Asset, AssetResponse } from '@/types';

import AssetItem from './AssetItem';

type AssetListProps = {
  assetList: Asset[];
  prevAsset?: AssetResponse;
};

const AssetList = ({ assetList, prevAsset }: AssetListProps) => {
  return (
    <ul>
      {assetList.map(asset => (
        <AssetItem key={asset.name} asset={asset} prevAsset={prevAsset} />
      ))}
    </ul>
  );
};

export default AssetList;
