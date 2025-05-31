import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'News-W';

export default defineConfig({
  base: `/${repoName}/`, 
  plugins: [react()],
  server: {
    hmr: {
      overlay: false
    }
  }
});
