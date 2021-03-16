import authService from '@/services/auth.service'

const guestMiddleware = () => {
  if (authService.isAuth()) {
    return { name: 'home-index' }
  }
}

export default guestMiddleware
