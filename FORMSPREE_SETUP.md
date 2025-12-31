# 📧 Guía Paso a Paso: Configurar Formspree

## ✅ Paso 1: Crear Cuenta en Formspree

1. **Ve a**: [https://formspree.io/](https://formspree.io/)
2. **Haz clic en**: "Get Started" o "Sign Up"
3. **Regístrate con**:
   - Email: ndarien93@gmail.com (o el que prefieras)
   - Contraseña: (crea una segura)
4. **Verifica tu email**: Revisa tu bandeja de entrada y haz clic en el link de verificación

---

## ✅ Paso 2: Crear un Nuevo Formulario

1. **Inicia sesión** en Formspree
2. **Haz clic en**: "+ New Form" (botón azul)
3. **Configura tu formulario**:
   - **Name**: "Portfolio Contact Form" (o el nombre que quieras)
   - **Email**: ndarien93@gmail.com (aquí llegarán los mensajes)
4. **Haz clic en**: "Create Form"

---

## ✅ Paso 3: Obtener tu Form ID

Después de crear el formulario, verás una pantalla con:

```
Your form endpoint:
https://formspree.io/f/xyzabc123
                        ^^^^^^^^^ 
                        Este es tu FORM ID
```

**Copia solo la parte después de `/f/`**

Ejemplo:
- Si tu URL es: `https://formspree.io/f/mwpkgdnq`
- Tu FORM ID es: `mwpkgdnq`

---

## ✅ Paso 4: Actualizar el Código

1. **Abre el archivo**: `src/components/ContactSection.tsx`

2. **Busca la línea 59** (aproximadamente) que dice:
   ```typescript
   const response = await fetch('https://formspree.io/f/TU_FORM_ID', {
   ```

3. **Reemplaza `TU_FORM_ID`** con tu Form ID real:
   ```typescript
   const response = await fetch('https://formspree.io/f/mwpkgdnq', {
   ```

4. **Guarda el archivo** (Ctrl + S)

---

## ✅ Paso 5: Probar el Formulario

1. **Abre tu portfolio** en el navegador: [http://localhost:3000](http://localhost:3000)

2. **Navega a la sección de contacto** (scroll hacia abajo o haz clic en "CONTACT" en el navbar)

3. **Llena el formulario** con datos de prueba:
   - Nombre: "Test"
   - Email: "test@example.com"
   - Mensaje: "Este es un mensaje de prueba"

4. **Haz clic en**: "Send Message"

5. **Verifica**:
   - Deberías ver el mensaje: "¡Mensaje enviado! Te responderé pronto."
   - Revisa tu email (ndarien93@gmail.com) - deberías recibir el mensaje de prueba

---

## 🎯 Configuración Adicional en Formspree (Opcional)

### Personalizar el Email de Notificación

1. En el dashboard de Formspree, haz clic en tu formulario
2. Ve a **"Settings"**
3. Puedes configurar:
   - **Subject Line**: Asunto del email que recibirás
   - **Reply-To**: Para responder directamente desde tu email
   - **Redirect**: Página a la que redirigir después de enviar (opcional)

### Agregar Protección Anti-Spam

1. En **"Settings"** de tu formulario
2. Activa **"reCAPTCHA"** (opcional, pero recomendado)
3. Formspree lo configurará automáticamente

### Ver Mensajes Recibidos

1. En el dashboard de Formspree
2. Haz clic en tu formulario
3. Ve a **"Submissions"**
4. Aquí verás todos los mensajes recibidos

---

## 🔧 Solución de Problemas

### ❌ Error: "Form not found"
- **Causa**: El Form ID es incorrecto
- **Solución**: Verifica que copiaste correctamente el Form ID de Formspree

### ❌ Error: "Network error"
- **Causa**: Problema de conexión
- **Solución**: Verifica tu conexión a internet y que el servidor esté corriendo

### ❌ No recibo los emails
- **Causa**: Email incorrecto en Formspree o en spam
- **Solución**: 
  1. Verifica el email en la configuración de Formspree
  2. Revisa tu carpeta de spam
  3. Agrega noreply@formspree.io a tus contactos

### ❌ El formulario no se limpia después de enviar
- **Causa**: Error en el código
- **Solución**: Verifica que la respuesta sea `response.ok`

---

## 📊 Plan Gratuito de Formspree

El plan gratuito incluye:
- ✅ **50 envíos por mes**
- ✅ **1 formulario**
- ✅ **Protección anti-spam básica**
- ✅ **Notificaciones por email**

Si necesitas más, puedes actualizar a un plan pago más adelante.

---

## 🎨 Mejoras Opcionales

### 1. Agregar Mensaje de Éxito Más Elegante

En lugar de `alert()`, puedes usar una notificación más bonita:

```bash
pnpm add react-hot-toast
```

Luego actualiza el código:
```typescript
import toast from 'react-hot-toast';

// En handleSubmit:
if (response.ok) {
    toast.success('¡Mensaje enviado! Te responderé pronto.');
    setFormData({ name: '', email: '', message: '' });
}
```

### 2. Agregar Validación de Email

```typescript
const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// En handleSubmit, antes de enviar:
if (!validateEmail(formData.email)) {
    alert('Por favor ingresa un email válido');
    setIsSubmitting(false);
    return;
}
```

---

## ✅ Checklist Final

- [ ] Cuenta de Formspree creada
- [ ] Email verificado
- [ ] Formulario creado en Formspree
- [ ] Form ID copiado
- [ ] Código actualizado con el Form ID
- [ ] Archivo guardado
- [ ] Formulario probado
- [ ] Email de prueba recibido

---

## 🚀 ¡Listo!

Tu formulario de contacto ahora está completamente funcional y los mensajes llegarán directamente a tu email: **ndarien93@gmail.com**

**¿Necesitas ayuda?** Consulta la [documentación de Formspree](https://help.formspree.io/)
