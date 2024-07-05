import useFetchYearAssets from '@/hooks/useFetchYearAssets';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
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

  const { loading, yearAssets } = useFetchYearAssets({ year });

  if (loading) {
    return <p>로딩중...</p>;
  }

  if (yearAssets.length === 0) {
    return <p>실패...</p>;
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
