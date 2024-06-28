export type AssetResponse = {
  id: string;
  date: string;
  dw: number;
  saving: number;
  investment: number;
  pension: number;
  dept: number;
};

export type Asset = {
  name: string;
  price: number;
};

export const ASSET_DISPLAY: { [key: string]: string } = {
  dw: '입출금',
  saving: '저축',
  investment: '투자',
  pension: '연금',
  dept: '부채',
};
