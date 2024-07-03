import fixtures from '@/fixtures';
import convertBarChartData from './convertBarChartData';

const { barChartData, latestAssets } = fixtures;
describe('convertBarChartData', () => {
  it('returns Bar chart data', () => {
    expect(convertBarChartData(latestAssets)).toEqual(barChartData);
  });
});
