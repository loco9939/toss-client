import fixtures from '@/fixtures';
import { render } from '@/utils/test-helpers';
import { screen } from '@testing-library/react';
import Summary from '.';

const { assetList } = fixtures;
describe('Summary', () => {
  it('renders asset price', () => {
    render(<Summary assetList={assetList} />);

    expect(screen.getByRole('heading', { name: '총자산' }));
    expect(screen.getByText(/원/));
  });

  it('renders summary bar chart', () => {
    render(<Summary assetList={assetList} />);

    expect(screen.getByRole('summary-bar-chart'));
  });
});
