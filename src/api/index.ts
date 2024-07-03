import { LatestAsset } from '@/types';
import axios from 'axios';

export const API_BASE_URL =
  import.meta.env.API_BASE_URL ?? 'http://localhost:5000';

class ApiService {
  private instance = axios.create({
    baseURL: API_BASE_URL,
  });

  async fetchLatestAssets() {
    try {
      const { data } = await this.instance.get<LatestAsset[]>(`/assets/latest`);

      const latestAssetsRes = data.map(d => ({ ...d.assets, date: d.date }));
      return latestAssetsRes;
    } catch (error) {
      new Error(`Failed: ${error}`);
      return [];
    }
  }

  async fetchYearAssets({ year }: { year?: string }) {
    try {
      const { data } = await this.instance.get<LatestAsset[]>(
        `/assets/yearly`,
        {
          params: { year },
        },
      );

      const yearAssetsRes = data.map(d => ({ ...d.assets, date: d.date }));
      return yearAssetsRes;
    } catch (error) {
      new Error(`Failed: ${error}`);
      return [];
    }
  }
}

export const apiService = new ApiService();
