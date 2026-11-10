# 5.3 Acciones dentro de las celdas y revisión del recorrido

> Módulo 5 · Patrón grid · ejemplo: `/ejemplos/suscripciones`

## Objetivo

- Decidir dónde va el foco en una celda con un control.
- Conservar el foco después de una acción que quita una fila.
- Confirmar el resultado y revisar el recorrido completo.

## Situación

- **Persona:** Andrés — temblor en las manos, usa sobre todo el teclado. (También Elena, con lector.)
- **Tarea:** dar de baja dos revistas y seguir revisando la lista.

## Errores comunes → solución

| Error | Qué le pasa | Solución |
| --- | --- | --- |
| El foco va al `td` y el botón es otra parada | Enter no hace nada; Andrés necesita otro Tab | El botón recibe el foco de la celda |
| Al quitar la fila, el foco cae en `body` | El siguiente Tab empieza desde arriba | Foco a la fila siguiente (o anterior, o al mensaje vacío) |
| Nada confirma la baja | Elena oye otra revista y duda | `role="status"` con lo hecho y lo que queda |

## Ejemplo

- Página: «Mis suscripciones» de Quiosco Papel.
- Demo:
  1. Con barreras: flechas hasta «Acción», Enter, Tab, Enter.
  2. Pulsar **Arreglada**: flechas hasta el botón, Enter dos veces seguidas.
  3. Con el lector, escuchar el mensaje de estado.
- Código: `examples/Subscriptions/` y `../gridKeys.ts`.

## Conceptos clave

- Celda con un solo control → el foco va al control.
- Tras quitar una fila: misma columna, fila siguiente.
- Mensaje de estado: qué se ha hecho y qué queda.
- Revisión: Tab entra y sale · flechas · foco visible · foco tras la acción · mensaje.

## Pruebas

- Automatizadas (`Subscriptions.test.tsx`): sin arreglo, foco en la celda, Enter sin efecto, foco en `body` tras la baja y sin `status`; con arreglo, foco en el botón, Enter y Espacio, foco en la fila siguiente o anterior, mensaje, foco en el mensaje vacío y axe.
- Manuales pendientes: anuncio de fila y columna en modo foco y del mensaje con NVDA, JAWS y VoiceOver.

## Fuentes

- [WAI-ARIA APG: Grid](https://www.w3.org/WAI/ARIA/apg/patterns/grid/)
- [WCAG 2.4.3 Orden del foco](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)
- [WCAG 4.1.3 Mensajes de estado](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)
