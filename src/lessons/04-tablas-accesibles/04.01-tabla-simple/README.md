# 4.1 Tabla simple: título, encabezados y celdas

> Módulo 4 · Tablas accesibles · ejemplo: `/ejemplos/pedidos`

## Objetivo

- Reconocer cuándo los datos son tabulares.
- Estructurar una tabla con `caption`, `th scope="col"` y `td`.
- Hacer que una tabla ancha se pueda desplazar con teclado sin recortarse.

## Situación

- **Persona:** Elena — ciega, usa lector de pantalla y navegación por celdas.
- **Tarea:** saber cuánto pagó por el pedido que devolvió.

## Errores comunes → solución

| Error | Qué le pasa a Elena | Solución |
| --- | --- | --- |
| Título en un `p` fuera de la tabla | «Tabla, 6 filas» sin saber de qué | `<caption>` |
| Primera fila con `td` en negrita | Oye «7,50 €» sin saber qué columna es | `<thead>` + `<th scope="col">` |
| Contenedor con `overflow: hidden` | Con zoom, las últimas columnas desaparecen | `overflow-x: auto` + `tabindex="0"` + `role="region"` con nombre |

## Ejemplo

- Página: «Mis pedidos» de Papelería Trazo.
- Demo:
  1. Entrar en la tabla con el lector y recorrer la fila T-1029.
  2. Ventana de 320 px o zoom al 400 %.
  3. **Aplicar arreglo** y repetir; Tab hasta la tabla y flechas.
- Código: `examples/OrderHistory/`.

## Conceptos clave

- Datos tabulares: mismos atributos por elemento, sentido en fila y en columna.
- `caption` = nombre de la tabla. `th` = encabezado. `scope` = a qué celdas afecta.
- Tablas de datos: excepción del reflujo; zona desplazable enfocable y con nombre.

## Pruebas

- Automatizadas (`OrderHistory.test.tsx`): sin arreglo, tabla sin nombre ni encabezados; con arreglo, nombre desde `caption`, cinco `columnheader`, región con nombre que recibe el foco y axe.
- Manuales pendientes: anuncio de encabezados con NVDA, JAWS y VoiceOver; 320 px y zoom 400 %; desplazamiento con flechas.

## Fuentes

- [WAI Tables Tutorial: tablas con un encabezado](https://www.w3.org/WAI/tutorials/tables/one-header/) · [Título y resumen](https://www.w3.org/WAI/tutorials/tables/caption-summary/)
- [HTML: tablas](https://html.spec.whatwg.org/multipage/tables.html)
- [WCAG 1.3.1 Información y relaciones](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html) · [WCAG 1.4.10 Reflujo](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)
- [MagentaA11y: tabla](https://www.magentaa11y.com/checklist-web/table/)
