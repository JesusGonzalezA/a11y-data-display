# Notas · 2.1 Iconografía: significado y nombre accesible

≈ 10 min · demo: envios

## 1. Lección

- Los iconos están en todas las interfaces con datos: estados, acciones, avisos
- Un icono se ve pero no se oye · si informa, necesita otra vía
- Tres objetivos: papel del icono · no solo color · nombre de los controles

## 2. Tres papeles de un icono

- Decorativo · informativo · dentro de un control
- La misma imagen puede tener papeles distintos según el contexto: una papelera junto al texto «Eliminar» es decorativa; sola en un botón, es el control
- > «Pregúntate qué pierde la persona si quitas el icono. Si no pierde nada, es decorativo.»
- Evitar información duplicada: si el texto ya lo dice, el icono se oculta
- Matiz: el texto alternativo describe la función o el dato, no el dibujo («Incidencia», no «triángulo rojo»)

## 3. Situación · Elena revisa sus envíos

- Lector de pantalla · navega por encabezados y por botones
- Tarea: detectar el envío con problema, copiar su número, descargar la etiqueta
- [Ejemplo: abrir «Revisar los envíos con barreras» · activar el lector (VoiceOver: Cmd+F5 · NVDA: Ctrl+Alt+N)]

## 4. Error · El estado es solo un círculo de color

- Tres círculos iguales, solo cambia el color
- Elena: el lector no dice nada · el SVG no tiene nombre ni texto cerca
- Persona con daltonismo: rojo y verde se confunden
- WCAG 1.4.1 Uso del color: el color no puede ser la única forma de transmitir información
- [Ejemplo: devtools → Rendering → «Emulate vision deficiencies» → deuteranopía]

## 5. Solución · Escribir el estado; el icono acompaña

- Texto visible: lo mejor para todos, no solo para el lector
- El icono se queda como refuerzo y se oculta (`aria-hidden`) → no se anuncia dos veces
- Forma distinta por estado: check, flecha, exclamación
- Si un icono es la única pista y no lleva texto: contraste mínimo 3:1 (WCAG 1.4.11)
- > «El color acompaña; nunca habla solo.»

## 6. Error · La ilustración se anuncia en cada envío

- `alt` descriptivo en algo puramente decorativo
- Se suma al nombre del encabezado: «Icono de una caja de cartón, Envío a Lugo»
- Al saltar por encabezados (tecla H) es ruido repetido
- El error contrario también existe: un icono informativo con `alt=""`

## 7. Solución · Lo decorativo se oculta

- `<img alt="">` · `<svg aria-hidden="true" focusable="false">`
- Sin `alt`: algunos lectores leen el nombre del archivo → peor
- `focusable="false"`: evita una parada de foco extra en navegadores antiguos (herencia de IE)
- Iconos con fuentes o CSS (`::before`): también ocultar el elemento que los contiene

## 8. Error · Botones que solo dicen «botón»

- Botón y enlace con un SVG oculto dentro → sin nombre
- Elena oye «botón» · axe lo detecta (button-name, link-name)
- Además se repiten en cada envío: ¿cuál es cuál?
- [Ejemplo: Tab por los controles con el lector · lista de botones (VoiceOver: rotor)]

## 9. Solución · Un nombre que dice la acción y el objeto

- `aria-label` o texto oculto visualmente (`.visually-hidden`) → ambos dan nombre
- Nombre = verbo + objeto: «Copiar número de seguimiento RY4821»
- Copiar es acción → `<button>`; descargar un archivo es ir a un recurso → `<a>`
- Visual: añadir también un tooltip ayuda a quien ve el icono y no lo entiende → siguiente lección
- > «Un control sin nombre es un control que no existe para quien no lo ve.»
- [Ejemplo: «Aplicar arreglo» · repetir con el lector · «Ver cambios»]
