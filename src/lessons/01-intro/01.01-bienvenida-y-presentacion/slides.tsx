import { Fragment } from 'react'
import { course } from '../../../course'
import { personaList } from '../../../personas'
import { SlideTitle } from '../../../slides/parts'

export const slides = [
  <Fragment key="bienvenida">
    <SlideTitle kind="leccion">Bienvenida y presentación</SlideTitle>
    <p>{course.description}</p>
    <dl className="facts">
      <dt>Docente</dt>
      <dd>{course.author} · weAAAre</dd>
      <dt>Para quién</dt>
      <dd>{course.audience}</dd>
    </dl>
  </Fragment>,
  <Fragment key="cuatro-tareas">
    <SlideTitle kind="leccion">Cuatro tareas con datos</SlideTitle>
    <p>
      Cuando una persona consulta datos en una web, casi siempre intenta una de
      estas cuatro cosas:
    </p>
    <ol className="steps">
      <li>
        <strong>Comprender</strong> un dato o un estado: «¿mi envío ya ha
        salido?».
      </li>
      <li>
        <strong>Recorrer</strong> una colección: un catálogo, una lista de
        resultados.
      </li>
      <li>
        <strong>Comparar</strong> valores: qué tarifa incluye qué.
      </li>
      <li>
        <strong>Operar</strong> sobre ellos: ordenar, filtrar o actuar sobre una
        fila.
      </li>
    </ol>
  </Fragment>,
  <Fragment key="significado-no-visual">
    <SlideTitle kind="leccion">
      El significado no puede quedarse en lo visual
    </SlideTitle>
    <p>
      Vemos columnas, colores, iconos y posiciones. Un lector de pantalla no ve
      nada de eso: recibe <strong>roles, nombres y relaciones</strong> que el
      navegador obtiene del HTML.
    </p>
    <ul>
      <li>Un icono sin texto alternativo no dice nada.</li>
      <li>Una «tabla» hecha con cajas no tiene filas ni columnas.</li>
      <li>Un orden visual distinto del orden del código desorienta.</li>
    </ul>
    <p>
      Por eso, en cada lección elegiremos la estructura que conserva el
      significado.
    </p>
  </Fragment>,
  <Fragment key="como-funciona-cada-leccion">
    <SlideTitle kind="leccion">Cómo funciona cada lección</SlideTitle>
    <ol className="steps">
      <li>
        <strong>La lección:</strong> qué vamos a aprender.
      </li>
      <li>
        <strong>La situación:</strong> una persona, cómo usa la web y qué quiere
        hacer.
      </li>
      <li>
        <strong>El error común:</strong> qué falla y qué le pasa a esa persona.
      </li>
      <li>
        <strong>La solución:</strong> el cambio en el código y por qué funciona.
      </li>
    </ol>
    <p>
      Nos acompañan{' '}
      {personaList
        .map(({ name }) => name)
        .join(', ')
        .replace(/, ([^,]*)$/, ' y $1')}
      .
    </p>
    <p>
      Cada error vive en una página de ejemplo real. Un botón flotante aplica el
      arreglo y muestra dónde está cada cambio.
    </p>
  </Fragment>,
]
