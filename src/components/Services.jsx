'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Hammer,
  Layers,
  Droplets,
  Home,
  Sparkles,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Services = () => {
  const services = [
    {
      id: 'metal',
      icon: Hammer,
      title: 'Metal & Forja Arquitectónica',
      description: 'Estructuras metálicas de diseño exclusivo. Portones, barandales, escaleras y pérgolas con acabados premium.',
      features: ['Portones automatizados', 'Barandales de lujo', 'Escaleras metálicas', 'Pérgolas y techados'],
      imgUrl: "/img/metal/servicio-metal.webp"
    },
    {
      id: 'tablaroca',
      icon: Layers,
      title: 'Tablaroca & Acabados',
      description: 'Instalación profesional de drywall con 5 niveles de acabado. Divisiones, plafones y muros de alta calidad.',
      features: ['Acabados Etapa 1-5', 'Divisiones modulares', 'Plafones decorativos', 'Aislamiento acústico'],
      imgUrl: "/img/tablaroca/tablaroca-servicios.webp"
    },
    {
      id: 'impermeabilizacion',
      icon: Droplets,
      title: 'Impermeabilización Profesional',
      description: 'Protección total contra filtraciones. Sistemas acrílicos, ranurado de grietas y membranas prefabricadas.',
      features: ['Impermeabilización acrílica', 'Ranurado de grietas', 'Membrana prefabricada', 'Garantía hasta 15 años'],
      imgUrl: "/img/impermeabilizante/impermeabilizar.webp"
    },
    {
      id: 'remodelacion',
      icon: Home,
      title: 'Remodelación Integral',
      description: 'Transformamos cualquier espacio. Baños, cocinas, recámaras y proyectos comerciales completos.',
      features: ['Baños tipo spa', 'Remodelación comercial', 'Ampliaciones', 'Proyectos integrales'],
      imgUrl: "/img/remodelacion-integral/remodelacion-integral.webp"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const iconContainerVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1, rotate: 5 }
  };

  const iconVariants = {
    rest: { rotate: 0 },
    hover: { rotate: 360, transition: { duration: 0.5, ease: "linear" } }
  };

  return (
    <section id="servicios" className="py-20 relative overflow-hidden bg-theme-gradient">
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-accent to-transparent rounded-full filter blur-3xl animate-pulse"
          animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
            transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 150 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 mb-4"
          >
            <Sparkles className="w-8 h-8 text-highlight" />
            <span className="text-highlight font-bold uppercase tracking-wider text-lg">
              Nuestros Servicios
            </span>
            <Sparkles className="w-8 h-8 text-highlight" />
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-main mb-6 tracking-tight">
            Servicios <span className="gradient-text">Profesionales</span>
          </h1>

          <p className="text-xl text-subtle max-w-3xl mx-auto leading-relaxed">
            Cuatro áreas de especialización para transformar tus espacios.
            Calidad mundial en cada proyecto.
          </p>
        </motion.div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 lg:gap-12 items-center`}
            >
              {/* Título - visible primero en mobile */}
              <div className="w-full lg:hidden text-center">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-highlight font-semibold text-sm uppercase tracking-wider"
                >
                  Servicio
                </motion.span>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-main mt-2"
                >
                  {service.title}
                </motion.h3>
              </div>

              {/* Imagen */}
              <Link href={`/proyectos?servicio=${service.id}`} className="w-full lg:w-1/2">
                <motion.div
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <img
                      alt={service.title}
                      width={600}
                      height={400}
                      loading="lazy"
                      className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      src={service.imgUrl}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                    {/* Icono flotante */}
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="absolute bottom-6 right-6 w-16 h-16 bg-gold-gradient rounded-2xl flex items-center justify-center shadow-xl"
                    >
                      <service.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                  </div>
                </motion.div>
              </Link>

              {/* Contenido */}
              <div className="w-full lg:w-1/2 space-y-6">
                {/* Título - solo visible en desktop */}
                <div className="hidden lg:block">
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-highlight font-semibold text-sm uppercase tracking-wider"
                  >
                    Servicio
                  </motion.span>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-main mt-2"
                  >
                    {service.title}
                  </motion.h3>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-subtle text-lg leading-relaxed"
                >
                  {service.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-3"
                >
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-2 p-2 lg:p-3 rounded-xl bg-card/50 hover:bg-card transition-colors duration-300"
                    >
                      <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-lg bg-highlight/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-highlight" />
                      </div>
                      <span className="text-main text-xs lg:text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex flex-row gap-2 sm:gap-3 justify-center lg:justify-start"
                >
                  <Link href={`/proyectos?servicio=${service.id}`}>
                    <Button
                      className="bg-highlight hover:bg-highlight/90 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      Ver Proyectos
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </Button>
                  </Link>
                  <Link href={`/contacto?servicio=${service.id}`}>
                    <Button
                      variant="outline"
                      className="border-2 border-highlight text-highlight hover:bg-highlight hover:text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105"
                    >
                      Cotizar
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Button
            asChild
            size="lg"
            className="bg-gold-gradient text-primary hover:scale-105 transition-all duration-300 px-10 py-6 text-lg font-semibold golden-glow shadow-lg hover:shadow-accent/50"
          >
            <Link href="/contacto">
              Cotiza tu Proyecto
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
