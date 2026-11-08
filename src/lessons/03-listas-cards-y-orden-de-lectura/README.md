# Módulo 3. Listas, cards y orden de lectura

**≈ 20 minutos.** Estructuras para colecciones: qué relación expresa cada lista y cómo se construye una card que se lee y se recorre en orden.

| Lección | Persona y tarea | Errores → solución | Ejemplo |
| --- | --- | --- | --- |
| [3.1 Listas: expresar relaciones entre elementos](./03.01-listas/README.md) | Elena (lector) prepara una escapada | Párrafos, pasos en `div`, columnas separadas → `ul`, `ol`, `dl` | `casa-rural` |
| [3.2 Cards: estructura, acciones y orden de lectura](./03.02-cards-y-orden-de-lectura/README.md) | Andrés (teclado) elige un curso | Sin encabezado, controles anidados, `order` → `h2`, enlace extendido, orden del DOM | `academia` |

## Materiales

| Material | Ruta local (`pnpm dev`) |
| --- | --- |
| Diapositivas | `/diapositivas/#/modulo-3` |
| Ejemplos | `/ejemplos/#modulo-3` |
| Contenido | `/contenido/modulo-3` y `/contenido/<lección>` |
| Notas del presentador | `/contenido/<lección>/presentador` |

## Evidencia y límites

- JSDOM no aplica CSS: el desajuste entre orden visual y foco se revisa en navegador.
- El anuncio de listas depende del lector y del navegador (Safari con `list-style: none`).

## Matriz manual pendiente

| Entorno | Qué revisar |
| --- | --- |
| NVDA, VoiceOver | Listas y pares en `casa-rural`; encabezados y nombres en `academia` |
| Teclado | Orden del foco en `academia`, vistas de cuadrícula y lista |
| Autor | Revisión visual y ensayo |
