import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxying requests starting with /api
      '/api': {
        target: 'http://localhost:3001', // Your backend server address
        changeOrigin: true, // Recommended for virtual hosted sites
        // Optional: You might not need rewrite if your backend expects /api prefix
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
