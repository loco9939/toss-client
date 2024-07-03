import fixtures from '@/fixtures';
import { render } from '@/utils/test-helpers';
import { screen } from '@testing-library/dom';
import MonthlyChart from '.';

const { latestAssetsResponse } = fixtures;
const latestAssets = latestAssetsResponse.map(asset => ({
  ...asset.assets,
  date: asset.date,
}));

describe('MonthlyChart', () => {
  beforeEach(() => {
    render(<MonthlyChart latestAssets={latestAssets} />);
  });

  it('renders summary text', () => {
    expect(screen.getByText(/지난달보다/));
  });
});
