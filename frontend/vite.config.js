import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   build: {
    outDir: 'frontend/dist',
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom', 'react-router-dom','plugin-react'],
    },
  },
})
