import type { ExampleDefinition } from '../../../../../examples/types'
import { CourseCatalog } from './CourseCatalog'

export const courseCatalogExample: ExampleDefinition = {
  slug: 'academia',
  name: 'Catálogo de cursos en cards',
  lesson: '3.2',
  lessonTitle: 'Cards: estructura, acciones y orden de lectura',
  title: 'Cursos de otoño · Academia Faro',
  tryIt:
    'Recorre las cards con Tab y fíjate en el orden del foco frente al orden visual. Pulsa «Guardar» con Enter. Con un lector de pantalla, salta entre encabezados y escucha el nombre de cada enlace y de cada botón. Cambia a la vista «Lista» y vuelve a recorrer.',
  fixes: [
    {
      id: 'heading',
      title: 'El título de cada card es un encabezado',
      where: 'Título de cada curso.',
      why: 'Un texto grande dentro de un <span> parece un título, pero no lo es: el lector no permite saltar de card en card con la tecla de encabezados. Con <h2>, cada card tiene un punto de entrada y la colección se recorre deprisa.',
      before: '<span class="card__titulo">Excel desde cero</span>',
      after:
        '<h2 class="card__titulo">\n  <a href="/cursos/excel">Excel desde cero</a>\n</h2>',
    },
    {
      id: 'nested',
      title: 'El enlace y la acción secundaria están separados',
      where: 'Enlace al curso y botón «Guardar» de cada card.',
      why: 'Sin arreglo, toda la card es un enlace que contiene el botón. Un control dentro de otro no es válido en HTML: el nombre del enlace incluye «Guardar», el lector anuncia todo el texto de la card y la acción secundaria compite con la navegación. Con el arreglo, el enlace está en el título; un pseudoelemento extiende su zona de clic a toda la card, y el botón queda por encima, con un nombre que dice qué curso guarda.',
      before:
        '<a href="/cursos/excel" class="card">\n  <span>Excel desde cero</span>\n  <p>12 horas · En línea</p>\n  <button>Guardar</button>\n</a>',
      after:
        '<li class="card">\n  <h2><a href="/cursos/excel">Excel desde cero</a></h2>\n  <p>12 horas · En línea</p>\n  <button>Guardar\n    <span class="visually-hidden">Excel desde cero</span>\n  </button>\n</li>\n\n.card__link::after { position: absolute; inset: 0; }',
    },
    {
      id: 'order',
      title: 'El orden del código es el orden visual',
      where: 'Lista de cursos, en la vista de cuadrícula.',
      why: 'El curso destacado se escribe el último y el CSS lo coloca el primero con order: -1. Se ve primero, pero el teclado y el lector lo alcanzan al final, y el foco salta hacia atrás. Escribirlo primero en el HTML hace que lectura, foco y vista coincidan, en cualquier disposición.',
      before:
        '<ul class="catalogo">\n  <li>Fotografía…</li>\n  <li>Inglés…</li>\n  <li>Huerto…</li>\n  <li class="card--destacada">Excel…</li>\n</ul>\n\n.card--destacada { order: -1; }',
      after:
        '<ul class="catalogo">\n  <li class="card--destacada">Excel…</li>\n  <li>Fotografía…</li>\n  <li>Inglés…</li>\n  <li>Huerto…</li>\n</ul>',
    },
  ],
  Page: CourseCatalog,
}
