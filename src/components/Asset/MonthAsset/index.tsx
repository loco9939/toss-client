import PieChart from '@/components/PieChart';
import { LatestAsset } from '@/types';

type MonthAssetProps = {
  asset?: LatestAsset;
};

const MonthAsset = ({ asset }: MonthAssetProps) => {
  if (!asset) {
    return <p>등록된 자산이 없습니다.</p>;
  }
  return (
    <div>
      <PieChart data={[]} />
      <p>N월</p>
    </div>
  );
};

export default MonthAsset;
