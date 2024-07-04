import PieChart from '@/components/PieChart';
import convertPieChartData from '@/utils/convertPieChartData';
import styled from 'styled-components';

type MonthAssetProps = {
  asset?: Record<string, number | string | undefined>;
};

const ListItem = styled.li`
  position: relative;
  width: 30%;
  height: 14rem;
  flex-grow: 1;
  padding: 1.2rem;
  text-align: center;
  border-radius: 0.8rem;
  background-color: ${props => props.theme.colors['bg-secondary']};
  cursor: pointer;
  user-select: none;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 4px 24px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

const Text = styled.p`
  margin-top: 1.6rem;
`;

const NoAssetItem = styled(ListItem)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin-top: auto;
  }
`;

const MonthAsset = ({ asset }: MonthAssetProps) => {
  const month = Number(`${asset?.date}`.split('-')[1]);

  if (!asset?.dw) {
    return (
      <NoAssetItem>
        <p>자산 등록</p>
        <p>{month}월</p>
      </NoAssetItem>
    );
  }

  const pieChartData = convertPieChartData(asset);

  return (
    <ListItem>
      <PieChart data={pieChartData} />
      <Text>{month}월</Text>
    </ListItem>
  );
};

export default MonthAsset;
