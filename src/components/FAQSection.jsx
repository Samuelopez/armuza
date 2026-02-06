'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: '¿Cuál es el proceso para iniciar un proyecto con ARMUZA?',
      answer: 'Comenzamos con una consulta gratuita para entender tus necesidades y visión. Luego, desarrollamos una propuesta de diseño detallada. Una vez aprobada, pasamos a la fabricación e instalación, manteniéndote informado en cada etapa.'
    },
    {
      question: '¿Qué tipo de materiales utilizan para los muebles y cocinas?',
      answer: 'Priorizamos materiales de la más alta calidad, desde maderas nobles y herrajes europeos hasta superficies innovadoras y sostenibles. Nos adaptamos a tus preferencias y presupuesto, siempre garantizando durabilidad y estética.'
    },
    {
      question: '¿Ofrecen garantía en sus trabajos?',
      answer: 'Sí, todos nuestros proyectos cuentan con una garantía integral que cubre tanto materiales como mano de obra. La duración específica varía según el tipo de servicio, y te la detallaremos en tu cotización.'
    },
    {
      question: '¿Cuánto tiempo toma completar un proyecto promedio?',
      answer: 'El tiempo de entrega varía según la complejidad y escala del proyecto. Un mueble personalizado puede tomar de 4 a 6 semanas, mientras que una remodelación completa puede extenderse por varios meses. Te proporcionaremos un cronograma detallado al inicio.'
    },
    {
      question: '¿Trabajan con diseños proporcionados por el cliente?',
      answer: '¡Absolutamente! Si ya tienes un diseño o una idea clara, nuestro equipo trabajará contigo para refinarlo y hacerlo realidad, asegurando que cumpla con nuestros estándares de calidad y funcionalidad.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-main relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 dark:opacity-3">
        <motion.div 
          className="absolute -bottom-1/3 -right-1/3 w-full h-full bg-gradient-radial from-accent/30 to-transparent rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <HelpCircle className="w-8 h-8 text-highlight" />
            <span className="text-highlight font-bold uppercase tracking-wider text-lg">
              Preguntas Frecuentes
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-main mb-6 tracking-tight">
            Resolvemos Tus <span className="gradient-text">Dudas Comunes</span>
          </h2>
          <p className="text-lg text-subtle">
            Encuentra respuestas rápidas a las preguntas más habituales sobre nuestros servicios y procesos.
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div  
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl metallic-border overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left p-6 focus:outline-none group"
              >
                <span className="text-lg font-medium text-main group-hover:text-accent transition-colors">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className={`w-6 h-6 text-subtle group-hover:text-accent transition-colors ${activeIndex === index ? 'text-accent' : ''}`} />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-6 pb-6"
                  >
                    <p className="text-subtle leading-relaxed text-sm">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
