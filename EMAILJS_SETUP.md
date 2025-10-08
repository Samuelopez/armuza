# Configuración de EmailJS para el Formulario de Contacto

## ⚠️ IMPORTANTE: Para que funcione en Vercel

**NO** necesitas configurar EmailJS todavía. El código ya está preparado, pero para que funcione necesitas:

### Pasos OBLIGATORIOS para Vercel:

### 1. Crear cuenta en EmailJS
- Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
- Regístrate con tu email
- Confirma tu cuenta

### 2. Configurar el servicio de email
- En el dashboard, ve a "Email Services"
- Haz clic en "Add New Service"
- Selecciona tu proveedor de email (Gmail, Outlook, etc.)
- Sigue las instrucciones para conectar tu cuenta
- **Importante**: Usa la cuenta `contacto@armuza.com`
- Copia el **Service ID** que se genera

### 3. Crear template de email
- Ve a "Email Templates"
- Haz clic en "Create New Template"
- **MUY IMPORTANTE**: En la configuración del template:
  - **To Email**: contacto@armuza.com (OBLIGATORIO)
  - **From Name**: {{from_name}}
  - **Reply To**: {{from_email}}
- Configura el template con este contenido:

**Subject**: Nuevo mensaje de contacto - {{from_name}}

**Content**:
```
Nuevo mensaje de contacto desde el sitio web de ARMUZA:

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{phone}}
Servicio de interés: {{service}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde el formulario de contacto del sitio web.
```

- Guarda el template y copia el **Template ID**

### 4. Obtener Public Key
- Ve a "Account" > "General"
- Copia tu **Public Key**

### 5. ⚠️ CONFIGURAR EN VERCEL (MUY IMPORTANTE)
Cuando subas a Vercel, debes agregar las variables de entorno en el dashboard de Vercel:

1. Ve a tu proyecto en Vercel
2. Ve a "Settings" > "Environment Variables"
3. Agrega estas 3 variables:

```
VITE_EMAILJS_SERVICE_ID = tu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID = tu_template_id_aqui  
VITE_EMAILJS_PUBLIC_KEY = tu_public_key_aqui
```

4. Redeploy tu proyecto en Vercel

### 6. Para desarrollo local (opcional)
Edita el archivo `.env` en la raíz del proyecto:

```
VITE_EMAILJS_SERVICE_ID=tu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
```

## Estado actual:
✅ Código preparado para enviar emails
✅ EmailJS instalado
❌ Necesitas configurar EmailJS y las variables de entorno

## Notas importantes:
- Los emails se enviarán a `contacto@armuza.com`
- EmailJS tiene un límite gratuito de 200 emails por mes
- **SIN las variables de entorno configuradas, el formulario NO enviará emails**
- Para Vercel, las variables DEBEN configurarse en el dashboard de Vercel

## Verificación:
Una vez configurado todo, prueba el formulario desde el sitio web. Deberías recibir un email en `contacto@armuza.com` con la información del formulario.