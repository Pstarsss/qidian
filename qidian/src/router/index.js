import Vue from 'vue'
import VueRouter from 'vue-router'
import Bookshelf from '../views/Bookshelf.vue'
import Selected  from '../views/Selected.vue'
import Find from '../views/Find.vue'
import Mine from '../views/Mine.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/bookshelf'
  },
  {
    path: '/bookshelf',
    name: 'Bookshelf',
    component: Bookshelf
  },
  {
    path: '/selected',
    name: 'Selected',
    component: Selected
  },
  {
    path: '/find',
    name: 'Find',
    component: Find
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
