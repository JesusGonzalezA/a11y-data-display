# 4.2 Tabla con doble eje: encabezados de fila y columna

> Módulo 4 · Tablas accesibles · ejemplo: `/ejemplos/tarifas`

## Objetivo

- Relacionar cada dato con su fila y su columna.
- Marcar encabezados de fila con `th scope="row"`.
- Dar texto a las celdas que solo muestran un icono.

## Situación

- **Persona:** Elena — ciega, usa lector de pantalla.
- **Tarea:** elegir la tarifa más barata con televisión y sin permanencia.

## Errores comunes → solución

| Error | Qué le pasa a Elena | Solución |
| --- | --- | --- |
| Características en `td` | Al bajar por una columna no sabe qué es cada valor | `<th scope="row">`; esquina vacía en `td` |
| Marca ✓/✗ solo en SVG oculto | Las celdas de televisión suenan vacías | Texto oculto visualmente «Incluida» / «No incluida» |

## Ejemplo

- Página: «Compara nuestras tarifas» de Onda Fibra.
- Demo:
  1. Columna Plus con Ctrl+Alt+flecha abajo: valores sin fila.
  2. Fila Televisión: celdas vacías.
  3. **Aplicar arreglo** y repetir.
- Código: `examples/PlanComparison/`.

## Conceptos clave

- Doble eje: cada dato depende de fila y columna.
- `scope="col"` y `scope="row"`; esquina superior izquierda vacía = `td`.
- Fuera de alcance: encabezados agrupados o multinivel (`colgroup`, `headers`).

## Pruebas

- Automatizadas (`PlanComparison.test.tsx`): sin arreglo, sin `rowheader` y celdas vacías; con arreglo, siete encabezados de fila, textos «Incluida»/«No incluida» y axe.
- Manuales pendientes: anuncio de fila y columna con NVDA, JAWS y VoiceOver.

## Fuentes

- [WAI Tables Tutorial: tablas con dos encabezados](https://www.w3.org/WAI/tutorials/tables/two-headers/) · [Tablas irregulares](https://www.w3.org/WAI/tutorials/tables/irregular/) · [Multinivel](https://www.w3.org/WAI/tutorials/tables/multi-level/)
- [HTML: atributo `scope`](https://html.spec.whatwg.org/multipage/tables.html#attr-th-scope)
- [WCAG 1.3.1 Información y relaciones](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
