import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


//migrate to custom domain
const base = '/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  base
})
