// Default Imports
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Extra Imports
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

// Default Uses
app.use(router)

// Extra Uses
app.use(ElementPlus)

app.mount('#app')
