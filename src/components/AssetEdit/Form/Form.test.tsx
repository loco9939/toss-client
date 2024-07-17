import monthAssetFormStore from '@/stores/monthAssetFormStore';
import { render } from '@/utils/test-helpers';
import { fireEvent, screen } from '@testing-library/dom';
import Form from '.';

const insertMonthAsset = vi.fn();
const updateMonthAsset = vi.fn();
const finishLoading = vi.fn();

vi.mock('@/stores/monthAssetFormStore', () => ({
  default: vi.fn(),
}));

const context = describe;
describe('Form', () => {
  it('renders 입출금, 저축, 투자, 연금, 부채 input, label', () => {
    mockingReturnValue();
    render(<Form year={2024} month={12} isEmpty={true} />);

    screen.getByLabelText(/입출금/);
    screen.getByLabelText(/저축/);
    screen.getByLabelText(/투자/);
    screen.getByLabelText(/연금/);
    screen.getByLabelText(/부채/);
  });

  context('when click 등록 button', () => {
    it('if it received assetId, it will call update API fn', () => {
      mockingReturnValue();
      render(
        <Form year={2024} month={12} assetId='test-asset' isEmpty={false} />,
      );

      const button = screen.getByRole('button', { name: /등록/ });
      fireEvent.click(button);

      expect(updateMonthAsset).toHaveBeenCalled();
    });

    it("if it don't received assetId, it will call insert API fn", () => {
      mockingReturnValue();
      render(<Form year={2024} month={12} isEmpty={false} />);

      const button = screen.getByRole('button', { name: /등록/ });
      fireEvent.click(button);

      expect(insertMonthAsset).toHaveBeenCalled();
    });
  });
});

function mockingReturnValue() {
  (monthAssetFormStore as unknown as jest.Mock).mockReturnValue({
    insertMonthAsset,
    updateMonthAsset,
    finishLoading,
  });
}
