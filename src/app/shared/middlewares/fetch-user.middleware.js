import authService from '@/app/shared/services/auth.service'

const fetchUserMiddleware = async () => {
  if (!authService.isAuth() && !!authService.getRefreshToken()) {
    try {
      await authService.fetchToken()
      await authService.fetchUser()
    } catch (e) {
      await authService.logout()
    }
  }
}

export default fetchUserMiddleware
