import { create } from 'zustand';

import { apiService, MonthAssetProps } from '@/api';

export type MonthAssetFormStore = {
  dw: number;
  saving: number;
  investment: number;
  pension: number;
  debt: number;
  submitLoading: boolean;
  changeDw: (dw: string) => void;
  changeSaving: (saving: string) => void;
  changeInvestment: (investment: string) => void;
  changePension: (pension: string) => void;
  changeDebt: (debt: string) => void;
  fetchMonthAsset: ({
    user_id,
    year,
    month,
  }: {
    user_id?: string;
    year?: string;
    month?: string;
  }) => Promise<string | undefined>;
  insertMonthAsset: ({ year, month, asset, user_id }: MonthAssetProps) => void;
  updateMonthAsset: ({
    year,
    month,
    asset,
    user_id,
    id,
  }: MonthAssetProps) => void;
  startLoading: () => void;
  finishLoading: () => void;
};

const monthAssetFormStore = create<MonthAssetFormStore>((set, get) => ({
  dw: 0,
  saving: 0,
  investment: 0,
  pension: 0,
  debt: 0,
  submitLoading: false,
  changeDw: (dw: string) => {
    set(() => ({ dw: Number(dw) }));
  },
  changeSaving: (saving: string) => {
    set(() => ({ saving: Number(saving) }));
  },
  changeInvestment: (investment: string) => {
    set(() => ({ investment: Number(investment) }));
  },
  changePension: (pension: string) => {
    set(() => ({ pension: Number(pension) }));
  },
  changeDebt: (debt: string) => {
    set(() => ({ debt: Number(debt) }));
  },
  fetchMonthAsset: async ({ user_id, year, month }) => {
    const monthAsset = await apiService.fetchMonthAsset({
      user_id,
      year,
      month,
    });

    if (!monthAsset) {
      set(() => ({
        dw: 0,
        saving: 0,
        investment: 0,
        pension: 0,
        debt: 0,
      }));
      return;
    } else {
      const { id, dw, saving, investment, pension, debt } = monthAsset;

      set(() => ({
        dw: Number(dw),
        saving: Number(saving),
        investment: Number(investment),
        pension: Number(pension),
        debt: Number(debt),
      }));
      return String(id);
    }
  },
  insertMonthAsset: async ({ year, month, asset, user_id }) => {
    get().startLoading();

    await apiService.insertMonthAsset({
      year,
      month,
      asset,
      user_id,
    });

    get().finishLoading();
  },
  updateMonthAsset: async ({ asset, id }) => {
    get().startLoading();

    await apiService.updateMonthAsset({
      asset,
      id,
    });

    get().finishLoading();
  },
  startLoading: () => {
    set(() => ({ submitLoading: true }));
  },
  finishLoading: () => {
    set(() => ({ submitLoading: false }));
  },
}));

export default monthAssetFormStore;
