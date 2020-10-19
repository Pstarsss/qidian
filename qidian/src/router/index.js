import Vue from 'vue'
import VueRouter from 'vue-router'
import Bookshelf from '../views/Bookshelf.vue'
import Selected from '../views/Selected/Selected.vue'
import Find from '../views/Find.vue'
import FindFollow from '../views/Find/findFollow.vue'
import FindSquares from '../views/Find/findSquares.vue'
import Mine from '../views/Mine.vue'
import SelectHome from '../views/Selected/SelectHome.vue'
import SelectBoys from '../views/Selected/SelectBoys.vue'
import SelectGirls from '../views/Selected/SelectGirls.vue'
import SelectCartoon from '../views/Selected/SelectCartoon.vue'

const Login = ()=> import('@/views/Login/Login.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/bookshelf',
  },
  {
    path: '/bookshelf',
    name: 'Bookshelf',
    component: Bookshelf,
  },
  {
    path: '/selected',
    name: 'Selected',
    component: Selected,
    children: [
      {
        path: '/selecthome',
        name: ' SelectHome',
        component:  SelectHome,
      },
      {
        path: '/selectboys',
        name: 'SelectBoys',
        component: SelectBoys,
      },
      {
        path: '/selectgirls',
        name: 'SelectGirls',
        component: SelectGirls,
      },
      {
        path: '/selectcartoon',
        name: 'SelectCartoon',
        component: SelectCartoon,
      },
    ],
  },

  {
    path: '/find',
    name: 'Find',
    component: Find,
    children: [
      {
        path: '/findFollow',
        name: 'FindFollow',
        component: FindFollow,
      },
      {
        path: '/findSquares',
        name: 'FindSquares',
        component: FindSquares,
      },
    ],
    redirect: '/findSquares',
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
