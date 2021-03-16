import { createRouter, createWebHistory } from 'vue-router'
import authRoutes from '@/router/auth.routes'
import homeRoutes from '@/router/home.routes'
import logMiddleware from '@/middlewares/log.middleware'
import fetchUserMiddleware from '@/middlewares/fetch-user.middleware'

const globalMiddlewares = [
  logMiddleware,
  fetchUserMiddleware
]

const routes = [
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
  ...authRoutes,
  ...homeRoutes
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const middlewares = []
  middlewares.push(...globalMiddlewares)

  if ('middlewares' in to.meta) {
    middlewares.push(...to.meta.middlewares)
  }

  let params = undefined
  for (let i = 0; i < middlewares.length; i++) {
    params = await middlewares[i](to, from)

    if (params) break
  }

  next(params)
})

export default router
