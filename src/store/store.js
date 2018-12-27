import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    id: ''
  },
  mutations: {
    change (state, id) {
      state.id = id
    }
  },
  getters: {
    id: state => state.id
  }
})
