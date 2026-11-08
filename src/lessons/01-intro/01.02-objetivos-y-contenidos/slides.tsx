import { Fragment } from 'react'
import { course } from '../../../course'
import { portalUrl } from '../../../routes'
import { SlideTitle } from '../../../slides/parts'

export const slides = [
  <Fragment key="objetivos">
    <SlideTitle kind="leccion">Objetivos y contenidos</SlideTitle>
    <p>Al terminar sabrás:</p>
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
        <strong>Nombre accesible:</strong> qué texto anuncia un lector de
        pantalla para cada control.
      </li>
      <li>
        <strong>Teclado:</strong> <kbd>Tab</kbd> para avanzar, <kbd>Enter</kbd>{' '}
        y <kbd>Espacio</kbd> para activar.
      </li>
    </ul>
    <p>
      Si alguno te suena nuevo, el curso «Introducción al desarrollo web
      accesible» de weAAAre es una buena preparación.
    </p>
  </Fragment>,
  <Fragment key="mapa-del-curso">
    <SlideTitle kind="leccion">El recorrido del curso</SlideTitle>
    <ol className="course-map" start={2}>
      <li>
        <strong>Iconografía y ayuda contextual:</strong> iconos con significado
        y tooltips que se pueden leer.
      </li>
      <li>
        <strong>Listas, cards y orden de lectura:</strong> colecciones que se
        recorren en un orden coherente.
      </li>
      <li>
        <strong>Tablas accesibles:</strong> encabezados, doble eje, ordenación y
        filtros.
      </li>
      <li>
        <strong>Patrón grid:</strong> cuándo usarlo, cómo se recorre con teclado
        y cómo se actúa en sus celdas.
      </li>
    </ol>
    <p>
      Fuera de este curso: edición de celdas, selección múltiple, virtualización
      y gráficos.
    </p>
  </Fragment>,
  <Fragment key="materiales">
    <SlideTitle kind="leccion">Dónde encontrar los materiales</SlideTitle>
    <p>Para cada módulo tienes tres materiales:</p>
    <ul>
      <li>
        <strong>Diapositivas:</strong> se entienden por sí solas, sin el vídeo.
      </li>
      <li>
        <strong>Ejemplos:</strong> páginas con el error; el botón «Aplicar
        arreglo» lo corrige y «Ver cambios» explica dónde y por qué.
      </li>
      <li>
        <strong>Contenido:</strong> resumen de cada lección, fuentes y
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
