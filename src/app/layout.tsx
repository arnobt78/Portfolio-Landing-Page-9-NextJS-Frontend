import type { Metadata, Viewport } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { Providers } from './providers';

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
  authors: [
    { name: 'Arnob Mahmud', url: 'https://www.arnobmahmud.com' },
  ],
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
    images: [{ url: 'og-image.png', width: 1200, height: 630, alt: "John Doe's Portfolio" }],
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

// Critical CSS to prevent white flash and link (violet/purple) flash before styled-components hydrate
const criticalStyles = `
  html{font-size:62.5%;scroll-behavior:smooth;background:#0F1624;}
  body{background:#0F1624 !important;color:hsl(204,23.8%,95.9%) !important;margin:0;padding:0;}
  *,:after,:before{box-sizing:border-box;}
  a{color:inherit;text-decoration:none;}
  a:link,a:visited,a:hover,a:active{color:inherit;}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={spaceGrotesk.variable}>
      <body>
        <style dangerouslySetInnerHTML={{ __html: criticalStyles }} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
