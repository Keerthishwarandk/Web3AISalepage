import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
     base: '/Web3AISalepage/', // replace with your repo name
  plugins: [react(),tailwindcss(),],
})
