# Módulo 1. Introducción

**≈ 5 minutos.** Presenta el curso, las tareas con datos que vamos a cuidar y el formato de las lecciones.

| Lección | Qué se aprende | Ejemplo |
| --- | --- | --- |
| [1.1 Bienvenida y presentación](./01.01-bienvenida-y-presentacion/README.md) | Para quién es el curso, las cuatro tareas con datos y cómo funciona cada lección | — |
| [1.2 Objetivos y contenidos](./01.02-objetivos-y-contenidos/README.md) | Resultados, conocimientos previos, recorrido y materiales | — |

## Formato de cada lección práctica

1. **Lección:** qué vamos a aprender y por qué importa.
2. **Situación:** una persona, cómo usa la web y qué quiere hacer.
3. **Error común:** qué falla en el código y qué le pasa a esa persona.
4. **Solución:** el cambio en el código, con enlace a la página de ejemplo.

Las personas del curso (Andrés, Elena y Lucía) viven en `src/personas.ts`.

## Materiales

| Material | Ruta local (`pnpm dev`) |
| --- | --- |
| Diapositivas | `/diapositivas/#/modulo-1` |
| Contenido | `/contenido/modulo-1` y `/contenido/<lección>` |
| Notas del presentador | `/contenido/<lección>/presentador` |

El índice `/` enlaza todo por módulo y lección.

## Pruebas

`src/lessons/slides.test.tsx` comprueba todas las slides del curso: título, tipo,
enlaces con nombre, axe, orden situación → error → solución y ausencia de tiempos.

## Pendiente

- Revisión visual del autor y ensayo cronometrado.
