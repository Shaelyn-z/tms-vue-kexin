import Vue from 'vue'
import Vuex from 'vuex'
import users from './user'
import menu from './menu'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  modules: {
    users,
    menu
  }
})

export default store