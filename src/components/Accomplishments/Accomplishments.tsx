'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const data = [
  { number: 20, text: 'Open Source Projects' },
  { number: 1000, text: 'Students' },
  { number: 1900, text: 'Github Followers' },
  { number: 5000, text: 'Github Stars' },
];

const sectionTitle: React.CSSProperties = {
  fontWeight: 800, fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1,
  background: 'linear-gradient(121.57deg, #ffffff 18.77%, rgba(255,255,255,0.66) 60.15%)',
  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
  backgroundClip: 'text', color: 'transparent', margin: '0 0 16px',
};
const box: React.CSSProperties = {
  background: '#212d45', borderRadius: 12, padding: 24, minHeight: 144,
};

export default function Accomplishments() {
  const ref = useScrollReveal<HTMLElement>(0.1);

  return (
    <section ref={ref} className="anim-scale-in" style={{ padding: '32px 0 0' }}>
      <h2 style={sectionTitle}>Personal Achievements</h2>
      <div className="stagger-children" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, margin: '24px 0' }}>
        {data.map((card, index) => (
          <div key={index} style={box}>
            <h5 style={{ fontWeight: 600, fontSize: 36, lineHeight: '40px', letterSpacing: '0.01em', color: 'white', marginBottom: 8, margin: '0 0 8px' }}>
              {`${card.number}+`}
            </h5>
            <p style={{ fontWeight: 400, fontSize: 18, lineHeight: '24px', letterSpacing: '0.02em', color: 'rgba(255,255,255,0.75)', margin: 0 }}>
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
