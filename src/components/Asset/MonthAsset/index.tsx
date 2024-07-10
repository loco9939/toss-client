import PieChart from '@/components/PieChart';
import convertPieChartData from '@/utils/convertPieChartData';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

type MonthAssetProps = {
  year?: string;
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
  box-shadow: rgba(255, 255, 255, 0.1) -4px 9px 25px -6px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }

  svg {
    cursor: pointer;
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

const PieChartContainer = styled.div`
  width: 8.4rem;
  height: 8.2rem;
  margin-inline: auto;

  * {
    outline: none;
  }
`;

const MonthAsset = ({ year, asset }: MonthAssetProps) => {
  const navigate = useNavigate();
  const month = Number(`${asset?.date}`.split('-')[1]);

  const handleClickItem = () => {
    navigate(`/asset-detail?year=${year}&month=${month}`);
  };

  if (asset?.dw === undefined) {
    return (
      <NoAssetItem onClick={handleClickItem}>
        <p>자산 등록</p>
        <p>{month}월</p>
      </NoAssetItem>
    );
  }

  const pieChartData = convertPieChartData(asset);

  return (
    <ListItem onClick={handleClickItem}>
      <PieChartContainer>
        <PieChart
          data={pieChartData}
          innerRadius={25}
          outerRadius={40}
          paddingAngle={5}
        />
      </PieChartContainer>
      <Text>{month}월</Text>
    </ListItem>
  );
};

export default MonthAsset;
