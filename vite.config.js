import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    assetsDir: 'public',
  },
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@reducers': path.resolve(__dirname, 'src/reducers'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@services': path.resolve(__dirname, 'src/services'),
    },
  },
})
