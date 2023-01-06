import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@components": path.resolve(__dirname, "src/components"),
      "@redux": path.resolve(__dirname, "src/redux"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@apis": path.resolve(__dirname, "src/apis"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@layout": path.resolve(__dirname, "src/layout"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@router": path.resolve(__dirname, "src/index"),
      "@themes": path.resolve(__dirname, "src/themes"),
      "@wasm": path.resolve(__dirname, "src/wasm"),
    },
  },
  server: {
    port: 2333,
    open: true,
    host: true,
    proxy: {
      '/api': {
        // TODO set your api server host
        target: ''
      }
    }
  }
})
