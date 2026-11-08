import type { ExampleDefinition } from '../../../../../examples/types'
import { MailToolbar } from './MailToolbar'

export const mailToolbarExample: ExampleDefinition = {
  slug: 'correo',
  name: 'Barra de acciones de un correo web',
  lesson: '2.2',
  lessonTitle: 'Tooltip: ayuda contextual y límites',
  title: 'Reserva confirmada · Buzón Brisa',
  tryIt:
    'Recorre los botones con Tab: ¿sabes qué hace cada icono? Pasa el puntero por un botón e intenta llevarlo hasta el tooltip para leerlo. Pulsa Escape con el tooltip abierto. Busca cuándo se borran los mensajes de la papelera desde un móvil o solo con teclado.',
  fixes: [
    {
      id: 'focus',
      title: 'El tooltip aparece también con el foco',
      where: 'Los tres botones de la barra de acciones.',
      why: 'Sin arreglo, la ayuda solo aparece con mouseenter: quien usa teclado ve tres iconos y no sabe qué hacen. Con el arreglo, el tooltip se abre con el foco y con el puntero, y es el nombre del botón (aria-labelledby): lo que se ve y lo que se anuncia es el mismo texto.',
      before:
        '<button aria-label="Archivar"\n  onmouseenter="mostrar()">…</button>\n<span class="tooltip">Archivar</span>',
      after:
        '<button aria-labelledby="tip-archivar"\n  onfocus="mostrar()" onblur="ocultar()">…</button>\n<span role="tooltip" id="tip-archivar">Archivar</span>',
    },
    {
      id: 'dismiss',
      title: 'El tooltip se puede cerrar y se puede leer',
      where: 'El contenedor de cada botón y su tooltip.',
      why: 'WCAG 1.4.13 pide que el contenido que aparece al pasar el puntero o al enfocar se pueda descartar (Escape, sin mover el foco), se pueda recorrer con el puntero y se mantenga mientras haga falta. Sin arreglo, el tooltip está separado del botón y se cierra al intentar alcanzarlo, y Escape no hace nada.',
      before:
        '<span class="tip">\n  <button onmouseleave="ocultar()">…</button>\n  <span class="tooltip tooltip--separado">…</span>\n</span>',
      after:
        '<span class="tip" onmouseenter="mostrar()"\n  onmouseleave="ocultar()">\n  <button>…</button>\n  <span role="tooltip">…</span>\n</span>\n/* Escape cierra el tooltip */',
    },
    {
      id: 'essential',
      title: 'La información esencial está siempre visible',
      where: 'Junto a la barra de acciones.',
      why: 'Que los mensajes de la papelera se borran a los 30 días es información necesaria para decidir. Escondida en un «?» que solo responde al puntero, no la recibe quien usa teclado, pantalla táctil o lector de pantalla. Como texto visible llega a todas las personas; aria-describedby la asocia al botón como descripción, separada de su nombre.',
      before: '<span class="pista" onmouseenter="mostrar()">?</span>',
      after:
        '<button aria-labelledby="tip-papelera"\n  aria-describedby="ayuda-papelera">…</button>\n<p id="ayuda-papelera">Los mensajes de la papelera\n  se borran para siempre a los 30 días.</p>',
    },
  ],
  Page: MailToolbar,
}
