import store from '@/store'

const auth = (to, from, next) => {
  if (!store.getters['auth/isAuth']) {
    next({ name: 'auth-login' })
  } else {
    next()
  }
}

export default auth
