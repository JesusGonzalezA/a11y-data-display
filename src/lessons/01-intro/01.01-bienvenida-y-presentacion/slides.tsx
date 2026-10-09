import { Fragment } from 'react'
import { course } from '../../../course'

export const slides = [
  <Fragment key="bienvenida">
    <h2 className="lesson-slide__title">Bienvenida y presentación</h2>
    <p>{course.description}</p>
    <p>{course.audience}</p>
    <p>Un curso de weaaare. Partimos de la tarea de la persona.</p>
  </Fragment>,
  <Fragment key="tareas">
    <h2 className="lesson-slide__title">Cuatro tareas al consultar datos</h2>
    <ul>
      <li>Comprender: reconocer el significado de un dato o estado.</li>
      <li>Recorrer: localizar un elemento y su información.</li>
      <li>Comparar: mantener las referencias para decidir.</li>
      <li>Operar: ordenar, filtrar o actuar sin perder el lugar.</li>
    </ul>
  </Fragment>,
  <Fragment key="acceso">
    <h2 className="lesson-slide__title">
      Mantener el significado al cambiar de acceso
    </h2>
    <p>
      Ampliar, escuchar o usar el teclado son formas de acceder a la misma
      información.
    </p>
    <ul>
      <li>Relaciones que permitan comprender los datos.</li>
      <li>Una secuencia de lectura coherente.</li>
      <li>Acciones identificables y un recorrido que permita completarlas.</li>
    </ul>
  </Fragment>,
]
