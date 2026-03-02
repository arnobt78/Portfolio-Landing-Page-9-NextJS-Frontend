'use client';

import { motion } from 'framer-motion';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '@/components/ui/Section';

const items = [
  { Icon: DiReact, title: 'Front-End', text: 'Experience with React.js' },
  { Icon: DiFirebase, title: 'Back-End', text: 'Experience with Node and Databases' },
  { Icon: DiZend, title: 'UI/UX', text: 'Experience with tools like Figma' },
];

export default function Technologies() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.55, 0.085, 0.68, 0.53] }}
      className="w-full"
    >
      <Section id="tech">
        <SectionDivider divider />
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
          I&apos;ve worked with a range of technologies in the web development world. From Back-end
          To Design
        </SectionText>
        <motion.ul
          className="list-none grid grid-cols-3 gap-10 my-12 lg:my-16 md:my-16 md:gap-6 sm:flex sm:flex-col sm:my-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
          }}
        >
          {items.map(({ Icon, title, text }) => (
            <motion.li
              key={title}
              className="max-w-[320px] flex flex-col md:max-w-[203px] sm:flex-row sm:mb-4 sm:max-w-[320px]"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
                },
              }}
            >
              <picture className="flex items-center justify-center">
                <Icon size={48} />
              </picture>
              <div className="flex flex-col sm:ml-4">
                <h4 className="font-bold text-[28px] leading-8 tracking-wide text-white mb-2 md:text-2xl md:leading-7 sm:text-xl sm:leading-7 sm:mb-1">
                  {title}
                </h4>
                <p className="text-lg leading-[30px] text-white/75 md:text-base md:leading-7 sm:text-sm sm:leading-[22px]">
                  {text}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
        <SectionDivider colorAlt />
      </Section>
    </motion.div>
  );
}
