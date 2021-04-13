import { createLogger, createStore } from 'vuex'
import modules from '@/core/store'

const store = createStore({
  modules: modules,
  plugins: [createLogger()]
})

export default store
