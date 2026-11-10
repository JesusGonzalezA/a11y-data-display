import { Fragment } from 'react'
import {
  Code,
  ExampleLinks,
  PersonaCard,
  SlideTitle,
} from '../../../slides/parts'

export const slides = [
  <Fragment key="4.3-leccion">
    <SlideTitle kind="leccion">
      Tabla ordenable: controles y dirección de ordenación
    </SlideTitle>
    <p>
      Ordenar es una <strong>acción</strong>. Hay que poder hacerla con el
      teclado y saber qué ha pasado después.
    </p>
    <p>En esta lección:</p>
    <ul>
      <li>Un botón para ordenar.</li>
      <li>Qué columna ordena la tabla y en qué sentido.</li>
      <li>Un aviso del cambio.</li>
    </ul>
  </Fragment>,
  <Fragment key="4.3-situacion">
    <SlideTitle kind="situacion">Andrés busca a su hermana</SlideTitle>
    <PersonaCard
      id="andres"
      task="Busca a su hermana en la clasificación de una carrera. Quiere ordenarla por nombre y después por tiempo."
    />
  </Fragment>,
  <Fragment key="4.3-error-control">
    <SlideTitle kind="error">El encabezado solo responde al ratón</SlideTitle>
    <Code tone="error" caption="Así está">
      {'<th onclick="ordenar(\'nombre\')">\n  Nombre ▲\n</th>'}
    </Code>
    <p>
      <strong>Qué le pasa a Andrés:</strong> con <kbd>Tab</kbd>, el foco pasa de
      largo los encabezados. No puede ordenar.
    </p>
  </Fragment>,
  <Fragment key="4.3-solucion-control">
    <SlideTitle kind="solucion">Un botón dentro del encabezado</SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<th>\n  <button type="button" onclick="ordenar(\'nombre\')">\n    Nombre <span aria-hidden="true">▲</span>\n  </button>\n</th>'
      }
    </Code>
    <ul>
      <li>
        El <code>th</code> sigue siendo el encabezado. El botón es la acción.
      </li>
      <li>
        <kbd>Tab</kbd> llega al botón. <kbd>Enter</kbd> o <kbd>Espacio</kbd>{' '}
        ordenan.
      </li>
      <li>El foco se queda en el botón.</li>
    </ul>
  </Fragment>,
  <Fragment key="4.3-error-estado">
    <SlideTitle kind="error">El orden solo se indica con una flecha</SlideTitle>
    <Code tone="error" caption="Así está">
      {'<th>\n  <button>Tiempo ▲</button>\n</th>'}
    </Code>
    <p>
      <strong>Qué le pasa a Elena:</strong> su lector lee «triángulo negro» o
      nada. No sabe por qué columna está ordenada la tabla.
    </p>
  </Fragment>,
  <Fragment key="4.3-solucion-estado">
    <SlideTitle kind="solucion">aria-sort en el encabezado ordenado</SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<th aria-sort="ascending">\n  <button>\n    Tiempo <span aria-hidden="true">▲</span>\n  </button>\n</th>'
      }
    </Code>
    <ul>
      <li>
        <code>ascending</code> (de menor a mayor) o <code>descending</code>,
        solo en <strong>una</strong> columna.
      </li>
      <li>La flecha se oculta al lector: el atributo ya lo dice.</li>{' '}
    </ul>
  </Fragment>,
  <Fragment key="4.3-error-anuncio">
    <SlideTitle kind="error">Las filas cambian en silencio</SlideTitle>
    <p>
      Al ordenar, las filas cambian lejos del foco. Y no todos los lectores
      anuncian el nuevo <code>aria-sort</code>.
    </p>
    <p>
      <strong>Qué le pasa a Elena:</strong> pulsa el botón y no sabe si ha
      pasado algo.
    </p>
  </Fragment>,
  <Fragment key="4.3-solucion-anuncio">
    <SlideTitle kind="solucion">Un mensaje de estado breve</SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {'<p role="status">\n  Ordenada por nombre, de la A a la Z.\n</p>'}
    </Code>
    <ul>
      <li>El lector lo anuncia sin mover el foco.</li>
      <li>Se ve: también sirve a quien mira la tabla.</li>
      <li>Es corto: columna y sentido.</li>
    </ul>
    <ExampleLinks slug="carrera" task="ordenar la clasificación" />
  </Fragment>,
]
