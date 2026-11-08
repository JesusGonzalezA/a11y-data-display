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
      Ordenar una tabla es una <strong>acción</strong>: tiene que poder
      encontrarse, activarse con teclado y dejar claro el resultado.
    </p>
    <p>En esta lección:</p>
    <ul>
      <li>Convertir el encabezado en un control que se pueda usar.</li>
      <li>Exponer qué columna ordena y en qué sentido.</li>
      <li>Comunicar el cambio sin perder el foco.</li>
    </ul>
  </Fragment>,
  <Fragment key="4.3-que-cambia">
    <SlideTitle kind="leccion">Qué cambia al ordenar</SlideTitle>
    <ol className="steps">
      <li>
        <strong>El control:</strong> la persona elige una columna.
      </li>
      <li>
        <strong>El estado:</strong> esa columna pasa a mandar, en un sentido.
      </li>
      <li>
        <strong>El resultado:</strong> las filas cambian de sitio.
      </li>
    </ol>
    <p>
      Quien mira la tabla percibe los tres a la vez. Quien usa teclado o lector
      de pantalla necesita recibir cada uno por separado.
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
      <strong>Qué le pasa a Andrés:</strong> pulsa <kbd>Tab</kbd> y el foco
      salta la cabecera entera. No hay forma de ordenar con teclado; tendría que
      recorrer toda la tabla a mano.
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
        <kbd>Tab</kbd> lo alcanza; <kbd>Enter</kbd> o <kbd>Espacio</kbd>{' '}
        ordenan. Otra pulsación invierte el sentido.
      </li>
      <li>El foco se queda en el botón: Andrés no pierde su sitio.</li>
    </ul>
  </Fragment>,
  <Fragment key="4.3-error-estado">
    <SlideTitle kind="error">La dirección solo es una flecha</SlideTitle>
    <Code tone="error" caption="Así está">
      {'<th>\n  <button>Tiempo ▲</button>\n</th>'}
    </Code>
    <p>
      <strong>Qué le pasa:</strong> la flecha se lee como «triángulo negro» o no
      se lee. Elena, con su lector, no sabe qué columna manda ni en qué sentido.
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
        <code>ascending</code> o <code>descending</code>, solo en{' '}
        <strong>una</strong> columna a la vez.
      </li>
      <li>La flecha se oculta: el estado ya está en el atributo.</li>
      <li>El caption avisa: «Los encabezados con botón permiten ordenar».</li>
    </ul>
  </Fragment>,
  <Fragment key="4.3-error-anuncio">
    <SlideTitle kind="error">Las filas cambian en silencio</SlideTitle>
    <p>
      Al ordenar, el foco sigue en el botón y las filas cambian donde no se ven.
      Que el lector anuncie o no el nuevo <code>aria-sort</code> depende del
      lector y del navegador.
    </p>
    <p>
      <strong>Qué le pasa:</strong> Andrés y Elena pulsan el botón y no tienen
      confirmación de que algo haya ocurrido.
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
      <li>Visible, sirve también a quien mira la tabla.</li>
      <li>Corto: columna y sentido, en palabras del dato.</li>
    </ul>
    <ExampleLinks
      slug="carrera"
      barrier="Ordenar la clasificación con barreras"
      fixed="Ordenar la clasificación corregida"
    />
  </Fragment>,
]
