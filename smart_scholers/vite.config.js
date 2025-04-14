// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // optional
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 👈 Your Express backend
        changeOrigin: true,
        secure: false
      }
    }
  }
})
