const convertPrice = (price: number): string => {
  const absPrice = Math.abs(price);
  if (absPrice >= 100000000) {
    return `${absPrice / 100000000}억원`;
  }
  return `${absPrice / 10000}만원`;
};

export default convertPrice;
