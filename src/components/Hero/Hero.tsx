'use client';

import { motion } from 'framer-motion';
import { Section, SectionText, SectionTitle } from '@/components/ui/Section';
import Button from '@/components/ui/Button';

interface HeroProps {
  handleClick?: () => void;
}

export default function Hero({ handleClick }: HeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="w-full"
    >
      <Section row nopadding className="flex flex-row">
        <div className="w-full sm:w-4/5 sm:flex sm:flex-col sm:mx-auto md:w-full md:flex md:flex-col md:mx-auto">
          <SectionTitle main className="text-center">
            Welcome To <br />
            My Personal Portfolio
          </SectionTitle>
          <SectionText>
            The purpose of this portfolio is to help aspiring and established developers to take
            their development skills to the next level and build awesome apps.
          </SectionText>
          <Button onClick={handleClick}>Learn More</Button>
        </div>
      </Section>
    </motion.div>
  );
}
