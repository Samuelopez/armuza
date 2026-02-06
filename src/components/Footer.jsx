'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Heart,
  ChevronRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { label: 'Inicio', path: '/' },
    { label: 'Servicios', path: '/servicios' },
    { label: 'Nosotros', path: '/nosotros' },
    { label: 'Contacto', path: '/contacto' },
  ];

  const services = [
    { id: 'metal', label: 'Metal & Forja Arquitectónica' },
    { id: 'carpinteria', label: 'Carpintería de Diseño' },
    { id: 'tablaroca', label: 'Tablaroca & Acabados' },
    { id: 'impermeabilizacion', label: 'Impermeabilización' },
    { id: 'remodelacion', label: 'Remodelación Integral' },
  ];

  return (
    <footer className="relative overflow-hidden bg-card border-t-2 border-accent/30">
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-accent/20 rounded-full"
        />
        <motion.div
          animate={{
            y: [-20, 20, -20],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-accent/10 rounded-lg transform rotate-45"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <Link href="/" className="inline-block">
                <motion.span
                  whileHover={{ scale: 1.05, textShadow: "0 0 15px hsl(var(--accent))" }}
                  className="text-4xl font-bold gradient-text metallic-sheen cursor-pointer"
                >
                  ARMUZA
                </motion.span>
              </Link>
              <p className="text-subtle mt-4 leading-relaxed text-sm">
                Transformando espacios con diseño, calidad y pasión. Soluciones integrales de clase mundial.
              </p>
            </div>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3, color: "hsl(var(--accent))" }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-secondary/50 border border-border rounded-full flex items-center justify-center text-subtle hover:border-accent/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-bold text-highlight mb-6 block metallic-sheen-light">Navegación</span>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.path}
                    className="text-subtle hover:text-accent transition-colors duration-300 hover:translate-x-1 transform flex items-center group text-sm"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-highlight" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-bold text-highlight mb-6 block metallic-sheen-light">Nuestros Servicios</span>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`/catalogo?servicio=${service.id}`}
                    className="text-subtle hover:text-highlight transition-colors duration-300 cursor-pointer hover:translate-x-1 transform flex items-center group text-sm"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-highlight" />
                    {service.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Link href="/catalogo" className="text-highlight hover:text-highlight/80 font-bold transition-colors duration-300 flex items-center group text-sm">
                  Ver catálogo <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-bold text-highlight mb-6 block metallic-sheen-light">Contáctanos</span>
            <div className="space-y-4">
              {[
                { icon: Phone, text: '+52 1 722 536 5692', href: 'tel:+5217225365692' },
                { icon: Mail, text: 'contacto@armuza.com', href: 'mailto:contacto@armuza.com' },
                { icon: MapPin, text: 'Ciudad de México, CDMX', href: '#' }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ x: 5, color: "hsl(var(--accent))" }}
                  className="flex items-center space-x-3 text-subtle transition-all duration-300 text-sm"
                >
                  <item.icon className="w-5 h-5 flex-shrink-0 text-highlight/70" />
                  <span>{item.text}</span>
                </motion.a>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mt-6"
            >
              <Link href="/contacto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full bg-transparent border-accent/50 text-highlight font-bold hover:bg-accent/10 hover:text-highlight/80 hover:border-accent transition-all duration-300 group metallic-sheen-button"
                >
                  Solicitar Cotización
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="border-t border-border/50 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              &copy; {currentYear} ARMUZA. Todos los derechos reservados.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-1.5 text-muted-foreground text-sm"
            >
              <span>Diseñado con</span>
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="w-4 h-4 text-highlight/80 fill-current" />
              </motion.div>
              <span>por ARMUZA</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
