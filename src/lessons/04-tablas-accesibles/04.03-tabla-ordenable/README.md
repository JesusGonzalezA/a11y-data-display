# 4.3 Tabla ordenable: controles y dirección de ordenación

> Módulo 4 · Tablas accesibles · ejemplo: `/ejemplos/carrera`

## Objetivo

- Convertir la ordenación en un control operable con teclado.
- Exponer la columna y el sentido de ordenación con `aria-sort`.
- Comunicar el resultado sin mover el foco.

## Situación

- **Persona:** Andrés — temblor en las manos, usa teclado. (También Elena, con lector.)
- **Tarea:** ordenar la clasificación por nombre y volver a ordenarla por tiempo.

## Errores comunes → solución

| Error | Qué le pasa | Solución |
| --- | --- | --- |
| `onclick` en el `th` | Andrés no puede ordenar con teclado | `<button>` dentro del `<th>` |
| Dirección solo con una flecha | Elena no sabe qué columna manda | `aria-sort` en el `th` ordenado; flecha `aria-hidden`; caption que explica |
| Filas que cambian sin aviso | Nadie confirma que ha ocurrido algo | `role="status"` con columna y sentido |

## Ejemplo

- Página: clasificación de los 10 km de la Carrera popular de Villaverde.
- Demo:
  1. Intentar ordenar por nombre con Tab y Enter.
  2. Con el lector, escuchar el encabezado «Tiempo».
  3. Pulsar **Arreglada**: ordenar con Enter, invertir con Espacio, escuchar el mensaje.
- Código: `examples/RaceResults/`.

## Conceptos clave

- Control (botón en `th`) · estado (`aria-sort`, una columna) · resultado (mensaje de estado).
- El foco se queda en el botón.
- El anuncio del cambio de `aria-sort` no es uniforme entre lectores: por eso el mensaje.

## Pruebas

- Automatizadas (`RaceResults.test.tsx`): sin arreglo, sin botones ni `aria-sort` (aunque ordena con clic); con arreglo, Enter ordena, foco en el botón, un solo `aria-sort`, inversión con Espacio, mensaje de estado y axe.
- Manuales pendientes: anuncio de `aria-sort` y del mensaje con NVDA, JAWS y VoiceOver.

## Fuentes

- [WAI-ARIA APG: Sortable Table](https://www.w3.org/WAI/ARIA/apg/patterns/table/examples/sortable-table/)
- [WAI-ARIA 1.2: `aria-sort`](https://www.w3.org/TR/wai-aria-1.2/#aria-sort)
- [WCAG 4.1.3 Mensajes de estado](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)
- [WCAG 2.1.1 Teclado](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
