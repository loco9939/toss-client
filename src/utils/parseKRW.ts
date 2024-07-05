const parseKRW = (value: string): string => {
  return value.replace(/,/g, '');
};

export default parseKRW;
