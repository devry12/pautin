import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue({
    script: {
      defineModel: true,
      propsDestructure: true
    }
  })],
  resolve: {
    alias: {
      '@': '/src',
      'vue-router': 'vue-router/dist/vue-router.esm-bundler.js'
    }
  }
})
