import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    id: null,
    point: null,
    transaction: null
  },
  mutations: {
    changeid (state, id) {
      state.id = id
    },
    changepoint (state, point) {
      state.point = point
    },
    changetrans (state, trans) {
      state.transaction = trans
    }
  },
  getters: {
    id: state => state.id,
    point: state => state.point,
    transaction: state => state.transaction
  }
})
