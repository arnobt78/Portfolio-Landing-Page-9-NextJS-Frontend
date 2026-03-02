'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Hero() {
  const ref = useScrollReveal<HTMLDivElement>(0.1);

  return (
    <div ref={ref} className="anim-fade-left" style={{ width: '100%' }}>
      <h2
        style={{
          fontWeight: 800,
          fontSize: 'clamp(28px, 5vw, 65px)',
          lineHeight: 1.1,
          marginBottom: 16,
          padding: '58px 0 16px',
          background: 'linear-gradient(121.57deg, #ffffff 18.77%, rgba(255,255,255,0.66) 60.15%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        Welcome To <br />
        My Personal Portfolio
      </h2>
      <p
        style={{
          maxWidth: 800,
          fontSize: 'clamp(16px, 2vw, 24px)',
          lineHeight: 1.6,
          fontWeight: 300,
          paddingBottom: '3.6rem',
          color: 'rgba(255,255,255,0.5)',
        }}
      >
        The purpose of this portfolio is to help aspiring and established developers to take
        their development skills to the next level and build awesome apps.
      </p>
      <button
        type="button"
        style={{
          width: 262, height: 64, marginBottom: 80, padding: '16px 24px',
          background: 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)',
          color: '#fff', fontSize: '1.5rem', fontWeight: 600,
          border: 'none', borderRadius: 50, cursor: 'pointer',
        }}
      >
        Learn More
      </button>
    </div>
  );
}
