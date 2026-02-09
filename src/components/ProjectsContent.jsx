'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Hammer,
  Layers,
  Droplets,
  Home,
  Sparkles,
  FolderOpen,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

const ProjectsContent = ({ servicioInicial }) => {
  const [activeFilter, setActiveFilter] = useState(servicioInicial || 'todos');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Mínimo de distancia para considerar como swipe
  const minSwipeDistance = 50;

  useEffect(() => {
    if (servicioInicial) {
      setActiveFilter(servicioInicial);
    }
  }, [servicioInicial]);

  // Resetear imagen activa cuando se selecciona un nuevo proyecto
  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setActiveImage(0);
  };

  // Navegación de imágenes
  const nextImage = () => {
    if (selectedProject) {
      setActiveImage((prev) => (prev + 1) % selectedProject.gallery.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setActiveImage((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
    }
  };

  // Handlers para swipe táctil
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  const filters = [
    { id: 'todos', name: 'Todos', icon: FolderOpen },
    { id: 'metal', name: 'Metal & Forja', icon: Hammer },
    { id: 'tablaroca', name: 'Tablaroca', icon: Layers },
    { id: 'impermeabilizacion', name: 'Impermeabilización', icon: Droplets },
    { id: 'remodelacion', name: 'Remodelación', icon: Home },
  ];

  const projects = [
    // Metal & Forja
    {
      id: 1,
      service: 'metal',
      title: 'Pérgola Residencial',
      description: 'Estructura metálica tipo pérgola con acabado en pintura electrostática, diseño moderno para área de descanso exterior.',
      location: 'Toluca, Estado de México',
      image: '/img/metal/pergola.webp',
      gallery: ['/img/metal/pergola.webp', '/img/metal/servicio-metal.webp', '/img/servicios/muebles.webp']
    },
    {
      id: 2,
      service: 'metal',
      title: 'Portón Residencial Automatizado',
      description: 'Portón de acceso vehicular con diseño contemporáneo, estructura de acero con acabado anticorrosivo y sistema de automatización.',
      location: 'Metepec, Estado de México',
      image: '/img/metal/servicio-metal.webp',
      gallery: ['/img/metal/servicio-metal.webp', '/img/metal/pergola.webp', '/img/remodelacion-integral/remodelacion-integral.webp']
    },
    {
      id: 3,
      service: 'metal',
      title: 'Barandal de Escalera',
      description: 'Barandal de acero con diseño minimalista para escalera interior de residencia, acabados premium.',
      location: 'CDMX',
      image: '/img/metal/pergola.webp',
      gallery: ['/img/metal/pergola.webp', '/img/metal/servicio-metal.webp', '/img/carpinteria/carpinteria.webp']
    },

    // Tablaroca
    {
      id: 4,
      service: 'tablaroca',
      title: 'Plafón Decorativo con Iluminación',
      description: 'Instalación de plafón en drywall con nichos para iluminación LED indirecta, acabado nivel 5.',
      location: 'Metepec, Estado de México',
      image: '/img/tablaroca/tablaroca.webp',
      gallery: ['/img/tablaroca/tablaroca.webp', '/img/tablaroca/tablaroca-servicios.webp', '/img/servicios/remodelacion.webp']
    },
    {
      id: 5,
      service: 'tablaroca',
      title: 'División de Oficinas',
      description: 'Muros divisorios en tablaroca con aislamiento acústico para oficinas corporativas.',
      location: 'CDMX',
      image: '/img/tablaroca/tablaroca-servicios.webp',
      gallery: ['/img/tablaroca/tablaroca-servicios.webp', '/img/tablaroca/tablaroca.webp', '/img/escritorios/cafe/mueblecafe5.jpeg']
    },
    {
      id: 6,
      service: 'tablaroca',
      title: 'Muro con Nichos Decorativos',
      description: 'Muro de tablaroca con nichos iluminados para exhibición, acabado fino listo para pintura.',
      location: 'Toluca, Estado de México',
      image: '/img/tablaroca/tablaroca.webp',
      gallery: ['/img/tablaroca/tablaroca.webp', '/img/tablaroca/tablaroca-servicios.webp', '/img/servicios/muebles2.webp']
    },

    // Impermeabilización
    {
      id: 7,
      service: 'impermeabilizacion',
      title: 'Impermeabilización de Azotea 200m²',
      description: 'Sistema de impermeabilización acrílica con malla de refuerzo, garantía de 10 años.',
      location: 'Toluca, Estado de México',
      image: '/img/impermeabilizante/impermeabilizar.webp',
      gallery: ['/img/impermeabilizante/impermeabilizar.webp', '/img/impermeabilizante/impermeabilizante.webp', '/img/servicios/impermeabilizacion.webp']
    },
    {
      id: 8,
      service: 'impermeabilizacion',
      title: 'Reparación de Filtraciones',
      description: 'Ranurado de grietas y aplicación de membrana prefabricada en losa con problemas de filtración.',
      location: 'CDMX',
      image: '/img/servicios/impermeabilizacion.webp',
      gallery: ['/img/servicios/impermeabilizacion.webp', '/img/servicios/impermeabilizacion1.webp', '/img/impermeabilizante/impermeabilizar.webp']
    },
    {
      id: 9,
      service: 'impermeabilizacion',
      title: 'Impermeabilización de Terraza',
      description: 'Sistema integral con pendientes, drenes y acabado antiderrapante para terraza transitable.',
      location: 'Metepec, Estado de México',
      image: '/img/impermeabilizante/impermeabilizante.webp',
      gallery: ['/img/impermeabilizante/impermeabilizante.webp', '/img/impermeabilizante/impermeabilizar.webp', '/img/servicios/impermeabilizacion1.webp']
    },

    // Remodelación
    {
      id: 10,
      service: 'remodelacion',
      title: 'Remodelación Integral de Casa',
      description: 'Transformación completa de espacios: sala, comedor, recámaras con acabados premium.',
      location: 'Toluca, Estado de México',
      image: '/img/remodelacion-integral/remodelacion-integral.webp',
      gallery: ['/img/remodelacion-integral/remodelacion-integral.webp', '/img/servicios/remodelacion.webp', '/img/servicios/cocina.webp', '/img/servicios/muebles.webp']
    },
    {
      id: 11,
      service: 'remodelacion',
      title: 'Cocina Integral Moderna',
      description: 'Remodelación completa de cocina con gabinetes, isla central, iluminación y acabados premium.',
      location: 'CDMX',
      image: '/img/servicios/cocina.webp',
      gallery: ['/img/servicios/cocina.webp', '/img/servicios/muebles.webp', '/img/servicios/muebles2.webp', '/img/carpinteria/carpinteria.webp']
    },
    {
      id: 12,
      service: 'remodelacion',
      title: 'Mobiliario para Oficina',
      description: 'Diseño y fabricación de muebles para oficina: escritorios ejecutivos y estaciones de trabajo.',
      location: 'Metepec, Estado de México',
      image: '/img/escritorios/cafe/mueblecafe.jpeg',
      gallery: ['/img/escritorios/cafe/mueblecafe.jpeg', '/img/escritorios/cafe/mueblecafe1.jpeg', '/img/escritorios/cafe/mueblecafe2.jpeg', '/img/escritorios/cafe/mueblecafe3.jpeg']
    },
    {
      id: 13,
      service: 'remodelacion',
      title: 'Carpintería Residencial',
      description: 'Fabricación de muebles a medida para diferentes espacios del hogar con materiales de primera.',
      location: 'Toluca, Estado de México',
      image: '/img/carpinteria/carpinteria.webp',
      gallery: ['/img/carpinteria/carpinteria.webp', '/img/servicios/muebles2.webp', '/img/servicios/muebles.webp', '/img/escritorios/cafe/mueblecafe4.jpeg']
    },
    {
      id: 14,
      service: 'remodelacion',
      title: 'Escritorio Ejecutivo Premium',
      description: 'Diseño y fabricación de escritorio ejecutivo con acabados de lujo para oficina corporativa.',
      location: 'CDMX',
      image: '/img/escritorios/cafe/mueblecafe3.jpeg',
      gallery: ['/img/escritorios/cafe/mueblecafe3.jpeg', '/img/escritorios/cafe/mueblecafe4.jpeg', '/img/escritorios/cafe/mueblecafe5.jpeg', '/img/escritorios/cafe/mueblecafe6.jpeg']
    },
  ];

  const filteredProjects = activeFilter === 'todos'
    ? projects
    : projects.filter(p => p.service === activeFilter);

  const getServiceName = (serviceId) => {
    const filter = filters.find(f => f.id === serviceId);
    return filter?.name || serviceId;
  };

  const getServiceColor = (serviceId) => {
    const colors = {
      metal: 'bg-amber-500',
      tablaroca: 'bg-blue-500',
      impermeabilizacion: 'bg-cyan-500',
      remodelacion: 'bg-emerald-500',
    };
    return colors[serviceId] || 'bg-highlight';
  };

  return (
    <div className="min-h-screen pt-14 md:pt-20 bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 md:mb-12"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
            className="inline-flex items-center space-x-2 mb-2 md:mb-4"
          >
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-highlight" />
            <span className="text-highlight font-bold uppercase tracking-wider text-sm md:text-lg">
              Portafolio
            </span>
          </motion.div>
          <h1 className="text-2xl md:text-5xl font-bold text-main mb-2 md:mb-6 tracking-tight">
            Nuestros <span className="gradient-text">Proyectos</span>
          </h1>
          <p className="text-sm md:text-lg text-subtle max-w-3xl mx-auto px-2">
            Conoce algunos de los proyectos que hemos realizado. Cada trabajo refleja nuestro compromiso con la calidad.
          </p>
        </motion.div>

        {/* Filtros - Scroll horizontal en mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          {/* Mobile: Scroll horizontal */}
          <div className="md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4">
            <div className="flex gap-2 pb-2" style={{ width: 'max-content' }}>
              {filters.map((filter) => {
                const IconComponent = filter.icon;
                const isActive = activeFilter === filter.id;
                return (
                  <motion.button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300
                      ${isActive
                        ? 'bg-gold-gradient text-primary shadow-md'
                        : 'bg-card text-main border border-card'
                      }`}
                  >
                    <IconComponent className={`w-4 h-4 ${isActive ? 'text-primary' : 'text-highlight'}`} />
                    <span>{filter.name}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Desktop: Flex centrado */}
          <div className="hidden md:flex justify-center gap-3">
            {filters.map((filter) => {
              const IconComponent = filter.icon;
              const isActive = activeFilter === filter.id;
              return (
                <motion.button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300
                    ${isActive
                      ? 'bg-gold-gradient text-primary shadow-lg'
                      : 'bg-card text-main hover:bg-card/80'
                    }`}
                >
                  <IconComponent className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-highlight'}`} />
                  <span>{filter.name}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Contador de proyectos */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-subtle mb-6 text-sm"
        >
          Mostrando {filteredProjects.length} proyecto{filteredProjects.length !== 1 ? 's' : ''}
        </motion.p>

        {/* Grid de Proyectos */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                onClick={() => handleSelectProject(project)}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="h-52 md:h-56 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Badge de servicio */}
                  <div className="absolute top-4 left-4">
                    <span className={`${getServiceColor(project.service)} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                      {getServiceName(project.service)}
                    </span>
                  </div>

                  {/* Ubicación */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white/80 text-sm">{project.location}</p>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-main mb-2 group-hover:text-highlight transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-subtle text-sm leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center text-highlight font-semibold text-sm">
                    Ver detalles
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-card rounded-3xl p-8 md:p-12">
            <Sparkles className="w-12 h-12 text-highlight mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-main mb-4">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-subtle mb-8 max-w-2xl mx-auto">
              Nos encantaría escuchar tu idea y convertirla en realidad. Contáctanos para una cotización sin compromiso.
            </p>
            <Link href="/contacto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold-gradient text-primary hover:opacity-90 transition-all duration-300 px-10 py-4 rounded-xl text-lg font-bold shadow-xl"
              >
                Platícanos tu Idea
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Modal de Proyecto */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Imagen principal */}
              <div
                className="relative h-64 md:h-80"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    src={selectedProject.gallery[activeImage]}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Flechas de navegación */}
                {selectedProject.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className={`${getServiceColor(selectedProject.service)} text-white text-sm font-bold px-4 py-1.5 rounded-full`}>
                    {getServiceName(selectedProject.service)}
                  </span>
                </div>
                {/* Contador de fotos */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
                  {activeImage + 1} / {selectedProject.gallery.length}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-main mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-highlight font-medium mb-4">
                  {selectedProject.location}
                </p>
                <p className="text-subtle leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Galería de miniaturas */}
                {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-main mb-3">Fotos del proyecto</h4>
                    <div className="flex gap-3 overflow-x-auto scrollbar-hide py-2 px-1 -mx-1">
                      {selectedProject.gallery.map((img, idx) => (
                        <motion.button
                          key={idx}
                          onClick={() => setActiveImage(idx)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`relative flex-shrink-0 rounded-lg overflow-hidden transition-all duration-200 ${
                            activeImage === idx
                              ? 'ring-2 ring-highlight ring-offset-2 ring-offset-card'
                              : 'opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={img}
                            alt={`${selectedProject.title} ${idx + 1}`}
                            width={96}
                            height={96}
                            loading="lazy"
                            className="w-20 h-20 md:w-24 md:h-24 object-cover"
                          />
                          {activeImage === idx && (
                            <motion.div
                              layoutId="activeThumb"
                              className="absolute inset-0 bg-highlight/20"
                            />
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-row gap-3 justify-center">
                  <Link href={`/contacto?servicio=${selectedProject.service}`}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-highlight hover:bg-highlight/90 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all"
                    >
                      Quiero algo similar
                    </motion.button>
                  </Link>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="bg-card border border-border hover:bg-card/80 text-main px-5 py-2.5 rounded-lg text-sm font-semibold transition-all"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsContent;
