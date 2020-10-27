import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/js/utils1.js'
import './assets/css/common.css'
import axios from 'axios'
//对ele ui 全局注册
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.use(ElementUI)
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function(h) {
    return h(App)
  },
}).$mount('#app')
