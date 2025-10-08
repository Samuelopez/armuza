import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sofa, ChefHat, Home, Sparkles, Droplets, PaintBucket, Wrench, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesPreview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    { 
      icon: Home, 
      title: 'Remodelaciones Completas', 
      description: 'Transformamos espacios completos con materiales de calidad y diseño personalizado.',
      imgUrl: "/img/servicios/remodelacion.png"
    },
    { 
      icon: ChefHat, 
      title: 'Cocinas Integrales', 
      description: 'Diseñamos cocinas funcionales que combinan estética moderna con máxima eficiencia.',
      imgUrl: "/img/servicios/cocina.png"
    },
    { 
      icon: Sofa, 
      title: 'Muebles Personalizados', 
      description: 'Creaciones únicas diseñadas a medida que definen tu estilo personal.',
      imgUrl: "/img/servicios/muebles.png"
    },
    {
      icon: Droplets,
      title: 'Impermeabilización Avanzada',
      description: 'Protección duradera para tu inversión con tecnología de punta.',
      imgUrl: "/img/servicios/impermeabilizacion.png"
    },
    {
      icon: PaintBucket,
      title: 'Acabados Premium',
      description: 'Detalles que marcan la diferencia, con acabados de lujo y precisión.',
      imgUrl: "/img/servicios/muebles2.png"
    },
    {
      icon: Wrench,
      title: 'Mantenimiento Integral',
      description: 'Cuidamos tus muebles y espacios para que luzcan siempre impecables.',
      imgUrl: "/img/servicios/impermeabilizacion1.png"
    }
  ];

  const servicesPerSlide = 3;
  const totalSlides = Math.ceil(services.length / servicesPerSlide);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = (prev + 1) % totalSlides;
        console.log(`Auto-advancing from slide ${prev} to slide ${nextSlide}`);
        return nextSlide;
      });
    }, 7000); // Aumenté a 7 segundos para que sea más lento

    return () => clearInterval(interval);
  }, [totalSlides]);

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
    const startIndex = currentSlide * servicesPerSlide;
    const endIndex = startIndex + servicesPerSlide;
    const currentServices = services.slice(startIndex, endIndex);
    console.log(`Slide ${currentSlide}: showing services ${startIndex} to ${endIndex-1}`, currentServices);
    console.log('Total services:', services.length, 'Services per slide:', servicesPerSlide, 'Total slides:', totalSlides);
    return currentServices;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
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
              Excelencia en Cada Detalle
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-main mb-6 tracking-tight">
            Nuestros <span className="gradient-text">Servicios Especializados</span>
          </h2>
          <p className="text-lg text-subtle max-w-2xl mx-auto">
            Calidad, innovación y diseño se fusionan para crear espacios extraordinarios.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={currentSlide}
          className="relative mb-16"
        >
          {/* Navigation Arrows - Desktop */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gold-gradient text-primary p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 hidden md:flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gold-gradient text-primary p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 hidden md:flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12 md:px-16">
            {getCurrentServices().map((service, index) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-effect rounded-2xl p-0 metallic-border subtle-shine group overflow-hidden flex flex-col"
              >
                <div className="relative h-48 w-full">
                  <img 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    src={service.imgUrl}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10"></div>
                  <motion.div
                    variants={iconContainerVariants}
                    initial="rest"
                    whileHover="hover"
                    className="absolute top-4 right-4 w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center shadow-lg group-hover:pulse-glow"
                  >
                    <service.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-main mb-4 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-subtle leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Dots */}
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

          {/* Mobile Navigation */}
           <div className="flex justify-center space-x-4 mt-6 md:hidden">
             <button
               onClick={prevSlide}
               className="bg-gold-gradient text-primary p-2 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
             >
               <ChevronLeft className="w-5 h-5" />
             </button>
             <button
               onClick={nextSlide}
               className="bg-gold-gradient text-primary p-2 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
             >
               <ChevronRight className="w-5 h-5" />
             </button>
           </div>
         </motion.div>

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
            className="bg-transparent border-2 border-gold-gradient text-accent hover:bg-gold-gradient hover:text-primary hover:scale-105 transition-all duration-300 px-10 py-6 text-lg font-semibold golden-glow shadow-lg hover:shadow-accent/50"
          >
            <Link to="/servicios">Ver Todos los Servicios</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;