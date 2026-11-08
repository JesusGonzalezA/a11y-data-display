# 2.2 Tooltip: ayuda contextual y límites

> Módulo 2 · Iconografía y ayuda contextual · ejemplo: `/ejemplos/correo`

## Objetivo

- Decidir entre tooltip y texto visible.
- Distinguir el nombre de un control de su descripción complementaria.
- Hacer que el tooltip aparezca con foco y puntero, se cierre con Escape y se pueda leer.

## Situación

- **Persona:** Andrés — temblor en las manos, usa teclado.
- **Tarea:** archivar un mensaje y saber si lo que manda a la papelera se puede recuperar.

## Errores comunes → solución

| Error | Qué le pasa a Andrés | Solución |
| --- | --- | --- |
| Tooltip solo con `mouseenter` (o `title`) | Con Tab no ve qué hace cada icono | Mostrar con `focus` y puntero; `role="tooltip"` + `aria-labelledby` |
| Tooltip separado del botón, sin Escape | Desaparece al intentar leerlo; no puede quitarlo | Contenedor común, Escape, sin temporizador (WCAG 1.4.13) |
| Información esencial en un «?» con hover | No sabe que la papelera se vacía a los 30 días; nadie puede abrirlo en táctil | Texto visible + `aria-describedby` |

## Ejemplo

- Página: un mensaje abierto en Buzón Brisa, con su barra de acciones.
- Demo:
  1. Tab por los botones: sin ayuda.
  2. Ratón hacia el tooltip: se cierra. Escape: nada.
  3. Buscar el plazo de la papelera con teclado.
  4. **Aplicar arreglo** y repetir; revisar con lector de pantalla.
- Código: `examples/MailToolbar/`.

## Conceptos clave

- Tooltip = recordatorio breve, nunca la única explicación ni contenido interactivo.
- Nombre (qué hace) frente a descripción (información añadida). El nombre se entiende solo.
- WCAG 1.4.13: descartable, recorrible, persistente.
- APG Tooltip: en desarrollo y sin consenso; usa `aria-describedby`. Para un botón de icono cuyo único texto es el tooltip, `aria-labelledby`.
- Táctil: sin hover; la ayuda esencial va visible.

## Pruebas

- Automatizadas (`MailToolbar.test.tsx`): sin arreglo, el foco no muestra ayuda, Escape no cierra y el plazo no existe; con arreglo, tooltip al enfocar, Escape cierra sin mover el foco, sigue abierto al pasar el puntero, descripción accesible y axe.
- Manuales pendientes: anuncio de nombre y descripción con NVDA y VoiceOver; recorrer el tooltip con el ratón; móvil con pantalla táctil.

## Fuentes

- [WAI-ARIA APG: Tooltip](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/) (en desarrollo, sin consenso)
- [WCAG 1.4.13 Contenido al pasar el puntero o enfocar](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html)
- [Accessible Name and Description Computation 1.2](https://www.w3.org/TR/accname-1.2/)
- [MagentaA11y: tooltip](https://www.magentaa11y.com/checklist-web/tooltip/)
