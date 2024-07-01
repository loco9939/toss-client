import { mockGetAssetResponse } from '@/mocks/handlers';
import { server } from '@/mocks/node';
import { render } from '@/utils/test-helpers';
import { screen, waitFor } from '@testing-library/react';
import Home from '.';

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
      server.use(mockGetAssetResponse('Error'));
      render(<Home />);
    });

    // Question: API 모킹 실패처리 하지 않아도 왜 screen.queryByText(/총자산/).toBeNull()이 통과되는지?
    it('renders nothing', async () => {
      await waitFor(() => {
        expect(screen.queryByText(/총자산/)).toBeNull();
      });
    });
  });
});
