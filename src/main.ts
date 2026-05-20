import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import DataVVue3 from '@kjgl77/datav-vue3'
import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App)

// Register Element Plus Icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router)
app.use(ElementPlus)
// @ts-ignore
app.use(DataVVue3)
app.use(MotionPlugin)

app.mount('#app')
