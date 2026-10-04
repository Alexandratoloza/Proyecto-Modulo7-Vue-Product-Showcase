import { createApp } from 'vue'
import App from './App.vue'
import { BootstrapVueNext, IconsPlugin } from 'bootstrap-vue-next'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)

app.use(store)
app.use(BootstrapVueNext)
app.use(IconsPlugin)
app.mount('#app')
