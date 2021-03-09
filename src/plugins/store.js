import { createStore } from 'vuex'
import modules from '@/modules'

const storeModules = {}

modules.forEach((module) => {
  if ('store' in module) {
    Object.assign(storeModules, module.store)
  }
})

const store = createStore({
  modules: storeModules
})

export default store
