'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Wrench, Users, Phone, Briefcase, FolderOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Inicio', icon: Home },
    { path: '/productos', label: 'Productos', icon: Briefcase },
    { path: '/servicios', label: 'Servicios', icon: Wrench },
    { path: '/proyectos', label: 'Proyectos', icon: FolderOpen },
    { path: '/nosotros', label: 'Nosotros', icon: Users },
  ];

  const navLinkVariants = {
    initial: { y: -10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    hover: { scale: 1.1, color: "hsl(var(--accent))" },
    tap: { scale: 0.95 }
  };

  const mobileLinkVariants = {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 20, opacity: 0 }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'shadow-xl border-b border-gold-gradient/30 backdrop-blur-md' : ''
      }`}
      style={{
        background: scrolled
          ? 'linear-gradient(to right, rgba(133, 73, 55, 0.8), rgba(133, 73, 55, 0.7), rgba(133, 73, 55, 0.8))'
          : 'linear-gradient(to right, #854937, #9a5a45, #854937)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="flex items-center space-x-2"
          >
            <Link href="/" className="flex items-center space-x-2 group">
              <Image
                src="/img/logo.webp"
                alt="ARMUZA Logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-2xl font-bold text-white tracking-wider group-hover:brightness-125 transition-all">
                ARMUZA
              </span>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                variants={navLinkVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                whileTap="tap"
                transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
              >
                <Link
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center space-x-2 text-white hover:bg-white/10 relative"
                >
                  <item.icon className="w-4 h-4 text-white" />
                  <span>{item.label}</span>
                  {pathname === item.path && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                      layoutId="underline"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}

            <motion.div
              variants={navLinkVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
              transition={{ delay: navItems.length * 0.1 + 0.3, duration: 0.3 }}
              className="ml-4"
            >
              <Link
                href="/contacto"
                className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center space-x-2 border border-white/70 bg-white/10 hover:bg-white/20"
              >
                <Phone className="w-4 h-4 text-white" />
                <span className="text-white">Contacto</span>
              </Link>
            </motion.div>
          </div>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-main hover:text-accent focus:ring-2 focus:ring-accent"
              aria-label="Abrir menú"
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={isOpen ? "x" : "menu"}
                  initial={{ rotate: isOpen ? -90 : 0, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: isOpen ? 0 : 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden glass-effect border-t border-gold-gradient/30"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  variants={mobileLinkVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                >
                  <Link
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-3 rounded-md text-base font-medium transition-all duration-300 flex items-center space-x-3
                      ${pathname === item.path
                        ? 'text-accent bg-card/90'
                        : 'text-main hover:text-accent hover:bg-card/80'
                      }`}
                  >
                    <item.icon className={`w-5 h-5 ${pathname === item.path ? 'text-accent' : 'text-main'}`} />
                    <span className="text-main">{item.label}</span>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={mobileLinkVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: navItems.length * 0.05 + 0.05, duration: 0.2 }}
              >
                <Link
                  href="/contacto"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium transition-all duration-300 flex items-center space-x-3 text-main hover:text-accent hover:bg-card/80"
                >
                  <Phone className="w-5 h-5 text-main" />
                  <span className="text-main">Contacto</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
