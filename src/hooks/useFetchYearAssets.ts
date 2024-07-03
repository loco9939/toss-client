import yearAssetsStore from '@/stores/yearAssetsStore';
import { useEffect } from 'react';

export default function useFetchYearAssets({ year }: { year?: string }) {
  const { loading, yearAssets, fetchYearAssets } = yearAssetsStore();

  useEffect(() => {
    fetchYearAssets({ year });
  }, []);

  return { loading, yearAssets };
}
