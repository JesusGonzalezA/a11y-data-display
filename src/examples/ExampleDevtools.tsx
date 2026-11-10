import { useEffect, useId, useRef, useState } from 'react'
import { examplesBase } from './exampleUrl'
import { FixHighlights } from './FixHighlights'
import type { ExampleDefinition } from './types'
import './example-devtools.css'

interface ExampleDevtoolsProps {
  example: ExampleDefinition
  fixed: boolean
  onFixedChange: (fixed: boolean) => void
}

const reducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

function Chevron() {
  return (
    <svg
      aria-hidden="true"
      className="example-devtools__chevron"
      viewBox="0 0 16 16"
      focusable="false"
    >
      <path d="m3 6 5 5 5-5" />
    </svg>
  )
}

/**
 * Herramienta flotante del curso: elige la versión de la página (con barreras
 * o arreglada) y explica cada cambio. Va después de la página para no alterar
 * su orden de lectura ni de foco.
 */
export function ExampleDevtools({
  example,
  fixed,
  onFixedChange,
}: ExampleDevtoolsProps) {
  const id = useId()
  const [open, setOpen] = useState(false)
  const [highlight, setHighlight] = useState(true)
  const [openFix, setOpenFix] = useState<string>()
  const toggleRef = useRef<HTMLButtonElement>(null)
  const total = example.fixes.length

  // Abrir un cambio lo explica y lo señala en la página.
  const toggleFix = (fixId: string) => {
    if (openFix === fixId) {
      setOpenFix(undefined)
      return
    }
    setOpenFix(fixId)
    document.querySelector(`[data-fix="${fixId}"]`)?.scrollIntoView?.({
      block: 'center',
      behavior: reducedMotion() ? 'auto' : 'smooth',
    })
  }

  // Escape cierra el panel y devuelve el foco al botón que lo abrió.
  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      toggleRef.current?.focus()
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [open])

  return (
    <div className="example-devtools" data-example-devtools="">
      {open && highlight && (
        <FixHighlights fixes={example.fixes} fixed={fixed} located={openFix} />
      )}
      <div
        id={`${id}-panel`}
        className="example-devtools__panel"
        hidden={!open}
      >
        <p className="example-devtools__eyebrow">
          Lección {example.lesson} · {example.lessonTitle}
        </p>
        <p
          className={`example-devtools__state example-devtools__state--${fixed ? 'fixed' : 'barrier'}`}
        >
          {fixed
            ? 'Ahora ves la página arreglada.'
            : 'Ahora ves la página con barreras.'}
        </p>

        <p className="example-devtools__label">Pruébalo</p>
        <ol className="example-devtools__steps">
          {example.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        <p className="example-devtools__label">
          {fixed ? `Barreras arregladas (${total})` : `Barreras (${total})`}
        </p>
        <p className="example-devtools__hint">
          Abre una para ver dónde está, qué pasa y cómo se arregla.
        </p>
        <ol className="example-devtools__fixes">
          {example.fixes.map((fix, index) => {
            const expanded = openFix === fix.id
            return (
              <li key={fix.id} className="example-devtools__fix">
                <button
                  type="button"
                  className="example-devtools__fix-toggle"
                  aria-expanded={expanded}
                  aria-controls={`${id}-fix-${fix.id}`}
                  onClick={() => toggleFix(fix.id)}
                >
                  <span className="example-devtools__badge" aria-hidden="true">
                    {index + 1}
                  </span>
                  <span className="example-devtools__fix-title">
                    {fix.title}
                  </span>
                  <Chevron />
                </button>
                <div
                  id={`${id}-fix-${fix.id}`}
                  className="example-devtools__fix-body"
                  hidden={!expanded}
                >
                  <dl className="example-devtools__details">
                    <dt>Dónde</dt>
                    <dd>{fix.where}</dd>
                    <dt>Qué pasa</dt>
                    <dd>{fix.problem}</dd>
                    <dt>Cómo se arregla</dt>
                    <dd>{fix.solution}</dd>
                  </dl>
                  <p
                    className={`example-devtools__code-label${fixed ? '' : ' example-devtools__code-label--current'}`}
                  >
                    <span aria-hidden="true">✕ </span>
                    Con barreras{fixed ? '' : ' · lo que ves ahora'}
                  </p>
                  <pre className="example-devtools__code">
                    <code>{fix.before}</code>
                  </pre>
                  <p
                    className={`example-devtools__code-label${fixed ? ' example-devtools__code-label--current' : ''}`}
                  >
                    <span aria-hidden="true">✓ </span>
                    Arreglada{fixed ? ' · lo que ves ahora' : ''}
                  </p>
                  <pre className="example-devtools__code">
                    <code>{fix.after}</code>
                  </pre>
                </div>
              </li>
            )
          })}
        </ol>
        <label className="example-devtools__option">
          <input
            type="checkbox"
            checked={highlight}
            onChange={(event) => setHighlight(event.target.checked)}
          />
          Marcar con números dónde está cada barrera
        </label>
        <a className="example-devtools__link" href={examplesBase}>
          Todos los ejemplos
        </a>
      </div>
      <div className="example-devtools__bar">
        {/* biome-ignore lint/a11y/useSemanticElements: un fieldset añadiría una leyenda visible que la barra no necesita */}
        <div
          className="example-devtools__versions"
          role="group"
          aria-label="Versión de la página"
        >
          <button
            type="button"
            className="example-devtools__version example-devtools__version--barrier"
            aria-pressed={!fixed}
            onClick={() => onFixedChange(false)}
          >
            <span aria-hidden="true">✕ </span>
            Con barreras
          </button>
          <button
            type="button"
            className="example-devtools__version example-devtools__version--fixed"
            aria-pressed={fixed}
            onClick={() => onFixedChange(true)}
          >
            <span aria-hidden="true">✓ </span>
            Arreglada
          </button>
        </div>
        <button
          ref={toggleRef}
          type="button"
          className="example-devtools__toggle"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={() => setOpen(!open)}
        >
          Explicación
          <Chevron />
        </button>
      </div>
    </div>
  )
}
