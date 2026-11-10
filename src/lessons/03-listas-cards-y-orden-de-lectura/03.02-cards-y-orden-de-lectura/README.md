# 3.2 Cards: estructura, acciones y orden de lectura

> Módulo 3 · Listas, cards y orden de lectura · ejemplo: `/ejemplos/academia`

## Objetivo

- Organizar cards con encabezado, información y acciones identificables.
- Separar la navegación al detalle de las acciones secundarias; sin controles anidados.
- Hacer coincidir orden visual, orden del documento y recorrido del foco.

## Situación

- **Persona:** Andrés — temblor en las manos, usa teclado.
- **Tarea:** recorrer el catálogo, guardar dos cursos y abrir el destacado.

## Errores comunes → solución

| Error | Qué le pasa a Andrés (y a Elena) | Solución |
| --- | --- | --- |
| Título en un `span` | Elena no puede saltar de card en card | `<h2>` con el enlace dentro |
| Toda la card es un enlace con un botón dentro | Controles anidados; nombre larguísimo; «Guardar» sin contexto | Enlace en el título + `::after`; botón hermano con nombre completo |
| Destacado al final del HTML, subido con `order` | El foco empieza por la segunda card y salta atrás | Orden del DOM = orden visual |

## Ejemplo

- Página: «Cursos de otoño» de Academia Faro, con vista de cuadrícula o lista.
- Demo:
  1. Tab desde el principio en cuadrícula: el destacado llega al final.
  2. Enlace de la primera card con el lector: nombre con toda la card.
  3. Navegar por encabezados: no hay.
  4. Pulsar **Arreglada**; repetir en cuadrícula y en lista.
- Código: `examples/CourseCatalog/`.

## Conceptos clave

- Colección de cards = lista; cada card = encabezado + información + acciones.
- Patrón de enlace extendido (`::after` absoluto) en lugar de envolver la card.
- Nombre del botón: texto visible al principio + contexto oculto.
- `order`, `row-reverse` y colocación en grid cambian lo visual, no la lectura.

## Pruebas

- Automatizadas (`CourseCatalog.test.tsx`): sin arreglo, botón dentro de enlace, sin encabezados y destacado al final; con arreglo, encabezados en orden, enlace con nombre corto, recorrido de Tab enlace → botón → siguiente card, `aria-pressed` y axe.
- Manuales pendientes: orden visual frente a foco en navegador (JSDOM no calcula CSS); lector de pantalla en ambas vistas.

## Fuentes

- [WCAG 2.4.3 Orden del foco](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html) · [WCAG 1.3.2 Secuencia significativa](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html)
- [HTML: contenido interactivo dentro de `a`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element)
- [Inclusive Components: Cards, Heydon Pickering](https://inclusive-components.design/cards/)
- [MagentaA11y: card](https://www.magentaa11y.com/checklist-web/card/)
