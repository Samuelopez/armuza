import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Hammer, Palette, Home, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  const videoRef = useRef(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Velocidad más rápida (0.75x)
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const iconVariants = {
    hover: { scale: 1.2, rotate: 15, color: "#854937" },
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-theme-gradient">
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/inicio.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="absolute inset-0 opacity-20 z-0">
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-accent to-transparent rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [-100, 100, -100],
            y: [-50, 50, -50],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-primary to-transparent rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [50, -50, 50],
            y: [30, -30, 30],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear', delay: 5 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="flex justify-center mb-4">
            <Zap className="w-16 h-16 gradient-text text-shadow-gold" />
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            <span className="text-white text-shadow-gold">ARMUZA</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed"
          >
            Transformamos tus espacios con <span className="text-white font-bold">diseño y maestría</span>. 
            Muebles, cocinas, remodelaciones y más.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-4 md:space-x-6 my-12"
          >
            {[
              { icon: Hammer, label: 'Calidad' },
              { icon: Palette, label: 'Diseño' },
              { icon: Home, label: 'Innovación' },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover="hover"
                className="flex flex-col items-center space-y-2 p-4 glass-effect rounded-xl metallic-border subtle-shine"
              >
                <motion.div variants={iconVariants}>
                  <item.icon className="w-8 h-8 text-subtle" />
                </motion.div>
                <span className="text-main text-sm font-medium">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              asChild
              size="lg"
              className="bg-gold-gradient text-primary hover:scale-105 transition-all duration-300 px-10 py-6 text-lg font-semibold golden-glow shadow-lg hover:shadow-accent/50"
            >
              <Link to="/servicios">
                Explora Servicios
                <ArrowDown className="w-5 h-5 ml-2 transform -rotate-90 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-6 h-6 text-highlight/70" />
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-48">
        <img 
          alt="Silueta de herramientas de carpintería sobre un fondo oscuro"
          className="w-full h-full object-cover opacity-5 dark:opacity-10"
          src="https://images.unsplash.com/photo-1609081219090-a6d81d3085bf"
        />
      </div>
    </section>
  );
};

export default Hero;