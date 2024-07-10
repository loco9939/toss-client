import { render, screen, waitFor } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import routes from './routes';
import sessionStore from './stores/sessionStore';
import defaultTheme from './styles/defaultTheme';
import useCheckAsset from './hooks/useCheckAsset';

const context = describe;

vi.mock('@/stores/sessionStore', () => ({
  default: vi.fn(),
}));

vi.mock('@/hooks/useCheckAsset', () => ({
  default: vi.fn(),
}));

describe('Routes', () => {
  context('when the current path is "/"', () => {
    beforeEach(() => {
      renderRouter('/', 'test-user');
    });

    it('renders `Header` Toss and Home Component', () => {
      screen.getByRole('img');
    });

    it('renders Home Component', () => {
      screen.getByRole('spinner');
    });
  });

  context('when the current path is "/landing"', () => {
    it('renders "로그인", "나만의 자산관리""', () => {
      renderRouter('/landing');

      screen.getByText(/로그인/);
      screen.getByText(/나만의 자산관리/);
    });

    it('renders "홈으로', () => {
      renderRouter('/landing', 'test-user');

      screen.getByText(/홈으로/);
    });
  });

  context('when the current path is "/signin-complete"', () => {
    it('renders `자산 등록 하러 가기` button', async () => {
      renderRouter('/signin-complete', 'test-user');

      await waitFor(() => {
        screen.getByRole('button', { name: '자산 등록 하러 가기' });
      });
    });
  });

  context('when the current path is "/assets"', () => {
    beforeEach(() => {
      renderRouter('/assets', 'test-user');
    });

    it('renders `YearSelct` component', async () => {
      await waitFor(() => {
        screen.getByRole('prev');
        screen.getByRole('next');
      });
    });

    it('renders 12 of `MonthAsset` component', async () => {
      await waitFor(() => {
        const monthList = screen.getByRole('year-asset-list');

        expect(monthList).toBeInTheDocument();
      });
    });
  });

  context('when the current path is "/asset-detail"', () => {
    it('renders `YearSelect`, `MonthSelect` component', async () => {
      renderRouter('/asset-detail', 'test-user');
      await waitFor(() => {
        screen.getByRole('year');
        screen.getByRole('month');
      });
    });
  });

  context('when the current path is "/signin"', () => {
    it('renders 카카오톡', () => {
      renderRouter('/signin', 'test-user');

      screen.getByRole('login');
    });
  });
});

export function renderRouter(path: string, session?: string) {
  const router = createMemoryRouter(routes, { initialEntries: [path] });
  (sessionStore as unknown as jest.Mock).mockReturnValue(session);
  (useCheckAsset as unknown as jest.Mock).mockReturnValue(false);
  render(
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>,
  );
}
