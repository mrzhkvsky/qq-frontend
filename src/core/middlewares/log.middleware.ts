import MiddlewareType from '@/core/types/middleware.type'

const logMiddleware: MiddlewareType = (to) => {
  console.log(`Route: "${String(to.name)}"`)

  return null
}

export default logMiddleware
