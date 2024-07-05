import { render } from '@/utils/test-helpers';
import { fireEvent, screen } from '@testing-library/dom';
import Form from '.';

const mockedUpdateMonthAsset = vi.fn();

describe('Form', () => {
  beforeEach(() => {
    render(
      <Form
        year={2024}
        month={12}
        data={{
          dw: 1000,
          saving: 2000,
          investment: 3000,
          pension: 4000,
          debt: 5000,
        }}
        handler={{
          changeDw: vi.fn(),
          changeSaving: vi.fn(),
          changeInvestment: vi.fn(),
          changePension: vi.fn(),
          changeDebt: vi.fn(),
        }}
        updateMonthAsset={mockedUpdateMonthAsset}
      />,
    );
  });

  it('renders 입출금, 저축, 투자, 연금, 부채 input, label', () => {
    screen.getByLabelText(/입출금/);
    screen.getByLabelText(/저축/);
    screen.getByLabelText(/투자/);
    screen.getByLabelText(/연금/);
    screen.getByLabelText(/부채/);
  });

  it('when click 등록 button, it will call edit API fn', () => {
    const button = screen.getByRole('button', { name: /등록/ });
    fireEvent.click(button);

    expect(mockedUpdateMonthAsset).toHaveBeenCalled();
  });
});
