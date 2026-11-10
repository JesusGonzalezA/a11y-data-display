# Notas · 3.1 Listas: expresar relaciones entre elementos

≈ 8 min · demo: casa-rural

## 1. Lección

- Empezamos a recorrer colecciones: lo más simple es una lista
- Una lista comunica dos cosas: pertenencia («van juntos») y cantidad
- Lo visual (viñetas, números, píldoras) no viaja al lector; la etiqueta HTML, sí
- > «Una lista no es un estilo: es una relación.»

## 2. Tres listas, tres relaciones

- `ul`: conjunto · `ol`: secuencia · `dl`: pares nombre–valor
- Pregunta clave: ¿cambia el significado si cambio el orden?
- `dl` es la gran olvidada: fichas, metadatos, resúmenes de pedido
- Cuándo NO usar lista: un solo elemento, o un párrafo con comas
- Si los pares tienen más de una dimensión (varias columnas que comparar) → tabla (módulo 4)

## 3. Situación · Elena prepara una escapada

- Lector de pantalla · usa atajos: H para encabezados, L para listas (NVDA), rotor en VoiceOver
- Tarea: qué ofrece la casa, cómo llegar, horario de entrada
- [Ejemplo: abrir «Con barreras: leer la ficha» · lista de elementos del lector]

## 4. Error · Los servicios son párrafos sueltos

- `div` + `p` con «•» → parece lista, no lo es
- Elena: no sabe cuántos son ni dónde termina el grupo
- No aparece en la lista de listas del lector
- [Ejemplo: tecla L / rotor → no hay listas]

## 5. Solución · Un conjunto es una lista no ordenada

- `ul` + `li` · «lista, 5 elementos»
- El CSS puede quitar viñetas y maquetar en fila: sigue siendo lista
- Matiz de soporte: con `list-style: none`, Safari y VoiceOver pueden dejar de anunciarla como lista; si es importante, `role="list"` la recupera
- > «Saber cuántos elementos hay es saber cuánto tiempo vas a escuchar.»

## 6. Error · Los pasos no forman una secuencia

- Números con `counter()` en `::before`: decoración
- Elena: no sabe en qué paso está · si se pierde, vuelve a empezar
- WCAG 1.3.1 Información y relaciones: la relación visual debe estar en el código

## 7. Solución · Una secuencia es una lista ordenada

- `ol` · posición «2 de 4»
- Ranking, pasos, cronologías · el orden es parte del dato
- Atributos útiles: `start`, `reversed`

## 8. Error · Los nombres y sus valores se leen por separado

- Dos columnas independientes en el DOM → se ven como pares, se leen como dos bloques
- WCAG 1.3.2 Secuencia significativa: el orden de lectura debe conservar el sentido
- [Ejemplo: leer «Datos del alojamiento» con flecha abajo]

## 9. Solución · Cada nombre, junto a su valor

- `dl` > `div` > `dt` + `dd` (el `div` envolvente es válido en HTML)
- Orden del código = orden de lectura = significado
- El soporte de `dl` varía: algunos lectores no anuncian «término»/«definición», pero el orden ya resuelve lo esencial
- [Ejemplo: «Arreglada» · repetir con el lector · «Explicación»]
