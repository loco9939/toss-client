import BarChart from '@/components/BarChart';
import fixtures from '@/fixtures';
import { Asset } from '@/types';
import convertPrice from '@/utils/convertPrice';
import getTotalAssets from '@/utils/getTotalAsset';
import styled from 'styled-components';

type MonthlyChartProps = {
  assetList: Asset[];
  prevAssetList: Asset[];
};

const Container = styled.div`
  margin-top: 24px;
  padding-block: 12px;
`;

const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextBox = styled.div`
  line-height: 1.3;
  font-size: 2rem;
`;

const Emoji = styled.p`
  font-size: 4rem;
`;

const { latestAssets } = fixtures;
const MonthlyChart = ({ assetList, prevAssetList }: MonthlyChartProps) => {
  const totalAssetPrice = getTotalAssets(assetList);
  const totalPrevAssetPrice = getTotalAssets(prevAssetList);

  const comparisonPrice = totalAssetPrice - totalPrevAssetPrice;
  const isPositiveInt = comparisonPrice > 0;
  const priceStr = convertPrice(comparisonPrice);
  return (
    <Container>
      <Summary>
        <TextBox>
          <p>총자산이 지난달보다</p>
          <p>
            {priceStr}
            {isPositiveInt ? ' 늘었어요' : ' 줄었어요'}
          </p>
        </TextBox>
        <Emoji>😀</Emoji>
      </Summary>
      <BarChart data={latestAssets} />
    </Container>
  );
};

export default MonthlyChart;
