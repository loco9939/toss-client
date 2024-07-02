import fixtures from '@/fixtures';
import { render } from '@/utils/test-helpers';
import { screen } from '@testing-library/dom';
import AssetItem from '.';

const { assetList, prevAssetResponse } = fixtures;
describe('AssetItem', () => {
  it('renders icon, info', () => {
    const firstAsset = assetList[0];
    render(<AssetItem asset={firstAsset} totalPrice={11400000} />);
    expect(screen.getByRole('icon'));
    expect(screen.getByRole('info'));
    expect(screen.queryByText(/지난달/)).toBeNull();
  });

  it('when it received prev props, it renders "지난달" too', () => {
    const firstAsset = assetList[0];
    render(
      <AssetItem
        asset={firstAsset}
        prevAsset={prevAssetResponse}
        totalPrice={11400000}
      />,
    );
    expect(screen.getByRole('icon'));
    expect(screen.getByRole('info'));
    expect(screen.getByText(/지난달/));
  });
});
