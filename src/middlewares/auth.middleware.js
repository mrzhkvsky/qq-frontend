import authService from '@/services/auth.service'

const authMiddleware = () => {
  if (!authService.isAuth()) {
    return { name: 'auth-login' }
  }
}

export default authMiddleware
