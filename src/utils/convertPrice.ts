import convertKRW from './convertKRW';

const convertPrice = (price: number): string => {
  const absPrice = Math.abs(price);
  if (absPrice >= 100000000) {
    return `${convertKRW(Number((absPrice / 100000000).toFixed(0)))}억원`;
  }
  return `${convertKRW(Number((absPrice / 10000).toFixed(0)))}만원`;
};

export default convertPrice;
