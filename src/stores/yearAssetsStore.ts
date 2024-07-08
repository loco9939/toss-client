import { create } from 'zustand';

import { apiService } from '@/api';

export type YearAssetsStore = {
  loading: boolean;
  yearAssets: Record<string, number | string | undefined>[];
  startLoading: () => void;
  finishLoading: () => void;
  fetchYearAssets: ({ year }: { year?: string }) => Promise<void>;
};

const yearAssetContainers = [
  { date: '2024-01' },
  { date: '2024-02' },
  { date: '2024-03' },
  { date: '2024-04' },
  { date: '2024-05' },
  { date: '2024-06' },
  { date: '2024-07' },
  { date: '2024-08' },
  { date: '2024-09' },
  { date: '2024-10' },
  { date: '2024-11' },
  { date: '2024-12' },
];

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

    set(() => ({
      yearAssets:
        yearAssetsRes.length !== 0 ? yearAssetsRes : yearAssetContainers,
    }));

    get().finishLoading();
  },
}));

export default yearAssetsStore;
