'use client';

import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

const header: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridTemplateRows: '1fr',
  gap: '0 2rem',
  padding: '2rem 0 1rem',
  alignItems: 'center',
};
const brand: React.CSSProperties = { gridColumn: '1 / 2', display: 'flex', alignItems: 'center' };
const nav: React.CSSProperties = { gridColumn: '2 / 4', display: 'flex', justifyContent: 'space-around', alignItems: 'center' };
const social: React.CSSProperties = { gridColumn: '5 / 6', display: 'flex', justifyContent: 'space-around', alignItems: 'center' };
const navLink: React.CSSProperties = { fontSize: '2rem', lineHeight: '32px', color: 'rgba(255,255,255,0.75)', textDecoration: 'none' };
const socialIcon: React.CSSProperties = { color: 'white', padding: 8, borderRadius: 50, display: 'inline-flex', transition: '0.3s ease' };

export default function Header() {
  return (
    <header style={header}>
      <div style={brand}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', color: 'white', textDecoration: 'none', gap: 4 }}>
          <DiCssdeck size={48} /> <span>Portfolio</span>
        </Link>
      </div>
      <nav style={nav}>
        <a href="#projects" style={navLink}>Projects</a>
        <a href="#tech" style={navLink}>Technologies</a>
        <a href="#about" style={navLink}>About</a>
      </nav>
      <div style={social}>
        <a href="https://github.com" target="_blank" rel="noreferrer" style={socialIcon} aria-label="GitHub"><AiFillGithub size={48} /></a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={socialIcon} aria-label="LinkedIn"><AiFillLinkedin size={48} /></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" style={socialIcon} aria-label="Instagram"><AiFillInstagram size={48} /></a>
      </div>
    </header>
  );
}
