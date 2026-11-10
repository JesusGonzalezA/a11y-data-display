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
      Una <strong>card</strong> reúne los datos de un elemento de una colección
      (un curso, un producto) y lo que se puede hacer con él.
    </p>
    <p>En esta lección aprenderás a:</p>
    <ul>
      <li>Dar a cada card un título que sea un encabezado.</li>
      <li>Separar el enlace principal de los botones.</li>
      <li>
        Hacer que lo que se ve, lo que se lee y el foco sigan el mismo orden.
      </li>
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
        <strong>Encabezado:</strong> permite saltar de card en card.
      </li>
      <li>
        <strong>Enlace principal:</strong> corto y en el título.
      </li>
      <li>
        <strong>Otras acciones:</strong> botones aparte, nunca dentro del
        enlace.
      </li>
    </ul>
  </Fragment>,
  <Fragment key="3.2-situacion">
    <SlideTitle kind="situacion">Andrés elige un curso</SlideTitle>
    <PersonaCard
      id="andres"
      task="Quiere recorrer el catálogo, guardar dos cursos para decidir después y abrir el destacado."
    />
  </Fragment>,
  <Fragment key="3.2-error-titulo">
    <SlideTitle kind="error">El título solo lo parece</SlideTitle>
    <Code tone="error" caption="Así está">
      {'<span class="card__titulo">Excel desde cero</span>'}
    </Code>
    <p>
      <strong>Qué le pasa:</strong> Andrés no nota la diferencia, pero Elena sí.
      Con su lector de pantalla no puede saltar de curso en curso: tiene que
      escuchar cada card entera.
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
      <li>
        El nivel del encabezado depende de la estructura de la página, no del
        tamaño de letra.
      </li>
      <li>El enlace del título es corto y distinto en cada card.</li>
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
      <strong>Qué le pasa a Andrés:</strong> el foco entra en el enlace y
      después en un botón que está dentro de él. El enlace se anuncia con todo
      el texto de la card, «Guardar» incluido. Y hay cuatro «Guardar» iguales.
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
      En el código hay dos controles separados, cada uno con su nombre. El CSS
      hace que toda la card siga respondiendo al clic.
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
      <strong>Qué le pasa a Andrés:</strong> ve el curso destacado arriba a la
      izquierda, pero el foco empieza en la segunda card. Llega al destacado al
      final, saltando hacia atrás.
    </p>
  </Fragment>,
  <Fragment key="3.2-solucion-orden">
    <SlideTitle kind="solucion">El código manda el orden</SlideTitle>
    <ul>
      <li>Escribe los elementos en el orden en que deben leerse.</li>
      <li>
        El CSS (<code>order</code>, <code>row-reverse</code>, <code>grid</code>)
        cambia lo que se ve, pero no lo que se lee ni el orden del foco.
      </li>
      <li>
        Si hay varias vistas (cuadrícula, lista), el orden es el mismo en todas.
      </li>
    </ul>
    <ExampleLinks
      slug="academia"
      barrier="Recorrer el catálogo con barreras"
      fixed="Recorrer el catálogo corregido"
    />
  </Fragment>,
]
