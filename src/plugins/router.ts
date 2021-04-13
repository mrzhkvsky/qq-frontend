import { createRouter, createWebHistory } from 'vue-router'
import logMiddleware from '@/core/middlewares/log.middleware'
import routes from '@/core/routes'
import MiddlewareType from '@/core/types/middleware.type'

const globalMiddlewares: MiddlewareType[] = [
  logMiddleware
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const middlewares: MiddlewareType[] = []
  middlewares.push(...globalMiddlewares)

  if (to.meta.middlewares !== undefined) {
    // @ts-ignore
    middlewares.push(...to.meta.middlewares)
  }

  let routeName = null
  for (let i = 0; i < middlewares.length; i++) {
    routeName = middlewares[i](to, from)

    if (routeName !== null) break
  }

  if (routeName !== null) {
    next({ name: routeName })
  } else {
    next()
  }
})

export default router
