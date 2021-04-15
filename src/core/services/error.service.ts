import AuthError from '@/modules/auth/errors/auth.error'
import router from '@/plugins/router'

const handle = (error: any) => {
  if (error instanceof AuthError) {
    return Promise.reject(router.push({ name: 'auth-login' }))
  }

  console.warn(error)
}

const errorService = {
  handle
}

export default errorService
