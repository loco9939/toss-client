import PieChart from '@/components/PieChart';
import styled from 'styled-components';

type MonthAssetProps = {
  asset?: Record<string, number | string>;
};

const ListItem = styled.li`
  width: 30%;
  flex-grow: 1;
  border: 1px solid yellow;
`;

const MonthAsset = ({ asset }: MonthAssetProps) => {
  if (!asset) {
    return <p>등록된 자산이 없습니다.</p>;
  }
  return (
    <ListItem>
      <PieChart data={[]} />
      <p>N월</p>
    </ListItem>
  );
};

export default MonthAsset;
