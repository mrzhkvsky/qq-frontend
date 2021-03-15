import store from '@/store'

export default function useAuth() {
  return {
    user: store.getters['auth/user'],
    isAuth: store.getters['auth/isAuth']
  }
}
