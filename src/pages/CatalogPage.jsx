import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const CatalogPage = () => {
  const [activeCategory, setActiveCategory] = useState('remodelaciones');

  const categories = [
    {
      id: 'remodelaciones',
      name: 'Remodelaciones Completas',
      description: 'Transformamos completamente tus espacios con diseños innovadores y acabados de alta calidad.',
      items: [
        {
          name: 'Remodelación Básica',
          price: 'Desde $150,000',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Renovación de espacios con materiales estándar y acabados de calidad.'
        },
        {
          name: 'Remodelación Premium',
          price: 'Desde $300,000',
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Transformación completa con materiales premium y diseño personalizado.'
        },
        {
          name: 'Remodelación Integral',
          price: 'Desde $500,000',
          image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Renovación total con los mejores materiales, tecnología integrada y diseño exclusivo.'
        }
      ]
    },
    {
      id: 'cocinas',
      name: 'Cocinas Integrales',
      description: 'Diseñamos y fabricamos cocinas funcionales y elegantes que se adaptan a tu espacio y necesidades.',
      items: [
        {
          name: 'Cocina Estándar',
          price: 'Desde $80,000',
          image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Cocina funcional con materiales de calidad y diseño práctico.'
        },
        {
          name: 'Cocina Premium',
          price: 'Desde $150,000',
          image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Cocina con materiales de alta gama, electrodomésticos integrados y diseño personalizado.'
        },
        {
          name: 'Cocina de Lujo',
          price: 'Desde $250,000',
          image: 'https://images.unsplash.com/photo-1556911261-6bd341186b2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Cocina de diseñador con materiales exclusivos, tecnología de punta y acabados perfectos.'
        }
      ]
    },
    {
      id: 'acabados',
      name: 'Acabados Premium',
      description: 'Ofrecemos los mejores acabados para darle a tu hogar un aspecto elegante y duradero.',
      items: [
        {
          name: 'Acabados en Madera',
          price: 'Desde $1,500/m²',
          image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Revestimientos y acabados en maderas finas con tratamientos especiales.'
        },
        {
          name: 'Acabados en Piedra',
          price: 'Desde $2,000/m²',
          image: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Revestimientos en piedra natural, mármol y granito de la más alta calidad.'
        },
        {
          name: 'Acabados Decorativos',
          price: 'Desde $1,200/m²',
          image: 'https://images.unsplash.com/photo-1614631446501-abcf76949372?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Técnicas decorativas especiales como microcemento, estuco veneciano y más.'
        }
      ]
    },
    {
      id: 'impermeabilizacion',
      name: 'Impermeabilización Avanzada',
      description: 'Sistemas de impermeabilización de última generación para proteger tu hogar de la humedad.',
      items: [
        {
          name: 'Impermeabilización Básica',
          price: 'Desde $180/m²',
          image: 'https://images.unsplash.com/photo-1621115937174-e2e6f81df229?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Sistema de impermeabilización estándar con garantía de 3 años.'
        },
        {
          name: 'Impermeabilización Avanzada',
          price: 'Desde $280/m²',
          image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Sistema de impermeabilización de alto rendimiento con garantía de 5 años.'
        },
        {
          name: 'Impermeabilización Premium',
          price: 'Desde $380/m²',
          image: 'https://images.unsplash.com/photo-1621115937174-e2e6f81df229?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Sistema de impermeabilización de última generación con garantía de 10 años.'
        }
      ]
    },
    {
      id: 'muebles',
      name: 'Muebles Personalizados',
      description: 'Diseñamos y fabricamos muebles a medida que se adaptan perfectamente a tu espacio y estilo.',
      items: [
        {
          name: 'Muebles de Sala',
          price: 'Desde $15,000',
          image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Sofás, mesas y muebles auxiliares personalizados para tu sala de estar.'
        },
        {
          name: 'Muebles de Dormitorio',
          price: 'Desde $25,000',
          image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Camas, armarios y muebles auxiliares para tu dormitorio.'
        },
        {
          name: 'Muebles de Oficina',
          price: 'Desde $18,000',
          image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Escritorios, librerías y muebles de almacenamiento para tu espacio de trabajo.'
        },
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
      ]
    },
    {
      id: 'mantenimiento',
      name: 'Mantenimiento Integral',
      description: 'Servicios de mantenimiento para conservar tus espacios en perfecto estado.',
      items: [
        {
          name: 'Mantenimiento Básico',
          price: 'Desde $3,500',
          image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Revisión y mantenimiento general de instalaciones y acabados.'
        },
        {
          name: 'Mantenimiento Preventivo',
          price: 'Desde $7,500',
          image: 'https://images.unsplash.com/photo-1621905251189-08b45249ff49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Programa de mantenimiento preventivo para evitar problemas futuros.'
        },
        {
          name: 'Mantenimiento Correctivo',
          price: 'Desde $5,000',
          image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Solución de problemas específicos en instalaciones y acabados.'
        }
      ]
    }
  ];

  const currentCategory = categories.find(cat => cat.id === activeCategory);

  return (
    <div className="min-h-screen pt-20 bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 mb-4">
            <Briefcase className="w-8 h-8 text-highlight" />
            <span className="text-highlight font-bold uppercase tracking-wider text-lg">
              Nuestro Catálogo
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-main mb-6 tracking-tight">
            Explora Nuestros <span className="gradient-text">Servicios y Productos</span>
          </h1>
          <p className="text-lg text-subtle max-w-3xl mx-auto">
            Descubre nuestra amplia gama de servicios y productos de alta calidad para transformar tus espacios.
          </p>
        </motion.div>

        {/* Categorías */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeCategory === category.id 
                  ? 'bg-accent text-white shadow-lg' 
                  : 'bg-card text-main hover:bg-card/80'
                }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Categoría Activa */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-main mb-4">{currentCategory.name}</h2>
            <p className="text-subtle max-w-3xl mx-auto">{currentCategory.description}</p>
          </div>

          {/* Productos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentCategory.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect rounded-xl overflow-hidden shadow-lg"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-main mb-2">{item.name}</h3>
                  <p className="text-subtle mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-highlight font-bold text-lg">{item.price}</span>
                    <button className="bg-gold-gradient hover:bg-accent/80 text-primary px-4 py-2 rounded-md transition-colors duration-300 golden-glow">
                      Más Info
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center bg-card p-8 rounded-2xl shadow-xl"
        >
          <h3 className="text-2xl font-bold text-main mb-4">¿Necesitas un servicio personalizado?</h3>
          <p className="text-subtle mb-6 max-w-2xl mx-auto">
            Contáctanos para recibir una cotización personalizada adaptada a tus necesidades específicas.
          </p>
          <Link to="/contacto">
            <button className="bg-gold-gradient text-primary hover:scale-105 transition-all duration-300 px-8 py-3 rounded-md text-lg font-semibold golden-glow shadow-lg">
              Solicitar Cotización
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CatalogPage;