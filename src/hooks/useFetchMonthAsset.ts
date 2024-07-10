import monthAssetFormStore from '@/stores/monthAssetFormStore';
import { useEffect, useState } from 'react';

export type Props = {
  user_id?: string;
  year: string;
  month: string;
};

const useFetchMonthAsset = ({ user_id, year, month }: Props) => {
  const [assetId, setAssetId] = useState<string | undefined>(undefined);

  const { fetchMonthAsset } = monthAssetFormStore();

  useEffect(() => {
    (async function fetchMonthAssetFn() {
      const asset_id = await fetchMonthAsset({ user_id, year, month });
      setAssetId(asset_id);
    })();
  }, [year, month]);

  return { assetId };
};

export default useFetchMonthAsset;
