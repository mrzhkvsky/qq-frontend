import { createRouter, createWebHistory } from 'vue-router'
import fetchUser from '@/middlewares/fetchUser'

import auth from '@/router/auth'
import home from '@/router/home'

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
  },
  ...auth,
  ...home
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  await fetchUser()

  if ('middlewares' in to.meta) {
    to.meta.middlewares.forEach((middleware) => {
      middleware(to, from, next)
    })
  } else {
    next()
  }
})

export default router
