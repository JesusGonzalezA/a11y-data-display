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
      Una <strong>lista</strong> le dice al navegador que varios elementos van
      juntos y cuántos son. Quien no ve la página recibe esa relación solo si
      está en el HTML.
    </p>
    <p>En esta lección:</p>
    <ul>
      <li>Elegir entre lista no ordenada, ordenada y de descripciones.</li>
      <li>Qué aporta la estructura a quien usa un lector de pantalla.</li>
      <li>Cuándo el orden de los elementos tiene significado.</li>
    </ul>
  </Fragment>,
  <Fragment key="3.1-tres-listas">
    <SlideTitle kind="leccion">Tres listas, tres relaciones</SlideTitle>
    <table className="summary-table">
      <thead>
        <tr>
          <th scope="col">Relación</th>
          <th scope="col">Elemento</th>
          <th scope="col">Ejemplo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Conjunto, el orden no importa</th>
          <td>
            <code>&lt;ul&gt;</code>
          </td>
          <td>Servicios de un alojamiento, etiquetas, resultados</td>
        </tr>
        <tr>
          <th scope="row">Secuencia, el orden importa</th>
          <td>
            <code>&lt;ol&gt;</code>
          </td>
          <td>Pasos de una receta, indicaciones, ranking</td>
        </tr>
        <tr>
          <th scope="row">Pares nombre–valor</th>
          <td>
            <code>&lt;dl&gt;</code>
          </td>
          <td>Ficha de un producto, datos de un pedido</td>
        </tr>
      </tbody>
    </table>
    <p>
      Pregunta clave:{' '}
      <strong>¿cambia el significado si cambio el orden?</strong>
    </p>
  </Fragment>,
  <Fragment key="3.1-situacion">
    <SlideTitle kind="situacion">Elena prepara una escapada</SlideTitle>
    <PersonaCard
      id="elena"
      task="Quiere saber qué ofrece una casa rural, cómo se llega y a qué hora puede entrar."
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
      <strong>Qué le pasa a Elena:</strong> oye frases una tras otra, sin saber
      que forman un grupo ni cuántas son. No puede saltar al final del grupo ni
      encontrarlo con el atajo de listas.
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
      <li>
        El lector anuncia «lista, 5 elementos»: Elena sabe cuánto va a oír.
      </li>
      <li>El aspecto es libre: estas «píldoras» siguen siendo una lista.</li>
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
      <strong>Qué le pasa a Elena:</strong> el número es un dibujo de CSS. No
      sabe en qué paso está ni cuántos faltan para llegar.
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
      <li>La posición forma parte del significado: «2 de 4».</li>
      <li>
        Si reordenar los elementos cambia el sentido, es <code>&lt;ol&gt;</code>
        .
      </li>
    </ul>
  </Fragment>,
  <Fragment key="3.1-error-dl">
    <SlideTitle kind="error">
      Las etiquetas y los valores se leen por separado
    </SlideTitle>
    <Code tone="error" caption="Así está">
      {
        '<div class="datos">\n  <div><p>Entrada</p><p>Salida</p>…</div>\n  <div><p>A partir de las 16:00</p>…</div>\n</div>'
      }
    </Code>
    <p>
      <strong>Qué le pasa a Elena:</strong> oye «Entrada, Salida, Capacidad,
      Mascotas» y después cuatro valores. Tiene que adivinar cuál va con cuál.
    </p>
  </Fragment>,
  <Fragment key="3.1-solucion-dl">
    <SlideTitle kind="solucion">
      Pares nombre–valor en una lista de descripciones
    </SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<dl class="datos">\n  <div>\n    <dt>Entrada</dt>\n    <dd>A partir de las 16:00</dd>\n  </div>\n  …\n</dl>'
      }
    </Code>
    <p>
      Cada término va seguido de su valor en el código, y por tanto en la
      lectura. Un <code>&lt;div&gt;</code> puede agrupar cada par para
      maquetarlo.
    </p>
    <ExampleLinks
      slug="casa-rural"
      barrier="Leer la ficha con barreras"
      fixed="Leer la ficha corregida"
    />
  </Fragment>,
]
