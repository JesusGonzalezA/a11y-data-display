import { Fragment } from 'react'
import {
  Code,
  ExampleLinks,
  PersonaCard,
  SlideTitle,
} from '../../../slides/parts'

export const slides = [
  <Fragment key="5.3-leccion">
    <SlideTitle kind="leccion">
      Acciones dentro de las celdas y revisión del recorrido
    </SlideTitle>
    <p>
      Un grid sirve para actuar: cada fila tiene su botón. Hay que decidir dónde
      está el foco antes y después de pulsarlo.
    </p>
    <p>En esta lección:</p>
    <ul>
      <li>El foco en una celda que tiene un botón.</li>
      <li>El foco después de la acción.</li>
      <li>Confirmar lo que ha pasado.</li>
    </ul>
  </Fragment>,
  <Fragment key="5.3-situacion">
    <SlideTitle kind="situacion">Andrés cancela una suscripción</SlideTitle>
    <PersonaCard
      id="andres"
      task="Tiene seis revistas. Quiere dar de baja dos y seguir revisando la lista."
    />
  </Fragment>,
  <Fragment key="5.3-error-celda">
    <SlideTitle kind="error">La celda y su botón son dos paradas</SlideTitle>
    <Code tone="error" caption="Así está">
      {'<td tabindex="-1">\n  <button>Dar de baja …</button>\n</td>'}
    </Code>
    <p>
      <strong>Qué le pasa a Andrés:</strong> llega a la celda con las flechas y
      pulsa <kbd>Enter</kbd>. No pasa nada: el foco está en la celda, no en el
      botón.
    </p>
  </Fragment>,
  <Fragment key="5.3-solucion-celda">
    <SlideTitle kind="solucion">El foco va directo al botón</SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {'<td>\n  <button tabindex="-1">Dar de baja …</button>\n</td>'}
    </Code>
    <ul>
      <li>Si la celda solo tiene un control, el foco va al control.</li>
      <li>
        <kbd>Enter</kbd> o <kbd>Espacio</kbd> lo activan. Las flechas siguen
        moviendo el foco.
      </li>
    </ul>
  </Fragment>,
  <Fragment key="5.3-error-foco">
    <SlideTitle kind="error">Al quitar la fila, el foco se pierde</SlideTitle>
    <Code tone="error" caption="Así está" lang="js">
      {'fila.remove()\n// El botón enfocado ya no existe'}
    </Code>
    <p>
      <strong>Qué le pasa a Andrés:</strong> da de baja una revista y el foco
      desaparece. El siguiente <kbd>Tab</kbd> empieza desde arriba de la página.
    </p>
  </Fragment>,
  <Fragment key="5.3-solucion-foco">
    <SlideTitle kind="solucion">El foco pasa a la fila siguiente</SlideTitle>
    <Code tone="solucion" caption="Así se arregla" lang="js">
      {
        'fila.remove()\nconst destino = filaSiguiente ?? filaAnterior\ndestino.querySelector("button").focus()'
      }
    </Code>
    <ul>
      <li>
        La misma columna de la fila siguiente. Si era la última, la anterior.
      </li>
      <li>Si no quedan filas, el foco va al mensaje que lo dice.</li>
    </ul>
  </Fragment>,
  <Fragment key="5.3-error-aviso">
    <SlideTitle kind="error">La baja no se confirma</SlideTitle>
    <Code tone="error" caption="Así está">
      {'<p class="aviso"></p>'}
    </Code>
    <p>
      <strong>Qué le pasa a Elena:</strong> pulsa el botón y oye el nombre de
      otra revista. No sabe si la baja se ha hecho.
    </p>
  </Fragment>,
  <Fragment key="5.3-solucion-aviso">
    <SlideTitle kind="solucion">Un mensaje de estado</SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<p class="aviso" role="status">\n  Has dado de baja «Cocina fácil».\n  Quedan 5 suscripciones.\n</p>'
      }
    </Code>
    <ul>
      <li>Dice qué se ha hecho y qué queda.</li>
      <li>Es lo mismo que al ordenar y al filtrar (lecciones 4.3 y 4.4).</li>
    </ul>
    <ExampleLinks slug="suscripciones" task="dar de baja una revista" />
  </Fragment>,
  <Fragment key="5.3-resumen">
    <SlideTitle kind="resumen">Revisar el recorrido de un grid</SlideTitle>
    <ol className="steps">
      <li>Tab entra. Otro Tab sale.</li>
      <li>Las flechas, Inicio y Fin mueven el foco.</li>
      <li>El foco siempre se ve.</li>
      <li>Después de una acción, el foco sigue en el grid.</li>
      <li>Un mensaje confirma cada cambio.</li>
    </ol>
    <p>Pruébalo con el teclado y con un lector de pantalla.</p>
  </Fragment>,
]
