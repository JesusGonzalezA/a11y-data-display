# Notas · 4.1 Tabla simple: título, encabezados y celdas

≈ 10 min · demo: pedidos

## 1. Lección

- Empieza el bloque más largo: tablas (45 min)
- Idea central: un dato de tabla no se entiende solo; se entiende por su encabezado
- Vista: miramos la cabecera de un vistazo · Lector: necesita que se la digan en cada celda

## 2. ¿Son datos de tabla?

- Criterio: mismos atributos para cada elemento + sentido en filas y en columnas
- Contraejemplos: ficha de un solo producto (`dl`), maquetar en columnas (CSS grid)
- Tablas de maquetación: históricas, hoy un error; si existen, `role="presentation"`
- > «Si puedes ponerle un encabezado a cada columna y tiene sentido, es una tabla.»

## 3. Las piezas de una tabla

- `table` · `caption` · `thead`/`tbody` · `tr` · `th` · `td`
- `caption`: primer hijo de la tabla · da nombre accesible
- `scope="col"`: explícito; los navegadores suelen deducirlo en tablas simples, pero así no depende de heurísticas
- `thead` agrupa; ayuda a estilos, impresión y a algunos lectores

## 4. Situación · Elena revisa sus pedidos

- Navegación por tablas: NVDA/JAWS Ctrl+Alt+flechas · VoiceOver Ctrl+Opción+flechas
- Tecla T (NVDA) para saltar a la siguiente tabla
- Tarea: importe del pedido devuelto
- [Ejemplo: abrir «Consultar los pedidos con barreras» · entrar en la tabla con el lector]

## 5. Error · Una tabla sin título ni encabezados

- `p` encima = no asociado · `td` en negrita = no es encabezado
- Elena: «tabla, 6 filas, 5 columnas» → ¿de qué?
- Al moverse a la derecha en la fila del pedido devuelto: «Devuelto»… y para volver al importe, solo números
- [Ejemplo: recorrer la fila T-1029 celda a celda]

## 6. Solución · Caption y encabezados de columna

- `caption` → nombre de la tabla
- `th scope="col"` en `thead` → contexto de cada celda
- Lector al cambiar de columna anuncia el encabezado; al bajar por la misma columna, normalmente solo el dato
- WCAG 1.3.1 Información y relaciones
- > «El encabezado viaja con el dato: eso es lo que hace útil una tabla con lector.»
- [Ejemplo: «Arreglada» · repetir el recorrido]

## 7. Error · La tabla se recorta al ampliar

- `overflow: hidden` en el contenedor
- Zoom 400 % ≈ 320 px de ancho → las últimas columnas desaparecen
- [Ejemplo: devtools en 320 px o zoom 400 %]

## 8. Solución · Una zona desplazable que se alcanza con teclado

- WCAG 1.4.10 Reflujo: tablas de datos = excepción, se permite scroll en dos ejes
- `overflow-x: auto` · `tabindex="0"`: Chrome y Firefox recientes ya hacen enfocables las zonas desplazables; Safari no → `tabindex` lo garantiza
- `role="region"` + `aria-labelledby` al caption: la parada de foco tiene nombre
- Alternativa en móvil: reorganizar en cards con CSS… cuidado, cambiar `display` de las celdas puede quitar la semántica de tabla en algunos navegadores
- [Ejemplo: con arreglo, Tab hasta la tabla y flechas a la derecha · «Explicación»]
