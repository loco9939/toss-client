import { Asset } from '@/types';

const getTotalAssets = (assets: Asset[]) => {
  return assets.reduce((acc, cur) => acc + cur.price, 0);
};

export default getTotalAssets;
