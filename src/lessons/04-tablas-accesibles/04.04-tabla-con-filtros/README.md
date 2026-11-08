# 4.4 Tabla con filtros: resultados y continuidad de la tarea

> Módulo 4 · Tablas accesibles · ejemplo: `/ejemplos/empleo`

## Objetivo

- Presentar filtros con etiquetas comprensibles y persistentes.
- Comunicar el número de resultados sin mover el foco.
- Explicar la ausencia de coincidencias y recuperar la lista completa.

## Situación

- **Persona:** Lucía — TDAH y dislexia; necesita información que no desaparezca. (También Elena, con lector.)
- **Tarea:** ver ofertas de diseño en remoto y, si no hay, volver a ver todas.

## Errores comunes → solución

| Error | Qué le pasa a Lucía | Solución |
| --- | --- | --- |
| Placeholder y primera opción como etiqueta | Olvida qué filtra cada campo | `<label>` visible; «Todas» como valor |
| El foco salta al título de resultados en cada cambio | Pierde lo que escribe; Elena salta de sitio | Foco estable en el filtro |
| Sin recuento | No sabe cuántas ofertas quedan | `role="status"`: «Mostrando 3 de 8 ofertas.» |
| Tabla vacía sin explicación | Cree que la página falla; tiene que deshacer a mano | Mensaje con los filtros + «Quitar los filtros» y foco al buscador |

## Ejemplo

- Página: «Ofertas de empleo» de Brote Empleo.
- Demo:
  1. Escribir «diseñadora»: el foco se va.
  2. Elegir Remoto: la etiqueta desaparece.
  3. «chef» + Remoto: tabla vacía.
  4. **Aplicar arreglo** y repetir con lector.
- Código: `examples/JobBoard/`.

## Conceptos clave

- Filtrar no es navegar: foco estable y resultado anunciado (WCAG 3.2.2, 4.1.3).
- Recuento «N de M» visible y en región de estado.
- Estado vacío = explicación + salida en un paso.
- Si el control con foco desaparece, mover el foco a un sitio con sentido.

## Pruebas

- Automatizadas (`JobBoard.test.tsx`): sin arreglo, sin etiqueta, foco que salta y pierde letras, tabla vacía sin salida; con arreglo, nombres de campos, foco estable, recuento en `status`, mensaje sin resultados, «Quitar los filtros» con foco al buscador y axe.
- Manuales pendientes: anuncio del recuento con NVDA, JAWS y VoiceOver; frecuencia de anuncios al escribir rápido.

## Fuentes

- [WCAG 4.1.3 Mensajes de estado](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)
- [WCAG 3.2.2 Al introducir datos](https://www.w3.org/WAI/WCAG22/Understanding/on-input.html) · [WCAG 3.3.2 Etiquetas o instrucciones](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)
- [HTML: elemento `search`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-search-element)
- [MagentaA11y: campo de búsqueda](https://www.magentaa11y.com/checklist-web/search-input/)
