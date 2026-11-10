# Notas · 5.1 Cuándo elegir una tabla y cuándo un grid

≈ 5 min · demo: horario

## 1. Lección

- Último módulo: el patrón más potente y el más caro
- Grid = tabla que se recorre con flechas, celda a celda
- > «Un grid no es una tabla mejor. Es otra cosa, y hay que programarla entera.»

## 2. Tabla o grid

- Tabla: leer y comparar · el navegador y el lector hacen el trabajo
- Grid: actuar sobre muchas celdas · una parada de Tab · el teclado lo programas tú
- Ordenar y filtrar (módulo 4) no convierten una tabla en grid
- Coste: en modo foco, el lector deja de usar sus atajos de tabla
- `display: grid` es CSS: no cambia lo que el lector recibe
- `role="grid"` es una promesa de teclado
- Cards en cuadrícula → lista (3.2) · calendario para elegir un día, hoja de horas → grid

## 3. Situación · Andrés mira el horario del gimnasio

- Teclado · tabla de solo lectura con un enlace después
- [Ejemplo: abrir «Con barreras: consultar el horario» · Tab desde el menú]

## 4. Error · Cada celda es una parada de Tab

- `tabindex="0"` en todas las celdas «para que sean accesibles»
- 16 pulsaciones para cruzar una tabla en la que no se puede hacer nada
- El foco es para los controles, no para el texto: el lector ya lee las celdas sin foco
- [Ejemplo: contar las pulsaciones hasta «Reservar una clase»]

## 5. Solución · Las celdas de texto no reciben el foco

- Quitar `tabindex` · Tab: menú → enlace
- Elena sigue leyendo cada celda con sus atajos de tabla

## 6. Error · Una tabla que dice ser un grid

- `role="grid"` copiado de una librería o de un ejemplo
- El lector anuncia «cuadrícula» y puede pasar a modo foco: espera flechas programadas
- Las flechas no hacen nada → la tabla parece rota
- [Ejemplo: con el lector, entrar en la tabla y pulsar las flechas]

## 7. Solución · Si solo se lee, es una tabla

- Sin rol: `table`, `caption`, `th scope` (módulo 4)
- Pregunta de decisión: ¿la persona tiene que actuar en muchas celdas?
- > «Primera regla de ARIA: si el HTML ya lo hace, no uses ARIA.»
- [Ejemplo: «Arreglada» · repetir con Tab y con el lector · «Explicación»]
