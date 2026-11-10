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
      Ordenar una tabla es una <strong>acción</strong>. Hay que poder
      encontrarla, hacerla con el teclado y saber qué ha pasado después.
    </p>
    <p>En esta lección aprenderás a:</p>
    <ul>
      <li>Poner un botón en el encabezado para ordenar.</li>
      <li>Indicar qué columna ordena la tabla y en qué sentido.</li>
      <li>Avisar del cambio sin mover el foco.</li>
    </ul>
  </Fragment>,
  <Fragment key="4.3-que-cambia">
    <SlideTitle kind="leccion">Qué cambia al ordenar</SlideTitle>
    <ol className="steps">
      <li>
        <strong>El control:</strong> la persona elige una columna.
      </li>
      <li>
        <strong>El estado:</strong> la tabla queda ordenada por esa columna, en
        un sentido.
      </li>
      <li>
        <strong>El resultado:</strong> las filas cambian de sitio.
      </li>
    </ol>
    <p>
      Quien mira la tabla percibe las tres cosas a la vez. Quien usa el teclado
      o un lector de pantalla necesita recibir cada una.
    </p>
  </Fragment>,
  <Fragment key="4.3-situacion">
    <SlideTitle kind="situacion">Andrés busca a su hermana</SlideTitle>
    <PersonaCard
      id="andres"
      task="Quiere ordenar la clasificación por nombre para encontrar a su hermana y después volver a ordenarla por tiempo."
    />
  </Fragment>,
  <Fragment key="4.3-error-control">
    <SlideTitle kind="error">El encabezado solo responde al ratón</SlideTitle>
    <Code tone="error" caption="Así está">
      {'<th onclick="ordenar(\'nombre\')">\n  Nombre ▲\n</th>'}
    </Code>
    <p>
      <strong>Qué le pasa a Andrés:</strong> pulsa <kbd>Tab</kbd> y el foco se
      salta los encabezados. No puede ordenar con el teclado: tendría que buscar
      a su hermana fila a fila.
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
        El <code>th</code> sigue siendo el encabezado; el botón es la acción.
      </li>
      <li>
        <kbd>Tab</kbd> llega al botón; <kbd>Enter</kbd> o <kbd>Espacio</kbd>{' '}
        ordenan. Otra pulsación invierte el orden.
      </li>
      <li>El foco se queda en el botón: Andrés no pierde su sitio.</li>
    </ul>
  </Fragment>,
  <Fragment key="4.3-error-estado">
    <SlideTitle kind="error">El orden solo se indica con una flecha</SlideTitle>
    <Code tone="error" caption="Así está">
      {'<th>\n  <button>Tiempo ▲</button>\n</th>'}
    </Code>
    <p>
      <strong>Qué le pasa a Elena:</strong> su lector lee la flecha como
      «triángulo negro», o no la lee. No sabe qué columna ordena la tabla ni en
      qué sentido.
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
        <code>ascending</code> (de menor a mayor) o <code>descending</code> (de
        mayor a menor), solo en <strong>una</strong> columna a la vez.
      </li>
      <li>La flecha se oculta al lector: el atributo ya lo dice.</li>
      <li>
        El título de la tabla avisa: «Los encabezados con botón permiten
        ordenar».
      </li>
    </ul>
  </Fragment>,
  <Fragment key="4.3-error-anuncio">
    <SlideTitle kind="error">Las filas cambian en silencio</SlideTitle>
    <p>
      Al ordenar, el foco sigue en el botón y las filas cambian más abajo. No
      todos los lectores de pantalla anuncian el nuevo valor de{' '}
      <code>aria-sort</code>.
    </p>
    <p>
      <strong>Qué le pasa a Elena:</strong> pulsa el botón y nada le confirma
      que la tabla haya cambiado.
    </p>
  </Fragment>,
  <Fragment key="4.3-solucion-anuncio">
    <SlideTitle kind="solucion">Un mensaje de estado breve</SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {'<p role="status">\n  Ordenada por nombre, de la A a la Z.\n</p>'}
    </Code>
    <ul>
      <li>
        <code>role="status"</code> se anuncia sin mover el foco.
      </li>
      <li>Es visible: también confirma el cambio a quien mira la tabla.</li>
      <li>Es corto: dice la columna y el sentido.</li>
    </ul>
    <ExampleLinks
      slug="carrera"
      barrier="Ordenar la clasificación con barreras"
      fixed="Ordenar la clasificación corregida"
    />
  </Fragment>,
]
