import authService from '@/app/shared/services/auth.service'

const authMiddleware = () => {
  if (!authService.isAuth()) {
    return { name: 'security-login' }
  }
}

export default authMiddleware
