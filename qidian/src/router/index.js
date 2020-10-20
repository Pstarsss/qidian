import Vue from 'vue'
import VueRouter from 'vue-router'
import Bookshelf from '../views/Bookshelf.vue'
import Select from '../views/Selected/Select.vue'
import Find from '../views/Find.vue'
import FindFollow from '../views/Find/FindFollow.vue'
import FindSquares from '../views/Find/FindSquares.vue'
import FindMenuTitle from '../views/Find/FindMenuTitle'
import Mine from '../views/Mine.vue'
import mineShow from '../views/Mine/mineShow.vue'
import SelectHome from '../views/Selected/SelectHome.vue'
import SelectBoys from '../views/Selected/SelectBoys.vue'
import SelectGirls from '../views/Selected/SelectGirls.vue'
import SelectCartoon from '../views/Selected/SelectCartoon.vue'
import Detail from '../views/Details/Detail.vue'


const Login = ()=> import('@/views/Login/Login.vue');
const Register = ()=> import('@/views/Login/Register.vue');
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
    path: '/select',
    name: 'Select',
    component: Select,
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
    redirect: '/selectboys',
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
      {
        path: '/findMenuTitle',
        name: 'FindMenuTitle',
        component: FindMenuTitle,
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
    path: '/mineShow',
    name: 'mineShow',
    component: mineShow,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
