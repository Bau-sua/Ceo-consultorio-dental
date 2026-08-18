# Centro de Salud C.E.O — Mockup de Rediseño

> ⚠️ **Este proyecto es un mockup, no es un producto final.** Fue creado como propuesta de rediseño para presentar al dueño de la clínica.

**Pertenece a:** Kader

## Qué es

Mockup navegable del rediseño web para el **Centro de Salud C.E.O**, una clínica odontológica y de salud integral ubicada en San Luis, Argentina.

El sitio actual ([centrodesaludceo.com](https://centrodesaludceo.com)) fue analizado y se detectaron 35 problemas (SEO, rendimiento, contenido, UX). Este mockup propone una solución moderna con **Astro + Tailwind CSS**.

## Stack

- **Astro 7** — framework estático (~9 KB de JS vs ~463 KB de Next.js)
- **Tailwind CSS 4** — utility-first CSS
- **Sin dependencias JS runtime** — 0 archivos JS en el build

## Estructura

```
src/
├── data/site.ts          ← todo el contenido editable en un solo archivo
├── styles/global.css     ← sistema de diseño (tokens Tailwind v4)
├── components/
│   ├── Header.astro      ← top bar + nav sticky + menú móvil
│   ├── Footer.astro      ← contacto, navegación, mapa
│   ├── WhatsAppFloat.astro ← botón flotante de WhatsApp
│   └── Icon.astro        ← iconos SVG inline
├── layouts/Layout.astro  ← head SEO + schema.org + extraSchemas
└── pages/
    ├── index.astro
    ├── especialidades.astro
    ├── nosotros.astro
    ├── contacto.astro
    ├── blog.astro
    └── blog/[slug].astro
public/
├── favicon.png           ← icono real de la clínica
├── og-image.png          ← imagen para Open Graph / redes sociales
├── Logo-ceo.png          ← logo de la marca
├── robots.txt            ← robots limpio
├── personal/             ← 16 fotos de los profesionales (.png)
└── img-blog-*.webp       ← imágenes de los artículos del blog
```

## SEO implementado

- **Meta tags**: `<title>`, `<meta description>`, `<link canonical>` únicos por página
- **Open Graph + Twitter Cards**: con `og:image`, `og:image:width`, `og:image:height`
- **Schema.org JSON-LD**: `Dentist + MedicalClinic` (home), `BlogPosting` (artículos), `BreadcrumbList` (5 páginas internas), `LocalBusiness` (contacto)
- **Sitemap**: generado automáticamente con `@astrojs/sitemap`
- **robots.txt**: limpio (`Allow: /` + sitemap)
- **`lang="es-AR"`**, `theme-color`, Apple Touch Icon

## Comandos

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # genera /dist (estático)
npm run preview   # previsualizar el build
```

## Notas

- Las fotos de personal, blog y logo son reales de la clínica.
- El video del equipo se integra desde Google Drive (iframe embed en `/nosotros/`).
- El formulario de contacto fue eliminado; solo se usa WhatsApp para turnos.
- Los testimonios en la home son de ejemplo (placeholder).
- El sitio no tiene tests; verificar con `npm run build`.
- Para cambios en contenido, editar `src/data/site.ts` (un solo archivo).
