import BarChart from '@/components/BarChart';
import { Asset } from '@/types';
import convertKRW from '@/utils/convertKRW';
import getTotalAssets from '@/utils/getTotalAsset';

type SummaryProps = {
  assetList: Asset[];
};

const Summary = ({ assetList }: SummaryProps) => {
  const totalAssetPrice = getTotalAssets(assetList);
  return (
    <section>
      <h2>총자산</h2>
      <span>{convertKRW(totalAssetPrice)}원</span>

      <BarChart assetList={assetList} />
    </section>
  );
};

export default Summary;
