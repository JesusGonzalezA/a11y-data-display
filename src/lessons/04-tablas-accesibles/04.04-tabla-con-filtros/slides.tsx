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
      Un filtro reduce lo que se muestra para encontrar algo antes. Funciona si
      la persona sabe <strong>qué está filtrando</strong>,{' '}
      <strong>qué ha encontrado</strong> y <strong>cómo volver atrás</strong>.
    </p>
    <p>En esta lección:</p>
    <ul>
      <li>Filtros con etiquetas que no desaparecen.</li>
      <li>Comunicar cuántos resultados hay sin mover el foco.</li>
      <li>Explicar la ausencia de resultados y recuperar la lista completa.</li>
    </ul>
  </Fragment>,
  <Fragment key="4.4-situacion">
    <SlideTitle kind="situacion">Lucía busca trabajo</SlideTitle>
    <PersonaCard
      id="lucia"
      task="Quiere ver solo las ofertas de diseño en remoto. Si no hay, quiere volver a verlo todo sin empezar de cero."
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
      <strong>Qué le pasa a Lucía:</strong> en cuanto escribe o elige una
      opción, la pista desaparece. ¿«Buscar» qué: puesto, ciudad, empresa? ¿Qué
      era «Remoto»?
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
      <li>La etiqueta dice qué se filtra y sigue ahí mientras se escribe.</li>
      <li>«Todas» es un valor real, no un título disfrazado de opción.</li>
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
      pierde: el foco ya está en otra parte. Quien usa lector, como Elena, salta
      de sitio sin haberlo pedido.
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
      <li>Filtrar no es navegar: el foco no se mueve.</li>
      <li>
        El recuento, visible y dentro de <code>role="status"</code>, se anuncia
        sin interrumpir.
      </li>
      <li>«3 de 8» dice cuánto queda y cuánto había.</li>
    </ul>
  </Fragment>,
  <Fragment key="4.4-error-vacio">
    <SlideTitle kind="error">Sin resultados, una tabla vacía</SlideTitle>
    <Code tone="error" caption="Así está">
      {'<table>\n  <thead>…</thead>\n  <tbody></tbody>\n</table>'}
    </Code>
    <p>
      <strong>Qué le pasa a Lucía:</strong> ve una cabecera sin filas. ¿Ha
      fallado la página? ¿Qué filtro sobra? Para volver tiene que borrar y
      cambiar cada filtro uno a uno.
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
      <li>El mensaje repite los filtros activos: se entiende qué ha pasado.</li>
      <li>
        «Quitar los filtros» recupera todo en un paso y devuelve el foco al
        buscador.
      </li>
    </ul>
    <ExampleLinks
      slug="empleo"
      barrier="Filtrar las ofertas con barreras"
      fixed="Filtrar las ofertas corregidas"
    />
  </Fragment>,
  <Fragment key="4.4-resumen">
    <SlideTitle kind="resumen">La tabla sigue siendo una tabla</SlideTitle>
    <ul>
      <li>
        <strong>Ordenar:</strong> botón en el encabezado, <code>aria-sort</code>{' '}
        y mensaje de estado.
      </li>
      <li>
        <strong>Filtrar:</strong> etiquetas, foco estable, recuento y salida.
      </li>
      <li>
        En ambos casos el lector sigue recorriendo filas y columnas con sus
        atajos de tabla.
      </li>
    </ul>
    <p>
      Añadir controles a una tabla no obliga a convertirla en otra cosa. Eso lo
      veremos en el siguiente módulo.
    </p>
  </Fragment>,
]
