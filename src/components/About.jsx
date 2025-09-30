import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Clock, 
  Star,
  Target,
  Heart,
  Shield,
  Lightbulb,
  Building
} from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Clientes Satisfechos' },
    { icon: Award, number: '15+', label: 'Años de Experiencia' },
    { icon: Clock, number: '1000+', label: 'Proyectos Exitosos' },
    { icon: Star, number: '4.9', label: 'Calificación Estelar' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Precisión Absoluta',
      description: 'Cada detalle es crucial. Garantizamos acabados impecables y resultados extraordinarios.'
    },
    {
      icon: Heart,
      title: 'Pasión por el Diseño',
      description: 'Nuestra dedicación se refleja en cada pieza única que creamos para ti.'
    },
    {
      icon: Shield,
      title: 'Confianza y Transparencia',
      description: 'Construimos relaciones sólidas basadas en la honestidad y la calidad superior.'
    },
    {
      icon: Lightbulb,
      title: 'Innovación Constante',
      description: 'Fusionamos tendencias actuales y tecnología de vanguardia en cada proyecto.'
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8, type: "spring", stiffness: 100 } }
  };

  return (
    <motion.section 
      id="nosotros" 
      className="py-20 relative overflow-hidden bg-theme-gradient"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="absolute inset-0 opacity-15">
        <motion.div 
          className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4 bg-gradient-to-br from-accent to-transparent rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
         <motion.div 
          className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4 bg-gradient-to-tl from-primary to-transparent rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 mb-4"
          >
            <Building className="w-8 h-8 text-highlight" />
            <span className="text-highlight font-bold uppercase tracking-wider text-lg">
              Conócenos
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-main mb-6 tracking-tight">
            Forjando <span className="gradient-text">Espacios</span> con Identidad
          </h1>
          
          <p className="text-xl text-subtle max-w-3xl mx-auto leading-relaxed">
            En ARMUZA, somos más que una consultoría; somos artesanos de sueños, 
            transformando tus ideas en realidades tangibles con pasión y precisión.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-20 items-center">
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="glass-effect rounded-2xl p-8 metallic-border subtle-shine">
              <h3 className="text-2xl font-bold text-highlight mb-4">Nuestra Esencia</h3>
              <p className="text-subtle leading-relaxed mb-4">
                Nacimos con la visión de redefinir el interiorismo y la ebanistería. 
                ARMUZA es hoy sinónimo de calidad, innovación y un compromiso inquebrantable 
                con la excelencia.
              </p>
              <p className="text-subtle leading-relaxed">
                Nuestro equipo, una fusión de artesanos expertos y diseñadores visionarios, 
                colabora para materializar tus aspiraciones, creando piezas atemporales 
                que narran tu historia.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 metallic-border subtle-shine">
              <h3 className="text-2xl font-bold text-main mb-4">Nuestra Misión</h3>
              <p className="text-subtle leading-relaxed">
                Elevar cada espacio a su máximo potencial a través de soluciones de diseño 
                vanguardistas, mobiliario de manufactura impecable y un servicio al cliente 
                que redefine los estándares.
              </p>
            </div>
          </motion.div>

          <motion.div variants={imageVariants} className="relative group">
            <div className="floating-animation">
               <img 
                className="w-full h-auto max-h-[500px] object-cover rounded-2xl glass-effect golden-glow shadow-2xl metallic-border" 
                alt="Taller de diseño ARMUZA con planos y muestras de materiales de alta calidad y herramientas de precisión"
                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 glass-effect rounded-xl p-4 md:p-6 metallic-border shadow-lg"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">15+</div>
                <div className="text-main text-xs md:text-sm">Años de Maestría</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5, boxShadow: "0 10px 20px rgba(212, 175, 55, 0.2)" }}
              className="text-center glass-effect rounded-xl p-6 metallic-border subtle-shine"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-md"
              >
                <stat.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-subtle text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-main mb-4 tracking-tight">
            Nuestros <span className="gradient-text">Pilares Fundamentales</span>
          </h2>
          <p className="text-subtle max-w-2xl mx-auto leading-relaxed">
            Los principios que nos definen y guían cada trazo, cada corte, cada creación.
          </p>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -8, boxShadow: "0 15px 30px rgba(212, 175, 55, 0.25)" }}
              className="text-center glass-effect rounded-xl p-6 metallic-border subtle-shine h-full flex flex-col"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: -5 }}
                className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg"
              >
                <value.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="text-xl font-bold text-main mb-3">{value.title}</h3>
              <p className="text-subtle text-sm leading-relaxed flex-grow">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;