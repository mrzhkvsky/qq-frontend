import { createLogger, createStore } from 'vuex'
import modules from '@/app/store'

const store = createStore({
  modules: modules,
  plugins: [createLogger()]
})

export default store
