# Notas · 4.2 Tabla con doble eje: encabezados de fila y columna

≈ 10 min · demo: tarifas

## 1. Lección

- Paso siguiente a 4.1: ahora los dos ejes importan
- Comparativas, horarios, calendarios de precios
- Tres cosas: identificar ejes · `scope="row"` · celdas con icono

## 2. Un dato, dos preguntas

- «12 meses» = Plus × Permanencia
- Truco: tapa la primera columna; si los datos dejan de tener sentido, son encabezados de fila
- > «Un dato con dos encabezados necesita que el lector le diga los dos.»

## 3. Situación · Elena compara tarifas

- Tarea con tres condiciones: precio, televisión, permanencia → compara en vertical y en horizontal
- [Ejemplo: abrir «Comparar las tarifas con barreras» · ir a la columna Plus]

## 4. Error · Las características son celdas normales

- Primera columna en `td` con negrita
- Elena bajando por Plus: solo valores · subiendo por la columna, vuelve a oír «Plus» pero no la fila
- Tiene que ir y volver a la primera columna: tarea lenta y propensa a errores
- [Ejemplo: Ctrl+Alt+flecha abajo por la columna Plus]

## 5. Solución · Encabezados de fila con scope="row"

- `th scope="row"` en la primera celda de cada fila
- Lector: al bajar anuncia la fila nueva («Permanencia») + dato · al cambiar de columna, la tarifa
- Esquina vacía: `td` · un `th` vacío se anunciaría como encabezado sin texto
- Alternativa: poner texto en la esquina («Característica») como `th scope="col"` si aporta
- [Ejemplo: «Aplicar arreglo» · repetir el recorrido]

## 6. Error · Las marcas de «incluido» están vacías

- SVG con `aria-hidden` sin texto → celda vacía
- Mismo error que en 2.1, ahora en tabla: es donde más duele, porque es lo que se compara

## 7. Solución · El icono se ve, el texto se oye

- `visually-hidden` con «Incluida» / «No incluida»
- Alternativa visible: «Sí» / «No» junto al icono, mejor para todas las personas si el diseño lo permite
- [Ejemplo: fila Televisión con el lector · «Ver cambios»]

## 8. Resumen · Cuando la tabla se complica

- Un eje → `scope="col"` · Dos ejes → + `scope="row"`
- Multinivel (fuera de alcance): `colgroup`/`rowgroup`, `scope="colgroup"`, `headers` + `id`
- Consejo WAI: si una tabla es muy compleja, mejor varias tablas simples
- > «Cuanto más compleja es la tabla, más se nota que el lector la recorre de una en una celda.»
