import type { ComponentType } from 'react'

/** Un cambio concreto que el conmutador aplica sobre la página de ejemplo. */
export interface ExampleFix {
  /** Valor de `data-fix` en los elementos que cambian con este arreglo. */
  id: string
  /** La barrera en lenguaje cotidiano; sirve con y sin arreglo. */
  title: string
  /** Dónde está, en lenguaje de la página. Una frase. */
  where: string
  /** Qué pasa sin arreglo y a quién. Una o dos frases. */
  problem: string
  /** Qué cambia con el arreglo. Una o dos frases. */
  solution: string
  before: string
  after: string
}

export interface ExamplePageProps {
  fixed: boolean
}

export interface ExampleDefinition {
  /** Segmento de la URL: `/ejemplos/<slug>`. */
  slug: string
  /** Qué página es, para el índice de ejemplos. */
  name: string
  lesson: string
  lessonTitle: string
  /** Título del documento, como lo tendría la web real. */
  title: string
  /** Pasos cortos para notar las barreras en la página. */
  steps: string[]
  fixes: ExampleFix[]
  Page: ComponentType<ExamplePageProps>
}
