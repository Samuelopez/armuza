'use client';

import Contact from '@/components/Contact';
import FAQSection from '@/components/FAQSection';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-10"
    >
      <Contact />
      <FAQSection />
    </motion.div>
  );
}
