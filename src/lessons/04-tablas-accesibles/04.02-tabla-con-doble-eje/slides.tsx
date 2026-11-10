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
      En algunas tablas, un dato depende de{' '}
      <strong>su columna y su fila</strong>. Hacen falta los dos encabezados.
    </p>
    <p>En esta lección:</p>
    <ul>
      <li>Encabezados de fila.</li>
      <li>
        El atributo <code>scope="row"</code>.
      </li>
      <li>Celdas que solo tienen un icono.</li>
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
      Si la primera columna dice qué hay en cada fila, sus celdas son
      encabezados.
    </p>
  </Fragment>,
  <Fragment key="4.2-situacion">
    <SlideTitle kind="situacion">Elena compara tarifas</SlideTitle>
    <PersonaCard
      id="elena"
      task="Compara tarifas de fibra. Busca la más barata que tenga televisión y no tenga permanencia."
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
      €», «2», «12 meses». No sabe qué es cada valor.
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
      <li>Ahora oye la fila con cada dato: «Permanencia, 12 meses».</li>
      <li>
        La esquina no es encabezado de nada: es un <code>td</code> vacío.
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
      celdas vacías. Era el dato que buscaba.
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
      <li>Un texto que no se ve dice «Incluida» o «No incluida».</li>
      <li>Es lo mismo que en la lección 2.1, ahora en una celda.</li>
      <li>La marca y la cruz tienen formas distintas, no solo colores.</li>
    </ul>
    <ExampleLinks slug="tarifas" task="comparar las tarifas" />
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
        <strong>Más niveles:</strong> mejor divide la tabla en varias. Si no
        puedes, existen <code>colgroup</code> y <code>headers</code>.
      </li>
    </ul>
  </Fragment>,
]
