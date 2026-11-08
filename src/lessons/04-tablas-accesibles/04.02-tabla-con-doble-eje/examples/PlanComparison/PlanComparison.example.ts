import type { ExampleDefinition } from '../../../../../examples/types'
import { PlanComparison } from './PlanComparison'

export const planComparisonExample: ExampleDefinition = {
  slug: 'tarifas',
  name: 'Comparativa de tarifas de fibra y móvil',
  lesson: '4.2',
  lessonTitle: 'Tabla con doble eje: encabezados de fila y columna',
  title: 'Compara nuestras tarifas · Onda Fibra',
  tryIt:
    'Con un lector de pantalla, colócate en la celda «12 meses» de la columna Plus y muévete arriba y abajo por la columna (NVDA: Ctrl+Alt+flechas; VoiceOver: Ctrl+Opción+flechas). ¿Sabes a qué característica corresponde cada valor? ¿Qué se anuncia en las celdas con un icono?',
  fixes: [
    {
      id: 'row-headers',
      title: 'La primera columna son encabezados de fila',
      where: 'Columna con «Velocidad de fibra», «Precio al mes»…',
      why: 'Cada dato depende de dos ejes: la tarifa (columna) y la característica (fila). Sin arreglo, solo las tarifas son encabezados: al bajar por la columna Plus, el lector anuncia «35 €», «2», «12 meses» sin decir qué son. Con <th scope="row">, cada celda se anuncia con su fila y su columna: «Permanencia, Plus, 12 meses».',
      before:
        '<tr>\n  <td class="caracteristica">Permanencia</td>\n  <td>Sin permanencia</td>\n  <td>12 meses</td>\n  …\n</tr>',
      after:
        '<tr>\n  <th scope="row">Permanencia</th>\n  <td>Sin permanencia</td>\n  <td>12 meses</td>\n  …\n</tr>',
    },
    {
      id: 'included',
      title: 'Las marcas de incluido tienen texto',
      where: 'Filas «Televisión» y «Router wifi 6».',
      why: 'La marca y la cruz son SVG ocultos: la celda se anuncia vacía. Un texto oculto visualmente («Incluida», «No incluida») completa el dato; las formas distintas siguen ayudando a quien no distingue el verde del rojo.',
      before: '<td>\n  <svg aria-hidden="true">…</svg>\n</td>',
      after:
        '<td>\n  <svg aria-hidden="true">…</svg>\n  <span class="visually-hidden">Incluida</span>\n</td>',
    },
  ],
  Page: PlanComparison,
}
