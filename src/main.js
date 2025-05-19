import 'bootstrap/dist/css/bootstrap.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import MdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(MdiVue, {
  icons: mdijs,
})
app.use(ElementPlus)

app.mount('#app')
