'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Palette, Construction, Briefcase } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Alejandro V.',
      role: 'Director Creativo & Fundador',
      description: 'Con una visión innovadora y pasión por el detalle, Alejandro lidera cada proyecto hacia la excelencia.',
      icon: Palette,
      imgUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
    },
    {
      name: 'Mariana L.',
      role: 'Jefa de Diseño de Interiores',
      description: 'Experta en transformar espacios, Mariana combina funcionalidad y estética para crear ambientes únicos.',
      icon: Construction,
      imgUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786'
    },
    {
      name: 'Ricardo S.',
      role: 'Maestro Ebanista Principal',
      description: 'Con décadas de experiencia, Ricardo da vida a la madera con habilidad y precisión incomparables.',
      icon: Briefcase,
      imgUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-20 bg-theme-gradient/70 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute -top-1/3 -left-1/3 w-full h-full bg-gradient-radial from-accent/40 to-transparent rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 mb-4"
          >
            <Users className="w-8 h-8 text-highlight" />
            <span className="text-highlight font-bold uppercase tracking-wider text-lg">
              Nuestro Equipo de Expertos
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-main mb-6 tracking-tight">
            Conoce a los <span className="gradient-text">Artesanos de Tus Sueños</span>
          </h2>
          <p className="text-lg text-subtle max-w-2xl mx-auto">
            Un equipo apasionado y dedicado a convertir tu visión en una obra maestra.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.2)" }}
              className="glass-effect rounded-2xl p-0 metallic-border subtle-shine h-full flex flex-col text-center overflow-hidden"
            >
               <div className="relative h-64 w-full">
                 <img
                  alt={member.name + ", " + member.role}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  src={member.imgUrl}
                  width={400}
                  height={256}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                 <motion.div 
                  className="absolute bottom-4 right-4 w-10 h-10 bg-gold-gradient rounded-full flex items-center justify-center text-primary shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <member.icon size={20} />
                </motion.div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold text-main mb-1">{member.name}</h3>
                <p className="text-highlight font-medium mb-3">{member.role}</p>
                <p className="text-subtle text-xs leading-relaxed flex-grow">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;