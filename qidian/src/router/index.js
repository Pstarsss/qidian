import Vue from 'vue'
import VueRouter from 'vue-router'
import Bookshelf from '@/views/BooksShelf/Bookshelf.vue'
import Select from '@/views/Selected/Select.vue'
import Find from '@/views/Find.vue'
import FindFollow from '@/views/Find/findFollow.vue'
import FindSquares from '@/views/Find/findSquares.vue'
import findDetails from '@/views/Find/FindeDetails.vue'

import Mine from '@/views/Mine.vue'
import mineShow from '@/views/Mine/mineShow.vue'
import mineSet from '@/views/Mine/components/mineSet.vue'
import mineMsg from '@/views/Mine/components/mineMsg.vue'
import SelectHome from '@/views/Selected/SelectHome.vue'
import SelectBoys from '@/views/Selected/SelectBoys.vue'
import SelectGirls from '@/views/Selected/SelectGirls.vue'
import SelectCartoon from '@/views/Selected/SelectCartoon.vue'
import Detail from '@/views/Details/Detail.vue'

const Login = () => import('@/views/Login/Login.vue')
const validatelogin = () => import('@/views/Login/validatelogin.vue')
const Register = () => import('@/views/Login/Register.vue')
const Read = () => import('@/views/Read/read.vue')
const Chapter = () => import('@/views/Details/Chapter.vue')
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
        component: SelectHome,
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
    ],
    redirect: '/findSquares',
  },
  {
    path: '/findDetails/:id',
    name: 'findDetails',
    component: findDetails,
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
    path: '/mineSet',
    name: 'mineSet',
    component: mineSet,
  },
  {
    path: '/mineMsg',
    name: 'mineMsg',
    component: mineMsg,
  },

  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
  },
  {
    path: '/chapter/:id',
    name: 'Chapter',
    component: Chapter,
  },
  {
    path: '/validatelogin',
    name: 'validatelogin',
    component: validatelogin,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/read/:id/chapter/:pp',
    name: 'Read',
    component: Read,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
