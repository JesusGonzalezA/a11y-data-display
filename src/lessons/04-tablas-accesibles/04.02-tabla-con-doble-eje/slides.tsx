import { Fragment } from 'react'
import {
  Code,
  ExampleLinks,
  PersonaCard,
  SlideTitle,
} from '../../../slides/parts'

export const slides = [
  <Fragment key="4.2-leccion">
    <SlideTitle kind="leccion">
      Tabla con doble eje: encabezados de fila y columna
    </SlideTitle>
    <p>
      En algunas tablas, cada dato depende de{' '}
      <strong>dos cosas a la vez</strong>: su columna y su fila. Si falta uno de
      los dos encabezados, el dato no se entiende.
    </p>
    <p>En esta lección aprenderás a:</p>
    <ul>
      <li>Reconocer los encabezados de fila.</li>
      <li>
        Marcarlos con <code>scope="row"</code>.
      </li>
      <li>Dar texto a las celdas que solo tienen un icono.</li>
    </ul>
  </Fragment>,
  <Fragment key="4.2-dos-ejes">
    <SlideTitle kind="leccion">Un dato, dos preguntas</SlideTitle>
    <p>En una comparativa de tarifas, «12 meses» responde a dos preguntas:</p>
    <ul>
      <li>
        <strong>¿De qué tarifa?</strong> Lo dice la columna: Plus.
      </li>
      <li>
        <strong>¿De qué característica?</strong> Lo dice la fila: Permanencia.
      </li>
    </ul>
    <p>
      Cuando la primera columna dice qué hay en cada fila, sus celdas son
      encabezados de fila.
    </p>
  </Fragment>,
  <Fragment key="4.2-situacion">
    <SlideTitle kind="situacion">Elena compara tarifas</SlideTitle>
    <PersonaCard
      id="elena"
      task="Quiere elegir la tarifa más barata que incluya televisión y no tenga permanencia."
    />
  </Fragment>,
  <Fragment key="4.2-error-filas">
    <SlideTitle kind="error">La primera columna no son encabezados</SlideTitle>
    <Code tone="error" caption="Así está">
      {
        '<tr>\n  <td class="caracteristica">Permanencia</td>\n  <td>Sin permanencia</td>\n  <td>12 meses</td>\n  <td>12 meses</td>\n</tr>'
      }
    </Code>
    <p>
      <strong>Qué le pasa a Elena:</strong> baja por la columna Plus y oye «35
      €», «2», «12 meses». Sabe la tarifa, pero no qué es cada valor. Tiene que
      volver a la primera columna en cada fila.
    </p>
  </Fragment>,
  <Fragment key="4.2-solucion-filas">
    <SlideTitle kind="solucion">Encabezados de fila con scope="row"</SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<tr>\n  <td></td>\n  <th scope="col">Básica</th>\n  <th scope="col">Plus</th>…\n</tr>\n<tr>\n  <th scope="row">Permanencia</th>\n  <td>Sin permanencia</td>…\n</tr>'
      }
    </Code>
    <ul>
      <li>Ahora cada celda se anuncia con su fila: «Permanencia, 12 meses».</li>
      <li>
        La celda de la esquina no encabeza nada: es un <code>td</code> vacío.
      </li>
    </ul>
  </Fragment>,
  <Fragment key="4.2-error-iconos">
    <SlideTitle kind="error">
      Las celdas con icono se anuncian vacías
    </SlideTitle>
    <Code tone="error" caption="Así está">
      {'<td>\n  <svg aria-hidden="true">…</svg>\n</td>'}
    </Code>
    <p>
      <strong>Qué le pasa a Elena:</strong> en la fila Televisión oye tres
      celdas en blanco. Justo el dato que necesitaba para decidir.
    </p>
  </Fragment>,
  <Fragment key="4.2-solucion-iconos">
    <SlideTitle kind="solucion">El icono se ve, el texto se oye</SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<td>\n  <svg aria-hidden="true">…</svg>\n  <span class="visually-hidden">Incluida</span>\n</td>'
      }
    </Code>
    <ul>
      <li>Un texto oculto a la vista dice «Incluida» o «No incluida».</li>
      <li>Es lo que vimos en la lección 2.1, ahora dentro de una celda.</li>
      <li>La marca y la cruz tienen formas distintas, no solo colores.</li>
    </ul>
    <ExampleLinks
      slug="tarifas"
      barrier="Comparar las tarifas con barreras"
      fixed="Comparar las tarifas corregidas"
    />
  </Fragment>,
  <Fragment key="4.2-resumen">
    <SlideTitle kind="resumen">Cuando la tabla se complica</SlideTitle>
    <ul>
      <li>
        <strong>Un eje:</strong> <code>th scope="col"</code> en la primera fila.
      </li>
      <li>
        <strong>Dos ejes:</strong> además, <code>th scope="row"</code> en la
        primera columna.
      </li>
      <li>
        <strong>Encabezados agrupados o en varios niveles:</strong> existen{' '}
        <code>colgroup</code> y <code>headers</code>, pero antes intenta dividir
        la tabla en varias más simples.
      </li>
    </ul>
  </Fragment>,
]
