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
      Una <strong>card</strong> agrupa la información de un elemento de una
      colección (un curso, un producto) y las acciones sobre él.
    </p>
    <p>En esta lección:</p>
    <ul>
      <li>Dar a cada card un encabezado, su información y acciones claras.</li>
      <li>Separar el enlace al detalle de las acciones secundarias.</li>
      <li>Que el orden visual, el del código y el del foco coincidan.</li>
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
        <strong>Encabezado:</strong> el punto de entrada para saltar de card en
        card.
      </li>
      <li>
        <strong>Acción principal:</strong> un enlace corto, en el título.
      </li>
      <li>
        <strong>Acciones secundarias:</strong> controles aparte, nunca dentro
        del enlace.
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
      <strong>Qué le pasa a Andrés:</strong> nada visible, pero quien usa un
      lector de pantalla, como Elena, no puede saltar de un curso a otro con la
      tecla de encabezados: tiene que escuchar cada card entera.
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
      <li>El nivel sigue la jerarquía de la página, no el tamaño de letra.</li>
      <li>El enlace en el título tiene un nombre corto y único.</li>
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
      el texto de la card, incluido «Guardar». Y hay cuatro «Guardar» iguales.
    </p>
  </Fragment>,
  <Fragment key="3.2-solucion-anidado">
    <SlideTitle kind="solucion">Enlace en el título, acción al lado</SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<h2><a class="card__enlace" href="/cursos/excel">Excel…</a></h2>\n<button>Guardar\n  <span class="visually-hidden">Excel desde cero</span>\n</button>\n\n.card { position: relative; }\n.card__enlace::after { position: absolute; inset: 0; content: ""; }'
      }
    </Code>
    <p>
      Toda la card sigue respondiendo al clic, pero en el código hay dos
      controles hermanos, cada uno con su nombre.
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
      <strong>Qué le pasa a Andrés:</strong> el destacado aparece arriba a la
      izquierda, pero el foco empieza en la segunda card y salta hacia atrás al
      final.
    </p>
  </Fragment>,
  <Fragment key="3.2-solucion-orden">
    <SlideTitle kind="solucion">El código manda el orden</SlideTitle>
    <ul>
      <li>
        Escribe los elementos en el orden en que deben leerse y recorrerse.
      </li>
      <li>
        <code>order</code>, <code>flex-direction: row-reverse</code> o la
        colocación en <code>grid</code> cambian lo que se ve, no lo que se lee.
      </li>
      <li>Al cambiar de vista (cuadrícula, lista), el orden se mantiene.</li>
    </ul>
    <ExampleLinks
      slug="academia"
      barrier="Recorrer el catálogo con barreras"
      fixed="Recorrer el catálogo corregido"
    />
  </Fragment>,
]
