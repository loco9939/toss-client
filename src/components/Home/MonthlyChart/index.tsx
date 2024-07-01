import { Asset } from '@/types';
import convertPrice from '@/utils/convertPrice';
import getTotalAssets from '@/utils/getTotalAsset';

type MonthlyChartProps = {
  assetList: Asset[];
  prevAssetList: Asset[];
};

const MonthlyChart = ({ assetList, prevAssetList }: MonthlyChartProps) => {
  const totalAssetPrice = getTotalAssets(assetList);
  const totalPrevAssetPrice = getTotalAssets(prevAssetList);

  const comparisonPrice = totalAssetPrice - totalPrevAssetPrice;
  const isPositiveInt = comparisonPrice > 0;
  const priceStr = convertPrice(comparisonPrice);
  return (
    <div>
      <p>총자산이 지난달보다</p>
      <p>
        {priceStr}
        {isPositiveInt ? '늘었어요' : '줄었어요'}
      </p>
    </div>
  );
};

export default MonthlyChart;
