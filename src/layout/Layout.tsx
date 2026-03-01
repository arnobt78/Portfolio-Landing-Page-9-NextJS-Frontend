'use client';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { Container } from './LayoutStyles';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}
