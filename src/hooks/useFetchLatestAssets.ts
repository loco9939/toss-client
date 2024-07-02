import latestAssetsStore from '@/stores/latestAssetsStore';
import { useEffect } from 'react';

export default function useFetchLatestAssets() {
  const { loading, latestAssets, fetchLatestAssets } = latestAssetsStore();

  useEffect(() => {
    fetchLatestAssets();
  }, []);

  return { loading, latestAssets };
}
