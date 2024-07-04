import useFetchYearAssets from '@/hooks/useFetchYearAssets';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Legend from './Legend';
import MonthAsset from './MonthAsset';
import YearSelect from './YearSelect';

const List = styled.ul.attrs({
  role: 'monthList',
})`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
  margin-block: 2.4rem;
`;

const Asset = () => {
  const [params] = useSearchParams();

  const year = params.get('year') ?? undefined;

  const { loading, yearAssets } = useFetchYearAssets({ year });

  if (loading) {
    return <p>로딩중...</p>;
  }

  if (yearAssets.length === 0) {
    return <p>실패...</p>;
  }

  return (
    <section>
      <YearSelect year={year} />
      <Legend />
      <List>
        {yearAssets.map(asset => (
          <MonthAsset key={asset.date} asset={asset} />
        ))}
      </List>
    </section>
  );
};

export default Asset;
