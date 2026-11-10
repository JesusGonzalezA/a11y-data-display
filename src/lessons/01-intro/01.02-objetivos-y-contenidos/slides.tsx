import { Fragment } from 'react'
import { course } from '../../../course'
import { portalUrl } from '../../../routes'
import { SlideTitle } from '../../../slides/parts'

export const slides = [
  <Fragment key="objetivos">
    <SlideTitle kind="leccion">Objetivos y contenidos</SlideTitle>
    <p>Al terminar el curso sabrás:</p>
    <ul>
      {course.objectives.map((objective) => (
        <li key={objective}>{objective}</li>
      ))}
    </ul>
  </Fragment>,
  <Fragment key="conocimientos-previos">
    <SlideTitle kind="leccion">Qué necesitas saber antes</SlideTitle>
    <ul>
      <li>
        <strong>HTML semántico:</strong> encabezados, listas, enlaces y botones.
      </li>
      <li>
        <strong>Nombre accesible:</strong> cómo anuncia un lector de pantalla
        cada control.
      </li>
      <li>
        <strong>Teclado:</strong> <kbd>Tab</kbd> para avanzar; <kbd>Enter</kbd>{' '}
        y <kbd>Espacio</kbd> para activar.
      </li>
    </ul>
    <p>
      ¿Te suena nuevo? Empieza por el curso «Introducción al desarrollo web
      accesible», de weAAAre.
    </p>
  </Fragment>,
  <Fragment key="mapa-del-curso">
    <SlideTitle kind="leccion">El recorrido del curso</SlideTitle>
    <ol className="course-map">
      <li>
        <strong>Introducción:</strong> cómo funciona el curso.
      </li>
      <li>
        <strong>Iconografía y ayuda contextual:</strong> iconos que se entienden
        y tooltips que se leen.
      </li>
      <li>
        <strong>Listas, cards y orden de lectura:</strong> colecciones que se
        recorren en orden.
      </li>
      <li>
        <strong>Tablas accesibles:</strong> encabezados, ordenación y filtros.
      </li>
      <li>
        <strong>Patrón grid:</strong> cuándo hace falta y cómo se usa con
        teclado.
      </li>
    </ol>
    <p>
      {' '}
      Fuera del curso: editar celdas, selección múltiple, virtualización y
      gráficos.
    </p>
    <p>
      <a className="lesson-slide__example-link" href={portalUrl}>
        Índice del curso: diapositivas, ejemplos y contenido
      </a>
    </p>
  </Fragment>,
]
