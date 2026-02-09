'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Check,
  Truck,
  Shield,
  MessageCircle,
  X,
  MapPin,
  Loader2,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Base de datos de productos (esto se puede mover a un archivo separado)
const allProducts = {
  // SALA
  'sofa-moderno-3-plazas': {
    id: 'sofa-moderno-3-plazas',
    name: 'Sofá Moderno 3 Plazas',
    category: 'sala',
    subcategory: 'sofas',
    price: 'Desde $18,500',
    description: 'Sofá contemporáneo con estructura de madera sólida y tapizado premium.',
    longDescription: 'Este sofá de 3 plazas combina diseño contemporáneo con máxima comodidad. Su estructura está fabricada con madera de pino sólida tratada, garantizando durabilidad y resistencia. El tapizado está disponible en diferentes telas de alta calidad, todas resistentes al desgaste y fáciles de limpiar. Los cojines de asiento tienen espuma de alta densidad que mantiene su forma con el uso.',
    features: [
      'Estructura de madera de pino sólida',
      'Tapizado en tela premium antimancha',
      'Cojines de espuma de alta densidad',
      'Patas de madera con acabado nogal',
      'Fácil de limpiar'
    ],
    dimensions: {
      width: '200 cm',
      depth: '90 cm',
      height: '85 cm',
      seatHeight: '45 cm'
    },
    colors: [
      { name: 'Gris Oxford', hex: '#4a4a4a' },
      { name: 'Beige Arena', hex: '#d4c4a8' },
      { name: 'Azul Marino', hex: '#1e3a5f' },
      { name: 'Verde Olivo', hex: '#556b2f' }
    ],
    gallery: [
      '/img/servicios/muebles.png',
      '/img/servicios/muebles2.png',
      '/img/carpinteria/carpinteria.png',
      '/img/servicios/cocina.png'
    ],
    deliveryTime: '3-4 semanas'
  },
  'sofa-esquinero': {
    id: 'sofa-esquinero',
    name: 'Sofá Esquinero',
    category: 'sala',
    subcategory: 'sofas',
    price: 'Desde $28,000',
    description: 'Sofá en L ideal para espacios amplios, máximo confort.',
    longDescription: 'Sofá esquinero diseñado para maximizar el espacio y el confort en tu sala. Su configuración en L permite aprovechar las esquinas de manera inteligente. Cuenta con chaise longue integrado para mayor comodidad y relajación. Ideal para familias o para quienes disfrutan de recibir visitas.',
    features: [
      'Configuración en L reversible',
      'Chaise longue integrado',
      'Cojines modulares extraíbles',
      'Base reforzada con cinchas',
      'Tapizado antimanchas'
    ],
    dimensions: {
      width: '280 cm',
      depth: '180 cm',
      height: '85 cm',
      seatHeight: '45 cm'
    },
    colors: [
      { name: 'Gris Claro', hex: '#a8a8a8' },
      { name: 'Chocolate', hex: '#5c4033' },
      { name: 'Crema', hex: '#f5f5dc' }
    ],
    gallery: [
      '/img/servicios/muebles2.png',
      '/img/servicios/muebles.png',
      '/img/carpinteria/carpinteria.png'
    ],
    deliveryTime: '4-5 semanas'
  },
  'sofa-industrial': {
    id: 'sofa-industrial',
    name: 'Sofá Industrial',
    category: 'sala',
    subcategory: 'sofas',
    price: 'Desde $22,000',
    description: 'Diseño industrial con estructura de metal y madera, tapizado en piel sintética.',
    longDescription: 'Sofá con estética industrial perfecta para lofts y espacios modernos. La estructura combina metal negro mate con detalles en madera de roble. El tapizado en piel sintética de alta calidad ofrece el look del cuero genuino con mayor facilidad de mantenimiento.',
    features: [
      'Estructura de metal y madera',
      'Tapizado en piel sintética premium',
      'Estilo loft industrial',
      'Fácil limpieza',
      'Alta resistencia'
    ],
    dimensions: {
      width: '210 cm',
      depth: '95 cm',
      height: '80 cm',
      seatHeight: '43 cm'
    },
    colors: [
      { name: 'Negro', hex: '#1a1a1a' },
      { name: 'Café Cognac', hex: '#834333' },
      { name: 'Gris Oscuro', hex: '#363636' }
    ],
    gallery: [
      '/img/carpinteria/carpinteria.png',
      '/img/servicios/muebles.png',
      '/img/metal/servicio-metal.png'
    ],
    deliveryTime: '3-4 semanas'
  },
  'mesa-centro-madera': {
    id: 'mesa-centro-madera',
    name: 'Mesa Centro Madera',
    category: 'sala',
    subcategory: 'mesas-centro',
    price: 'Desde $7,800',
    description: 'Mesa de centro en madera de pino con acabado natural.',
    longDescription: 'Mesa de centro fabricada artesanalmente en madera de pino macizo. Su diseño atemporal combina con cualquier estilo de decoración. El acabado natural resalta las vetas naturales de la madera, creando una pieza única para tu sala.',
    features: [
      'Madera de pino macizo',
      'Acabado natural mate',
      'Bordes redondeados',
      'Fácil montaje',
      'Tratamiento anti-humedad'
    ],
    dimensions: {
      width: '120 cm',
      depth: '60 cm',
      height: '45 cm'
    },
    colors: [
      { name: 'Natural', hex: '#deb887' },
      { name: 'Nogal', hex: '#5c4033' },
      { name: 'Blanco Vintage', hex: '#f5f5f0' }
    ],
    gallery: [
      '/img/servicios/muebles.png',
      '/img/carpinteria/carpinteria.png',
      '/img/servicios/muebles2.png'
    ],
    deliveryTime: '2-3 semanas'
  },
  'mueble-tv-flotante': {
    id: 'mueble-tv-flotante',
    name: 'Mueble TV Flotante',
    category: 'sala',
    subcategory: 'muebles-tv',
    price: 'Desde $12,500',
    description: 'Mueble flotante minimalista con sistema de cable oculto.',
    longDescription: 'Mueble para TV con diseño flotante que crea una sensación de amplitud en tu sala. Incluye sistema de gestión de cables oculto para mantener un aspecto limpio y ordenado. Sus compartimentos permiten almacenar equipos de audio y video de manera organizada.',
    features: [
      'Montaje flotante en pared',
      'Sistema de cables oculto',
      'Compartimentos con puerta push',
      'Capacidad hasta 65 pulgadas',
      'Incluye herrajes de instalación'
    ],
    dimensions: {
      width: '180 cm',
      depth: '40 cm',
      height: '35 cm'
    },
    colors: [
      { name: 'Blanco Mate', hex: '#ffffff' },
      { name: 'Negro Mate', hex: '#1a1a1a' },
      { name: 'Nogal', hex: '#5c4033' },
      { name: 'Roble Claro', hex: '#c4a35a' }
    ],
    gallery: [
      '/img/servicios/muebles2.png',
      '/img/servicios/muebles.png',
      '/img/carpinteria/carpinteria.png',
      '/img/servicios/cocina.png'
    ],
    deliveryTime: '2-3 semanas'
  },
  // COMEDOR
  'mesa-comedor-6-personas': {
    id: 'mesa-comedor-6-personas',
    name: 'Mesa Rectangular 6 Personas',
    category: 'comedor',
    subcategory: 'mesas-6',
    price: 'Desde $16,500',
    description: 'Mesa rectangular clásica para familia.',
    longDescription: 'Mesa de comedor diseñada para reunir a la familia. Su tamaño es ideal para 6 personas cómodamente sentadas. Fabricada en madera sólida con acabados de alta calidad que resisten el uso diario. El diseño clásico pero contemporáneo se adapta a diferentes estilos de decoración.',
    features: [
      'Madera sólida de alta calidad',
      'Capacidad para 6 personas',
      'Acabado resistente a manchas',
      'Patas estables y reforzadas',
      'Fácil de limpiar'
    ],
    dimensions: {
      width: '180 cm',
      depth: '90 cm',
      height: '76 cm'
    },
    colors: [
      { name: 'Nogal', hex: '#5c4033' },
      { name: 'Natural', hex: '#deb887' },
      { name: 'Wengue', hex: '#3d2b1f' }
    ],
    gallery: [
      '/img/servicios/cocina.png',
      '/img/carpinteria/carpinteria.png',
      '/img/servicios/muebles.png'
    ],
    deliveryTime: '3-4 semanas'
  },
  // RECÁMARA
  'cama-king-size': {
    id: 'cama-king-size',
    name: 'Cama King Size',
    category: 'recamara',
    subcategory: 'camas',
    price: 'Desde $22,000',
    description: 'Base de cama king con diseño contemporáneo.',
    longDescription: 'Cama king size con diseño moderno y elegante. La base está fabricada con estructura de madera reforzada para máxima estabilidad. Compatible con colchones estándar king size. Su diseño bajo y líneas limpias aportan un toque contemporáneo a tu recámara.',
    features: [
      'Estructura de madera reforzada',
      'Diseño contemporáneo',
      'Cabecera tapizada opcional',
      'Sistema de soporte de lamillas',
      'Fácil montaje'
    ],
    dimensions: {
      width: '200 cm',
      depth: '210 cm',
      height: '35 cm',
      headboardHeight: '120 cm'
    },
    colors: [
      { name: 'Gris', hex: '#808080' },
      { name: 'Beige', hex: '#d4c4a8' },
      { name: 'Blanco', hex: '#ffffff' }
    ],
    gallery: [
      '/img/servicios/muebles.png',
      '/img/servicios/muebles2.png',
      '/img/remodelacion-integral/remodelacion-integral.png'
    ],
    deliveryTime: '3-4 semanas'
  },
  'cabecera-tapizada': {
    id: 'cabecera-tapizada',
    name: 'Cabecera Tapizada',
    category: 'recamara',
    subcategory: 'cabeceras',
    price: 'Desde $8,500',
    description: 'Cabecera tapizada en tela premium.',
    longDescription: 'Cabecera tapizada que añade elegancia y confort a tu recámara. El tapizado está disponible en diversas telas de alta calidad. Su diseño con capitonado opcional ofrece un look sofisticado. Se monta directamente en la pared o en la base de la cama.',
    features: [
      'Tapizado en tela premium',
      'Relleno de espuma suave',
      'Montaje en pared o base',
      'Diseño capitonado opcional',
      'Fácil limpieza'
    ],
    dimensions: {
      width: '160 cm / 180 cm / 200 cm',
      height: '120 cm',
      depth: '8 cm'
    },
    colors: [
      { name: 'Gris Oxford', hex: '#4a4a4a' },
      { name: 'Beige', hex: '#d4c4a8' },
      { name: 'Rosa Palo', hex: '#d4a5a5' },
      { name: 'Azul Petróleo', hex: '#1e5f74' }
    ],
    gallery: [
      '/img/servicios/muebles2.png',
      '/img/servicios/muebles.png',
      '/img/carpinteria/carpinteria.png'
    ],
    deliveryTime: '2-3 semanas'
  },
  // COCINA
  'cocina-integral-3m': {
    id: 'cocina-integral-3m',
    name: 'Cocina Integral 3m Lineal',
    category: 'cocina',
    subcategory: 'paquetes-cocina',
    price: 'Desde $85,000',
    description: 'Cocina lineal completa con amplio espacio de trabajo.',
    longDescription: 'Paquete de cocina integral de 3 metros lineales que incluye todo lo necesario para una cocina funcional y moderna. Gabinetes superiores e inferiores con sistema de cierre suave, cubierta de granito o cuarzo, y tarja de acero inoxidable. Diseño optimizado para aprovechar cada centímetro.',
    features: [
      'Gabinetes con cierre suave',
      'Cubierta de granito o cuarzo',
      'Tarja de acero inoxidable',
      'Herrajes de alta calidad',
      'Instalación incluida'
    ],
    dimensions: {
      width: '300 cm',
      depth: '60 cm',
      upperHeight: '70 cm',
      lowerHeight: '85 cm'
    },
    colors: [
      { name: 'Blanco Brillante', hex: '#ffffff' },
      { name: 'Gris Grafito', hex: '#4a4a4a' },
      { name: 'Madera Natural', hex: '#deb887' }
    ],
    gallery: [
      '/img/servicios/cocina.png',
      '/img/carpinteria/carpinteria.png',
      '/img/servicios/muebles.png',
      '/img/servicios/muebles2.png'
    ],
    deliveryTime: '6-8 semanas',
    isPaquete: true
  },
  // OFICINA
  'escritorio-home-office': {
    id: 'escritorio-home-office',
    name: 'Escritorio Home Office',
    category: 'oficina',
    subcategory: 'escritorios',
    price: 'Desde $8,500',
    description: 'Escritorio compacto ideal para casa.',
    longDescription: 'Escritorio diseñado especialmente para el trabajo desde casa. Su tamaño compacto lo hace ideal para espacios reducidos sin sacrificar funcionalidad. Incluye espacio para organizar cables y cajón lateral para almacenamiento.',
    features: [
      'Diseño compacto',
      'Gestión de cables integrada',
      'Cajón lateral',
      'Superficie amplia de trabajo',
      'Fácil montaje'
    ],
    dimensions: {
      width: '120 cm',
      depth: '60 cm',
      height: '75 cm'
    },
    colors: [
      { name: 'Blanco', hex: '#ffffff' },
      { name: 'Nogal', hex: '#5c4033' },
      { name: 'Negro', hex: '#1a1a1a' }
    ],
    gallery: [
      '/img/escritorios/cafe/mueblecafe.jpeg',
      '/img/escritorios/cafe/mueblecafe1.jpeg',
      '/img/escritorios/cafe/mueblecafe2.jpeg',
      '/img/escritorios/cafe/mueblecafe3.jpeg'
    ],
    deliveryTime: '2-3 semanas'
  },
  'escritorio-ejecutivo': {
    id: 'escritorio-ejecutivo',
    name: 'Escritorio Ejecutivo',
    category: 'oficina',
    subcategory: 'escritorios',
    price: 'Desde $18,500',
    description: 'Escritorio amplio con presencia ejecutiva.',
    longDescription: 'Escritorio ejecutivo de gran presencia, ideal para oficinas corporativas o despachos. Fabricado con materiales de primera calidad y acabados premium. Cuenta con amplio espacio de trabajo, cajones con cerradura y sistema de gestión de cables.',
    features: [
      'Acabados premium',
      'Cajones con cerradura',
      'Gestión de cables oculta',
      'Amplia superficie de trabajo',
      'Detalles en metal'
    ],
    dimensions: {
      width: '180 cm',
      depth: '80 cm',
      height: '76 cm'
    },
    colors: [
      { name: 'Café Chocolate', hex: '#5c4033' },
      { name: 'Negro Executive', hex: '#1a1a1a' },
      { name: 'Nogal Clásico', hex: '#8b7355' }
    ],
    gallery: [
      '/img/escritorios/cafe/mueblecafe4.jpeg',
      '/img/escritorios/cafe/mueblecafe5.jpeg',
      '/img/escritorios/cafe/mueblecafe6.jpeg',
      '/img/escritorios/cafe/mueblecafe7.jpeg'
    ],
    deliveryTime: '3-4 semanas'
  },
  // BAÑO - Paquetes
  'paquete-bano-moderno': {
    id: 'paquete-bano-moderno',
    name: 'Paquete Baño Moderno',
    category: 'bano',
    subcategory: 'paquetes',
    price: 'Desde $18,500',
    description: 'Mueble flotante 80cm + Espejo LED + Gabinete auxiliar + Porta toallas.',
    longDescription: 'Paquete completo para renovar tu baño con estilo moderno. Incluye mueble bajo lavabo flotante de 80cm con cajones de cierre suave, espejo con iluminación LED integrada, gabinete auxiliar para almacenamiento adicional y porta toallas de diseño. Todos los elementos en acabado coordinado.',
    features: [
      'Mueble flotante 80cm',
      'Espejo con luz LED',
      'Gabinete auxiliar',
      'Porta toallas incluido',
      'Instalación incluida'
    ],
    dimensions: {
      vanityWidth: '80 cm',
      vanityHeight: '50 cm',
      mirrorWidth: '70 cm',
      mirrorHeight: '90 cm'
    },
    colors: [
      { name: 'Blanco Mate', hex: '#ffffff' },
      { name: 'Gris Cemento', hex: '#8a8a8a' },
      { name: 'Madera Clara', hex: '#c4a35a' }
    ],
    gallery: [
      '/img/remodelacion-integral/remodelacion-integral.png',
      '/img/servicios/remodelacion.png',
      '/img/servicios/muebles.png'
    ],
    deliveryTime: '4-5 semanas',
    isPaquete: true
  },
  'paquete-bano-esencial': {
    id: 'paquete-bano-esencial',
    name: 'Paquete Baño Esencial',
    category: 'bano',
    subcategory: 'paquetes',
    price: 'Desde $12,500',
    description: 'Mueble bajo lavabo 60cm + Espejo con marco + 2 Repisas flotantes.',
    longDescription: 'Paquete básico pero completo para baños pequeños. Incluye mueble bajo lavabo de 60cm con puerta y entrepaño interior, espejo con marco decorativo, y dos repisas flotantes para organizar tus productos de baño.',
    features: [
      'Mueble bajo lavabo 60cm',
      'Espejo con marco decorativo',
      '2 repisas flotantes',
      'Ideal para baños pequeños',
      'Fácil instalación'
    ],
    dimensions: {
      vanityWidth: '60 cm',
      vanityHeight: '50 cm',
      mirrorWidth: '50 cm',
      mirrorHeight: '70 cm'
    },
    colors: [
      { name: 'Blanco', hex: '#ffffff' },
      { name: 'Nogal', hex: '#5c4033' }
    ],
    gallery: [
      '/img/remodelacion-integral/remodelacion-integral.png',
      '/img/servicios/remodelacion.png'
    ],
    deliveryTime: '3-4 semanas',
    isPaquete: true
  },
  'paquete-bano-completo': {
    id: 'paquete-bano-completo',
    name: 'Paquete Baño Completo',
    category: 'bano',
    subcategory: 'paquetes',
    price: 'Desde $28,000',
    description: 'Mueble doble lavabo + Espejo panorámico LED + Gabinete alto + Mueble WC + Accesorios.',
    longDescription: 'Todo lo que necesitas para un baño completo y funcional. Incluye mueble doble lavabo con amplio almacenamiento, espejo panorámico con iluminación LED, gabinete alto para toallas y productos, mueble para área de WC y set de accesorios coordinados.',
    features: [
      'Mueble doble lavabo',
      'Espejo panorámico LED',
      'Gabinete alto',
      'Mueble WC',
      'Accesorios incluidos',
      'Instalación incluida'
    ],
    dimensions: {
      vanityWidth: '120 cm',
      vanityHeight: '50 cm',
      mirrorWidth: '100 cm',
      mirrorHeight: '80 cm'
    },
    colors: [
      { name: 'Blanco Mate', hex: '#ffffff' },
      { name: 'Gris Cemento', hex: '#8a8a8a' },
      { name: 'Madera Roble', hex: '#c4a35a' }
    ],
    gallery: [
      '/img/remodelacion-integral/remodelacion-integral.png',
      '/img/servicios/remodelacion.png',
      '/img/servicios/muebles.png'
    ],
    deliveryTime: '5-6 semanas',
    isPaquete: true
  },
  'paquete-bano-spa': {
    id: 'paquete-bano-spa',
    name: 'Paquete Baño Spa',
    category: 'bano',
    subcategory: 'paquetes',
    price: 'Desde $42,000',
    description: 'Mueble premium doble + Espejo inteligente + Gabinetes de piso a techo + Banca + Accesorios premium.',
    longDescription: 'Experiencia de lujo en tu baño. Incluye mueble premium doble lavabo con cajones de cierre suave, espejo inteligente con desempañador y luz regulable, gabinetes de piso a techo para máximo almacenamiento, banca de madera tratada y set completo de accesorios premium.',
    features: [
      'Mueble premium doble lavabo',
      'Espejo inteligente con desempañador',
      'Gabinetes de piso a techo',
      'Banca de madera tratada',
      'Accesorios premium',
      'Instalación profesional'
    ],
    dimensions: {
      vanityWidth: '150 cm',
      vanityHeight: '55 cm',
      mirrorWidth: '130 cm',
      mirrorHeight: '90 cm'
    },
    colors: [
      { name: 'Blanco Premium', hex: '#ffffff' },
      { name: 'Negro Mate', hex: '#1a1a1a' },
      { name: 'Roble Natural', hex: '#c4a35a' }
    ],
    gallery: [
      '/img/remodelacion-integral/remodelacion-integral.png',
      '/img/servicios/remodelacion.png',
      '/img/servicios/muebles.png',
      '/img/servicios/muebles2.png'
    ],
    deliveryTime: '6-8 semanas',
    isPaquete: true
  },
  'paquete-medio-bano': {
    id: 'paquete-medio-bano',
    name: 'Paquete Medio Baño',
    category: 'bano',
    subcategory: 'paquetes',
    price: 'Desde $8,500',
    description: 'Mueble compacto 50cm + Espejo decorativo + Porta papel.',
    longDescription: 'Solución perfecta para medios baños o baños de visita. Incluye mueble compacto de 50cm diseñado para espacios reducidos, espejo decorativo y porta papel integrado. Diseño elegante que maximiza la funcionalidad.',
    features: [
      'Mueble compacto 50cm',
      'Espejo decorativo',
      'Porta papel incluido',
      'Ideal para espacios reducidos',
      'Fácil instalación'
    ],
    dimensions: {
      vanityWidth: '50 cm',
      vanityHeight: '45 cm',
      mirrorWidth: '40 cm',
      mirrorHeight: '60 cm'
    },
    colors: [
      { name: 'Blanco', hex: '#ffffff' },
      { name: 'Gris', hex: '#808080' }
    ],
    gallery: [
      '/img/remodelacion-integral/remodelacion-integral.png',
      '/img/servicios/remodelacion.png'
    ],
    deliveryTime: '2-3 semanas',
    isPaquete: true
  },
  'paquete-bano-industrial': {
    id: 'paquete-bano-industrial',
    name: 'Paquete Baño Industrial',
    category: 'bano',
    subcategory: 'paquetes',
    price: 'Desde $22,000',
    description: 'Mueble metal + madera + Espejo marco metálico + Repisas industriales + Accesorios estilo loft.',
    longDescription: 'Estilo industrial para baños con personalidad. Combina metal negro mate con madera de roble para un look loft. Incluye mueble con estructura de metal y cubierta de madera, espejo con marco metálico, repisas industriales y accesorios en acabado negro mate.',
    features: [
      'Mueble estructura metal + madera',
      'Espejo marco metálico',
      'Repisas industriales',
      'Accesorios estilo loft',
      'Acabados en negro mate'
    ],
    dimensions: {
      vanityWidth: '90 cm',
      vanityHeight: '50 cm',
      mirrorWidth: '70 cm',
      mirrorHeight: '80 cm'
    },
    colors: [
      { name: 'Metal Negro + Roble', hex: '#1a1a1a' },
      { name: 'Metal Negro + Pino', hex: '#deb887' }
    ],
    gallery: [
      '/img/metal/servicio-metal.png',
      '/img/remodelacion-integral/remodelacion-integral.png',
      '/img/servicios/muebles.png'
    ],
    deliveryTime: '4-5 semanas',
    isPaquete: true
  },
  // SALA - Más productos
  'banca-madera-metal': {
    id: 'banca-madera-metal',
    name: 'Banca Madera + Metal',
    category: 'sala',
    subcategory: 'bancas',
    price: 'Desde $6,500',
    description: 'Banca estilo industrial con patas de metal y asiento de madera maciza.',
    longDescription: 'Banca con diseño industrial que combina la calidez de la madera con la solidez del metal. El asiento está fabricado en madera de roble macizo y las patas en hierro con acabado negro mate. Perfecta para entradas, salas o como complemento decorativo.',
    features: [
      'Asiento de madera de roble macizo',
      'Patas de hierro con acabado negro mate',
      'Estilo industrial',
      'Alta resistencia',
      'Fácil limpieza'
    ],
    dimensions: {
      width: '120 cm',
      depth: '40 cm',
      height: '45 cm'
    },
    colors: [
      { name: 'Roble Natural + Negro', hex: '#deb887' },
      { name: 'Nogal + Negro', hex: '#5c4033' }
    ],
    gallery: [
      '/img/metal/servicio-metal.png',
      '/img/servicios/muebles.png',
      '/img/carpinteria/carpinteria.png'
    ],
    deliveryTime: '2-3 semanas'
  },
  'centro-de-entretenimiento': {
    id: 'centro-de-entretenimiento',
    name: 'Centro de Entretenimiento',
    category: 'sala',
    subcategory: 'muebles-tv',
    price: 'Desde $18,000',
    description: 'Centro completo con espacio para TV, consolas y almacenaje.',
    longDescription: 'Centro de entretenimiento diseñado para organizar todos tus dispositivos. Incluye espacio para TV de hasta 75 pulgadas, compartimentos para consolas de videojuegos, reproductores y amplificadores, además de amplio almacenaje con puertas y cajones.',
    features: [
      'Capacidad para TV hasta 75"',
      'Compartimentos para equipos',
      'Sistema de ventilación',
      'Gestión de cables oculta',
      'Puertas con cierre suave'
    ],
    dimensions: {
      width: '220 cm',
      depth: '45 cm',
      height: '180 cm'
    },
    colors: [
      { name: 'Blanco', hex: '#ffffff' },
      { name: 'Nogal', hex: '#5c4033' },
      { name: 'Wengue', hex: '#3d2b1f' }
    ],
    gallery: [
      '/img/servicios/muebles2.png',
      '/img/servicios/muebles.png',
      '/img/carpinteria/carpinteria.png'
    ],
    deliveryTime: '4-5 semanas'
  },
  'librero-escalera': {
    id: 'librero-escalera',
    name: 'Librero Escalera',
    category: 'sala',
    subcategory: 'libreros',
    price: 'Desde $6,800',
    description: 'Librero estilo escalera, diseño moderno y funcional.',
    longDescription: 'Librero con diseño tipo escalera que combina funcionalidad con estética moderna. Sus repisas de diferentes tamaños permiten organizar libros, plantas y objetos decorativos de manera atractiva. Ideal para espacios contemporáneos.',
    features: [
      'Diseño tipo escalera',
      '5 niveles de repisas',
      'Fácil montaje',
      'Estructura estable',
      'Ideal para decoración'
    ],
    dimensions: {
      width: '60 cm',
      depth: '35 cm',
      height: '180 cm'
    },
    colors: [
      { name: 'Blanco', hex: '#ffffff' },
      { name: 'Natural', hex: '#deb887' },
      { name: 'Negro', hex: '#1a1a1a' }
    ],
    gallery: [
      '/img/servicios/muebles.png',
      '/img/carpinteria/carpinteria.png'
    ],
    deliveryTime: '2-3 semanas'
  },
  'banca-tapizada': {
    id: 'banca-tapizada',
    name: 'Banca Tapizada',
    category: 'sala',
    subcategory: 'bancas',
    price: 'Desde $8,200',
    description: 'Banca elegante con tapizado de tela y patas de madera.',
    longDescription: 'Banca tapizada que combina comodidad y estilo. Perfecta para salas de estar, recámaras o recibidores. El tapizado en tela premium ofrece confort mientras las patas de madera añaden calidez al diseño.',
    features: ['Tapizado en tela premium', 'Patas de madera sólida', 'Diseño elegante', 'Fácil limpieza', 'Estructura reforzada'],
    dimensions: { width: '120 cm', depth: '45 cm', height: '48 cm' },
    colors: [{ name: 'Gris', hex: '#808080' }, { name: 'Beige', hex: '#d4c4a8' }, { name: 'Azul', hex: '#4169e1' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'mesa-centro-industrial': {
    id: 'mesa-centro-industrial',
    name: 'Mesa Centro Industrial',
    category: 'sala',
    subcategory: 'mesas-centro',
    price: 'Desde $9,500',
    description: 'Mesa con estructura metálica y superficie de madera reciclada.',
    longDescription: 'Mesa de centro con estética industrial que combina metal negro con madera recuperada. Cada pieza es única debido a las características naturales de la madera reciclada.',
    features: ['Estructura de metal negro', 'Madera reciclada', 'Diseño único', 'Alta resistencia', 'Estilo industrial'],
    dimensions: { width: '110 cm', depth: '60 cm', height: '45 cm' },
    colors: [{ name: 'Natural + Negro', hex: '#deb887' }, { name: 'Envejecido + Negro', hex: '#8b7355' }],
    gallery: ['/img/metal/servicio-metal.png', '/img/servicios/muebles.png'],
    deliveryTime: '2-3 semanas'
  },
  'mesa-centro-con-almacenaje': {
    id: 'mesa-centro-con-almacenaje',
    name: 'Mesa Centro con Almacenaje',
    category: 'sala',
    subcategory: 'mesas-centro',
    price: 'Desde $11,200',
    description: 'Mesa funcional con cajones y repisas integradas.',
    longDescription: 'Mesa de centro con almacenamiento inteligente. Incluye cajones con guías suaves y repisa inferior para mantener tu sala organizada sin sacrificar el estilo.',
    features: ['Cajones con guías suaves', 'Repisa inferior', 'Diseño funcional', 'Amplio almacenamiento', 'Acabados de calidad'],
    dimensions: { width: '120 cm', depth: '60 cm', height: '45 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Nogal', hex: '#5c4033' }, { name: 'Gris', hex: '#808080' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '3-4 semanas'
  },
  'mesa-lateral-minimalista': {
    id: 'mesa-lateral-minimalista',
    name: 'Mesa Lateral Minimalista',
    category: 'sala',
    subcategory: 'mesas-laterales',
    price: 'Desde $3,200',
    description: 'Diseño minimalista perfecto para cualquier sala.',
    longDescription: 'Mesa lateral con líneas limpias y diseño minimalista. Ideal para colocar junto al sofá o sillón. Su tamaño compacto la hace perfecta para espacios pequeños.',
    features: ['Diseño minimalista', 'Compacta', 'Fácil montaje', 'Versátil', 'Líneas limpias'],
    dimensions: { width: '45 cm', depth: '45 cm', height: '55 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Negro', hex: '#1a1a1a' }, { name: 'Natural', hex: '#deb887' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '1-2 semanas'
  },
  'mesa-lateral-con-cajon': {
    id: 'mesa-lateral-con-cajon',
    name: 'Mesa Lateral con Cajón',
    category: 'sala',
    subcategory: 'mesas-laterales',
    price: 'Desde $4,500',
    description: 'Mesa auxiliar con cajón para almacenamiento.',
    longDescription: 'Mesa lateral práctica con cajón incorporado para guardar control remoto, libros y otros objetos. Combina funcionalidad con diseño elegante.',
    features: ['Cajón con guía metálica', 'Superficie amplia', 'Diseño elegante', 'Almacenamiento oculto', 'Fácil montaje'],
    dimensions: { width: '50 cm', depth: '40 cm', height: '55 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Nogal', hex: '#5c4033' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'consola-entrada': {
    id: 'consola-entrada',
    name: 'Consola Entrada',
    category: 'sala',
    subcategory: 'consolas',
    price: 'Desde $8,900',
    description: 'Consola elegante para recibidor o sala.',
    longDescription: 'Consola versátil perfecta para recibidores, salas o pasillos. Su diseño elegante complementa cualquier decoración mientras ofrece superficie útil.',
    features: ['Diseño elegante', 'Repisa inferior', 'Versátil', 'Fácil montaje', 'Acabados premium'],
    dimensions: { width: '120 cm', depth: '35 cm', height: '80 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Nogal', hex: '#5c4033' }, { name: 'Negro', hex: '#1a1a1a' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'consola-industrial': {
    id: 'consola-industrial',
    name: 'Consola Industrial',
    category: 'sala',
    subcategory: 'consolas',
    price: 'Desde $10,500',
    description: 'Consola con estructura de metal y madera.',
    longDescription: 'Consola estilo industrial con estructura de hierro negro y superficie de madera maciza. Perfecta para lofts y espacios modernos.',
    features: ['Estructura de hierro', 'Superficie de madera maciza', 'Estilo industrial', 'Alta resistencia', 'Diseño único'],
    dimensions: { width: '130 cm', depth: '40 cm', height: '85 cm' },
    colors: [{ name: 'Roble + Negro', hex: '#deb887' }, { name: 'Nogal + Negro', hex: '#5c4033' }],
    gallery: ['/img/metal/servicio-metal.png', '/img/servicios/muebles.png'],
    deliveryTime: '3-4 semanas'
  },
  'librero-pared-completa': {
    id: 'librero-pared-completa',
    name: 'Librero Pared Completa',
    category: 'sala',
    subcategory: 'libreros',
    price: 'Desde $22,000',
    description: 'Librero de piso a techo, máxima capacidad.',
    longDescription: 'Librero de pared completa que maximiza el espacio de almacenamiento. Diseñado para cubrir una pared completa, ofrece múltiples repisas ajustables para libros, decoración y más.',
    features: ['Piso a techo', 'Repisas ajustables', 'Máxima capacidad', 'Diseño personalizable', 'Instalación incluida'],
    dimensions: { width: '300 cm', depth: '35 cm', height: '260 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Nogal', hex: '#5c4033' }, { name: 'Natural', hex: '#deb887' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '4-6 semanas'
  },
  'set-repisas-flotantes': {
    id: 'set-repisas-flotantes',
    name: 'Set Repisas Flotantes',
    category: 'sala',
    subcategory: 'repisas',
    price: 'Desde $2,800',
    description: 'Set de 3 repisas flotantes en diferentes tamaños.',
    longDescription: 'Set de tres repisas flotantes que crean una composición moderna en tu pared. Incluye herrajes ocultos para una apariencia limpia y minimalista.',
    features: ['3 repisas incluidas', 'Herrajes ocultos', 'Fácil instalación', 'Diseño moderno', 'Diferentes tamaños'],
    dimensions: { small: '40 cm', medium: '60 cm', large: '80 cm', depth: '20 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Negro', hex: '#1a1a1a' }, { name: 'Natural', hex: '#deb887' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '1-2 semanas'
  },
  'repisa-industrial': {
    id: 'repisa-industrial',
    name: 'Repisa Industrial',
    category: 'sala',
    subcategory: 'repisas',
    price: 'Desde $3,500',
    description: 'Repisa con soportes de metal y tabla de madera.',
    longDescription: 'Repisa estilo industrial con soportes de hierro forjado y tabla de madera maciza. Añade carácter a cualquier espacio con este diseño robusto y elegante.',
    features: ['Soportes de hierro forjado', 'Madera maciza', 'Estilo industrial', 'Alta resistencia', 'Herrajes incluidos'],
    dimensions: { width: '80 cm', depth: '25 cm' },
    colors: [{ name: 'Natural + Negro', hex: '#deb887' }, { name: 'Nogal + Negro', hex: '#5c4033' }],
    gallery: ['/img/metal/servicio-metal.png', '/img/servicios/muebles.png'],
    deliveryTime: '1-2 semanas'
  },
  'mueble-bar-compacto': {
    id: 'mueble-bar-compacto',
    name: 'Mueble Bar Compacto',
    category: 'sala',
    subcategory: 'muebles-bar',
    price: 'Desde $14,500',
    description: 'Bar compacto con espacio para botellas y copas.',
    longDescription: 'Mueble bar elegante y funcional con compartimentos para botellas, copas y accesorios. Puerta abatible que se convierte en superficie de servicio.',
    features: ['Portabotellas integrado', 'Colgador de copas', 'Puerta abatible', 'Diseño compacto', 'Iluminación LED opcional'],
    dimensions: { width: '80 cm', depth: '45 cm', height: '110 cm' },
    colors: [{ name: 'Nogal', hex: '#5c4033' }, { name: 'Negro', hex: '#1a1a1a' }, { name: 'Blanco', hex: '#ffffff' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '3-4 semanas'
  },
  'carro-bar-movil': {
    id: 'carro-bar-movil',
    name: 'Carro Bar Móvil',
    category: 'sala',
    subcategory: 'muebles-bar',
    price: 'Desde $8,200',
    description: 'Carro bar con ruedas, perfecto para servir.',
    longDescription: 'Carro bar móvil con ruedas que facilita servir bebidas en cualquier lugar. Dos niveles con barandilla para mantener las botellas seguras.',
    features: ['Ruedas con freno', 'Dos niveles', 'Barandilla de seguridad', 'Fácil de mover', 'Diseño elegante'],
    dimensions: { width: '70 cm', depth: '40 cm', height: '85 cm' },
    colors: [{ name: 'Dorado + Mármol', hex: '#d4af37' }, { name: 'Negro + Madera', hex: '#1a1a1a' }],
    gallery: ['/img/servicios/muebles.png', '/img/metal/servicio-metal.png'],
    deliveryTime: '2-3 semanas'
  },
  'sistema-modular-6-piezas': {
    id: 'sistema-modular-6-piezas',
    name: 'Sistema Modular 6 Piezas',
    category: 'sala',
    subcategory: 'modulares',
    price: 'Desde $15,000',
    description: 'Sistema de cubos modulares configurables.',
    longDescription: 'Sistema de 6 cubos modulares que puedes configurar como quieras. Apílalos, alinéalos o crea composiciones únicas según tu espacio y necesidades.',
    features: ['6 cubos incluidos', 'Configuración libre', 'Conectores incluidos', 'Versatilidad total', 'Fácil reconfiguración'],
    dimensions: { perCube: '35 x 35 x 35 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Colores Mix', hex: '#4169e1' }, { name: 'Natural', hex: '#deb887' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'estanteria-modular': {
    id: 'estanteria-modular',
    name: 'Estantería Modular',
    category: 'sala',
    subcategory: 'modulares',
    price: 'Desde $12,800',
    description: 'Estantería que crece contigo, añade módulos según necesites.',
    longDescription: 'Estantería modular expandible. Comienza con la configuración básica y añade módulos adicionales cuando lo necesites. Sistema de conexión fácil sin herramientas.',
    features: ['Sistema expandible', 'Conexión sin herramientas', 'Módulos adicionales disponibles', 'Diseño moderno', 'Alta resistencia'],
    dimensions: { width: '120 cm', depth: '30 cm', height: '180 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Roble', hex: '#c4a35a' }, { name: 'Negro', hex: '#1a1a1a' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  // COMEDOR - Más productos
  'mesa-redonda-4-personas': {
    id: 'mesa-redonda-4-personas',
    name: 'Mesa Redonda 4 Personas',
    category: 'comedor',
    subcategory: 'mesas-4',
    price: 'Desde $12,500',
    description: 'Mesa redonda ideal para espacios pequeños.',
    longDescription: 'Mesa de comedor redonda perfecta para departamentos y espacios compactos. Su forma facilita la circulación y promueve la conversación. Fabricada en madera sólida con acabados de alta calidad.',
    features: [
      'Forma redonda, ideal para espacios pequeños',
      'Capacidad para 4 personas',
      'Madera sólida',
      'Fácil circulación',
      'Base estable'
    ],
    dimensions: {
      diameter: '110 cm',
      height: '76 cm'
    },
    colors: [
      { name: 'Natural', hex: '#deb887' },
      { name: 'Blanco', hex: '#ffffff' },
      { name: 'Nogal', hex: '#5c4033' }
    ],
    gallery: [
      '/img/servicios/cocina.png',
      '/img/carpinteria/carpinteria.png'
    ],
    deliveryTime: '3-4 semanas'
  },
  'credenza-moderna': {
    id: 'credenza-moderna',
    name: 'Credenza Moderna',
    category: 'comedor',
    subcategory: 'credenzas',
    price: 'Desde $14,500',
    description: 'Credenza con puertas y cajones, diseño contemporáneo.',
    longDescription: 'Credenza de diseño contemporáneo que combina funcionalidad con estética. Cuenta con puertas con sistema push para un frente limpio, cajones con guías de cierre suave y amplio espacio de almacenamiento.',
    features: ['Puertas con sistema push', 'Cajones con cierre suave', 'Diseño contemporáneo', 'Amplio almacenamiento', 'Superficie resistente'],
    dimensions: { width: '160 cm', depth: '45 cm', height: '80 cm' },
    colors: [{ name: 'Blanco Mate', hex: '#ffffff' }, { name: 'Nogal', hex: '#5c4033' }, { name: 'Gris', hex: '#808080' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '3-4 semanas'
  },
  'mesa-cuadrada-compacta': {
    id: 'mesa-cuadrada-compacta',
    name: 'Mesa Cuadrada Compacta',
    category: 'comedor',
    subcategory: 'mesas-4',
    price: 'Desde $10,800',
    description: 'Mesa cuadrada perfecta para departamentos.',
    longDescription: 'Mesa de comedor cuadrada ideal para espacios pequeños. Su diseño compacto permite ubicarla en departamentos o cocinas sin sacrificar funcionalidad.',
    features: ['Diseño compacto', 'Ideal para 4 personas', 'Fácil limpieza', 'Patas estables', 'Acabado resistente'],
    dimensions: { width: '100 cm', depth: '100 cm', height: '76 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Natural', hex: '#deb887' }, { name: 'Nogal', hex: '#5c4033' }],
    gallery: ['/img/servicios/cocina.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '3-4 semanas'
  },
  'mesa-rectangular-6-personas': {
    id: 'mesa-rectangular-6-personas',
    name: 'Mesa Rectangular 6 Personas',
    category: 'comedor',
    subcategory: 'mesas-6',
    price: 'Desde $16,500',
    description: 'Mesa rectangular clásica para familia.',
    longDescription: 'Mesa de comedor rectangular diseñada para familias. Capacidad cómoda para 6 personas con espacio suficiente para servir.',
    features: ['Capacidad 6 personas', 'Madera sólida', 'Diseño clásico', 'Acabado resistente', 'Patas reforzadas'],
    dimensions: { width: '180 cm', depth: '90 cm', height: '76 cm' },
    colors: [{ name: 'Nogal', hex: '#5c4033' }, { name: 'Natural', hex: '#deb887' }, { name: 'Wengue', hex: '#3d2b1f' }],
    gallery: ['/img/servicios/cocina.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '3-4 semanas'
  },
  'mesa-ovalada-6-personas': {
    id: 'mesa-ovalada-6-personas',
    name: 'Mesa Ovalada 6 Personas',
    category: 'comedor',
    subcategory: 'mesas-6',
    price: 'Desde $18,200',
    description: 'Diseño ovalado elegante y funcional.',
    longDescription: 'Mesa ovalada que combina elegancia con funcionalidad. Su forma permite mejor circulación y conversación entre comensales.',
    features: ['Forma ovalada', 'Mejor circulación', 'Diseño elegante', 'Capacidad 6 personas', 'Acabado premium'],
    dimensions: { width: '180 cm', depth: '100 cm', height: '76 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Nogal', hex: '#5c4033' }],
    gallery: ['/img/servicios/cocina.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '4-5 semanas'
  },
  'mesa-gran-familia-8-personas': {
    id: 'mesa-gran-familia-8-personas',
    name: 'Mesa Gran Familia 8 Personas',
    category: 'comedor',
    subcategory: 'mesas-8',
    price: 'Desde $24,000',
    description: 'Mesa amplia para reuniones familiares.',
    longDescription: 'Mesa de gran formato para familias numerosas o quienes disfrutan recibir invitados. Espacio generoso para 8 personas cómodamente.',
    features: ['Capacidad 8 personas', 'Ideal para reuniones', 'Madera sólida', 'Estructura reforzada', 'Acabado premium'],
    dimensions: { width: '220 cm', depth: '100 cm', height: '76 cm' },
    colors: [{ name: 'Nogal', hex: '#5c4033' }, { name: 'Natural', hex: '#deb887' }],
    gallery: ['/img/servicios/cocina.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '4-5 semanas'
  },
  'mesa-conferencia-10-personas': {
    id: 'mesa-conferencia-10-personas',
    name: 'Mesa Conferencia 10 Personas',
    category: 'comedor',
    subcategory: 'mesas-8',
    price: 'Desde $32,000',
    description: 'Ideal para comedores grandes o salas de juntas.',
    longDescription: 'Mesa de gran formato ideal para comedores amplios o como mesa de conferencias. Capacidad para 10+ personas con acabados ejecutivos.',
    features: ['Capacidad 10+ personas', 'Acabados ejecutivos', 'Pasacables opcional', 'Estructura premium', 'Personalizable'],
    dimensions: { width: '280 cm', depth: '110 cm', height: '76 cm' },
    colors: [{ name: 'Nogal Ejecutivo', hex: '#5c4033' }, { name: 'Negro', hex: '#1a1a1a' }],
    gallery: ['/img/servicios/cocina.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '5-6 semanas'
  },
  'mesa-extensible-4-6': {
    id: 'mesa-extensible-4-6',
    name: 'Mesa Extensible 4-6',
    category: 'comedor',
    subcategory: 'mesas-extensibles',
    price: 'Desde $18,500',
    description: 'Se extiende de 4 a 6 personas fácilmente.',
    longDescription: 'Mesa con sistema de extensión que permite pasar de 4 a 6 comensales en segundos. Perfecta para quienes necesitan flexibilidad.',
    features: ['Sistema de extensión fácil', 'De 4 a 6 personas', 'Mecanismo suave', 'Diseño versátil', 'Almacena extensión'],
    dimensions: { widthClosed: '120 cm', widthOpen: '160 cm', depth: '90 cm', height: '76 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Nogal', hex: '#5c4033' }, { name: 'Roble', hex: '#c4a35a' }],
    gallery: ['/img/servicios/cocina.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '4-5 semanas'
  },
  'mesa-extensible-6-10': {
    id: 'mesa-extensible-6-10',
    name: 'Mesa Extensible 6-10',
    category: 'comedor',
    subcategory: 'mesas-extensibles',
    price: 'Desde $26,000',
    description: 'Máxima versatilidad, de 6 hasta 10 personas.',
    longDescription: 'Mesa extensible de gran capacidad. Sistema de doble extensión que permite pasar de 6 a 10 comensales para grandes reuniones.',
    features: ['Doble extensión', 'De 6 a 10 personas', 'Mecanismo premium', 'Estructura reforzada', 'Extensiones almacenables'],
    dimensions: { widthClosed: '180 cm', widthOpen: '280 cm', depth: '100 cm', height: '76 cm' },
    colors: [{ name: 'Nogal', hex: '#5c4033' }, { name: 'Roble', hex: '#c4a35a' }],
    gallery: ['/img/servicios/cocina.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '5-6 semanas'
  },
  'banca-comedor-12m': {
    id: 'banca-comedor-12m',
    name: 'Banca Comedor 1.2m',
    category: 'comedor',
    subcategory: 'bancas-comedor',
    price: 'Desde $5,800',
    description: 'Banca de madera sólida para 2-3 personas.',
    longDescription: 'Banca de comedor en madera sólida. Alternativa elegante a las sillas tradicionales, perfecta para un lado de la mesa.',
    features: ['Madera sólida', 'Capacidad 2-3 personas', 'Diseño robusto', 'Combina con mesas', 'Fácil limpieza'],
    dimensions: { width: '120 cm', depth: '35 cm', height: '45 cm' },
    colors: [{ name: 'Natural', hex: '#deb887' }, { name: 'Nogal', hex: '#5c4033' }, { name: 'Blanco', hex: '#ffffff' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'banca-tapizada-comedor': {
    id: 'banca-tapizada-comedor',
    name: 'Banca Tapizada Comedor',
    category: 'comedor',
    subcategory: 'bancas-comedor',
    price: 'Desde $7,500',
    description: 'Banca con asiento tapizado para mayor confort.',
    longDescription: 'Banca de comedor con asiento tapizado que ofrece mayor comodidad durante las comidas largas. Estructura de madera con cojín integrado.',
    features: ['Asiento tapizado', 'Mayor confort', 'Estructura de madera', 'Tela antimanchas', 'Fácil limpieza'],
    dimensions: { width: '140 cm', depth: '40 cm', height: '48 cm' },
    colors: [{ name: 'Gris + Madera', hex: '#808080' }, { name: 'Beige + Nogal', hex: '#d4c4a8' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '3-4 semanas'
  },
  'credenza-rustica': {
    id: 'credenza-rustica',
    name: 'Credenza Rústica',
    category: 'comedor',
    subcategory: 'credenzas',
    price: 'Desde $16,200',
    description: 'Estilo rústico con acabados envejecidos.',
    longDescription: 'Credenza con encanto rústico y acabados envejecidos. Cada pieza tiene características únicas que le dan personalidad a tu comedor.',
    features: ['Acabado envejecido', 'Estilo rústico', 'Piezas únicas', 'Amplio almacenamiento', 'Herrajes vintage'],
    dimensions: { width: '180 cm', depth: '45 cm', height: '85 cm' },
    colors: [{ name: 'Envejecido Natural', hex: '#a0826d' }, { name: 'Blanco Vintage', hex: '#f5f5f0' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '4-5 semanas'
  },
  'buffetera-clasica': {
    id: 'buffetera-clasica',
    name: 'Buffetera Clásica',
    category: 'comedor',
    subcategory: 'buffeteras',
    price: 'Desde $18,000',
    description: 'Buffetera tradicional con amplio almacenamiento.',
    longDescription: 'Buffetera de diseño clásico con amplio espacio para vajillas, mantelería y cristalería. Puertas con vidrio opcional para exhibir piezas especiales.',
    features: ['Diseño clásico', 'Amplio almacenamiento', 'Puertas con vidrio opcional', 'Cajones para cubiertos', 'Superficie de servicio'],
    dimensions: { width: '160 cm', depth: '50 cm', height: '90 cm' },
    colors: [{ name: 'Nogal', hex: '#5c4033' }, { name: 'Cerezo', hex: '#7b3f00' }, { name: 'Blanco', hex: '#ffffff' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '4-5 semanas'
  },
  'buffetera-con-vitrina': {
    id: 'buffetera-con-vitrina',
    name: 'Buffetera con Vitrina',
    category: 'comedor',
    subcategory: 'buffeteras',
    price: 'Desde $22,500',
    description: 'Incluye vitrina superior para exhibir.',
    longDescription: 'Buffetera completa con vitrina superior iluminada. Perfecta para exhibir tu mejor vajilla y cristalería mientras almacenas lo demás.',
    features: ['Vitrina superior', 'Iluminación LED', 'Vidrio templado', 'Almacenamiento inferior', 'Diseño elegante'],
    dimensions: { width: '160 cm', depth: '45 cm', height: '200 cm' },
    colors: [{ name: 'Nogal', hex: '#5c4033' }, { name: 'Blanco', hex: '#ffffff' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '5-6 semanas'
  },
  'vitrina-iluminada': {
    id: 'vitrina-iluminada',
    name: 'Vitrina Iluminada',
    category: 'comedor',
    subcategory: 'vitrinas',
    price: 'Desde $16,800',
    description: 'Vitrina con iluminación LED integrada.',
    longDescription: 'Vitrina elegante con sistema de iluminación LED que resalta tus piezas de colección. Vidrio templado y repisas ajustables.',
    features: ['Iluminación LED', 'Vidrio templado', 'Repisas ajustables', 'Fondo espejado opcional', 'Diseño elegante'],
    dimensions: { width: '80 cm', depth: '40 cm', height: '180 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Nogal', hex: '#5c4033' }, { name: 'Negro', hex: '#1a1a1a' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '4-5 semanas'
  },
  'vitrina-esquinera': {
    id: 'vitrina-esquinera',
    name: 'Vitrina Esquinera',
    category: 'comedor',
    subcategory: 'vitrinas',
    price: 'Desde $12,500',
    description: 'Aprovecha las esquinas con esta vitrina elegante.',
    longDescription: 'Vitrina diseñada para esquinas, aprovechando espacios que normalmente quedan vacíos. Perfecta para exhibir colecciones o vajilla fina.',
    features: ['Diseño esquinero', 'Aprovecha espacios', 'Vidrio en frente', 'Repisas de vidrio', 'Iluminación opcional'],
    dimensions: { width: '60 cm', depth: '60 cm', height: '180 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Nogal', hex: '#5c4033' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '3-4 semanas'
  },
  // RECÁMARA - Más productos
  'cama-queen-size': {
    id: 'cama-queen-size',
    name: 'Cama Queen Size',
    category: 'recamara',
    subcategory: 'camas',
    price: 'Desde $18,500',
    description: 'Cama queen perfecta para recámaras medianas.',
    longDescription: 'Cama queen size con diseño moderno y estructura robusta. Fabricada con madera de pino tratada para máxima durabilidad. Sistema de soporte de lamillas que proporciona excelente ventilación al colchón.',
    features: [
      'Estructura de madera de pino',
      'Sistema de lamillas',
      'Diseño moderno',
      'Fácil montaje',
      'Compatible con colchón queen estándar'
    ],
    dimensions: {
      width: '160 cm',
      depth: '200 cm',
      height: '35 cm'
    },
    colors: [
      { name: 'Natural', hex: '#deb887' },
      { name: 'Blanco', hex: '#ffffff' },
      { name: 'Gris', hex: '#808080' }
    ],
    gallery: [
      '/img/servicios/muebles.png',
      '/img/servicios/muebles2.png'
    ],
    deliveryTime: '3-4 semanas'
  },
  'buro-2-cajones': {
    id: 'buro-2-cajones',
    name: 'Buró 2 Cajones',
    category: 'recamara',
    subcategory: 'buros',
    price: 'Desde $4,500',
    description: 'Buró clásico con dos cajones amplios.',
    longDescription: 'Buró de diseño clásico con dos cajones amplios para almacenar tus pertenencias. Fabricado en madera con acabados de calidad y herrajes de metal. Complemento perfecto para tu cama.',
    features: [
      'Dos cajones amplios',
      'Guías metálicas',
      'Superficie resistente',
      'Diseño clásico',
      'Fácil montaje'
    ],
    dimensions: {
      width: '50 cm',
      depth: '40 cm',
      height: '55 cm'
    },
    colors: [
      { name: 'Blanco', hex: '#ffffff' },
      { name: 'Nogal', hex: '#5c4033' },
      { name: 'Gris', hex: '#808080' }
    ],
    gallery: [
      '/img/servicios/muebles.png',
      '/img/carpinteria/carpinteria.png'
    ],
    deliveryTime: '2-3 semanas'
  },
  'comoda-6-cajones': {
    id: 'comoda-6-cajones',
    name: 'Cómoda 6 Cajones',
    category: 'recamara',
    subcategory: 'comodas',
    price: 'Desde $12,500',
    description: 'Cómoda amplia con seis cajones.',
    longDescription: 'Cómoda de seis cajones para máximo almacenamiento. Distribuidos en tres filas, los cajones cuentan con guías de cierre suave.',
    features: ['Seis cajones amplios', 'Guías de cierre suave', 'Superficie amplia', 'Diseño elegante', 'Alta capacidad'],
    dimensions: { width: '120 cm', depth: '45 cm', height: '80 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Nogal', hex: '#5c4033' }, { name: 'Gris Claro', hex: '#a8a8a8' }],
    gallery: ['/img/servicios/muebles.png', '/img/servicios/muebles2.png'],
    deliveryTime: '3-4 semanas'
  },
  'cama-con-almacenaje': {
    id: 'cama-con-almacenaje',
    name: 'Cama con Almacenaje',
    category: 'recamara',
    subcategory: 'camas',
    price: 'Desde $26,000',
    description: 'Base con cajones laterales para almacenamiento.',
    longDescription: 'Cama con cajones integrados que maximizan el espacio de tu recámara. Perfecta para guardar ropa de cama, cobijas y más.',
    features: ['Cajones laterales', 'Máximo almacenamiento', 'Sistema hidráulico opcional', 'Estructura reforzada', 'Diseño moderno'],
    dimensions: { width: '160/180/200 cm', depth: '200 cm', height: '40 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Gris', hex: '#808080' }, { name: 'Nogal', hex: '#5c4033' }],
    gallery: ['/img/servicios/muebles.png', '/img/servicios/muebles2.png'],
    deliveryTime: '4-5 semanas'
  },
  'cabecera-madera': {
    id: 'cabecera-madera',
    name: 'Cabecera Madera',
    category: 'recamara',
    subcategory: 'cabeceras',
    price: 'Desde $7,200',
    description: 'Cabecera de madera con diseño geométrico.',
    longDescription: 'Cabecera fabricada en madera con patrones geométricos que añaden textura y calidez a tu recámara. Diseño versátil que combina con varios estilos.',
    features: ['Madera sólida', 'Diseño geométrico', 'Fácil instalación', 'Combina con varios estilos', 'Acabado natural o pintado'],
    dimensions: { width: '160/180/200 cm', height: '120 cm', depth: '5 cm' },
    colors: [{ name: 'Natural', hex: '#deb887' }, { name: 'Nogal', hex: '#5c4033' }, { name: 'Blanco', hex: '#ffffff' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'cabecera-capitoneada': {
    id: 'cabecera-capitoneada',
    name: 'Cabecera Capitoneada',
    category: 'recamara',
    subcategory: 'cabeceras',
    price: 'Desde $12,000',
    description: 'Elegante cabecera capitoneada en terciopelo.',
    longDescription: 'Cabecera de lujo con capitonado tipo Chester. Tapizada en terciopelo premium que añade sofisticación a cualquier recámara.',
    features: ['Capitonado tipo Chester', 'Terciopelo premium', 'Relleno de espuma', 'Look de lujo', 'Varios tamaños'],
    dimensions: { width: '160/180/200 cm', height: '140 cm', depth: '10 cm' },
    colors: [{ name: 'Gris', hex: '#808080' }, { name: 'Azul', hex: '#4169e1' }, { name: 'Verde', hex: '#556b2f' }, { name: 'Rosa', hex: '#d4a5a5' }],
    gallery: ['/img/servicios/muebles.png', '/img/servicios/muebles2.png'],
    deliveryTime: '3-4 semanas'
  },
  'buro-flotante': {
    id: 'buro-flotante',
    name: 'Buró Flotante',
    category: 'recamara',
    subcategory: 'buros',
    price: 'Desde $3,800',
    description: 'Buró de pared, diseño minimalista.',
    longDescription: 'Buró flotante que se monta en la pared creando una apariencia limpia y moderna. Libera espacio en el piso y facilita la limpieza.',
    features: ['Montaje en pared', 'Diseño minimalista', 'Libera espacio', 'Cajón incluido', 'Herrajes ocultos'],
    dimensions: { width: '45 cm', depth: '35 cm', height: '15 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Negro', hex: '#1a1a1a' }, { name: 'Nogal', hex: '#5c4033' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'buro-con-cargador': {
    id: 'buro-con-cargador',
    name: 'Buró con Cargador',
    category: 'recamara',
    subcategory: 'buros',
    price: 'Desde $5,200',
    description: 'Incluye cargador inalámbrico integrado.',
    longDescription: 'Buró moderno con cargador inalámbrico integrado en la superficie. Solo coloca tu teléfono encima para cargarlo mientras duermes.',
    features: ['Cargador inalámbrico Qi', 'Puerto USB adicional', 'Cajón amplio', 'Diseño moderno', 'Compatible con iPhone/Android'],
    dimensions: { width: '50 cm', depth: '40 cm', height: '55 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Negro', hex: '#1a1a1a' }, { name: 'Nogal', hex: '#5c4033' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '3-4 semanas'
  },
  'comoda-doble': {
    id: 'comoda-doble',
    name: 'Cómoda Doble',
    category: 'recamara',
    subcategory: 'comodas',
    price: 'Desde $16,800',
    description: 'Cómoda extra ancha, ideal para parejas.',
    longDescription: 'Cómoda de doble ancho con espacio dividido para parejas. Cada lado tiene sus propios cajones para mantener todo organizado.',
    features: ['Doble ancho', 'Ideal para parejas', '8 cajones', 'División central', 'Superficie amplia'],
    dimensions: { width: '160 cm', depth: '45 cm', height: '80 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Nogal', hex: '#5c4033' }, { name: 'Gris', hex: '#808080' }],
    gallery: ['/img/servicios/muebles.png', '/img/servicios/muebles2.png'],
    deliveryTime: '4-5 semanas'
  },
  'chifonier-5-cajones': {
    id: 'chifonier-5-cajones',
    name: 'Chifonier 5 Cajones',
    category: 'recamara',
    subcategory: 'chifonier',
    price: 'Desde $9,800',
    description: 'Chifonier alto, perfecto para espacios reducidos.',
    longDescription: 'Chifonier vertical con 5 cajones que aprovecha el espacio en altura. Ideal para recámaras pequeñas donde el espacio horizontal es limitado.',
    features: ['Diseño vertical', '5 cajones amplios', 'Ideal para espacios pequeños', 'Guías metálicas', 'Estable y seguro'],
    dimensions: { width: '60 cm', depth: '45 cm', height: '120 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Nogal', hex: '#5c4033' }, { name: 'Natural', hex: '#deb887' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '3-4 semanas'
  },
  'chifonier-con-espejo': {
    id: 'chifonier-con-espejo',
    name: 'Chifonier con Espejo',
    category: 'recamara',
    subcategory: 'chifonier',
    price: 'Desde $12,500',
    description: 'Incluye espejo abatible en la parte superior.',
    longDescription: 'Chifonier con espejo abatible oculto en la parte superior. Funciona como tocador y almacenamiento en un solo mueble.',
    features: ['Espejo abatible', 'Doble función', '5 cajones', 'Compartimento superior', 'Diseño elegante'],
    dimensions: { width: '70 cm', depth: '45 cm', height: '130 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Nogal', hex: '#5c4033' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '3-4 semanas'
  },
  'banca-pie-de-cama': {
    id: 'banca-pie-de-cama',
    name: 'Banca Pie de Cama',
    category: 'recamara',
    subcategory: 'bancas-cama',
    price: 'Desde $6,500',
    description: 'Banca tapizada elegante para pie de cama.',
    longDescription: 'Banca decorativa y funcional para colocar al pie de la cama. Perfecta para sentarse mientras te vistes o para colocar ropa.',
    features: ['Tapizado elegante', 'Ideal para vestirse', 'Complemento decorativo', 'Patas de madera', 'Varios acabados'],
    dimensions: { width: '120 cm', depth: '45 cm', height: '48 cm' },
    colors: [{ name: 'Gris', hex: '#808080' }, { name: 'Beige', hex: '#d4c4a8' }, { name: 'Azul', hex: '#4169e1' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'banca-con-almacenaje-recamara': {
    id: 'banca-con-almacenaje-recamara',
    name: 'Banca con Almacenaje',
    category: 'recamara',
    subcategory: 'bancas-cama',
    price: 'Desde $8,200',
    description: 'Banca con compartimento interior para cobijas.',
    longDescription: 'Banca de pie de cama con compartimento interior oculto. Perfecta para guardar cobijas extra, almohadas o ropa de temporada.',
    features: ['Compartimento oculto', 'Tapa con bisagras', 'Gran capacidad', 'Tapizado premium', 'Doble función'],
    dimensions: { width: '130 cm', depth: '45 cm', height: '50 cm' },
    colors: [{ name: 'Gris', hex: '#808080' }, { name: 'Crema', hex: '#f5f5dc' }, { name: 'Azul Marino', hex: '#1e3a5f' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '3-4 semanas'
  },
  'tocador-con-espejo': {
    id: 'tocador-con-espejo',
    name: 'Tocador con Espejo',
    category: 'recamara',
    subcategory: 'tocadores',
    price: 'Desde $11,500',
    description: 'Tocador clásico con espejo y cajones.',
    longDescription: 'Tocador elegante con espejo grande y múltiples cajones para organizar maquillaje y accesorios. Diseño clásico atemporal.',
    features: ['Espejo grande', 'Múltiples cajones', 'Diseño clásico', 'Superficie amplia', 'Cajones organizadores'],
    dimensions: { width: '100 cm', depth: '45 cm', height: '145 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Nogal', hex: '#5c4033' }, { name: 'Rosa Palo', hex: '#d4a5a5' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '3-4 semanas'
  },
  'tocador-moderno': {
    id: 'tocador-moderno',
    name: 'Tocador Moderno',
    category: 'recamara',
    subcategory: 'tocadores',
    price: 'Desde $14,200',
    description: 'Diseño contemporáneo con iluminación LED.',
    longDescription: 'Tocador de diseño moderno con espejo iluminado LED y líneas limpias. Sistema de iluminación regulable para maquillaje perfecto.',
    features: ['Iluminación LED regulable', 'Espejo amplio', 'Diseño moderno', 'Cajones con divisores', 'Toma corriente integrada'],
    dimensions: { width: '120 cm', depth: '50 cm', height: '150 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Negro', hex: '#1a1a1a' }, { name: 'Roble', hex: '#c4a35a' }],
    gallery: ['/img/servicios/muebles.png', '/img/servicios/muebles2.png'],
    deliveryTime: '4-5 semanas'
  },
  'closet-abierto-basico': {
    id: 'closet-abierto-basico',
    name: 'Closet Abierto Básico',
    category: 'recamara',
    subcategory: 'closets-abiertos',
    price: 'Desde $8,500',
    description: 'Sistema abierto con barras y repisas.',
    longDescription: 'Sistema de closet abierto estilo vestidor. Incluye barras para colgar ropa, repisas para zapatos y accesorios. Modular y expandible.',
    features: ['Sistema abierto', 'Barras para ropa', 'Repisas ajustables', 'Modular', 'Fácil acceso'],
    dimensions: { width: '150 cm', depth: '50 cm', height: '200 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Negro', hex: '#1a1a1a' }, { name: 'Natural', hex: '#deb887' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '3-4 semanas'
  },
  'closet-modular-completo': {
    id: 'closet-modular-completo',
    name: 'Closet Modular Completo',
    category: 'recamara',
    subcategory: 'closets-abiertos',
    price: 'Desde $18,000',
    description: 'Sistema modular con cajones, repisas y barras.',
    longDescription: 'Sistema de closet completo con todas las opciones de organización: barras dobles, cajones, zapatera, repisas y accesorios.',
    features: ['Sistema completo', 'Cajones incluidos', 'Zapatera integrada', 'Barras dobles', 'Personalizable'],
    dimensions: { width: '200 cm', depth: '60 cm', height: '240 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Nogal', hex: '#5c4033' }, { name: 'Gris', hex: '#808080' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '5-6 semanas'
  },
  // COCINA - Más productos
  'cocina-integral-25m-lineal': {
    id: 'cocina-integral-25m-lineal',
    name: 'Cocina Integral 2.5m Lineal',
    category: 'cocina',
    subcategory: 'paquetes-cocina',
    price: 'Desde $65,000',
    description: 'Paquete completo: gabinetes superiores e inferiores, cubierta, tarja y grifería.',
    longDescription: 'Cocina integral compacta de 2.5 metros lineales, ideal para departamentos y espacios pequeños. Incluye gabinetes superiores e inferiores con sistema de cierre suave, cubierta de granito, tarja de acero inoxidable y grifería básica.',
    features: [
      'Gabinetes con cierre suave',
      'Cubierta de granito',
      'Tarja de acero inoxidable',
      'Grifería incluida',
      'Instalación incluida'
    ],
    dimensions: {
      width: '250 cm',
      depth: '60 cm',
      upperHeight: '70 cm',
      lowerHeight: '85 cm'
    },
    colors: [
      { name: 'Blanco', hex: '#ffffff' },
      { name: 'Gris', hex: '#808080' },
      { name: 'Madera', hex: '#deb887' }
    ],
    gallery: [
      '/img/servicios/cocina.png',
      '/img/carpinteria/carpinteria.png'
    ],
    deliveryTime: '5-6 semanas',
    isPaquete: true
  },
  'cocina-en-l-3m-x-2m': {
    id: 'cocina-en-l-3m-x-2m',
    name: 'Cocina en L (3m x 2m)',
    category: 'cocina',
    subcategory: 'paquetes-cocina',
    price: 'Desde $120,000',
    description: 'Distribución en L perfecta para cocinas medianas.',
    longDescription: 'Cocina en L que maximiza el espacio de trabajo y almacenamiento. Distribución ergonómica que facilita el flujo de trabajo. Incluye gabinetes superiores e inferiores, cubierta de cuarzo, tarja y todos los herrajes.',
    features: [
      'Distribución ergonómica en L',
      'Cubierta de cuarzo',
      'Herrajes premium',
      'Cajones con cierre suave',
      'Instalación incluida'
    ],
    dimensions: {
      sideA: '300 cm',
      sideB: '200 cm',
      depth: '60 cm'
    },
    colors: [
      { name: 'Blanco Brillante', hex: '#ffffff' },
      { name: 'Gris Grafito', hex: '#4a4a4a' },
      { name: 'Madera Roble', hex: '#c4a35a' }
    ],
    gallery: [
      '/img/servicios/cocina.png',
      '/img/carpinteria/carpinteria.png',
      '/img/servicios/muebles.png'
    ],
    deliveryTime: '8-10 semanas',
    isPaquete: true
  },
  'isla-compacta': {
    id: 'isla-compacta',
    name: 'Isla Compacta',
    category: 'cocina',
    subcategory: 'islas',
    price: 'Desde $18,000',
    description: 'Isla de cocina con almacenamiento y cubierta.',
    longDescription: 'Isla de cocina compacta que añade espacio de trabajo y almacenamiento.',
    features: ['Gabinetes con puertas', 'Entrepaños ajustables', 'Cubierta resistente', 'Ruedas opcionales', 'Fácil montaje'],
    dimensions: { width: '120 cm', depth: '60 cm', height: '90 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Gris', hex: '#808080' }, { name: 'Natural', hex: '#deb887' }],
    gallery: ['/img/servicios/cocina.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '3-4 semanas'
  },
  'cocina-en-u-premium': {
    id: 'cocina-en-u-premium',
    name: 'Cocina en U Premium',
    category: 'cocina',
    subcategory: 'paquetes-cocina',
    price: 'Desde $180,000',
    description: 'La cocina más completa con isla central opcional.',
    longDescription: 'Cocina premium en distribución U que maximiza espacio y funcionalidad. Acabados de lujo, herrajes premium y opción de isla central.',
    features: ['Distribución en U', 'Acabados premium', 'Isla opcional', 'Herrajes de lujo', 'Diseño personalizado'],
    dimensions: { sideA: '350 cm', sideB: '250 cm', sideC: '350 cm' },
    colors: [{ name: 'Blanco Premium', hex: '#ffffff' }, { name: 'Gris Antracita', hex: '#4a4a4a' }, { name: 'Madera Premium', hex: '#8b7355' }],
    gallery: ['/img/servicios/cocina.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '10-12 semanas',
    isPaquete: true
  },
  'gabinete-base-60cm': {
    id: 'gabinete-base-60cm',
    name: 'Gabinete Base 60cm',
    category: 'cocina',
    subcategory: 'gabinetes-inf',
    price: 'Desde $4,500',
    description: 'Gabinete inferior estándar con puerta y entrepaño.',
    longDescription: 'Gabinete base de 60cm con puerta y entrepaño interior ajustable. Compatible con todos los sistemas de cocina ARMUZA.',
    features: ['Puerta con bisagra', 'Entrepaño ajustable', 'Patas niveladoras', 'Compatible con cubiertas', 'Cierre suave'],
    dimensions: { width: '60 cm', depth: '58 cm', height: '85 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Gris', hex: '#808080' }, { name: 'Madera', hex: '#deb887' }],
    gallery: ['/img/servicios/cocina.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'gabinete-cajones-60cm': {
    id: 'gabinete-cajones-60cm',
    name: 'Gabinete Cajones 60cm',
    category: 'cocina',
    subcategory: 'gabinetes-inf',
    price: 'Desde $5,800',
    description: 'Gabinete con sistema de cajones de cierre suave.',
    longDescription: 'Gabinete inferior con 3 cajones de diferentes alturas. Sistema de cierre suave y guías de extensión total.',
    features: ['3 cajones', 'Cierre suave', 'Extensión total', 'Guías metálicas', 'Organizadores opcionales'],
    dimensions: { width: '60 cm', depth: '58 cm', height: '85 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Gris', hex: '#808080' }, { name: 'Madera', hex: '#deb887' }],
    gallery: ['/img/servicios/cocina.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'gabinete-esquinero': {
    id: 'gabinete-esquinero',
    name: 'Gabinete Esquinero',
    category: 'cocina',
    subcategory: 'gabinetes-inf',
    price: 'Desde $7,200',
    description: 'Aprovecha las esquinas con este gabinete giratorio.',
    longDescription: 'Gabinete esquinero con sistema giratorio tipo carrusel que facilita el acceso a todo el contenido. Maximiza el uso de esquinas.',
    features: ['Sistema giratorio', 'Fácil acceso', 'Maximiza espacio', 'Carrusel incluido', 'Puerta angular'],
    dimensions: { width: '90 cm', depth: '90 cm', height: '85 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Gris', hex: '#808080' }],
    gallery: ['/img/servicios/cocina.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '3-4 semanas'
  },
  'gabinete-superior-60cm': {
    id: 'gabinete-superior-60cm',
    name: 'Gabinete Superior 60cm',
    category: 'cocina',
    subcategory: 'gabinetes-sup',
    price: 'Desde $3,200',
    description: 'Gabinete de pared con dos entrepaños.',
    longDescription: 'Gabinete superior de 60cm con dos entrepaños ajustables. Ideal para almacenar vajilla, vasos y alimentos.',
    features: ['Dos entrepaños', 'Entrepaños ajustables', 'Bisagras de cierre suave', 'Fácil instalación', 'Interior melamínico'],
    dimensions: { width: '60 cm', depth: '35 cm', height: '70 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Gris', hex: '#808080' }, { name: 'Madera', hex: '#deb887' }],
    gallery: ['/img/servicios/cocina.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'gabinete-vitrina': {
    id: 'gabinete-vitrina',
    name: 'Gabinete Vitrina',
    category: 'cocina',
    subcategory: 'gabinetes-sup',
    price: 'Desde $4,500',
    description: 'Gabinete con puertas de vidrio para exhibir.',
    longDescription: 'Gabinete superior con puertas de vidrio que permite exhibir vajilla o accesorios decorativos mientras los protege.',
    features: ['Puertas de vidrio', 'Exhibición elegante', 'Vidrio templado', 'Entrepaños de vidrio', 'Bisagras premium'],
    dimensions: { width: '60 cm', depth: '35 cm', height: '70 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Negro', hex: '#1a1a1a' }],
    gallery: ['/img/servicios/cocina.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '3-4 semanas'
  },
  'gabinete-campana': {
    id: 'gabinete-campana',
    name: 'Gabinete Campana',
    category: 'cocina',
    subcategory: 'gabinetes-sup',
    price: 'Desde $3,800',
    description: 'Gabinete diseñado para ocultar la campana extractora.',
    longDescription: 'Gabinete decorativo que oculta la campana extractora manteniendo una línea uniforme en los gabinetes superiores.',
    features: ['Oculta campana', 'Diseño integrado', 'Ventilación adecuada', 'Línea uniforme', 'Varios tamaños'],
    dimensions: { width: '60/90 cm', depth: '35 cm', height: '70 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Gris', hex: '#808080' }, { name: 'Madera', hex: '#deb887' }],
    gallery: ['/img/servicios/cocina.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'alacena-sencilla': {
    id: 'alacena-sencilla',
    name: 'Alacena Sencilla',
    category: 'cocina',
    subcategory: 'alacenas',
    price: 'Desde $8,500',
    description: 'Alacena de piso a techo con múltiples entrepaños.',
    longDescription: 'Alacena alta con múltiples entrepaños ajustables para máximo almacenamiento. Ideal para despensa o almacenamiento general.',
    features: ['Piso a techo', 'Entrepaños ajustables', 'Puertas completas', 'Alta capacidad', 'Bisagras reforzadas'],
    dimensions: { width: '60 cm', depth: '40 cm', height: '220 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Gris', hex: '#808080' }],
    gallery: ['/img/servicios/cocina.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '3-4 semanas'
  },
  'alacena-doble': {
    id: 'alacena-doble',
    name: 'Alacena Doble',
    category: 'cocina',
    subcategory: 'alacenas',
    price: 'Desde $14,200',
    description: 'Alacena amplia con puertas dobles.',
    longDescription: 'Alacena de gran capacidad con puertas dobles. Interior configurable con entrepaños, cajones y canastas opcionales.',
    features: ['Puertas dobles', 'Gran capacidad', 'Interior configurable', 'Canastas opcionales', 'Iluminación opcional'],
    dimensions: { width: '90 cm', depth: '45 cm', height: '220 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Gris', hex: '#808080' }, { name: 'Madera', hex: '#deb887' }],
    gallery: ['/img/servicios/cocina.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '4-5 semanas'
  },
  'isla-con-barra': {
    id: 'isla-con-barra',
    name: 'Isla con Barra',
    category: 'cocina',
    subcategory: 'islas',
    price: 'Desde $28,000',
    description: 'Isla con extensión de barra para desayunador.',
    longDescription: 'Isla de cocina completa con extensión tipo barra para desayunador. Combina área de trabajo con espacio para comer.',
    features: ['Barra desayunador', 'Almacenamiento', 'Cubierta premium', 'Espacio para bancos', 'Múltiples funciones'],
    dimensions: { width: '180 cm', depth: '90 cm', height: '90/110 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Gris', hex: '#808080' }, { name: 'Madera', hex: '#deb887' }],
    gallery: ['/img/servicios/cocina.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '4-5 semanas'
  },
  'barra-desayunador': {
    id: 'barra-desayunador',
    name: 'Barra Desayunador',
    category: 'cocina',
    subcategory: 'barras',
    price: 'Desde $8,500',
    description: 'Barra de pared para desayunos rápidos.',
    longDescription: 'Barra tipo desayunador que se monta en pared. Ideal para comidas rápidas en cocinas pequeñas sin espacio para mesa.',
    features: ['Montaje en pared', 'Ahorra espacio', 'Cubierta resistente', 'Soporte oculto', 'Ideal para departamentos'],
    dimensions: { width: '120 cm', depth: '40 cm', height: '110 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Nogal', hex: '#5c4033' }, { name: 'Natural', hex: '#deb887' }],
    gallery: ['/img/servicios/cocina.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'barra-con-almacenaje': {
    id: 'barra-con-almacenaje',
    name: 'Barra con Almacenaje',
    category: 'cocina',
    subcategory: 'barras',
    price: 'Desde $12,500',
    description: 'Barra con repisas y cajones integrados.',
    longDescription: 'Barra desayunador con almacenamiento integrado. Incluye repisas para especias y cajones para cubiertos y servilletas.',
    features: ['Almacenamiento integrado', 'Repisas incluidas', 'Cajones', 'Diseño funcional', 'Estructura autoportante'],
    dimensions: { width: '140 cm', depth: '45 cm', height: '110 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Gris', hex: '#808080' }, { name: 'Madera', hex: '#deb887' }],
    gallery: ['/img/servicios/cocina.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '3-4 semanas'
  },
  'mueble-despensa-alto': {
    id: 'mueble-despensa-alto',
    name: 'Mueble Despensa Alto',
    category: 'cocina',
    subcategory: 'despensa',
    price: 'Desde $12,000',
    description: 'Despensa de piso a techo, máximo almacenamiento.',
    longDescription: 'Mueble despensa alto con múltiples niveles de almacenamiento. Perfecto para organizar alimentos, conservas y productos de cocina.',
    features: ['Piso a techo', 'Múltiples niveles', 'Puertas completas', 'Entrepaños ajustables', 'Alta capacidad'],
    dimensions: { width: '60 cm', depth: '45 cm', height: '220 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Gris', hex: '#808080' }],
    gallery: ['/img/servicios/cocina.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '3-4 semanas'
  },
  'despensa-con-canastas': {
    id: 'despensa-con-canastas',
    name: 'Despensa con Canastas',
    category: 'cocina',
    subcategory: 'despensa',
    price: 'Desde $16,500',
    description: 'Sistema de canastas extraíbles para fácil acceso.',
    longDescription: 'Despensa con sistema de canastas metálicas extraíbles que facilitan ver y acceder a todo el contenido. Máxima organización.',
    features: ['Canastas extraíbles', 'Fácil acceso', 'Guías de extensión total', 'Máxima visibilidad', 'Organización perfecta'],
    dimensions: { width: '60 cm', depth: '50 cm', height: '220 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Gris', hex: '#808080' }],
    gallery: ['/img/servicios/cocina.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '4-5 semanas'
  },
  'carro-de-cocina': {
    id: 'carro-de-cocina',
    name: 'Carro de Cocina',
    category: 'cocina',
    subcategory: 'auxiliares-cocina',
    price: 'Desde $5,500',
    description: 'Carro auxiliar con ruedas y cubierta de trabajo.',
    longDescription: 'Carro de cocina móvil con superficie de trabajo adicional. Incluye repisas y cajón para utensilios. Ruedas con freno.',
    features: ['Ruedas con freno', 'Superficie de trabajo', 'Repisas', 'Cajón para utensilios', 'Fácil de mover'],
    dimensions: { width: '80 cm', depth: '45 cm', height: '90 cm' },
    colors: [{ name: 'Blanco + Natural', hex: '#ffffff' }, { name: 'Negro + Natural', hex: '#1a1a1a' }],
    gallery: ['/img/servicios/cocina.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'repisas-de-cocina-set': {
    id: 'repisas-de-cocina-set',
    name: 'Repisas de Cocina Set',
    category: 'cocina',
    subcategory: 'auxiliares-cocina',
    price: 'Desde $3,200',
    description: 'Set de repisas flotantes para especias y utensilios.',
    longDescription: 'Set de 3 repisas flotantes diseñadas para cocina. Perfectas para especias, aceites, utensilios y decoración.',
    features: ['3 repisas incluidas', 'Herrajes ocultos', 'Fácil instalación', 'Resistentes a humedad', 'Diferentes tamaños'],
    dimensions: { small: '40 cm', medium: '60 cm', large: '80 cm', depth: '15 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Natural', hex: '#deb887' }, { name: 'Negro', hex: '#1a1a1a' }],
    gallery: ['/img/servicios/cocina.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '1-2 semanas'
  },
  // OFICINA - Más productos
  'escritorio-industrial': {
    id: 'escritorio-industrial',
    name: 'Escritorio Industrial',
    category: 'oficina',
    subcategory: 'escritorios',
    price: 'Desde $12,500',
    description: 'Estructura de metal con cubierta de madera maciza.',
    longDescription: 'Escritorio con estética industrial que combina una estructura robusta de metal negro con cubierta de madera maciza. Diseño que aporta personalidad a tu espacio de trabajo mientras ofrece durabilidad y funcionalidad.',
    features: [
      'Estructura de metal negro',
      'Cubierta de madera maciza',
      'Estilo industrial',
      'Alta resistencia',
      'Fácil montaje'
    ],
    dimensions: {
      width: '140 cm',
      depth: '70 cm',
      height: '75 cm'
    },
    colors: [
      { name: 'Roble + Negro', hex: '#deb887' },
      { name: 'Nogal + Negro', hex: '#5c4033' }
    ],
    gallery: [
      '/img/metal/servicio-metal.png',
      '/img/servicios/muebles.png'
    ],
    deliveryTime: '2-3 semanas'
  },
  'escritorio-en-l': {
    id: 'escritorio-en-l',
    name: 'Escritorio en L',
    category: 'oficina',
    subcategory: 'escritorios',
    price: 'Desde $16,000',
    description: 'Máximo espacio de trabajo en esquina.',
    longDescription: 'Escritorio en L diseñado para aprovechar esquinas y maximizar el espacio de trabajo. Ideal para profesionales que necesitan múltiples monitores o áreas de trabajo diferenciadas. Incluye pasacables integrado.',
    features: [
      'Diseño en L',
      'Máximo espacio de trabajo',
      'Pasacables integrado',
      'Superficie resistente',
      'Patas ajustables'
    ],
    dimensions: {
      sideA: '160 cm',
      sideB: '120 cm',
      depth: '60 cm',
      height: '75 cm'
    },
    colors: [
      { name: 'Blanco', hex: '#ffffff' },
      { name: 'Nogal', hex: '#5c4033' },
      { name: 'Negro', hex: '#1a1a1a' }
    ],
    gallery: [
      '/img/escritorios/cafe/mueblecafe.jpeg',
      '/img/escritorios/cafe/mueblecafe1.jpeg'
    ],
    deliveryTime: '3-4 semanas'
  },
  'librero-oficina-5-niveles': {
    id: 'librero-oficina-5-niveles',
    name: 'Librero Oficina 5 Niveles',
    category: 'oficina',
    subcategory: 'libreros-of',
    price: 'Desde $7,800',
    description: 'Librero profesional para documentos y libros.',
    longDescription: 'Librero de oficina con 5 niveles de repisas ajustables.',
    features: ['5 niveles de repisas', 'Repisas ajustables', 'Diseño profesional', 'Alta capacidad', 'Fácil montaje'],
    dimensions: { width: '80 cm', depth: '30 cm', height: '180 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Nogal', hex: '#5c4033' }, { name: 'Negro', hex: '#1a1a1a' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'estacion-de-trabajo-individual': {
    id: 'estacion-de-trabajo-individual',
    name: 'Estación de Trabajo Individual',
    category: 'oficina',
    subcategory: 'estaciones',
    price: 'Desde $14,500',
    description: 'Estación completa con almacenamiento integrado.',
    longDescription: 'Estación de trabajo completa que incluye escritorio, cajonera y librero integrados en un solo mueble eficiente.',
    features: ['Todo integrado', 'Cajonera incluida', 'Librero lateral', 'Pasacables', 'Diseño ergonómico'],
    dimensions: { width: '160 cm', depth: '70 cm', height: '145 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Nogal', hex: '#5c4033' }, { name: 'Gris', hex: '#808080' }],
    gallery: ['/img/escritorios/cafe/mueblecafe.jpeg', '/img/servicios/muebles.png'],
    deliveryTime: '3-4 semanas'
  },
  'estacion-doble': {
    id: 'estacion-doble',
    name: 'Estación Doble',
    category: 'oficina',
    subcategory: 'estaciones',
    price: 'Desde $24,000',
    description: 'Para dos personas, con división central.',
    longDescription: 'Estación de trabajo para dos personas con división central para privacidad. Ideal para oficinas compartidas o estudios.',
    features: ['Dos puestos de trabajo', 'División central', 'Pasacables doble', 'Cajoneras individuales', 'Diseño simétrico'],
    dimensions: { width: '280 cm', depth: '70 cm', height: '120 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Gris', hex: '#808080' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '4-5 semanas'
  },
  'librero-con-puertas': {
    id: 'librero-con-puertas',
    name: 'Librero con Puertas',
    category: 'oficina',
    subcategory: 'libreros-of',
    price: 'Desde $12,500',
    description: 'Librero con puertas inferiores para privacidad.',
    longDescription: 'Librero profesional con repisas abiertas superiores y gabinete con puertas en la parte inferior para documentos privados.',
    features: ['Repisas abiertas arriba', 'Puertas inferiores', 'Cerradura opcional', 'Repisas ajustables', 'Diseño ejecutivo'],
    dimensions: { width: '90 cm', depth: '35 cm', height: '200 cm' },
    colors: [{ name: 'Nogal', hex: '#5c4033' }, { name: 'Blanco', hex: '#ffffff' }, { name: 'Negro', hex: '#1a1a1a' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '3-4 semanas'
  },
  'archivero-3-gavetas': {
    id: 'archivero-3-gavetas',
    name: 'Archivero 3 Gavetas',
    category: 'oficina',
    subcategory: 'archiveros',
    price: 'Desde $6,500',
    description: 'Archivero metálico con cerradura.',
    longDescription: 'Archivero de metal con 3 gavetas tamaño carta/oficio. Sistema de cerradura central y guías de extensión total.',
    features: ['3 gavetas', 'Cerradura central', 'Extensión total', 'Tamaño carta/oficio', 'Estructura metálica'],
    dimensions: { width: '47 cm', depth: '60 cm', height: '100 cm' },
    colors: [{ name: 'Negro', hex: '#1a1a1a' }, { name: 'Gris', hex: '#808080' }, { name: 'Blanco', hex: '#ffffff' }],
    gallery: ['/img/metal/servicio-metal.png', '/img/servicios/muebles.png'],
    deliveryTime: '2-3 semanas'
  },
  'archivero-madera': {
    id: 'archivero-madera',
    name: 'Archivero Madera',
    category: 'oficina',
    subcategory: 'archiveros',
    price: 'Desde $8,200',
    description: 'Archivero de madera que combina con el escritorio.',
    longDescription: 'Archivero de madera con acabados que combinan con nuestra línea de escritorios. Elegante solución de archivo para oficinas ejecutivas.',
    features: ['Acabado madera', 'Combina con escritorios', '3 gavetas', 'Cerradura incluida', 'Guías metálicas'],
    dimensions: { width: '50 cm', depth: '55 cm', height: '100 cm' },
    colors: [{ name: 'Nogal', hex: '#5c4033' }, { name: 'Blanco', hex: '#ffffff' }, { name: 'Natural', hex: '#deb887' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '3-4 semanas'
  },
  'credenza-oficina': {
    id: 'credenza-oficina',
    name: 'Credenza Oficina',
    category: 'oficina',
    subcategory: 'credenzas-of',
    price: 'Desde $12,500',
    description: 'Credenza profesional con múltiples compartimentos.',
    longDescription: 'Credenza de oficina con combinación de puertas y cajones. Ideal detrás del escritorio para almacenamiento adicional.',
    features: ['Puertas y cajones', 'Múltiples compartimentos', 'Superficie de trabajo', 'Diseño profesional', 'Cerradura opcional'],
    dimensions: { width: '180 cm', depth: '45 cm', height: '75 cm' },
    colors: [{ name: 'Nogal', hex: '#5c4033' }, { name: 'Blanco', hex: '#ffffff' }, { name: 'Gris', hex: '#808080' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '3-4 semanas'
  },
  'credenza-ejecutiva': {
    id: 'credenza-ejecutiva',
    name: 'Credenza Ejecutiva',
    category: 'oficina',
    subcategory: 'credenzas-of',
    price: 'Desde $18,000',
    description: 'Acabados premium para oficinas ejecutivas.',
    longDescription: 'Credenza de lujo con acabados premium y herrajes de alta calidad. Diseñada para oficinas de dirección y salas de juntas.',
    features: ['Acabados premium', 'Herrajes de lujo', 'Pasacables oculto', 'Diseño ejecutivo', 'Múltiple almacenamiento'],
    dimensions: { width: '200 cm', depth: '50 cm', height: '75 cm' },
    colors: [{ name: 'Nogal Executive', hex: '#5c4033' }, { name: 'Negro', hex: '#1a1a1a' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '4-5 semanas'
  },
  'cajonera-movil-3-cajones': {
    id: 'cajonera-movil-3-cajones',
    name: 'Cajonera Móvil 3 Cajones',
    category: 'oficina',
    subcategory: 'cajoneras',
    price: 'Desde $4,200',
    description: 'Cajonera con ruedas, cabe bajo el escritorio.',
    longDescription: 'Cajonera móvil con 3 cajones que cabe bajo cualquier escritorio. Ruedas con freno y cerradura central.',
    features: ['3 cajones', 'Ruedas con freno', 'Cerradura central', 'Cabe bajo escritorio', 'Guías metálicas'],
    dimensions: { width: '42 cm', depth: '55 cm', height: '60 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Negro', hex: '#1a1a1a' }, { name: 'Nogal', hex: '#5c4033' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'cajonera-fija': {
    id: 'cajonera-fija',
    name: 'Cajonera Fija',
    category: 'oficina',
    subcategory: 'cajoneras',
    price: 'Desde $3,500',
    description: 'Cajonera sin ruedas, más estable.',
    longDescription: 'Cajonera fija de 3 cajones. Sin ruedas para mayor estabilidad. Ideal para colocar junto al escritorio.',
    features: ['3 cajones', 'Sin ruedas', 'Mayor estabilidad', 'Cerradura opcional', 'Guías de extensión'],
    dimensions: { width: '42 cm', depth: '55 cm', height: '60 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Nogal', hex: '#5c4033' }, { name: 'Gris', hex: '#808080' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'mesa-juntas-6-personas': {
    id: 'mesa-juntas-6-personas',
    name: 'Mesa Juntas 6 Personas',
    category: 'oficina',
    subcategory: 'mesas-juntas',
    price: 'Desde $18,000',
    description: 'Mesa de reuniones para equipos pequeños.',
    longDescription: 'Mesa de juntas para 6 personas ideal para salas de reuniones pequeñas. Pasacables central opcional.',
    features: ['Capacidad 6 personas', 'Pasacables opcional', 'Diseño profesional', 'Patas estables', 'Acabado resistente'],
    dimensions: { width: '180 cm', depth: '100 cm', height: '76 cm' },
    colors: [{ name: 'Nogal', hex: '#5c4033' }, { name: 'Blanco', hex: '#ffffff' }, { name: 'Negro', hex: '#1a1a1a' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '3-4 semanas'
  },
  'mesa-juntas-10-personas': {
    id: 'mesa-juntas-10-personas',
    name: 'Mesa Juntas 10 Personas',
    category: 'oficina',
    subcategory: 'mesas-juntas',
    price: 'Desde $32,000',
    description: 'Mesa ejecutiva para reuniones importantes.',
    longDescription: 'Mesa de juntas de gran formato para salas de conferencias. Diseño ejecutivo con pasacables integrados y acabados premium.',
    features: ['Capacidad 10 personas', 'Pasacables integrados', 'Acabados premium', 'Diseño ejecutivo', 'Base reforzada'],
    dimensions: { width: '300 cm', depth: '120 cm', height: '76 cm' },
    colors: [{ name: 'Nogal Executive', hex: '#5c4033' }, { name: 'Negro', hex: '#1a1a1a' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '5-6 semanas'
  },
  // INFANTIL - Productos
  'cama-individual-infantil': {
    id: 'cama-individual-infantil',
    name: 'Cama Individual Infantil',
    category: 'infantil',
    subcategory: 'camas-inf',
    price: 'Desde $8,500',
    description: 'Cama segura con barandales opcionales.',
    longDescription: 'Cama individual diseñada especialmente para niños. Incluye barandales de seguridad opcionales para evitar caídas. Altura adecuada para que los pequeños suban y bajen fácilmente. Fabricada con materiales seguros y resistentes.',
    features: [
      'Barandales de seguridad opcionales',
      'Altura adecuada para niños',
      'Materiales seguros',
      'Bordes redondeados',
      'Fácil limpieza'
    ],
    dimensions: {
      width: '100 cm',
      depth: '190 cm',
      height: '30 cm'
    },
    colors: [
      { name: 'Blanco', hex: '#ffffff' },
      { name: 'Natural', hex: '#deb887' },
      { name: 'Azul Cielo', hex: '#87ceeb' },
      { name: 'Rosa', hex: '#ffb6c1' }
    ],
    gallery: [
      '/img/servicios/muebles.png',
      '/img/carpinteria/carpinteria.png'
    ],
    deliveryTime: '2-3 semanas'
  },
  'litera-basica': {
    id: 'litera-basica',
    name: 'Litera Básica',
    category: 'infantil',
    subcategory: 'literas',
    price: 'Desde $16,500',
    description: 'Litera clásica con escalera lateral.',
    longDescription: 'Litera clásica de dos camas con escalera lateral segura. Estructura robusta fabricada en madera de pino. Incluye barandales de seguridad en la cama superior y escalera con peldaños anchos.',
    features: [
      'Dos camas individuales',
      'Escalera lateral segura',
      'Barandales de seguridad',
      'Estructura de madera de pino',
      'Soporta hasta 90kg por cama'
    ],
    dimensions: {
      width: '100 cm',
      depth: '200 cm',
      height: '170 cm'
    },
    colors: [
      { name: 'Blanco', hex: '#ffffff' },
      { name: 'Natural', hex: '#deb887' },
      { name: 'Gris', hex: '#808080' }
    ],
    gallery: [
      '/img/servicios/muebles.png',
      '/img/carpinteria/carpinteria.png'
    ],
    deliveryTime: '3-4 semanas'
  },
  'escritorio-infantil': {
    id: 'escritorio-infantil',
    name: 'Escritorio Infantil',
    category: 'infantil',
    subcategory: 'escritorios-inf',
    price: 'Desde $5,500',
    description: 'Escritorio a la altura perfecta para niños.',
    longDescription: 'Escritorio diseñado ergonómicamente para niños.',
    features: ['Altura ajustable', 'Superficie amplia', 'Portalápices integrado', 'Cajón para útiles', 'Bordes redondeados'],
    dimensions: { width: '100 cm', depth: '50 cm', height: '55-70 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Natural', hex: '#deb887' }, { name: 'Azul', hex: '#4169e1' }, { name: 'Rosa', hex: '#ff69b4' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'cama-tipo-nido': {
    id: 'cama-tipo-nido',
    name: 'Cama Tipo Nido',
    category: 'infantil',
    subcategory: 'camas-inf',
    price: 'Desde $14,500',
    description: 'Cama con cama auxiliar deslizable.',
    longDescription: 'Cama individual con segunda cama oculta que se desliza. Perfecta para pijamadas o visitas de familiares.',
    features: ['Cama auxiliar oculta', 'Sistema deslizable', 'Dos camas en una', 'Ahorra espacio', 'Estructura segura'],
    dimensions: { width: '100 cm', depth: '200 cm', height: '50 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Natural', hex: '#deb887' }, { name: 'Gris', hex: '#808080' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '3-4 semanas'
  },
  'cama-tematica': {
    id: 'cama-tematica',
    name: 'Cama Temática',
    category: 'infantil',
    subcategory: 'camas-inf',
    price: 'Desde $18,000',
    description: 'Camas con diseños divertidos (auto, casa, etc.).',
    longDescription: 'Camas con diseños temáticos que convierten la hora de dormir en una aventura. Disponibles en forma de auto, casa, barco y más.',
    features: ['Diseños divertidos', 'Materiales seguros', 'Pintura no tóxica', 'Estructura resistente', 'Personalizable'],
    dimensions: { width: 'Variable', depth: '200 cm', height: 'Variable' },
    colors: [{ name: 'Rojo', hex: '#ff0000' }, { name: 'Azul', hex: '#4169e1' }, { name: 'Rosa', hex: '#ff69b4' }, { name: 'Verde', hex: '#32cd32' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '4-5 semanas'
  },
  'litera-con-escritorio': {
    id: 'litera-con-escritorio',
    name: 'Litera con Escritorio',
    category: 'infantil',
    subcategory: 'literas',
    price: 'Desde $24,000',
    description: 'Cama arriba, escritorio abajo. Ideal para espacios pequeños.',
    longDescription: 'Solución inteligente para recámaras pequeñas. Cama en la parte superior y área de estudio completa en la inferior.',
    features: ['Cama superior', 'Escritorio inferior', 'Ahorra espacio', 'Escalera segura', 'Estantería incluida'],
    dimensions: { width: '100 cm', depth: '200 cm', height: '180 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Natural', hex: '#deb887' }, { name: 'Gris', hex: '#808080' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '4-5 semanas'
  },
  'litera-triple': {
    id: 'litera-triple',
    name: 'Litera Triple',
    category: 'infantil',
    subcategory: 'literas',
    price: 'Desde $28,000',
    description: 'Tres camas en estructura compacta.',
    longDescription: 'Litera de tres niveles para familias numerosas. Estructura reforzada con barandales de seguridad en todas las camas superiores.',
    features: ['Tres camas', 'Estructura compacta', 'Barandales de seguridad', 'Escalera amplia', 'Soporta 90kg por cama'],
    dimensions: { width: '100 cm', depth: '200 cm', height: '220 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Natural', hex: '#deb887' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '4-5 semanas'
  },
  'escritorio-con-repisa': {
    id: 'escritorio-con-repisa',
    name: 'Escritorio con Repisa',
    category: 'infantil',
    subcategory: 'escritorios-inf',
    price: 'Desde $7,800',
    description: 'Incluye repisa superior para útiles.',
    longDescription: 'Escritorio infantil con repisa superior para organizar libros, útiles y decoración. Diseño que fomenta el orden.',
    features: ['Repisa superior', 'Organización fácil', 'Cajón incluido', 'Bordes seguros', 'Altura adecuada'],
    dimensions: { width: '110 cm', depth: '55 cm', height: '120 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Natural', hex: '#deb887' }, { name: 'Azul', hex: '#4169e1' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'librero-infantil-bajo': {
    id: 'librero-infantil-bajo',
    name: 'Librero Infantil Bajo',
    category: 'infantil',
    subcategory: 'libreros-inf',
    price: 'Desde $4,200',
    description: 'Altura accesible para los pequeños.',
    longDescription: 'Librero de altura baja para que los niños accedan fácilmente a sus libros y juguetes. Fomenta la independencia y el orden.',
    features: ['Altura accesible', 'Fomenta independencia', 'Bordes redondeados', 'Estable y seguro', 'Colores divertidos'],
    dimensions: { width: '80 cm', depth: '30 cm', height: '80 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Natural', hex: '#deb887' }, { name: 'Colores', hex: '#4169e1' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'librero-estanteria': {
    id: 'librero-estanteria',
    name: 'Librero Estantería',
    category: 'infantil',
    subcategory: 'libreros-inf',
    price: 'Desde $5,800',
    description: 'Estantería abierta para libros y juguetes.',
    longDescription: 'Estantería abierta con varios niveles para organizar libros, juguetes y objetos decorativos. Diseño abierto que facilita el acceso.',
    features: ['Diseño abierto', 'Varios niveles', 'Fácil acceso', 'Versátil', 'Estructura estable'],
    dimensions: { width: '90 cm', depth: '30 cm', height: '120 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Natural', hex: '#deb887' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'juguetero-con-cajas': {
    id: 'juguetero-con-cajas',
    name: 'Juguetero con Cajas',
    category: 'infantil',
    subcategory: 'jugueteros',
    price: 'Desde $4,800',
    description: 'Organizador con cajas de colores.',
    longDescription: 'Organizador de juguetes con cajas de colores removibles. Los niños pueden identificar fácilmente dónde guardar cada tipo de juguete.',
    features: ['Cajas de colores', 'Cajas removibles', 'Fácil organización', 'Enseña orden', 'Estructura segura'],
    dimensions: { width: '100 cm', depth: '35 cm', height: '80 cm' },
    colors: [{ name: 'Blanco + Colores', hex: '#ffffff' }, { name: 'Natural + Colores', hex: '#deb887' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'baul-juguetero': {
    id: 'baul-juguetero',
    name: 'Baúl Juguetero',
    category: 'infantil',
    subcategory: 'jugueteros',
    price: 'Desde $3,500',
    description: 'Baúl amplio con tapa segura.',
    longDescription: 'Baúl grande para guardar juguetes con sistema de bisagra segura que evita que la tapa caiga sobre los dedos.',
    features: ['Tapa con bisagra segura', 'Gran capacidad', 'Puede usarse como asiento', 'Diseño divertido', 'Ruedas opcionales'],
    dimensions: { width: '80 cm', depth: '45 cm', height: '45 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Natural', hex: '#deb887' }, { name: 'Colores', hex: '#ff69b4' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'closet-infantil-abierto': {
    id: 'closet-infantil-abierto',
    name: 'Closet Infantil Abierto',
    category: 'infantil',
    subcategory: 'closets-inf',
    price: 'Desde $8,500',
    description: 'Sistema abierto a altura de niños.',
    longDescription: 'Closet abierto diseñado a la altura de los niños para que puedan elegir su ropa y guardarla ellos mismos.',
    features: ['Altura accesible', 'Barras bajas', 'Repisas para zapatos', 'Fomenta independencia', 'Fácil organización'],
    dimensions: { width: '120 cm', depth: '45 cm', height: '140 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Natural', hex: '#deb887' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '3-4 semanas'
  },
  'armario-infantil': {
    id: 'armario-infantil',
    name: 'Armario Infantil',
    category: 'infantil',
    subcategory: 'closets-inf',
    price: 'Desde $12,000',
    description: 'Armario con puertas y cajones inferiores.',
    longDescription: 'Armario completo con puertas, barra para colgar ropa y cajones inferiores. Diseño seguro con sistema de anti-vuelco.',
    features: ['Puertas con cierre suave', 'Cajones inferiores', 'Barra para ropa', 'Sistema anti-vuelco', 'Diseño seguro'],
    dimensions: { width: '100 cm', depth: '50 cm', height: '180 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Natural', hex: '#deb887' }, { name: 'Gris', hex: '#808080' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '3-4 semanas'
  },
  'sistema-modular-infantil': {
    id: 'sistema-modular-infantil',
    name: 'Sistema Modular Infantil',
    category: 'infantil',
    subcategory: 'modulares-inf',
    price: 'Desde $6,500',
    description: 'Cubos de colores configurables.',
    longDescription: 'Sistema de cubos de colores que los niños pueden ayudar a configurar. Fomenta la creatividad y mantiene el orden.',
    features: ['Cubos de colores', 'Configuración libre', 'Fomenta creatividad', 'Seguros y estables', 'Conectores incluidos'],
    dimensions: { perCube: '35 x 35 x 35 cm' },
    colors: [{ name: 'Multicolor', hex: '#ff69b4' }, { name: 'Pasteles', hex: '#87ceeb' }, { name: 'Blanco + Color', hex: '#ffffff' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'estanteria-escalera-infantil': {
    id: 'estanteria-escalera-infantil',
    name: 'Estantería Escalera Infantil',
    category: 'infantil',
    subcategory: 'modulares-inf',
    price: 'Desde $5,200',
    description: 'Estantería tipo escalera, segura y divertida.',
    longDescription: 'Estantería con forma de escalera con repisas de diferentes tamaños. Diseño seguro con sistema anti-vuelco incluido.',
    features: ['Diseño escalera', 'Sistema anti-vuelco', 'Repisas variadas', 'Colores divertidos', 'Fácil montaje'],
    dimensions: { width: '70 cm', depth: '30 cm', height: '120 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Natural', hex: '#deb887' }, { name: 'Colores', hex: '#32cd32' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  // RECIBIDOR - Productos
  'consola-entrada-slim': {
    id: 'consola-entrada-slim',
    name: 'Consola Entrada Slim',
    category: 'recibidor',
    subcategory: 'consolas-rec',
    price: 'Desde $6,500',
    description: 'Consola delgada perfecta para pasillos.',
    longDescription: 'Consola ultra delgada diseñada para pasillos y entradas estrechas. A pesar de su perfil compacto, ofrece superficie suficiente para llaves, correo y objetos decorativos. Incluye repisa inferior para almacenamiento adicional.',
    features: [
      'Perfil ultra delgado',
      'Repisa inferior',
      'Ideal para pasillos',
      'Fácil montaje',
      'Diseño elegante'
    ],
    dimensions: {
      width: '100 cm',
      depth: '25 cm',
      height: '80 cm'
    },
    colors: [
      { name: 'Blanco', hex: '#ffffff' },
      { name: 'Nogal', hex: '#5c4033' },
      { name: 'Negro', hex: '#1a1a1a' }
    ],
    gallery: [
      '/img/servicios/muebles.png',
      '/img/carpinteria/carpinteria.png'
    ],
    deliveryTime: '2-3 semanas'
  },
  'zapatera-12-pares': {
    id: 'zapatera-12-pares',
    name: 'Zapatera 12 Pares',
    category: 'recibidor',
    subcategory: 'zapateras',
    price: 'Desde $4,200',
    description: 'Zapatera compacta para entrada.',
    longDescription: 'Zapatera compacta con capacidad para 12 pares de zapatos.',
    features: ['Capacidad 12 pares', 'Puerta abatible', 'Diseño compacto', 'Mantiene orden', 'Fácil acceso'],
    dimensions: { width: '60 cm', depth: '20 cm', height: '100 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Nogal', hex: '#5c4033' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'consola-con-cajones': {
    id: 'consola-con-cajones',
    name: 'Consola con Cajones',
    category: 'recibidor',
    subcategory: 'consolas-rec',
    price: 'Desde $9,200',
    description: 'Consola con almacenamiento para llaves y más.',
    longDescription: 'Consola de entrada con cajones para organizar llaves, cartas y pequeños objetos. Mantén tu entrada ordenada y funcional.',
    features: ['Cajones organizadores', 'Superficie amplia', 'Diseño elegante', 'Repisa inferior', 'Fácil montaje'],
    dimensions: { width: '110 cm', depth: '35 cm', height: '85 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Nogal', hex: '#5c4033' }, { name: 'Gris', hex: '#808080' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'consola-industrial-recibidor': {
    id: 'consola-industrial-recibidor',
    name: 'Consola Industrial',
    category: 'recibidor',
    subcategory: 'consolas-rec',
    price: 'Desde $8,500',
    description: 'Metal y madera, estilo loft.',
    longDescription: 'Consola de estilo industrial con estructura de metal y superficie de madera. Perfecta para entradas con estilo contemporáneo.',
    features: ['Estructura de metal', 'Superficie de madera', 'Estilo industrial', 'Resistente', 'Fácil limpieza'],
    dimensions: { width: '100 cm', depth: '30 cm', height: '80 cm' },
    colors: [{ name: 'Negro + Natural', hex: '#1a1a1a' }, { name: 'Negro + Nogal', hex: '#5c4033' }],
    gallery: ['/img/metal/servicio-metal.png', '/img/servicios/muebles.png'],
    deliveryTime: '2-3 semanas'
  },
  'zapatera-con-banca': {
    id: 'zapatera-con-banca',
    name: 'Zapatera con Banca',
    category: 'recibidor',
    subcategory: 'zapateras',
    price: 'Desde $6,800',
    description: 'Banca para sentarse + zapatera abajo.',
    longDescription: 'Mueble 2 en 1: banca cómoda para sentarte mientras te pones los zapatos y zapatera oculta en la parte inferior.',
    features: ['Doble función', 'Banca acolchada', 'Zapatera oculta', 'Diseño práctico', 'Estructura resistente'],
    dimensions: { width: '100 cm', depth: '40 cm', height: '50 cm' },
    colors: [{ name: 'Blanco + Gris', hex: '#ffffff' }, { name: 'Nogal + Beige', hex: '#5c4033' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'zapatera-alta-30-pares': {
    id: 'zapatera-alta-30-pares',
    name: 'Zapatera Alta 30 Pares',
    category: 'recibidor',
    subcategory: 'zapateras',
    price: 'Desde $8,500',
    description: 'Máxima capacidad en espacio vertical.',
    longDescription: 'Zapatera alta que aprovecha el espacio vertical para almacenar hasta 30 pares de zapatos. Puertas que ocultan el contenido.',
    features: ['Capacidad 30 pares', 'Aprovecha altura', 'Puertas completas', 'Entrepaños ajustables', 'Diseño esbelto'],
    dimensions: { width: '70 cm', depth: '25 cm', height: '180 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Nogal', hex: '#5c4033' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '3-4 semanas'
  },
  'banca-recibidor': {
    id: 'banca-recibidor',
    name: 'Banca Recibidor',
    category: 'recibidor',
    subcategory: 'bancas-rec',
    price: 'Desde $5,500',
    description: 'Banca elegante para entrada.',
    longDescription: 'Banca de entrada elegante para sentarse cómodamente mientras te cambias los zapatos. Diseño que complementa la decoración.',
    features: ['Diseño elegante', 'Asiento cómodo', 'Patas estables', 'Fácil limpieza', 'Varios estilos'],
    dimensions: { width: '100 cm', depth: '40 cm', height: '45 cm' },
    colors: [{ name: 'Natural', hex: '#deb887' }, { name: 'Blanco', hex: '#ffffff' }, { name: 'Nogal', hex: '#5c4033' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'banca-con-almacenaje-recibidor': {
    id: 'banca-con-almacenaje-recibidor',
    name: 'Banca con Almacenaje',
    category: 'recibidor',
    subcategory: 'bancas-rec',
    price: 'Desde $7,200',
    description: 'Banca con compartimentos ocultos.',
    longDescription: 'Banca de entrada con almacenamiento oculto bajo el asiento. Perfecta para guardar guantes, bufandas y accesorios de temporada.',
    features: ['Almacenamiento oculto', 'Tapa con bisagras', 'Asiento acolchado', 'Gran capacidad', 'Diseño elegante'],
    dimensions: { width: '110 cm', depth: '45 cm', height: '48 cm' },
    colors: [{ name: 'Blanco + Gris', hex: '#ffffff' }, { name: 'Nogal + Beige', hex: '#5c4033' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'perchero-de-pared': {
    id: 'perchero-de-pared',
    name: 'Perchero de Pared',
    category: 'recibidor',
    subcategory: 'percheros',
    price: 'Desde $2,200',
    description: 'Perchero montado en pared con ganchos.',
    longDescription: 'Perchero de pared con múltiples ganchos para abrigos, bolsas y accesorios. Diseño minimalista que ahorra espacio.',
    features: ['Múltiples ganchos', 'Montaje en pared', 'Ahorra espacio', 'Diseño minimalista', 'Fácil instalación'],
    dimensions: { width: '60 cm', depth: '8 cm', height: '15 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Negro', hex: '#1a1a1a' }, { name: 'Natural', hex: '#deb887' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '1-2 semanas'
  },
  'mueble-recibidor-con-perchero': {
    id: 'mueble-recibidor-con-perchero',
    name: 'Mueble Recibidor con Perchero',
    category: 'recibidor',
    subcategory: 'percheros',
    price: 'Desde $12,500',
    description: 'Mueble completo: perchero + espejo + repisa.',
    longDescription: 'Centro de organización completo para la entrada. Incluye perchero, espejo, repisa y cajón. Todo lo que necesitas en un solo mueble.',
    features: ['Todo en uno', 'Perchero integrado', 'Espejo incluido', 'Repisa y cajón', 'Diseño completo'],
    dimensions: { width: '90 cm', depth: '35 cm', height: '180 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Nogal', hex: '#5c4033' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '3-4 semanas'
  },
  'perchero-de-pie': {
    id: 'perchero-de-pie',
    name: 'Perchero de Pie',
    category: 'recibidor',
    subcategory: 'percheros',
    price: 'Desde $3,800',
    description: 'Perchero independiente de madera.',
    longDescription: 'Perchero de pie independiente que no requiere instalación. Diseño elegante con múltiples ganchos a diferentes alturas.',
    features: ['No requiere instalación', 'Múltiples ganchos', 'Base estable', 'Diseño elegante', 'Fácil de mover'],
    dimensions: { diameter: '45 cm', height: '180 cm' },
    colors: [{ name: 'Natural', hex: '#deb887' }, { name: 'Blanco', hex: '#ffffff' }, { name: 'Negro', hex: '#1a1a1a' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'organizador-entrada-compacto': {
    id: 'organizador-entrada-compacto',
    name: 'Organizador Entrada Compacto',
    category: 'recibidor',
    subcategory: 'organizadores',
    price: 'Desde $5,800',
    description: 'Todo en uno: llaves, cartas, llaves.',
    longDescription: 'Organizador compacto de pared con compartimentos para llaves, cartas, celular y pequeños objetos. Mantén todo a la mano.',
    features: ['Múltiples compartimentos', 'Porta llaves', 'Bandeja para celular', 'Ganchos incluidos', 'Montaje en pared'],
    dimensions: { width: '50 cm', depth: '12 cm', height: '35 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Nogal', hex: '#5c4033' }, { name: 'Natural', hex: '#deb887' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '1-2 semanas'
  },
  'panel-organizador': {
    id: 'panel-organizador',
    name: 'Panel Organizador',
    category: 'recibidor',
    subcategory: 'organizadores',
    price: 'Desde $4,200',
    description: 'Panel de pared con ganchos y repisas.',
    longDescription: 'Panel de pared modular con ganchos, repisas y accesorios configurables. Organiza la entrada a tu manera.',
    features: ['Sistema modular', 'Ganchos movibles', 'Repisas ajustables', 'Personalizable', 'Fácil instalación'],
    dimensions: { width: '80 cm', depth: '10 cm', height: '60 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Natural', hex: '#deb887' }, { name: 'Negro', hex: '#1a1a1a' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  // ALMACENAMIENTO - Productos
  'estanteria-metalica-5-niveles': {
    id: 'estanteria-metalica-5-niveles',
    name: 'Estantería Metálica 5 Niveles',
    category: 'almacenamiento',
    subcategory: 'estanterias',
    price: 'Desde $4,500',
    description: 'Estantería resistente para garaje o bodega.',
    longDescription: 'Estantería metálica de uso pesado con 5 niveles ajustables. Ideal para garajes, bodegas y áreas de almacenamiento. Cada nivel soporta hasta 150kg. Acabado en pintura epóxica resistente a la corrosión.',
    features: [
      '5 niveles ajustables',
      'Capacidad 150kg por nivel',
      'Pintura epóxica anticorrosión',
      'Uso pesado',
      'Fácil montaje'
    ],
    dimensions: {
      width: '90 cm',
      depth: '45 cm',
      height: '180 cm'
    },
    colors: [
      { name: 'Gris Industrial', hex: '#808080' },
      { name: 'Negro', hex: '#1a1a1a' }
    ],
    gallery: [
      '/img/metal/servicio-metal.png',
      '/img/servicios/muebles.png'
    ],
    deliveryTime: '1-2 semanas'
  },
  'armario-multiusos': {
    id: 'armario-multiusos',
    name: 'Armario Multiusos',
    category: 'almacenamiento',
    subcategory: 'armarios',
    price: 'Desde $10,500',
    description: 'Armario versátil con repisas y barras.',
    longDescription: 'Armario multiusos que se adapta a diferentes necesidades.',
    features: ['Repisas ajustables', 'Barra para colgar', 'Puertas con cerradura', 'Versatilidad total', 'Alta capacidad'],
    dimensions: { width: '90 cm', depth: '50 cm', height: '180 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Gris', hex: '#808080' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'estanteria-madera-industrial': {
    id: 'estanteria-madera-industrial',
    name: 'Estantería Madera Industrial',
    category: 'almacenamiento',
    subcategory: 'estanterias',
    price: 'Desde $8,500',
    description: 'Estilo industrial con estructura de metal.',
    longDescription: 'Estantería de estilo industrial combinando estructura metálica con repisas de madera. Ideal para espacios modernos que necesitan almacenamiento visible.',
    features: ['Estructura de metal', 'Repisas de madera', 'Estilo industrial', 'Alta resistencia', 'Fácil montaje'],
    dimensions: { width: '100 cm', depth: '40 cm', height: '180 cm' },
    colors: [{ name: 'Negro + Natural', hex: '#1a1a1a' }, { name: 'Negro + Nogal', hex: '#5c4033' }],
    gallery: ['/img/metal/servicio-metal.png', '/img/servicios/muebles.png'],
    deliveryTime: '2-3 semanas'
  },
  'rack-modular': {
    id: 'rack-modular',
    name: 'Rack Modular',
    category: 'almacenamiento',
    subcategory: 'estanterias',
    price: 'Desde $6,200',
    description: 'Sistema modular expandible.',
    longDescription: 'Sistema de rack modular que puedes expandir añadiendo más módulos. Perfecto para bodegas que crecen contigo.',
    features: ['Sistema modular', 'Expandible', 'Fácil conexión', 'Alta resistencia', 'Configuración libre'],
    dimensions: { width: '90 cm', depth: '40 cm', height: '180 cm' },
    colors: [{ name: 'Gris', hex: '#808080' }, { name: 'Negro', hex: '#1a1a1a' }],
    gallery: ['/img/metal/servicio-metal.png', '/img/servicios/muebles.png'],
    deliveryTime: '2-3 semanas'
  },
  'gabinete-almacenaje-alto': {
    id: 'gabinete-almacenaje-alto',
    name: 'Gabinete Almacenaje Alto',
    category: 'almacenamiento',
    subcategory: 'gabinetes-alm',
    price: 'Desde $8,500',
    description: 'Gabinete con puertas para ocultar contenido.',
    longDescription: 'Gabinete alto con puertas que ocultan el contenido para una apariencia ordenada. Múltiples repisas interiores ajustables.',
    features: ['Puertas completas', 'Oculta contenido', 'Repisas ajustables', 'Diseño limpio', 'Cerradura opcional'],
    dimensions: { width: '80 cm', depth: '45 cm', height: '180 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Gris', hex: '#808080' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '3-4 semanas'
  },
  'gabinete-herramientas': {
    id: 'gabinete-herramientas',
    name: 'Gabinete Herramientas',
    category: 'almacenamiento',
    subcategory: 'gabinetes-alm',
    price: 'Desde $12,000',
    description: 'Ideal para taller o garaje.',
    longDescription: 'Gabinete diseñado para talleres y garajes. Con compartimentos para herramientas, cajones para tornillería y superficie de trabajo.',
    features: ['Diseño para taller', 'Cajones para tornillería', 'Superficie de trabajo', 'Panel perforado', 'Alta resistencia'],
    dimensions: { width: '120 cm', depth: '50 cm', height: '180 cm' },
    colors: [{ name: 'Gris Industrial', hex: '#808080' }, { name: 'Negro', hex: '#1a1a1a' }],
    gallery: ['/img/metal/servicio-metal.png', '/img/servicios/muebles.png'],
    deliveryTime: '3-4 semanas'
  },
  'armario-lavanderia': {
    id: 'armario-lavanderia',
    name: 'Armario Lavandería',
    category: 'almacenamiento',
    subcategory: 'armarios',
    price: 'Desde $12,800',
    description: 'Diseñado para área de lavado.',
    longDescription: 'Armario diseñado específicamente para cuartos de lavado. Con espacio para detergentes, canastas de ropa y productos de limpieza.',
    features: ['Diseño para lavandería', 'Espacio para canastas', 'Resistente a humedad', 'Repisas ajustables', 'Barra para tender'],
    dimensions: { width: '100 cm', depth: '45 cm', height: '200 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Gris', hex: '#808080' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '3-4 semanas'
  },
  'baul-de-madera-grande': {
    id: 'baul-de-madera-grande',
    name: 'Baúl de Madera Grande',
    category: 'almacenamiento',
    subcategory: 'baules',
    price: 'Desde $5,500',
    description: 'Baúl decorativo con almacenamiento.',
    longDescription: 'Baúl de madera que sirve como almacenamiento y elemento decorativo. Puede usarse como mesa de centro o pie de cama.',
    features: ['Decorativo y funcional', 'Doble uso', 'Madera sólida', 'Bisagras de seguridad', 'Acabados vintage'],
    dimensions: { width: '90 cm', depth: '45 cm', height: '45 cm' },
    colors: [{ name: 'Natural', hex: '#deb887' }, { name: 'Envejecido', hex: '#a0826d' }, { name: 'Blanco Vintage', hex: '#f5f5f0' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'baul-con-ruedas': {
    id: 'baul-con-ruedas',
    name: 'Baúl con Ruedas',
    category: 'almacenamiento',
    subcategory: 'baules',
    price: 'Desde $6,800',
    description: 'Fácil de mover, ideal bajo cama.',
    longDescription: 'Baúl bajo con ruedas diseñado para deslizarse bajo la cama. Maximiza el espacio de almacenamiento en recámaras pequeñas.',
    features: ['Con ruedas', 'Cabe bajo cama', 'Fácil de mover', 'Gran capacidad', 'Tapa con asa'],
    dimensions: { width: '100 cm', depth: '60 cm', height: '25 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Gris', hex: '#808080' }, { name: 'Natural', hex: '#deb887' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'mueble-multiusos-compacto': {
    id: 'mueble-multiusos-compacto',
    name: 'Mueble Multiusos Compacto',
    category: 'almacenamiento',
    subcategory: 'multiusos',
    price: 'Desde $7,200',
    description: 'Combina repisas, cajones y puertas.',
    longDescription: 'Mueble versátil que combina diferentes tipos de almacenamiento: repisas abiertas, cajones y compartimento con puerta.',
    features: ['Triple almacenamiento', 'Repisas + cajones + puerta', 'Diseño compacto', 'Versátil', 'Múltiples usos'],
    dimensions: { width: '80 cm', depth: '40 cm', height: '120 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Nogal', hex: '#5c4033' }, { name: 'Gris', hex: '#808080' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  'cubos-apilables-set': {
    id: 'cubos-apilables-set',
    name: 'Cubos Apilables Set',
    category: 'almacenamiento',
    subcategory: 'multiusos',
    price: 'Desde $4,800',
    description: 'Set de cubos que se apilan y configuran.',
    longDescription: 'Set de 4 cubos de almacenamiento que pueden apilarse o colocarse lado a lado. Configura tu propio sistema de organización.',
    features: ['4 cubos incluidos', 'Apilables', 'Configuración libre', 'Puertas opcionales', 'Cajas de tela opcionales'],
    dimensions: { perCube: '35 x 35 x 35 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Natural', hex: '#deb887' }, { name: 'Negro', hex: '#1a1a1a' }],
    gallery: ['/img/servicios/muebles.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '2-3 semanas'
  },
  // PUERTAS - Productos
  'puerta-principal-madera': {
    id: 'puerta-principal-madera',
    name: 'Puerta Principal Madera',
    category: 'puertas',
    subcategory: 'puertas-madera',
    price: 'Desde $12,000',
    description: 'Puerta de entrada en madera sólida.',
    longDescription: 'Puerta principal fabricada en madera sólida de tzalam o parota. Diseño clásico que aporta elegancia y seguridad a tu hogar. Incluye marco, bisagras reforzadas y acabado barniz o pintura.',
    features: [
      'Madera sólida',
      'Marco incluido',
      'Bisagras reforzadas',
      'Acabado barniz o pintura',
      'Alta seguridad'
    ],
    dimensions: {
      width: '90 cm',
      height: '210 cm',
      thickness: '4.5 cm'
    },
    colors: [
      { name: 'Natural', hex: '#deb887' },
      { name: 'Nogal', hex: '#5c4033' },
      { name: 'Caoba', hex: '#420d09' }
    ],
    gallery: [
      '/img/carpinteria/carpinteria.png',
      '/img/servicios/muebles.png'
    ],
    deliveryTime: '3-4 semanas'
  },
  'puerta-tipo-granero': {
    id: 'puerta-tipo-granero',
    name: 'Puerta Tipo Granero',
    category: 'puertas',
    subcategory: 'puertas-granero',
    price: 'Desde $14,500',
    description: 'Estilo rústico con herraje expuesto.',
    longDescription: 'Puerta corrediza tipo granero (barn door) que añade carácter rústico a cualquier espacio. Incluye riel de acero con herraje expuesto, ruedas de desplazamiento suave y guía inferior. Fabricada en madera con acabado envejecido o natural.',
    features: [
      'Riel de acero incluido',
      'Herraje estilo industrial',
      'Ahorra espacio',
      'Instalación sencilla',
      'Estilo rústico moderno'
    ],
    dimensions: {
      width: '90 cm',
      height: '210 cm',
      thickness: '4 cm'
    },
    colors: [
      { name: 'Natural Envejecido', hex: '#a0826d' },
      { name: 'Blanco Vintage', hex: '#f5f5f0' },
      { name: 'Gris Lavado', hex: '#a8a8a8' }
    ],
    gallery: [
      '/img/carpinteria/carpinteria.png',
      '/img/servicios/muebles.png',
      '/img/metal/servicio-metal.png'
    ],
    deliveryTime: '3-4 semanas'
  },
  'puerta-interior-lisa': {
    id: 'puerta-interior-lisa',
    name: 'Puerta Interior Lisa',
    category: 'puertas',
    subcategory: 'puertas-interiores',
    price: 'Desde $4,500',
    description: 'Puerta interior minimalista.',
    longDescription: 'Puerta interior con diseño minimalista de superficie lisa.',
    features: ['MDF alta densidad', 'Acabado melamínico', 'Diseño minimalista', 'Marco incluido', 'Fácil mantenimiento'],
    dimensions: { width: '80 cm', height: '205 cm', thickness: '3.5 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Gris Claro', hex: '#d3d3d3' }, { name: 'Nogal', hex: '#5c4033' }],
    gallery: ['/img/carpinteria/carpinteria.png', '/img/servicios/muebles.png'],
    deliveryTime: '2-3 semanas'
  },
  'puerta-madera-tallada': {
    id: 'puerta-madera-tallada',
    name: 'Puerta Madera Tallada',
    category: 'puertas',
    subcategory: 'puertas-madera',
    price: 'Desde $18,500',
    description: 'Puerta con diseño tallado artesanal.',
    longDescription: 'Puerta de entrada con tallado artesanal hecho a mano. Cada pieza es única, creada por maestros artesanos con años de experiencia.',
    features: ['Tallado artesanal', 'Pieza única', 'Madera sólida', 'Trabajo artesanal', 'Alta seguridad'],
    dimensions: { width: '90-100 cm', height: '210 cm', thickness: '5 cm' },
    colors: [{ name: 'Natural', hex: '#deb887' }, { name: 'Nogal', hex: '#5c4033' }, { name: 'Caoba', hex: '#420d09' }],
    gallery: ['/img/carpinteria/carpinteria.png', '/img/servicios/muebles.png'],
    deliveryTime: '6-8 semanas'
  },
  'puerta-madera-hierro': {
    id: 'puerta-madera-hierro',
    name: 'Puerta Madera + Hierro',
    category: 'puertas',
    subcategory: 'puertas-herreria',
    price: 'Desde $16,500',
    description: 'Combinación elegante de materiales.',
    longDescription: 'Puerta que combina la calidez de la madera con la fortaleza del hierro forjado. Diseño único que destaca en cualquier fachada.',
    features: ['Madera + hierro forjado', 'Diseño único', 'Alta seguridad', 'Resistente a intemperie', 'Acabados premium'],
    dimensions: { width: '90-100 cm', height: '210 cm', thickness: '5 cm' },
    colors: [{ name: 'Nogal + Negro', hex: '#5c4033' }, { name: 'Natural + Negro', hex: '#deb887' }],
    gallery: ['/img/metal/servicio-metal.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '5-6 semanas'
  },
  'puerta-con-vitral': {
    id: 'puerta-con-vitral',
    name: 'Puerta con Vitral',
    category: 'puertas',
    subcategory: 'puertas-herreria',
    price: 'Desde $22,000',
    description: 'Puerta con inserción de vitral decorativo.',
    longDescription: 'Puerta con vitral artístico que permite el paso de luz mientras mantiene privacidad. Diseños personalizados disponibles.',
    features: ['Vitral artístico', 'Permite luz', 'Diseños personalizados', 'Marco de madera', 'Vidrio de seguridad'],
    dimensions: { width: '90-100 cm', height: '210 cm', thickness: '5 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Nogal', hex: '#5c4033' }, { name: 'Negro', hex: '#1a1a1a' }],
    gallery: ['/img/carpinteria/carpinteria.png', '/img/servicios/muebles.png'],
    deliveryTime: '6-8 semanas'
  },
  'puerta-corrediza-simple': {
    id: 'puerta-corrediza-simple',
    name: 'Puerta Corrediza Simple',
    category: 'puertas',
    subcategory: 'puertas-corredizas',
    price: 'Desde $8,500',
    description: 'Sistema corredizo básico, ahorra espacio.',
    longDescription: 'Puerta corrediza que se desliza sobre riel. Ideal para espacios donde una puerta tradicional ocuparía demasiado espacio.',
    features: ['Sistema corredizo', 'Ahorra espacio', 'Riel superior', 'Guía inferior', 'Fácil operación'],
    dimensions: { width: '80-90 cm', height: '205 cm', thickness: '4 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Nogal', hex: '#5c4033' }, { name: 'Gris', hex: '#808080' }],
    gallery: ['/img/carpinteria/carpinteria.png', '/img/servicios/muebles.png'],
    deliveryTime: '3-4 semanas'
  },
  'puerta-corrediza-doble': {
    id: 'puerta-corrediza-doble',
    name: 'Puerta Corrediza Doble',
    category: 'puertas',
    subcategory: 'puertas-corredizas',
    price: 'Desde $16,000',
    description: 'Sistema de dos hojas corredizas.',
    longDescription: 'Sistema de doble puerta corrediza para vanos amplios. Las dos hojas se deslizan suavemente sobre rieles de alta calidad.',
    features: ['Doble hoja', 'Vanos amplios', 'Rieles de calidad', 'Operación suave', 'Cierre magnético'],
    dimensions: { width: '160-180 cm', height: '205 cm', thickness: '4 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Nogal', hex: '#5c4033' }, { name: 'Vidrio + Madera', hex: '#808080' }],
    gallery: ['/img/carpinteria/carpinteria.png', '/img/servicios/muebles.png'],
    deliveryTime: '4-5 semanas'
  },
  'puerta-granero-industrial': {
    id: 'puerta-granero-industrial',
    name: 'Puerta Granero Industrial',
    category: 'puertas',
    subcategory: 'puertas-granero',
    price: 'Desde $18,000',
    description: 'Versión industrial con acabados metálicos.',
    longDescription: 'Puerta tipo granero con estética industrial. Herraje negro mate expuesto y acabados en metal y madera.',
    features: ['Estilo industrial', 'Herraje negro mate', 'Metal + madera', 'Riel robusto', 'Ruedas de acero'],
    dimensions: { width: '90-100 cm', height: '210 cm', thickness: '4 cm' },
    colors: [{ name: 'Negro + Natural', hex: '#1a1a1a' }, { name: 'Gris + Metal', hex: '#808080' }],
    gallery: ['/img/metal/servicio-metal.png', '/img/carpinteria/carpinteria.png'],
    deliveryTime: '4-5 semanas'
  },
  'puerta-interior-6-tableros': {
    id: 'puerta-interior-6-tableros',
    name: 'Puerta Interior 6 Tableros',
    category: 'puertas',
    subcategory: 'puertas-interiores',
    price: 'Desde $6,200',
    description: 'Diseño clásico de tableros.',
    longDescription: 'Puerta interior clásica con diseño de 6 tableros. Estilo tradicional que complementa decoraciones clásicas y coloniales.',
    features: ['Diseño 6 tableros', 'Estilo clásico', 'MDF o madera', 'Marco incluido', 'Varios acabados'],
    dimensions: { width: '80-90 cm', height: '205 cm', thickness: '4 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Nogal', hex: '#5c4033' }, { name: 'Cerezo', hex: '#7b3f00' }],
    gallery: ['/img/carpinteria/carpinteria.png', '/img/servicios/muebles.png'],
    deliveryTime: '3-4 semanas'
  },
  'puerta-interior-con-vidrio': {
    id: 'puerta-interior-con-vidrio',
    name: 'Puerta Interior con Vidrio',
    category: 'puertas',
    subcategory: 'puertas-interiores',
    price: 'Desde $7,800',
    description: 'Permite paso de luz entre espacios.',
    longDescription: 'Puerta interior con panel de vidrio que permite el paso de luz natural entre espacios mientras mantiene separación visual.',
    features: ['Panel de vidrio', 'Paso de luz', 'Vidrio templado', 'Privacidad parcial', 'Diseño moderno'],
    dimensions: { width: '80-90 cm', height: '205 cm', thickness: '4 cm' },
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Negro', hex: '#1a1a1a' }, { name: 'Nogal', hex: '#5c4033' }],
    gallery: ['/img/carpinteria/carpinteria.png', '/img/servicios/muebles.png'],
    deliveryTime: '3-4 semanas'
  }
};

const ProductDetail = ({ productId }) => {
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showShippingModal, setShowShippingModal] = useState(false);
  const [shippingAddress, setShippingAddress] = useState('');
  const [shippingResult, setShippingResult] = useState(null);
  const [calculatingShipping, setCalculatingShipping] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Mínimo de distancia para considerar como swipe
  const minSwipeDistance = 50;

  useEffect(() => {
    // Buscar producto por ID
    const foundProduct = allProducts[productId];
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedColor(0);
      setActiveImage(0);
    }
    setLoading(false);
  }, [productId]);

  const nextImage = () => {
    if (product) {
      setActiveImage((prev) => (prev + 1) % product.gallery.length);
    }
  };

  const prevImage = () => {
    if (product) {
      setActiveImage((prev) => (prev - 1 + product.gallery.length) % product.gallery.length);
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

  // Configuración de envío
  const SHIPPING_CONFIG = {
    originCoords: [-99.5336, 19.2686], // San Mateo Atenco, Estado de México
    maxDistance: 80, // km
    gasPrice: 25, // pesos por litro
    carEfficiency: 6, // km por litro
    apiKey: 'eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImUwYTBiZjQyZTE0NDRmMjVhMGE4OGZkY2I1ZmNlNWQwIiwiaCI6Im11cm11cjY0In0='
  };

  // Función para calcular distancia en línea recta (Haversine)
  const calculateHaversineDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radio de la Tierra en km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const calculateShipping = async () => {
    if (!shippingAddress.trim()) return;

    setCalculatingShipping(true);
    setShippingResult(null);

    try {
      // Preparar la búsqueda - agregar contexto para México
      let searchText = shippingAddress.trim();
      // Si es solo un código postal, agregar contexto
      if (/^\d{5}$/.test(searchText)) {
        searchText = `${searchText}, Estado de México, México`;
      }

      // Paso 1: Geocodificar la dirección del cliente
      // Limitar búsqueda a zona centro de México (CDMX, Estado de México, Morelos, etc.)
      // boundary.rect: min_lon, min_lat, max_lon, max_lat
      const geocodeUrl = `https://api.openrouteservice.org/geocode/search?api_key=${SHIPPING_CONFIG.apiKey}&text=${encodeURIComponent(searchText)}&boundary.country=MX&boundary.rect.min_lon=-100.5&boundary.rect.min_lat=18.5&boundary.rect.max_lon=-98.5&boundary.rect.max_lat=20.5&size=5`;

      const geocodeResponse = await fetch(geocodeUrl);
      const geocodeData = await geocodeResponse.json();

      if (!geocodeData.features || geocodeData.features.length === 0) {
        setShippingResult({
          success: false,
          error: 'No pudimos encontrar esa dirección. Intenta escribir tu colonia y ciudad, ej: "Roma Norte, CDMX"'
        });
        setCalculatingShipping(false);
        return;
      }

      // Seleccionar el resultado más cercano al origen (dentro de la zona de servicio)
      let bestResult = geocodeData.features[0];
      let bestDistance = Infinity;

      for (const feature of geocodeData.features) {
        const coords = feature.geometry.coordinates;
        const dist = calculateHaversineDistance(
          SHIPPING_CONFIG.originCoords[1],
          SHIPPING_CONFIG.originCoords[0],
          coords[1],
          coords[0]
        );
        // Preferir resultados que estén dentro de un rango razonable (200km) y más cercanos
        if (dist < bestDistance && dist < 200) {
          bestDistance = dist;
          bestResult = feature;
        }
      }

      const destCoords = bestResult.geometry.coordinates; // [lon, lat]
      const destName = bestResult.properties.label;

      // Paso 2: Intentar calcular ruta, si falla usar distancia en línea recta
      let distanceKm;
      let durationMinutes;
      let usesStraightLine = false;

      try {
        const directionsUrl = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${SHIPPING_CONFIG.apiKey}&start=${SHIPPING_CONFIG.originCoords[0]},${SHIPPING_CONFIG.originCoords[1]}&end=${destCoords[0]},${destCoords[1]}`;

        const directionsResponse = await fetch(directionsUrl);
        const directionsData = await directionsResponse.json();

        if (directionsData.features && directionsData.features.length > 0) {
          const distanceMeters = directionsData.features[0].properties.segments[0].distance;
          distanceKm = distanceMeters / 1000;
          durationMinutes = Math.round(directionsData.features[0].properties.segments[0].duration / 60);
        } else {
          throw new Error('No route found');
        }
      } catch (routeError) {
        // Fallback: calcular distancia en línea recta y agregar 30% por carretera
        const straightDistance = calculateHaversineDistance(
          SHIPPING_CONFIG.originCoords[1], // lat origen
          SHIPPING_CONFIG.originCoords[0], // lon origen
          destCoords[1], // lat destino
          destCoords[0]  // lon destino
        );
        distanceKm = straightDistance * 1.3; // Agregar 30% para aproximar distancia real
        durationMinutes = Math.round(distanceKm * 1.5); // Aproximar tiempo (40 km/h promedio)
        usesStraightLine = true;
      }

      // Paso 3: Verificar si está en zona
      if (distanceKm > SHIPPING_CONFIG.maxDistance) {
        setShippingResult({
          success: false,
          outOfZone: true,
          distance: distanceKm.toFixed(1),
          location: destName
        });
      } else {
        // Calcular costo: (km / rendimiento) * precio_gasolina * 2 (ida y vuelta)
        const litersNeeded = (distanceKm * 2) / SHIPPING_CONFIG.carEfficiency;
        const shippingCost = Math.ceil(litersNeeded * SHIPPING_CONFIG.gasPrice);

        setShippingResult({
          success: true,
          distance: distanceKm.toFixed(1),
          duration: durationMinutes,
          cost: shippingCost,
          location: destName,
          approximate: usesStraightLine
        });
      }
    } catch (error) {
      console.error('Error calculando envío:', error);
      setShippingResult({
        success: false,
        error: 'Hubo un error al calcular el envío. Intenta con tu colonia y ciudad, ej: "Condesa, Ciudad de México"'
      });
    }

    setCalculatingShipping(false);
  };

  const resetShippingModal = () => {
    setShowShippingModal(false);
    setShippingAddress('');
    setShippingResult(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 bg-main flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-highlight border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-20 bg-main">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-main mb-4">Producto no encontrado</h1>
          <p className="text-subtle mb-8">El producto que buscas no existe o fue removido.</p>
          <Link href="/productos">
            <button className="bg-highlight text-white px-6 py-3 rounded-xl font-semibold">
              Ver todos los productos
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-14 md:pt-20 bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-6">
        {/* Botón Regresar */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="flex items-center gap-2 text-subtle hover:text-main mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Regresar</span>
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Galería de Imágenes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Mobile: Carrusel */}
            <div className="lg:hidden relative">
              <div
                className="relative aspect-square rounded-2xl overflow-hidden bg-card"
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
                    src={product.gallery[activeImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Flechas de navegación */}
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-800" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                >
                  <ChevronRight className="w-5 h-5 text-gray-800" />
                </button>

                {/* Badge de paquete */}
                {product.isPaquete && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-highlight text-white text-xs font-bold px-3 py-1 rounded-full">
                      PAQUETE
                    </span>
                  </div>
                )}
              </div>

              {/* Indicadores */}
              <div className="flex justify-center gap-2 mt-4">
                {product.gallery.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      activeImage === idx ? 'bg-highlight scale-125' : 'bg-subtle/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop: Galería con miniaturas */}
            <div className="hidden lg:block">
              {/* Imagen principal */}
              <div
                className="relative aspect-square rounded-2xl overflow-hidden bg-card mb-4"
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
                    src={product.gallery[activeImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Badge de paquete */}
                {product.isPaquete && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-highlight text-white text-sm font-bold px-4 py-1.5 rounded-full">
                      PAQUETE
                    </span>
                  </div>
                )}
              </div>

              {/* Miniaturas */}
              <div className="flex gap-3 py-2 px-1 -mx-1">
                {product.gallery.map((img, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all ${
                      activeImage === idx
                        ? 'ring-2 ring-highlight ring-offset-2'
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Detalles del Producto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col"
          >
            {/* Nombre y Precio */}
            <div className="mb-6">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-main mb-3">
                {product.name}
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-highlight">
                {product.price}
              </p>
            </div>

            {/* Descripción corta */}
            <p className="text-subtle text-lg mb-6">
              {product.description}
            </p>

            {/* Colores */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-main mb-3">
                  Color: <span className="text-subtle font-normal">{product.colors[selectedColor].name}</span>
                </h3>
                <div className="flex gap-3">
                  {product.colors.map((color, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => setSelectedColor(idx)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative w-10 h-10 rounded-full transition-all ${
                        selectedColor === idx
                          ? 'ring-2 ring-highlight ring-offset-2'
                          : ''
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {selectedColor === idx && (
                        <Check className={`w-5 h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                          color.hex === '#ffffff' || color.hex === '#f5f5dc' || color.hex === '#f5f5f0'
                            ? 'text-gray-800'
                            : 'text-white'
                        }`} />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Dimensiones */}
            {product.dimensions && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-main mb-3">Dimensiones</h3>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(product.dimensions).map(([key, value]) => (
                    <div key={key} className="bg-card/50 rounded-lg px-4 py-2">
                      <p className="text-xs text-subtle capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                      <p className="text-sm font-medium text-main">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tiempo de entrega */}
            <div className="flex items-center gap-3 mb-6 p-4 bg-card/50 rounded-xl">
              <Truck className="w-5 h-5 text-highlight" />
              <div>
                <p className="text-sm font-medium text-main">Tiempo de fabricación</p>
                <p className="text-sm text-subtle">{product.deliveryTime}</p>
              </div>
            </div>

            {/* Botón de Comprar */}
            <motion.button
              onClick={() => setShowShippingModal(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gold-gradient text-primary py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all mb-4"
            >
              Comprar
            </motion.button>

            {/* Info adicional */}
            <div className="flex items-center justify-center gap-2 text-sm text-subtle">
              <Shield className="w-4 h-4" />
              <span>Garantía incluida en todos los productos</span>
            </div>
          </motion.div>
        </div>

        {/* Descripción Detallada y Características */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Descripción */}
          <div className="bg-card rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-main mb-4">Descripción</h2>
            <p className="text-subtle leading-relaxed">
              {product.longDescription}
            </p>
          </div>

          {/* Características */}
          <div className="bg-card rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-main mb-4">Características</h2>
            <ul className="space-y-3">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-highlight flex-shrink-0 mt-0.5" />
                  <span className="text-subtle">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-12 bg-card rounded-2xl p-8 text-center"
        >
          <MessageCircle className="w-10 h-10 text-highlight mx-auto mb-4" />
          <h3 className="text-xl font-bold text-main mb-2">
            ¿Necesitas medidas especiales?
          </h3>
          <p className="text-subtle mb-6">
            Fabricamos este producto a la medida que necesites. Contáctanos para una cotización personalizada.
          </p>
          <Link href={`/contacto?servicio=${product.category}&producto=${product.name}`}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-highlight text-white px-8 py-3 rounded-xl font-semibold"
            >
              Contactar para personalización
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Modal de Cálculo de Envío */}
      <AnimatePresence>
        {showShippingModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={resetShippingModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-2xl max-w-md w-full p-6 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header del modal */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-main">Calcular Envío</h2>
                <button
                  onClick={resetShippingModal}
                  className="text-subtle hover:text-main transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Producto seleccionado */}
              <div className="bg-secondary/30 rounded-xl p-4 mb-6 flex gap-4">
                <img
                  src={product.gallery[0]}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-semibold text-main text-sm">{product.name}</h3>
                  <p className="text-highlight font-bold">{product.price}</p>
                </div>
              </div>

              {/* Input de dirección */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-main mb-2">
                  ¿A dónde enviamos tu mueble?
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-subtle" />
                  <input
                    type="text"
                    value={shippingAddress}
                    onChange={(e) => setShippingAddress(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && calculateShipping()}
                    placeholder="Código postal o dirección"
                    className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-xl text-main placeholder:text-subtle focus:outline-none focus:border-highlight transition-colors"
                  />
                </div>
                <p className="text-xs text-subtle mt-2">
                  Ejemplo: 50000 o Toluca, Estado de México
                </p>
              </div>

              {/* Botón calcular */}
              <div className="flex justify-center mb-4">
                <motion.button
                  onClick={calculateShipping}
                  disabled={calculatingShipping || !shippingAddress.trim()}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-highlight text-white px-6 py-2.5 rounded-lg font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {calculatingShipping ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Calculando...
                    </>
                  ) : (
                    <>
                      <Truck className="w-4 h-4" />
                      Calcular Envío
                    </>
                  )}
                </motion.button>
              </div>

              {/* Resultado */}
              {shippingResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`rounded-xl p-4 ${
                    shippingResult.success
                      ? 'bg-green-500/10 border border-green-500/30'
                      : shippingResult.outOfZone
                      ? 'bg-amber-500/10 border border-amber-500/30'
                      : 'bg-red-500/10 border border-red-500/30'
                  }`}
                >
                  {shippingResult.success ? (
                    <>
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="font-semibold text-green-500">¡Sí entregamos en tu zona!</span>
                      </div>
                      <p className="text-sm text-subtle mb-1">
                        Ubicación: {shippingResult.location}
                      </p>
                      <p className="text-sm text-subtle mb-3">
                        Distancia: ~{shippingResult.distance} km (~{shippingResult.duration} min)
                        {shippingResult.approximate && <span className="text-xs text-amber-500 ml-1">(aprox.)</span>}
                      </p>
                      <div className="bg-card rounded-lg p-3 mb-4">
                        <p className="text-sm text-subtle">Costo de envío{shippingResult.approximate ? ' estimado' : ''}:</p>
                        <p className="text-2xl font-bold text-highlight">${shippingResult.cost} MXN</p>
                      </div>
                      <div className="flex justify-center">
                        <Link href={`/checkout?producto=${encodeURIComponent(product.name)}&precio=${encodeURIComponent(product.price)}&imagen=${encodeURIComponent(product.gallery[0])}&id=${product.id}&envio=${shippingResult.cost}&distancia=${shippingResult.distance}&direccion=${encodeURIComponent(shippingResult.location)}`}>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-gold-gradient text-primary px-5 py-2.5 rounded-lg font-bold text-sm"
                          >
                            Continuar con la Compra
                          </motion.button>
                        </Link>
                      </div>
                    </>
                  ) : shippingResult.outOfZone ? (
                    <>
                      <div className="flex items-center gap-2 mb-3">
                        <AlertCircle className="w-5 h-5 text-amber-500" />
                        <span className="font-semibold text-amber-500">Fuera de zona de entrega</span>
                      </div>
                      <p className="text-sm text-subtle mb-1">
                        Ubicación: {shippingResult.location}
                      </p>
                      <p className="text-sm text-subtle mb-3">
                        Tu ubicación está a {shippingResult.distance} km. Nuestro límite de entrega es de {SHIPPING_CONFIG.maxDistance} km.
                      </p>
                      <div className="flex justify-center">
                        <Link href={`/contacto?servicio=${product.category}&producto=${product.name}&mensaje=Estoy fuera de zona (${shippingResult.distance}km), solicito cotización especial`}>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-amber-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm"
                          >
                            Solicitar Cotización Especial
                          </motion.button>
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="w-5 h-5 text-red-500" />
                        <span className="font-semibold text-red-500">Error</span>
                      </div>
                      <p className="text-sm text-subtle">{shippingResult.error}</p>
                    </>
                  )}
                </motion.div>
              )}

              {/* Info adicional */}
              <p className="text-xs text-subtle text-center mt-4">
                Entregamos en un radio de {SHIPPING_CONFIG.maxDistance} km desde San Mateo Atenco, Estado de México
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDetail;
