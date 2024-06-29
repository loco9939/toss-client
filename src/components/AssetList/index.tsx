import { ASSET_DISPLAY, Asset, AssetResponse } from '../../types';

import convertPrice from '@/utils/convertPrice';
import comparePrice from '../../utils/comparePrice';
import convertKRW from '../../utils/convertKRW';

type AssetListProps = {
  assetList: Asset[];
  prevAsset?: AssetResponse;
};

const AssetList = ({ assetList, prevAsset }: AssetListProps) => {
  return (
    <ul>
      {assetList.map(asset => {
        const priceComparison = comparePrice(asset,prevAsset);
        const convertedPrice = convertPrice(priceComparison)
        return (
          <li key={asset.name}>
            <i>icon</i>
            <div>
              <div>
                <p>{ASSET_DISPLAY[asset.name]}</p>
                <p>{convertKRW(asset.price)}원</p>
              </div>
              <div>
                <p>7%</p>
                {prevAsset && <p>지난달보다 {convertedPrice}</p>}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default AssetList;
