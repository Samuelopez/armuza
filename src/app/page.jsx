'use client';

import Hero from '@/components/Hero';
import ServicesPreview from '@/components/ServicesPreview';
import AboutPreview from '@/components/AboutPreview';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <Testimonials />
      <CTASection />
    </motion.div>
  );
}
