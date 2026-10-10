import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import { existsSync, readFileSync } from 'fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  base: '/random-value-gen/',
  server: {
    https:
      existsSync('./https/dev.crt') && existsSync('./https/dev.key')
        ? {
            cert: readFileSync('./https/dev.crt'),
            key: readFileSync('./https/dev.key'),
          }
        : {},
  },
})
