'use client';

import { motion } from 'framer-motion';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '@/styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

export default function Technologies() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.55, 0.085, 0.68, 0.53] }}
      style={{ width: '100%' }}
    >
      <Section id="tech">
        <SectionDivider divider />
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
          I&apos;ve worked with a range of technologies in the web development world. From Back-end
          To Design
        </SectionText>
        <List
          as={motion.ul}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
          }}
        >
          <ListItem
            as={motion.li}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
              },
            }}
          >
            <picture>
              <DiReact size={48} />
            </picture>
            <ListContainer>
              <ListTitle>Front-End</ListTitle>
              <ListParagraph>
                Experience with <br />
                React.js
              </ListParagraph>
            </ListContainer>
          </ListItem>
          <ListItem
            as={motion.li}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
              },
            }}
          >
            <picture>
              <DiFirebase size={48} />
            </picture>
            <ListContainer>
              <ListTitle>Back-End</ListTitle>
              <ListParagraph>
                Experience with <br />
                Node and Databases
              </ListParagraph>
            </ListContainer>
          </ListItem>
          <ListItem
            as={motion.li}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
              },
            }}
          >
            <picture>
              <DiZend size={48} />
            </picture>
            <ListContainer>
              <ListTitle>UI/UX</ListTitle>
              <ListParagraph>
                Experience with <br />
                tools like Figma
              </ListParagraph>
            </ListContainer>
          </ListItem>
        </List>
        <SectionDivider colorAlt />
      </Section>
    </motion.div>
  );
}
