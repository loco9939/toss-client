import { render } from '@/utils/test-helpers';
import { screen, waitFor } from '@testing-library/dom';
import Asset from '.';

describe('Asset', () => {
  beforeEach(() => {
    render(<Asset />);
  });

  it('renders `YearSelect`', async () => {
    await waitFor(() => {
      screen.getByRole('year');
    });
  });

  it('renders `Legend`', async () => {
    await waitFor(() => {
      screen.getByText(/입출금/);
      screen.getByText(/저축/);
      screen.getByText(/투자/);
      screen.getByText(/연금/);
      screen.getByText(/부채/);
    });
  });

  it('renders `List`', async () => {
    await waitFor(() => {
      screen.getByRole('year-asset-list');
    });
  });
});
