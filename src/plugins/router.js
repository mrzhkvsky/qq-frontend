import { createRouter, createWebHistory } from 'vue-router'
import logMiddleware from '@/app/shared/middlewares/log.middleware'
import fetchUserMiddleware from '@/app/shared/middlewares/fetch-user.middleware'
import routes from '@/app/routes'

const globalMiddlewares = [
  logMiddleware,
  fetchUserMiddleware
]
console.log(routes)
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
