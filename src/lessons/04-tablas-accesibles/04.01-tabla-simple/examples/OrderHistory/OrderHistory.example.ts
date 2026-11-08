import type { ExampleDefinition } from '../../../../../examples/types'
import { OrderHistory } from './OrderHistory'

export const orderHistoryExample: ExampleDefinition = {
  slug: 'pedidos',
  name: 'Historial de pedidos de una papelería',
  lesson: '4.1',
  lessonTitle: 'Tabla simple: título, encabezados y celdas',
  title: 'Mis pedidos · Papelería Trazo',
  tryIt:
    'Con un lector de pantalla, entra en la tabla y muévete por las celdas (NVDA y JAWS: Ctrl+Alt+flechas; VoiceOver: Ctrl+Opción+flechas). ¿Qué anuncia al llegar a «7,50 €»? Reduce la ventana a 320 píxeles o amplía al 400% e intenta ver el estado del último pedido.',
  fixes: [
    {
      id: 'caption',
      title: 'La tabla tiene título',
      where: 'Encima de la tabla.',
      why: 'Un párrafo encima de la tabla parece su título, pero no está asociado: el lector anuncia «tabla, 6 filas, 5 columnas» sin decir de qué. <caption> es el nombre accesible de la tabla y se anuncia al entrar en ella.',
      before: '<p class="titulo">Tus pedidos de 2026</p>\n<table>…</table>',
      after: '<table>\n  <caption>Tus pedidos de 2026</caption>\n  …\n</table>',
    },
    {
      id: 'headers',
      title: 'La primera fila son encabezados de columna',
      where: 'Fila «Pedido, Fecha, Artículos, Importe, Estado».',
      why: 'Sin arreglo, la primera fila son celdas normales en negrita. Al moverse por la tabla, el lector anuncia «7,50 €» sin decir que es el importe. Con <th scope="col"> dentro de <thead>, cada celda se anuncia con su encabezado: «Importe, 7,50 €».',
      before:
        '<tr class="cabecera">\n  <td>Pedido</td>\n  <td>Fecha</td>\n  …\n</tr>',
      after:
        '<thead>\n  <tr>\n    <th scope="col">Pedido</th>\n    <th scope="col">Fecha</th>\n    …\n  </tr>\n</thead>',
    },
    {
      id: 'scroll',
      title: 'La tabla se desplaza dentro de una zona enfocable',
      where: 'Contenedor de la tabla.',
      why: 'Las tablas de datos son una de las excepciones del reflujo: pueden necesitar desplazamiento horizontal. Pero con overflow: hidden, a 320 px o con zoom las últimas columnas quedan recortadas y no hay forma de verlas. Con overflow-x: auto se pueden desplazar; tabindex="0" permite hacerlo con las flechas, y role="region" con el nombre del caption explica qué es esa parada de foco.',
      before:
        '<div class="tabla-contenedor">\n  <table>…</table>\n</div>\n\n.tabla-contenedor { overflow: hidden; }',
      after:
        '<div class="tabla-contenedor" role="region"\n  aria-labelledby="titulo-pedidos" tabindex="0">\n  <table>…</table>\n</div>\n\n.tabla-contenedor { overflow-x: auto; }',
    },
  ],
  Page: OrderHistory,
}
