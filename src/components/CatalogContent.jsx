'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  ChevronDown,
  Hammer,
  Sofa,
  Layers,
  Droplets,
  Home,
  ChefHat,
  DoorOpen,
  BedDouble,
  Archive,
  Grid3X3,
  PaintBucket,
  Wrench,
  Shield,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

const CatalogContent = ({ servicioInicial }) => {
  const [activeCategory, setActiveCategory] = useState(servicioInicial || 'metal');
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  // Actualizar categoría si cambia el parámetro de URL
  useEffect(() => {
    if (servicioInicial) {
      setActiveCategory(servicioInicial);
      setActiveSubcategory(null);
    }
  }, [servicioInicial]);

  const categories = [
    {
      id: 'metal',
      name: 'Metal & Forja Arquitectónica',
      icon: Hammer,
      description: 'Diseño y fabricación de estructuras metálicas con acabados premium. Barandales, portones, escaleras y más.',
      subcategories: null,
      items: [
        {
          name: 'Portones Residenciales',
          price: 'Desde $18,000',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Portones de diseño exclusivo con acabados anticorrosivos y sistemas automatizados.'
        },
        {
          name: 'Barandales de Lujo',
          price: 'Desde $2,500/ml',
          image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Barandales arquitectónicos en acero inoxidable, hierro forjado o diseños mixtos.'
        },
        {
          name: 'Escaleras Metálicas',
          price: 'Desde $35,000',
          image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Escaleras de diseño contemporáneo con estructura de acero y acabados personalizados.'
        },
        {
          name: 'Pérgolas y Techados',
          price: 'Desde $15,000/m²',
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Estructuras metálicas para exteriores con diseños modernos y resistentes.'
        },
        {
          name: 'Rejas y Protecciones',
          price: 'Desde $1,800/m²',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Protecciones de seguridad con diseños elegantes que complementan la arquitectura.'
        },
        {
          name: 'Herrería Decorativa',
          price: 'Cotización personalizada',
          image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Piezas artísticas en metal para interiores y exteriores, diseños únicos y exclusivos.'
        }
      ]
    },
    {
      id: 'carpinteria',
      name: 'Carpintería de Diseño',
      icon: Sofa,
      description: 'Muebles por catálogo fabricados con los mejores materiales. Desde cocinas integrales hasta mobiliario personalizado.',
      subcategories: [
        { id: 'escritorios', name: 'Escritorios', icon: Briefcase },
        { id: 'cocinas', name: 'Cocinas Integrales', icon: ChefHat },
        { id: 'closets', name: 'Closets', icon: Archive },
        { id: 'puertas', name: 'Puertas', icon: DoorOpen },
        { id: 'camas', name: 'Camas y Cabeceras', icon: BedDouble }
      ],
      items: {
        escritorios: [
          {
            name: 'Escritorio Café Ejecutivo',
            price: 'Desde $22,000',
            image: '/img/escritorios/cafe/mueblecafe.jpeg',
            description: 'Escritorio ejecutivo en tono café con acabados de lujo y amplio espacio de trabajo.'
          },
          {
            name: 'Escritorio Café Moderno',
            price: 'Desde $19,500',
            image: '/img/escritorios/cafe/mueblecafe1.jpeg',
            description: 'Diseño moderno con líneas limpias y funcionalidad optimizada para oficina.'
          },
          {
            name: 'Escritorio Café Clásico',
            price: 'Desde $24,000',
            image: '/img/escritorios/cafe/mueblecafe2.jpeg',
            description: 'Estilo clásico con detalles tradicionales y construcción robusta.'
          },
          {
            name: 'Escritorio Café Minimalista',
            price: 'Desde $17,800',
            image: '/img/escritorios/cafe/mueblecafe3.jpeg',
            description: 'Diseño minimalista perfecto para espacios contemporáneos.'
          },
          {
            name: 'Escritorio Café Premium',
            price: 'Desde $28,500',
            image: '/img/escritorios/cafe/mueblecafe4.jpeg',
            description: 'Escritorio premium con acabados de alta calidad y diseño exclusivo.'
          },
          {
            name: 'Escritorio Café Compacto',
            price: 'Desde $16,200',
            image: '/img/escritorios/cafe/mueblecafe5.jpeg',
            description: 'Solución compacta ideal para espacios reducidos sin sacrificar funcionalidad.'
          },
          {
            name: 'Escritorio Café Industrial',
            price: 'Desde $21,700',
            image: '/img/escritorios/cafe/mueblecafe6.jpeg',
            description: 'Estilo industrial con estructura metálica y superficie de madera café.'
          },
          {
            name: 'Escritorio Café Ergonómico',
            price: 'Desde $23,400',
            image: '/img/escritorios/cafe/mueblecafe7.jpeg',
            description: 'Diseño ergonómico que prioriza la comodidad y productividad.'
          },
          {
            name: 'Escritorio Café L-Shape',
            price: 'Desde $26,800',
            image: '/img/escritorios/cafe/mueblecafe8.jpeg',
            description: 'Escritorio en forma de L para maximizar el espacio de trabajo.'
          },
          {
            name: 'Escritorio Café Vintage',
            price: 'Desde $20,300',
            image: '/img/escritorios/cafe/mueblecafe9.jpeg',
            description: 'Estilo vintage con carácter único y detalles artesanales.'
          },
          {
            name: 'Escritorio Café Deluxe',
            price: 'Desde $31,200',
            image: '/img/escritorios/cafe/muebelcafe10.jpeg',
            description: 'Modelo deluxe con características premium y acabados excepcionales.'
          },
          {
            name: 'Escritorio Café Funcional',
            price: 'Desde $18,600',
            image: '/img/escritorios/cafe/mueblecafe11.jpeg',
            description: 'Máxima funcionalidad con múltiples compartimentos y organización inteligente.'
          },
          {
            name: 'Escritorio Café Elegante',
            price: 'Desde $25,100',
            image: '/img/escritorios/cafe/mueblecafe12.jpeg',
            description: 'Elegancia refinada con líneas sofisticadas y presencia imponente.'
          },
          {
            name: 'Escritorio Café Contemporáneo',
            price: 'Desde $22,900',
            image: '/img/escritorios/cafe/mueblecafe13.jpeg',
            description: 'Diseño contemporáneo que combina estilo y funcionalidad moderna.'
          },
          {
            name: 'Escritorio Café Artesanal',
            price: 'Desde $27,600',
            image: '/img/escritorios/cafe/mueblecafe14.jpeg',
            description: 'Trabajo artesanal con detalles únicos y construcción personalizada.'
          },
          {
            name: 'Escritorio Café Profesional',
            price: 'Desde $24,700',
            image: '/img/escritorios/cafe/mueblecafe15.jpeg',
            description: 'Diseño profesional ideal para ejecutivos y espacios corporativos.'
          },
          {
            name: 'Escritorio Café Luxury',
            price: 'Desde $33,500',
            image: '/img/escritorios/cafe/muebelcafe16.jpeg',
            description: 'Lujo absoluto con materiales premium y diseño exclusivo.'
          },
          {
            name: 'Escritorio Café Modular',
            price: 'Desde $19,800',
            image: '/img/escritorios/cafe/mueblecafe17.jpeg',
            description: 'Sistema modular adaptable a diferentes configuraciones y necesidades.'
          },
          {
            name: 'Escritorio Café Signature',
            price: 'Desde $29,400',
            image: '/img/escritorios/cafe/muebelcafe18.jpeg',
            description: 'Modelo signature con características distintivas y acabados únicos.'
          },
          {
            name: 'Escritorio Café Smart',
            price: 'Desde $21,100',
            image: '/img/escritorios/cafe/mueblecafe19.jpeg',
            description: 'Tecnología integrada con soluciones inteligentes para el trabajo moderno.'
          },
          {
            name: 'Escritorio Café Executive Plus',
            price: 'Desde $26,300',
            image: '/img/escritorios/cafe/mueblecafe20.jpeg',
            description: 'Versión ejecutiva plus con características avanzadas y diseño imponente.'
          },
          {
            name: 'Escritorio Café Master',
            price: 'Desde $30,800',
            image: '/img/escritorios/cafe/muebelcafe21.jpeg',
            description: 'Modelo master que representa la excelencia en diseño y funcionalidad.'
          },
          {
            name: 'Escritorio Café Studio',
            price: 'Desde $18,200',
            image: '/img/escritorios/cafe/mueblecafe23.jpeg',
            description: 'Perfecto para estudios creativos con espacios optimizados para la inspiración.'
          },
          {
            name: 'Escritorio Café Director',
            price: 'Desde $32,100',
            image: '/img/escritorios/cafe/mueblecafe24.jpeg',
            description: 'Escritorio de director con presencia ejecutiva y acabados de primera clase.'
          },
          {
            name: 'Escritorio Café Innovation',
            price: 'Desde $23,700',
            image: '/img/escritorios/cafe/mueblecafe25.jpeg',
            description: 'Diseño innovador que redefine el concepto de espacio de trabajo.'
          },
          {
            name: 'Escritorio Café Elite',
            price: 'Desde $28,900',
            image: '/img/escritorios/cafe/mueblecafe26.jpeg',
            description: 'Modelo elite para usuarios exigentes que buscan lo mejor en calidad.'
          },
          {
            name: 'Escritorio Café Supreme',
            price: 'Desde $35,200',
            image: '/img/escritorios/cafe/mueblecafe27.jpeg',
            description: 'La expresión suprema del lujo y la funcionalidad en un escritorio.'
          },
          {
            name: 'Escritorio Café Collection',
            price: 'Desde $20,500',
            image: '/img/escritorios/cafe/mueblecafecosas.jpeg',
            description: 'Parte de nuestra colección especial con accesorios y complementos únicos.'
          }
        ],
        cocinas: [
          {
            name: 'Cocina Integral Moderna',
            price: 'Desde $85,000',
            image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Cocina con diseño contemporáneo, materiales de alta durabilidad y máxima funcionalidad.'
          },
          {
            name: 'Cocina Integral Premium',
            price: 'Desde $150,000',
            image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Acabados de lujo con electrodomésticos integrados y diseño personalizado.'
          },
          {
            name: 'Cocina Integral de Lujo',
            price: 'Desde $250,000',
            image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'La máxima expresión en cocinas con materiales importados y tecnología de punta.'
          }
        ],
        closets: [
          {
            name: 'Closet Modular',
            price: 'Desde $25,000',
            image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Sistema modular adaptable a cualquier espacio con organización inteligente.'
          },
          {
            name: 'Closet Vestidor',
            price: 'Desde $45,000',
            image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Vestidor completo con iluminación LED, cajones y espacios personalizados.'
          },
          {
            name: 'Closet Premium',
            price: 'Desde $75,000',
            image: 'https://images.unsplash.com/photo-1597072689227-8882273e8f6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Diseño exclusivo con acabados de alta gama y accesorios importados.'
          }
        ],
        puertas: [
          {
            name: 'Puerta Principal de Madera',
            price: 'Desde $12,000',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Puertas de entrada en madera sólida con diseños clásicos y modernos.'
          },
          {
            name: 'Puerta Interior',
            price: 'Desde $5,500',
            image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Puertas para interiores con acabados elegantes y herrajes de calidad.'
          },
          {
            name: 'Puerta Corrediza',
            price: 'Desde $18,000',
            image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Sistemas de puertas corredizas para optimizar espacios con estilo.'
          }
        ],
        camas: [
          {
            name: 'Cabecera Tapizada',
            price: 'Desde $8,500',
            image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Cabeceras tapizadas en telas premium con diseños contemporáneos.'
          },
          {
            name: 'Cama King Size Completa',
            price: 'Desde $28,000',
            image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Cama completa con base, cabecera y buros integrados en diseño uniforme.'
          },
          {
            name: 'Cama con Almacenaje',
            price: 'Desde $22,000',
            image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Base de cama con cajones y compartimentos para maximizar el almacenamiento.'
          }
        ]
      }
    },
    {
      id: 'tablaroca',
      name: 'Tablaroca & Acabados',
      icon: Layers,
      description: 'Instalación profesional de drywall con diferentes niveles de acabado. Desde divisiones básicas hasta superficies ultra lisas.',
      subcategories: [
        { id: 'etapa1', name: 'Etapa 1 - Básico', icon: Grid3X3 },
        { id: 'etapa2', name: 'Etapa 2 - Encintado', icon: Grid3X3 },
        { id: 'etapa3', name: 'Etapa 3 - Lijado', icon: Grid3X3 },
        { id: 'etapa4', name: 'Etapa 4 - Fino', icon: Grid3X3 },
        { id: 'etapa5', name: 'Etapa 5 - Premium', icon: Grid3X3 },
        { id: 'divisiones', name: 'Divisiones', icon: Layers }
      ],
      items: {
        etapa1: [
          {
            name: 'Acabado Etapa 1',
            price: 'Desde $180/m²',
            image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Instalación básica de tablaroca. Ideal para áreas ocultas como áticos, bodegas o sobre plafones.'
          }
        ],
        etapa2: [
          {
            name: 'Acabado Etapa 2',
            price: 'Desde $220/m²',
            image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Encintado y primera capa de compuesto. Para áreas de garajes o donde se aplicará textura gruesa.'
          }
        ],
        etapa3: [
          {
            name: 'Acabado Etapa 3',
            price: 'Desde $280/m²',
            image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Segunda capa de compuesto y lijado inicial. Acabado estándar para texturas medianas o ligeras.'
          }
        ],
        etapa4: [
          {
            name: 'Acabado Etapa 4',
            price: 'Desde $350/m²',
            image: 'https://images.unsplash.com/photo-1614631446501-abcf76949372?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Acabado fino listo para pintura. Superficie lisa con mínimas imperfecciones, ideal para interiores residenciales.'
          }
        ],
        etapa5: [
          {
            name: 'Acabado Etapa 5 Premium',
            price: 'Desde $450/m²',
            image: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Acabado ultra liso de nivel premium. Para iluminación rasante, pinturas brillantes o acabados de alta exigencia.'
          }
        ],
        divisiones: [
          {
            name: 'División Simple',
            price: 'Desde $650/m²',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Muro divisorio sencillo con estructura metálica y tablaroca por ambos lados.'
          },
          {
            name: 'División con Aislamiento',
            price: 'Desde $850/m²',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'División con aislamiento acústico y térmico para mayor privacidad y confort.'
          },
          {
            name: 'División Resistente al Fuego',
            price: 'Desde $1,100/m²',
            image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Muros con certificación de resistencia al fuego para cumplimiento de normativas.'
          }
        ]
      }
    },
    {
      id: 'impermeabilizacion',
      name: 'Impermeabilización Profesional',
      icon: Droplets,
      description: 'Protección total contra filtraciones con tecnología de punta. Desde impermeabilizantes acrílicos hasta membranas prefabricadas de larga duración.',
      subcategories: [
        { id: 'acrilica', name: 'Acrílica', icon: PaintBucket },
        { id: 'ranurado', name: 'Ranurado de Grietas', icon: Wrench },
        { id: 'membrana', name: 'Membrana Prefabricada', icon: Shield }
      ],
      items: {
        acrilica: [
          {
            name: 'Impermeabilización Acrílica 3 Años',
            price: 'Desde $120/m²',
            image: 'https://images.unsplash.com/photo-1621115937174-e2e6f81df229?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Sistema acrílico básico con 3 años de garantía. Ideal para techos en buen estado.'
          },
          {
            name: 'Impermeabilización Acrílica 5 Años',
            price: 'Desde $180/m²',
            image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Sistema acrílico reforzado con fibra de vidrio y 5 años de garantía.'
          },
          {
            name: 'Impermeabilización Acrílica 7 Años',
            price: 'Desde $250/m²',
            image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Sistema premium con múltiples capas, elasticidad superior y 7 años de garantía.'
          }
        ],
        ranurado: [
          {
            name: 'Ranurado y Sellado Básico',
            price: 'Desde $80/ml',
            image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Ranurado de grietas menores y sellado con poliuretano flexible.'
          },
          {
            name: 'Ranurado y Sellado Profundo',
            price: 'Desde $150/ml',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45249ff49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Tratamiento de grietas profundas con inyección de resina y sellado estructural.'
          },
          {
            name: 'Ranurado en Juntas de Colado',
            price: 'Desde $200/ml',
            image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Tratamiento especializado para juntas frías y uniones de colado con selladores premium.'
          }
        ],
        membrana: [
          {
            name: 'Membrana Prefabricada 5 Años',
            price: 'Desde $280/m²',
            image: 'https://images.unsplash.com/photo-1621115937174-e2e6f81df229?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Manto asfáltico SBS de 3mm aplicado con termofusión. Garantía de 5 años.'
          },
          {
            name: 'Membrana Prefabricada 10 Años',
            price: 'Desde $380/m²',
            image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Sistema SIKAMANTO o equivalente de 4mm con refuerzo de poliéster. Garantía de 10 años.'
          },
          {
            name: 'Membrana Prefabricada 15 Años Premium',
            price: 'Desde $520/m²',
            image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Sistema premium bicapa con membrana autoprotegida y acabado reflectivo. Garantía de 15 años.'
          }
        ]
      }
    },
    {
      id: 'remodelacion',
      name: 'Remodelación Integral',
      icon: Home,
      description: 'Transformamos cualquier espacio con diseño profesional y ejecución impecable. Proyectos residenciales y comerciales.',
      subcategories: null,
      items: [
        {
          name: 'Remodelación de Baños',
          price: 'Desde $45,000',
          image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Renovación completa de baños incluyendo plomería, acabados y accesorios de diseño.'
        },
        {
          name: 'Remodelación de Recámaras',
          price: 'Desde $35,000',
          image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Transformación de recámaras con nuevos acabados, iluminación y mobiliario integrado.'
        },
        {
          name: 'Remodelación de Salas',
          price: 'Desde $50,000',
          image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Renovación integral de áreas sociales con diseño de interiores profesional.'
        },
        {
          name: 'Remodelación Comercial',
          price: 'Cotización personalizada',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Proyectos para oficinas, locales comerciales y espacios corporativos.'
        },
        {
          name: 'Remodelación Integral de Casa',
          price: 'Desde $250,000',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Renovación completa de vivienda con coordinación de todos los oficios y acabados.'
        },
        {
          name: 'Ampliaciones',
          price: 'Desde $8,500/m²',
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Construcción de nuevos espacios integrados a la estructura existente.'
        }
      ]
    }
  ];

  const currentCategory = categories.find(cat => cat.id === activeCategory);

  // Determinar qué items mostrar
  const getDisplayItems = () => {
    if (!currentCategory) return [];

    if (currentCategory.subcategories) {
      // Si hay subcategorías, mostrar la subcategoría activa o la primera por defecto
      const subcat = activeSubcategory || currentCategory.subcategories[0]?.id;
      return currentCategory.items[subcat] || [];
    }

    return currentCategory.items || [];
  };

  const displayItems = getDisplayItems();

  // Cambiar categoría y resetear subcategoría
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    const category = categories.find(cat => cat.id === categoryId);
    if (category?.subcategories) {
      setActiveSubcategory(category.subcategories[0]?.id);
    } else {
      setActiveSubcategory(null);
    }
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.07,
        delayChildren: 0.15
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9,
      rotateX: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
            className="inline-flex items-center space-x-2 mb-4"
          >
            <Sparkles className="w-8 h-8 text-highlight" />
            <span className="text-highlight font-bold uppercase tracking-wider text-lg">
              Catálogo de Servicios
            </span>
            <Sparkles className="w-8 h-8 text-highlight" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-main mb-6 tracking-tight">
            Soluciones <span className="gradient-text">Profesionales</span>
          </h1>
          <p className="text-lg text-subtle max-w-3xl mx-auto">
            Explora nuestra gama completa de servicios especializados. Calidad, innovación y diseño al servicio de tus proyectos.
          </p>
        </motion.div>

        {/* Categorías Principales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-md
                  ${activeCategory === category.id
                    ? 'bg-gold-gradient text-primary golden-glow'
                    : 'bg-card text-main hover:bg-card/80 border border-transparent hover:border-accent/30'
                  }`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Subcategorías (si existen) */}
        <AnimatePresence mode="wait">
          {currentCategory?.subcategories && (
            <motion.div
              key={`subcats-${activeCategory}`}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-wrap justify-center gap-2 mb-8"
            >
              {currentCategory.subcategories.map((subcat, index) => {
                const SubIcon = subcat.icon;
                const isActive = (activeSubcategory || currentCategory.subcategories[0]?.id) === subcat.id;
                return (
                  <motion.button
                    key={subcat.id}
                    onClick={() => setActiveSubcategory(subcat.id)}
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.06,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    whileHover={{
                      scale: 1.08,
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-colors duration-300
                      ${isActive
                        ? 'text-highlight'
                        : 'text-subtle hover:text-main'
                      }`}
                  >
                    {/* Fondo animado que se mueve entre botones */}
                    {isActive && (
                      <motion.div
                        layoutId="subcategoryActiveBackground"
                        className="absolute inset-0 bg-accent/20 border border-highlight rounded-lg shadow-md"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30
                        }}
                      />
                    )}
                    <motion.span
                      className="relative z-10"
                      animate={{ rotate: isActive ? [0, -10, 10, 0] : 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <SubIcon className="w-4 h-4" />
                    </motion.span>
                    <span className="relative z-10">{subcat.name}</span>
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Descripción de Categoría */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-main mb-4">
              {currentCategory?.name}
            </h2>
            <p className="text-subtle max-w-3xl mx-auto">
              {currentCategory?.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Grid de Productos/Servicios */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${activeSubcategory}`}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {displayItems.map((item, index) => (
              <motion.div
                key={`${item.name}-${index}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-effect rounded-2xl overflow-hidden shadow-lg group metallic-border"
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-gold-gradient text-primary text-sm font-bold px-3 py-1 rounded-full">
                      {item.price}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-main mb-3 group-hover:text-highlight transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-subtle text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-card hover:bg-accent/20 text-main hover:text-accent border border-accent/30 hover:border-accent px-4 py-3 rounded-xl transition-all duration-300 font-semibold text-sm"
                  >
                    Solicitar Información
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-20 bg-card p-10 rounded-3xl shadow-xl metallic-border"
        >
          <Sparkles className="w-12 h-12 text-highlight mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold text-main mb-4">
            ¿Tienes un proyecto en mente?
          </h3>
          <p className="text-subtle mb-8 max-w-2xl mx-auto text-lg">
            Nuestro equipo de expertos está listo para hacer realidad tu visión.
            Solicita una cotización personalizada sin compromiso.
          </p>
          <Link href="/contacto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold-gradient text-primary hover:opacity-90 transition-all duration-300 px-10 py-4 rounded-xl text-lg font-bold golden-glow shadow-xl"
            >
              Cotiza tu Proyecto Ahora
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CatalogContent;
