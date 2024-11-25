import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { useKakao } from 'vue3-kakao-maps'
useKakao('d31d5a0dc21a3a1cea465737b7e9a175')
const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')
