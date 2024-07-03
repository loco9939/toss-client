import { screen, waitFor } from '@testing-library/react';
import Home from '.';

import { mockGetLatestAssets } from '@/mocks/handlers';
import { server } from '@/mocks/node';
import { render } from '@/utils/test-helpers';

const context = describe;
describe('Home', () => {
  context('when fetch is success', () => {
    beforeEach(() => {
      render(<Home />);
    });

    it('renders Summary', async () => {
      await waitFor(() => {
        expect(screen.getByRole('heading', { name: '총자산' }));
      });
    });

    it('renders Asset', async () => {
      await waitFor(() => {
        expect(screen.getByText(/입출금/)).toBeInTheDocument();
        expect(screen.getByText(/저축/)).toBeInTheDocument();
        expect(screen.getByText(/투자/)).toBeInTheDocument();
        expect(screen.getByText(/연금/)).toBeInTheDocument();
        expect(screen.getByText(/부채/)).toBeInTheDocument();
      });
    });
  });

  context('when fetch is failed', () => {
    beforeEach(() => {
      server.use(mockGetLatestAssets('Error'));
      render(<Home />);
    });

    it('renders nothing', async () => {
      await waitFor(() => {
        expect(screen.getByText(/실패/));
      });
    });
  });
});
