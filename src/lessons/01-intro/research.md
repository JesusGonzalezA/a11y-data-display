# Investigación y cobertura de M1

Consulta: **2026-10-09**, previa a la implementación. Alcance: 1.1 Bienvenida y
presentación y 1.2 Objetivos y contenidos. No se introduce un componente de datos;
se formula la tarea, los objetivos y el método del curso.

## Fuentes y decisiones

| Fuente específica | Tipo | Decisión para M1 |
| --- | --- | --- |
| [WAI, introducción](https://www.w3.org/WAI/fundamentals/accessibility-intro/) | Guía | Hablar de personas que necesitan percibir, comprender y usar información, incluyendo acceso mediante teclado. |
| [WAI, estructura de página](https://www.w3.org/WAI/tutorials/page-structure/) | Guía | Ordenar contenido y relaciones para orientar a quien lo consulta. |
| [WCAG 2.2, 1.3.1](https://www.w3.org/TR/WCAG22/#info-and-relationships) y [explicación](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html) | Recomendación normativa y guía informativa, respectivamente | No depender solo de presentación visual para expresar relaciones. |
| [HTML, encabezados](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements) | Estándar | Mantener h1 en portada y h2 nativos para slides; no crear roles sintéticos. |
| [HTML-AAM, h1–h6](https://www.w3.org/TR/html-aam/#el-h1-h6) | Mapeo a APIs de accesibilidad | El nivel forma parte de la semántica; no implica una frase concreta de lector de pantalla. |
| [MagentaA11y, heading](https://www.magentaa11y.com/web-criteria/component/heading) y [fuente consultada](https://github.com/tmobile/magentaA11y/blob/main/public/content/documentation/web/component/heading.md) | Criterios de aceptación | Comprobar estructura, ausencia de tabulado y lectura con tecnología de apoyo por separado. |
| [HTML, enlace](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element) y [HTML-AAM, a](https://www.w3.org/TR/html-aam/#el-a) | Estándar y mapeo | Usar a con href y nombre derivado del texto visible. |
| [MagentaA11y, link](https://www.magentaa11y.com/web-criteria/component/link) y [fuente consultada](https://github.com/tmobile/magentaA11y/blob/main/public/content/documentation/web/component/link.md) | Criterios de aceptación | Enlace nativo con destino y texto descriptivo; separar DOM, navegación y gestos. |
| [APG, Read Me First](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/) | Guía de patrones | Ningún patrón interactivo APG aplica a la introducción; no inventar un control para enseñarlo. |
| [WAI, selección de herramientas](https://www.w3.org/WAI/test-evaluate/tools/selecting/) | Guía | Complementar automatización con evaluación humana. |
| [WCAG 2.2, teclado](https://www.w3.org/TR/WCAG22/#keyboard), [foco visible](https://www.w3.org/TR/WCAG22/#focus-visible), [resize](https://www.w3.org/TR/WCAG22/#resize-text), [reflow](https://www.w3.org/TR/WCAG22/#reflow) | Recomendación normativa | Revisar el soporte de la presentación en navegador; no dar por resuelto el zoom por escalar el lienzo. |

Se consultó también `aria-patterns` y su referencia `at-support-gotchas.md`.
Sus cifras agregadas históricas no se trasladan a M1: no se utiliza ni enseña
ninguna de las propiedades que cuantifican. No se afirma soporte actual de un
lector, navegador o atributo a partir de esas cifras. Los módulos que introduzcan
cada patrón deberán contrastarlas con evidencia fechada y versiones concretas.
Aquí no hay observación de soporte con tecnología de apoyo real.

## Matriz de criterios

Criterio literal de MagentaA11y heading: “WHEN I use the tab key I SEE nothing
happens to the heading because headings must NOT be focusable”. El resto se
resume abajo; los Gherkin completos están en las fuentes enlazadas. Son criterios
de evaluación, no una transcripción garantizada de anuncios.

| Criterio y fuente | Clasificación | Evidencia / brecha |
| --- | --- | --- |
| Títulos con propósito, rol y nivel; HTML/HTML-AAM, Magenta heading | Automatizado (DOM) | `intro.test.tsx`: título h2 no vacío por slide. Portada h1 existente; el contexto completo del deck requiere revisión real. |
| Encabezados fuera del tabulado; Magenta heading | Automatizado (DOM) | `intro.test.tsx`: user-event Tab omite títulos y llega al único enlace de M1. |
| Secuencia del material y registro único; #1/#2 | Automatizado | `intro.test.tsx`: M1 registrado una sola vez en orden, sin muestra. No demuestra orden de lectura percibido. |
| Nombre, rol y destino del enlace; Magenta link | Automatizado (DOM) | `intro.test.tsx`: rol link, texto visible y href del mapa. |
| Reglas automáticas de estructura; WCAG 1.3.1 | Automatizado parcial | axe por slide en `intro.test.tsx`; no evalúa toda WCAG ni contraste en JSDOM. |
| Encabezados entran en vista y estructura se entiende; Magenta heading | Manual pendiente | Navegador y lector: NVDA/Firefox en Windows y VoiceOver/Safari en macOS; registrar versiones y diferencias. |
| Nombre, rol y nivel leídos; navegación por encabezados; Magenta heading | Manual pendiente | Mismas combinaciones de escritorio; inspeccionar portada, slide activa y slides ocultas de Reveal. |
| Lectura de encabezados con gestos; Magenta heading | Manual pendiente | VoiceOver/Safari iOS y TalkBack/Chrome Android, con versiones. |
| Tab, foco visible, Enter y destino del enlace; Magenta link, WCAG teclado/foco | Manual pendiente | Chrome en escritorio y Safari; confirmar orden, activación y regreso. DOM no demuestra navegación ni aspecto del foco. |
| Nombre/rol del enlace con lector y activación; Magenta link | Manual pendiente | NVDA/Firefox y VoiceOver/Safari; repetir swipe y doble toque en móvil. |
| Lienzo, orden visual, contraste y legibilidad; WAI estructura, [WCAG 1.4.3](https://www.w3.org/TR/WCAG22/#contrast-minimum) | Manual pendiente (autor) | Preparar portada y las siete slides en navegador. La inspección geométrica asistida se comunica en #2; no sustituye revisión visual del autor. |
| Zoom 200%, reflow a 320 CSS px y continuidad; WCAG resize/reflow | Manual pendiente | Revisar Reveal y Markdown en navegador real. No se presume una excepción general por ser slides. |
| Duración 2 + 3 minutos; #2 | Manual pendiente | Ensayo de locución con cronómetro; tiempos editoriales no son una medición. |
| Estados, popup, gestión de foco, teclas de grid o tooltip; APG | No aplicable | M1 no implementa esos patrones. No hay cambios de estado que anunciar. |
| Ayuda contextual táctil | No aplicable | No hay tooltip; el enlace de materiales sí requiere la comprobación táctil indicada arriba. |

## Auditoría de alcance

La pasada posterior a la implementación contrastó esta matriz con tests y
documentación: los tests son evidencia del DOM, nunca de anuncios. Las slides
utilizan HTML nativo; no se añaden ARIA, componentes ni contraejemplos. El deck de
Reveal es infraestructura heredada y su interacción real sigue en la matriz
manual. No se declara conformidad completa por compilar o pasar axe.

Los nueve tests y las cuatro validaciones del repositorio pasan. Inspección
asistida en navegador integrado a 1280 × 720: portada y siete slides alcanzables
con flecha derecha; sin elementos de contenido fuera del lienzo ni solapamientos
según sus rectángulos DOM renderizados. Sin capturas. No se ejecutaron las
comprobaciones manuales pendientes de la matriz. Storybook compila con índice
vacío; el aviso de ausencia de stories es esperado para esta entrega documental.
