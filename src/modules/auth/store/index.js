import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      data: 0
    }
  },
  mutations: {
    SET_DATA(state, payload) {
      state.data = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
