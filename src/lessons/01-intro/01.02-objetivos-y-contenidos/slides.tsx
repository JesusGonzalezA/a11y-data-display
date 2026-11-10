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
        <strong>Nombre accesible:</strong> el texto con el que un lector de
        pantalla anuncia cada control.
      </li>
      <li>
        <strong>Teclado:</strong> <kbd>Tab</kbd> para avanzar; <kbd>Enter</kbd>{' '}
        y <kbd>Espacio</kbd> para activar.
      </li>
    </ul>
    <p>
      Si algo te suena nuevo, empieza por el curso «Introducción al desarrollo
      web accesible» de weAAAre.
    </p>
  </Fragment>,
  <Fragment key="mapa-del-curso">
    <SlideTitle kind="leccion">El recorrido del curso</SlideTitle>
    <ol className="course-map" start={2}>
      <li>
        <strong>Iconografía y ayuda contextual:</strong> iconos que se entienden
        y tooltips que se pueden leer.
      </li>
      <li>
        <strong>Listas, cards y orden de lectura:</strong> colecciones que se
        recorren en orden.
      </li>
      <li>
        <strong>Tablas accesibles:</strong> encabezados, doble eje, ordenación y
        filtros.
      </li>
      <li>
        <strong>Patrón grid:</strong> cuándo hace falta y cómo se usa con
        teclado.
      </li>
    </ol>
    <p>
      Queda fuera del curso: editar celdas, selección múltiple, virtualización y
      gráficos.
    </p>
  </Fragment>,
  <Fragment key="materiales">
    <SlideTitle kind="leccion">Dónde encontrar los materiales</SlideTitle>
    <p>Cada módulo tiene tres materiales:</p>
    <ul>
      <li>
        <strong>Diapositivas:</strong> se entienden solas, sin el vídeo.
      </li>
      <li>
        <strong>Ejemplos:</strong> páginas que puedes ver «Con barreras» o
        «Arreglada», con la explicación de cada cambio.
      </li>
      <li>
        <strong>Contenido:</strong> el resumen de cada lección, con fuentes y
        comprobaciones.
      </li>
    </ul>
    <p>
      <a className="lesson-slide__example-link" href={portalUrl}>
        Abrir el índice del curso
      </a>
    </p>
  </Fragment>,
]
