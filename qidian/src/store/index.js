import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import mutations from './mutations.js'
import actions from './Actions.js'
import getters from './Getter.js'
import modules from './Module.js'
const state = {
  
}
export default new Vuex.Store({
  state,
  mutations,
  actions,  
  getters,
  modules
})
