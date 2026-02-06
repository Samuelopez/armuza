'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Hammer,
  Sofa,
  Layers,
  Droplets,
  Home,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ServicesPreview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const services = [
    {
      icon: Hammer,
      title: 'Metal & Forja Arquitectónica',
      description: 'Estructuras metálicas de diseño exclusivo. Portones, barandales, escaleras y pérgolas con acabados premium.',
      imgUrl: "/img/servicios/metal-forja.png"
    },
    {
      icon: Sofa,
      title: 'Carpintería de Diseño',
      description: 'Muebles por catálogo fabricados con materiales premium. Escritorios, cocinas, closets y más.',
      imgUrl: "/img/servicios/muebles.png"
    },
    {
      icon: Layers,
      title: 'Tablaroca & Acabados',
      description: 'Instalación profesional de drywall con 5 niveles de acabado. Divisiones y plafones de alta calidad.',
      imgUrl: "/img/servicios/tablaroca.png"
    },
    {
      icon: Droplets,
      title: 'Impermeabilización Profesional',
      description: 'Protección total contra filtraciones. Sistemas acrílicos y membranas prefabricadas con garantía.',
      imgUrl: "/img/servicios/impermeabilizacion.png"
    },
    {
      icon: Home,
      title: 'Remodelación Integral',
      description: 'Transformamos cualquier espacio. Baños, cocinas, recámaras y proyectos comerciales completos.',
      imgUrl: "/img/servicios/remodelacion.png"
    }
  ];

  // Detectar mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // En desktop mostramos todos, en mobile usamos carrusel
  const servicesPerSlide = isMobile ? 1 : 5;
  const totalSlides = Math.ceil(services.length / servicesPerSlide);

  // Auto-play solo en mobile
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides, isMobile]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getCurrentServices = () => {
    if (!isMobile) return services;
    const startIndex = currentSlide * servicesPerSlide;
    return services.slice(startIndex, startIndex + servicesPerSlide);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const iconContainerVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1, rotate: [0, 10, -10, 0], transition: { duration: 0.4 } }
  };

  return (
    <section className="py-20 bg-theme-gradient/70 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-1/2 left-1/2 w-3/4 h-3/4 -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-accent/50 to-transparent rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
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
            <Sparkles className="w-8 h-8 text-highlight" />
            <span className="text-highlight font-bold uppercase tracking-wider text-lg">
              Excelencia en Cada Proyecto
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-main mb-6 tracking-tight">
            Nuestras <span className="gradient-text">5 Especialidades</span>
          </h2>
          <p className="text-lg text-subtle max-w-2xl mx-auto">
            Soluciones profesionales para transformar cualquier espacio con calidad de clase mundial.
          </p>
        </motion.div>

        <div className="relative mb-16">
          {/* Navigation Arrows - Mobile only */}
          {isMobile && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gold-gradient text-primary p-2 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gold-gradient text-primary p-2 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Services Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={isMobile ? currentSlide : 'all'}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={`grid gap-6 px-8 md:px-0
                ${isMobile ? 'grid-cols-1' : 'grid-cols-2 lg:grid-cols-5'}`}
            >
              {getCurrentServices().map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={cardVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass-effect rounded-2xl p-0 metallic-border subtle-shine group overflow-hidden flex flex-col"
                >
                  <div className="relative h-40 w-full">
                    <img
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                      src={service.imgUrl}
                      onError={(e) => {
                        e.target.src = `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10"></div>
                    <motion.div
                      variants={iconContainerVariants}
                      initial="rest"
                      whileHover="hover"
                      className="absolute top-3 right-3 w-10 h-10 bg-gold-gradient rounded-full flex items-center justify-center shadow-lg group-hover:pulse-glow"
                    >
                      <service.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                  </div>

                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-base font-bold text-main mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                      {service.title}
                    </h3>
                    <p className="text-subtle leading-relaxed text-xs line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots - Mobile only */}
          {isMobile && (
            <div className="flex justify-center space-x-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-accent scale-125'
                      : 'bg-subtle/30 hover:bg-subtle/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-transparent border-2 border-accent text-accent hover:bg-gold-gradient hover:text-primary hover:border-transparent hover:scale-105 transition-all duration-300 px-10 py-6 text-lg font-semibold shadow-lg"
          >
            <Link href="/catalogo">Explorar Catálogo Completo</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
