'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Section, SectionDivider, SectionTitle } from '@/components/ui/Section';
import { projects } from '@/constants/constants';

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="w-full"
    >
      <Section nopadding id="projects">
        <SectionDivider />
        <SectionTitle main>Projects</SectionTitle>
        <motion.section
          className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] p-12 place-items-center gap-x-8 gap-y-12 sm:flex sm:flex-col sm:p-8 sm:pb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
        >
          {projects.map((p) => (
            <motion.div
              key={p.id}
              className="rounded-xl shadow-lg text-center w-[400px] sm:w-full bg-background/50 border border-white/10"
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
                },
              }}
            >
               <Image src={p.image} alt={p.title} width={400} height={240} className="w-full h-full object-cover overflow-hidden rounded-t-xl" />
              <div className="text-center z-20 w-full py-4">
                <h3 className="font-medium tracking-widest text-[#9cc9e3] py-2 text-3xl">{p.title}</h3>
                <hr className="w-12 h-0.5 my-5 mx-auto border-0 bg-[#d0bb57]" />
              </div>
              <p className="w-full px-12 text-[#e4e6e7] leading-6 text-justify text-base sm:px-1">
                {p.description}
              </p>
              <div className="py-2">
                <div className="text-center text-sm font-medium text-white/80">Stack</div>
                <ul className="flex justify-around py-8">
                  {p.tags.map((t, tagIndex) => (
                    <li key={tagIndex} className="text-[#d8bfbf] text-xl">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <ul className="flex justify-around my-10">
                <a
                  href={p.visit}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#d4c0c0] text-[1.6rem] py-4 px-6 bg-[#6b3030] rounded-[15px] transition-colors duration-300 hover:bg-[#801414]"
                >
                  Code
                </a>
                <a
                  href={p.source}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#d4c0c0] text-[1.6rem] py-4 px-6 bg-[#6b3030] rounded-[15px] transition-colors duration-300 hover:bg-[#801414]"
                >
                  Source
                </a>
              </ul>
            </motion.div>
          ))}
        </motion.section>
      </Section>
    </motion.div>
  );
}
