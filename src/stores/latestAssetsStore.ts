import { create } from 'zustand';

import { apiService } from '@/api';

export type LatestAssetsStore = {
  loading: boolean;
  latestAssets: Record<string, number | string | undefined>[];
  startLoading: () => void;
  finishLoading: () => void;
  fetchLatestAssets: ({ user_id }: { user_id?: string }) => Promise<void>;
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
  fetchLatestAssets: async ({ user_id }) => {
    get().startLoading();

    const latestAssetsRes = await apiService.fetchLatestAssets({ user_id });

    set(() => ({ latestAssets: latestAssetsRes }));
    // set(() => ({ latestAssets: latestAssets }));

    get().finishLoading();
  },
}));

export default latestAssetsStore;
