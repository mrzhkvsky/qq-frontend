import authService from '@/modules/auth/services/auth.service'
import MiddlewareType from '@/core/types/middleware.type'

const guestMiddleware: MiddlewareType = () => {
  if (authService.isAuth()) {
    return 'home-index'
  }

  return null
}

export default guestMiddleware
