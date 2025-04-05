import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/', // isso é MUITO importante: coloque o nome exato do repositório do GitHub
  plugins: [react()],
})
