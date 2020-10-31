import Vue from 'vue'
import VueRouter from 'vue-router'

// 书架
import Bookshelf from '@/views/BooksShelf/Bookshelf.vue'
import BookShare from '../views/BooksShelf/bookwindow/BookShare'
import BookScreen from '../views/BooksShelf/bookwindow/BookScreen'

//搜索
import Search from '@/views/Search/Search.vue'

// 发现
import Find from '@/views/Find.vue'
import FindFollow from '@/views/Find/FindFollow.vue'
import FindSquares from '@/views/Find/findSquares.vue'
import FindDetails from '@/views/Find/FindeDetails.vue'
import FindHB from '@/views/Find/components/FindHB.vue'

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
import pushSet from '@/views/Mine/components/pushSet.vue'
import mineGames from '@/views/Mine/components/mineGames.vue'

// 精选
import Select from '@/views/Selected/Select.vue'
import SelectHome from '@/views/Selected/SelectHome.vue'
import SelectBoys from '@/views/Selected/SelectBoys.vue'
import SelectGirls from '@/views/Selected/SelectGirls.vue'
import SelectCartoon from '@/views/Selected/SelectCartoon.vue'
import SelectBoysfree from '@/views/Selected/SelectBoysfree.vue'
import wanben from '@/views/Selected/wanben'
import sanjiang from '@/views/Selected/sanjiang'
import paihang from '@/views/Selected/paihang'
import fenlei from '@/views/Selected/fenlei'
import fenleidetail from '@/views/Selected/fenleidetail'

//详情
const Detail = () => import('@/views/Details/Detail.vue')
const Read = () => import('@/views/Read/read.vue')
const Chapter = () => import('@/views/Details/Chapter.vue')
const Detaildiscuss = () => import('@/views/Details/Detaildiscuss.vue')
const Comment = () => import('@/views/Details/Comment.vue')

//登录注册
const Login = () => import('@/views/Login/Login.vue')
const Validatelogin = () => import('@/views/Login/validatelogin.vue')
const Register = () => import('@/views/Login/Register.vue')
const ChangePassword = () => import('@/views/Login/ChangePassword.vue')

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
    meta:{keepAlive: false}
    // children: [
    //   {
    //     path: '/bookshare',
    //     name: 'BookShare',
    //     component: BookShare,
    //   },
    // ],
  },
  {
    path:'/bookscreen',
    name: 'BookScreen',
    component:BookScreen,
    meta:{keepAlive: true}
},
  {
    path: '/sanjiang',
    name: 'sanjiang',
    component: sanjiang,
    meta:{keepAlive: true}
  },
  {
    path: '/fenlei',
    name: 'fenlei',
    component: fenlei,
    meta:{keepAlive: true}
  },
  {
    path: '/paihang',
    name: 'paihang',
    component: paihang,
    meta:{keepAlive: true}
  },
  // 精选的
  {
    path: '/wanben',
    name: 'wanben',
    component: wanben,
    meta:{keepAlive: true}
  },
  {
    path: '/selectboysfree',
    name: 'SelectBoysfree',
    component: SelectBoysfree,
    meta:{keepAlive: true}
  },
  {
    path: '/fenleidetail/:id',
    name: 'fenleidetail',
    component: fenleidetail,
    meta:{keepAlive: false}
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
        meta:{keepAlive: true}
      },
      {
        path: '/selectgirls',
        name: 'SelectGirls',
        component: SelectGirls,
        meta:{keepAlive: true}
      },
      {
        path: '/selectcartoon',
        name: 'SelectCartoon',
        component: SelectCartoon,
        meta:{keepAlive: true}
      },
    ],
    redirect: '/selectboys',
  },
  // 阅读页面
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
    meta:{keepAlive: false}
  },
  {
    path: '/chapter/:id',
    name: 'Chapter',
    component: Chapter,
    meta:{keepAlive: false}
  },
  {
    path: '/read/:id/chapter/:pp',
    name: 'Read',
    component: Read,
    meta:{keepAlive: false}
  },
  {
    path: '/detaildiscuss/:id',
    name: 'Detaildiscuss',
    component: Detaildiscuss,
    meta:{keepAlive: false}
  },
  {
    path: '/comment',
    name: 'Comment',
    component: Comment,
    meta:{keepAlive: false}
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
        meta:{keepAlive: true}
      },
      {
        path: '/findSquares',
        name: 'FindSquares',
        component: FindSquares,
        meta:{keepAlive: true}
        // children: [{ path: '/findHB', name: 'FindHB', component: FindHB }],
      },
    ],
    redirect: '/findSquares',
  },
  {
    path: '/findHB',
    name: 'FindHB',
    component: FindHB,
    meta:{keepAlive: true}
  },
  {
    path: '/findDetails/:id',
    name: 'FindDetails',
    component: FindDetails,
    meta:{keepAlive: false}
  },

  // 我的页面
  {
    path: '/mine',
    name: 'Mine',
    component: Mine,
    meta:{keepAlive: false}
  },
  {
    path: '/mineShow',
    name: 'MineShow',
    component: mineShow,
    meta:{keepAlive: false}
  },
  {
    path: '/mineSet',
    name: 'MineSet',
    component: mineSet,
    meta:{keepAlive: true}
  },
  {
    path: '/mineMsg',
    name: 'MineMsg',
    component: mineMsg,
    meta:{keepAlive: true}
  },
  {
    path: '/peopleDetails',
    name: 'PeopleDetails',
    component: peopleDetails,
    meta:{keepAlive: true}
  },
  {
    path: '/privacySet',
    name: 'PrivacySet',
    component: privacySet,
    meta:{keepAlive: true}
  },
  {
    path: '/hobbySet',
    name: 'HobbySet',
    component: hobbySet,
    redirect: '/hobbySet/hobbychild',
    children: [
      {
        path: '/hobbySet/hobbychild',
        name: 'Hobbychild',
        component: hobbychild,
        meta:{keepAlive: true}
      },
      {
        path: '/hobbySet/hobbyGirls',
        name: 'HobbyGirls',
        component: hobbyGirls,
        meta:{keepAlive: true}
      },
      {
        path: '/hobbySet/hobbyBoys',
        name: 'HobbyBoys',
        component: hobbyBoys,
        meta:{keepAlive: true}
      },
    ],
  },
  {
    path: '/pushSet',
    name: 'pushSet',
    component: pushSet,
    meta:{keepAlive: true}
  },
  {
    path: '/mineGames',
    name: 'mineGames',
    component: mineGames,
    meta:{keepAlive: true}
  },

  //搜索
  {
    path: '/search',
    name: 'Search',
    component: Search,
    meta:{keepAlive: true}
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
    path: '/changepassword',
    name: 'ChangePassword',
    component: ChangePassword,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
