import { createRouter, createWebHistory } from 'vue-router'
import Modules from '@/modules'


let routes = [
  {
    path: '/',
    redirect: { name: 'home' }
  }
]

Object.keys(Modules).forEach(function(key) {
  if (Modules[key].routes) {
    routes = routes.concat(Modules[key].routes)
  }
})

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
