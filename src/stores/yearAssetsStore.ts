import { create } from 'zustand';

import { apiService } from '@/api';

export type YearAssetsStore = {
  loading: boolean;
  yearAssets: Record<string, number | string | undefined>[];
  startLoading: () => void;
  finishLoading: () => void;
  fetchYearAssets: ({ year }: { year?: string }) => Promise<void>;
};

// const { yearAssets } = fixtures;
const yearAssetsStore = create<YearAssetsStore>((set, get) => ({
  loading: false,
  yearAssets: [],
  startLoading: () => {
    set(() => ({ loading: true }));
  },
  finishLoading: () => {
    set(() => ({ loading: false }));
  },
  fetchYearAssets: async ({ year }) => {
    get().startLoading();

    const yearAssetsRes = await apiService.fetchYearAssets({ year });

    set(() => ({ yearAssets: yearAssetsRes }));
    // set(() => ({ yearAssets: yearAssets })); // mockData

    get().finishLoading();
  },
}));

export default yearAssetsStore;
