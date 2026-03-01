'use client';

import { motion } from 'framer-motion';
import { Section, SectionDivider, SectionTitle } from '@/styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

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
      style={{ width: '100%' }}
    >
      <Section>
        <SectionTitle>Personal Achievements</SectionTitle>
        <Boxes
          as={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
          }}
        >
          {data.map((card, index) => (
            <Box
              as={motion.div}
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.92 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
                },
              }}
            >
              <BoxNum>{`${card.number}+`}</BoxNum>
              <BoxText>{card.text}</BoxText>
            </Box>
          ))}
        </Boxes>
        <SectionDivider />
      </Section>
    </motion.div>
  );
}
