import Vue from 'vue'
import VueRouter from 'vue-router'

// 书架
import Bookshelf from '@/views/BooksShelf/Bookshelf.vue'

//搜索
import Search from '@/views/Search/Search.vue'

// 发现
import Find from '@/views/Find.vue'
import FindFollow from '@/views/Find/FindFollow.vue'
import FindSquares from '@/views/Find/FindSquares.vue'
import findDetails from '@/views/Find/FindeDetails.vue'


// 我的
import Mine from '@/views/Mine.vue'
import mineShow from '@/views/Mine/mineShow.vue'
import mineSet from '@/views/Mine/components/mineSet.vue'
import mineMsg from '@/views/Mine/components/mineMsg.vue'
import peopleDetails from '@/views/Mine/components/peopleDetails.vue'
import privacySet from '@/views/Mine/components/privacySet.vue'
import hobbySet from '@/views/Mine/components/hobbySet.vue'
import hobbychild from '@/views/Mine/components/hobbychild.vue'
import hobbyGirls from '@/views/Mine/components/hobbyGirls.vue'
import hobbyBoys from '@/views/Mine/components/hobbyBoys.vue'

// 精选
import Select from '@/views/Selected/Select.vue'
import SelectHome from '@/views/Selected/SelectHome.vue'
import SelectBoys from '@/views/Selected/SelectBoys.vue'
import SelectGirls from '@/views/Selected/SelectGirls.vue'
import SelectCartoon from '@/views/Selected/SelectCartoon.vue'
import SelectBoysfree from '@/views/Selected/SelectBoysfree.vue'
import wanben from '@/views/Selected/wanben'
import sanjiang from '@/views/Selected/sanjiang'

//详情
const Detail = () => import('@/views/Details/Detail.vue')
const Read = () => import('@/views/Read/read.vue')
const Chapter = () => import('@/views/Details/Chapter.vue')
const Detaildiscuss = () => import('@/views/Details/Detaildiscuss.vue')
const Comment = () => import('@/views/Details/Comment.vue')

//登录注册
const Login = () => import('@/views/Login/Login.vue');
const Validatelogin = () => import('@/views/Login/validatelogin.vue');
const Register = () => import('@/views/Login/Register.vue');
const ChangePassword = () => import('@/views/Login/ChangePassword.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/bookshelf',
  },
  //书架
  {
    path: '/bookshelf',
    name: 'Bookshelf',
    component: Bookshelf,
  },
  {
    path: '/sanjiang',
    name: 'sanjiang',
    component: sanjiang,
  },
  // 精选的
  {
    path: '/wanben',
    name: 'wanben',
    component: wanben,
  },
  {
    path: '/selectboysfree',
    name: 'SelectBoysfree',
    component: SelectBoysfree,
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
  // 阅读页面
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
    path: '/read/:id/chapter/:pp',
    name: 'Read',
    component: Read,
  },
  {
    path: '/detaildiscuss/:id',
    name: 'Detaildiscuss',
    component: Detaildiscuss,
  },
  {
    path: '/comment',
    name: 'Comment',
    component: Comment,
  },

  //发现页面的
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
    name: 'FindDetails',
    component: findDetails,
  },


  // 我的页面
  {
    path: '/mine',
    name: 'Mine',
    component: Mine,
  },
  {
    path: '/mineShow',
    name: 'MineShow',
    component: mineShow,
  },
  {
    path: '/mineSet',
    name: 'MineSet',
    component: mineSet,
  },
  {
    path: '/mineMsg',
    name: 'MineMsg',
    component: mineMsg,
  },
  {
    path: '/peopleDetails',
    name: 'PeopleDetails',
    component: peopleDetails,
  },
  {
    path: '/privacySet',
    name: 'PrivacySet',
    component: privacySet,
  },
  {
    path: '/hobbySet',
    name: 'hobbySet',
    component: hobbySet,
  	redirect:'/hobbySet/hobbychild',
  	children:[
  		{
  		  path: '/hobbySet/hobbychild',
  		  name: 'hobbychild',
  		  component: hobbychild,
  		},
  		{
  		  path: '/hobbySet/hobbyGirls',
  		  name: 'hobbyGirls',
  		  component: hobbyGirls,
  		},
  		{
  		  path: '/hobbySet/hobbyBoys',
  		  name: 'hobbyBoys',
  		  component: hobbyBoys,
  		},
  	]
  },
  
 //搜索
 {
  path: '/search',
  name: 'Search',
  component: Search,
 },


  //用户的登录及账号管理‘
  {
    path: '/validatelogin',
    name: 'Validatelogin',
    component: Validatelogin,
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
    path:'/changepassword',
    name: 'ChangePassword',
    component: ChangePassword
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
