import { create } from 'zustand';

import { apiService, UpdateMonthAssetProps } from '@/api';

export type MonthAssetFormStore = {
  dw: number;
  saving: number;
  investment: number;
  pension: number;
  debt: number;
  changeDw: (dw: string) => void;
  changeSaving: (saving: string) => void;
  changeInvestment: (investment: string) => void;
  changePension: (pension: string) => void;
  changeDebt: (debt: string) => void;
  done: boolean;
  resetDone: () => void;
  complete: () => void;
  fetchMonthAsset: ({
    year,
    month,
  }: {
    year?: string;
    month?: string;
  }) => Promise<void>;
  updateMonthAsset: ({ year, month, asset }: UpdateMonthAssetProps) => void;
};

const monthAssetFormStore = create<MonthAssetFormStore>((set, get) => ({
  dw: 0,
  saving: 0,
  investment: 0,
  pension: 0,
  debt: 0,
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
  done: false,
  resetDone: () => {
    set(() => ({ done: false }));
  },
  complete: () => {
    set(() => ({ done: true }));
  },
  fetchMonthAsset: async ({ year, month }) => {
    const monthAsset = await apiService.fetchMonthAsset({
      year,
      month,
    });
    const { dw, saving, investment, pension, debt } = monthAsset;

    set(() => ({
      dw: Number(dw),
      saving: Number(saving),
      investment: Number(investment),
      pension: Number(pension),
      debt: Number(debt),
    }));
  },
  updateMonthAsset: async ({ year, month, asset }) => {
    get().resetDone();

    await apiService.updateMonthAsset({
      year,
      month,
      asset,
    });

    get().complete();
  },
}));

export default monthAssetFormStore;