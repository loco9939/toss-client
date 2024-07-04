import { ASSET_DISPLAY } from '@/types';

const convertPieChartData = (
  asset: Record<string, number | string | undefined>,
) => {
  const result = ['dw', 'saving', 'investment', 'pension', 'debt'].map(key => {
    const assetVal = asset[key];
    return { name: ASSET_DISPLAY[key], amount: assetVal as number };
  });

  return result;
};

export default convertPieChartData;
