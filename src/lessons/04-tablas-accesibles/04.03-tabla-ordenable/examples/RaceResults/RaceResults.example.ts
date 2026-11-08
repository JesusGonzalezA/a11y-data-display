import type { ExampleDefinition } from '../../../../../examples/types'
import { RaceResults } from './RaceResults'

export const raceResultsExample: ExampleDefinition = {
  slug: 'carrera',
  name: 'Clasificación ordenable de una carrera popular',
  lesson: '4.3',
  lessonTitle: 'Tabla ordenable: controles y dirección de ordenación',
  title: 'Clasificación de los 10 km · Carrera popular de Villaverde',
  tryIt:
    'Intenta ordenar la clasificación por nombre usando solo el teclado. Con un lector de pantalla, escucha qué se anuncia en el encabezado de la columna ordenada y qué ocurre al cambiar el orden.',
  fixes: [
    {
      id: 'sort-button',
      title: 'Cada encabezado ordenable contiene un botón',
      where: 'Encabezados «Nombre», «Categoría» y «Tiempo».',
      why: 'Sin arreglo, el encabezado responde a un clic, pero no recibe el foco ni se anuncia como control: con teclado no se puede ordenar. Un <button> dentro del <th> mantiene el encabezado de la tabla y añade una acción que se alcanza con Tab y se activa con Enter o Espacio. El foco sigue en el botón al reordenar.',
      before: '<th onclick="ordenar(\'nombre\')">\n  Nombre ▲\n</th>',
      after:
        '<th>\n  <button type="button" onclick="ordenar(\'nombre\')">\n    Nombre <span aria-hidden="true">▲</span>\n  </button>\n</th>',
    },
    {
      id: 'aria-sort',
      title: 'El encabezado ordenado expone su dirección',
      where: 'El encabezado de la columna por la que se ordena.',
      why: 'La flecha es solo visual. aria-sort="ascending" o "descending" en el <th> de la columna ordenada (solo en uno) dice al lector qué columna manda y en qué sentido. La flecha queda con aria-hidden para no sumarse al nombre del botón, y el caption explica que los encabezados con botón ordenan.',
      before: '<th>Tiempo ▲</th>',
      after:
        '<caption>Resultados de los 10 km\n  <span class="visually-hidden">. Los encabezados\n    con botón permiten ordenar.</span>\n</caption>\n…\n<th aria-sort="ascending">\n  <button>Tiempo <span aria-hidden="true">▲</span></button>\n</th>',
    },
    {
      id: 'announce',
      title: 'El resultado del cambio se comunica',
      where: 'Mensaje encima de la tabla.',
      why: 'Al reordenar, el foco no se mueve y las filas cambian fuera de la vista del lector. El anuncio del cambio de aria-sort no es igual en todos los lectores. Un mensaje de estado breve («Ordenada por nombre, de la A a la Z») confirma el resultado a quien usa lector y a quien mira la tabla.',
      before: '<!-- Nada indica el orden actual -->',
      after: '<p role="status">\n  Ordenada por nombre, de la A a la Z.\n</p>',
    },
  ],
  Page: RaceResults,
}
