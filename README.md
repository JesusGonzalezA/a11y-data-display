# Presentación de datos accesible: Data Display

Curso de **weAAAre** para personas que ya conocen lo básico de HTML semántico,
nombre accesible y teclado. Docente: **Jesús González Álvarez**.

Enseña a presentar datos para que cualquier persona pueda entenderlos y usarlos:
iconos, tooltips, listas, cards y tablas. Publicado en
<https://jesusgonzaleza.github.io/a11y-data-display/>.

## Cómo está construida cada lección

1. **Lección:** qué vamos a aprender.
2. **Situación:** una persona, cómo usa la web y qué quiere hacer.
3. **Error común:** qué falla en la página y qué le pasa a esa persona.
4. **Solución:** el cambio en el código, con enlace a su página de ejemplo.

| Persona | Cómo usa la web |
| --- | --- |
| Andrés | Temblor en las manos; sobre todo teclado |
| Elena | Ciega; lector de pantalla |
| Lucía | TDAH y dislexia; necesita etiquetas claras que no desaparezcan |

## Programa

| Módulo | Lecciones | Ejemplos |
| --- | --- | --- |
| [1. Introducción](./src/lessons/01-intro/README.md) | 1.1 Bienvenida y presentación · 1.2 Objetivos y contenidos | — |
| [2. Iconografía y ayuda contextual](./src/lessons/02-iconografia-y-ayuda-contextual/README.md) | 2.1 Iconografía: significado y nombre accesible · 2.2 Tooltip: ayuda contextual y límites | `envios`, `correo` |
| [3. Listas, cards y orden de lectura](./src/lessons/03-listas-cards-y-orden-de-lectura/README.md) | 3.1 Listas · 3.2 Cards | `casa-rural`, `academia` |
| [4. Tablas accesibles](./src/lessons/04-tablas-accesibles/README.md) | 4.1 Tabla simple · 4.2 Tabla con doble eje · 4.3 Tabla ordenable · 4.4 Tabla con filtros · 4.5 Cómo continuar aprendiendo | `pedidos`, `tarifas`, `carrera`, `empleo` |
| 5. Patrón grid | Pendiente de desarrollar | — |

Temario original: [issue #1](https://github.com/JesusGonzalezA/a11y-data-display/issues/1).

## Instalar y ejecutar

Requisitos: Node.js 22.12 o posterior y pnpm 10.26.1 (`.nvmrc` selecciona Node 22).

```bash
pnpm install --frozen-lockfile
pnpm dev
```

| Ruta | Qué es |
| --- | --- |
| `/` | Índice: por módulo y lección, enlaces a diapositivas, ejemplos y contenido |
| `/diapositivas/` | Presentación completa; `#/modulo-2` o `#/leccion-2-1` abren un punto concreto |
| `/ejemplos/` | Páginas de ejemplo agrupadas por módulo; `/ejemplos/<slug>?arreglo=1` abre la versión corregida |
| `/contenido/` | Documentación Markdown: `/contenido/modulo-2`, `/contenido/2.1`, `/contenido/2.1/presentador` |

Al publicar en un servidor estático, configura que las rutas desconocidas sirvan
`index.html`, como hacen `pnpm dev` y `pnpm preview`.

## Materiales de cada lección

Cada lección vive en `src/lessons/<módulo>/<lección>/`:

- `slides.tsx`: diapositivas que se entienden sin otro material.
- `presenter.md`: guía del presentador con palabras clave y frases importantes.
- `README.md`: resumen esquemático (objetivo, situación, errores, ejemplo, pruebas, fuentes).
- `examples/<Página>/`: página de ejemplo, su definición (`*.example.ts`) y sus tests.

`src/lessons/lessonRegistry.ts` fija el orden de módulos, lecciones y slides;
`src/examples/exampleRegistry.ts` registra las páginas de ejemplo.

## Páginas de ejemplo

Cada página es un sitio creíble y distinto que se abre con barreras. El botón
flotante tiene tres opciones: **Con barreras** y **Arreglada** cambian de versión
sin recargar, y **Explicación** dice qué probar y lista las barreras. Al abrir una
barrera, se marca en la página con su número y se ve dónde está, qué pasa, cómo
se arregla y el código antes y después.

## Despliegue

Cada push a `develop` publica el curso en GitHub Pages con
`.github/workflows/deploy.yml`:
<https://jesusgonzaleza.github.io/a11y-data-display/>. El build usa
`BASE_PATH=/a11y-data-display/` y copia `index.html` a cada superficie, a cada
página de ejemplo, a cada página de contenido y a `404.html`, porque Pages no
reescribe rutas.

## Validación

```bash
pnpm check
```

Ejecuta tests (Vitest + Testing Library + axe), lint (Biome) y build. Las pruebas
en JSDOM no sustituyen la revisión con teclado, lector de pantalla, zoom, ajustes
del sistema y la revisión visual del autor; cada módulo enumera las comprobaciones
manuales pendientes.
