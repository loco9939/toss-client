import supabase from '@/utils/supabase';
import axios from 'axios';
import dayjs from 'dayjs';

export const API_BASE_URL =
  import.meta.env.API_BASE_URL ?? 'http://localhost:5000';

export type MonthAssetProps = {
  year?: string;
  month?: string;
  asset: Record<string, string | number | undefined>;
  user_id?: string;
  id?: string;
};

class ApiService {
  private instance = axios.create({
    baseURL: API_BASE_URL,
  });

  async fetchLatestAssets({ user_id }: { user_id?: string }) {
    // 기존 API 로직
    // try {
    //   const { data } = await this.instance.get<LatestAsset[]>(`/assets/latest`);

    //   const latestAssetsRes = data.map(d => ({ ...d.assets, date: d.date }));
    //   return latestAssetsRes;
    // } catch (error) {
    //   new Error(`Failed: ${error}`);
    //   return [];
    // }

    // 현재 날짜
    const currentDate = dayjs().format('YYYY-MM');
    // 6개월 전 날짜
    const sixMonthsAgo = dayjs().subtract(5, 'month').format('YYYY-MM');

    // 변경된 API 로직
    const { data, error } = await supabase
      .from('assets')
      .select()
      .eq('user_id', user_id)
      .gte('date', sixMonthsAgo) // 시작 날짜: 6개월 전
      .lte('date', currentDate) // 종료 날짜: 현재 날짜
      .order('date', { ascending: false }) // 날짜를 기준으로 내림차순 정렬
      .returns<Record<string, string | number>[]>();

    if (error) {
      new Error(`Failed: ${error}`);
      return [];
    } else {
      const latestAssetsRes = data.map(d => {
        const { dw, saving, investment, pension, debt, date } = d;
        return { dw, saving, investment, pension, debt, date };
      });
      return latestAssetsRes;
    }
  }

  async fetchYearAssets({
    user_id,
    year,
  }: {
    user_id?: string;
    year?: string;
  }) {
    // try {
    //   const { data } = await this.instance.get<LatestAsset[]>(
    //     `/assets/yearly`,
    //     {
    //       params: { year },
    //     },
    //   );

    //   // BE 데이터 변형해주는 곳
    //   const yearAssetsRes = data.map(d => ({ ...d.assets, date: d.date }));
    //   return yearAssetsRes;
    // } catch (error) {
    //   new Error(`Failed: ${error}`);
    //   return [];
    // }

    // 1월
    const jan = dayjs(`${year}-01`).format('YYYY-MM');
    // 12월
    const dec = dayjs(`${year}-12`).format('YYYY-MM');

    // 변경된 API 로직
    const { data, error } = await supabase
      .from('assets')
      .select()
      .eq('user_id', user_id)
      .gte('date', jan) // 시작 날짜: 6개월 전
      .lte('date', dec) // 종료 날짜: 현재 날짜
      .order('date', { ascending: true }) // 날짜를 기준으로 오름차순 정렬
      .returns<Record<string, string | number>[]>();

    if (error) {
      new Error(`Failed: ${error}`);
      return [];
    } else {
      const yearAssets = data.map(d => {
        const { dw, saving, investment, pension, debt, date } = d;
        return { dw, saving, investment, pension, debt, date };
      });
      return yearAssets;
    }
  }

  async fetchMonthAsset({
    user_id,
    year,
    month,
  }: {
    user_id?: string;
    year?: string;
    month?: string;
  }) {
    // try {
    //   const { data } = await this.instance.get<LatestAsset>(`/assets/monthly`, {
    //     params: { year, month },
    //   });
    //   // BE 데이터 변형해주는 곳
    //   const monthAssetRes = data.assets;
    //   return monthAssetRes;
    // } catch (error) {
    //   new Error(`Failed: ${error}`);
    //   return { dw: 0, saving: 0, investment: 0, pension: 0, debt: 0 };
    // }
    // 변경된 API 로직

    if (!year || !month) {
      const { data, error } = await supabase
        .from('assets')
        .select()
        .eq('user_id', user_id)
        .returns<Record<string, string | number>[]>();

      if (error) {
        new Error(`Failed: ${error}`);
        return null;
      } else {
        if (data.length === 0) {
          return null;
        } else {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { user_id, ...rest } = data[0];
          return { ...rest };
        }
      }
    } else {
      const { data, error } = await supabase
        .from('assets')
        .select()
        .eq('user_id', user_id)
        .eq('date', `${year}-${month?.padStart(2, '0')}`)
        .returns<Record<string, string | number>[]>();

      if (error) {
        new Error(`Failed: ${error}`);
        return null;
      } else {
        if (data.length === 0) {
          return null;
        } else {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { user_id, ...rest } = data[0];
          return { ...rest };
        }
      }
    }
  }

  async insertMonthAsset({ year, month, asset, user_id }: MonthAssetProps) {
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

  async updateMonthAsset({ asset, id }: MonthAssetProps) {
    // try {
    //   await this.instance.put(`/assets/monthly`, {
    //     year,
    //     month,
    //     asset: { ...asset },
    //   });
    // } catch (error) {
    //   throw new Error(`Failed to update asset: ${error}`);
    // }

    const { error } = await supabase
      .from('assets')
      .update({
        // user_id,
        // date: `${year}-${month?.padStart(2, '0')}`,
        ...asset,
      })
      .eq('id', id);
    // .eq('user_id', user_id)
    // .eq('date', `${year}-${month?.padStart(2, '0')}`);

    if (error) {
      throw new Error(`Failed to update asset: ${error}`);
    }
  }
}

export const apiService = new ApiService();
