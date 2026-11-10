import { copyFileSync, globSync, mkdirSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

/**
 * GitHub Pages no reescribe rutas: copia `index.html` a cada superficie y a
 * cada página de ejemplo para que respondan 200, y a `404.html` para el resto
 * (contenido Markdown y direcciones desconocidas).
 */
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
