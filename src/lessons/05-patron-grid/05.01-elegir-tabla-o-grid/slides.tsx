import { Fragment } from 'react'
import {
  Code,
  ExampleLinks,
  PersonaCard,
  SlideTitle,
} from '../../../slides/parts'

export const slides = [
  <Fragment key="5.1-leccion">
    <SlideTitle kind="leccion">
      Cuándo elegir una tabla y cuándo un grid
    </SlideTitle>
    <p>
      Un <strong>grid</strong> es una tabla que se recorre celda a celda con las
      flechas del teclado. Es potente, pero hay que programarlo entero.
    </p>
    <p>En esta lección:</p>
    <ul>
      <li>Qué es el patrón grid.</li>
      <li>Cuándo basta con una tabla.</li>
      <li>Qué pasa si se usa un grid sin necesidad.</li>
    </ul>
  </Fragment>,
  <Fragment key="5.1-comparar">
    <SlideTitle kind="leccion">Tabla o grid</SlideTitle>
    <table className="summary-table">
      <thead>
        <tr>
          <td></td>
          <th scope="col">Tabla</th>
          <th scope="col">Grid</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Sirve para</th>
          <td>Leer y comparar datos</td>
          <td>Actuar sobre muchas celdas</td>
        </tr>
        <tr>
          <th scope="row">Con el teclado</th>
          <td>Tab va de control en control</td>
          <td>Una parada de Tab. Dentro, flechas</td>
        </tr>
        <tr>
          <th scope="row">Lo programa</th>
          <td>El navegador</td>
          <td>Tú: foco, flechas, Inicio y Fin</td>
        </tr>
      </tbody>
    </table>
    <p>
      Ordenar o filtrar no convierte una tabla en un grid. Colocarla con{' '}
      <code>display: grid</code>, tampoco.
    </p>
  </Fragment>,
  <Fragment key="5.1-situacion">
    <SlideTitle kind="situacion">
      Andrés mira el horario del gimnasio
    </SlideTitle>
    <PersonaCard
      id="andres"
      task="Consulta el horario de clases. Después quiere llegar al enlace para reservar."
    />
  </Fragment>,
  <Fragment key="5.1-error-paradas">
    <SlideTitle kind="error">Cada celda es una parada de Tab</SlideTitle>
    <Code tone="error" caption="Así está">
      {
        '<tr>\n  <th scope="row" tabindex="0">Yoga</th>\n  <td tabindex="0">Lunes y miércoles</td>\n  …\n</tr>'
      }
    </Code>
    <p>
      <strong>Qué le pasa a Andrés:</strong> pulsa <kbd>Tab</kbd> dieciséis
      veces para cruzar la tabla. En ninguna celda puede hacer nada.
    </p>
  </Fragment>,
  <Fragment key="5.1-solucion-paradas">
    <SlideTitle kind="solucion">
      Las celdas de texto no reciben el foco
    </SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<tr>\n  <th scope="row">Yoga</th>\n  <td>Lunes y miércoles</td>\n  …\n</tr>'
      }
    </Code>
    <ul>
      <li>Solo reciben el foco los controles: enlaces, botones y campos.</li>
      <li>
        <kbd>Tab</kbd> pasa de largo la tabla y llega al enlace.
      </li>
    </ul>
  </Fragment>,
  <Fragment key="5.1-error-rol">
    <SlideTitle kind="error">Una tabla que dice ser un grid</SlideTitle>
    <Code tone="error" caption="Así está">
      {
        '<table role="grid">\n  <caption>Clases de esta semana</caption>\n  …\n</table>'
      }
    </Code>
    <p>
      <strong>Qué le pasa a Elena:</strong> su lector anuncia una cuadrícula y
      espera que las flechas muevan el foco. Las pulsa y no pasa nada.
    </p>
  </Fragment>,
  <Fragment key="5.1-solucion-rol">
    <SlideTitle kind="solucion">Si solo se lee, es una tabla</SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {'<table>\n  <caption>Clases de esta semana</caption>\n  …\n</table>'}
    </Code>
    <ul>
      <li>Sin el rol, el lector la recorre con sus atajos de tabla.</li>
      <li>Usa un grid solo si la persona tiene que actuar en muchas celdas.</li>
    </ul>
    <ExampleLinks slug="horario" task="consultar el horario" />
  </Fragment>,
]
