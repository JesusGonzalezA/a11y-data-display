import { Fragment } from 'react'
import {
  Code,
  ExampleLinks,
  PersonaCard,
  SlideTitle,
} from '../../../slides/parts'

export const slides = [
  <Fragment key="5.2-leccion">
    <SlideTitle kind="leccion">
      Navegación por celdas y gestión del foco
    </SlideTitle>
    <p>
      En un grid, <kbd>Tab</kbd> entra y sale. Dentro, el foco se mueve con las
      flechas.
    </p>
    <p>En esta lección:</p>
    <ul>
      <li>Una sola parada de Tab.</li>
      <li>Las teclas de un grid.</li>
      <li>Qué pasa en los bordes.</li>
    </ul>
  </Fragment>,
  <Fragment key="5.2-teclas">
    <SlideTitle kind="leccion">Las teclas de un grid</SlideTitle>
    <table className="summary-table">
      <thead>
        <tr>
          <th scope="col">Tecla</th>
          <th scope="col">Qué hace</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Tab</th>
          <td>Entra en el grid o sale de él</td>
        </tr>
        <tr>
          <th scope="row">Flechas</th>
          <td>Una celda arriba, abajo, a la izquierda o a la derecha</td>
        </tr>
        <tr>
          <th scope="row">Inicio / Fin</th>
          <td>Primera o última celda de la fila</td>
        </tr>
        <tr>
          <th scope="row">Ctrl + Inicio / Fin</th>
          <td>Primera o última celda del grid</td>
        </tr>
      </tbody>
    </table>
    <p>En los bordes, el foco se queda donde está.</p>
  </Fragment>,
  <Fragment key="5.2-situacion">
    <SlideTitle kind="situacion">Andrés reserva una pista</SlideTitle>
    <PersonaCard
      id="andres"
      task="Quiere reservar una pista de pádel a las 12:00. Después quiere ir a «Ver mis reservas»."
    />
  </Fragment>,
  <Fragment key="5.2-error-paradas">
    <SlideTitle kind="error">Veinte paradas de Tab</SlideTitle>
    <Code tone="error" caption="Así está">
      {
        '<td><button>Libre</button></td>\n<td><button>Ocupada</button></td>\n<td><button>Libre</button></td>'
      }
    </Code>
    <p>
      <strong>Qué le pasa a Andrés:</strong> para llegar a las 12:00 pulsa{' '}
      <kbd>Tab</kbd> más de doce veces. Para salir de la tabla, hasta veinte.
    </p>
  </Fragment>,
  <Fragment key="5.2-solucion-paradas">
    <SlideTitle kind="solucion">Una sola parada de Tab</SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<td><button tabindex="0">Libre</button></td>\n<td><button tabindex="-1">Ocupada</button></td>\n<td><button tabindex="-1">Libre</button></td>'
      }
    </Code>
    <ul>
      {' '}
      <li>
        <code>tabindex="0"</code>: solo una celda. Ahí llega <kbd>Tab</kbd>.
      </li>
      <li>
        <code>tabindex="-1"</code>: el resto. Reciben el foco con las flechas.
      </li>
      <li>Al volver al grid, el foco está donde lo dejó.</li>
    </ul>
  </Fragment>,
  <Fragment key="5.2-error-flechas">
    <SlideTitle kind="error">Las flechas no hacen nada</SlideTitle>
    <Code tone="error" caption="Así está">
      {'<table role="grid">\n  …\n</table>\n\n// Sin código para el teclado'}
    </Code>
    <p>
      <strong>Qué le pasa a Andrés:</strong> pulsa la flecha abajo y la página
      se desplaza. El foco no se mueve.
    </p>
  </Fragment>,
  <Fragment key="5.2-solucion-flechas">
    <SlideTitle kind="solucion">Las flechas mueven el foco</SlideTitle>
    <Code tone="solucion" caption="Así se arregla" lang="js">
      {
        'tabla.addEventListener("keydown", (e) => {\n  const destino = celdaDestino(e.key, fila, columna)\n  if (!destino) return\n  e.preventDefault()\n  destino.focus()\n})'
      }
    </Code>
    <ul>
      <li>Cada tecla calcula la celda de destino y le da el foco.</li>
      <li>
        <code>preventDefault()</code> evita que la página se desplace.
      </li>
    </ul>
  </Fragment>,
  <Fragment key="5.2-error-pista">
    <SlideTitle kind="error">Nada dice que se usa con flechas</SlideTitle>
    <Code tone="error" caption="Así está">
      {'<p>Elige una hora libre.</p>\n<table role="grid">…</table>'}
    </Code>
    <p>
      <strong>Qué le pasa a Andrés:</strong> ve una tabla de botones. No sabe
      que puede usar las flechas.
    </p>
  </Fragment>,
  <Fragment key="5.2-solucion-pista">
    <SlideTitle kind="solucion">Una instrucción visible</SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<p id="ayuda">Elige una hora libre. Dentro de la tabla,\n  muévete con las flechas y pulsa Enter para elegir.</p>\n<table role="grid" aria-describedby="ayuda">…</table>'
      }
    </Code>
    <ul>
      <li>Quien ve la página, la lee.</li>
      <li>
        <code>aria-describedby</code>: el lector la anuncia al entrar en el
        grid.
      </li>
    </ul>
    <ExampleLinks slug="pistas" task="reservar una pista" />
  </Fragment>,
]
