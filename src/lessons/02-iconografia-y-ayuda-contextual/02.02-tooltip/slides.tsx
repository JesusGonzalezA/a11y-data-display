import { Fragment } from 'react'
import {
  Code,
  ExampleLinks,
  PersonaCard,
  SlideTitle,
} from '../../../slides/parts'

export const slides = [
  <Fragment key="2.2-leccion">
    <SlideTitle kind="leccion">Tooltip: ayuda contextual y límites</SlideTitle>
    <p>
      Un <strong>tooltip</strong> es un texto breve que aparece al pasar el
      puntero o al enfocar un elemento.
    </p>
    <p>En esta lección:</p>
    <ul>
      <li>Cuándo usar un tooltip y cuándo texto visible.</li>
      <li>Nombre y descripción de un control.</li>
      <li>Tooltips que se abren con teclado y dan tiempo a leer.</li>
    </ul>
  </Fragment>,
  <Fragment key="2.2-cuando">
    <SlideTitle kind="leccion">¿Tooltip o texto visible?</SlideTitle>
    <p>
      Un tooltip no siempre se puede abrir. En un móvil no hay puntero que pasar
      por encima.
    </p>
    <ul>
      <li>
        <strong>Tooltip:</strong> una ayuda breve que no es imprescindible.
      </li>
      <li>
        <strong>Texto visible:</strong> lo que hace falta para decidir o para no
        equivocarse.
      </li>
      <li>
        <strong>Diálogo:</strong> si la ayuda tiene enlaces o botones.
      </li>
    </ul>
  </Fragment>,
  <Fragment key="2.2-nombre-descripcion">
    <SlideTitle kind="leccion">Nombre y descripción no son lo mismo</SlideTitle>
    <dl className="facts">
      <dt>Nombre</dt>
      <dd>
        Qué hace el control: «Archivar». Se anuncia primero. Atributos:{' '}
        <code>aria-label</code> o <code>aria-labelledby</code>.
      </dd>
      <dt>Descripción</dt>
      <dd>
        Un detalle más: «Se borra a los 30 días». Se anuncia después. Atributo:{' '}
        <code>aria-describedby</code>.
      </dd>
    </dl>
    <p>Un tooltip es el nombre o la descripción. Nunca los dos.</p>
  </Fragment>,
  <Fragment key="2.2-situacion">
    <SlideTitle kind="situacion">Andrés ordena su correo</SlideTitle>
    <PersonaCard
      id="andres"
      task="Quiere archivar un mensaje y saber si puede recuperar lo que tira a la papelera. No reconoce todos los iconos."
    />
  </Fragment>,
  <Fragment key="2.2-error-foco">
    <SlideTitle kind="error">El tooltip solo aparece con el ratón</SlideTitle>
    <Code tone="error" caption="Así está">
      {
        '<button aria-label="Archivar"\n  onmouseenter="mostrar()">…</button>\n<span class="tooltip">Archivar</span>'
      }
    </Code>
    <p>
      <strong>Qué le pasa a Andrés:</strong> avanza con <kbd>Tab</kbd> y solo ve
      tres iconos. La ayuda nunca le aparece. Con el atributo <code>title</code>{' '}
      pasa lo mismo.
    </p>
  </Fragment>,
  <Fragment key="2.2-solucion-foco">
    <SlideTitle kind="solucion">
      Mostrarlo con el foco y con el puntero
    </SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<button aria-labelledby="tip-archivar"\n  onfocus="mostrar()" onblur="ocultar()">…</button>\n<span role="tooltip" id="tip-archivar">Archivar</span>'
      }
    </Code>
    <ul>
      <li>El tooltip aparece con el foco y con el puntero.</li>
      <li>
        Aquí <strong>es el nombre</strong> del botón: se ve y se oye lo mismo.
      </li>
    </ul>
  </Fragment>,
  <Fragment key="2.2-error-cerrar">
    <SlideTitle kind="error">Se cierra al intentar leerlo</SlideTitle>
    <Code tone="error" caption="Así está">
      {
        '<button onmouseleave="ocultar()">…</button>\n<span class="tooltip tooltip--separado">…</span>\n\n/* Escape no hace nada */'
      }
    </Code>
    <p>
      <strong>Qué le pasa a Andrés:</strong> le tiembla la mano, el puntero se
      sale del botón y el tooltip desaparece. Y si le tapa algo, no puede
      cerrarlo con <kbd>Escape</kbd>.
    </p>
  </Fragment>,
  <Fragment key="2.2-solucion-cerrar">
    <SlideTitle kind="solucion">
      Se puede cerrar, alcanzar y leer con calma
    </SlideTitle>
    <p>Un tooltip bien hecho:</p>
    <ul>
      <li>
        <strong>Se cierra</strong> con <kbd>Escape</kbd>, sin mover el foco.
      </li>
      <li>
        <strong>No se cierra</strong> al llevar el puntero hasta él.
      </li>
      <li>
        <strong>Se queda</strong> abierto hasta que la persona se va.
      </li>
    </ul>
    <p>Lo pide el criterio 1.4.13 de WCAG.</p>
  </Fragment>,
  <Fragment key="2.2-error-esencial">
    <SlideTitle kind="error">
      Información esencial escondida en un «?»
    </SlideTitle>
    <Code tone="error" caption="Así está">
      {'<span class="pista" onmouseenter="mostrar()">?</span>'}
    </Code>
    <p>
      <strong>Qué le pasa a Andrés:</strong> con el teclado no llega al «?». No
      se entera de que la papelera se vacía a los 30 días. En un móvil pasa
      igual.
    </p>
  </Fragment>,
  <Fragment key="2.2-solucion-esencial">
    <SlideTitle kind="solucion">Lo esencial, siempre visible</SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<button aria-labelledby="tip-papelera"\n  aria-describedby="ayuda-papelera">…</button>\n<p id="ayuda-papelera">Los mensajes de la papelera\n  se borran para siempre a los 30 días.</p>'
      }
    </Code>
    <p>
      El aviso está siempre a la vista. <code>aria-describedby</code> lo une al
      botón: el lector lo anuncia después del nombre.
    </p>
    <ExampleLinks slug="correo" task="usar la barra del correo" />
  </Fragment>,
  <Fragment key="2.2-resumen">
    <SlideTitle kind="resumen">Antes de añadir un tooltip</SlideTitle>
    <ol className="steps">
      <li>¿Es imprescindible? Texto visible.</li>
      <li>¿Tiene enlaces o botones? Un diálogo.</li>
      <li>¿Es el nombre o la descripción? Usa su atributo.</li>
      <li>¿Se abre con teclado, se cierra con Escape y da tiempo a leer?</li>
    </ol>
    <p>Pruébalo con teclado, con lector de pantalla y en un móvil.</p>
  </Fragment>,
]
