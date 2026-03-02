'use client';

import Accomplishments from '@/components/Accomplishments/Accomplishments';
import BackgroundAnimation from '@/components/BackgroundAnimation/BackgroundAnimation';
import Hero from '@/components/Hero/Hero';
import Projects from '@/components/Projects/Projects';
import Technologies from '@/components/Technologies/Technologies';
import Timeline from '@/components/TimeLine/TimeLine';
import { Layout } from '@/layout/Layout';

export default function Home() {
  return (
    <Layout>
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 2rem', padding: '0 0 2rem' }}>
        <Hero />
        <BackgroundAnimation />
      </section>
      <Projects />
      <Technologies />
      <Timeline />
      <Accomplishments />
    </Layout>
  );
}
