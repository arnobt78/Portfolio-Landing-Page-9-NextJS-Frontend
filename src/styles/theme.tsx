'use client';

import { ThemeProvider } from 'styled-components';
import theme from '../themes/default';
import GlobalStyles from './globals';

interface ThemeProps {
  children: React.ReactNode;
}

export default function Theme({ children }: ThemeProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
