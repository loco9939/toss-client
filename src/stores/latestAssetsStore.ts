import { create } from 'zustand';

import { apiService } from '@/api';

export type LatestAssetsStore = {
  loading: boolean;
  latestAssets: Record<string, number | string>[];
  startLoading: () => void;
  finishLoading: () => void;
  fetchLatestAssets: () => Promise<void>;
};

const latestAssetsStore = create<LatestAssetsStore>((set, get) => ({
  loading: false,
  latestAssets: [],
  startLoading: () => {
    set(() => ({ loading: true }));
  },
  finishLoading: () => {
    set(() => ({ loading: false }));
  },
  fetchLatestAssets: async () => {
    get().startLoading();

    const latestAssetsRes = await apiService.fetchLatestAssets();

    set(() => ({ latestAssets: latestAssetsRes }));
    // set(() => ({ latestAssets: latestAssets }));

    get().finishLoading();
  },
}));

export default latestAssetsStore;
