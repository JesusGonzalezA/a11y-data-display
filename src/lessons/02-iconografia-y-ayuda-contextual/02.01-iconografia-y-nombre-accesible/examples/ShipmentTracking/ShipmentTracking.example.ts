import type { ExampleDefinition } from '../../../../../examples/types'
import { ShipmentTracking } from './ShipmentTracking'

export const shipmentTrackingExample: ExampleDefinition = {
  slug: 'envios',
  name: 'Seguimiento de envíos de una mensajería',
  lesson: '2.1',
  lessonTitle: 'Iconografía: significado y nombre accesible',
  title: 'Mis envíos · Mensajería Rayo',
  tryIt:
    'Intenta saber qué envío tiene una incidencia sin distinguir colores. Recorre la página con Tab y fíjate en qué anuncia el lector de pantalla para cada botón con icono y para el título de cada envío.',
  fixes: [
    {
      id: 'status',
      title: 'El estado se escribe y el icono cambia de forma',
      where: 'Línea de estado de cada envío.',
      why: 'Sin arreglo, el estado es un círculo que solo cambia de color: quien no distingue colores no sabe cuál es cuál y el lector de pantalla no anuncia nada. Con texto visible, el estado se entiende siempre; el icono, con una forma distinta por estado, pasa a ser un refuerzo decorativo y se oculta con aria-hidden para no repetir información.',
      before:
        '<p class="status status--issue">\n  <svg viewBox="0 0 24 24">…</svg>\n</p>',
      after:
        '<p class="status status--issue">\n  <svg aria-hidden="true" …>…</svg>\n  <span>Incidencia: dirección incompleta</span>\n</p>',
    },
    {
      id: 'decorative',
      title: 'La ilustración de la caja es decorativa',
      where: 'Imagen de la caja junto al título de cada envío.',
      why: 'El texto alternativo «Icono de una caja de cartón» se suma al nombre del encabezado y se repite en cada envío: el lector anuncia «Icono de una caja de cartón Envío a Lugo». La imagen no aporta información, así que su alternativa es vacía.',
      before:
        '<h2>\n  <img src="caja.svg" alt="Icono de una caja de cartón">\n  Envío a Lugo\n</h2>',
      after: '<h2>\n  <img src="caja.svg" alt="">\n  Envío a Lugo\n</h2>',
    },
    {
      id: 'icon-name',
      title: 'Los controles con icono tienen nombre',
      where: 'Botón de copiar y enlace de descarga de cada envío.',
      why: 'Un botón o enlace que solo contiene un SVG no tiene nombre accesible: el lector anuncia «botón» o «enlace» sin decir qué hace, y además hay tres iguales. aria-label da a cada control un nombre que dice la acción y a qué envío afecta; el SVG queda oculto.',
      before:
        '<button type="button">\n  <svg aria-hidden="true">…</svg>\n</button>',
      after:
        '<button type="button"\n  aria-label="Copiar número de seguimiento RY4821">\n  <svg aria-hidden="true">…</svg>\n</button>',
    },
  ],
  Page: ShipmentTracking,
}
