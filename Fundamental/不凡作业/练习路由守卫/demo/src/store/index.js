import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    age: 40
  },
  mutations: {
    increase(state, val){
      state.age += val;
    }
  },
  actions: {
  },
  modules: {
  }
})
