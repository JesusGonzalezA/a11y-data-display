# 5.2 Navegación por celdas y gestión del foco

> Módulo 5 · Patrón grid · ejemplo: `/ejemplos/pistas`

## Objetivo

- Dejar el grid en una sola parada de Tab.
- Programar las teclas del patrón y sus límites.
- Explicar a la persona cómo se usa.

## Situación

- **Persona:** Andrés — temblor en las manos, usa sobre todo el teclado.
- **Tarea:** reservar una pista a las 12:00 y seguir hasta «Ver mis reservas».

## Errores comunes → solución

| Error | Qué le pasa a Andrés | Solución |
| --- | --- | --- |
| Los 20 botones en el orden de Tab | Más de doce pulsaciones para llegar; veinte para salir | Un solo `tabindex="0"`; el resto, `-1` |
| `role="grid"` sin teclado | La flecha desplaza la página; el foco no se mueve | Flechas, Inicio, Fin y Ctrl+Inicio/Fin, con límites |
| Ninguna pista de cómo se usa | Sigue usando Tab | Instrucción visible unida con `aria-describedby` |

## Ejemplo

- Página: reserva de pistas de Pádel La Red.
- Demo:
  1. Con barreras: Tab hasta las 12:00; probar las flechas.
  2. Pulsar **Arreglada**: Tab entra, flechas, Fin, Ctrl+Inicio, bordes.
  3. Tab sale a «Ver mis reservas»; Mayús+Tab vuelve a la misma celda.
- Código: `examples/CourtBooking/` y `../gridKeys.ts`.

## Conceptos clave

- Tab entra y sale; las flechas mueven el foco dentro.
- Tabindex itinerante: el `0` viaja con el foco.
- En los bordes el foco se queda.
- Las celdas deshabilitadas siguen recibiendo foco (`aria-disabled`).
- En este ejemplo las cabeceras no reciben foco: el nombre de cada botón incluye hora y pista.

## Pruebas

- Automatizadas (`CourtBooking.test.tsx`, `gridKeys.test.ts`): sin arreglo, 20 botones sin `tabindex` y flechas sin efecto; con arreglo, un solo `tabindex="0"`, flechas, Inicio, Fin, Ctrl+Inicio/Fin, límites, salida y regreso con Tab, hora ocupada no elegible y axe.
- Manuales pendientes: modo foco y anuncio de cabeceras con NVDA, JAWS y VoiceOver; foco visible; Fn+flechas en Mac.

## Fuentes

- [WAI-ARIA APG: Grid](https://www.w3.org/WAI/ARIA/apg/patterns/grid/)
- [WAI-ARIA APG: gestión del foco con el teclado](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/)
- [WCAG 2.1.1 Teclado](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html) · [WCAG 2.4.3 Orden del foco](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html) · [WCAG 2.4.7 Foco visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)
