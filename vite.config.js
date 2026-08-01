import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


//configured to fix github routing page
const base = '/My-Portfolio-Website'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  base
})
