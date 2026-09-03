import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this site from https://<username>.github.io/<repo-name>/
  // so all asset paths need that repo name as a prefix. Change this if you
  // rename the repository (must match the exact capitalization).
  base: '/Doffee/',
})
