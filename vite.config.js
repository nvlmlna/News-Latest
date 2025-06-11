import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'News-W';

export default defineConfig({
  base: process.env.VITE_BASE_PATH || "/News-W", 
  plugins: [react()],
  server: {
    hmr: {
      overlay: false
    }
  }

});
