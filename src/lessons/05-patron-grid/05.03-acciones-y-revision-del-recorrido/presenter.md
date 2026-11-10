# Notas · 5.3 Acciones dentro de las celdas y revisión del recorrido

≈ 8 min · demo: suscripciones

## 1. Lección

- El grid ya se recorre; ahora se actúa dentro
- Dos momentos: dónde está el foco antes de pulsar y dónde queda después
- > «Una acción que te deja sin foco te obliga a empezar de nuevo.»

## 2. Situación · Andrés cancela una suscripción

- Seis filas, un botón por fila · en una lista real serían decenas
- Con pocas filas bastaría una tabla con botones (5.1)
- [Ejemplo: abrir «Con barreras: dar de baja una revista» · Tab y flechas hasta «Acción»]

## 3. Error · La celda y su botón son dos paradas

- El foco se queda en el `td`; el botón es otro elemento enfocable
- Enter en la celda no hace nada → hace falta Tab, que además rompe la parada única
- [Ejemplo: Fin · Enter · Tab · Enter]

## 4. Solución · El foco va directo al botón

- APG: si la celda contiene un solo control que no usa flechas, el foco puede ir al control
- El botón lleva el `tabindex` itinerante, no la celda
- Nombre del botón: «Dar de baja» + la revista (texto oculto), como en 2.1 y 3.2
- Si el control usa flechas (un campo de texto): Enter para entrar en la celda, Escape para salir · fuera del curso

## 5. Error · Al quitar la fila, el foco se pierde

- El elemento enfocado desaparece → el navegador deja el foco en `body`
- Andrés tiene que volver a entrar en el grid; Elena no sabe dónde está

## 6. Solución · El foco pasa a la fila siguiente

- Regla: misma columna, fila siguiente; si no hay, la anterior
- Sin filas: foco al mensaje vacío (`tabindex="-1"`)
- Mover el foco aquí sí está justificado: lo que tenía el foco ya no existe
- [Ejemplo: «Arreglada» · dar de baja dos seguidas con Enter]

## 7. Error · La baja no se confirma

- El foco ha pasado al botón siguiente: el lector anuncia otra revista
- Sin confirmación, se duda y se repite

## 8. Solución · Un mensaje de estado

- `role="status"` visible · qué se ha hecho + cuántas quedan
- Mismo patrón que ordenar (4.3) y filtrar (4.4)
- [Ejemplo: lector activo · dar de baja · escuchar el mensaje · «Explicación»]

## 9. Resumen · Revisar el recorrido de un grid

- Cinco comprobaciones que sirven para cualquier grid
- Hacerlas con teclado y con lector: NVDA o VoiceOver
- Enlaza con el cierre: qué estructura elegir
