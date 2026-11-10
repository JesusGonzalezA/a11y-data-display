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
      Un <strong>tooltip</strong> es un texto breve que aparece al enfocar un
      elemento o al pasar el puntero por él.
    </p>
    <p>En esta lección aprenderás:</p>
    <ul>
      <li>Cuándo basta un tooltip y cuándo hace falta texto visible.</li>
      <li>
        Qué diferencia hay entre el nombre de un control y su descripción.
      </li>
      <li>
        Cómo hacer que aparezca con teclado, se cierre con Escape y dé tiempo a
        leerlo.
      </li>
    </ul>
  </Fragment>,
  <Fragment key="2.2-cuando">
    <SlideTitle kind="leccion">¿Tooltip o texto visible?</SlideTitle>
    <p>
      Un tooltip no siempre se puede abrir: en una pantalla táctil no existe
      «pasar por encima».
    </p>
    <ul>
      <li>
        <strong>Tooltip:</strong> una ayuda breve y prescindible, como recordar
        qué hace un icono.
      </li>
      <li>
        <strong>Texto visible:</strong> todo lo que la persona necesita para
        decidir o para no equivocarse.
      </li>
      <li>
        <strong>Ninguno de los dos:</strong> si la ayuda tiene enlaces o
        botones, es un diálogo.
      </li>
    </ul>
  </Fragment>,
  <Fragment key="2.2-nombre-descripcion">
    <SlideTitle kind="leccion">Nombre y descripción no son lo mismo</SlideTitle>
    <dl className="facts">
      <dt>Nombre</dt>
      <dd>
        Qué es o qué hace el control: «Archivar». Se anuncia primero. Se da con{' '}
        <code>aria-label</code> o <code>aria-labelledby</code>.
      </dd>
      <dt>Descripción</dt>
      <dd>
        Un detalle añadido: «Se borra a los 30 días». Se anuncia después. Se da
        con <code>aria-describedby</code>.
      </dd>
    </dl>
    <p>Un tooltip es una cosa o la otra. Decide cuál y usa su atributo.</p>
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
      y solo ve tres iconos. La ayuda existe, pero a él nunca le aparece. Con el
      atributo <code>title</code> pasa lo mismo.
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
      <li>Aparece al enfocar el botón y al pasar el puntero.</li>
      <li>
        Aquí el tooltip <strong>es el nombre</strong> del botón: se ve y se
        anuncia el mismo texto.
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
      <strong>Qué le pasa a Andrés:</strong> con el temblor, el puntero se le
      sale del botón y el tooltip desaparece. Y cuando el tooltip tapa algo, no
      puede quitarlo: <kbd>Escape</kbd> no hace nada.
    </p>
  </Fragment>,
  <Fragment key="2.2-solucion-cerrar">
    <SlideTitle kind="solucion">
      Se puede cerrar, alcanzar y leer con calma
    </SlideTitle>
    <p>Todo lo que aparece al enfocar o al pasar el puntero debe:</p>
    <ul>
      <li>
        <strong>Poder cerrarse</strong> con <kbd>Escape</kbd>, sin mover el foco
        ni el puntero.
      </li>
      <li>
        <strong>Poder alcanzarse:</strong> el puntero pasa del botón al tooltip
        sin que se cierre.
      </li>
      <li>
        <strong>Quedarse</strong> hasta que la persona se va o lo cierra.
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
      <strong>Qué le pasa a Andrés:</strong> el «?» no recibe el foco. No llega
      a saber que la papelera se vacía a los 30 días. En un móvil, tampoco se
      puede abrir.
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
      El aviso es un texto que ve todo el mundo. <code>aria-describedby</code>{' '}
      lo une al botón: el lector anuncia «Mover a la papelera» y después el
      aviso.
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
      <li>¿Es imprescindible? Mejor texto visible.</li>
      <li>¿Tiene enlaces o botones? No es un tooltip.</li>
      <li>¿Es el nombre o una descripción? Usa su atributo.</li>
      <li>
        ¿Aparece con foco y con puntero, se cierra con Escape y da tiempo a
        leerlo?
      </li>
    </ol>
    <p>
      Compruébalo siempre con teclado, con un lector de pantalla y en un móvil.
    </p>
  </Fragment>,
]
