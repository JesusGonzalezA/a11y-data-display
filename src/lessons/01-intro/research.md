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

Los siguientes extractos conservan los criterios aplicables de MagentaA11y
(T-Mobile), publicados bajo [Apache-2.0](https://github.com/tmobile/magentaA11y/blob/c0d97812d9298757f5a2d8902ed7671afb1aa9ba/LICENSE.txt).
Consulta: 2026-10-09; fuente fijada al commit
`c0d97812d9298757f5a2d8902ed7671afb1aa9ba`. Se conserva la redacción original de
los escenarios; la clasificación y las evidencias de M1 se añaden después.
«I HEAR» es un criterio para evaluación con lector real, nunca una afirmación
basada en tests DOM.

### Gherkin original: heading

[Fuente fijada al SHA consultado](https://github.com/tmobile/magentaA11y/blob/c0d97812d9298757f5a2d8902ed7671afb1aa9ba/public/content/documentation/web/component/heading.md).

```gherkin
GIVEN THAT I am on a page with a heading

1. Keyboard for mobile & desktop

      - WHEN I use the arrow key to browse to a heading I SEE the heading comes into view
      - WHEN I use the tab key I SEE nothing happens to the heading because headings must NOT be focusable

2. Desktop screenreader

      - WHEN I use a desktop screenreader (NVDA, JAWS, VoiceOver) AND
      - I use the arrow key to browse to a heading
         - I HEAR the heading's purpose and level must be clear
         - I HEAR it identifies itself as a heading and its level
         - I HEAR it is logically ordered, starting with a single h1, sections titled by h2, and subsections with h3
      - WHEN when I use the tab key I HEAR nothing happens to the heading because headings must NOT be focusable

3. Mobile screenreader

      - WHEN I use a mobile screenreader (Talkback, VoiceOver) AND
      - I swipe to browse to a heading
         - I HEAR the heading's purpose and level must be clear
         - I HEAR it identifies itself as a heading and its level
         - I HEAR it is logically ordered, starting with a single h1, sections titled by h2, and subsections with h3
```

### Gherkin original: link

[Fuente fijada al SHA consultado](https://github.com/tmobile/magentaA11y/blob/c0d97812d9298757f5a2d8902ed7671afb1aa9ba/public/content/documentation/web/component/link.md).

```gherkin
GIVEN THAT I am on a page with a link

1. Keyboard for mobile & desktop

   - WHEN I use the tab key to move focus to a link I SEE focus is strongly visually indicated
   - THEN when I use the enter key to activate the link I SEE my browser goes somewhere

2. Desktop screenreader

   - WHEN I use a desktop screenreader (NVDA, JAWS, VoiceOver) AND
   - I use the tab key to move focus to a link
      - I HEAR its purpose is clear
      - I HEAR it identifies itself as a link
   - THEN when I use the enter key to activate the link I HEAR my browser goes somewhere

3. Mobile screenreader

   - WHEN I use a mobile screenreader (Talkback, VoiceOver) AND
   - I swipe to focus on a link
      - I HEAR its purpose is clear
      - I HEAR it identifies itself as a link
   - THEN when I doubletap with the link in focus I HEAR my browser goes somewhere
```

### Trazabilidad de los escenarios originales

En las referencias H1–H3 y L1–L3, el número corresponde al apartado original
Keyboard, Desktop screenreader o Mobile screenreader del bloque anterior.

| Escenario / resultado original | Clasificación | Evidencia concreta y límite |
| --- | --- | --- |
| H1: flecha y encabezado entra en vista | Manual pendiente; evidencia asistida parcial | En IAB a 1280×720 la flecha derecha recorre las ocho slides. Esto no prueba la navegación por encabezados de un lector de pantalla. |
| H1: Tab no enfoca encabezados | Automatizado DOM | `intro.test.tsx`: ausencia de tabindex y user-event Tab llega al enlace sin enfocar los títulos. |
| H2: propósito/nivel, rol/nivel y orden lógico anunciados | Manual pendiente | NVDA/Firefox, JAWS/Chrome y VoiceOver/Safari macOS. DOM: h1 en portada y h2 en slides; no demuestra anuncios. |
| H2: Tab no enfoca encabezados con lector | Manual pendiente | Repetir el recorrido en las combinaciones anteriores; la prueba user-event no activa un lector. |
| H3: swipe; propósito/nivel, rol/nivel y orden lógico | Manual pendiente | VoiceOver/Safari iOS y TalkBack/Chrome Android; registrar versiones. |
| L1: Tab y foco visible | Automatizado DOM + manual pendiente | user-event alcanza el enlace. Revisora comprobó Tab en IAB y outline calculado de 3px con offset de 4px; aspecto visual humano pendiente. |
| L1: Enter navega | Asistido en navegador; manual pendiente en navegadores objetivo | Revisora activó con Enter el enlace en IAB y regresó a la slide. Destino GitHub/develop aún muestra plantilla hasta integración de PR; verificar mapa después de integrar. |
| L2: Tab, propósito y rol anunciados; Enter y navegación percibida | Manual pendiente | NVDA/Firefox, JAWS/Chrome y VoiceOver/Safari macOS. getByRole, texto y href solo acreditan el DOM. |
| L3: swipe, propósito/rol, doble toque y navegación percibida | Manual pendiente | VoiceOver/Safari iOS y TalkBack/Chrome Android; no ejecutado. |

Estos escenarios se aplican al contenido de encabezados y al único enlace de
materiales añadido en M1. No se evalúa un patrón ARIA nuevo. No hay escenarios
heading/link descartados como no aplicables; los límites de componentes ajenos al
módulo se distinguen en la matriz general.

### Matriz general

| Criterio y fuente | Clasificación | Evidencia / brecha |
| --- | --- | --- |
| Títulos con propósito, rol y nivel; HTML/HTML-AAM, Magenta heading | Automatizado (DOM) | `intro.test.tsx`: título h2 no vacío por slide. Portada h1 existente; el contexto completo del deck requiere revisión real. |
| Encabezados fuera del tabulado; Magenta heading | Automatizado (DOM) | `intro.test.tsx`: user-event Tab omite títulos y llega al único enlace de M1. |
| Secuencia del material y registro único; #1/#2 | Automatizado | `intro.test.tsx`: M1 registrado una sola vez en orden, sin muestra. No demuestra orden de lectura percibido. |
| Nombre, rol y destino del enlace; Magenta link | Automatizado (DOM) | `intro.test.tsx`: rol link, texto visible y href del mapa. |
| Reglas automáticas de estructura; WCAG 1.3.1 | Automatizado parcial | axe por slide en `intro.test.tsx`; no evalúa toda WCAG ni contraste en JSDOM. |
| Encabezados entran en vista y estructura se entiende; Magenta heading | Manual pendiente | Navegador y lector: NVDA/Firefox y JAWS/Chrome en Windows; VoiceOver/Safari en macOS; registrar versiones y diferencias. |
| Nombre, rol y nivel leídos; navegación por encabezados; Magenta heading | Manual pendiente | Mismas combinaciones de escritorio; inspeccionar portada, slide activa y slides ocultas de Reveal. |
| Lectura de encabezados con gestos; Magenta heading | Manual pendiente | VoiceOver/Safari iOS y TalkBack/Chrome Android, con versiones. |
| Tab, foco visible, Enter y destino del enlace; Magenta link, WCAG teclado/foco | Manual pendiente | Chrome en escritorio y Safari; confirmar orden, activación y regreso. DOM no demuestra navegación ni aspecto del foco. |
| Nombre/rol del enlace con lector y activación; Magenta link | Manual pendiente | NVDA/Firefox, JAWS/Chrome y VoiceOver/Safari; repetir swipe y doble toque en móvil. |
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
según sus rectángulos DOM renderizados. Sin capturas. Las comprobaciones humanas
pendientes de la matriz no se consideran ejecutadas; la evidencia asistida
adicional de la revisora se identifica en la trazabilidad. Storybook compila con
índice vacío; el aviso de ausencia de stories es esperado para esta entrega documental.
