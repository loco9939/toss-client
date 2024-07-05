import monthAssetFormStore from '@/stores/monthAssetFormStore';
import { useEffect } from 'react';

export type UseUpdateMonthAssetProps = {
  year: string;
  month: string;
};

const useUpdateMonthAsset = ({ year, month }: UseUpdateMonthAssetProps) => {
  const {
    dw,
    saving,
    investment,
    pension,
    debt,
    changeDw,
    changeSaving,
    changeInvestment,
    changePension,
    changeDebt,
    done,
    fetchMonthAsset,
    updateMonthAsset,
  } = monthAssetFormStore();

  useEffect(() => {
    fetchMonthAsset({ year, month });
  }, [year, month]);

  return {
    dw,
    saving,
    investment,
    pension,
    debt,
    changeDw,
    changeSaving,
    changeInvestment,
    changePension,
    changeDebt,
    done,
    fetchMonthAsset,
    updateMonthAsset,
  };
};

export default useUpdateMonthAsset;
