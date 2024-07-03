import { Asset } from '@/types';
import convertKRW from '@/utils/convertKRW';
import getTotalAssets from '@/utils/getTotalAsset';
import styled from 'styled-components';
import SummaryBarChart from './SummaryBarChart';

type SummaryProps = {
  assetList: Asset[];
};

const Title = styled.h2`
  color: ${props => props.theme.colors['text-secondary']};
`;

const Price = styled.p`
  margin-top: 1.2rem;
  margin-bottom: 2.4rem;
  font-size: ${props => props.theme.fontSize.lg};
`;

const Summary = ({ assetList }: SummaryProps) => {
  const totalAssetPrice = getTotalAssets(assetList);
  return (
    <section>
      <Title>총자산</Title>
      <Price>{convertKRW(totalAssetPrice)}원</Price>

      <SummaryBarChart assetList={assetList} />
    </section>
  );
};

export default Summary;
