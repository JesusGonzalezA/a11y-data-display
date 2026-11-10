import { Fragment } from 'react'
import {
  Code,
  ExampleLinks,
  PersonaCard,
  SlideTitle,
} from '../../../slides/parts'

export const slides = [
  <Fragment key="3.2-leccion">
    <SlideTitle kind="leccion">
      Cards: estructura, acciones y orden de lectura
    </SlideTitle>
    <p>
      Una <strong>card</strong> junta los datos de un elemento (un curso, un
      producto) y sus acciones.
    </p>
    <p>En esta lección:</p>
    <ul>
      <li>El título de la card es un encabezado.</li>
      <li>El enlace y los botones van separados.</li>
      <li>El orden que se ve es el orden del código.</li>
    </ul>
  </Fragment>,
  <Fragment key="3.2-anatomia">
    <SlideTitle kind="leccion">La anatomía de una card</SlideTitle>
    <Code tone="neutral" caption="Una colección de cards es una lista">
      {
        '<ul class="catalogo">\n  <li class="card">\n    <h2><a href="/cursos/excel">Excel desde cero</a></h2>\n    <p>12 horas · En línea</p>\n    <button>Guardar …</button>\n  </li>\n</ul>'
      }
    </Code>
    <ul>
      <li>
        <strong>Título:</strong> un encabezado, para saltar de card en card.
      </li>
      <li>
        <strong>Enlace:</strong> corto y dentro del título.
      </li>
      <li>
        <strong>Botones:</strong> aparte, nunca dentro del enlace.
      </li>
    </ul>
  </Fragment>,
  <Fragment key="3.2-situacion">
    <SlideTitle kind="situacion">Andrés elige un curso</SlideTitle>
    <PersonaCard
      id="andres"
      task="Recorre un catálogo de cursos. Quiere guardar dos para decidir después y abrir el destacado."
    />
  </Fragment>,
  <Fragment key="3.2-error-titulo">
    <SlideTitle kind="error">El título solo lo parece</SlideTitle>
    <Code tone="error" caption="Así está">
      {'<span class="card__titulo">Excel desde cero</span>'}
    </Code>
    <p>
      <strong>Qué le pasa:</strong> Andrés no lo nota. Elena sí: su lector no
      puede saltar de curso en curso y tiene que oír cada card entera.
    </p>
  </Fragment>,
  <Fragment key="3.2-solucion-titulo">
    <SlideTitle kind="solucion">Cada card empieza con un encabezado</SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<h2 class="card__titulo">\n  <a href="/cursos/excel">Excel desde cero</a>\n</h2>'
      }
    </Code>
    <ul>
      <li>Con encabezados, el lector salta de curso en curso.</li>
      <li>
        El nivel (h2, h3…) lo decide la estructura de la página, no el tamaño de
        letra.
      </li>
    </ul>
  </Fragment>,
  <Fragment key="3.2-error-anidado">
    <SlideTitle kind="error">Un botón dentro de un enlace</SlideTitle>
    <Code tone="error" caption="Así está">
      {
        '<a href="/cursos/excel" class="card">\n  <span>Excel desde cero</span>\n  <p>12 horas · En línea</p>\n  <button>Guardar</button>\n</a>'
      }
    </Code>
    <p>
      <strong>Qué le pasa a Andrés:</strong> el foco se para en el enlace y
      luego en el botón de dentro. Y los cuatro botones se llaman igual:
      «Guardar».
    </p>
  </Fragment>,
  <Fragment key="3.2-solucion-anidado">
    <SlideTitle kind="solucion">Enlace en el título, botón al lado</SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<h2><a class="card__enlace" href="/cursos/excel">Excel…</a></h2>\n<button>Guardar\n  <span class="visually-hidden">Excel desde cero</span>\n</button>\n\n.card { position: relative; }\n.card__enlace::after { position: absolute; inset: 0; content: ""; }'
      }
    </Code>
    <p>
      Ahora son dos controles separados y cada uno tiene su nombre. El CSS hace
      que toda la card siga respondiendo al clic.
    </p>
  </Fragment>,
  <Fragment key="3.2-error-orden">
    <SlideTitle kind="error">
      Se ve primero, pero se alcanza el último
    </SlideTitle>
    <Code tone="error" caption="Así está">
      {
        '<ul class="catalogo">\n  <li>Fotografía…</li>\n  <li>Inglés…</li>\n  <li>Huerto…</li>\n  <li class="card--destacada">Excel…</li>\n</ul>\n\n.card--destacada { order: -1; }'
      }
    </Code>
    <p>
      <strong>Qué le pasa a Andrés:</strong> ve el curso destacado el primero.
      Pero el foco empieza en la segunda card y llega al destacado al final.
    </p>
  </Fragment>,
  <Fragment key="3.2-solucion-orden">
    <SlideTitle kind="solucion">El código manda el orden</SlideTitle>
    <ul>
      <li>Escribe el HTML en el orden de lectura.</li>
      <li>
        {' '}
        El CSS cambia lo que se ve. No cambia lo que se lee ni el orden del
        foco.
      </li>
      <li>En cuadrícula o en lista, el orden es el mismo.</li>
    </ul>
    <ExampleLinks slug="academia" task="recorrer el catálogo" />
  </Fragment>,
]
