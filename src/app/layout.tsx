import type { Metadata, Viewport } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';

const SITE_URL = 'https://portfolio-ui-9.vercel.app/';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "John Doe's Portfolio",
  description:
    'Personal portfolio of John Doe — projects, technologies, and experience. Built with Next.js. By Arnob Mahmud (https://www.arnobmahmud.com, contact@arnobmahmud.com).',
  authors: [{ name: 'Arnob Mahmud', url: 'https://www.arnobmahmud.com' }],
  creator: 'Arnob Mahmud',
  publisher: 'Arnob Mahmud',
  other: {
    contact: 'contact@arnobmahmud.com',
  },
  keywords: [
    'portfolio',
    'John Doe',
    'developer',
    'React',
    'Next.js',
    'web development',
    'projects',
    'frontend',
    'full stack',
    'Arnob Mahmud',
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: "John Doe's Portfolio",
    description:
      'Personal portfolio of John Doe — projects, technologies, and experience. Built with Next.js. By Arnob Mahmud.',
    siteName: "John Doe's Portfolio",
    locale: 'en_GB',
    images: [
      { url: 'og-image.png', width: 1200, height: 630, alt: "John Doe's Portfolio" },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "John Doe's Portfolio",
    description:
      'Personal portfolio of John Doe — projects, technologies, and experience. Built with Next.js. By Arnob Mahmud.',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#0f1624',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={spaceGrotesk.variable}>
      <body className="min-h-screen bg-background text-primary">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
