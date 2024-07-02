import { Asset, AssetResponse } from '@/types';

import getTotalAssets from '@/utils/getTotalAsset';
import styled from 'styled-components';
import AssetItem from './AssetItem';

type AssetListProps = {
  assetList: Asset[];
  prevAsset?: AssetResponse;
};

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`;

const AssetList = ({ assetList, prevAsset }: AssetListProps) => {
  const totalPrice = getTotalAssets(assetList);
  return (
    <List>
      {assetList.map(asset => (
        <AssetItem
          key={asset.name}
          asset={asset}
          prevAsset={prevAsset}
          totalPrice={totalPrice}
        />
      ))}
    </List>
  );
};

export default AssetList;
