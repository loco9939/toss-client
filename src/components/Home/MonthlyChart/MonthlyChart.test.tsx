import fixtures from '@/fixtures';
import convertAssetResponse from '@/utils/convertAssetResponse';
import { render } from '@/utils/test-helpers';
import { screen } from '@testing-library/dom';
import MonthlyChart from '.';

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
