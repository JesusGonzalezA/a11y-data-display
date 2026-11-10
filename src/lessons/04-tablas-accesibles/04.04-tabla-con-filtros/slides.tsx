import { Fragment } from 'react'
import {
  Code,
  ExampleLinks,
  PersonaCard,
  SlideTitle,
} from '../../../slides/parts'

export const slides = [
  <Fragment key="4.4-leccion">
    <SlideTitle kind="leccion">
      Tabla con filtros: resultados y continuidad de la tarea
    </SlideTitle>
    <p>
      Un filtro muestra menos filas para encontrar algo antes. La persona tiene
      que saber <strong>qué filtra</strong>, <strong>qué ha encontrado</strong>{' '}
      y <strong>cómo volver atrás</strong>.
    </p>
    <p>En esta lección:</p>
    <ul>
      <li>Etiquetas que no desaparecen.</li>
      <li>Cuántos resultados hay.</li>
      <li>Qué hacer cuando no hay resultados.</li>
    </ul>
  </Fragment>,
  <Fragment key="4.4-situacion">
    <SlideTitle kind="situacion">Lucía busca trabajo</SlideTitle>
    <PersonaCard
      id="lucia"
      task="Busca ofertas de diseño en remoto. Si no hay, quiere volver a verlas todas sin empezar de cero."
    />
  </Fragment>,
  <Fragment key="4.4-error-etiquetas">
    <SlideTitle kind="error">El placeholder hace de etiqueta</SlideTitle>
    <Code tone="error" caption="Así está">
      {
        '<input type="search" placeholder="Buscar…">\n<select>\n  <option value="">Modalidad</option>\n  …\n</select>'
      }
    </Code>
    <p>
      <strong>Qué le pasa a Lucía:</strong> escribe y la pista desaparece. Elige
      «Remoto» y ya no sabe qué campo era.
    </p>
  </Fragment>,
  <Fragment key="4.4-solucion-etiquetas">
    <SlideTitle kind="solucion">
      Una etiqueta visible para cada filtro
    </SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<label for="q">Puesto o empresa</label>\n<input id="q" type="search">\n\n<label for="modalidad">Modalidad</label>\n<select id="modalidad">\n  <option value="">Todas</option>…\n</select>'
      }
    </Code>
    <ul>
      <li>La etiqueta siempre se ve.</li>
      <li>«Todas» es una opción de verdad, no una etiqueta disfrazada.</li>
    </ul>
  </Fragment>,
  <Fragment key="4.4-error-foco">
    <SlideTitle kind="error">El foco salta a los resultados</SlideTitle>
    <Code tone="error" caption="Así está">
      {
        'input.addEventListener("input", () => {\n  filtrar()\n  tituloResultados.focus()\n})'
      }
    </Code>
    <p>
      <strong>Qué le pasa a Lucía:</strong> escribe «di» y la segunda letra se
      pierde: el foco ya se ha ido a los resultados. A Elena, su lector la lleva
      a otro sitio sin pedirlo.
    </p>
  </Fragment>,
  <Fragment key="4.4-solucion-foco">
    <SlideTitle kind="solucion">
      El foco se queda; el resultado se anuncia
    </SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {'<p role="status">\n  Mostrando 3 de 8 ofertas.\n</p>'}
    </Code>
    <ul>
      <li>El foco no se mueve al filtrar.</li>
      <li>
        El mensaje se ve, y el lector lo anuncia gracias a{' '}
        <code>role="status"</code>.
      </li>
      <li>«3 de 8»: cuántas quedan y cuántas había.</li>
    </ul>
  </Fragment>,
  <Fragment key="4.4-error-vacio">
    <SlideTitle kind="error">Sin resultados, una tabla vacía</SlideTitle>
    <Code tone="error" caption="Así está">
      {'<table>\n  <thead>…</thead>\n  <tbody></tbody>\n</table>'}
    </Code>
    <p>
      <strong>Qué le pasa a Lucía:</strong> ve una tabla sin filas. ¿Ha fallado
      la página? Para volver, tiene que quitar cada filtro a mano.
    </p>
  </Fragment>,
  <Fragment key="4.4-solucion-vacio">
    <SlideTitle kind="solucion">Explicar y ofrecer una salida</SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<p role="status">No hay ofertas para «chef»\n  en modalidad remoto.</p>\n<p>Prueba con otra palabra o con otra modalidad.</p>\n<button type="button">Quitar los filtros</button>'
      }
    </Code>
    <ul>
      <li>El mensaje dice qué se ha buscado.</li>
      <li>«Quitar los filtros» lo recupera todo en un paso.</li>
      <li>Después, el foco vuelve al buscador.</li>
    </ul>
    <ExampleLinks slug="empleo" task="filtrar las ofertas" />
  </Fragment>,
  <Fragment key="4.4-resumen">
    <SlideTitle kind="resumen">La tabla sigue siendo una tabla</SlideTitle>
    <ul>
      <li>
        <strong>Ordenar:</strong> botón en el encabezado, <code>aria-sort</code>{' '}
        y un mensaje.
      </li>
      <li>
        <strong>Filtrar:</strong> etiquetas, foco quieto, recuento y una salida.
      </li>
      <li>La tabla sigue siendo una tabla: el lector la recorre igual.</li>
    </ul>
    <p>
      Para esto no hace falta un grid. Cuándo sí hace falta, en el siguiente
      módulo.
    </p>
  </Fragment>,
]
