
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  Phone,    
  Mail,  
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Star,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos incompletos",
        description: "Por favor, completa los campos obligatorios (*).",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);

    try {
      // Configuración de EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'No proporcionado',
        service: formData.service || 'No especificado',
        message: formData.message
      };

      // Enviar email usando EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "¡Mensaje Enviado Exitosamente!",
        description: "Gracias por contactarnos. Nos comunicaremos contigo a la brevedad.",
      });
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      console.error('Error al enviar el email:', error);
      toast({
        title: "Error al enviar mensaje",
        description: "Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Phone, title: 'Llámanos', info: '+52 (55) 1234-5678', description: 'Atención personalizada' },
    { icon: Mail, title: 'Escríbenos', info: 'contacto@armuza.com', description: 'Respuesta rápida garantizada' },
    // { icon: MapPin, title: 'Visítanos (Previa Cita)', info: 'Showroom en CDMX', description: 'Experimenta la calidad ARMUZA' },
    { icon: Clock, title: 'Horario de Atención', info: 'Lun-Vie: 9am-6pm', description: 'Sáb: 10am-2pm' }
  ];

  const services = [
    'Muebles Personalizados', 'Cocinas Integrales', 'Remodelaciones Completas', 
    'Impermeabilización Avanzada', 'Acabados Premium', 'Mantenimiento Integral', 'Consultoría de Diseño'
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section 
      id="contacto" 
      className="py-20 relative overflow-hidden bg-main"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <motion.div 
          className="absolute top-0 right-0 w-1/2 h-3/4 bg-gradient-to-bl from-accent to-transparent rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 mb-4"
          >
            <MessageCircle className="w-8 h-8 text-highlight" />
            <span className="text-highlight font-bold uppercase tracking-wider text-lg">
              Hablemos
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-main mb-6 tracking-tight">
            Inicia tu Proyecto <span className="gradient-text">Hoy Mismo</span>
          </h1>
          
          <p className="text-xl text-subtle max-w-3xl mx-auto leading-relaxed">
            ¿Listo para transformar tu espacio? Contáctanos. Nuestro equipo de expertos está 
            ansioso por escuchar tus ideas y convertirlas en una realidad impresionante.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          <motion.div variants={itemVariants} className="glass-effect rounded-2xl p-8 subtle-shine">
            <div className="flex items-center space-x-3 mb-6">
              <motion.div 
                className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center shadow-md"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <Send className="w-6 h-6 text-primary" />
              </motion.div>
              <h2 className="text-2xl font-bold text-main">Envíanos tu Consulta</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-main font-medium mb-2">Nombre Completo *</label>
                  <motion.input
                    id="name" type="text" name="name" value={formData.name} onChange={handleInputChange} required
                    className="w-full px-4 py-3 rounded-lg placeholder-muted-foreground focus:outline-none transition-all duration-200 input-themed"
                    placeholder="Ej: Ana García"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-main font-medium mb-2">Correo Electrónico *</label>
                  <motion.input
                    id="email" type="email" name="email" value={formData.email} onChange={handleInputChange} required
                    className="w-full px-4 py-3 rounded-lg placeholder-muted-foreground focus:outline-none transition-all duration-200 input-themed"
                    placeholder="tu@correo.com"
                  />
                </motion.div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="phone" className="block text-main font-medium mb-2">Teléfono (Opcional)</label>
                  <motion.input
                    id="phone" type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg placeholder-muted-foreground focus:outline-none transition-all duration-200 input-themed"
                    placeholder="+52 55 1234 5678"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="service" className="block text-main font-medium mb-2">Servicio de Interés</label>
                  <motion.select
                    id="service" name="service" value={formData.service} onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-200 appearance-none select-themed"
                  >
                    <option value="" className="text-muted-foreground">Selecciona un servicio...</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </motion.select>
                </motion.div>
              </div>
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-main font-medium mb-2">Tu Mensaje *</label>
                <motion.textarea
                  id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={4}
                  className="w-full px-4 py-3 rounded-lg placeholder-muted-foreground focus:outline-none transition-all duration-200 resize-none input-themed"
                  placeholder="Describe tu proyecto o consulta aquí..."
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Button
                  type="submit" disabled={isSubmitting}
                  className="w-full bg-gold-gradient text-primary hover:scale-105 transition-all duration-300 py-3 text-lg font-semibold golden-glow shadow-lg hover:shadow-accent/50 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div 
                        className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Procesando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar Ahora</span>
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-card/30 rounded-xl p-8 border border-card/20">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <item.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold text-main mb-1">{item.title}</h3>
                      <p className="text-highlight font-medium mb-1">{item.info}</p>
                      <p className="text-subtle text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div variants={itemVariants} className="bg-card/30 rounded-2xl p-8 border border-card/20">
              <div className="flex items-center space-x-3 mb-6">
                <motion.div 
                  className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <Star className="w-6 h-6 text-primary" />
                </motion.div>
                <h2 className="text-2xl font-bold text-main">Compromiso ARMUZA</h2>
              </div>
              <div className="space-y-3">
                {[
                  'Consultoría experta y sin costo inicial.',
                  'Diseños vanguardistas 100% a tu medida.',
                  'Materiales premium para durabilidad y estética.',
                  'Garantía integral en cada trabajo realizado.',
                  'Equipo de artesanos y diseñadores certificados.',
                  'Acompañamiento cercano en cada fase del proyecto.'
                ].map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-highlight flex-shrink-0" />
                    <span className="text-subtle">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
