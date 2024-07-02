import { ASSET_DISPLAY, ASSET_ICON, Asset, AssetResponse } from '@/types';
import comparePrice from '@/utils/comparePrice';
import convertKRW from '@/utils/convertKRW';
import convertPrice from '@/utils/convertPrice';
import styled from 'styled-components';

type AssetItemProps = {
  asset: Asset;
  prevAsset?: AssetResponse;
  totalPrice: number;
};

const ListItem = styled.li`
  display: flex;
  gap: 21px;
  justify-content: space-between;

  padding: 8px 0;
`;

const Icon = styled.img`
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
  margin-bottom: 8px;
`;

const TextSecRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Percent = styled.p`
  color: ${props => props.theme.colors['text-secondary']};
  font-size: 1.4rem;
`;

const AssetItem = ({ asset, prevAsset, totalPrice }: AssetItemProps) => {
  const priceComparison = comparePrice(asset, prevAsset);
  const convertedPrice = convertPrice(priceComparison);
  const isPositiveInt = priceComparison > 0;
  const percent = ((asset.price / totalPrice) * 100).toFixed();
  return (
    <ListItem>
      <Icon role='icon' src={ASSET_ICON[asset.name]} />
      <TextBoxWrapper role='info'>
        <TextFirRow>
          <p>{ASSET_DISPLAY[asset.name]}</p>
          <p>{convertKRW(asset.price)}원</p>
        </TextFirRow>
        <TextSecRow>
          <Percent>{percent}%</Percent>
          {prevAsset && (
            <p>
              지난달보다
              {`${isPositiveInt ? '+' : '-'}${convertedPrice}`}
            </p>
          )}
        </TextSecRow>
      </TextBoxWrapper>
    </ListItem>
  );
};

export default AssetItem;
