import store from '@/store'

const guest = (to, from, next) => {
  if (store.getters['auth/isAuth']) {
    return next({ name: 'home-index' })
  } else {
    next()
  }
}

export default guest
