import { API_BASE_URL } from '@/api';
import { AssetResponse } from '@/types';
import axios from 'axios';
import { create } from 'zustand';

export type LatestAssetsStore = {
  loading: boolean;
  latestAssets: AssetResponse[];
  fetchLatestAssets: () => Promise<void>;
};

const latestAssetsStore = create<LatestAssetsStore>(set => ({
  loading: false,
  latestAssets: [],
  fetchLatestAssets: async () => {
    set(() => ({ loading: true }));
    try {
      const { data } = await axios.get(`${API_BASE_URL}/assets/latest`);
      set(() => ({ latestAssets: data }));
    } catch {
      throw new Error('Failed: assets/latest');
    }
    set(() => ({ loading: false }));
  },
}));

export default latestAssetsStore;
