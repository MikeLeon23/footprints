import Vue from 'vue'
import Vuex from 'vuex'

import goods from './modules/goods.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    login(state, payload){
      state.user = payload;
    },
    logout(state){
      state.user = null;
    }
  },
  actions: {
  },
  modules: {
    goods
  }
})
