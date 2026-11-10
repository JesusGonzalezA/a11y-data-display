# Notas · 4.3 Tabla ordenable: controles y dirección de ordenación

≈ 12 min · demo: carrera

## 1. Lección

- Primera tabla interactiva: seguimos teniendo una tabla, con una acción encima
- Tres piezas: control · estado · resultado
- > «Añadir interacción no cambia lo que es: sigue siendo una tabla.»

## 2. Qué cambia al ordenar

- Vista: clic en el encabezado → flecha → filas nuevas, todo de un vistazo
- Lector: el control tiene que ser un control; el estado, un atributo; el resultado, un mensaje
- Base del patrón: ejemplo «Sortable Table» de WAI-ARIA APG (aviso: no es código de producción)

## 3. Situación · Andrés busca a su hermana

- Teclado · tabla de 7 filas aquí, cientos en la real
- Tarea: ordenar por nombre, encontrar, volver a ordenar por tiempo
- [Ejemplo: abrir «Ordenar la clasificación con barreras» · intentar con Tab]

## 4. Error · El encabezado solo responde al ratón

- `onclick` en el `th`: no es focusable, no tiene rol de botón
- Error frecuente con librerías de tablas
- Poner `tabindex` + `role="button"` en el `th` rompe el encabezado (deja de ser columnheader)
- [Ejemplo: Tab → el foco salta de la navegación a la zona de la tabla, nunca a los encabezados]

## 5. Solución · Un botón dentro del encabezado

- `th` > `button` · nombre = nombre de la columna
- Enter / Espacio gratis por ser `button`
- Primera pulsación ascendente; la siguiente invierte · una columna nueva empieza en ascendente
- Foco: el mismo botón, no se vuelve a crear → no se pierde
- [Ejemplo: con arreglo, Tab hasta «Nombre» · Enter · Espacio]

## 6. Error · El orden solo se indica con una flecha

- Carácter ▲ dentro del nombre: «Tiempo triángulo negro hacia arriba»
- O un icono sin texto: no se sabe nada
- La forma distingue sentido; el diamante ♢ marca «ordenable pero no ordenada» (como en APG)

## 7. Solución · aria-sort en el encabezado ordenado

- `aria-sort` en el `th`, no en el botón
- Solo una columna · se quita de la anterior al cambiar
- Valores: `ascending`, `descending` (existen `other` y `none`; no hace falta ponerlo en las demás)
- Caption con texto oculto: «Los encabezados con botón permiten ordenar» (así lo hace APG)
- > «La flecha es para los ojos; aria-sort, para el lector.»

## 8. Error · Las filas cambian en silencio

- El cambio ocurre fuera del punto de foco
- Soporte desigual: algunos lectores anuncian el nuevo estado del encabezado al cambiar, otros solo cuando vuelves a él
- Resultado: incertidumbre, se repite la acción

## 9. Solución · Un mensaje de estado breve

- `role="status"` = región viva educada (`aria-live="polite"`) · WCAG 4.1.3 Mensajes de estado
- Debe existir en el DOM antes de cambiar su texto
- Visible: también útil para Lucía o quien vuelve a la página
- No mover el foco a la tabla ni a la primera fila: Andrés quiere poder invertir con otra pulsación
- [Ejemplo: lector activo · ordenar por nombre · escuchar el mensaje · «Explicación»]
