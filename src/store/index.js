import { createLogger, createStore } from 'vuex'
import auth from '@/store/auth'

const store = createStore({
  modules: {
    auth
  },
  plugins: [createLogger()]
})

export default store
