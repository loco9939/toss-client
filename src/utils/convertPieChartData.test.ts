import fixtures from '@/fixtures';
import convertPieChartData from './convertPieChartData';

const { pieChartData, yearAssets } = fixtures;
const asset = yearAssets[0];

describe('convertPieChartData', () => {
  it('when it received Record<string, number | string | undefined> type data, it returns PieChartData', () => {
    expect(convertPieChartData(asset)).toEqual(pieChartData);
  });
});
