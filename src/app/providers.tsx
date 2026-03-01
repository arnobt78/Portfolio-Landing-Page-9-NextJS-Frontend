'use client';

import Theme from '@/styles/theme';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <Theme>{children}</Theme>;
}
