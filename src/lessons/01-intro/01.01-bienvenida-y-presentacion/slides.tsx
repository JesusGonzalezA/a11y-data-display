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
      Cuando consultamos datos en una web, casi siempre queremos una de estas
      cuatro cosas:
    </p>
    <ol className="steps">
      <li>
        <strong>Comprender</strong> un dato: «¿ha salido ya mi envío?».
      </li>
      <li>
        <strong>Recorrer</strong> una colección: un catálogo, unos resultados.
      </li>
      <li>
        <strong>Comparar</strong> valores: qué incluye cada tarifa.
      </li>
      <li>
        <strong>Operar</strong> con ellos: ordenar, filtrar o actuar sobre una
        fila.
      </li>
    </ol>
  </Fragment>,
  <Fragment key="significado-no-visual">
    <SlideTitle kind="leccion">
      El significado no puede quedarse en lo visual
    </SlideTitle>
    <p>
      Al mirar una página vemos columnas, colores, iconos y posiciones. Un
      lector de pantalla no ve nada de eso:{' '}
      <strong>solo recibe lo que está escrito en el HTML</strong>.
    </p>
    <ul>
      <li>Un icono sin texto no dice nada.</li>
      <li>Una «tabla» hecha con cajas no tiene filas ni columnas.</li>
      <li>Si el orden que se ve no es el del código, se lee desordenado.</li>
    </ul>
    <p>En cada lección elegiremos el HTML que conserva el significado.</p>
  </Fragment>,
  <Fragment key="como-funciona-cada-leccion">
    <SlideTitle kind="leccion">Cómo funciona cada lección</SlideTitle>
    <p>Todas las lecciones siguen los mismos cuatro pasos:</p>
    <ol className="steps">
      <li>
        <strong>La lección:</strong> qué vas a aprender.
      </li>
      <li>
        <strong>La situación:</strong> una persona, cómo usa la web y qué quiere
        hacer.
      </li>
      <li>
        <strong>El error común:</strong> qué falla y qué le pasa a esa persona.
      </li>
      <li>
        <strong>La solución:</strong> qué cambia en el código y por qué
        funciona.
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
  </Fragment>,
  <Fragment key="como-usar-los-ejemplos">
    <SlideTitle kind="leccion">Cómo usar las páginas de ejemplo</SlideTitle>
    <p>
      Cada error está en una página de ejemplo. Abajo a la derecha tiene un
      botón flotante con tres opciones:
    </p>
    <ol className="steps">
      <li>
        <strong>«Con barreras»:</strong> así se abre la página. Pruébala como lo
        haría la persona de la lección.
      </li>
      <li>
        <strong>«Arreglada»:</strong> la misma página, ya sin barreras. Puedes
        ir y volver cuantas veces quieras.
      </li>
      <li>
        <strong>«Explicación»:</strong> qué probar y la lista de barreras. Al
        abrir una, se marca en la página con su número y ves el código antes y
        después.
      </li>
    </ol>
  </Fragment>,
]
