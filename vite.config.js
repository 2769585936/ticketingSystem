import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default function ({ mode, command }) {
  // const env = loadEnv(process.env.NODE_ENV, process.cwd(), ['VITE', 'NODE'])
  // console.log(env)
  // console.log(process.env.NODE_ENV, mode)
  return defineConfig({
    server: {
      port: 8081,
      host: '0.0.0.0',
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          ws: true
        }
      }
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({ resolvers: [ElementPlusResolver({ importStyle: 'sass' })] })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/element/index.scss" as *;
          @use "@/styles/var.scss" as *;`
        }
      }
    }
  })
}
