import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base '' => caminhos relativos, funciona em GitHub Pages (project ou user site) e em qualquer host estático
export default defineConfig({
  base: '',
  plugins: [react(), tailwindcss()],
})
