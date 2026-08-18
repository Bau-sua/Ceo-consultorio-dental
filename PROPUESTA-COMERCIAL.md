# Propuesta Comercial — Rediseño Web Centro de Salud C.E.O

> **Para:** Dueño del Centro de Salud C.E.O
> **Elaborado por:** Kader
> **Fecha:** Agosto 2026
> **Estado:** Mockup listo para presentar

---

## Resumen ejecutivo

El sitio actual de Centro de Salud C.E.O tiene problemas graves que le están costando pacientes: no aparece en Google, se ve roto en celular, tiene contenido de relleno publicado y los botones de contacto no funcionan bien. Se hizo un análisis completo (35 problemas detectados) y se construyó un mockup navegable que resuelve todo eso con una web moderna, rápida y que convierte visitantes en pacientes.

**El negocio es sólido** — 16 especialistas, más de 10 años, 6 obras sociales, +10.000 pacientes — pero la web no refleja esa calidad. Este rediseño cierra esa brecha.

---

## 1. ¿Qué se encontró en el sitio actual?

### SEO (lo que más afecta los ingresos)

| Problema | Impacto real |
|---|---|
| Sin meta descriptions en ninguna página | Google muestra fragmentos al azar; el paciente no sabe qué ofrece la clínica antes de hacer clic |
| Sin Open Graph ni Twitter Cards | Al compartir la web por WhatsApp o Instagram no aparece imagen ni descripción — se ve peuco |
| Sin datos estructurados (schema.org) | Google no puede mostrar rich snippets (horarios, dirección, estrellas) en los resultados |
| `sitemap.xml` vacío (0 bytes) | Google no puede indexar las páginas correctamente; la clínica es invisible en búsquedas |
| `robots.txt` con crawl-delay de 60 segundos | Frena activamente a los buscadores; tarda semanas en indexarse lo que debería tardar días |
| Sin palabras clave locales | No aparece "dentista en San Luis", "odontólogo San Luis", "implantes dentales San Luis" en ningún título |
| Slugs del blog en inglés | `/get-a-healthysmile/` en un sitio en español — confunde a Google y al paciente |
| Jerarquía de encabezados rota | La home no tiene H1 donde debe; el contador tiene HTML roto que se muestra como "+10,k" |

### Móvil (donde entra el 70%+ del tráfico local)

| Problema | Impacto real |
|---|---|
| `maximum-scale=1` bloquea el zoom | Pacientes mayores no pueden agrandar el texto; Google penaliza la UX |
| Bloques con tamaños fijos | En celular el texto se aprieta, los botones se desbordan, el menú no funciona bien |
| Botones CTA pequeños | "Agendá tu turno" no respeta el tamaño táctil mínimo (44 px); los pacientes fallan al tocar |
| Menú dependiente de JavaScript | Si JS falla o tarda, el menú no aparece — el paciente no puede navegar |

### Contenido y conversión

| Problema | Impacto real |
|---|---|
| Botón "Todas las especialidades" lleva a /nosotros/ | El paciente hace clic buscando tratamientos y termina en la página equivocada — pierde la consulta |
| Solo 4 tratamientos visibles | El equipo cubre 15+ especialidades (ortodoncia, odontopediatría, cirugía, nutrición, kinesiología…) pero solo se muestran 4 — se pierde negocio |
| Blog con texto de relleno | "dame letra" / "Más letra" visibles publicados — mata la credibilidad |
| Botones "Read more" en inglés | En un sitio 100% en español |
| Errores de ortografía | "Cosmetica" (sin acento), "tú turno" (debe ser "tu"), "WhatApp" |
| Estadísticas contradictorias | Home dice "+99,7% satisfechos", Nosotros dice "95%" — datos que no coinciden |
| Copyright "©2025" | Desactualizado |
| Sin mapa de Google en contacto | La clínica está en Ayacucho 1357 pero no hay mapa ni "cómo llegar" |
| Sin testimonios reales | Solo números fríos; no hay reseñas con nombres de pacientes |
| CTA flotante es "volver arriba" | Debería ser WhatsApp (el canal que ya usan para turnos) |

### Rendimiento

| Problema | Impacto real |
|---|---|
| ~20 archivos JavaScript de jQuery | Página lenta en celular; el paciente se va antes de que cargue |
| 11 hojas CSS (BeTheme + Elementor + addons) | CSS duplicado e incompatible; el sitio pesa más de lo necesario |
| HTML de 138 KB | Pocas webs de clínica dental deberían pesar tanto |
| Google Fonts cargado 2 veces | Dos peticiones redundantes que ralentizan la carga |
| Cache max-age=3 segundos | El navegador re-descarga todo en cada visita |
| 12 imágenes sin alt text | Google no puede indexar las imágenes; problema de accesibilidad |

---

## 2. ¿Qué se hizo para solucionarlo?

Se construyó un **mockup navegable completo** con Astro 7 + Tailwind CSS 4, integrando todo el contenido real de la clínica (fotos de los 16 profesionales, logo, blog, datos de contacto).

### SEO — de invisible a optimizado

| Mejora | Antes | Después |
|---|---|---|
| Meta descriptions | Ninguna | Únicas por página, con keywords locales ("odontología en San Luis", "implantes dentales") |
| Open Graph + Twitter Cards | No existían | Completos con imagen, título y descripción por página |
| Schema.org JSON-LD | No existía | `Dentist + MedicalClinic` (home), `BlogPosting` (artículos), `BreadcrumbList` (5 páginas), `LocalBusiness` (contacto) |
| Sitemap | Vacío (0 bytes) | Generado automáticamente, se actualiza solo |
| robots.txt | Crawl-delay 60s + reglas hostiles | Limpio: `Allow: /` + sitemap |
| H1 por página | Roto o ausente | Único y descriptivo en las 8 páginas |
| Palabras clave locales | No aparecían | En títulos, descripciones y texto de cada página |
| Slugs del blog | En inglés | En español (`/blog/sonrisa-saludable/`) |

### Móvil — de roto a funcional

| Mejora | Antes | Después |
|---|---|---|
| Enfoque | Desktop-first, bloques fijos | Mobile-first: grillas que se reordenan |
| Viewport | `maximum-scale=1` (bloquea zoom) | Sin restricciones (accesibilidad) |
| Menú | JS pesado, frágil | Toggle inline (~10 líneas, 0 dependencias) |
| Botones CTA | Pequeños, inconsistentes | Sistema unificado, tamaño táctil correcto |
| Tipografía | H1 de 75px, H3 de 40px en móvil | Fluida y escalada correctamente |

### Contenido y conversión — de incompleto a profesional

| Mejora | Antes | Después |
|---|---|---|
| Tratamientos visibles | 4 | 8 tarjetas + 12 especialidades adicionales (20 total) |
| Botón "Todas las especialidades" | Llevaba a /nosotros/ (roto) | Lleva a /especialidades/ (correcto) |
| Blog | Texto de relleno ("dame letra"), botones en inglés | 3 artículos completos en español, con imágenes reales |
| Errores de tipeo | "Cosmetica", "tú turno", "WhatApp" | Todos corregidos |
| Estadísticas | Contradictorias (99,7% vs 95%) | Unificadas: 95% pacientes satisfechos |
| Mapa | No existía | Embed de Google Maps + botón "Cómo llegar" |
| Testimonios | Solo números | Sección de testimonios (listos para reseñas reales) |
| CTA flotante | "Volver arriba" | Botón de WhatsApp con tooltip y mensaje precargado |
| Copyright | "©2025" | Año dinámico |
| Favicon | Genérico | Logo real de la clínica |
| Video del equipo | No existía | Integrado desde Google Drive en la página "Nosotros" |
| Copyright + contacto | Datos incompletos | Email, Instagram, dirección, horario — todo visible |

### Rendimiento — de pesado a liviano

| Métrica | Antes | Después |
|---|---|---|
| JavaScript | ~20 archivos jQuery | **0 archivos JS** (solo ~10 líneas inline para el menú) |
| HTML home | 138 KB | ~63 KB |
| CSS | 11 hojas | 1 hoja purgada (~42 KB) |
| Google Fonts | 2 peticiones duplicadas | 1 sola con `display=swap` |
| Lazy loading | 1 imagen | Todas las imágenes y el mapa |
| Imágenes | Sin alt text (12 con `alt=""`) | Alt text descriptivo en todas |

---

## 3. Beneficios para el negocio

### Más pacientes
- **Aparición en Google:** con SEO local optimizado, la clínica aparecerá en búsquedas como "dentista en San Luis", "odontólogo cerca de mí", "implantes dentales San Luis"
- **Conversión mejorada:** WhatsApp directo + mapa + CTA flotante = el paciente tiene 3 formas de contactar en cada momento
- **Más especialidades visibles:** de 4 a 20 tratamientos mostrados → más consultas por cada especialidad

### Mejor imagen profesional
- **Web moderna y rápida:** carga instantánea en celular, diseño limpio y profesional
- **Contenido real y terminado:** sin textos de relleno, sin errores de ortografía, sin estadísticas contradictorias
- **Fotos reales del equipo:** los 16 profesionales con su nombre, especialidad y foto

### Más barato de mantener
- **Sin dependencia de constructores:** no más BeTheme + Elementor + addons (3 sistemas superpuestos)
- **Contenido editable en un solo archivo:** cambiar un teléfono, un especialista o un artículo se hace en un archivo
- **Hosting gratuito:** Cloudflare Pages (banda ancha ilimitada, rápido en Argentina)
- **Velocidad garantizada:** 0 dependencias JavaScript, CSS purgado, imágenes optimizadas

### Diferenciación
- **Portal de radiografías por DNI** (el diferencial de la clínica) puede integrarse mejor
- **Blog de salud bucal** con artículos reales que atraen tráfico orgánico
- **Schema.org completo** = rich snippets en Google (horarios, dirección, estrellas)

---

## 4. Alcance del mockup

| Página | Contenido |
|---|---|
| **Home** | Hero, estadísticas, 8 servicios, obras sociales, por qué elegirnos, equipo (preview), testimonios, blog, CTA final |
| **Especialidades** | 8 tratamientos detallados + 12 especialidades adicionales |
| **Nosotros** | Historia, video del equipo, 16 profesionales por área con fotos reales |
| **Contacto** | WhatsApp, teléfono, email, horario, dirección, mapa de Google |
| **Blog** | Índice de 3 artículos + artículos individuales con schema BlogPosting |
| **Total** | 8 páginas + sitemap automático |

---

## 5. Próximos pasos (versión final, tras la venta)

1. **Deploy en Cloudflare Pages** — conectar el repositorio, apuntar `centrodesaludceo.com` por DNS
2. **Dominio y email** — configurar `info@centrodesaludceo.com`
3. **Google Business Profile** — reclamar y optimizar el perfil de la clínica
4. **Reseñas reales** — integrar reseñas de Google en la sección de testimonios
5. **Calendario editorial** — 2 artículos de blog por mes (salud bucal, consejos, novedades)
6. **Analytics** — Plausible o GA4 para medir tráfico y conversiones
7. **Consentimiento de cookies** — banner RGPD/Ley de Protección de Datos Argentina
8. **Portal de radiografías** — mejorar la integración del sistema de descarga por DNI

---

## 6. Preguntas frecuentes del dueño

**¿Se pierde lo que ya tengo?**
No. Todo el contenido real se conserva y mejora. Las fotos, los datos del equipo, las obras sociales, los artículos del blog — todo se reutiliza pero con mejor presentación y corrección de errores.

**¿Necesito seguir pagando WordPress y Elementor?**
No. La nueva web es un sitio estático que no necesita WordPress. El hosting en Cloudflare Pages es gratuito. Si en el futuro querés agregar funcionalidades (como un formulario de turnos), se pueden conectar sin volver a WordPress.

**¿Mis pacientes van a encontrar la web en Google?**
Sí. Con las mejoras de SEO (meta descriptions, schema.org, sitemap, robots.txt limpio, keywords locales), Google va a indexar correctamente la web y la va a mostrar en búsquedas como "dentista en San Luis".

**¿Funciona bien en celular?**
Sí. Está diseñada mobile-first. El 70%+ de los pacientes busca desde el celular, y la web está optimizada para eso: menú hamburguesa, botones grandes, tipografía fluida, carga rápida.

**¿Cuánto tarda en cargar?**
La web carga prácticamente al instante. No tiene archivos JavaScript pesados, usa una sola hoja de CSS purgada y las imágenes están optimizadas.

---

## 7. Argumento de venta (30 segundos)

> "Su web actual tiene 35 problemas que le están costando pacientes: no aparece en Google (sitemap vacío, sin meta descriptions), se ve rota en celular, tiene textos de relleno publicados y los botones no funcionan. Su negocio es excelente — 16 especialistas, 10 años, 6 obras sociales — pero la web no lo refleja. Este rediseño lo cambia todo: aparece en Google, se ve profesional en cualquier celular, y convierte visitantes en pacientes con WhatsApp directo, mapa y especialidades bien mostradas. Y lo mejor: es más barato de mantener que lo que tiene hoy."

---

*Propuesta elaborada el 18/08/2026 — Mockup navegable disponible para presentar.*
