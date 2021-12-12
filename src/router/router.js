import { createRouter, createWebHashHistory } from 'vue-router'

import GoodsList from '../components/GoodsList.vue'
import GoodDetail from '../components/GoodDetail.vue'
import ShopCar from '../components/ShopCar.vue'

const routes = [
  {path:'/', component: GoodsList},
  {path:'/detail/:id', component: GoodDetail},
  {path:'/shopCar', component: ShopCar}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router