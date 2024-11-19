import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixin from './mixins'
import i18n from './plugin/i18n'
import PageTitle from "@/components/flagment/PageTitle.vue"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


const app = createApp(App)
app.use(store)
app.use(router)
app.use(i18n)
app.mixin(mixin)
app.component('PageTitle' ,PageTitle)
app.mount('#app')



