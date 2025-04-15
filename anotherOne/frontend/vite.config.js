import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: { // add this to resolve the path (where u can use @ to get lib instead of ./src/)
  //   alias: {
  //     '@': path.resolve('./src/')
  //   }
  // },
  server: {
    proxy: {
      '/products': { // this line is to redirect any request with /products to (look down MF)
        target:'http://localhost:3000' // this
      }
    }
  }
})