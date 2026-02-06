'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare, UserCircle } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Laura G.',
      location: 'Polanco, CDMX',
      avatarText: 'LG',
      rating: 5,
      text: 'ARMUZA transformó mi cocina en una obra de arte funcional. ¡El equipo fue profesional y superaron mis expectativas! Totalmente recomendados.',
      project: 'Cocina Integral de Lujo'
    },
    {
      name: 'Carlos M.',
      location: 'Condesa, CDMX',
      avatarText: 'CM',
      rating: 5,
      text: 'Increíble atención al detalle en los muebles para mi estudio. Calidad excepcional y diseño impecable. ¡Gracias ARMUZA!',
      project: 'Mobiliario de Estudio Personalizado'
    },
    {
      name: 'Sofía R.',
      location: 'Santa Fe, CDMX',
      avatarText: 'SR',
      rating: 5,
      text: 'La remodelación de mi departamento fue un proceso fluido y emocionante. ARMUZA entendió mi visión y la ejecutó a la perfección.',
      project: 'Remodelación Completa de Departamento'
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
    <section className="py-20 bg-main/70 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 dark:opacity-3">
        <motion.div 
          className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4 bg-gradient-to-tl from-accent/50 to-transparent rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
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
            <MessageSquare className="w-8 h-8 text-highlight" />
            <span className="text-highlight font-bold uppercase tracking-wider text-lg">
              Voces de Nuestros Clientes
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-main mb-6 tracking-tight">
            Lo Que Dicen de <span className="gradient-text">ARMUZA</span>
          </h2>
          <p className="text-lg text-subtle max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mayor orgullo y motivación.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 40px hsl(var(--accent) / 0.2)" }}
              className="glass-effect rounded-2xl p-8 subtle-shine h-full flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center text-primary font-bold text-xl shadow-md mr-4">
                  {testimonial.avatarText || <UserCircle size={28}/>}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-main">{testimonial.name}</h3>
                  <p className="text-xs text-subtle">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-subtle leading-relaxed mb-4 text-sm flex-grow">"{testimonial.text}"</p>
              <p className="text-xs text-highlight font-medium mt-auto">
                Proyecto: {testimonial.project}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
