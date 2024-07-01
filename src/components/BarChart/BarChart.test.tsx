import fixtures from '@/fixtures';
import { render } from '@/utils/test-helpers';
import { screen } from '@testing-library/react';
import BarChart from '.';

const { assetList } = fixtures;
describe('BarChart', () => {
  beforeEach(() => {
    render(<BarChart assetList={assetList} />);
  });

  it('renders "bar-chart" and "bar" role element', () => {
    expect(screen.getByRole('bar-chart'));
    expect(screen.getByRole('dw-bar'));
    expect(screen.getByRole('saving-bar'));
    expect(screen.getByRole('investment-bar'));
    expect(screen.getByRole('pension-bar'));
    expect(screen.getByRole('debt-bar'));
  });
});
