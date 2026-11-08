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
      Un <strong>tooltip</strong> es un texto breve que aparece al enfocar o al
      pasar el puntero por un elemento, y que lo nombra o lo describe.
    </p>
    <p>En esta lección:</p>
    <ul>
      <li>
        Cuándo un tooltip basta y cuándo la ayuda debe estar siempre visible.
      </li>
      <li>Nombre del control frente a descripción complementaria.</li>
      <li>Aparecer con foco y puntero, cerrarse con Escape y dejarse leer.</li>
    </ul>
  </Fragment>,
  <Fragment key="2.2-cuando">
    <SlideTitle kind="leccion">¿Tooltip o texto visible?</SlideTitle>
    <p>
      Un tooltip depende de enfocar o de pasar el puntero. En una pantalla
      táctil no hay «pasar por encima»: tocar ya activa el botón.
    </p>
    <ul>
      <li>
        <strong>Tooltip:</strong> recordar qué hace un icono, un atajo de
        teclado, un dato breve que no es imprescindible.
      </li>
      <li>
        <strong>Texto visible:</strong> todo lo que la persona necesita para
        decidir o para no equivocarse.
      </li>
      <li>
        <strong>Ni lo uno ni lo otro:</strong> si la ayuda contiene enlaces o
        botones, es un diálogo o un desplegable, no un tooltip.
      </li>
    </ul>
  </Fragment>,
  <Fragment key="2.2-nombre-descripcion">
    <SlideTitle kind="leccion">Nombre y descripción no son lo mismo</SlideTitle>
    <dl className="facts">
      <dt>Nombre</dt>
      <dd>
        Qué es o qué hace el control: «Archivar». Corto y comprensible por sí
        solo. Lo da el texto, <code>aria-label</code> o{' '}
        <code>aria-labelledby</code>.
      </dd>
      <dt>Descripción</dt>
      <dd>
        Información añadida: «Se borra a los 30 días». Se anuncia después del
        nombre. La da <code>aria-describedby</code>.
      </dd>
    </dl>
    <p>
      Un tooltip muestra uno de los dos. Decide cuál y conéctalo con el atributo
      correcto, sin repetir el mismo texto en ambos.
    </p>
  </Fragment>,
  <Fragment key="2.2-situacion">
    <SlideTitle kind="situacion">Andrés ordena su correo</SlideTitle>
    <PersonaCard
      id="andres"
      task="Quiere archivar un mensaje y saber si lo que manda a la papelera se puede recuperar. No reconoce todos los iconos."
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
      <strong>Qué le pasa a Andrés:</strong> recorre la barra con <kbd>Tab</kbd>{' '}
      y solo ve tres iconos. La ayuda existe, pero nunca le aparece. Lo mismo
      pasa con el atributo <code>title</code>.
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
      <li>Aparece al enfocar y al pasar el puntero; el foco no se mueve.</li>
      <li>
        Aquí el tooltip <strong>es el nombre</strong>: lo que se ve y lo que se
        anuncia es el mismo texto.
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
      <strong>Qué le pasa a Andrés:</strong> el temblor hace que el puntero se
      salga del botón y el tooltip desaparece. Cuando tapa otro contenido, no
      puede quitarlo.
    </p>
  </Fragment>,
  <Fragment key="2.2-solucion-cerrar">
    <SlideTitle kind="solucion">
      Descartable, recorrible y persistente
    </SlideTitle>
    <p>El contenido que aparece al enfocar o al pasar el puntero:</p>
    <ul>
      <li>
        <strong>Se puede descartar</strong> con <kbd>Escape</kbd>, sin mover el
        foco ni el puntero.
      </li>
      <li>
        <strong>Se puede recorrer:</strong> el puntero pasa del botón al tooltip
        sin que se cierre.
      </li>
      <li>
        <strong>Persiste</strong> hasta que la persona se va o lo descarta.
      </li>
    </ul>
    <p>Es el criterio WCAG 1.4.13, Contenido al pasar el puntero o enfocar.</p>
  </Fragment>,
  <Fragment key="2.2-error-esencial">
    <SlideTitle kind="error">
      Información esencial escondida en un «?»
    </SlideTitle>
    <Code tone="error" caption="Así está">
      {'<span class="pista" onmouseenter="mostrar()">?</span>'}
    </Code>
    <p>
      <strong>Qué le pasa a Andrés:</strong> el «?» no recibe el foco, así que
      no sabe que la papelera se vacía a los 30 días. En el móvil, nadie puede
      abrirlo.
    </p>
  </Fragment>,
  <Fragment key="2.2-solucion-esencial">
    <SlideTitle kind="solucion">
      Lo esencial, visible y asociado como descripción
    </SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<button aria-labelledby="tip-papelera"\n  aria-describedby="ayuda-papelera">…</button>\n<p id="ayuda-papelera">Los mensajes de la papelera\n  se borran para siempre a los 30 días.</p>'
      }
    </Code>
    <p>
      Nombre: «Mover a la papelera». Descripción: el aviso, visible para todas
      las personas.
    </p>
    <ExampleLinks
      slug="correo"
      barrier="Usar la barra del correo con barreras"
      fixed="Usar la barra del correo corregida"
    />
  </Fragment>,
  <Fragment key="2.2-resumen">
    <SlideTitle kind="resumen">Antes de añadir un tooltip</SlideTitle>
    <ol className="steps">
      <li>¿Es imprescindible? Entonces, texto visible.</li>
      <li>¿Tiene enlaces o botones? Entonces, no es un tooltip.</li>
      <li>¿Es el nombre o una descripción? Usa el atributo correcto.</li>
      <li>Foco y puntero, Escape, recorrible y persistente.</li>
    </ol>
    <p>
      El patrón Tooltip de WAI-ARIA APG sigue en desarrollo y sin consenso:
      comprueba siempre con teclado, lector de pantalla y móvil.
    </p>
  </Fragment>,
]
