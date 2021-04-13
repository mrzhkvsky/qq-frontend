import authService from '@/modules/auth/services/auth.service'
import MiddlewareType from '@/core/types/middleware.type'

const authMiddleware: MiddlewareType = () => {
  if (!authService.isAuth()) {
    return 'auth-login'
  }

  return null
}

export default authMiddleware
