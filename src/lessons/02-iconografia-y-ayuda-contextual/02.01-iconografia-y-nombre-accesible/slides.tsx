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
      Un icono se ve, pero no se oye. Si transmite información, esa información
      tiene que llegar también por otra vía.
    </p>
    <p>En esta lección:</p>
    <ul>
      <li>
        Distinguir iconos decorativos, informativos y dentro de controles.
      </li>
      <li>Evitar que el color sea la única señal de un estado.</li>
      <li>Dar nombre a un botón o enlace que solo muestra un icono.</li>
    </ul>
  </Fragment>,
  <Fragment key="2.1-tipos">
    <SlideTitle kind="leccion">Tres papeles de un icono</SlideTitle>
    <p>
      Pregunta clave: <strong>¿qué pierde la persona si quito el icono?</strong>
    </p>
    <table className="summary-table">
      <thead>
        <tr>
          <th scope="col">Papel</th>
          <th scope="col">Si lo quito…</th>
          <th scope="col">Qué hacer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Decorativo</th>
          <td>No se pierde nada: el texto ya lo dice</td>
          <td>
            Ocultarlo: <code>alt=""</code> o <code>aria-hidden="true"</code>
          </td>
        </tr>
        <tr>
          <th scope="row">Informativo</th>
          <td>Se pierde un dato (un estado, un aviso)</td>
          <td>Texto visible junto al icono, o texto alternativo</td>
        </tr>
        <tr>
          <th scope="row">En un control</th>
          <td>No se sabe qué hace el botón</td>
          <td>El control necesita un nombre accesible</td>
        </tr>
      </tbody>
    </table>
  </Fragment>,
  <Fragment key="2.1-situacion">
    <SlideTitle kind="situacion">Elena revisa sus envíos</SlideTitle>
    <PersonaCard
      id="elena"
      task="Quiere saber qué paquete tiene un problema, copiar su número de seguimiento y descargar la etiqueta."
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
      <strong>Qué le pasa a Elena:</strong> el lector no anuncia nada; no sabe
      que un envío tiene una incidencia. Quien no distingue el rojo del verde
      tampoco lo sabe.
    </p>
  </Fragment>,
  <Fragment key="2.1-solucion-estado">
    <SlideTitle kind="solucion">
      Escribir el estado; el icono acompaña
    </SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<p class="estado estado--incidencia">\n  <svg aria-hidden="true">…</svg>\n  <span>Incidencia: dirección incompleta</span>\n</p>'
      }
    </Code>
    <ul>
      <li>
        El texto visible sirve a todo el mundo: lector, daltonismo, prisa.
      </li>
      <li>
        El icono pasa a ser decorativo: se oculta para no anunciar lo mismo dos
        veces.
      </li>
      <li>Una forma distinta por estado refuerza sin depender del color.</li>
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
      <strong>Qué le pasa a Elena:</strong> al saltar entre encabezados oye
      «Icono de una caja de cartón, Envío a Lugo» tres veces. El dato importante
      llega tarde y envuelto en ruido.
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
        <code>alt=""</code> en una imagen y <code>aria-hidden="true"</code> en
        un SVG la sacan de lo que se anuncia.
      </li>
      <li>
        No es lo mismo que no poner <code>alt</code>: sin él, el lector puede
        leer el nombre del archivo.
      </li>
    </ul>
  </Fragment>,
  <Fragment key="2.1-error-nombre">
    <SlideTitle kind="error">Botones que solo dicen «botón»</SlideTitle>
    <Code tone="error" caption="Así está">
      {'<button type="button">\n  <svg aria-hidden="true">…</svg>\n</button>'}
    </Code>
    <p>
      <strong>Qué le pasa a Elena:</strong> el lector anuncia «botón» y
      «enlace», sin decir qué hacen. Hay tres envíos con los mismos controles y
      no sabe cuál corresponde a cada uno.
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
        <code>aria-label</code> o un texto oculto visualmente dan el nombre.
      </li>
      <li>
        Nombra la acción («Copiar») y, si se repite, a qué afecta («RY4821»).
      </li>
    </ul>
    <ExampleLinks
      slug="envios"
      barrier="Revisar los envíos con barreras"
      fixed="Revisar los envíos corregidos"
    />
  </Fragment>,
]
