# 5.1 Cuándo elegir una tabla y cuándo un grid

> Módulo 5 · Patrón grid · ejemplo: `/ejemplos/horario`

## Objetivo

- Saber qué es el patrón grid y qué coste tiene.
- Distinguir una cuadrícula visual del patrón ARIA grid.
- Reconocer cuándo basta con una tabla.

## Situación

- **Persona:** Andrés — temblor en las manos, usa sobre todo el teclado. (También Elena, con lector.)
- **Tarea:** consultar el horario de clases y llegar al enlace para reservar.

## Errores comunes → solución

| Error | Qué le pasa | Solución |
| --- | --- | --- |
| `tabindex="0"` en cada celda | Andrés pulsa Tab 16 veces sin poder hacer nada | Quitar `tabindex`: el texto no recibe foco |
| `role="grid"` en una tabla de solo lectura | El lector de Elena espera flechas que no están programadas | Quitar el rol: es una tabla |

## Ejemplo

- Página: horario de clases del Polideportivo Las Eras.
- Demo:
  1. Tab desde el menú hasta «Reservar una clase», contando pulsaciones.
  2. Con el lector, entrar en la tabla y pulsar las flechas.
  3. Pulsar **Arreglada** y repetir.
- Código: `examples/ClassTimetable/`.

## Conceptos clave

- Tabla: leer y comparar. Grid: actuar sobre muchas celdas.
- Grid = una parada de Tab + flechas programadas por ti.
- `display: grid` no tiene nada que ver con `role="grid"`.
- Una tabla con controles para ordenar o filtrar sigue siendo una tabla.

## Pruebas

- Automatizadas (`ClassTimetable.test.tsx`): sin arreglo, rol `grid`, 16 celdas con `tabindex="0"` y flechas sin efecto; con arreglo, rol `table`, ningún `tabindex`, Tab llega al enlace y axe.
- Manuales pendientes: anuncio del rol y cambio de modo con NVDA, JAWS y VoiceOver.

## Fuentes

- [WAI-ARIA APG: Grid](https://www.w3.org/WAI/ARIA/apg/patterns/grid/)
- [WAI-ARIA APG: Table](https://www.w3.org/WAI/ARIA/apg/patterns/table/)
- [WAI-ARIA 1.2: rol `grid`](https://www.w3.org/TR/wai-aria-1.2/#grid)
- [WCAG 2.1.1 Teclado](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html) · [WCAG 4.1.2 Nombre, función, valor](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
