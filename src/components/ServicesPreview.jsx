import React from 'react';
import { motion } from 'framer-motion';
import { Sofa, ChefHat, Home, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesPreview = () => {
  const previewServices = [
    { 
      icon: Sofa, 
      title: 'Muebles de Diseño', 
      description: 'Creaciones únicas que definen tu estilo.',
      imgUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7'
    },
    { 
      icon: ChefHat, 
      title: 'Cocinas Vanguardistas', 
      description: 'Funcionalidad y estética en perfecta armonía.',
      imgUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136'
    },
    { 
      icon: Home, 
      title: 'Remodelaciones Integrales', 
      description: 'Transformamos espacios, mejoramos vidas.',
      imgUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2'
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
            Un Vistazo a Nuestros <span className="gradient-text">Servicios Estrella</span>
          </h2>
          <p className="text-lg text-subtle max-w-2xl mx-auto">
            Calidad, innovación y diseño se fusionan para crear espacios extraordinarios.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {previewServices.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="glass-effect rounded-2xl p-0 text-center metallic-border subtle-shine group h-full flex flex-col overflow-hidden"
            >
              <div className="relative h-56 w-full">
                 <img 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  src={service.imgUrl}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <motion.div
                  variants={iconContainerVariants}
                  className="absolute top-4 right-4 w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center shadow-lg group-hover:pulse-glow"
                >
                  <service.icon className="w-6 h-6 text-primary" />
                </motion.div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-main mb-3 group-hover:text-highlight transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-subtle text-sm flex-grow">{service.description}</p>
              </div>
            </motion.div>
          ))}
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