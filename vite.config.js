import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Home + página da Black Friday (só para anúncios): /black
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        black: fileURLToPath(new URL('./black/index.html', import.meta.url)),
      },
    },
  },
})
