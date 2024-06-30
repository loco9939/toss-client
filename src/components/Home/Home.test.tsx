import { render, screen, waitFor } from '@testing-library/react';
import Home from '.';
import { server } from '@/mocks/node';
import { getAssetResponse } from '@/mocks/handlers';

const context = describe;
describe('Home', () => {
  context('when fetch is success', () => {
    it('renders Summary', async () => {
      render(<Home />);

      await waitFor(() => {
        expect(screen.getByRole('heading', { name: '총자산' }));
      });
    });

    it('renders Asset', async () => {
      render(<Home />);

      await waitFor(() => {
        expect(screen.getByText(/입출금/));
        expect(screen.getByText(/저축/));
        expect(screen.getByText(/투자/));
        expect(screen.getByText(/연금/));
        expect(screen.getByText(/부채/));
      });
    });
  });

  // TODO: 요청 실패 케이스 테스트 작성
  context('when fetch is failed', () => {
    it('renders nothing', async () => {
      server.use(getAssetResponse('Error'));
      const { container } = render(<Home />);

      await waitFor(() => {
        // expect(screen.getByText('총자산'));
        // expect(screen.queryByText(/입출금/)).toBeInTheDocument();
        expect(container.firstChild).not.toBeInTheDocument();
        expect(container.firstChild).toBeNull();
      });
    });
  });
});
