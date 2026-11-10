/**
 * Personas que acompañan el curso. Cada lección parte de la situación de una
 * de ellas: quién es, qué intenta hacer y cómo usa la web.
 */
export interface Persona {
  id: PersonaId
  name: string
  /** Quién es, en una frase. */
  who: string
  /** Cómo usa la web: herramientas y ajustes. */
  how: string
}

export type PersonaId = 'andres' | 'elena' | 'lucia'

export const personas: Record<PersonaId, Persona> = {
  andres: {
    id: 'andres',
    name: 'Andrés',
    who: 'Tiene temblor en las manos. Le cuesta apuntar con el ratón.',
    how: 'Usa sobre todo el teclado: Tab para avanzar, Enter o Espacio para activar.',
  },
  elena: {
    id: 'elena',
    name: 'Elena',
    who: 'Es ciega desde hace diez años.',
    how: 'Usa un lector de pantalla: le lee la página en voz alta y le deja saltar entre títulos, enlaces y celdas.',
  },
  lucia: {
    id: 'lucia',
    name: 'Lucía',
    who: 'Tiene TDAH y dislexia. Le cuesta recordar las instrucciones que desaparecen.',
    how: 'Usa ratón, teclado y móvil. Necesita etiquetas claras y que la información no desaparezca.',
  },
}

export const personaList = Object.values(personas)
