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
      Una <strong>tabla</strong> organiza datos en filas y columnas. Cada dato
      se entiende gracias a su contexto: el encabezado de su columna.
    </p>
    <p>En esta lección:</p>
    <ul>
      <li>Reconocer cuándo los datos son tabulares.</li>
      <li>Dar título a la tabla y relacionar cada celda con su encabezado.</li>
      <li>Permitir desplazar una tabla ancha sin recortarla.</li>
    </ul>
  </Fragment>,
  <Fragment key="4.1-cuando">
    <SlideTitle kind="leccion">¿Son datos de tabla?</SlideTitle>
    <p>
      Sí, cuando cada elemento tiene <strong>los mismos atributos</strong> y
      tiene sentido leerlos <strong>en fila y en columna</strong>: comparar
      fechas, sumar importes, buscar un estado.
    </p>
    <ul>
      <li>
        Pedidos con número, fecha, importe y estado: <strong>tabla</strong>.
      </li>
      <li>Datos de un solo elemento: lista de descripciones (lección 3.1).</li>
      <li>Colocar cosas en columnas para maquetar: CSS, nunca una tabla.</li>
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
      <code>caption</code>: el título. <code>th</code>: encabezado.{' '}
      <code>td</code>: dato. <code>scope="col"</code>: este encabezado manda en
      su columna.
    </p>
  </Fragment>,
  <Fragment key="4.1-situacion">
    <SlideTitle kind="situacion">Elena revisa sus pedidos</SlideTitle>
    <PersonaCard
      id="elena"
      task="Quiere saber cuánto pagó por el pedido que devolvió. Se mueve por la tabla celda a celda con su lector."
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
      <strong>Qué le pasa a Elena:</strong> oye «tabla, 6 filas, 5 columnas» sin
      saber de qué. Al llegar a una celda solo oye «7,50 €»: ¿es el importe, un
      descuento, un envío?
    </p>
  </Fragment>,
  <Fragment key="4.1-solucion-encabezados">
    <SlideTitle kind="solucion">Caption y encabezados de columna</SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<table>\n  <caption>Tus pedidos de 2026</caption>\n  <thead>\n    <tr>\n      <th scope="col">Pedido</th>\n      <th scope="col">Fecha</th>…\n    </tr>\n  </thead>\n  …\n</table>'
      }
    </Code>
    <ul>
      <li>Al entrar: «Tus pedidos de 2026, tabla, 6 filas, 5 columnas».</li>
      <li>
        Al cambiar de columna: «Importe, 7,50 €». El encabezado da el contexto.
      </li>
    </ul>
  </Fragment>,
  <Fragment key="4.1-error-recorte">
    <SlideTitle kind="error">La tabla se recorta al ampliar</SlideTitle>
    <Code tone="error" caption="Así está">
      {'.tabla-contenedor { overflow: hidden; }'}
    </Code>
    <p>
      <strong>Qué le pasa:</strong> con zoom o en una pantalla estrecha, las
      columnas de importe y estado quedan fuera y no hay forma de verlas. Le
      pasa a quien amplía la página, y a Elena si usa lupa además del lector.
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
        Una tabla puede necesitar desplazamiento horizontal: es una excepción
        aceptada del reflujo.
      </li>
      <li>
        <code>tabindex="0"</code> permite desplazarla con las flechas;{' '}
        <code>role="region"</code> y el nombre explican qué es esa parada.
      </li>
    </ul>
    <ExampleLinks
      slug="pedidos"
      barrier="Consultar los pedidos con barreras"
      fixed="Consultar los pedidos corregidos"
    />
  </Fragment>,
]
