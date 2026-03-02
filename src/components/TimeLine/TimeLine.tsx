'use client';

import React, { useState, useRef, useEffect } from 'react';
import { TimeLineData } from '@/constants/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const sectionTitle: React.CSSProperties = {
  fontWeight: 800, fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1,
  background: 'linear-gradient(121.57deg, #ffffff 18.77%, rgba(255,255,255,0.66) 60.15%)',
  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
  backgroundClip: 'text', color: 'transparent', margin: '0 0 16px',
};
const divider: React.CSSProperties = {
  width: 64, height: 6, borderRadius: 10,
  background: 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)',
  marginTop: '3rem',
};

export default function Timeline() {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef<HTMLUListElement>(null);

  const scroll = (node: HTMLUListElement | null, left: number) => {
    if (node) node.scrollTo({ left, behavior: 'smooth' });
  };

  const handleClick = (e: React.MouseEvent, i: number) => {
    e.preventDefault();
    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);
      setActiveItem(index);
    }
  };

  useEffect(() => {
    const handleResize = () => scroll(carouselRef.current, 0);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sectionRef = useScrollReveal<HTMLElement>(0.1);

  return (
    <section ref={sectionRef} className="anim-fade-rotate" id="about" style={{ padding: '32px 0 0' }}>
      <h2 style={sectionTitle}>About Me</h2>
      <p style={{ maxWidth: 800, fontSize: 'clamp(16px, 2vw, 24px)', lineHeight: 1.6, fontWeight: 300, paddingBottom: '3.6rem', color: 'rgba(255,255,255,0.5)' }}>
        The purpose of this portfolio is to help aspiring and established developers to take their
        development skills to the next level and build awesome apps.
      </p>
      <ul
        ref={carouselRef}
        onScroll={handleScroll}
        style={{
          listStyle: 'none', margin: '0 0 80px 32px', padding: 0,
          display: 'flex', justifyContent: 'space-between',
          scrollbarWidth: 'none',
        }}
      >
        {TimeLineData.map((item, index) => (
          <li
            key={index}
            role="button"
            tabIndex={0}
            onClick={(e) => handleClick(e, index)}
            onKeyDown={(e) => e.key === 'Enter' && handleClick(e as unknown as React.MouseEvent, index)}
            style={{ maxWidth: 196, cursor: 'pointer', background: '#0F1624', borderRadius: 3 }}
          >
            <h4
              style={{
                fontWeight: 700, fontSize: 24, lineHeight: '32px', letterSpacing: '0.02em',
                display: 'flex', alignItems: 'center',
                background: 'linear-gradient(121.57deg, #ffffff 10%, rgba(255,255,255,0.66) 30.15%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text', color: 'transparent', marginBottom: 8,
              }}
            >
              {`${item.year}`}
              <svg width="208" height="6" viewBox="0 0 208 6" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: 21, width: '100%', maskImage: 'linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))' }}>
                <path fillRule="evenodd" clipRule="evenodd" d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z" fill="url(#paint0_linear)" fillOpacity="0.33" />
                <defs>
                  <linearGradient id="paint0_linear" x1="-4.30412e-10" y1="0.5" x2="208" y2="0.500295" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" /><stop offset="0.79478" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </h4>
            <p style={{ fontSize: 14, lineHeight: '22px', letterSpacing: '0.02em', color: 'rgba(255,255,255,0.75)', paddingRight: 16 }}>
              {item.text}
            </p>
          </li>
        ))}
      </ul>
      <div style={divider} />
    </section>
  );
}
