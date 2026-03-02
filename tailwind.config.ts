import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'grid', 'grid-cols-2', 'flex', 'flex-col', 'flex-row',
    'max-w-7xl', 'mx-auto', 'text-transparent', 'bg-clip-text',
    'opacity-100', 'opacity-0', 'text-white/50', 'w-full',
  ],
  theme: {
    extend: {
      maxWidth: {
        '7xl': '1280px',
      },
      colors: {
        background: '#0F1624',
        primary: 'hsl(204, 23.8%, 95.9%)',
        surface: '#212d45',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
