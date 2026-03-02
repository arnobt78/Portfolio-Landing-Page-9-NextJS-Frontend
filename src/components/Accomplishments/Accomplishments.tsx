'use client';

import { motion } from 'framer-motion';
import { Section, SectionDivider, SectionTitle } from '@/components/ui/Section';

const data = [
  { number: 20, text: 'Open Source Projects' },
  { number: 1000, text: 'Students' },
  { number: 1900, text: 'Github Followers' },
  { number: 5000, text: 'Github Stars' },
];

export default function Accomplishments() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="w-full"
    >
      <Section>
        <SectionTitle>Personal Achievements</SectionTitle>
        <motion.div
          className="w-full grid grid-cols-4 gap-6 my-6 mx-0 md:gap-4 md:my-5 md:grid-cols-[repeat(auto-fit,minmax(140px,1fr))] sm:grid-cols-2 sm:gap-2.5 sm:max-w-[500px] sm:mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
          }}
        >
          {data.map((card, index) => (
            <motion.div
              key={index}
              className="bg-surface rounded-xl h-36 p-6 lg:h-[210px] md:h-[135px] md:p-4 sm:h-[110px] sm:p-3 sm:[&:nth-child(2n)]:row-span-1 sm:[&:nth-child(2n)]:row-start-2"
              variants={{
                hidden: { opacity: 0, scale: 0.92 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
                },
              }}
            >
              <h5 className="font-semibold text-4xl leading-10 tracking-wide text-white mb-2 md:text-3xl md:leading-8 sm:text-2xl sm:leading-6">
                {`${card.number}+`}
              </h5>
              <p className="font-normal text-lg leading-6 tracking-wide text-white/75 md:text-base md:leading-5 sm:text-[10px] sm:leading-[14px]">
                {card.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <SectionDivider />
      </Section>
    </motion.div>
  );
}
