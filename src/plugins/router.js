import { createRouter, createWebHistory } from 'vue-router'
import modules from '@/modules'

let routes = [
  {
    path: '/',
    component: () => import('@/layouts/default'),
    children: [
      {
        path: '',
        redirect: { name: 'home-index' },
      },
      {
        path: ':path',
        name: 'not-found',
        component: () => import(/* webpackChunkName: "not-found" */ '@/components/NotFound')
      }
    ]
  }
]

modules.forEach((module) => {
  if ('routes' in module) {
    routes = routes.concat(module.routes)
  }
})

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if ('middlewares' in to.meta) {
    to.meta.middlewares.forEach((middleware) => {
      middleware(to, from, next)
    })
  } else {
    next()
  }
})

export default router
