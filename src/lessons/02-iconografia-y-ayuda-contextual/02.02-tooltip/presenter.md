# Notas · 2.2 Tooltip: ayuda contextual y límites

≈ 15 min · demo: correo

## 1. Lección

- Definición en una frase: texto breve, aparece con foco o puntero, nombra o describe
- Viene de la lección anterior: el botón de icono ya tiene nombre… pero quien ve el icono tampoco sabe qué hace
- Tres ideas: cuándo usarlo · nombre frente a descripción · cómo debe comportarse

## 2. ¿Tooltip o texto visible?

- El tooltip es ayuda «escondida»: depende de una acción previa
- Táctil: no hay hover; tocar activa · el tooltip prácticamente no existe
- Regla práctica: si equivocarse cuesta algo, el texto va visible
- Contenido interactivo dentro (enlaces, botones) → no es tooltip: diálogo no modal o desplegable (disclosure)
- Alternativa en móvil para ayudas opcionales: un botón de información que muestra el texto al pulsarlo (toggletip)
- > «Si la persona lo necesita para decidir, no lo escondas detrás de un gesto.»

## 3. Nombre y descripción no son lo mismo

- Nombre: qué es / qué hace · se anuncia primero · lo que la persona dice con control por voz
- Descripción: extra · se anuncia después, a veces con pausa · algunos lectores permiten omitirla
- Error típico: el mismo texto en `aria-label` y en el tooltip con `aria-describedby` → se oye dos veces
- APG define el tooltip como descripción (`aria-describedby`); cuando el tooltip es la única etiqueta de un botón de icono, se usa `aria-labelledby`
- > «El nombre tiene que entenderse solo, sin el tooltip.»

## 4. Situación · Andrés ordena su correo

- Teclado · temblor → apuntar con el ratón le cuesta
- No reconoce todos los iconos: archivar y papelera se parecen
- Quiere saber si lo que borra se puede recuperar
- [Ejemplo: abrir «Usar la barra del correo con barreras»]

## 5. Error · El tooltip solo aparece con el ratón

- `mouseenter` sin `focus` → con Tab no aparece nada
- `title`: mismo problema; tampoco en táctil; el lector a veces lo lee y a veces no
- [Ejemplo: Tab por los tres botones · no hay ayuda · luego pasar el ratón]

## 6. Solución · Mostrarlo con el foco y con el puntero

- `focus`/`blur` además de `mouseenter`/`mouseleave`
- El foco se queda en el botón: el tooltip nunca recibe foco
- `role="tooltip"` + `aria-labelledby` → el texto visible es el nombre: una sola fuente
- Comprobar: el nombre «Archivar» se entiende sin ver el icono
- [Ejemplo: «Aplicar arreglo» · Tab de nuevo]

## 7. Error · Se cierra al intentar leerlo

- Hueco entre botón y tooltip · el `mouseleave` está solo en el botón
- Temblor, lupa de pantalla, ampliación: hay que poder mover el puntero encima
- Tooltip que tapa contenido y no se quita
- [Ejemplo: sin arreglo, llevar el ratón al tooltip → desaparece · pulsar Escape → nada]

## 8. Solución · Descartable, recorrible y persistente

- WCAG 1.4.13 (AA): tres condiciones
- Descartable: Escape, sin mover foco ni puntero
- Recorrible: el puntero puede ir al tooltip · eventos en el contenedor común
- Persistente: no desaparece con un temporizador
- > «Abrir, leer y cerrar tienen que estar en manos de la persona, no del temporizador.»
- [Ejemplo: con arreglo, mover el ratón al tooltip · Escape]

## 9. Error · Información esencial escondida en un «?»

- Un `span` con hover: no es focusable, no tiene nombre, no existe en táctil
- El dato (30 días) es necesario para decidir
- [Ejemplo: sin arreglo, intentar llegar al «?» con Tab]

## 10. Solución · Lo esencial, visible y asociado como descripción

- Texto visible junto a la barra
- `aria-describedby` desde el botón de la papelera: nombre + descripción
- Lector: «Mover a la papelera, botón, Los mensajes de la papelera se borran…»
- [Ejemplo: «Ver cambios» · revisar los tres arreglos]

## 11. Resumen · Antes de añadir un tooltip

- Cuatro preguntas en orden
- Patrón APG Tooltip: «work in progress», sin consenso del grupo de trabajo · no hay ejemplo oficial
- El soporte de `aria-describedby` y de `role="tooltip"` varía entre lectores: probar con NVDA, VoiceOver y en móvil
- > «Un buen tooltip es un recordatorio, nunca la única explicación.»
