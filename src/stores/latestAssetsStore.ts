import axios from 'axios';
import { create } from 'zustand';

import { API_BASE_URL } from '@/api';

import { LatestAsset } from '@/types';

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
    try {
      const { data } = await axios.get<LatestAsset[]>(
        `${API_BASE_URL}/assets/latest`,
      );
      const latestAssetsRes = data.map(d => ({ ...d.assets, date: d.date }));
      set(() => ({ latestAssets: latestAssetsRes }));
    } catch (error) {
      new Error(`${error}`);
    } finally {
      get().finishLoading();
    }
  },
}));

export default latestAssetsStore;
