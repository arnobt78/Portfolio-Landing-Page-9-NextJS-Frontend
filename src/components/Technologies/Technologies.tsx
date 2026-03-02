'use client';

import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const items = [
  { Icon: DiReact, title: 'Front-End', text: 'Experience with React.js' },
  { Icon: DiFirebase, title: 'Back-End', text: 'Experience with Node and Databases' },
  { Icon: DiZend, title: 'UI/UX', text: 'Experience with tools like Figma' },
];

const divider: React.CSSProperties = {
  width: 64, height: 6, borderRadius: 10, margin: '4rem 0',
  background: 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)',
};
const dividerAlt: React.CSSProperties = {
  width: 64, height: 6, borderRadius: 10,
  background: 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)',
};
const sectionTitle: React.CSSProperties = {
  fontWeight: 800, fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1,
  background: 'linear-gradient(121.57deg, #ffffff 18.77%, rgba(255,255,255,0.66) 60.15%)',
  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
  backgroundClip: 'text', color: 'transparent', margin: '0 0 16px',
};

export default function Technologies() {
  const ref = useScrollReveal<HTMLElement>(0.1);

  return (
    <section ref={ref} className="anim-fade-down" id="tech" style={{ padding: '32px 0 0' }}>
      <div style={divider} />
      <h2 style={sectionTitle}>Technologies</h2>
      <p style={{ maxWidth: 800, fontSize: 'clamp(16px, 2vw, 24px)', lineHeight: 1.6, fontWeight: 300, paddingBottom: '3.6rem', color: 'rgba(255,255,255,0.5)' }}>
        I&apos;ve worked with a range of technologies in the web development world. From Back-end To Design
      </p>
      <ul className="stagger-children" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem' }}>
        {items.map(({ Icon, title, text }) => (
          <li key={title} style={{ maxWidth: 320, display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: 8 }}><Icon size={48} /></div>
            <h4 style={{ fontWeight: 700, fontSize: 28, lineHeight: '32px', letterSpacing: '0.02em', color: 'white', marginBottom: 8 }}>{title}</h4>
            <p style={{ fontSize: 18, lineHeight: '30px', color: 'rgba(255,255,255,0.75)' }}>{text}</p>
          </li>
        ))}
      </ul>
      <div style={{ ...dividerAlt, marginTop: '3rem' }} />
    </section>
  );
}
