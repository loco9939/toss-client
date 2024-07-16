import useFetchMonthAsset from '@/hooks/useFetchMonthAsset';
import monthAssetFormStore from '@/stores/monthAssetFormStore';
import sessionStore from '@/stores/sessionStore';
import convertPieChartData from '@/utils/convertPieChartData';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Legend from '../Asset/Legend';
import YearSelect from '../Asset/YearSelect';
import PieChart from '../PieChart';
import Form from './Form';
import MonthSelect from './MonthSelect';

const PieChartContainer = styled.div`
  width: 25rem;
  height: 25rem;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  * {
    outline: none;
  }
`;

const Nodata = styled.div`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors['bg-secondary']};
`;

const AssetEdit = () => {
  const [params] = useSearchParams();

  const year = Number(params.get('year') ?? '0');
  const month = Number(params.get('month') ?? '0');

  const session = sessionStore(state => state.session);

  const { dw, saving, investment, pension, debt } = monthAssetFormStore();

  const { assetId } = useFetchMonthAsset({
    user_id: session?.user?.id,
    year: String(year),
    month: String(month),
  });

  const data = { dw, saving, investment, pension, debt };

  const pieChartData = convertPieChartData(data);
  const isEmpty = !dw && !saving && !investment && !pension && !debt;
  return (
    <section>
      <YearSelect year={year} month={month} />
      <MonthSelect year={year} month={month} />
      <PieChartContainer role='pie-chart-container'>
        {isEmpty ? (
          <Nodata>Empty</Nodata>
        ) : (
          <PieChart data={pieChartData} innerRadius={60} paddingAngle={5} />
        )}
      </PieChartContainer>
      <Legend />

      <Form year={year} month={month} assetId={assetId} isEmpty={isEmpty} />
    </section>
  );
};

export default AssetEdit;
