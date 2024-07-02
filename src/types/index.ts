import Icon_debt from '@/assets/Icon_debt.png';
import Icon_dw from '@/assets/Icon_dw.png';
import Icon_investment from '@/assets/Icon_investment.png';
import Icon_pension from '@/assets/Icon_pension.png';
import Icon_saving from '@/assets/Icon_saving.png';

export type AssetResponse = {
  id: string;
  date: string;
  dw: number;
  saving: number;
  investment: number;
  pension: number;
  debt: number;
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
  debt: '부채',
};

export const ASSET_ICON: { [key: string]: string } = {
  dw: Icon_dw,
  saving: Icon_saving,
  investment: Icon_investment,
  pension: Icon_pension,
  debt: Icon_debt,
};
