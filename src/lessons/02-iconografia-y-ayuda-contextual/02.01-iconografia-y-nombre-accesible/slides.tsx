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
      Un icono se ve, pero no se oye. Si dice algo importante, ese mensaje tiene
      que llegar también de otra forma.
    </p>
    <p>En esta lección aprenderás a:</p>
    <ul>
      <li>Distinguir los tres papeles de un icono.</li>
      <li>No usar el color como única señal.</li>
      <li>Dar nombre a un botón o enlace que solo muestra un icono.</li>
    </ul>
  </Fragment>,
  <Fragment key="2.1-tipos">
    <SlideTitle kind="leccion">Tres papeles de un icono</SlideTitle>
    <p>
      Pregúntate: <strong>¿qué pierde la persona si quito el icono?</strong>
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
          <td>Se pierde un dato: un estado, un aviso</td>
          <td>Escribir el dato con texto</td>
        </tr>
        <tr>
          <th scope="row">Dentro de un botón</th>
          <td>No se sabe qué hace el botón</td>
          <td>Dar nombre al botón</td>
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
      <strong>Qué le pasa a Elena:</strong> su lector no anuncia nada. No sabe
      qué envío tiene un problema. Tampoco lo sabe quien no distingue el rojo
      del verde.
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
      <li>El texto visible sirve a todo el mundo.</li>
      <li>
        El icono pasa a ser decorativo: se oculta para no decir lo mismo dos
        veces.
      </li>
      <li>Cada estado tiene una forma distinta, no solo un color.</li>
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
      <strong>Qué le pasa a Elena:</strong> al saltar de título en título oye
      «Icono de una caja de cartón, Envío a Lugo». Y así en cada envío: ruido
      antes del dato que busca.
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
        <code>alt=""</code> oculta una imagen; <code>aria-hidden="true"</code>{' '}
        oculta un SVG.
      </li>
      <li>
        Quitar el atributo <code>alt</code> no sirve: sin él, el lector puede
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
      <strong>Qué le pasa a Elena:</strong> oye «botón» y «enlace», sin saber
      qué hacen. Además se repiten en cada envío, y no sabe cuál es de cuál.
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
        <code>aria-label</code> da al botón un nombre que no se ve.
      </li>
      <li>
        Di la acción («Copiar») y, si el botón se repite, sobre qué actúa
        («RY4821»).
      </li>
    </ul>
    <ExampleLinks
      slug="envios"
      barrier="Revisar los envíos con barreras"
      fixed="Revisar los envíos corregidos"
    />
  </Fragment>,
]
