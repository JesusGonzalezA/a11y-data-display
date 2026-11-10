import { Fragment } from 'react'
import {
  Code,
  ExampleLinks,
  PersonaCard,
  SlideTitle,
} from '../../../slides/parts'

export const slides = [
  <Fragment key="2.1-leccion">
    <SlideTitle kind="leccion">
      Iconografía: significado y nombre accesible
    </SlideTitle>
    <p>
      Un icono se ve, pero no se oye. Si dice algo importante, hay que decirlo
      también con texto.
    </p>
    <p>En esta lección:</p>
    <ul>
      <li>Los tres papeles de un icono.</li>
      <li>El color nunca va solo.</li>
      <li>Botones con icono que tienen nombre.</li>
    </ul>
  </Fragment>,
  <Fragment key="2.1-tipos">
    <SlideTitle kind="leccion">Tres papeles de un icono</SlideTitle>
    <p>
      Pregúntate: <strong>¿qué se pierde si quito el icono?</strong>
    </p>
    <table className="summary-table">
      <thead>
        <tr>
          <th scope="col">Papel</th>
          <th scope="col">Si lo quito, se pierde…</th>
          <th scope="col">Qué hacer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Decorativo</th>
          <td>Nada</td>
          <td>Ocultarlo al lector</td>
        </tr>
        <tr>
          <th scope="row">Informativo</th>
          <td>Un dato: un estado, un aviso</td>
          <td>Escribir el dato con texto</td>
        </tr>
        <tr>
          <th scope="row">Dentro de un botón</th>
          <td>Saber qué hace el botón</td>
          <td>Dar nombre al botón</td>
        </tr>
      </tbody>
    </table>
  </Fragment>,
  <Fragment key="2.1-situacion">
    <SlideTitle kind="situacion">Elena revisa sus envíos</SlideTitle>
    <PersonaCard
      id="elena"
      task="Busca el envío que tiene un problema. Quiere copiar su número de seguimiento y descargar la etiqueta."
    />
  </Fragment>,
  <Fragment key="2.1-error-estado">
    <SlideTitle kind="error">El estado es solo un círculo de color</SlideTitle>
    <Code tone="error" caption="Así está">
      {
        '<p class="estado estado--incidencia">\n  <svg viewBox="0 0 24 24">…</svg>\n</p>'
      }
    </Code>
    <p>
      <strong>Qué le pasa a Elena:</strong> su lector no dice nada. No sabe qué
      envío falla. Quien confunde el rojo y el verde, tampoco.
    </p>
  </Fragment>,
  <Fragment key="2.1-solucion-estado">
    <SlideTitle kind="solucion">Escribir el estado con palabras</SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<p class="estado estado--incidencia">\n  <svg aria-hidden="true">…</svg>\n  <span>Incidencia: dirección incompleta</span>\n</p>'
      }
    </Code>
    <ul>
      <li>El texto lo entiende todo el mundo.</li>
      <li>El icono se oculta al lector para no repetir.</li>
      <li>Cada estado tiene su forma, no solo su color.</li>
    </ul>
  </Fragment>,
  <Fragment key="2.1-error-decorativo">
    <SlideTitle kind="error">
      La ilustración se anuncia en cada envío
    </SlideTitle>
    <Code tone="error" caption="Así está">
      {
        '<h2>\n  <img src="caja.svg" alt="Icono de una caja de cartón">\n  Envío a Lugo\n</h2>'
      }
    </Code>
    <p>
      <strong>Qué le pasa a Elena:</strong> en cada envío oye «Icono de una caja
      de cartón» antes del título. Es ruido.
    </p>
  </Fragment>,
  <Fragment key="2.1-solucion-decorativo">
    <SlideTitle kind="solucion">Lo decorativo se oculta</SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<h2>\n  <img src="caja.svg" alt="">\n  Envío a Lugo\n</h2>\n\n<svg aria-hidden="true" focusable="false">…</svg>'
      }
    </Code>
    <ul>
      <li>
        <code>alt=""</code> oculta una imagen al lector.
      </li>
      <li>
        <code>aria-hidden="true"</code> oculta un SVG.
      </li>
      <li>
        No quites <code>alt</code>: el lector leería el nombre del archivo.
      </li>
    </ul>
  </Fragment>,
  <Fragment key="2.1-error-nombre">
    <SlideTitle kind="error">Botones que solo dicen «botón»</SlideTitle>
    <Code tone="error" caption="Así está">
      {'<button type="button">\n  <svg aria-hidden="true">…</svg>\n</button>'}
    </Code>
    <p>
      <strong>Qué le pasa a Elena:</strong> oye «botón» y «enlace», nada más. No
      sabe qué hacen ni de qué envío son.
    </p>
  </Fragment>,
  <Fragment key="2.1-solucion-nombre">
    <SlideTitle kind="solucion">
      Un nombre que dice la acción y el objeto
    </SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<button type="button"\n  aria-label="Copiar número de seguimiento RY4821">\n  <svg aria-hidden="true">…</svg>\n</button>'
      }
    </Code>
    <ul>
      <li>
        <code>aria-label</code> es el nombre del botón. No se ve, pero se oye.
      </li>
      <li>Dice la acción («Copiar») y sobre qué («RY4821»).</li>
    </ul>
    <ExampleLinks slug="envios" task="revisar los envíos" />
  </Fragment>,
]
