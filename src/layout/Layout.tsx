'use client';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

interface LayoutProps {
  children: React.ReactNode;
}

const container: React.CSSProperties = {
  maxWidth: 1280,
  width: '100%',
  margin: '0 auto',
  padding: '0 48px',
  boxSizing: 'border-box',
};

export function Layout({ children }: LayoutProps) {
  return (
    <div style={container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
