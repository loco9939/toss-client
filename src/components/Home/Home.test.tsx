import { screen, waitFor } from '@testing-library/react';
import Home from '.';

import fixtures from '@/fixtures';
import useFetchLatestAssets from '@/hooks/useFetchLatestAssets';
import { render } from '@/utils/test-helpers';

// NOTE: Supabase MSW 연동을 못해서 직접 API를 mocking하는 로직으로 수정
vi.mock('@/hooks/useFetchLatestAssets', () => ({
  default: vi.fn(),
}));

const { latestAssets } = fixtures;

const context = describe;
describe('Home', () => {
  context('when fetch is success', () => {
    beforeEach(() => {
      (useFetchLatestAssets as jest.Mock).mockReturnValue({
        loading: false,
        latestAssets: latestAssets,
      });
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
    it('renders "자산 등록 하러 가기" button', async () => {
      // server.use(mockGetLatestAssets('Error'));
      (useFetchLatestAssets as jest.Mock).mockReturnValue({
        loading: false,
        latestAssets: [],
      });
      render(<Home />);
      await waitFor(() => {
        screen.getByRole('button', {
          name: '자산 등록 하러 가기',
        });
      });
    });
  });
});
