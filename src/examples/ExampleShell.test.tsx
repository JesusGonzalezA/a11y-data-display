import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { afterEach, describe, expect, it } from 'vitest'
import { ExampleShell } from './ExampleShell'
import type { ExampleDefinition } from './types'

const example: ExampleDefinition = {
  slug: 'prueba',
  name: 'Página de prueba',
  lesson: '9.9',
  lessonTitle: 'Lección de prueba',
  title: 'Página de prueba · Sitio',
  steps: ['Pulsa el botón.', 'Escucha su nombre.'],
  fixes: [
    {
      id: 'name',
      title: 'El botón no tiene nombre',
      where: 'Botón principal.',
      problem: 'Sin texto no se sabe qué hace.',
      solution: 'El botón dice «Guardar».',
      before: '<button></button>',
      after: '<button>Guardar</button>',
    },
  ],
  Page: ({ fixed }) => (
    <main>
      <h1>Prueba</h1>
      <button type="button" data-fix="name">
        {fixed ? 'Guardar' : 'Botón'}
      </button>
    </main>
  ),
}

const barrier = () => screen.getByRole('button', { name: 'Con barreras' })
const fixedVersion = () => screen.getByRole('button', { name: 'Arreglada' })
const explanation = () => screen.getByRole('button', { name: 'Explicación' })

afterEach(() => window.history.replaceState(null, '', '/'))

describe('Herramienta flotante de las páginas de ejemplo', () => {
  it('abre con barreras y cambia de versión con teclado', async () => {
    const user = userEvent.setup()
    window.history.replaceState(null, '', '/ejemplos/prueba#seccion')
    render(<ExampleShell example={example} />)
    expect(
      screen.getByRole('group', { name: 'Versión de la página' }),
    ).toBeInTheDocument()
    expect(barrier()).toHaveAttribute('aria-pressed', 'true')
    expect(fixedVersion()).toHaveAttribute('aria-pressed', 'false')
    expect(screen.getByRole('button', { name: 'Botón' })).toBeInTheDocument()
    expect(document.title).toBe('Página de prueba · Sitio')

    fixedVersion().focus()
    await user.keyboard('[Enter]')
    expect(fixedVersion()).toHaveAttribute('aria-pressed', 'true')
    expect(barrier()).toHaveAttribute('aria-pressed', 'false')
    expect(fixedVersion()).toHaveFocus()
    expect(screen.getByRole('button', { name: 'Guardar' })).toBeInTheDocument()
    expect(window.location.search).toBe('?arreglo=1')
    expect(window.location.hash).toBe('#seccion')

    await user.tab({ shift: true })
    await user.keyboard('[Space]')
    expect(barrier()).toHaveAttribute('aria-pressed', 'true')
    expect(window.location.search).toBe('')
  })

  it('respeta el estado de la URL', () => {
    window.history.replaceState(null, '', '/ejemplos/prueba?arreglo=1')
    render(<ExampleShell example={example} />)
    expect(fixedVersion()).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'Guardar' })).toBeInTheDocument()
  })

  it('explica qué probar y numera cada barrera en la página', async () => {
    const user = userEvent.setup()
    render(<ExampleShell example={example} />)
    expect(explanation()).toHaveAttribute('aria-expanded', 'false')
    expect(document.querySelector('[data-highlight]')).toBeNull()

    await user.click(explanation())
    expect(explanation()).toHaveAttribute('aria-expanded', 'true')
    const panel = document.getElementById(
      explanation().getAttribute('aria-controls') || '',
    )
    expect(panel).toBeVisible()
    expect(panel).toHaveTextContent('Ahora ves la página con barreras.')
    expect(screen.getByText('Pulsa el botón.')).toBeVisible()
    expect(screen.getByText('Barreras (1)')).toBeVisible()
    await waitFor(() =>
      expect(document.querySelectorAll('[data-highlight="name"]')).toHaveLength(
        1,
      ),
    )
    const overlay = document.querySelector('.fix-highlights')
    expect(overlay).toHaveAttribute('aria-hidden', 'true')
    expect(overlay).toHaveTextContent('1')
    expect(document.querySelector('[data-highlight="name"]')).toHaveClass(
      'fix-highlights__box--barrier',
    )

    await user.click(fixedVersion())
    expect(panel).toHaveTextContent('Ahora ves la página arreglada.')
    expect(screen.getByText('Barreras arregladas (1)')).toBeVisible()
    expect(document.querySelector('[data-highlight="name"]')).toHaveClass(
      'fix-highlights__box--fixed',
    )

    await user.click(
      screen.getByRole('checkbox', {
        name: 'Marcar con números dónde está cada barrera',
      }),
    )
    expect(document.querySelector('[data-highlight]')).toBeNull()
  })

  it('abre una barrera para explicarla y señalarla en la página', async () => {
    const user = userEvent.setup()
    render(<ExampleShell example={example} />)
    await user.click(explanation())
    const fix = screen.getByRole('button', {
      name: 'El botón no tiene nombre',
    })
    expect(fix).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByText('Sin texto no se sabe qué hace.')).not.toBeVisible()

    await user.click(fix)
    expect(fix).toHaveAttribute('aria-expanded', 'true')
    const body = document.getElementById(
      fix.getAttribute('aria-controls') || '',
    )
    expect(body).toHaveTextContent('DóndeBotón principal.')
    expect(body).toHaveTextContent('Qué pasaSin texto no se sabe qué hace.')
    expect(body).toHaveTextContent('Cómo se arreglaEl botón dice «Guardar».')
    expect(body).toHaveTextContent('Con barreras · lo que ves ahora')
    expect(screen.getByText('<button>Guardar</button>')).toBeVisible()
    await waitFor(() =>
      expect(document.querySelector('[data-highlight="name"]')).toHaveClass(
        'fix-highlights__box--located',
      ),
    )

    await user.click(fixedVersion())
    expect(body).toHaveTextContent('Arreglada · lo que ves ahora')

    await user.click(fix)
    expect(fix).toHaveAttribute('aria-expanded', 'false')
    expect(document.querySelector('[data-highlight="name"]')).not.toHaveClass(
      'fix-highlights__box--located',
    )
  })

  it('cierra el panel con Escape y devuelve el foco', async () => {
    const user = userEvent.setup()
    render(<ExampleShell example={example} />)
    await user.click(explanation())
    await user.tab()
    await user.keyboard('[Escape]')
    expect(explanation()).toHaveAttribute('aria-expanded', 'false')
    expect(explanation()).toHaveFocus()
  })

  it('va después de la página en el orden de foco y no añade infracciones', async () => {
    const user = userEvent.setup()
    const { container } = render(<ExampleShell example={example} />)
    await user.tab()
    expect(screen.getByRole('button', { name: 'Botón' })).toHaveFocus()
    await user.tab()
    expect(barrier()).toHaveFocus()
    await user.click(explanation())
    expect(await axe(container)).toHaveNoViolations()
    expect(screen.getAllByRole('heading')).toHaveLength(1)
  })
})
