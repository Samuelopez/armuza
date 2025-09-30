
import React from 'react';
import Services from '@/components/Services';
import CTASection from '@/components/CTASection';
import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';

const ServicesPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-10"
    >
      <header className="py-16 bg-main/50 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/30 to-transparent filter blur-2xl"
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
            className="inline-block p-4 bg-gold-gradient rounded-full mb-6 shadow-lg"
          >
            <Wrench className="w-10 h-10 text-primary" />
          </motion.div>
          <motion.h1 
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.5, delay:0.2 }}
            className="text-4xl md:text-6xl font-bold text-main mb-4 tracking-tight"
          >
            Nuestros <span className="gradient-text">Servicios Expertos</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.5, delay:0.4 }}
            className="text-lg md:text-xl text-subtle"
          >
            Descubre la gama completa de soluciones que ARMUZA ofrece para transformar tus espacios.
          </motion.p>
        </div>
      </header>
      <Services />
      <CTASection 
        title="¿Listo para Empezar tu Proyecto?"
        subtitle="Contáctanos hoy mismo para una consulta gratuita y descubre cómo podemos ayudarte."
        buttonText="Solicitar Consulta"
        buttonLink="/contacto"
      />
    </motion.div>
  );
};

export default ServicesPage;
