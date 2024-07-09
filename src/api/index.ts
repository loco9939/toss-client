import { LatestAsset } from '@/types';
import supabase from '@/utils/supabase';
import axios from 'axios';

export const API_BASE_URL =
  import.meta.env.API_BASE_URL ?? 'http://localhost:5000';

export type UpdateMonthAssetProps = {
  year?: string;
  month?: string;
  asset: Record<string, string | number | undefined>;
  user_id?: string;
};

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

      // BE 데이터 변형해주는 곳
      const yearAssetsRes = data.map(d => ({ ...d.assets, date: d.date }));
      return yearAssetsRes;
    } catch (error) {
      new Error(`Failed: ${error}`);
      return [];
    }
  }

  async fetchMonthAsset({ year, month }: { year?: string; month?: string }) {
    try {
      const { data } = await this.instance.get<LatestAsset>(`/assets/monthly`, {
        params: { year, month },
      });

      // BE 데이터 변형해주는 곳
      const monthAssetRes = data.assets;
      return monthAssetRes;
    } catch (error) {
      new Error(`Failed: ${error}`);
      return { dw: 0, saving: 0, investment: 0, pension: 0, debt: 0 };
    }
  }

  async updateMonthAsset({
    year,
    month,
    asset,
    user_id,
  }: UpdateMonthAssetProps) {
    // try {
    //   await this.instance.put(`/assets/monthly`, {
    //     year,
    //     month,
    //     asset: { ...asset },
    //   });
    // } catch (error) {
    //   throw new Error(`Failed to update asset: ${error}`);
    // }

    const { error } = await supabase.from('assets').insert({
      user_id,
      date: `${year}-${month?.padStart(2, '0')}`,
      ...asset,
    });

    if (error) {
      throw new Error(`Failed to update asset: ${error}`);
    }
  }
}

export const apiService = new ApiService();
