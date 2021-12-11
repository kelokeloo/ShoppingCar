import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // server:{
  //   proxy: {
  //     '/api/Goodslist': {
  //       target: 'http://localhost:3000/api/Goodslist',	//实际请求地址
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     },
  //   }
  // }
})
