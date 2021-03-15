import store from '@/store'

export default async function fetchUser () {
  if (!store.getters['auth/isAuth'] && localStorage.getItem('refreshToken')) {
    await store.dispatch('auth/fetchToken')
    await store.dispatch('auth/fetchUser')
  }
}
