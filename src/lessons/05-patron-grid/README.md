# Módulo 5. Patrón grid

**≈ 25 minutos.** Cuándo hace falta un grid, cómo se recorre con el teclado y cómo se actúa dentro. Termina con el cierre del curso.

| Lección | Persona y tarea | Errores → solución | Ejemplo |
| --- | --- | --- | --- |
| [5.1 Cuándo elegir una tabla y cuándo un grid](./05.01-elegir-tabla-o-grid/README.md) | Andrés (teclado) consulta un horario | `tabindex` en cada celda, `role="grid"` sin necesidad → tabla sin paradas de foco | `horario` |
| [5.2 Navegación por celdas y gestión del foco](./05.02-navegacion-y-gestion-del-foco/README.md) | Andrés reserva una pista | 20 paradas de Tab, flechas sin efecto, sin instrucciones → tabindex itinerante, teclas del grid, ayuda visible | `pistas` |
| [5.3 Acciones dentro de las celdas y revisión del recorrido](./05.03-acciones-y-revision-del-recorrido/README.md) | Andrés cancela suscripciones | Foco en la celda, foco perdido, sin confirmación → foco en el botón, foco a la fila siguiente, `role="status"` | `suscripciones` |
| [5.4 Cómo continuar aprendiendo](./05.04-como-continuar-aprendiendo/README.md) | Repaso de las tres personas y cierre del curso | — | — |

## Materiales

| Material | Ruta local (`pnpm dev`) |
| --- | --- |
| Diapositivas | `/diapositivas/#/modulo-5` |
| Ejemplos | `/ejemplos/#modulo-5` |
| Contenido | `/contenido/modulo-5` y `/contenido/<lección>` |
| Notas del presentador | `/contenido/<lección>/presentador` |

## Evidencia y límites

- `gridKeys.ts` calcula la celda de destino de cada tecla; lo comparten `pistas` y `suscripciones` y tiene sus propios tests.
- Los tests comprueban rol `grid`, `tabindex` itinerante, teclas, límites, foco tras la acción y mensajes de estado; no lo que anuncia cada lector ni su cambio a modo foco.
- En los ejemplos, las celdas de cabecera no reciben foco; el nombre de cada control incluye su contexto.
- Fuera de alcance: edición de celdas, selección múltiple, virtualización y comportamientos de hoja de cálculo.

## Matriz manual pendiente

| Entorno | Qué revisar |
| --- | --- |
| NVDA y JAWS con Chrome/Firefox, VoiceOver con Safari | Anuncio de «cuadrícula», modo foco, cabeceras de fila y columna, descripción y mensajes de estado |
| Teclado | Una parada de Tab, flechas, Inicio/Fin (Fn+flechas en Mac), límites, foco tras dar de baja |
| Zoom 400 % / 320 px | `horario`, `pistas`, `suscripciones` sin contenido inalcanzable |
| Autor | Revisión visual y ensayo |
