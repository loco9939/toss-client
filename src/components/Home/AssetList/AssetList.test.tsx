import fixtures from '@/fixtures';
import { render } from '@/utils/test-helpers';
import { screen } from '@testing-library/react';
import AssetList from '.';

const { assetList, prevAssetResponse } = fixtures;

describe('AssetList', () => {
  it('renders "입출금", "저축", "투자", "연금", "부채"', () => {
    render(<AssetList assetList={assetList} />);

    expect(screen.getByText(/입출금/));
    expect(screen.getByText(/저축/));
    expect(screen.getByText(/투자/));
    expect(screen.getByText(/연금/));
    expect(screen.getByText(/부채/));
  });

  it('when prevAsset is undefined', () => {
    render(<AssetList assetList={assetList} />);

    expect(screen.queryByText(/지난달보다/));
  });

  it('when it received prevAsset, it renders "지난달보다"', () => {
    render(<AssetList assetList={assetList} prevAsset={prevAssetResponse} />);

    expect(screen.getAllByText(/지난달보다/));
  });
});
