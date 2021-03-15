import store from '@/store'

const auth = {
  user: store.getters['auth/user']
}

export default auth
