import convertKRW from './convertKRW';

const convertPrice = (price: number): string => {
  const absPrice = Math.abs(price);
  if (absPrice >= 100000000) {
    return `${convertKRW(Number(Math.floor(absPrice / 100000000).toFixed()))}억원`;
  }
  return `${convertKRW(Number(Math.floor(absPrice / 10000).toFixed()))}만원`;
};

export default convertPrice;
