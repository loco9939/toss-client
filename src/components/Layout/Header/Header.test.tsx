import { renderRouter } from '@/routes.test';
import { render } from '@/utils/test-helpers';
import { screen } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
  it('renders Logo, navigation', () => {
    render(<Header />);

    screen.getByRole('img');
    screen.getByRole('navigation');
    expect(screen.queryByRole('back')).toBeNull();
  });

  it('when the current path is not "/", it renders back button', () => {
    renderRouter('/assets');

    screen.getByRole('back');
  });
});
