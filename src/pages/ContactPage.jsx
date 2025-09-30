
import React from 'react';
import Contact from '@/components/Contact';
import FAQSection from '@/components/FAQSection';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const ContactPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-10"
    >
      {/* <header className="py-16 bg-main/50 text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-accent/30 to-transparent filter blur-2xl"
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          {/* <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
            className="inline-block p-4 bg-gold-gradient rounded-full mb-6 shadow-lg"
          >
            <Mail className="w-10 h-10 text-primary" />
          </motion.div> */}
          {/* <motion.h1 
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.5, delay:0.2 }}
            className="text-4xl md:text-6xl font-bold text-main mb-4 tracking-tight"
          >
            Ponte en <span className="gradient-text">Contacto</span>
          </motion.h1> */}
          {/* <motion.p 
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.5, delay:0.4 }}
            className="text-lg md:text-xl text-subtle"
          >
            Estamos listos para escucharte y ayudarte a materializar tus ideas.
          </motion.p> 
        </div>
      </header> */}
      <Contact />
      <FAQSection />
    </motion.div>
  );
};

export default ContactPage;
