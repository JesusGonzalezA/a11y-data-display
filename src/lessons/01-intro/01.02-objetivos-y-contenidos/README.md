# 1.2 Objetivos y contenidos · 3 minutos

## Objetivo y tarea

Identificar qué se aprenderá, qué conocimientos se necesitan y dónde volver a consultar los materiales.
La persona termina esta lección cuando puede explicar ese resultado con sus propias palabras.

## Secuencia y materiales

Objetivos y contenidos → Conocimientos para seguir el curso → Recorrido de 120 minutos → Consultar y practicar con los materiales.

- [Slides](./slides.tsx): conceptos autosuficientes en ese orden.
- [Guion](./presenter.md): un apartado por slide, listo para locución.
- [Mapa del módulo](../README.md).

Los tiempos son orientativos; ensayo cronometrado pendiente. Los patrones,
atributos ARIA y demos se desarrollan en M2–M5. Esta introducción no necesita
componentes, ejemplos ni stories propios.

## Instalar y ejecutar

Desde la raíz, con Node.js ≥22.12 y pnpm 10.26.1: `pnpm install` y `pnpm dev`.
El navegador muestra la presentación continua, normalmente en el puerto 5173.
Usa las flechas para avanzar. `pnpm storybook` prepara el explorador en 6006,
todavía sin stories en esta entrega. Consulta el README raíz para otros puertos.

## Accesibilidad, pruebas y fuentes

[Investigación de M1](../research.md), consulta del 9 de octubre de 2026:
fuentes específicas, decisiones y matriz automatizado/manual/no aplicable para
ambas lecciones. Encabezados y listas HTML nativos; sin patrón APG propio ni
propiedades ARIA nuevas. La revisión del soporte real no se sustituye por el DOM.

[Pruebas del módulo](../intro.test.tsx): semántica de títulos, orden de integración,
encabezados fuera del tabulado, enlace de materiales y reglas detectables por axe.
Ejecutar `pnpm test`; completar también `pnpm lint`, `pnpm build` y
`pnpm build-storybook`. No se exige user-event a contenido estático: se usa para
verificar que Tab omite los encabezados y alcanza el enlace nativo.

Pendientes manuales: lector de pantalla en escritorio y móvil, navegación/foco
visible en navegador, zoom, orden de lectura percibido, activación táctil del
enlace de materiales y ensayo de duración. La ayuda contextual táctil, estados y
gestión de foco de componentes no aplican: no se implementan en M1. La preparación
de superficies no equivale a conformidad completa ni a revisión visual del autor.
