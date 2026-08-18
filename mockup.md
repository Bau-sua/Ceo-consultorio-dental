# 🎨 Mockup — Rediseño Centro de Salud C.E.O

> Propuesta de rediseño integral del sitio **centrodesaludceo.com**.
> Stack: **Astro 7 + Tailwind CSS 4** · Deploy futuro: **Cloudflare Pages**.

---

## 📋 Qué es esto

Maqueta funcional y navegable del sitio rediseñado. Incluye **5 páginas + 3 artículos de blog**,
con todo el contenido real de la clínica (16 especialistas, obras sociales, datos de contacto)
extraído del sitio actual y reorganizado.

**Cómo correrla:**
```bash
cd mockup-ceo
npm install
npm run dev        # desarrollo en http://localhost:4321
npm run build      # genera el sitio estático en /dist
```

---

## ✅ Mejoras implementadas vs. el sitio actual

### 1. SEO (lo que más dolía)

| Mejora | Sitio actual | Mockup |
|---|---|---|
| H1 en todas las páginas | ❌ La home no tenía H1 en el hero; el único H1 era "Nuestro Equipo" en medio de la página. Contacto no tenía H1 | ✅ H1 único y descriptivo en cada página ("Tu mejor sonrisa empieza acá", "Pedí tu turno", etc.) |
| Meta descriptions | ❌ Ninguna | ✅ Única por página, con keywords locales (San Luis, odontología, implantes…) |
| Open Graph / Twitter Cards | ❌ Ausentes (al compartir por WhatsApp no salía nada) | ✅ Completos, con og:image + width/height |
| Datos estructurados (schema.org) | ❌ Ausentes | ✅ `Dentist + MedicalClinic` (home), `BlogPosting` (artículos), `BreadcrumbList` (5 páginas internas), `LocalBusiness` (contacto) |
| Sitemap | ❌ `sitemap.xml` vacío (0 bytes) | ✅ Generado automáticamente con `@astrojs/sitemap` |
| robots.txt | ❌ Crawl-delay de 60 s, reglas que frenan a Google | ✅ Limpio: `Allow: /` + sitemap |
| Jerarquía de encabezados | ❌ H6 antes que H1, contador con `class="value="` roto, 16+ H2 para nombres de médicos | ✅ H1 → H2 → H3 ordenados y semánticos |
| HTML semántico | ❌ Divs genéricos del constructor | ✅ `header / nav / main / section / article / footer / figure` |
| lang | ✅ `es` | ✅ Mejorado a `es-AR` |
| Keywords locales | ❌ No aparecían | ✅ "Odontología en San Luis", "implantes dentales San Luis", "16 especialistas" en títulos y textos |

### 2. Diseño y responsive (mobile-first de verdad)

| Mejora | Sitio actual | Mockup |
|---|---|---|
| Enfoque | Desktop-first con tema genérico | ✅ Mobile-first: grillas que se reordenan, botones táctiles, tipografía fluida |
| Viewport | `maximum-scale=1` (bloqueaba zoom) | ✅ Sin restricción de zoom (accesibilidad) |
| Menú móvil | Dependiente de JS y frágil | ✅ Menú hamburguesa con toggle inline mínimo (0 dependencias) |
| Sistema de diseño | 3 constructores superpuestos (BeTheme + Elementor + addons) | ✅ Una sola base: tokens de color, tipografía y componentes en Tailwind |
| Paleta | Teal genérico sin jerarquía | ✅ Teal médico con escala propia + acento cálido para CTAs y destacados |
| Tipografía | Fira Sans cargada 2 veces, títulos de 75 px | ✅ Sora (títulos) + Inter (texto), una sola carga de Google Fonts |
| Botones | Tamaños inconsistentes | ✅ Sistema unificado: primario, secundario, WhatsApp, ghost |

### 3. Contenido y conversión

| Mejora | Sitio actual | Mockup |
|---|---|---|
| Servicios mostrados | Solo 4 (implantes, cosmética, revisión, conducto) | ✅ 8 tratamientos en tarjetas + lista de 12 especialidades adicionales (ortodoncia, odontopediatría, cirugía, prótesis, nutrición, kinesiología…) |
| Botón "Todas las especialidades" | ❌ Llevaba a /nosotros/ | ✅ Lleva a /especialidades/ |
| Blog | 3 posts con texto de relleno ("dame letra") y "Read more" en inglés | ✅ 3 artículos reescritos completos, en español, con estructura y CTA |
| Turnos | Solo WhatsApp | ✅ WhatsApp como canal principal de turnos (formulario eliminado, más simple y directo) |
| Mapa | ❌ No había | ✅ Embed de Google Maps + botón "Cómo llegar" |
| Testimonios | ❌ Solo números | ✅ Sección de testimonios (con nota de que se reemplazan por reseñas reales) |
| Errores de tipeo | "tú turno", "Cosmetica", "WhatApp" | ✅ Corregidos |
| Copyright | "©2025" (desactualizado) | ✅ Año dinámico |
| Estadísticas | Home 99,7% vs. Nosotros 95% (contradictorias) | ✅ Unificadas: 95% pacientes satisfechos |
| CTA flotante | Botón "volver arriba" | ✅ Botón flotante de WhatsApp con tooltip |
| Contador roto | "+10,k" (HTML inválido) | ✅ Reemplazado por estadísticas estáticas limpias |
| CTA final | Débil | ✅ Sección de conversión con WhatsApp + teléfono + dirección |

### 4. Rendimiento

| Métrica | Sitio actual | Mockup |
|---|---|---|
| JavaScript | ~20 archivos de jQuery/Betheme | ✅ **0 archivos JS** (solo un script inline de ~10 líneas para el menú) |
| HTML de la home | 138 KB (26 KB gzip) | ✅ ~63 KB sin gzip (con gzip mucho menos) |
| CSS | ~11 hojas (BeTheme + Elementor + addons) | ✅ 1 hoja purgada (~42 KB) |
| Fuentes | 2 peticiones duplicadas | ✅ 1 sola petición con `display=swap` |
| Imágenes | Sin lazy loading (solo 1) | ✅ `loading="lazy"` en mapa e imágenes |
| Cache | `max-age=3` | ✅ Configurable (Cloudflare gestiona el CDN) |

---

## 🗂️ Estructura del proyecto

```
mockup-ceo/
├── astro.config.mjs          # Config: site URL + sitemap + Tailwind
├── public/
│   ├── favicon.png           # Icono real de la clínica
│   ├── og-image.png          # Imagen para Open Graph / redes
│   ├── Logo-ceo.png          # Logo de la marca
│   ├── robots.txt            # robots limpio
│   ├── personal/             # 16 fotos de los profesionales
│   └── img-blog-*.webp       # Imágenes de artículos del blog
└── src/
    ├── data/site.ts          # ⭐ Todo el contenido editable: contacto,
    │                         #   servicios, equipo, posts, obras sociales
    ├── styles/global.css     # Sistema de diseño (tokens Tailwind v4)
    ├── components/
    │   ├── Header.astro      # Top bar + nav + menú móvil
    │   ├── Footer.astro      # Contacto, navegación, mapa
    │   ├── WhatsAppFloat.astro
    │   └── Icon.astro        # Iconos SVG inline (sin dependencias)
    ├── layouts/Layout.astro  # Head SEO completo + schema.org + extraSchemas
    └── pages/
        ├── index.astro       # Home
        ├── especialidades.astro
        ├── nosotros.astro    # Video del equipo (Google Drive embed)
        ├── contacto.astro    # WhatsApp + mapa + LocalBusiness schema
        ├── blog.astro        # Índice del blog
        └── blog/[slug].astro # Artículo individual (rutas dinámicas)
```

> 💡 **Todo el contenido editable está en `src/data/site.ts`**: cambiar un teléfono,
> un especialista o un artículo se hace en un solo lugar.

---

## 🔜 Pendiente para la versión final (cuando se venda)

- [ ] Reemplazar los placeholders visuales (gradientes) por **fotos reales de la clínica**
- [ ] Opcional: conectar un **formulario de turnos** (Cloudflare Worker o Netlify Forms) como alternativa a WhatsApp
- [ ] Poner **reseñas reales de Google** en la sección de testimonios (con autorización)
- [x] Crear el **og-image.png** con el logo y la marca
- [ ] Confirmar **horarios reales** y agregar días/feriados
- [ ] Escribir 2 artículos de blog por mes (calendario editorial)
- [ ] Verificar y reclamar el **Google Business Profile** y enlazarlo
- [ ] Configurar analytics (Plausible/GA4) y consentimiento de cookies
- [ ] Definir dominio: apuntar `centrodesaludceo.com` a Cloudflare Pages (DNS)

---

## 📊 Argumentos para el pitch de venta (resumen)

1. **Antes:** el sitio tenía 20+ archivos JS, 11 hojas CSS, 3 constructores y 138 KB de HTML.
   **Después:** 0 JS, 1 CSS, 1 framework, ~63 KB. Carga instantánea en el celular.
2. **Antes:** invisible para Google (sin meta tags, sitemap vacío, robots hostil).
   **Después:** SEO completo + datos estructurados + sitemap → aparece en "dentista en San Luis".
3. **Antes:** el botón "Todas las especialidades" llevaba a la página equivocada y el blog tenía
   textos de relleno. **Después:** flujo de conversión completo (WhatsApp directo + mapa + CTA final).
4. **Antes:** solo 4 tratamientos visibles. **Después:** 8 servicios + 12 especialidades del equipo.
5. **Antes:** el dueño dependía de un tema comercial + plugins. **Después:** un sitio propio,
   rápido, barato de mantener y fácil de editar (los datos viven en un solo archivo).

---

*Mockup generado el 17/08/2026 — actualizado el 18/08/2026. Listo para mostrar y, cuando se venda, para deployar en Cloudflare Pages.*
