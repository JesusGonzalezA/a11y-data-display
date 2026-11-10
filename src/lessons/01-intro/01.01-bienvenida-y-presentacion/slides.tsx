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
      Con los datos de una web casi siempre hacemos una de estas cuatro cosas:
    </p>
    <ol className="steps">
      <li>
        <strong>Comprender</strong> un dato: «¿Ha salido mi envío?».
      </li>
      <li>
        <strong>Recorrer</strong> una lista: un catálogo.
      </li>
      <li>
        <strong>Comparar</strong> valores: qué incluye cada tarifa.
      </li>
      <li>
        <strong>Actuar</strong> sobre ellos: ordenar o filtrar.
      </li>
    </ol>
  </Fragment>,
  <Fragment key="como-funciona-cada-leccion">
    <SlideTitle kind="leccion">Cómo funciona cada lección</SlideTitle>
    <p>Todas las lecciones siguen los mismos cuatro pasos:</p>
    <ol className="steps">
      <li>
        <strong>La lección:</strong> qué vas a aprender.
      </li>
      <li>
        <strong>La situación:</strong> una persona quiere hacer algo.
      </li>
      <li>
        <strong>El error común:</strong> qué falla y qué le pasa.
      </li>
      <li>
        <strong>La solución:</strong> cómo se arregla.
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
    <p>Cada error tiene una página de ejemplo con un botón flotante:</p>
    <ol className="steps">
      <li>
        <strong>«Con barreras»:</strong> la página con el error. Pruébala.
      </li>
      <li>
        <strong>«Arreglada»:</strong> la misma página, ya corregida.
      </li>
      <li>
        <strong>«Explicación»:</strong> qué probar, qué falla y cómo se arregla.
      </li>
    </ol>
  </Fragment>,
]
