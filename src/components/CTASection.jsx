
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall } from 'lucide-react';

const CTASection = ({
  title = "¿Listo para transformar tu espacio?",
  subtitle = "Contáctanos hoy mismo y déjanos convertir tus ideas en realidad.",
  buttonText = "Solicita tu Cotización",
  buttonLink = "/contacto"
}) => {
  return (
    <section className="py-20 bg-main relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <motion.div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/40 via-transparent to-primary/40 filter blur-3xl"
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "400% 400%" }}
        />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 150, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-block p-3 bg-gold-gradient rounded-full mb-6 shadow-lg"
          >
            <PhoneCall className="w-8 h-8 text-primary" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-main mb-5 tracking-tight">
            {title}
          </h2>
          <p className="text-lg text-subtle max-w-xl mx-auto mb-10 leading-relaxed">
            {subtitle}
          </p>
          <Button
            asChild
            size="lg"
            variant="highlight"
            className="font-medium shadow-xl hover:scale-105 transition-all duration-300 px-10 py-6 text-lg golden-glow hover:shadow-accent/60 group"
          >
            <Link to={buttonLink}>
              {buttonText}
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
