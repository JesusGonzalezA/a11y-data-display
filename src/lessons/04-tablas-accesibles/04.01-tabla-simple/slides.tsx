import { Fragment } from 'react'
import {
  Code,
  ExampleLinks,
  PersonaCard,
  SlideTitle,
} from '../../../slides/parts'

export const slides = [
  <Fragment key="4.1-leccion">
    <SlideTitle kind="leccion">
      Tabla simple: título, encabezados y celdas
    </SlideTitle>
    <p>
      Una <strong>tabla</strong> ordena datos en filas y columnas. Cada dato se
      entiende por el encabezado de su columna.
    </p>
    <p>En esta lección:</p>
    <ul>
      <li>Cuándo usar una tabla.</li>
      <li>Título y encabezados.</li>
      <li>Tablas anchas que no se recortan.</li>
    </ul>
  </Fragment>,
  <Fragment key="4.1-cuando">
    <SlideTitle kind="leccion">¿Son datos de tabla?</SlideTitle>
    <p>
      Sí, si todos los elementos tienen <strong>los mismos datos</strong> y
      tiene sentido <strong>compararlos</strong>.
    </p>
    <ul>
      <li>
        Varios pedidos con fecha, importe y estado: <strong>tabla</strong>.
      </li>
      <li>
        Los datos de un solo pedido: lista de descripciones (lección 3.1).
      </li>
      <li>Colocar cosas en columnas: CSS, no una tabla.</li>
    </ul>
  </Fragment>,
  <Fragment key="4.1-estructura">
    <SlideTitle kind="leccion">Las piezas de una tabla</SlideTitle>
    <Code tone="neutral">
      {
        '<table>\n  <caption>Tus pedidos de 2026</caption>\n  <thead>\n    <tr>\n      <th scope="col">Pedido</th>\n      <th scope="col">Importe</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td>T-1029</td><td>7,50 €</td></tr>\n  </tbody>\n</table>'
      }
    </Code>
    <p>
      <code>caption</code>: el título. <code>th</code>: un encabezado.{' '}
      <code>td</code>: un dato. <code>scope="col"</code>: el encabezado es de su
      columna.
    </p>
  </Fragment>,
  <Fragment key="4.1-situacion">
    <SlideTitle kind="situacion">Elena revisa sus pedidos</SlideTitle>
    <PersonaCard
      id="elena"
      task="Busca cuánto pagó por un pedido que devolvió. Recorre la tabla celda a celda con su lector."
    />
  </Fragment>,
  <Fragment key="4.1-error-encabezados">
    <SlideTitle kind="error">Una tabla sin título ni encabezados</SlideTitle>
    <Code tone="error" caption="Así está">
      {
        '<p class="titulo">Tus pedidos de 2026</p>\n<table>\n  <tr class="cabecera">\n    <td>Pedido</td><td>Fecha</td>…\n  </tr>\n  <tr><td>T-1029</td>…<td>7,50 €</td>…</tr>\n</table>'
      }
    </Code>
    <p>
      <strong>Qué le pasa a Elena:</strong> oye «tabla, 6 filas, 5 columnas»,
      pero no de qué. En una celda oye «7,50 €» y no sabe qué dato es.
    </p>
  </Fragment>,
  <Fragment key="4.1-solucion-encabezados">
    <SlideTitle kind="solucion">Caption y encabezados de columna</SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<table>\n  <caption>Tus pedidos de 2026</caption>\n  <thead>\n    <tr>\n      <th scope="col">Pedido</th>\n      <th scope="col">Fecha</th>…\n    </tr>\n  </thead>\n</table>'
      }
    </Code>
    <ul>
      <li>Al entrar oye el título: «Tus pedidos de 2026».</li>
      <li>En cada celda oye su encabezado: «Importe, 7,50 €».</li>
    </ul>
  </Fragment>,
  <Fragment key="4.1-error-recorte">
    <SlideTitle kind="error">La tabla se recorta al ampliar</SlideTitle>
    <Code tone="error" caption="Así está">
      {'.tabla-contenedor { overflow: hidden; }'}
    </Code>
    <p>
      <strong>Qué le pasa:</strong> con zoom o en un móvil, las últimas columnas
      no se ven. Y no hay forma de llegar a ellas.
    </p>
  </Fragment>,
  <Fragment key="4.1-solucion-recorte">
    <SlideTitle kind="solucion">
      Una zona desplazable que se alcanza con teclado
    </SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<div class="tabla-contenedor" role="region"\n  aria-labelledby="titulo-pedidos" tabindex="0">\n  <table>…</table>\n</div>\n\n.tabla-contenedor { overflow-x: auto; }'
      }
    </Code>
    <ul>
      <li>
        <code>tabindex="0"</code>: se puede desplazar con el teclado.
      </li>
      <li>
        <code>role="region"</code> y un nombre: el lector dice qué es.
      </li>
    </ul>
    <ExampleLinks slug="pedidos" task="consultar los pedidos" />
  </Fragment>,
]
