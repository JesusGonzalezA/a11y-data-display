# 3.1 Listas: expresar relaciones entre elementos

> Módulo 3 · Listas, cards y orden de lectura · ejemplo: `/ejemplos/casa-rural`

## Objetivo

- Elegir `ul`, `ol` o `dl` según la relación entre los datos.
- Explicar qué aporta la estructura: pertenencia, cantidad, posición, pares.
- Reconocer cuándo el orden tiene significado.

## Situación

- **Persona:** Elena — ciega, usa lector de pantalla.
- **Tarea:** saber qué ofrece una casa rural, cómo se llega y a qué hora puede entrar.

## Errores comunes → solución

| Error | Qué le pasa a Elena | Solución |
| --- | --- | --- |
| Servicios como párrafos con «•» | No sabe que forman un grupo ni cuántos son | `<ul>` |
| Pasos en `div` con número de CSS | No sabe en qué paso está | `<ol>` |
| Etiquetas y valores en columnas separadas | Oye las etiquetas y después los valores | `<dl>` con `dt` + `dd` por par |

## Ejemplo

- Página: ficha de la Casa rural El Roble.
- Demo:
  1. Lista de listas del lector (NVDA: L; VoiceOver: rotor): no hay ninguna.
  2. Leer «Cómo llegar» y «Datos del alojamiento» con flecha abajo.
  3. Pulsar **Arreglada** y repetir.
- Código: `examples/RuralHouse/`.

## Conceptos clave

- ¿Cambia el significado si cambio el orden? Sí → `ol`. No → `ul`.
- Pares nombre–valor → `dl`. Varias dimensiones → tabla.
- El estilo es libre; la estructura no.
- Con `list-style: none`, Safari puede dejar de exponer la lista: `role="list"` si es importante.

## Pruebas

- Automatizadas (`RuralHouse.test.tsx`): sin arreglo, ninguna lista y etiquetas separadas de valores; con arreglo, `ul` de 5, `ol` de 4, pares `dt`/`dd` en orden y axe.
- Manuales pendientes: anuncio de listas con NVDA y VoiceOver (incluido Safari con `list-style: none`).

## Fuentes

- [HTML: contenido de agrupación (`ul`, `ol`, `dl`)](https://html.spec.whatwg.org/multipage/grouping-content.html)
- [WCAG 1.3.1 Información y relaciones](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [WCAG 1.3.2 Secuencia significativa](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html)
- [MagentaA11y: listas](https://www.magentaa11y.com/checklist-web/list/)
