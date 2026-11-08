# Módulo 2. Iconografía y ayuda contextual

**≈ 25 minutos.** Qué significa un icono, cómo se nombra un control con icono y cuándo un tooltip es suficiente.

| Lección | Persona y tarea | Errores → solución | Ejemplo |
| --- | --- | --- | --- |
| [2.1 Iconografía: significado y nombre accesible](./02.01-iconografia-y-nombre-accesible/README.md) | Elena (lector) revisa sus envíos | Estado solo con color, ilustración con `alt`, botones sin nombre → texto, `alt=""`, `aria-label` | `envios` |
| [2.2 Tooltip: ayuda contextual y límites](./02.02-tooltip/README.md) | Andrés (teclado) ordena su correo | Tooltip solo con ratón, no descartable, ayuda esencial escondida → foco, Escape, texto visible | `correo` |

## Materiales

| Material | Ruta local (`pnpm dev`) |
| --- | --- |
| Diapositivas | `/diapositivas/#/modulo-2` |
| Ejemplos | `/ejemplos/#modulo-2` |
| Contenido | `/contenido/modulo-2` y `/contenido/<lección>` |
| Notas del presentador | `/contenido/<lección>/presentador` |

## Evidencia y límites

- Los tests (JSDOM) comprueban nombres, descripciones, roles y eventos; no reproducen lo que anuncia un lector de pantalla.
- El patrón Tooltip de APG está en desarrollo: el soporte real se verifica a mano.

## Matriz manual pendiente

| Entorno | Qué revisar |
| --- | --- |
| NVDA + Firefox/Chrome, VoiceOver + Safari | Nombre y descripción de los botones de icono; estados de envío |
| Teclado | Tooltip al enfocar, Escape, foco que no se mueve |
| Ratón | Pasar del botón al tooltip sin que se cierre |
| Móvil (táctil) | La ayuda esencial está visible |
| Devtools | Simulación de daltonismo en `envios` |
| Autor | Revisión visual y ensayo |
