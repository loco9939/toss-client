import { mockGetAssetResponse } from '@/mocks/handlers';
import { server } from '@/mocks/node';
import { render } from '@/utils/test-helpers';
import { screen, waitFor } from '@testing-library/react';
import Home from '.';

// Mocking recharts
vi.mock('recharts', () => ({
  // 여기서 필요한 recharts 모듈의 컴포넌트와 함수들을 mock합니다.
  Bar: vi.fn(),
  Cell: vi.fn(),
  LabelList: vi.fn(),
  Legend: vi.fn(),
  BarChart: vi.fn(),
  Rectangle: vi.fn(),
  ResponsiveContainer: vi.fn(),
  Tooltip: vi.fn(),
  XAxis: vi.fn(),
  // 필요한 다른 recharts 컴포넌트와 함수들을 추가로 mock 합니다.
}));

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

    it('renders nothing', async () => {
      await waitFor(() => {
        expect(screen.getByText(/실패/));
      });
    });
  });
});
