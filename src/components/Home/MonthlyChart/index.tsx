import BarChart from '@/components/BarChart';
import convertAssetResponse from '@/utils/convertAssetResponse';
import convertPrice from '@/utils/convertPrice';
import getTotalAssets from '@/utils/getTotalAsset';
import styled from 'styled-components';

type MonthlyChartProps = {
  latestAssets: Record<string, number | string>[];
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

const MonthlyChart = ({ latestAssets }: MonthlyChartProps) => {
  const [currentAsset, prevAsset] = latestAssets;
  const currentAssetList = convertAssetResponse(currentAsset);
  const prevAssetList = convertAssetResponse(prevAsset);
  const totalAssetPrice = getTotalAssets(currentAssetList);
  const totalPrevAssetPrice = getTotalAssets(prevAssetList);

  const comparisonPrice = totalAssetPrice - totalPrevAssetPrice;
  const isPositiveInt = comparisonPrice > 0;
  const priceStr = convertPrice(comparisonPrice);

  // [{dw:13,saving:14}, ...]
  // [{name:'1월', amount:13+14}]
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
      <BarChart data={[]} />
    </Container>
  );
};

export default MonthlyChart;
