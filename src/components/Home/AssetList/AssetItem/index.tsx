import { ASSET_DISPLAY, Asset, AssetResponse } from '@/types';
import comparePrice from '@/utils/comparePrice';
import convertKRW from '@/utils/convertKRW';
import convertPrice from '@/utils/convertPrice';
import styled from 'styled-components';

type AssetItemProps = {
  asset: Asset;
  prevAsset?: AssetResponse;
};

const ListItem = styled.li`
  display: flex;
  gap: 21px;
  justify-content: space-between;

  padding: 8px 12px;
`;

const Icon = styled.i`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: gray;
`;

const TextBoxWrapper = styled.div`
  flex-grow: 1;
`;

const TextFirRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const TextSecRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AssetItem = ({ asset, prevAsset }: AssetItemProps) => {
  const priceComparison = comparePrice(asset, prevAsset);
  const convertedPrice = convertPrice(priceComparison);
  return (
    <ListItem>
      <Icon role='icon' />
      <TextBoxWrapper role='info'>
        <TextFirRow>
          <p>{ASSET_DISPLAY[asset.name]}</p>
          <p>{convertKRW(asset.price)}원</p>
        </TextFirRow>
        <TextSecRow>
          <p>7%</p>
          {prevAsset && <p>지난달보다 {convertedPrice}</p>}
        </TextSecRow>
      </TextBoxWrapper>
    </ListItem>
  );
};

export default AssetItem;
