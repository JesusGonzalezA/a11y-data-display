import { copyFileSync, globSync, mkdirSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

/**
 * GitHub Pages no reescribe rutas: copia `index.html` a cada superficie, a
 * cada página de ejemplo y a cada página de contenido para que respondan 200,
 * y a `404.html` para las direcciones desconocidas.
 */
/** `src/lessons/02-x/02.01-y/README.md` → `2.1`; `src/lessons/02-x/README.md` → `modulo-2`. */
function contentRoutes() {
  const lessons = globSync('src/lessons/*/*/README.md').map((file) => {
    const [module, lesson] = file.split('/')[3].split('-')[0].split('.')
    return `${Number(module)}.${Number(lesson)}`
  })
  const modules = globSync('src/lessons/*/README.md').map(
    (file) => `modulo-${Number(file.split('/')[2].split('-')[0])}`,
  )
  return [
    ...modules.map((path) => `contenido/${path}.html`),
    // La lección tiene una página hija (el guion): se sirve como carpeta.
    ...lessons.flatMap((number) => [
      `contenido/${number}/index.html`,
      `contenido/${number}/presentador.html`,
    ]),
    ...globSync('docs/**/*.md').map((file) => `contenido/${file}/index.html`),
  ]
}

function staticRoutes(): Plugin {
  let outDir = 'dist'
  return {
    name: 'static-routes',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir
    },
    closeBundle() {
      const slugs = globSync('src/lessons/**/*.example.ts').map(
        (file) => readFileSync(file, 'utf8').match(/slug: '([^']+)'/)?.[1],
      )
      const routes = [
        '404.html',
        'diapositivas/index.html',
        'ejemplos/index.html',
        'contenido/index.html',
        ...slugs.filter(Boolean).map((slug) => `ejemplos/${slug}.html`),
        ...contentRoutes(),
      ]
      for (const route of routes) {
        const target = join(outDir, route)
        mkdirSync(dirname(target), { recursive: true })
        copyFileSync(join(outDir, 'index.html'), target)
      }
    },
  }
}

export default defineConfig({
  // En GitHub Pages el sitio vive en `/<repositorio>/`.
  base: process.env.BASE_PATH ?? '/',
  plugins: [react(), staticRoutes()],
})
