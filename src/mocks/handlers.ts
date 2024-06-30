import { http, HttpResponse } from 'msw';

export const getAssetResponse = (type?: 'Error') => {
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
      dept: 4_000_000,
    });
  });
};

export const handlers = [getAssetResponse()];
