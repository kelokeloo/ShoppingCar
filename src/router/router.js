import { createRouter, createWebHashHistory } from 'vue-router'

import GoodsList from '../components/GoodsList.vue'
import GoodDetail from '../components/GoodDetail.vue'

const routes = [
  {path:'/', component: GoodsList},
  {path:'/detail/:id', component: GoodDetail}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router