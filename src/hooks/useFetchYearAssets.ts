import yearAssetsStore from '@/stores/yearAssetsStore';
import { useEffect } from 'react';

export default function useFetchYearAssets({
  user_id,
  year,
}: {
  user_id?: string;
  year?: string;
}) {
  const { loading, yearAssets, fetchYearAssets } = yearAssetsStore();

  useEffect(() => {
    fetchYearAssets({ user_id, year });
  }, [year]);

  return { loading, yearAssets };
}
