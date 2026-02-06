'use client';

import About from '@/components/About';
import TeamSection from '@/components/TeamSection';
import CTASection from '@/components/CTASection';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-10"
    >
      <header className="py-16 bg-main/50 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-accent/30 to-transparent filter blur-2xl"
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
            <Users className="w-10 h-10 text-primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-main mb-4 tracking-tight"
          >
            Conoce a <span className="gradient-text">ARMUZA</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-subtle"
          >
            Nuestra historia, valores y el equipo apasionado detrás de cada proyecto exitoso.
          </motion.p>
        </div>
      </header>
      <About />
      {/* TODO: Habilitar cuando estén listos los datos del equipo
      <TeamSection />
      */}
      {/* TODO: Habilitar sección de CTA
      <CTASection
        title="¿Inspirado por Nuestra Historia?"
        subtitle="Únete a la familia ARMUZA y hagamos realidad tus sueños de diseño."
        buttonText="Contáctanos Ahora"
        buttonLink="/contacto"
      />
      */}
    </motion.div>
  );
}
