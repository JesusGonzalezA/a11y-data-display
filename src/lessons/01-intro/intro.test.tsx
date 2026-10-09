import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { afterEach, describe, expect, it } from 'vitest'
import { lessonSlides } from '../lessonRegistry'
import { slides as welcomeSlides } from './01.01-bienvenida-y-presentacion/slides'
import { slides as objectivesSlides } from './01.02-objetivos-y-contenidos/slides'

afterEach(cleanup)

const introSlides = [...welcomeSlides, ...objectivesSlides]

describe('Introducción del curso', () => {
  it('registra cada slide de M1 una vez, al principio y en orden', () => {
    const registered = lessonSlides.filter(({ lessonNumber }) =>
      ['1.1', '1.2'].includes(lessonNumber),
    )
    expect(registered.map(({ slide }) => slide)).toEqual(introSlides)
    expect(lessonSlides.slice(0, introSlides.length)).toEqual(registered)
    expect(new Set(introSlides.map(({ key }) => key)).size).toBe(
      introSlides.length,
    )
  })

  it.each(introSlides.map((slide) => [slide.key, slide] as const))(
    'expone un título de sección y pasa las reglas de axe en %s',
    async (_, slide) => {
      const { container } = render(<main>{slide}</main>)
      const heading = screen.getByRole('heading', { level: 2 })
      expect(heading).not.toHaveTextContent(/^\s*$/)
      expect(heading).not.toHaveAttribute('tabindex')
      expect(await axe(container)).toHaveNoViolations()
    },
  )

  it('permite llegar con Tab al enlace de materiales sin enfocar los títulos', async () => {
    const user = userEvent.setup()
    render(<main>{introSlides}</main>)
    const link = screen.getByRole('link', {
      name: 'Consultar el mapa y los materiales del curso',
    })
    expect(link).toBeVisible()
    expect(link).toHaveAttribute(
      'href',
      'https://github.com/JesusGonzalezA/a11y-data-display#readme',
    )
    await user.tab()
    expect(link).toHaveFocus()
  })
})
