import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // IMPORTANT: Set the base path to your repository name
  base: '/test-site/', 
  plugins: [react()],
})