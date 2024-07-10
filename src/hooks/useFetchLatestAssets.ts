import latestAssetsStore from '@/stores/latestAssetsStore';
import { useEffect } from 'react';

export default function useFetchLatestAssets({
  user_id,
}: {
  user_id?: string;
}) {
  const { loading, latestAssets, fetchLatestAssets } = latestAssetsStore();

  useEffect(() => {
    fetchLatestAssets({ user_id });
  }, [user_id]);

  return { loading, latestAssets };
}
