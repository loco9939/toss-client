import { render } from '@/utils/test-helpers';
import { screen } from '@testing-library/dom';
import AssetEdit from '.';

describe('AssetEdit', () => {
  beforeEach(() => {
    render(<AssetEdit />);
  });

  it('renders `YearSelect`', () => {
    screen.getByRole('year');
  });

  it('renders `MonthSelect`', () => {
    screen.getByRole('month');
  });

  it('renders `PieChartContainer`', () => {
    screen.getByRole('pie-chart-container');
  });

  it('renders `Legend`', () => {
    screen.getByRole('legend');
  });

  it('renders `Form`', () => {
    screen.getByRole('form');
  });
});
