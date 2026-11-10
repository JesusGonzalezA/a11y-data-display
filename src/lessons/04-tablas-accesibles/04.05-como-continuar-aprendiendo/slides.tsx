import { Fragment } from 'react'
import { portalUrl } from '../../../routes'
import { SlideTitle } from '../../../slides/parts'

export const slides = [
  <Fragment key="4.5-repaso">
    <SlideTitle kind="leccion">Cómo continuar aprendiendo</SlideTitle>
    <p>Primero, un repaso: qué necesita cada persona y cómo se lo damos.</p>
    <table className="summary-table">
      <thead>
        <tr>
          <th scope="col">Persona</th>
          <th scope="col">Necesita</th>
          <th scope="col">Solución</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Andrés</th>
          <td>Hacerlo todo con el teclado, en el orden que ve</td>
          <td>
            Botones de verdad, tooltips que se abren con el foco, HTML en orden
          </td>
        </tr>
        <tr>
          <th scope="row">Elena</th>
          <td>Que su lector le diga qué es cada dato</td>
          <td>
            Texto junto a los iconos, listas, encabezados de tabla,{' '}
            <code>aria-sort</code>
          </td>
        </tr>
        <tr>
          <th scope="row">Lucía</th>
          <td>Saber qué está filtrando y qué ha pasado</td>
          <td>Etiquetas visibles, recuento de resultados, una salida</td>
        </tr>
      </tbody>
    </table>
  </Fragment>,
  <Fragment key="4.5-estructuras">
    <SlideTitle kind="resumen">Qué estructura elegir</SlideTitle>
    <table className="summary-table">
      <thead>
        <tr>
          <th scope="col">Si tienes…</th>
          <th scope="col">Usa…</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Un dato o un estado</th>
          <td>Texto. El icono acompaña.</td>
        </tr>
        <tr>
          <th scope="row">Una ayuda breve</th>
          <td>Un tooltip. Si es imprescindible, texto visible.</td>
        </tr>
        <tr>
          <th scope="row">Varios elementos</th>
          <td>
            Una lista: <code>ul</code>, <code>ol</code> o <code>dl</code>.
          </td>
        </tr>
        <tr>
          <th scope="row">Elementos con título y acciones</th>
          <td>Cards dentro de una lista.</td>
        </tr>
        <tr>
          <th scope="row">Elementos con los mismos datos</th>
          <td>Una tabla, con título y encabezados.</td>
        </tr>
      </tbody>
    </table>
    <p>Elige por lo que la persona quiere hacer, no por el aspecto.</p>
  </Fragment>,
  <Fragment key="4.5-cursos">
    <SlideTitle kind="resumen">Cursos para profundizar</SlideTitle>
    <ul>
      <li>
        Estructura y significado del contenido:{' '}
        <a href="https://weaaare.com/cursos/curso-accesibilidad-digital-html-semantico-para-disenadores">
          HTML Semántico
        </a>
        .
      </li>
      <li>
        Nombres, roles y estados:{' '}
        <a href="https://weaaare.com/cursos/curso-accesibilidad-digital-introduccion-a-aria">
          Introducción a ARIA
        </a>
        .
      </li>
      <li>
        Comprobar que los componentes funcionan:{' '}
        <a href="https://weaaare.com/cursos/curso-testing-de-accesibilidad-digital-para-desarrolladores">
          Testing de accesibilidad para desarrolladores
        </a>
        .
      </li>
      <li>
        Menús y navegación:{' '}
        <a href="https://weaaare.com/cursos/aria-avanzado-navegacion-accesible">
          ARIA Avanzado: Navegación accesible
        </a>
        .
      </li>
      <li>
        Filtros y formularios:{' '}
        <a href="https://weaaare.com/cursos/aria-avanzado-formularios-accesibles">
          ARIA Avanzado: Formularios accesibles
        </a>
        .
      </li>
      <li>
        Cómo usan la web las personas:{' '}
        <a href="https://weaaare.com/cursos/curso-discapacidad-y-tecnologias-asistivas">
          Discapacidad y tecnologías asistivas
        </a>
        .
      </li>
    </ul>
  </Fragment>,
  <Fragment key="4.5-materiales">
    <SlideTitle kind="resumen">Dónde seguir</SlideTitle>
    <ul>
      <li>
        <strong>Las fuentes de cada lección:</strong> están en «Contenido», en
        el índice del curso.
      </li>
      <li>
        <strong>Los ejemplos:</strong> repítelos con teclado, con un lector de
        pantalla y con zoom.
      </li>
      <li>
        <strong>Más cursos:</strong> el{' '}
        <a href="https://weaaare.com/cursos">catálogo de weAAAre</a>.
      </li>
    </ul>
    <p>
      Un método para tu trabajo: elige una tarea → piensa en una persona → elige
      la estructura → pruébala.
    </p>
    <p>
      <a className="lesson-slide__example-link" href={portalUrl}>
        Volver al índice del curso: diapositivas, ejemplos y contenido
      </a>
    </p>
  </Fragment>,
]
