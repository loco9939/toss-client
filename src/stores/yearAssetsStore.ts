import { create } from 'zustand';

import { apiService } from '@/api';
import addMissingMonths from '@/utils/addMissingMonths';

export type YearAssetsStore = {
  loading: boolean;
  yearAssets: Record<string, number | string | undefined>[];
  startLoading: () => void;
  finishLoading: () => void;
  fetchYearAssets: ({
    user_id,
    year,
  }: {
    user_id?: string;
    year?: string;
  }) => Promise<void>;
};

const yearAssetsStore = create<YearAssetsStore>((set, get) => ({
  loading: false,
  yearAssets: [],
  startLoading: () => {
    set(() => ({ loading: true }));
  },
  finishLoading: () => {
    set(() => ({ loading: false }));
  },
  fetchYearAssets: async ({ user_id, year }) => {
    get().startLoading();

    const yearAssetsRes = await apiService.fetchYearAssets({ user_id, year });

    set(() => ({
      yearAssets: addMissingMonths(yearAssetsRes),
    }));

    get().finishLoading();
  },
}));

export default yearAssetsStore;
