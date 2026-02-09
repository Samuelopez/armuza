'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sofa,
  UtensilsCrossed,
  Bed,
  ChefHat,
  Bath,
  Briefcase,
  Baby,
  DoorOpen,
  Archive,
  DoorClosed,
  Sparkles,
  Package,
  ChevronRight,
  MessageCircle
} from 'lucide-react';
import Link from 'next/link';

const ProductsContent = ({ productoInicial }) => {
  const [activeCategory, setActiveCategory] = useState(productoInicial || 'sala');
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  // Helper para generar IDs de productos a partir del nombre
  const generateProductId = (name) => {
    return name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Quitar acentos
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  useEffect(() => {
    if (productoInicial) {
      setActiveCategory(productoInicial);
      setActiveSubcategory(null);
    }
  }, [productoInicial]);

  const categories = [
    {
      id: 'sala',
      name: 'Sala',
      icon: Sofa,
      description: 'Muebles para crear el espacio perfecto de convivencia. Sofás, mesas, libreros y más.',
      subcategories: [
        { id: 'sofas', name: 'Sofás' },
        { id: 'bancas', name: 'Bancas' },
        { id: 'mesas-centro', name: 'Mesas de Centro' },
        { id: 'mesas-laterales', name: 'Mesas Laterales' },
        { id: 'muebles-tv', name: 'Muebles para TV' },
        { id: 'consolas', name: 'Consolas' },
        { id: 'libreros', name: 'Libreros' },
        { id: 'repisas', name: 'Repisas' },
        { id: 'muebles-bar', name: 'Muebles Bar' },
        { id: 'modulares', name: 'Modulares' }
      ],
      items: {
        'sofas': [
          { name: 'Sofá Moderno 3 Plazas', price: 'Desde $18,500', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500', description: 'Sofá contemporáneo con estructura de madera sólida y tapizado premium.' },
          { name: 'Sofá Esquinero', price: 'Desde $28,000', image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500', description: 'Sofá en L ideal para espacios amplios, máximo confort.' },
          { name: 'Sofá Industrial', price: 'Desde $22,000', image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500', description: 'Diseño industrial con estructura de metal y madera, tapizado en piel sintética.' }
        ],
        'bancas': [
          { name: 'Banca Madera + Metal', price: 'Desde $6,500', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500', description: 'Banca estilo industrial con patas de metal y asiento de madera maciza.' },
          { name: 'Banca Tapizada', price: 'Desde $8,200', image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500', description: 'Banca elegante con tapizado de tela y patas de madera.' }
        ],
        'mesas-centro': [
          { name: 'Mesa Centro Madera', price: 'Desde $7,800', image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=500', description: 'Mesa de centro en madera de pino con acabado natural.' },
          { name: 'Mesa Centro Industrial', price: 'Desde $9,500', image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=500', description: 'Mesa con estructura metálica y superficie de madera reciclada.' },
          { name: 'Mesa Centro con Almacenaje', price: 'Desde $11,200', image: 'https://images.unsplash.com/photo-1565191999001-551c187427bb?w=500', description: 'Mesa funcional con cajones y repisas integradas.' }
        ],
        'mesas-laterales': [
          { name: 'Mesa Lateral Minimalista', price: 'Desde $3,200', image: 'https://images.unsplash.com/photo-1499933374294-4584851497cc?w=500', description: 'Diseño minimalista perfecto para cualquier sala.' },
          { name: 'Mesa Lateral con Cajón', price: 'Desde $4,500', image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=500', description: 'Mesa auxiliar con cajón para almacenamiento.' }
        ],
        'muebles-tv': [
          { name: 'Mueble TV Flotante', price: 'Desde $12,500', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500', description: 'Mueble flotante minimalista con sistema de cable oculto.' },
          { name: 'Centro de Entretenimiento', price: 'Desde $18,000', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500', description: 'Centro completo con espacio para TV, consolas y almacenaje.' }
        ],
        'consolas': [
          { name: 'Consola Entrada', price: 'Desde $8,900', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500', description: 'Consola elegante para recibidor o sala.' },
          { name: 'Consola Industrial', price: 'Desde $10,500', image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500', description: 'Consola con estructura de metal y madera.' }
        ],
        'libreros': [
          { name: 'Librero Escalera', price: 'Desde $6,800', image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=500', description: 'Librero estilo escalera, diseño moderno y funcional.' },
          { name: 'Librero Pared Completa', price: 'Desde $22,000', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500', description: 'Librero de piso a techo, máxima capacidad.' }
        ],
        'repisas': [
          { name: 'Set Repisas Flotantes', price: 'Desde $2,800', image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=500', description: 'Set de 3 repisas flotantes en diferentes tamaños.' },
          { name: 'Repisa Industrial', price: 'Desde $3,500', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500', description: 'Repisa con soportes de metal y tabla de madera.' }
        ],
        'muebles-bar': [
          { name: 'Mueble Bar Compacto', price: 'Desde $14,500', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500', description: 'Bar compacto con espacio para botellas y copas.' },
          { name: 'Carro Bar Móvil', price: 'Desde $8,200', image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=500', description: 'Carro bar con ruedas, perfecto para servir.' }
        ],
        'modulares': [
          { name: 'Sistema Modular 6 Piezas', price: 'Desde $15,000', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500', description: 'Sistema de cubos modulares configurables.' },
          { name: 'Estantería Modular', price: 'Desde $12,800', image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=500', description: 'Estantería que crece contigo, añade módulos según necesites.' }
        ]
      }
    },
    {
      id: 'comedor',
      name: 'Comedor',
      icon: UtensilsCrossed,
      description: 'Mesas, sillas y muebles auxiliares para crear el comedor perfecto.',
      subcategories: [
        { id: 'mesas-4', name: '4 Personas' },
        { id: 'mesas-6', name: '6 Personas' },
        { id: 'mesas-8', name: '8+ Personas' },
        { id: 'mesas-extensibles', name: 'Extensibles' },
        { id: 'bancas-comedor', name: 'Bancas' },
        { id: 'credenzas', name: 'Credenzas' },
        { id: 'buffeteras', name: 'Buffeteras' },
        { id: 'vitrinas', name: 'Vitrinas' }
      ],
      items: {
        'mesas-4': [
          { name: 'Mesa Redonda 4 Personas', price: 'Desde $12,500', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500', description: 'Mesa redonda ideal para espacios pequeños.' },
          { name: 'Mesa Cuadrada Compacta', price: 'Desde $10,800', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500', description: 'Mesa cuadrada perfecta para departamentos.' }
        ],
        'mesas-6': [
          { name: 'Mesa Rectangular 6 Personas', price: 'Desde $16,500', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500', description: 'Mesa rectangular clásica para familia.' },
          { name: 'Mesa Ovalada 6 Personas', price: 'Desde $18,200', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500', description: 'Diseño ovalado elegante y funcional.' }
        ],
        'mesas-8': [
          { name: 'Mesa Gran Familia 8 Personas', price: 'Desde $24,000', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500', description: 'Mesa amplia para reuniones familiares.' },
          { name: 'Mesa Conferencia 10 Personas', price: 'Desde $32,000', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500', description: 'Ideal para comedores grandes o salas de juntas.' }
        ],
        'mesas-extensibles': [
          { name: 'Mesa Extensible 4-6', price: 'Desde $18,500', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500', description: 'Se extiende de 4 a 6 personas fácilmente.' },
          { name: 'Mesa Extensible 6-10', price: 'Desde $26,000', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500', description: 'Máxima versatilidad, de 6 hasta 10 personas.' }
        ],
        'bancas-comedor': [
          { name: 'Banca Comedor 1.2m', price: 'Desde $5,800', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500', description: 'Banca de madera sólida para 2-3 personas.' },
          { name: 'Banca Tapizada Comedor', price: 'Desde $7,500', image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500', description: 'Banca con asiento tapizado para mayor confort.' }
        ],
        'credenzas': [
          { name: 'Credenza Moderna', price: 'Desde $14,500', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500', description: 'Credenza con puertas y cajones, diseño contemporáneo.' },
          { name: 'Credenza Rústica', price: 'Desde $16,200', image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=500', description: 'Estilo rústico con acabados envejecidos.' }
        ],
        'buffeteras': [
          { name: 'Buffetera Clásica', price: 'Desde $18,000', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500', description: 'Buffetera tradicional con amplio almacenamiento.' },
          { name: 'Buffetera con Vitrina', price: 'Desde $22,500', image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=500', description: 'Incluye vitrina superior para exhibir.' }
        ],
        'vitrinas': [
          { name: 'Vitrina Iluminada', price: 'Desde $16,800', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500', description: 'Vitrina con iluminación LED integrada.' },
          { name: 'Vitrina Esquinera', price: 'Desde $12,500', image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=500', description: 'Aprovecha las esquinas con esta vitrina elegante.' }
        ]
      }
    },
    {
      id: 'recamara',
      name: 'Recámara',
      icon: Bed,
      description: 'Todo para tu descanso: camas, cabeceras, burós, cómodas y más.',
      subcategories: [
        { id: 'camas', name: 'Camas' },
        { id: 'cabeceras', name: 'Cabeceras' },
        { id: 'buros', name: 'Burós' },
        { id: 'comodas', name: 'Cómodas' },
        { id: 'chifonier', name: 'Chifonier' },
        { id: 'bancas-cama', name: 'Bancas Pie de Cama' },
        { id: 'tocadores', name: 'Tocadores' },
        { id: 'closets-abiertos', name: 'Closets Abiertos' }
      ],
      items: {
        'camas': [
          { name: 'Cama King Size', price: 'Desde $22,000', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500', description: 'Base de cama king con diseño contemporáneo.' },
          { name: 'Cama Queen Size', price: 'Desde $18,500', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=500', description: 'Cama queen perfecta para recámaras medianas.' },
          { name: 'Cama con Almacenaje', price: 'Desde $26,000', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500', description: 'Base con cajones laterales para almacenamiento.' }
        ],
        'cabeceras': [
          { name: 'Cabecera Tapizada', price: 'Desde $8,500', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500', description: 'Cabecera tapizada en tela premium.' },
          { name: 'Cabecera Madera', price: 'Desde $7,200', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=500', description: 'Cabecera de madera con diseño geométrico.' },
          { name: 'Cabecera Capitoneada', price: 'Desde $12,000', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500', description: 'Elegante cabecera capitoneada en terciopelo.' }
        ],
        'buros': [
          { name: 'Buró 2 Cajones', price: 'Desde $4,500', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500', description: 'Buró clásico con dos cajones amplios.' },
          { name: 'Buró Flotante', price: 'Desde $3,800', image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=500', description: 'Buró de pared, diseño minimalista.' },
          { name: 'Buró con Cargador', price: 'Desde $5,200', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500', description: 'Incluye cargador inalámbrico integrado.' }
        ],
        'comodas': [
          { name: 'Cómoda 6 Cajones', price: 'Desde $12,500', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500', description: 'Cómoda amplia con seis cajones.' },
          { name: 'Cómoda Doble', price: 'Desde $16,800', image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=500', description: 'Cómoda extra ancha, ideal para parejas.' }
        ],
        'chifonier': [
          { name: 'Chifonier 5 Cajones', price: 'Desde $9,800', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500', description: 'Chifonier alto, perfecto para espacios reducidos.' },
          { name: 'Chifonier con Espejo', price: 'Desde $12,500', image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=500', description: 'Incluye espejo abatible en la parte superior.' }
        ],
        'bancas-cama': [
          { name: 'Banca Pie de Cama', price: 'Desde $6,500', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500', description: 'Banca tapizada elegante para pie de cama.' },
          { name: 'Banca con Almacenaje', price: 'Desde $8,200', image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500', description: 'Banca con compartimento interior para cobijas.' }
        ],
        'tocadores': [
          { name: 'Tocador con Espejo', price: 'Desde $11,500', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500', description: 'Tocador clásico con espejo y cajones.' },
          { name: 'Tocador Moderno', price: 'Desde $14,200', image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=500', description: 'Diseño contemporáneo con iluminación LED.' }
        ],
        'closets-abiertos': [
          { name: 'Closet Abierto Básico', price: 'Desde $8,500', image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=500', description: 'Sistema abierto con barras y repisas.' },
          { name: 'Closet Modular Completo', price: 'Desde $18,000', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500', description: 'Sistema modular con cajones, repisas y barras.' }
        ]
      }
    },
    {
      id: 'cocina',
      name: 'Cocina',
      icon: ChefHat,
      description: 'Cocinas integrales y muebles individuales. Solo mueble, sin electrodomésticos.',
      subcategories: [
        { id: 'paquetes-cocina', name: '✨ Paquetes' },
        { id: 'gabinetes-inf', name: 'Gabinetes Inferiores' },
        { id: 'gabinetes-sup', name: 'Gabinetes Superiores' },
        { id: 'alacenas', name: 'Alacenas' },
        { id: 'islas', name: 'Islas' },
        { id: 'barras', name: 'Barras' },
        { id: 'despensa', name: 'Muebles Despensa' },
        { id: 'auxiliares-cocina', name: 'Auxiliares' }
      ],
      items: {
        'paquetes-cocina': [
          { name: 'Cocina Integral 2.5m Lineal', price: 'Desde $65,000', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500', description: 'Paquete completo: gabinetes superiores e inferiores, cubierta, tarja y grifería. Ideal para espacios compactos.', isPaquete: true },
          { name: 'Cocina Integral 3m Lineal', price: 'Desde $85,000', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500', description: 'Cocina lineal completa con amplio espacio de trabajo. Incluye todos los gabinetes, cubierta y accesorios básicos.', isPaquete: true },
          { name: 'Cocina en L (3m x 2m)', price: 'Desde $120,000', image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=500', description: 'Distribución en L perfecta para cocinas medianas. Maximiza el espacio de almacenamiento y trabajo.', isPaquete: true },
          { name: 'Cocina en U Premium', price: 'Desde $180,000', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500', description: 'La cocina más completa. Distribución en U con isla central opcional. Acabados premium y máxima funcionalidad.', isPaquete: true }
        ],
        'gabinetes-inf': [
          { name: 'Gabinete Base 60cm', price: 'Desde $4,500', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500', description: 'Gabinete inferior estándar con puerta y entrepaño.' },
          { name: 'Gabinete Cajones 60cm', price: 'Desde $5,800', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500', description: 'Gabinete con sistema de cajones de cierre suave.' },
          { name: 'Gabinete Esquinero', price: 'Desde $7,200', image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=500', description: 'Aprovecha las esquinas con este gabinete giratorio.' }
        ],
        'gabinetes-sup': [
          { name: 'Gabinete Superior 60cm', price: 'Desde $3,200', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500', description: 'Gabinete de pared con dos entrepaños.' },
          { name: 'Gabinete Vitrina', price: 'Desde $4,500', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500', description: 'Gabinete con puertas de vidrio para exhibir.' },
          { name: 'Gabinete Campana', price: 'Desde $3,800', image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=500', description: 'Gabinete diseñado para ocultar la campana extractora.' }
        ],
        'alacenas': [
          { name: 'Alacena Sencilla', price: 'Desde $8,500', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500', description: 'Alacena de piso a techo con múltiples entrepaños.' },
          { name: 'Alacena Doble', price: 'Desde $14,200', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500', description: 'Alacena amplia con puertas dobles.' }
        ],
        'islas': [
          { name: 'Isla Compacta', price: 'Desde $18,000', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500', description: 'Isla de cocina con almacenamiento y cubierta.' },
          { name: 'Isla con Barra', price: 'Desde $28,000', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500', description: 'Isla con extensión de barra para desayunador.' }
        ],
        'barras': [
          { name: 'Barra Desayunador', price: 'Desde $8,500', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500', description: 'Barra de pared para desayunos rápidos.' },
          { name: 'Barra con Almacenaje', price: 'Desde $12,500', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500', description: 'Barra con repisas y cajones integrados.' }
        ],
        'despensa': [
          { name: 'Mueble Despensa Alto', price: 'Desde $12,000', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500', description: 'Despensa de piso a techo, máximo almacenamiento.' },
          { name: 'Despensa con Canastas', price: 'Desde $16,500', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500', description: 'Sistema de canastas extraíbles para fácil acceso.' }
        ],
        'auxiliares-cocina': [
          { name: 'Carro de Cocina', price: 'Desde $5,500', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500', description: 'Carro auxiliar con ruedas y cubierta de trabajo.' },
          { name: 'Repisas de Cocina Set', price: 'Desde $3,200', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500', description: 'Set de repisas flotantes para especias y utensilios.' }
        ]
      }
    },
    {
      id: 'bano',
      name: 'Baño',
      icon: Bath,
      description: 'Paquetes completos para baño. Incluyen mueble, espejo y accesorios.',
      subcategories: null,
      items: [
        { name: 'Paquete Baño Esencial', price: 'Desde $12,500', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500', description: 'Incluye: Mueble bajo lavabo 60cm + Espejo con marco + 2 Repisas flotantes. Ideal para baños pequeños.', isPaquete: true },
        { name: 'Paquete Baño Moderno', price: 'Desde $18,500', image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=500', description: 'Incluye: Mueble flotante 80cm + Espejo con luz LED + Gabinete auxiliar + Porta toallas. Diseño contemporáneo.', isPaquete: true },
        { name: 'Paquete Baño Completo', price: 'Desde $28,000', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500', description: 'Incluye: Mueble doble lavabo + Espejo panorámico LED + Gabinete alto + Mueble WC + Accesorios. Todo lo que necesitas.', isPaquete: true },
        { name: 'Paquete Baño Spa', price: 'Desde $42,000', image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=500', description: 'Incluye: Mueble premium doble + Espejo inteligente + Gabinetes de piso a techo + Banca + Accesorios premium. Experiencia de lujo.', isPaquete: true },
        { name: 'Paquete Medio Baño', price: 'Desde $8,500', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500', description: 'Incluye: Mueble compacto 50cm + Espejo decorativo + Porta papel. Perfecto para medios baños.', isPaquete: true },
        { name: 'Paquete Baño Industrial', price: 'Desde $22,000', image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=500', description: 'Incluye: Mueble metal + madera + Espejo marco metálico + Repisas industriales + Accesorios estilo loft.', isPaquete: true }
      ]
    },
    {
      id: 'oficina',
      name: 'Oficina',
      icon: Briefcase,
      description: 'Muebles para home office y oficinas. Productividad con estilo.',
      subcategories: [
        { id: 'escritorios', name: 'Escritorios' },
        { id: 'estaciones', name: 'Estaciones de Trabajo' },
        { id: 'libreros-of', name: 'Libreros' },
        { id: 'archiveros', name: 'Archiveros' },
        { id: 'credenzas-of', name: 'Credenzas' },
        { id: 'cajoneras', name: 'Cajoneras' },
        { id: 'mesas-juntas', name: 'Mesas de Juntas' }
      ],
      items: {
        'escritorios': [
          { name: 'Escritorio Home Office', price: 'Desde $8,500', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500', description: 'Escritorio compacto ideal para casa.' },
          { name: 'Escritorio Ejecutivo', price: 'Desde $18,500', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500', description: 'Escritorio amplio con presencia ejecutiva.' },
          { name: 'Escritorio Industrial', price: 'Desde $12,500', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500', description: 'Estructura de metal con cubierta de madera maciza.' },
          { name: 'Escritorio en L', price: 'Desde $16,000', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500', description: 'Máximo espacio de trabajo en esquina.' }
        ],
        'estaciones': [
          { name: 'Estación de Trabajo Individual', price: 'Desde $14,500', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500', description: 'Estación completa con almacenamiento integrado.' },
          { name: 'Estación Doble', price: 'Desde $24,000', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500', description: 'Para dos personas, con división central.' }
        ],
        'libreros-of': [
          { name: 'Librero Oficina 5 Niveles', price: 'Desde $7,800', image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=500', description: 'Librero profesional para documentos y libros.' },
          { name: 'Librero con Puertas', price: 'Desde $12,500', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500', description: 'Librero con puertas inferiores para privacidad.' }
        ],
        'archiveros': [
          { name: 'Archivero 3 Gavetas', price: 'Desde $6,500', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500', description: 'Archivero metálico con cerradura.' },
          { name: 'Archivero Madera', price: 'Desde $8,200', image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=500', description: 'Archivero de madera que combina con el escritorio.' }
        ],
        'credenzas-of': [
          { name: 'Credenza Oficina', price: 'Desde $12,500', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500', description: 'Credenza profesional con múltiples compartimentos.' },
          { name: 'Credenza Ejecutiva', price: 'Desde $18,000', image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=500', description: 'Acabados premium para oficinas ejecutivas.' }
        ],
        'cajoneras': [
          { name: 'Cajonera Móvil 3 Cajones', price: 'Desde $4,200', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500', description: 'Cajonera con ruedas, cabe bajo el escritorio.' },
          { name: 'Cajonera Fija', price: 'Desde $3,500', image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=500', description: 'Cajonera sin ruedas, más estable.' }
        ],
        'mesas-juntas': [
          { name: 'Mesa Juntas 6 Personas', price: 'Desde $18,000', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500', description: 'Mesa de reuniones para equipos pequeños.' },
          { name: 'Mesa Juntas 10 Personas', price: 'Desde $32,000', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500', description: 'Mesa ejecutiva para reuniones importantes.' }
        ]
      }
    },
    {
      id: 'infantil',
      name: 'Infantil',
      icon: Baby,
      description: 'Muebles seguros y divertidos para los más pequeños.',
      subcategories: [
        { id: 'camas-inf', name: 'Camas' },
        { id: 'literas', name: 'Literas' },
        { id: 'escritorios-inf', name: 'Escritorios' },
        { id: 'libreros-inf', name: 'Libreros' },
        { id: 'jugueteros', name: 'Jugueteros' },
        { id: 'closets-inf', name: 'Closets' },
        { id: 'modulares-inf', name: 'Modulares' }
      ],
      items: {
        'camas-inf': [
          { name: 'Cama Individual Infantil', price: 'Desde $8,500', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500', description: 'Cama segura con barandales opcionales.' },
          { name: 'Cama Tipo Nido', price: 'Desde $14,500', image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500', description: 'Cama con cama auxiliar deslizable.' },
          { name: 'Cama Temática', price: 'Desde $18,000', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500', description: 'Camas con diseños divertidos (auto, casa, etc.).' }
        ],
        'literas': [
          { name: 'Litera Básica', price: 'Desde $16,500', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500', description: 'Litera clásica con escalera lateral.' },
          { name: 'Litera con Escritorio', price: 'Desde $24,000', image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500', description: 'Cama arriba, escritorio abajo. Ideal para espacios pequeños.' },
          { name: 'Litera Triple', price: 'Desde $28,000', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500', description: 'Tres camas en estructura compacta.' }
        ],
        'escritorios-inf': [
          { name: 'Escritorio Infantil', price: 'Desde $5,500', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500', description: 'Escritorio a la altura perfecta para niños.' },
          { name: 'Escritorio con Repisa', price: 'Desde $7,800', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500', description: 'Incluye repisa superior para útiles.' }
        ],
        'libreros-inf': [
          { name: 'Librero Infantil Bajo', price: 'Desde $4,200', image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=500', description: 'Altura accesible para los pequeños.' },
          { name: 'Librero Estantería', price: 'Desde $5,800', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500', description: 'Estantería abierta para libros y juguetes.' }
        ],
        'jugueteros': [
          { name: 'Juguetero con Cajas', price: 'Desde $4,800', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500', description: 'Organizador con cajas de colores.' },
          { name: 'Baúl Juguetero', price: 'Desde $3,500', image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500', description: 'Baúl amplio con tapa segura.' }
        ],
        'closets-inf': [
          { name: 'Closet Infantil Abierto', price: 'Desde $8,500', image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=500', description: 'Sistema abierto a altura de niños.' },
          { name: 'Armario Infantil', price: 'Desde $12,000', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500', description: 'Armario con puertas y cajones inferiores.' }
        ],
        'modulares-inf': [
          { name: 'Sistema Modular Infantil', price: 'Desde $6,500', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500', description: 'Cubos de colores configurables.' },
          { name: 'Estantería Escalera Infantil', price: 'Desde $5,200', image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500', description: 'Estantería tipo escalera, segura y divertida.' }
        ]
      }
    },
    {
      id: 'recibidor',
      name: 'Recibidor',
      icon: DoorOpen,
      description: 'La primera impresión cuenta. Muebles para entradas y vestíbulos.',
      subcategories: [
        { id: 'consolas-rec', name: 'Consolas' },
        { id: 'zapateras', name: 'Zapateras' },
        { id: 'bancas-rec', name: 'Bancas' },
        { id: 'percheros', name: 'Percheros' },
        { id: 'organizadores', name: 'Organizadores' }
      ],
      items: {
        'consolas-rec': [
          { name: 'Consola Entrada Slim', price: 'Desde $6,500', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500', description: 'Consola delgada perfecta para pasillos.' },
          { name: 'Consola con Cajones', price: 'Desde $9,200', image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500', description: 'Consola con almacenamiento para llaves y más.' },
          { name: 'Consola Industrial', price: 'Desde $8,500', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500', description: 'Metal y madera, estilo loft.' }
        ],
        'zapateras': [
          { name: 'Zapatera 12 Pares', price: 'Desde $4,200', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500', description: 'Zapatera compacta para entrada.' },
          { name: 'Zapatera con Banca', price: 'Desde $6,800', image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=500', description: 'Banca para sentarse + zapatera abajo.' },
          { name: 'Zapatera Alta 30 Pares', price: 'Desde $8,500', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500', description: 'Máxima capacidad en espacio vertical.' }
        ],
        'bancas-rec': [
          { name: 'Banca Recibidor', price: 'Desde $5,500', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500', description: 'Banca elegante para entrada.' },
          { name: 'Banca con Almacenaje', price: 'Desde $7,200', image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500', description: 'Banca con compartimentos ocultos.' }
        ],
        'percheros': [
          { name: 'Perchero de Pared', price: 'Desde $2,200', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500', description: 'Perchero montado en pared con ganchos.' },
          { name: 'Mueble Recibidor con Perchero', price: 'Desde $12,500', image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=500', description: 'Mueble completo: perchero + espejo + repisa.' },
          { name: 'Perchero de Pie', price: 'Desde $3,800', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500', description: 'Perchero independiente de madera.' }
        ],
        'organizadores': [
          { name: 'Organizador Entrada Compacto', price: 'Desde $5,800', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500', description: 'Todo en uno: llaves, cartas, llaves.' },
          { name: 'Panel Organizador', price: 'Desde $4,200', image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500', description: 'Panel de pared con ganchos y repisas.' }
        ]
      }
    },
    {
      id: 'almacenamiento',
      name: 'Almacenamiento',
      icon: Archive,
      description: 'Soluciones de organización para cualquier espacio.',
      subcategories: [
        { id: 'estanterias', name: 'Estanterías' },
        { id: 'gabinetes-alm', name: 'Gabinetes' },
        { id: 'armarios', name: 'Armarios' },
        { id: 'baules', name: 'Baúles' },
        { id: 'multiusos', name: 'Multiusos' }
      ],
      items: {
        'estanterias': [
          { name: 'Estantería Metálica 5 Niveles', price: 'Desde $4,500', image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=500', description: 'Estantería resistente para garaje o bodega.' },
          { name: 'Estantería Madera Industrial', price: 'Desde $8,500', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500', description: 'Estilo industrial con estructura de metal.' },
          { name: 'Rack Modular', price: 'Desde $6,200', image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=500', description: 'Sistema modular expandible.' }
        ],
        'gabinetes-alm': [
          { name: 'Gabinete Almacenaje Alto', price: 'Desde $8,500', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500', description: 'Gabinete con puertas para ocultar contenido.' },
          { name: 'Gabinete Herramientas', price: 'Desde $12,000', image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=500', description: 'Ideal para taller o garaje.' }
        ],
        'armarios': [
          { name: 'Armario Multiusos', price: 'Desde $10,500', image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=500', description: 'Armario versátil con repisas y barras.' },
          { name: 'Armario Lavandería', price: 'Desde $12,800', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500', description: 'Diseñado para área de lavado.' }
        ],
        'baules': [
          { name: 'Baúl de Madera Grande', price: 'Desde $5,500', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500', description: 'Baúl decorativo con almacenamiento.' },
          { name: 'Baúl con Ruedas', price: 'Desde $6,800', image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500', description: 'Fácil de mover, ideal bajo cama.' }
        ],
        'multiusos': [
          { name: 'Mueble Multiusos Compacto', price: 'Desde $7,200', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500', description: 'Combina repisas, cajones y puertas.' },
          { name: 'Cubos Apilables Set', price: 'Desde $4,800', image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500', description: 'Set de cubos que se apilan y configuran.' }
        ]
      }
    },
    {
      id: 'puertas',
      name: 'Puertas',
      icon: DoorClosed,
      description: 'Puertas de madera y diseños especiales para interiores.',
      subcategories: [
        { id: 'puertas-madera', name: 'Madera Sólida' },
        { id: 'puertas-herreria', name: 'Con Herrería' },
        { id: 'puertas-corredizas', name: 'Corredizas' },
        { id: 'puertas-granero', name: 'Tipo Granero' },
        { id: 'puertas-interiores', name: 'Interiores' }
      ],
      items: {
        'puertas-madera': [
          { name: 'Puerta Principal Madera', price: 'Desde $12,000', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500', description: 'Puerta de entrada en madera sólida.' },
          { name: 'Puerta Madera Tallada', price: 'Desde $18,500', image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=500', description: 'Puerta con diseño tallado artesanal.' }
        ],
        'puertas-herreria': [
          { name: 'Puerta Madera + Hierro', price: 'Desde $16,500', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500', description: 'Combinación elegante de materiales.' },
          { name: 'Puerta con Vitral', price: 'Desde $22,000', image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=500', description: 'Puerta con inserción de vitral decorativo.' }
        ],
        'puertas-corredizas': [
          { name: 'Puerta Corrediza Simple', price: 'Desde $8,500', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500', description: 'Sistema corredizo básico, ahorra espacio.' },
          { name: 'Puerta Corrediza Doble', price: 'Desde $16,000', image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=500', description: 'Sistema de dos hojas corredizas.' }
        ],
        'puertas-granero': [
          { name: 'Puerta Tipo Granero', price: 'Desde $14,500', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500', description: 'Estilo rústico con herraje expuesto.' },
          { name: 'Puerta Granero Industrial', price: 'Desde $18,000', image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=500', description: 'Versión industrial con acabados metálicos.' }
        ],
        'puertas-interiores': [
          { name: 'Puerta Interior Lisa', price: 'Desde $4,500', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500', description: 'Puerta interior minimalista.' },
          { name: 'Puerta Interior 6 Tableros', price: 'Desde $6,200', image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=500', description: 'Diseño clásico de tableros.' },
          { name: 'Puerta Interior con Vidrio', price: 'Desde $7,800', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500', description: 'Permite paso de luz entre espacios.' }
        ]
      }
    }
  ];

  const currentCategory = categories.find(cat => cat.id === activeCategory);

  const getDisplayItems = () => {
    if (!currentCategory) return [];
    if (currentCategory.subcategories) {
      const subcat = activeSubcategory || currentCategory.subcategories[0]?.id;
      return currentCategory.items[subcat] || [];
    }
    return currentCategory.items || [];
  };

  const displayItems = getDisplayItems();

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    const category = categories.find(cat => cat.id === categoryId);
    if (category?.subcategories) {
      setActiveSubcategory(category.subcategories[0]?.id);
    } else {
      setActiveSubcategory(null);
    }
  };

  useEffect(() => {
    if (currentCategory?.subcategories && !activeSubcategory) {
      setActiveSubcategory(currentCategory.subcategories[0]?.id);
    }
  }, [currentCategory, activeSubcategory]);

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
            <Package className="w-6 h-6 md:w-8 md:h-8 text-highlight" />
            <span className="text-highlight font-bold uppercase tracking-wider text-sm md:text-lg">
              Catálogo de Productos
            </span>
          </motion.div>
          <h1 className="text-2xl md:text-5xl font-bold text-main mb-2 md:mb-6 tracking-tight">
            Muebles de <span className="gradient-text">Alta Calidad</span>
          </h1>
          <p className="text-sm md:text-lg text-subtle max-w-3xl mx-auto px-2">
            Explora nuestra línea de productos estándar. ¿No encuentras lo que buscas?
            <span className="text-highlight font-semibold"> Fabricamos a tu medida.</span>
          </p>
        </motion.div>

        {/* Categorías - Scroll horizontal en mobile, Grid en desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 md:mb-10"
        >
          {/* Mobile: Scroll horizontal */}
          <div className="md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4">
            <div className="flex gap-2 pb-2" style={{ width: 'max-content' }}>
              {categories.map((category) => {
                const IconComponent = category.icon;
                const isActive = activeCategory === category.id;
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300
                      ${isActive
                        ? 'bg-gold-gradient text-primary shadow-md'
                        : 'bg-card text-main border border-card'
                      }`}
                  >
                    <IconComponent className={`w-4 h-4 ${isActive ? 'text-primary' : 'text-highlight'}`} />
                    <span>{category.name}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid grid-cols-5 gap-3">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative flex flex-col items-center gap-2 px-4 py-4 rounded-xl text-sm font-semibold transition-all duration-300
                    ${isActive
                      ? 'bg-gold-gradient text-primary shadow-lg'
                      : 'bg-card text-main hover:bg-card/80 border border-transparent hover:border-accent/30'
                    }`}
                >
                  <IconComponent className={`w-6 h-6 ${isActive ? 'text-primary' : 'text-highlight'}`} />
                  <span className="text-center leading-tight">{category.name}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Subcategorías - Scroll horizontal en mobile */}
        <AnimatePresence mode="wait">
          {currentCategory?.subcategories && (
            <motion.div
              key={`subcats-${activeCategory}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mb-6 md:mb-8"
            >
              {/* Mobile: Scroll horizontal */}
              <div className="md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4">
                <div className="flex gap-2 pb-2" style={{ width: 'max-content' }}>
                  {currentCategory.subcategories.map((subcat) => {
                    const isActive = (activeSubcategory || currentCategory.subcategories[0]?.id) === subcat.id;
                    return (
                      <motion.button
                        key={subcat.id}
                        onClick={() => setActiveSubcategory(subcat.id)}
                        whileTap={{ scale: 0.95 }}
                        className={`relative px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300
                          ${isActive
                            ? 'bg-highlight text-white'
                            : 'bg-card/70 text-subtle'
                          }`}
                      >
                        {subcat.name}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Desktop: Flex wrap con animación */}
              <div className="hidden md:flex flex-wrap justify-center gap-2">
                {currentCategory.subcategories.map((subcat, index) => {
                  const isActive = (activeSubcategory || currentCategory.subcategories[0]?.id) === subcat.id;
                  return (
                    <motion.button
                      key={subcat.id}
                      onClick={() => setActiveSubcategory(subcat.id)}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: index * 0.03 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                        ${isActive
                          ? 'text-white'
                          : 'text-subtle hover:text-main bg-card/50 hover:bg-card'
                        }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="subcategoryPill"
                          className="absolute inset-0 bg-highlight rounded-full"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 35 }}
                        />
                      )}
                      <span className="relative z-10">{subcat.name}</span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Descripción de Categoría - Solo en desktop */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="hidden md:block text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-main mb-3">
              {currentCategory?.name}
            </h2>
            <p className="text-subtle max-w-2xl mx-auto">
              {currentCategory?.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Grid de Productos */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${activeSubcategory}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {displayItems.map((item, index) => (
              <motion.div
                key={`${item.name}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className={`group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${item.isPaquete ? 'ring-2 ring-highlight/50' : ''}`}
              >
                {/* Badge de Paquete */}
                {item.isPaquete && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-highlight text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      PAQUETE
                    </span>
                  </div>
                )}

                <Link href={`/productos/${generateProductId(item.name)}`}>
                  <div className="h-52 overflow-hidden relative cursor-pointer">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block bg-gold-gradient text-primary text-sm font-bold px-3 py-1 rounded-full">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </Link>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-main mb-2 group-hover:text-highlight transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-subtle text-sm leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <Link href={`/productos/${generateProductId(item.name)}`} className="inline-block">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-highlight hover:bg-highlight/90 text-white px-4 py-2.5 rounded-lg transition-all duration-300 font-semibold text-sm flex items-center gap-2"
                    >
                      Ver Producto
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA - ¿No encuentras lo que buscas? */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-card via-card/80 to-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-highlight/5 via-transparent to-highlight/5" />
          <div className="relative z-10">
            <MessageCircle className="w-12 h-12 text-highlight mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-main mb-4">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-subtle mb-8 max-w-2xl mx-auto text-lg">
              Todos nuestros productos pueden personalizarse. Medidas especiales,
              colores, materiales... <span className="text-highlight font-semibold">Fabricamos a tu medida.</span>
            </p>
            <Link href="/contacto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold-gradient text-primary hover:opacity-90 transition-all duration-300 px-10 py-4 rounded-xl text-lg font-bold shadow-xl"
              >
                Cotiza tu Proyecto Personalizado
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsContent;
