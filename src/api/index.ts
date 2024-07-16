import { admin_supabase, supabase } from '@/utils/supabase';
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

export type DeleteProps = {
  user_id?: string;
};

class ApiService {
  async fetchLatestAssets({ user_id }: { user_id?: string }) {
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
    const { error } = await supabase.from('assets').insert({
      user_id,
      date: `${year}-${month?.padStart(2, '0')}`,
      timestamptz: new Date(),
      ...asset,
    });

    if (error) {
      throw new Error(`Failed to update asset: ${error}`);
    }
  }

  async updateMonthAsset({ asset, id }: MonthAssetProps) {
    const { error } = await supabase
      .from('assets')
      .update({
        ...asset,
        timestamptz: new Date(),
      })
      .eq('id', id);

    if (error) {
      throw new Error(`Failed to update asset: ${error}`);
    }
  }

  async deleteUser({ user_id }: DeleteProps) {
    const { error } = await admin_supabase.auth.admin.deleteUser(user_id ?? '');

    if (error) {
      throw new Error(`Failed: ${error}`);
    }
  }

  async deleteData({ user_id }: DeleteProps) {
    const { data, status } = await supabase
      .from('assets')
      .delete()
      .eq('user_id', user_id)
      .select();

    if (status === 200) {
      return { data };
    }
  }
}

export const apiService = new ApiService();
