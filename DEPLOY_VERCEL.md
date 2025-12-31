# 🚀 Guía: Desplegar Portfolio en Vercel

## ✅ Tu código ya está en GitHub
- ✅ Repositorio: https://github.com/DarienPerezGit/Portafolio
- ✅ Branch: main
- ✅ Todos los archivos subidos correctamente

---

## 🌐 Paso 1: Crear Cuenta en Vercel

1. **Ve a**: [https://vercel.com/signup](https://vercel.com/signup)

2. **Haz clic en**: "Continue with GitHub"

3. **Autoriza Vercel**: Dale permiso para acceder a tus repositorios de GitHub

4. **¡Listo!** Ya tienes cuenta en Vercel

---

## 🚀 Paso 2: Importar tu Proyecto

1. **En el dashboard de Vercel**, haz clic en: **"Add New..."** → **"Project"**

2. **Busca tu repositorio**: 
   - Verás una lista de tus repositorios de GitHub
   - Busca: **"Portafolio"**
   - Haz clic en **"Import"**

3. **Configura el proyecto**:
   - **Project Name**: `portafolio` (o el nombre que prefieras)
   - **Framework Preset**: Next.js (se detecta automáticamente)
   - **Root Directory**: `./` (dejar por defecto)
   - **Build Command**: `pnpm build` (se detecta automáticamente)
   - **Output Directory**: `.next` (se detecta automáticamente)

4. **Environment Variables** (opcional por ahora):
   - No necesitas agregar nada aquí todavía
   - Formspree funciona sin variables de entorno

5. **Haz clic en**: **"Deploy"**

---

## ⏳ Paso 3: Esperar el Despliegue

Vercel comenzará a:
1. ✅ Clonar tu repositorio
2. ✅ Instalar dependencias (`pnpm install`)
3. ✅ Construir tu proyecto (`pnpm build`)
4. ✅ Desplegar a producción

**Esto toma aproximadamente 2-3 minutos.**

Verás un progreso en tiempo real con mensajes como:
- "Cloning repository..."
- "Installing dependencies..."
- "Building..."
- "Deploying..."

---

## 🎉 Paso 4: ¡Tu Portfolio Está Vivo!

Una vez completado, verás:

```
🎉 Congratulations!
Your project has been deployed successfully!
```

**Tu URL será algo como**:
```
https://portafolio-tu-usuario.vercel.app
```

O si configuraste un dominio personalizado:
```
https://tu-dominio.com
```

---

## 🔧 Configuración Adicional

### Agregar un Dominio Personalizado (Opcional)

1. En tu proyecto en Vercel, ve a **"Settings"** → **"Domains"**
2. Haz clic en **"Add"**
3. Ingresa tu dominio (ejemplo: `darienperez.com`)
4. Sigue las instrucciones para configurar los DNS

### Configurar Variables de Entorno

Si en el futuro necesitas agregar variables de entorno:

1. Ve a **"Settings"** → **"Environment Variables"**
2. Agrega tus variables
3. Haz clic en **"Save"**
4. Redeploy el proyecto

---

## 🔄 Actualizaciones Automáticas

**¡Lo mejor de Vercel!** Cada vez que hagas un `git push` a tu repositorio de GitHub:

1. Vercel detectará los cambios automáticamente
2. Construirá y desplegará la nueva versión
3. Tu portfolio se actualizará en segundos

**Workflow**:
```bash
# Hacer cambios en tu código
git add .
git commit -m "Actualización del portfolio"
git push origin main

# ¡Vercel despliega automáticamente! 🚀
```

---

## 📊 Monitoreo y Analytics

Vercel te proporciona:
- ✅ **Analytics**: Visitas, rendimiento, etc.
- ✅ **Logs**: Para debugging
- ✅ **Preview Deployments**: Para cada commit
- ✅ **SSL/HTTPS**: Automático y gratis

---

## 🐛 Solución de Problemas

### ❌ Error: "Build failed"

**Posibles causas**:
1. Error de TypeScript
2. Dependencias faltantes
3. Error en el código

**Solución**:
1. Revisa los logs en Vercel
2. Corre `pnpm build` localmente para ver el error
3. Corrige el error y haz push de nuevo

### ❌ Error: "Module not found"

**Causa**: Dependencia no instalada

**Solución**:
```bash
pnpm install
git add package.json pnpm-lock.yaml
git commit -m "Fix dependencies"
git push origin main
```

### ❌ La página se ve diferente en producción

**Causa**: Diferencias entre desarrollo y producción

**Solución**:
1. Corre `pnpm build` y `pnpm start` localmente
2. Verifica que todo se vea bien
3. Haz push de los cambios

---

## 🎯 Checklist de Despliegue

- [ ] Cuenta de Vercel creada
- [ ] Repositorio importado
- [ ] Proyecto configurado
- [ ] Despliegue exitoso
- [ ] Portfolio accesible en la URL de Vercel
- [ ] Formulario de contacto probado en producción
- [ ] Links de proyectos funcionando
- [ ] Imágenes cargando correctamente

---

## 🌟 Próximos Pasos

### 1. Probar Todo en Producción
- Navega por todas las secciones
- Prueba el formulario de contacto
- Verifica que todos los links funcionen
- Revisa en móvil y desktop

### 2. Compartir tu Portfolio
- LinkedIn: Agrega el link a tu perfil
- GitHub: Actualiza tu README
- Email: Comparte con contactos
- Redes sociales: ¡Presume tu trabajo!

### 3. Optimizaciones Futuras
- Agregar Google Analytics
- Mejorar SEO
- Agregar más proyectos
- Crear una sección "About"

---

## 📱 URLs Importantes

- **Tu Portfolio**: `https://portafolio-[tu-usuario].vercel.app`
- **Dashboard Vercel**: [https://vercel.com/dashboard](https://vercel.com/dashboard)
- **GitHub Repo**: https://github.com/DarienPerezGit/Portafolio
- **Formspree Dashboard**: [https://formspree.io/forms/xykzykwg](https://formspree.io/forms/xykzykwg)

---

## 🎉 ¡Felicidades!

Tu portfolio profesional está ahora:
- ✅ En producción
- ✅ Accesible desde cualquier lugar
- ✅ Con formulario de contacto funcional
- ✅ Con actualizaciones automáticas
- ✅ Con SSL/HTTPS gratis
- ✅ Con dominio de Vercel

**¡Estás listo para mostrar tu trabajo al mundo!** 🚀
