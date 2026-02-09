'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const AboutPreview = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50, rotate: -3 },
    visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 0.8, type: "spring", stiffness: 80 } }
  };

  return (
    <section className="py-20 bg-theme-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 bg-gradient-to-tl from-primary to-transparent rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        <motion.div variants={imageVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <div className="relative p-2 glass-effect rounded-2xl metallic-border shadow-2xl">
            <Image
              className="w-full h-auto max-h-[550px] object-cover rounded-xl"
              alt="Equipo ARMUZA colaborando en un proyecto de diseño de interiores, con planos y muestras de materiales"
              src="/img/3años.webp"
              width={800}
              height={550}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <motion.div
              className="absolute -bottom-5 -left-5 w-24 h-24 bg-gold-gradient rounded-full flex items-center justify-center text-primary shadow-xl"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Award className="w-12 h-12" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 mb-4"
          >
            <Building className="w-8 h-8 text-highlight" />
            <span className="text-highlight font-bold uppercase tracking-wider text-lg">
              Nuestra Esencia
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-main mb-6 tracking-tight">
            Remodelaciones, <span className="gradient-text">Creamos Legados</span>
          </h2>
          <p className="text-subtle leading-relaxed mb-6 text-lg">
            En ARMUZA, cada proyecto es una obra de arte. Con más de 3 años de experiencia,
            fusionamos la artesanía tradicional con la innovación para crear espacios que
            inspiran y perduran.
          </p>
          <div className="flex space-x-8 mb-8">
            <div className="text-center">
              <Users className="w-10 h-10 text-highlight mx-auto mb-2" />
              <p className="text-2xl font-bold gradient-text">500+</p>
              <p className="text-subtle text-sm">Clientes Felices</p>
            </div>
            <div className="text-center">
              <Award className="w-10 h-10 text-highlight mx-auto mb-2" />
              <p className="text-2xl font-bold gradient-text">3+</p>
              <p className="text-subtle text-sm">Años de Trayectoria</p>
            </div>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-gold-gradient text-primary hover:scale-105 transition-all duration-300 px-10 py-6 text-lg font-semibold golden-glow shadow-lg hover:shadow-accent/50"
          >
            <Link href="/nosotros">Conoce Nuestra Historia</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
