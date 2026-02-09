'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Package,
  Truck,
  MapPin,
  User,
  Phone,
  Mail,
  CreditCard,
  Shield,
  CheckCircle2,
  AlertCircle,
  Loader2
} from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

const CheckoutContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  // Datos del pedido desde URL
  const [orderData, setOrderData] = useState({
    productId: '',
    productName: '',
    productPrice: '',
    productImage: '',
    shippingCost: 0,
    distance: 0,
    shippingAddress: ''
  });

  // Datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    direccion: '',
    colonia: '',
    ciudad: '',
    codigoPostal: '',
    referencias: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Obtener datos de los parámetros de URL
    const producto = searchParams.get('producto') || '';
    const envio = searchParams.get('envio') || '0';
    const distancia = searchParams.get('distancia') || '0';
    const direccion = searchParams.get('direccion') || '';
    const precio = searchParams.get('precio') || '';
    const imagen = searchParams.get('imagen') || '';
    const id = searchParams.get('id') || '';

    setOrderData({
      productId: id,
      productName: decodeURIComponent(producto),
      productPrice: decodeURIComponent(precio),
      productImage: decodeURIComponent(imagen),
      shippingCost: parseInt(envio) || 0,
      distance: parseFloat(distancia) || 0,
      shippingAddress: decodeURIComponent(direccion)
    });

    // Pre-llenar dirección si viene en la URL
    if (direccion) {
      setFormData(prev => ({
        ...prev,
        direccion: decodeURIComponent(direccion)
      }));
    }

    setLoading(false);
  }, [searchParams]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar error al escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
    if (!formData.apellido.trim()) newErrors.apellido = 'El apellido es requerido';
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido';
    } else if (!/^\d{10}$/.test(formData.telefono.replace(/\s/g, ''))) {
      newErrors.telefono = 'Teléfono debe tener 10 dígitos';
    }
    if (!formData.direccion.trim()) newErrors.direccion = 'La dirección es requerida';
    if (!formData.colonia.trim()) newErrors.colonia = 'La colonia es requerida';
    if (!formData.ciudad.trim()) newErrors.ciudad = 'La ciudad es requerida';
    if (!formData.codigoPostal.trim()) {
      newErrors.codigoPostal = 'El código postal es requerido';
    } else if (!/^\d{5}$/.test(formData.codigoPostal)) {
      newErrors.codigoPostal = 'Código postal inválido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setProcessing(true);

    // Simular procesamiento de pago (2 segundos)
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Generar número de orden
    const orderNum = 'ARM-' + Date.now().toString(36).toUpperCase();
    setOrderNumber(orderNum);
    setOrderComplete(true);
    setProcessing(false);
  };

  // Extraer precio numérico
  const extractPrice = (priceStr) => {
    const match = priceStr.match(/[\d,]+/);
    if (match) {
      return parseInt(match[0].replace(/,/g, ''));
    }
    return 0;
  };

  const productPrice = extractPrice(orderData.productPrice);
  const total = productPrice + orderData.shippingCost;

  if (loading) {
    return (
      <div className="min-h-screen pt-20 bg-main flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-highlight border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Vista de orden completada
  if (orderComplete) {
    return (
      <div className="min-h-screen bg-main">
        <div className="max-w-2xl mx-auto px-4 py-2 md:py-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card rounded-2xl p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </motion.div>

            <h1 className="text-2xl md:text-3xl font-bold text-main mb-2">
              ¡Pedido Confirmado!
            </h1>
            <p className="text-subtle mb-6">
              Gracias por tu compra. Hemos recibido tu pedido.
            </p>

            <div className="bg-secondary/30 rounded-xl p-4 mb-6">
              <p className="text-sm text-subtle mb-1">Número de orden:</p>
              <p className="text-xl font-bold text-highlight">{orderNumber}</p>
            </div>

            <div className="bg-secondary/30 rounded-xl p-4 mb-6 text-left">
              <h3 className="font-semibold text-main mb-3">Resumen del pedido:</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-subtle">Producto:</span>
                  <span className="text-main">{orderData.productName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-subtle">Precio:</span>
                  <span className="text-main">{orderData.productPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-subtle">Envío:</span>
                  <span className="text-main">${orderData.shippingCost} MXN</span>
                </div>
                <hr className="border-border my-2" />
                <div className="flex justify-between font-bold">
                  <span className="text-main">Total:</span>
                  <span className="text-highlight">${total.toLocaleString()} MXN</span>
                </div>
              </div>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="text-sm font-semibold text-amber-500 mb-1">Próximos pasos:</p>
                  <p className="text-sm text-subtle">
                    Nos pondremos en contacto contigo al teléfono {formData.telefono} para confirmar los detalles de tu pedido y coordinar la entrega.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-3 justify-center">
              <Link href="/productos">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-highlight text-white px-5 py-2.5 rounded-lg font-semibold text-sm"
                >
                  Seguir Comprando
                </motion.button>
              </Link>
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-card border border-border text-main px-5 py-2.5 rounded-lg font-semibold text-sm"
                >
                  Ir al Inicio
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-14 md:pt-20 bg-main">
      <div className="max-w-6xl mx-auto px-4 py-4 md:py-8">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Formulario - 2 columnas en desktop */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card rounded-2xl p-6"
            >
              <h1 className="text-xl md:text-2xl font-bold text-main mb-6 flex items-center gap-2">
                <User className="w-6 h-6 text-highlight" />
                Datos de Entrega
              </h1>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nombre y Apellido */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-main mb-1">Nombre *</label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-secondary border rounded-xl text-main placeholder:text-subtle focus:outline-none focus:border-highlight transition-colors ${errors.nombre ? 'border-red-500' : 'border-border'}`}
                      placeholder="Tu nombre"
                    />
                    {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-main mb-1">Apellido *</label>
                    <input
                      type="text"
                      name="apellido"
                      value={formData.apellido}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-secondary border rounded-xl text-main placeholder:text-subtle focus:outline-none focus:border-highlight transition-colors ${errors.apellido ? 'border-red-500' : 'border-border'}`}
                      placeholder="Tu apellido"
                    />
                    {errors.apellido && <p className="text-red-500 text-xs mt-1">{errors.apellido}</p>}
                  </div>
                </div>

                {/* Email y Teléfono */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-main mb-1">Email *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-subtle" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 bg-secondary border rounded-xl text-main placeholder:text-subtle focus:outline-none focus:border-highlight transition-colors ${errors.email ? 'border-red-500' : 'border-border'}`}
                        placeholder="tu@email.com"
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-main mb-1">Teléfono *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-subtle" />
                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 bg-secondary border rounded-xl text-main placeholder:text-subtle focus:outline-none focus:border-highlight transition-colors ${errors.telefono ? 'border-red-500' : 'border-border'}`}
                        placeholder="10 dígitos"
                      />
                    </div>
                    {errors.telefono && <p className="text-red-500 text-xs mt-1">{errors.telefono}</p>}
                  </div>
                </div>

                <hr className="border-border my-4" />

                <h2 className="text-lg font-bold text-main flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-highlight" />
                  Dirección de Entrega
                </h2>

                {/* Dirección */}
                <div>
                  <label className="block text-sm font-medium text-main mb-1">Calle y Número *</label>
                  <input
                    type="text"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-secondary border rounded-xl text-main placeholder:text-subtle focus:outline-none focus:border-highlight transition-colors ${errors.direccion ? 'border-red-500' : 'border-border'}`}
                    placeholder="Calle, número exterior e interior"
                  />
                  {errors.direccion && <p className="text-red-500 text-xs mt-1">{errors.direccion}</p>}
                </div>

                {/* Colonia y Ciudad */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-main mb-1">Colonia *</label>
                    <input
                      type="text"
                      name="colonia"
                      value={formData.colonia}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-secondary border rounded-xl text-main placeholder:text-subtle focus:outline-none focus:border-highlight transition-colors ${errors.colonia ? 'border-red-500' : 'border-border'}`}
                      placeholder="Colonia"
                    />
                    {errors.colonia && <p className="text-red-500 text-xs mt-1">{errors.colonia}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-main mb-1">Ciudad *</label>
                    <input
                      type="text"
                      name="ciudad"
                      value={formData.ciudad}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-secondary border rounded-xl text-main placeholder:text-subtle focus:outline-none focus:border-highlight transition-colors ${errors.ciudad ? 'border-red-500' : 'border-border'}`}
                      placeholder="Ciudad o Municipio"
                    />
                    {errors.ciudad && <p className="text-red-500 text-xs mt-1">{errors.ciudad}</p>}
                  </div>
                </div>

                {/* Código Postal */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-main mb-1">Código Postal *</label>
                    <input
                      type="text"
                      name="codigoPostal"
                      value={formData.codigoPostal}
                      onChange={handleInputChange}
                      maxLength={5}
                      className={`w-full px-4 py-3 bg-secondary border rounded-xl text-main placeholder:text-subtle focus:outline-none focus:border-highlight transition-colors ${errors.codigoPostal ? 'border-red-500' : 'border-border'}`}
                      placeholder="00000"
                    />
                    {errors.codigoPostal && <p className="text-red-500 text-xs mt-1">{errors.codigoPostal}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-main mb-1">Referencias</label>
                    <input
                      type="text"
                      name="referencias"
                      value={formData.referencias}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-main placeholder:text-subtle focus:outline-none focus:border-highlight transition-colors"
                      placeholder="Entre calles, color de casa, etc."
                    />
                  </div>
                </div>

                {/* Botón de pago en móvil */}
                <div className="lg:hidden mt-6 flex justify-center">
                  <motion.button
                    type="submit"
                    disabled={processing}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gold-gradient text-primary px-6 py-3 rounded-lg font-bold text-sm shadow-lg disabled:opacity-50 flex items-center gap-2"
                  >
                    {processing ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Procesando...
                      </>
                    ) : (
                      <>
                        <CreditCard className="w-4 h-4" />
                        Confirmar - ${total.toLocaleString()} MXN
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Resumen del pedido - Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl p-6 sticky top-24"
            >
              <h2 className="text-lg font-bold text-main mb-4 flex items-center gap-2">
                <Package className="w-5 h-5 text-highlight" />
                Resumen del Pedido
              </h2>

              {/* Producto */}
              <div className="flex gap-4 mb-4 pb-4 border-b border-border">
                {orderData.productImage && (
                  <img
                    src={orderData.productImage}
                    alt={orderData.productName}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                )}
                <div className="flex-1">
                  <h3 className="font-semibold text-main text-sm">{orderData.productName || 'Producto'}</h3>
                  <p className="text-highlight font-bold">{orderData.productPrice || 'Precio por confirmar'}</p>
                </div>
              </div>

              {/* Envío */}
              <div className="space-y-3 mb-4 pb-4 border-b border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-subtle flex items-center gap-2">
                    <Truck className="w-4 h-4" />
                    Envío ({orderData.distance} km)
                  </span>
                  <span className="text-main font-medium">${orderData.shippingCost} MXN</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold text-main">Total</span>
                <span className="text-2xl font-bold text-highlight">${total.toLocaleString()} MXN</span>
              </div>

              {/* Botón de pago en desktop */}
              <div className="hidden lg:flex lg:justify-center">
                <motion.button
                  onClick={handleSubmit}
                  disabled={processing}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gold-gradient text-primary px-8 py-3 rounded-lg font-bold text-base shadow-lg disabled:opacity-50 flex items-center gap-2"
                >
                  {processing ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Procesando...
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-5 h-5" />
                      Confirmar Pedido
                    </>
                  )}
                </motion.button>
              </div>

              {/* Seguridad */}
              <div className="flex items-center justify-center gap-2 text-xs text-subtle mt-4">
                <Shield className="w-4 h-4" />
                <span>Pago seguro - Tus datos están protegidos</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutContent;
