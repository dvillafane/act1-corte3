import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"https://dvillafane.github.io/act1-corte3",
  build: {chunkSizeWarningLimit: 1600, }
})
