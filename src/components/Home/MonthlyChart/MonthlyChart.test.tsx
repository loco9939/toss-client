import fixtures from '@/fixtures';
import convertAssetResponse from '@/utils/convertAssetResponse';
import { render } from '@/utils/test-helpers';
import { screen } from '@testing-library/dom';
import MonthlyChart from '.';

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

const { assetResponse, prevAssetResponse } = fixtures;
const assetList = convertAssetResponse(assetResponse);
const prevAssetList = convertAssetResponse(prevAssetResponse);
describe('MonthlyChart', () => {
  beforeEach(() => {
    render(
      <MonthlyChart assetList={assetList} prevAssetList={prevAssetList} />,
    );
  });

  it('renders summary text', () => {
    expect(screen.getByText(/지난달보다/));
  });
});
