import type { ExampleDefinition } from '../../../../../examples/types'
import { JobBoard } from './JobBoard'

export const jobBoardExample: ExampleDefinition = {
  slug: 'empleo',
  name: 'Ofertas de empleo con filtros',
  lesson: '4.4',
  lessonTitle: 'Tabla con filtros: resultados y continuidad de la tarea',
  title: 'Ofertas de empleo · Brote Empleo',
  tryIt:
    'Escribe «diseñadora» en el buscador sin mirar el teclado: ¿dónde acaba lo que escribes? Elige una modalidad y fíjate en qué se conserva de la etiqueta. Busca «chef» en modalidad remota y comprueba qué ves y qué anuncia el lector. Intenta volver a ver todas las ofertas.',
  fixes: [
    {
      id: 'labels',
      title: 'Cada filtro tiene una etiqueta que no desaparece',
      where: 'Buscador y selector de modalidad.',
      why: 'Un placeholder no es una etiqueta: desaparece al escribir y tiene poco contraste. En el selector, la primera opción hacía de etiqueta y se perdía al elegir. Con <label>, el nombre de cada filtro está siempre visible y se anuncia al enfocarlo.',
      before:
        '<input type="search" placeholder="Buscar…">\n<select>\n  <option value="">Modalidad</option>…\n</select>',
      after:
        '<label for="q">Puesto o empresa</label>\n<input id="q" type="search">\n<label for="modalidad">Modalidad</label>\n<select id="modalidad">\n  <option value="">Todas</option>…\n</select>',
    },
    {
      id: 'focus',
      title: 'El foco se queda en el filtro',
      where: 'Título «Resultados».',
      why: 'Sin arreglo, cada cambio lleva el foco al título de resultados: al escribir, la segunda letra ya no entra en el buscador y quien usa lector salta de sitio sin haberlo pedido. Filtrar no es una navegación: el foco se queda donde está y el resultado se comunica con un mensaje.',
      before:
        'input.addEventListener("input", () => {\n  filtrar()\n  tituloResultados.focus()\n})',
      after:
        'input.addEventListener("input", () => {\n  filtrar()\n  // El foco no se mueve\n})',
    },
    {
      id: 'status',
      title: 'El número de resultados se ve y se anuncia',
      where: 'Debajo del título «Resultados».',
      why: 'Sin arreglo, nada dice cuántas ofertas quedan: hay que recorrer la tabla para saberlo. Un mensaje visible dentro de role="status" lo muestra a todas las personas y el lector lo anuncia sin mover el foco (WCAG 4.1.3).',
      before: '<p class="contador"></p>',
      after:
        '<p class="contador" role="status">\n  Mostrando 3 de 8 ofertas.\n</p>',
    },
    {
      id: 'empty',
      title: 'Sin resultados, se explica y se ofrece una salida',
      where: 'Zona de la tabla cuando ningún resultado coincide.',
      why: 'Una tabla con solo encabezados parece rota y no dice qué ha pasado. El mensaje explica qué filtros no tienen resultados y el botón «Quitar los filtros» recupera la lista completa en un paso; al pulsarlo, el foco vuelve al buscador, porque el botón desaparece.',
      before: '<table>\n  <thead>…</thead>\n  <tbody></tbody>\n</table>',
      after:
        '<p role="status">No hay ofertas para «chef»\n  en modalidad remoto.</p>\n<p>Prueba con otra palabra o con otra modalidad.</p>\n<button type="button">Quitar los filtros</button>',
    },
  ],
  Page: JobBoard,
}
