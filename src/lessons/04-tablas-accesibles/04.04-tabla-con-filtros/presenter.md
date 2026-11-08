# Notas · 4.4 Tabla con filtros: resultados y continuidad de la tarea

≈ 13 min · demo: empleo

## 1. Lección

- Tres preguntas de quien filtra: ¿qué filtro? ¿qué he encontrado? ¿cómo vuelvo?
- Continuidad: la persona no debería perder lo que estaba haciendo
- > «Un buen filtro se nota en lo que no tienes que repetir.»

## 2. Situación · Lucía busca trabajo

- TDAH y dislexia: necesita que la información siga visible y que nada la saque de lo que hace
- Usa ratón y teclado; a menudo el móvil
- Tarea con dos filtros + caso sin resultados
- [Ejemplo: abrir «Filtrar las ofertas con barreras»]

## 3. Error · El placeholder hace de etiqueta

- Placeholder: desaparece al escribir, poco contraste, no siempre se anuncia igual
- Primera opción del `select` como título: al elegir otra, se pierde
- [Ejemplo: escribir en el buscador → la pista desaparece]

## 4. Solución · Una etiqueta visible para cada filtro

- `label` + `for` · WCAG 3.3.2 Etiquetas o instrucciones
- Clic en la etiqueta enfoca el campo: zona de clic más grande
- «Todas» como valor por defecto
- `type="search"` + elemento `<search>` → región de búsqueda para el lector

## 5. Error · El foco salta a los resultados

- Intención buena («llevar a los resultados») · efecto malo
- Al escribir: el foco se va tras la primera letra
- Con lector: cambio de contexto no pedido (WCAG 3.2.2 Al introducir datos)
- [Ejemplo: escribir «di» → solo entra la «d»]

## 6. Solución · El foco se queda; el resultado se anuncia

- Foco estable en el filtro · la persona decide cuándo ir a la tabla
- `role="status"` (polite) con el recuento · WCAG 4.1.3
- La región debe existir antes de cambiar el texto
- En listas largas o búsquedas en servidor: esperar a que termine de escribir (debounce) para no anunciar cada letra
- Alternativa válida: botón «Aplicar filtros» y entonces sí, anunciar o mover el foco al resultado, porque lo pidió
- [Ejemplo: con arreglo y lector, escribir «diseñadora» → «Mostrando 1 de 8 ofertas»]

## 7. Error · Sin resultados, una tabla vacía

- Cabecera sin filas: parece un error de la página
- No dice qué filtro sobra ni ofrece salida
- [Ejemplo: «chef» + Remoto]

## 8. Solución · Explicar y ofrecer una salida

- Mensaje con los filtros activos dentro de la región de estado
- Sugerencia concreta + botón «Quitar los filtros»
- Gestión del foco: el botón desaparece al pulsarlo → foco al buscador (si no, se pierde en el `body`)
- > «Si el elemento con foco desaparece, decide tú adónde va el foco.»
- [Ejemplo: «Quitar los filtros» · «Ver cambios»]

## 9. Resumen · La tabla sigue siendo una tabla

- 4.3 y 4.4 añaden controles alrededor y encima: la estructura no cambia
- El lector sigue usando sus atajos de tabla (Ctrl+Alt+flechas)
- Puente al módulo 5: ¿cuándo sí hace falta un grid?
