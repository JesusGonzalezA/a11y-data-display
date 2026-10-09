import { Fragment } from 'react'
import { course } from '../../../course'

export const slides = [
  <Fragment key="objetivos">
    <h2 className="lesson-slide__title">Objetivos y contenidos</h2>
    <ul>
      {course.objectives.map((objective) => (
        <li key={objective}>{objective}</li>
      ))}
    </ul>
    <p>
      Las pruebas automáticas ayudan; completar la tarea requiere también
      revisión manual.
    </p>
  </Fragment>,
  <Fragment key="preparacion">
    <h2 className="lesson-slide__title">Conocimientos para seguir el curso</h2>
    <ul>
      <li>
        Base de HTML semántico, nombre accesible y navegación por teclado.
      </li>
      <li>Preparación sugerida: Introducción al desarrollo web accesible.</li>
      <li>React y TypeScript ayudan a modificar los ejemplos.</li>
    </ul>
    <p>
      Las decisiones sobre información e interacción son transferibles a otras
      herramientas.
    </p>
  </Fragment>,
  <Fragment key="recorrido">
    <h2 className="lesson-slide__title">Recorrido de 120 minutos</h2>
    <ol>
      <li>Introducción · 5 min</li>
      <li>Iconografía y ayuda contextual · 25 min</li>
      <li>Listas, cards y orden de lectura · 20 min</li>
      <li>Tablas accesibles · 45 min</li>
      <li>Patrón grid · 25 min</li>
    </ol>
    <p>13 lecciones con explicación y demos. Ejercicios adicionales.</p>
    <p>
      Fuera de alcance: edición avanzada, selección múltiple y virtualización.
    </p>
  </Fragment>,
  <Fragment key="materiales">
    <h2 className="lesson-slide__title">
      Consultar y practicar con los materiales
    </h2>
    <ul>
      <li>Slides: conceptos que puedes leer de forma independiente.</li>
      <li>
        Storybook: módulo → lección → Componentes o Ejemplos; cada demo se
        enlazará desde su slide.
      </li>
      <li>
        Repositorio: README, narración en presenter y presentación en slides por
        lección.
      </li>
    </ul>
    <p>Disponible: M1. Pendientes: M2–M5; todavía no hay ejemplos.</p>
    <a
      className="lesson-slide__example-link"
      href="https://github.com/JesusGonzalezA/a11y-data-display#readme"
    >
      Consultar el mapa y los materiales del curso
    </a>
  </Fragment>,
]
