import { Fragment } from 'react'
import {
  Code,
  ExampleLinks,
  PersonaCard,
  SlideTitle,
} from '../../../slides/parts'

export const slides = [
  <Fragment key="3.1-leccion">
    <SlideTitle kind="leccion">
      Listas: expresar relaciones entre elementos
    </SlideTitle>
    <p>
      Una <strong>lista</strong> dice dos cosas: que varios elementos van juntos
      y cuántos son. El lector de pantalla solo lo sabe si la lista está en el
      HTML.
    </p>
    <p>En esta lección:</p>
    <ul>
      <li>Los tres tipos de lista.</li>
      <li>Qué anuncia un lector de pantalla.</li>
      <li>Cuándo importa el orden.</li>
    </ul>
  </Fragment>,
  <Fragment key="3.1-tres-listas">
    <SlideTitle kind="leccion">Tres listas, tres relaciones</SlideTitle>
    <table className="summary-table">
      <thead>
        <tr>
          <th scope="col">Lista</th>
          <th scope="col">Para qué</th>
          <th scope="col">Ejemplo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            <code>&lt;ul&gt;</code>
          </th>
          <td>Un conjunto. El orden no importa.</td>
          <td>Servicios de un alojamiento</td>
        </tr>
        <tr>
          <th scope="row">
            <code>&lt;ol&gt;</code>
          </th>
          <td>Una secuencia. El orden importa.</td>
          <td>Pasos para llegar</td>
        </tr>
        <tr>
          <th scope="row">
            <code>&lt;dl&gt;</code>
          </th>
          <td>Pares de nombre y valor.</td>
          <td>Datos de un pedido</td>
        </tr>
      </tbody>
    </table>
    <p>
      <strong>¿Cambia el significado si cambio el orden?</strong> Entonces es{' '}
      <code>&lt;ol&gt;</code>.
    </p>
  </Fragment>,
  <Fragment key="3.1-situacion">
    <SlideTitle kind="situacion">Elena prepara una escapada</SlideTitle>
    <PersonaCard
      id="elena"
      task="Mira la ficha de una casa rural. Quiere saber qué ofrece, cómo se llega y a qué hora puede entrar."
    />
  </Fragment>,
  <Fragment key="3.1-error-ul">
    <SlideTitle kind="error">Los servicios son párrafos sueltos</SlideTitle>
    <Code tone="error" caption="Así está">
      {
        '<div class="servicios">\n  <p>• Wifi en toda la casa</p>\n  <p>• Chimenea de leña</p>\n  …\n</div>'
      }
    </Code>
    <p>
      <strong>Qué le pasa a Elena:</strong> oye frases sueltas. No sabe que van
      juntas ni cuántas quedan.
    </p>
  </Fragment>,
  <Fragment key="3.1-solucion-ul">
    <SlideTitle kind="solucion">
      Un conjunto es una lista no ordenada
    </SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<ul class="servicios">\n  <li>Wifi en toda la casa</li>\n  <li>Chimenea de leña</li>\n  …\n</ul>'
      }
    </Code>
    <ul>
      <li>El lector anuncia «lista, 5 elementos».</li>
      <li>Puede tener cualquier aspecto: el CSS no cambia lo que es.</li>
    </ul>
  </Fragment>,
  <Fragment key="3.1-error-ol">
    <SlideTitle kind="error">Los pasos no forman una secuencia</SlideTitle>
    <Code tone="error" caption="Así está">
      {
        '<div class="pasos">\n  <div class="paso">Toma la salida 334…</div>\n  …\n</div>\n\n.paso::before { content: counter(paso); }'
      }
    </Code>
    <p>
      <strong>Qué le pasa a Elena:</strong> los números los pinta el CSS y su
      lector no los lee. No sabe en qué paso está ni cuántos faltan.
    </p>
  </Fragment>,
  <Fragment key="3.1-solucion-ol">
    <SlideTitle kind="solucion">Una secuencia es una lista ordenada</SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<ol class="pasos">\n  <li>Toma la salida 334…</li>\n  <li>En la rotonda…</li>\n  …\n</ol>'
      }
    </Code>
    <ul>
      <li>El lector dice la posición: «2 de 4».</li>
      <li>El número ya no depende del CSS.</li>
    </ul>
  </Fragment>,
  <Fragment key="3.1-error-dl">
    <SlideTitle kind="error">
      Los nombres y sus valores se leen por separado
    </SlideTitle>
    <Code tone="error" caption="Así está">
      {
        '<div class="datos">\n  <div><p>Entrada</p><p>Salida</p>…</div>\n  <div><p>A partir de las 16:00</p>…</div>\n</div>'
      }
    </Code>
    <p>
      <strong>Qué le pasa a Elena:</strong> oye los cuatro nombres seguidos y
      después los cuatro valores. Tiene que adivinar cuál va con cuál.
    </p>
  </Fragment>,
  <Fragment key="3.1-solucion-dl">
    <SlideTitle kind="solucion">Cada nombre, junto a su valor</SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<dl class="datos">\n  <div>\n    <dt>Entrada</dt>\n    <dd>A partir de las 16:00</dd>\n  </div>\n  …\n</dl>'
      }
    </Code>
    <p>
      Cada nombre (<code>&lt;dt&gt;</code>) va seguido de su valor (
      <code>&lt;dd&gt;</code>). Ahora se oye «Entrada, a partir de las 16:00».
    </p>
    <ExampleLinks slug="casa-rural" task="leer la ficha" />
  </Fragment>,
]
