import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sofa, 
  ChefHat,
  Home, 
  Droplets, 
  PaintBucket, 
  Wrench,
  Sparkles,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Sofa,
      title: 'Muebles Personalizados',
      description: 'Diseños exclusivos y fabricación artesanal para espacios únicos.',
      features: ['Escritorios ergonómicos', 'Buros funcionales', 'Estanterías modulares', 'Salas de estar de lujo'],
      imgUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
    },
    {
      icon: ChefHat,
      title: 'Cocinas Integrales',
      description: 'Transforma tu cocina en el corazón de tu hogar con diseños modernos y funcionales.',
      features: ['Diseño 3D interactivo', 'Instalación profesional', 'Materiales de alta gama', 'Garantía extendida'],
      imgUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136"
    },
    {
      icon: Home,
      title: 'Remodelaciones Completas',
      description: 'Renovamos y revitalizamos tus espacios con creatividad y atención al detalle.',
      features: ['Baños tipo spa', 'Recámaras de ensueño', 'Salas multifuncionales', 'Proyectos comerciales'],
      imgUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    },
    {
      icon: Droplets,
      title: 'Impermeabilización Avanzada',
      description: 'Protección duradera para tu inversión con tecnología de punta.',
      features: ['Sistemas para azoteas', 'Terrazas y balcones', 'Muros y sótanos', 'Garantía certificada'],
      imgUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd"
    },
    {
      icon: PaintBucket,
      title: 'Acabados Premium',
      description: 'Detalles que marcan la diferencia, con acabados de lujo y precisión.',
      features: ['Pintura arquitectónica', 'Texturas innovadoras', 'Barnices ecológicos', 'Lacados de alta resistencia'],
      imgUrl: "https://images.unsplash.com/photo-1562259949-e8e7689d7828"
    },
    {
      icon: Wrench,
      title: 'Mantenimiento Integral',
      description: 'Cuidamos tus muebles y espacios para que luzcan siempre impecables.',
      features: ['Reparaciones especializadas', 'Restauración de piezas', 'Pulido y encerado', 'Ajustes y optimización'],
      imgUrl: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf"
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
            Soluciones <span className="gradient-text">Integrales y Sofisticadas</span>
          </h1>
          
          <p className="text-xl text-subtle max-w-3xl mx-auto leading-relaxed">
            Descubre cómo podemos transformar tus ideas en realidad con nuestra gama de servicios 
            especializados, diseñados para superar tus expectativas.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
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
                    className="absolute top-4 right-4 w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center group-hover:pulse-glow shadow-lg"
                  >
                    <motion.div variants={iconVariants}>
                      <service.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                  </motion.div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-main mb-4 group-hover:text-highlight transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-subtle mb-6 leading-relaxed text-sm flex-grow">
                  {service.description}
                </p>

                <ul className="space-y-2 mt-auto">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.05 + 0.3, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2 text-subtle text-xs"
                    >
                      <CheckCircle className="w-4 h-4 text-highlight/70 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
            <Link to="/contacto">
              Cotiza tu Proyecto
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;