# Presentación de datos accesible: Data Display

Curso de **weaaare** de **120 minutos y 13 lecciones**. Aprenderás a elegir
estructuras para presentar información y conservar su significado al añadir
interacciones: iconos, ayuda contextual, listas, cards, tablas y grids.

Dirigido a personas con conocimientos básicos de HTML semántico, nombre accesible
y navegación por teclado. El curso Introducción al desarrollo web accesible puede
servir de preparación. Los ejemplos usarán React y TypeScript; las decisiones
sobre información e interacción son transferibles a otras herramientas.

## Objetivos

- Elegir una estructura según la tarea de la persona.
- Conservar significado, relaciones y orden al presentar datos.
- Añadir acciones reconocibles que puedan recorrerse con teclado.
- Combinar pruebas automáticas y revisión manual del recorrido.

## Mapa del curso

Especificación completa: [issue #1](https://github.com/JesusGonzalezA/a11y-data-display/issues/1).
Los tiempos incluyen explicación y demos; los ejercicios autónomos son adicionales.

| Módulo | Lecciones | Minutos | Material disponible |
| --- | --- | --- | --- |
| [1. Introducción](./src/lessons/01-intro/README.md) | 1.1 Bienvenida y presentación (2); 1.2 Objetivos y contenidos (3) | 5 | Contenido desarrollado; validación manual pendiente |
| 2. Iconografía y ayuda contextual | 2.1 Iconografía: significado y nombre accesible (10); 2.2 Tooltip: ayuda contextual y límites (15) | 25 | Pendiente · [#3](https://github.com/JesusGonzalezA/a11y-data-display/issues/3) |
| 3. Listas, cards y orden de lectura | 3.1 Listas: expresar relaciones entre elementos (8); 3.2 Cards: estructura, acciones y orden de lectura (12) | 20 | Pendiente · [#4](https://github.com/JesusGonzalezA/a11y-data-display/issues/4) |
| 4. Tablas accesibles | 4.1 Tabla simple: título, encabezados y celdas (10); 4.2 Tabla con doble eje: encabezados de fila y columna (10); 4.3 Tabla ordenable: controles y dirección de ordenación (12); 4.4 Tabla con filtros: resultados y continuidad de la tarea (13) | 45 | Pendiente · [#5](https://github.com/JesusGonzalezA/a11y-data-display/issues/5) |
| 5. Patrón grid | 5.1 Cuándo elegir una tabla y cuándo un grid (5); 5.2 Navegación por celdas y gestión del foco (12); 5.3 Acciones dentro de las celdas y revisión del recorrido (8) | 25 | Pendiente · [#6](https://github.com/JesusGonzalezA/a11y-data-display/issues/6) |

Los escenarios previstos son un catálogo de cursos, una tabla de pedidos, una
comparativa de planes y un grid pequeño con una acción por fila. La edición
avanzada, la selección múltiple, la virtualización y los encabezados multinivel
quedan fuera de las dos horas. El registro activo incluye únicamente M1; la muestra
y la presentación ficticia de la plantilla se han retirado.

## Instalar y ejecutar

Requisitos: Node.js 22.12 o posterior y pnpm 10.26.1. `.nvmrc` selecciona Node 22.

```bash
pnpm install
pnpm dev        # Slides: http://localhost:5173
pnpm storybook  # Storybook: http://localhost:6006 (otra terminal)
```

Usa las flechas para avanzar por la presentación. El número de lección y el hash
de la URL permiten volver a cada parte. M1 no contiene demos: Storybook queda sin
stories hasta desarrollar los módulos siguientes. Cada demo futura se enlazará
desde su slide y se organizará como
`Módulo N: Nombre/Lección N.M: Nombre/Componentes|Ejemplos/Nombre`.

Si esos puertos están ocupados, selecciona otros con `pnpm dev --port 5174 --strictPort`
y `pnpm exec storybook dev -p 6007`. Configura `VITE_STORYBOOK_URL` con la URL
correspondiente antes de iniciar las slides cuando haya demos.

## Consultar los materiales

En `src/lessons`, cada módulo contiene su mapa README. Cada lección reúne su
objetivo, ejecución, pruebas y referencias en README; la narración completa en
`presenter.md` y la síntesis visual en `slides.tsx`. Los ejemplos futuros, sus
stories y tests vivirán en `examples/` dentro de la lección correspondiente.
`src/lessons/lessonRegistry.ts` es la única fuente de orden de las slides.
`src/course.ts` define los datos generales del curso.

## Validar

```bash
pnpm test
pnpm lint
pnpm build
pnpm build-storybook
```

`pnpm check` ejecuta los cuatro controles. `pnpm build` produce `dist/`;
`pnpm build-storybook` produce `storybook-static/`. `pnpm preview` permite revisar
la presentación compilada. No hay publicación automática de estos artefactos.

La [matriz de M1](./src/lessons/01-intro/research.md) distingue evidencia DOM,
revisión en navegador y comprobaciones con tecnología de apoyo pendientes.
Un resultado limpio de axe no demuestra conformidad total. Las cifras históricas
de soporte en las skills ARIA deben contrastarse antes de enseñarlas como vigentes.

## Base técnica y autoría

React, TypeScript, Vite y Reveal.js para las slides; Storybook para ejemplos;
Vitest, Testing Library, user-event y jest-axe/axe-core para pruebas; Biome para
formato y lint. [AGENTS.md](./AGENTS.md) enlaza las skills de autoría y el flujo
issue → rama → PR a `develop`. El estado del módulo se mantiene en
[#2](https://github.com/JesusGonzalezA/a11y-data-display/issues/2).
