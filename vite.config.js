import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import purgecss from '@fullhuman/postcss-purgecss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  css: {
    postcss: {
      plugins: [
        purgecss({
          content: [
            './index.html', // Scan the HTML files
            './src/**/*.{js,jsx,ts,tsx}' // Also scan React component files (JSX/TSX)
          ]
        })
      ]
    }
  }
})
