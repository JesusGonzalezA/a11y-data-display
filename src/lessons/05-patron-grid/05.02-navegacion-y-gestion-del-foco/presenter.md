# Notas · 5.2 Navegación por celdas y gestión del foco

≈ 12 min · demo: pistas

## 1. Lección

- Ahora sí hace falta un grid: veinte botones en filas y columnas
- Tab entra y sale · flechas dentro
- > «El grid es un solo control para Tab, por muchas celdas que tenga.»

## 2. Las teclas de un grid

- Las que define WAI-ARIA APG: flechas, Inicio, Fin, Ctrl+Inicio, Ctrl+Fin
- Opcionales: Re Pág y Av Pág en grids largos
- Bordes: el foco se queda; no salta a la fila siguiente
- En Mac no hay Inicio ni Fin en el teclado corto: Fn+flecha izquierda y derecha

## 3. Solo una celda con tabindex 0

- Técnica: «roving tabindex» (tabindex itinerante)
- `0` = entra con Tab · `-1` = solo con `focus()` desde el código
- El 0 viaja con el foco → al volver, el grid recuerda la celda
- Alternativa: `aria-activedescendant`; no la usamos aquí

## 4. Situación · Andrés reserva una pista

- 5 horas × 4 pistas = 20 botones
- Tarea: 12:00 y después «Ver mis reservas»
- [Ejemplo: abrir «Con barreras: reservar una pista» · Tab hasta las 12:00]

## 5. Error · Veinte paradas de Tab

- Cada botón en el orden de Tab: correcto en una tabla pequeña, agotador aquí
- Con temblor, cada pulsación cuesta
- Para salir hacia el enlace: recorrerlos todos

## 6. Solución · Una sola parada de Tab

- Un `tabindex="0"`, diecinueve `-1`
- Las horas ocupadas también reciben foco (`aria-disabled`), para no dejar huecos en el recorrido
- [Ejemplo: «Arreglada» · Tab · Tab · Mayús+Tab]

## 7. Error · Las flechas no hacen nada

- `role="grid"` sin `keydown`: la promesa sin cumplir de la lección anterior
- La flecha desplaza la página

## 8. Solución · Las flechas mueven el foco

- Una función: tecla + posición → celda de destino · límites incluidos
- `preventDefault()` solo para las teclas que el grid usa
- Enter y Espacio no se tocan: son del botón
- En el ejemplo, las cabeceras no reciben foco: cada botón ya dice su hora y su pista
- [Ejemplo: flechas · Fin · Ctrl+Inicio · intentar pasar de un borde]

## 9. Error · Nada dice que se usa con flechas

- Visualmente es una tabla de botones; quien usa teclado seguiría con Tab
- El lector sí anuncia «cuadrícula», pero no todo el mundo sabe qué implica

## 10. Solución · Una instrucción visible

- Texto corto, antes del grid · `aria-describedby` lo une
- > «Si capturas una tecla, explícalo.»
- [Ejemplo: lector activo · entrar en el grid y escuchar la descripción · «Explicación»]
