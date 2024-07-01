import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { render as originalRender } from '@testing-library/react';

import defaultTheme from '@/styles/defaultTheme';

type Option = {
  path?: string;
};

export function render(
  element: React.ReactElement,
  { path = '/' }: Option = {},
) {
  return originalRender(
    <MemoryRouter initialEntries={[path]}>
      <ThemeProvider theme={defaultTheme}>{element}</ThemeProvider>
    </MemoryRouter>,
  );
}
