import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/.netlify/functions': {
        target: 'https://kshirsagarmairwa.netlify.app', // Tumhara live Netlify domain
        changeOrigin: true,
        secure: false,
      }
    }
  }
})