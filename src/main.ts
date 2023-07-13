import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/base.css'
// import './assets/main.css'

import 'element-plus/theme-chalk/src/message.scss'
import 'virtual:uno.css'

import { i18n } from './i18n'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
