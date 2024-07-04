const convertBarChartData = (
  latestAssets: Record<string, string | number | undefined>[],
) => {
  // 1. date를 name(month)으로 변환한다.
  const convertNameAssets: { name: string; [key: string]: string | number }[] =
    latestAssets.map(asset => {
      const { date, ...rest } = asset;
      const month = Number(`${date}`.split('-')[1]);
      return { name: `${month}월`, ...rest };
    });

  // 2. name을 제외한 자산을 모두 더해 amount에 할당
  const sumAssets = convertNameAssets.map(asset => {
    const { name, ...rest } = asset;
    const totalAssets = Object.values(rest).reduce(
      (acc, cur) => Number(acc) + Number(cur),
      0,
    ) as number;
    return { name, amount: totalAssets };
  });

  // 3. 월별 오름차순으로 정렬
  const sortedAssets = sumAssets.sort((a, b) => {
    const aMonth = Number(`${a.name}`.split('월')[0]);
    const bMonth = Number(`${b.name}`.split('월')[0]);

    return aMonth - bMonth > 0 ? 1 : -1;
  });

  return sortedAssets;
};

export default convertBarChartData;
