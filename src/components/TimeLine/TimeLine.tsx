'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Section, SectionDivider, SectionText, SectionTitle } from '@/components/ui/Section';
import { TimeLineData } from '@/constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

export default function Timeline() {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef<HTMLUListElement>(null);

  const scroll = (node: HTMLUListElement | null, left: number) => {
    if (node) node.scrollTo({ left, behavior: 'smooth' });
  };

  const handleClick = (e: React.MouseEvent, i: number) => {
    e.preventDefault();
    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );
      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );
      setActiveItem(index);
    }
  };

  useEffect(() => {
    const handleResize = () => scroll(carouselRef.current, 0);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="w-full"
    >
      <Section id="about">
        <SectionTitle>About Me</SectionTitle>
        <SectionText>
          The purpose of this portfolio is to help aspiring and established developers to take
          their development skills to the next level and build awesome apps.
        </SectionText>
        <ul
          ref={carouselRef}
          onScroll={handleScroll}
          className="max-w-[1040px] bg-background p-0 list-none flex justify-between ml-8 first:ml-0 mb-20 scrollbar-none [&::-webkit-scrollbar]:hidden sm:overflow-x-auto sm:overflow-y-hidden sm:scroll-snap-x sm:snap-mandatory sm:touch-pan-x sm:justify-start sm:mb-2"
          style={{ scrollbarWidth: 'none' }}
        >
          {TimeLineData.map((item, index) => (
            <div
              key={index}
              className={`sm:flex ${index === TOTAL_CAROUSEL_COUNT - 1 ? 'sm:min-w-[120%]' : 'sm:min-w-0'}`}
            >
              <div
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleClick(e as unknown as React.MouseEvent, index)}
                onClick={(e) => handleClick(e, index)}
                className={`bg-background rounded-sm max-w-[196px] md:max-w-[124px] sm:ml-8 sm:min-w-[120px] sm:bg-[#0e131f] sm:p-1 sm:content-start sm:snap-start sm:overflow-visible sm:relative sm:h-fit sm:rounded-sm ${
                  activeItem === index ? 'sm:opacity-100' : 'sm:opacity-50'
                }`}
              >
                <h4 className="font-bold text-2xl leading-8 tracking-wide flex bg-gradient-to-br from-white from-[10%] to-white/66 to-[30.15%] bg-clip-text text-transparent mb-2 md:text-xl md:leading-7 md:mb-1 sm:text-base sm:leading-6">
                  {`${item.year}`}
                  <svg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-5 w-full sm:ml-4 sm:mask-none sm:overflow-visible"
                    style={{ maskImage: 'linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))' }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fillOpacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop offset="0.79478" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </h4>
                <p className="text-sm leading-[22px] tracking-wide text-white/75 pr-4 md:text-xs md:leading-[18px] md:pr-8 sm:text-[10px] sm:leading-4 sm:pr-0">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </ul>
        <div className="w-[288px] hidden invisible sm:flex sm:visible sm:mb-12">
          {TimeLineData.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={(e) => handleClick(e, index)}
              className={`box-border bg-transparent p-1 border-none cursor-pointer mr-1 focus:outline-none ${
                activeItem === index ? 'opacity-100 scale-150' : 'opacity-30 scale-100'
              }`}
            >
              <div
                className={`bg-white rounded-full m-auto w-0.5 h-0.5 ${
                  activeItem === index ? 'opacity-100' : 'opacity-30'
                }`}
              />
            </button>
          ))}
        </div>
        <SectionDivider />
      </Section>
    </motion.div>
  );
}
