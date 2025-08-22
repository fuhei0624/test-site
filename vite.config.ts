import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // IMPORTANT: Replace '<your-repo-name>' with the name of your GitHub repository
  base: '/<your-repo-name>/', 
  plugins: [react()],
})
