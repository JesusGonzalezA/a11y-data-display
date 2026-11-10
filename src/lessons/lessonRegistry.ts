import type { ReactElement } from 'react'
import { slides as welcomeSlides } from './01-intro/01.01-bienvenida-y-presentacion/slides'
import { slides as objectivesSlides } from './01-intro/01.02-objetivos-y-contenidos/slides'
import { slides as iconSlides } from './02-iconografia-y-ayuda-contextual/02.01-iconografia-y-nombre-accesible/slides'
import { slides as tooltipSlides } from './02-iconografia-y-ayuda-contextual/02.02-tooltip/slides'
import { slides as listSlides } from './03-listas-cards-y-orden-de-lectura/03.01-listas/slides'
import { slides as cardSlides } from './03-listas-cards-y-orden-de-lectura/03.02-cards-y-orden-de-lectura/slides'
import { slides as simpleTableSlides } from './04-tablas-accesibles/04.01-tabla-simple/slides'
import { slides as twoAxisSlides } from './04-tablas-accesibles/04.02-tabla-con-doble-eje/slides'
import { slides as sortableSlides } from './04-tablas-accesibles/04.03-tabla-ordenable/slides'
import { slides as filterSlides } from './04-tablas-accesibles/04.04-tabla-con-filtros/slides'
import { slides as closingSlides } from './04-tablas-accesibles/04.05-como-continuar-aprendiendo/slides'

export interface CourseLesson {
  /** Número humano: `2.1`. */
  number: string
  title: string
  /** Carpeta dentro de `src/lessons/<módulo>/`. */
  folder: string
  slides: ReactElement[]
}

export interface CourseModule {
  number: number
  title: string
  /** Carpeta dentro de `src/lessons/`. */
  folder: string
  lessons: CourseLesson[]
}

/** Única fuente del orden del curso: módulos, lecciones y slides. */
export const courseModules: CourseModule[] = [
  {
    number: 1,
    title: 'Introducción',
    folder: '01-intro',
    lessons: [
      {
        number: '1.1',
        title: 'Bienvenida y presentación',
        folder: '01.01-bienvenida-y-presentacion',
        slides: welcomeSlides,
      },
      {
        number: '1.2',
        title: 'Objetivos y contenidos',
        folder: '01.02-objetivos-y-contenidos',
        slides: objectivesSlides,
      },
    ],
  },
  {
    number: 2,
    title: 'Iconografía y ayuda contextual',
    folder: '02-iconografia-y-ayuda-contextual',
    lessons: [
      {
        number: '2.1',
        title: 'Iconografía: significado y nombre accesible',
        folder: '02.01-iconografia-y-nombre-accesible',
        slides: iconSlides,
      },
      {
        number: '2.2',
        title: 'Tooltip: ayuda contextual y límites',
        folder: '02.02-tooltip',
        slides: tooltipSlides,
      },
    ],
  },
  {
    number: 3,
    title: 'Listas, cards y orden de lectura',
    folder: '03-listas-cards-y-orden-de-lectura',
    lessons: [
      {
        number: '3.1',
        title: 'Listas: expresar relaciones entre elementos',
        folder: '03.01-listas',
        slides: listSlides,
      },
      {
        number: '3.2',
        title: 'Cards: estructura, acciones y orden de lectura',
        folder: '03.02-cards-y-orden-de-lectura',
        slides: cardSlides,
      },
    ],
  },
  {
    number: 4,
    title: 'Tablas accesibles',
    folder: '04-tablas-accesibles',
    lessons: [
      {
        number: '4.1',
        title: 'Tabla simple: título, encabezados y celdas',
        folder: '04.01-tabla-simple',
        slides: simpleTableSlides,
      },
      {
        number: '4.2',
        title: 'Tabla con doble eje: encabezados de fila y columna',
        folder: '04.02-tabla-con-doble-eje',
        slides: twoAxisSlides,
      },
      {
        number: '4.3',
        title: 'Tabla ordenable: controles y dirección de ordenación',
        folder: '04.03-tabla-ordenable',
        slides: sortableSlides,
      },
      {
        number: '4.4',
        title: 'Tabla con filtros: resultados y continuidad de la tarea',
        folder: '04.04-tabla-con-filtros',
        slides: filterSlides,
      },
      {
        number: '4.5',
        title: 'Cómo continuar aprendiendo',
        folder: '04.05-como-continuar-aprendiendo',
        slides: closingSlides,
      },
    ],
  },
]

export const courseLessons = courseModules.flatMap((module) =>
  module.lessons.map((lesson) => ({ ...lesson, module })),
)

export interface LessonSlide {
  lessonNumber: string
  slide: ReactElement
}

/** Slides en orden, con el número de su lección. */
export const lessonSlides: LessonSlide[] = courseLessons.flatMap((lesson) =>
  lesson.slides.map((slide) => ({ lessonNumber: lesson.number, slide })),
)
