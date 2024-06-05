import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { lazyImg } from '@/utils/index'
import '@/styles/index.scss'

import piniaPlugin from 'pinia-plugin-persistedstate'

const app = createApp(App)

const pinia = createPinia()

pinia.use(piniaPlugin)
app.use(pinia)
app.use(router)
app.use(lazyImg)

app.mount('#app')
