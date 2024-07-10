import { API_BASE_URL } from '@/api';
import fixtures from '@/fixtures';
import { http, HttpResponse } from 'msw';

const SUPABASE_URL =
  import.meta.env.VITE_NEXT_PUBLIC_SUPABASE_URL ??
  'https://qvoiduranowziowofcvl.supabase.co';
const { latestAssetsResponse, yearAssets } = fixtures;
export const mockGetAssetResponse = (type?: 'Error') => {
  return http.get('http://localhost:5000/assets:id', ({ request }) => {
    const url = new URL(request.url);
    const assetId = url.searchParams.get('id');

    if (!assetId || type === 'Error') {
      return new HttpResponse(null, { status: 404 });
    }
    return HttpResponse.json({
      id: 'unique_id',
      date: '2024.01',
      dw: 200_000,
      saving: 1_500_000,
      investment: 4_100_000,
      pension: 1_600_000,
      debt: 4_000_000,
    });
  });
};

export const mockGetLatestAssets = (type?: 'Error') => {
  return http.get(`${SUPABASE_URL}/rest/v1/assets`, () => {
    if (type === 'Error') {
      console.log('==========EEEEEERorro!!!');
      return new HttpResponse(null, { status: 404 });
    }

    console.log('==========SSSSSSUCCESS!!!');
    return HttpResponse.json(latestAssetsResponse);
  });
};

export const mockGetYearAssets = (type?: 'Error') => {
  return http.get(`${API_BASE_URL}/assets/yearly`, () => {
    if (type === 'Error') {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(yearAssets);
  });
};

export const mockGetMonthAsset = (type?: 'Error') => {
  return http.get(`${API_BASE_URL}/assets/monthly`, () => {
    if (type === 'Error') {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(latestAssetsResponse[0]);
  });
};

export const handlers = [
  mockGetAssetResponse(),
  mockGetLatestAssets(),
  mockGetYearAssets(),
  mockGetMonthAsset(),
];
