import { createApp } from 'vue'
import App from './App.vue'


import router from './router/router.js'




// 导入全局样式
import './CSS/global.scss'

// 导入vuex
import store from './Vuex/vuex'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
