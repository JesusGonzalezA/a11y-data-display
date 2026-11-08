import type { ExampleDefinition } from '../../../../../examples/types'
import { RuralHouse } from './RuralHouse'

export const ruralHouseExample: ExampleDefinition = {
  slug: 'casa-rural',
  name: 'Ficha de una casa rural',
  lesson: '3.1',
  lessonTitle: 'Listas: expresar relaciones entre elementos',
  title: 'Casa El Roble, en Collera · Casa rural El Roble',
  tryIt:
    'Con un lector de pantalla, pide la lista de listas de la página (NVDA: tecla L; VoiceOver: rotor). Recorre «Cómo llegar» y comprueba si sabes cuántos pasos hay. Lee «Datos del alojamiento» de arriba abajo: ¿qué valor corresponde a «Salida»?',
  fixes: [
    {
      id: 'ul',
      title: 'Los servicios son una lista no ordenada',
      where: 'Sección «Servicios».',
      why: 'Cinco párrafos con un punto dibujado parecen una lista, pero el navegador no comunica que forman un conjunto ni cuántos son. Con <ul>, el lector anuncia «lista, 5 elementos» y permite saltar a ella o pasarla de largo. El orden no importa: por eso no es <ol>.',
      before:
        '<div class="servicios">\n  <p>• Wifi en toda la casa</p>\n  <p>• Chimenea de leña</p>\n</div>',
      after:
        '<ul class="servicios">\n  <li>Wifi en toda la casa</li>\n  <li>Chimenea de leña</li>\n</ul>',
    },
    {
      id: 'ol',
      title: 'Las indicaciones son una lista ordenada',
      where: 'Sección «Cómo llegar».',
      why: 'Los pasos solo funcionan en orden, pero el número es un dibujo de CSS dentro de un <div>. Con <ol>, la secuencia forma parte del significado: se anuncia la posición («2 de 4») y el número no depende del estilo.',
      before:
        '<div class="pasos">\n  <div class="paso">Toma la salida 334…</div>\n  <div class="paso">En la rotonda…</div>\n</div>',
      after:
        '<ol class="pasos">\n  <li>Toma la salida 334…</li>\n  <li>En la rotonda…</li>\n</ol>',
    },
    {
      id: 'dl',
      title: 'Los datos son pares nombre–valor',
      where: 'Sección «Datos del alojamiento».',
      why: 'Etiquetas y valores están en dos columnas separadas en el código: se ven como pares, pero se leen «Entrada, Salida, Capacidad, Mascotas, A partir de las 16:00…». Con <dl>, cada término (<dt>) va seguido de su valor (<dd>) y el orden de lectura coincide con el significado.',
      before:
        '<div class="datos">\n  <div><p>Entrada</p><p>Salida</p>…</div>\n  <div><p>A partir de las 16:00</p>…</div>\n</div>',
      after:
        '<dl class="datos">\n  <div>\n    <dt>Entrada</dt>\n    <dd>A partir de las 16:00</dd>\n  </div>\n  …\n</dl>',
    },
  ],
  Page: RuralHouse,
}
