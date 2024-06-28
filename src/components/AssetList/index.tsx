import { ASSET_DISPLAY, Asset, AssetResponse } from '../../types';
import convertKRW from '../../utils/convertKRW';

type AssetListProps = {
  assetList: Asset[];
  prevAsset?: AssetResponse;
};

const AssetList = ({ assetList, prevAsset }: AssetListProps) => {
  return (
    <ul>
      {assetList.map(asset => {
        const priceComparison =
          asset.price -
          (prevAsset
            ? prevAsset[asset.name as keyof Omit<AssetResponse, 'id' | 'date'>]
            : asset.price);
        return (
          <li>
            <i>icon</i>
            <div>
              <div>
                <p>{ASSET_DISPLAY[asset.name]}</p>
                <p>{convertKRW(asset.price)}원</p>
              </div>
              <div>
                <p>7%</p>
                {prevAsset && <p>지난달보다 +00만원</p>}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default AssetList;
