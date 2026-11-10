# 2.1 Iconografía: significado y nombre accesible

> Módulo 2 · Iconografía y ayuda contextual · ejemplo: `/ejemplos/envios`

## Objetivo

- Distinguir iconos decorativos, informativos e iconos dentro de controles.
- No transmitir un estado solo con color.
- Dar nombre accesible a un botón o enlace que solo muestra un icono.

## Situación

- **Persona:** Elena — ciega, usa lector de pantalla.
- **Tarea:** saber qué envío tiene una incidencia, copiar su número y descargar la etiqueta.

## Errores comunes → solución

| Error | Qué le pasa a Elena | Solución |
| --- | --- | --- |
| Estado = círculo de color sin texto | No sabe qué envío tiene un problema (tampoco quien no distingue colores) | Texto visible del estado; icono con forma distinta y `aria-hidden` |
| Ilustración decorativa con `alt` descriptivo | Oye «Icono de una caja de cartón» en cada encabezado | `alt=""` / `aria-hidden="true"` |
| Botón y enlace con solo un SVG | Oye «botón», «enlace» sin acción | `aria-label` con verbo + objeto |

## Ejemplo

- Página: «Mis envíos» de Mensajería Rayo.
- Demo:
  1. Simular deuteranopía en devtools (Rendering) y buscar la incidencia.
  2. Recorrer encabezados con el lector: ruido de la caja.
  3. Tab por los controles: «botón» sin nombre.
  4. Pulsar **Arreglada** y repetir.
- Código: `examples/ShipmentTracking/`.

## Conceptos clave

- Pregunta: ¿qué pierde la persona si quito el icono?
- Decorativo → oculto. Informativo → texto. En control → nombre del control.
- El texto alternativo describe la función o el dato, no el dibujo.
- Contraste de iconos necesarios: 3:1.

## Pruebas

- Automatizadas (`ShipmentTracking.test.tsx`): sin arreglo, sin texto de estado y controles sin nombre; con arreglo, estados legibles, sin imágenes expuestas, nombres de controles, mensaje de copia y axe.
- Manuales pendientes: anuncio real con NVDA y VoiceOver; simulación de daltonismo; contraste de iconos en navegador.

## Fuentes

- [WCAG 1.1.1 Contenido no textual](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html) · [Árbol de decisión de alt, WAI](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [WCAG 1.4.1 Uso del color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html) · [WCAG 1.4.11 Contraste no textual](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)
- [WCAG 4.1.2 Nombre, función, valor](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html) · [Accessible Name Computation 1.2](https://www.w3.org/TR/accname-1.2/)
- [MagentaA11y: botón](https://www.magentaa11y.com/checklist-web/button/)
