import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PageTitle from "@/components/flagment/PageTitle.vue"




const app = createApp(App)
app.use(store)
app.use(router)
app.component('PageTitle' ,PageTitle)
app.mount('#app')



