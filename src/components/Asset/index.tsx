import useFetchYearAssets from '@/hooks/useFetchYearAssets';
import { useSearchParams } from 'react-router-dom';
import MonthAsset from './MonthAsset';
import YearSelect from './YearSelect';

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
      <MonthAsset />
    </section>
  );
};

export default Asset;
