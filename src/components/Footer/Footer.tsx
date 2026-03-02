'use client';

import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const socialIcon: React.CSSProperties = { color: 'white', padding: 8, display: 'inline-flex', transition: '0.3s ease' };

export default function Footer() {
  return (
    <footer style={{ padding: '2rem 0 40px' }}>
      <ul
        style={{
          listStyle: 'none', margin: 0, padding: '40px 0 28px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'grid', gridTemplateColumns: 'repeat(3, minmax(85px, 220px))', gap: 40,
        }}
      >
        <li style={{ display: 'flex', flexDirection: 'column' }}>
          <h4 style={{ fontWeight: 600, fontSize: 12, lineHeight: '24px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', margin: '0 0 16px' }}>Call</h4>
          <a href="tel:123-456-7890" style={{ fontSize: 18, lineHeight: '30px', color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>123-456-7890</a>
        </li>
        <li style={{ display: 'flex', flexDirection: 'column' }}>
          <h4 style={{ fontWeight: 600, fontSize: 12, lineHeight: '24px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', margin: '0 0 16px' }}>Email</h4>
          <a href="mailto:contact@johndoe.com" style={{ fontSize: 18, lineHeight: '30px', color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>contact@johndoe.com</a>
        </li>
      </ul>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 18, lineHeight: '30px', letterSpacing: '0.02em', margin: 0 }}>
          Innovating one project at a time
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <a href="https://github.com" target="_blank" rel="noreferrer" style={socialIcon} aria-label="GitHub"><AiFillGithub size={48} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={socialIcon} aria-label="LinkedIn"><AiFillLinkedin size={48} /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" style={socialIcon} aria-label="Instagram"><AiFillInstagram size={48} /></a>
        </div>
      </div>
    </footer>
  );
}
