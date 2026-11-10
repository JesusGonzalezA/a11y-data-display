# Módulo 4. Tablas accesibles

**≈ 45 minutos.** De la tabla más simple a la tabla interactiva: título, encabezados, doble eje, ordenación y filtros.

| Lección | Persona y tarea | Errores → solución | Ejemplo |
| --- | --- | --- | --- |
| [4.1 Tabla simple: título, encabezados y celdas](./04.01-tabla-simple/README.md) | Elena (lector) revisa sus pedidos | Sin `caption`, `td` como encabezado, recorte → `caption`, `th scope="col"`, región desplazable | `pedidos` |
| [4.2 Tabla con doble eje: encabezados de fila y columna](./04.02-tabla-con-doble-eje/README.md) | Elena compara tarifas | Características en `td`, marcas sin texto → `th scope="row"`, texto oculto | `tarifas` |
| [4.3 Tabla ordenable: controles y dirección de ordenación](./04.03-tabla-ordenable/README.md) | Andrés (teclado) busca a su hermana | `onclick` en `th`, flecha como único estado, cambio silencioso → botón, `aria-sort`, `role="status"` | `carrera` |
| [4.4 Tabla con filtros: resultados y continuidad de la tarea](./04.04-tabla-con-filtros/README.md) | Lucía busca trabajo | Placeholder, foco que salta, sin recuento, vacío → `label`, foco estable, recuento, salida | `empleo` |
| [4.5 Cómo continuar aprendiendo](./04.05-como-continuar-aprendiendo/README.md) | Repaso de las tres personas y cierre del curso | — | — |

## Materiales

| Material | Ruta local (`pnpm dev`) |
| --- | --- |
| Diapositivas | `/diapositivas/#/modulo-4` |
| Ejemplos | `/ejemplos/#modulo-4` |
| Contenido | `/contenido/modulo-4` y `/contenido/<lección>` |
| Notas del presentador | `/contenido/<lección>/presentador` |

## Evidencia y límites

- Los tests comprueban roles (`table`, `columnheader`, `rowheader`), nombres, `aria-sort`, regiones de estado y foco; no lo que anuncia cada lector.
- JSDOM no calcula CSS: reflujo y recortes se revisan en navegador.
- Fuera de alcance: encabezados agrupados o multinivel.

## Matriz manual pendiente

| Entorno | Qué revisar |
| --- | --- |
| NVDA y JAWS con Chrome/Firefox, VoiceOver con Safari | Encabezados de fila y columna; `aria-sort`; mensajes de estado |
| Teclado | Ordenar con Enter/Espacio; filtros sin pérdida de foco; zonas desplazables |
| Zoom 400 % / 320 px | `pedidos`, `tarifas`, `carrera`, `empleo` sin contenido inalcanzable |
| Autor | Revisión visual y ensayo |
