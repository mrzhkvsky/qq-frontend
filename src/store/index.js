import { createLogger, createStore } from 'vuex'

const store = createStore({
  modules: {},
  plugins: [createLogger()]
})

export default store
