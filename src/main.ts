import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Icon } from '@iconify/vue'

// importar el router
import { router } from './router'

const app = createApp(App)

// registrar componente global
app.component('Icon', Icon)

// inyectar router en la app
app.use(router)

// montar la app en el div #app
app.mount('#app')
