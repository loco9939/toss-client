import { Asset } from '@/types';
import convertKRW from '@/utils/convertKRW';
import getTotalAssets from '@/utils/getTotalAsset';
import SummaryBarChart from './SummaryBarChart';

type SummaryProps = {
  assetList: Asset[];
};

const Summary = ({ assetList }: SummaryProps) => {
  const totalAssetPrice = getTotalAssets(assetList);
  return (
    <section>
      <h2>총자산</h2>
      <span>{convertKRW(totalAssetPrice)}원</span>

      <SummaryBarChart assetList={assetList} />
    </section>
  );
};

export default Summary;
