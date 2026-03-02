'use client';

import Image from 'next/image';
import { projects } from '@/constants/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const divider: React.CSSProperties = {
  width: 64, height: 6, borderRadius: 10,
  background: 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)',
  marginBottom: 16,
};
const sectionTitle: React.CSSProperties = {
  fontWeight: 800,
  fontSize: 'clamp(28px, 5vw, 65px)',
  lineHeight: 1.1,
  padding: '58px 0 16px',
  background: 'linear-gradient(121.57deg, #ffffff 18.77%, rgba(255,255,255,0.66) 60.15%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'transparent',
  margin: 0,
};
const grid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
  padding: '3rem 0',
  placeItems: 'center',
  columnGap: '2rem',
  rowGap: '3rem',
};
const card: React.CSSProperties = {
  borderRadius: 10,
  boxShadow: '3px 3px 20px rgba(80,78,78,0.5)',
  textAlign: 'center',
  width: 400,
  maxWidth: '100%',
  border: '1px solid rgba(255,255,255,0.1)',
};

export default function Projects() {
  const ref = useScrollReveal<HTMLElement>(0.1);

  return (
    <section ref={ref} className="anim-fade-up" id="projects" style={{ padding: '32px 0 0' }}>
      <div style={divider} />
      <h2 style={sectionTitle}>Projects</h2>
      <div className="stagger-children" style={grid}>
        {projects.map((p) => (
          <div key={p.id} style={card}>
            <Image src={p.image} alt={p.title} width={400} height={240} style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
            <div style={{ padding: '16px 0' }}>
              <h3 style={{ fontWeight: 500, letterSpacing: 2, color: '#9cc9e3', padding: '0.5rem 0', fontSize: '2rem' }}>{p.title}</h3>
              <hr style={{ width: 50, height: 3, margin: '20px auto', border: 0, background: '#d0bb57' }} />
            </div>
            <p style={{ padding: '0 50px', color: '#e4e6e7', fontSize: '1.4rem', lineHeight: '24px', textAlign: 'justify' }}>{p.description}</p>
            <div style={{ padding: '8px 0' }}>
              <div style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: 500, color: 'rgba(255,255,255,0.8)' }}>Stack</div>
              <ul style={{ display: 'flex', justifyContent: 'space-around', padding: '2rem', listStyle: 'none', margin: 0 }}>
                {p.tags.map((t, i) => (
                  <li key={i} style={{ color: '#d8bfbf', fontSize: '1.5rem' }}>{t}</li>
                ))}
              </ul>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'space-around', margin: '2.5rem 0' }}>
              <li><a href={p.visit} target="_blank" rel="noreferrer" style={{ color: '#d4c0c0', fontSize: '1.6rem', padding: '1rem 1.5rem', background: '#6b3030', borderRadius: 15, textDecoration: 'none' }}>Code</a></li>
              <li><a href={p.source} target="_blank" rel="noreferrer" style={{ color: '#d4c0c0', fontSize: '1.6rem', padding: '1rem 1.5rem', background: '#6b3030', borderRadius: 15, textDecoration: 'none' }}>Source</a></li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
