import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base:"password-generator-vite",
  plugins: [react()],
  test: {
    environment: 'jsdom',
    include: ['**/*.test.jsx', '**/*.test.js'],
    globals: true,
  },
})
