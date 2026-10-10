import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import { readFileSync } from 'fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  base: '/random-value-gen/',
  server: {
    https: {
      cert: readFileSync('./https/dev.crt'),
      key: readFileSync('./https/dev.key'),
    },
  },
})
