import useFetchYearAssets from '@/hooks/useFetchYearAssets';
import sessionStore from '@/stores/sessionStore';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from '../UI/Spinner';
import Legend from './Legend';
import MonthAsset from './MonthAsset';
import YearSelect from './YearSelect';

const List = styled.ul.attrs({
  role: 'year-asset-list',
})`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
  margin-block: 2.4rem;
`;

const Asset = () => {
  const [params] = useSearchParams();

  const year = params.get('year') ?? undefined;
  const session = sessionStore(state => state.session);
  const { loading, yearAssets } = useFetchYearAssets({
    user_id: session?.user?.id ?? '',
    year,
  });

  if (loading) {
    return <Spinner />;
  }

  return (
    <section>
      <YearSelect year={Number(year ?? 0)} />
      <Legend />
      <List>
        {yearAssets.map(asset => (
          <MonthAsset key={asset.date} year={year} asset={asset} />
        ))}
      </List>
    </section>
  );
};

export default Asset;
