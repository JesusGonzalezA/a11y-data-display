# Notas · 3.2 Cards: estructura, acciones y orden de lectura

≈ 12 min · demo: academia

## 1. Lección

- Card = un elemento de la colección + sus acciones
- Viene de 3.1: una colección de cards es una lista
- Tres problemas típicos: sin encabezado · todo es un enlace · orden visual distinto del orden del código

## 2. La anatomía de una card

- `ul` > `li` · encabezado · información · acciones
- Acción principal: navegar al detalle → enlace en el título
- Acciones secundarias: guardar, comparar, añadir → botones separados
- > «Una card no es un control: es un contenedor con controles dentro.»

## 3. Situación · Andrés elige un curso

- Teclado: cada Tab es un esfuerzo, el orden importa
- Tarea: recorrer, guardar dos, abrir el destacado
- También pensamos en Elena: encabezados y nombres
- [Ejemplo: abrir «Recorrer el catálogo con barreras»]

## 4. Error · El título solo lo parece

- `span` grande ≠ encabezado
- Elena: navega por encabezados (H) para saltar de card en card · aquí no puede
- Andrés no lo nota, pero es la misma página para todas las personas

## 5. Solución · Cada card empieza con un encabezado

- `h2` (o el nivel que toque según la página)
- Enlace dentro del encabezado: nombre corto = título del curso
- Bonus: la lista de enlaces del lector ya no es «Excel desde cero 12 horas En línea Fórmulas…»

## 6. Error · Un botón dentro de un enlace

- Contenido interactivo anidado: no válido en HTML
- El foco: enlace → botón dentro del enlace · comportamiento distinto entre navegadores
- Nombre del enlace = todo el texto de la card · «Guardar» × 4 sin contexto
- [Ejemplo: Tab por la primera card · escuchar el nombre del enlace con el lector]

## 7. Solución · Enlace en el título, botón al lado

- Patrón del «enlace extendido»: `::after` con `position: absolute; inset: 0`
- El botón con `position: relative; z-index: 1` queda por encima y sigue siendo clicable
- Nombre del botón: «Guardar Excel desde cero» con texto oculto visualmente (el visible «Guardar» sigue al principio del nombre: control por voz)
- Estado con `aria-pressed`: Guardar / Guardado
- Límite: no se puede seleccionar el texto de la card arrastrando · aceptable para cards cortas

## 8. Error · Se ve primero, pero se alcanza el último

- `order: -1` sube el destacado solo visualmente
- WCAG 2.4.3 Orden del foco y 1.3.2 Secuencia significativa
- [Ejemplo: Tab desde el principio en la vista de cuadrícula · luego cambiar a «Lista»]

## 9. Solución · El código manda el orden

- Orden del DOM = orden de lectura = orden del foco
- `order`, `row-reverse`, `grid-area`, `grid-auto-flow: dense`: cambian solo lo visual
- Si de verdad hace falta otro orden visual en una pantalla, cambiar el DOM para esa vista
- > «Si el CSS reordena, el teclado se desordena.»
- [Ejemplo: «Arreglada» · Tab en ambas vistas · «Explicación»]
