import axios from 'axios'

const auth = {
  namespaced: true,
  state: {
    token: null,
    refreshToken: null,
    user: null
  },
  getters: {
    token: (store) => store.token,
    refreshToken: (store) => store.refreshToken,
    user: (store) => store.user,
    isAuth: (store) => !!store.token && !!store.user
  },
  mutations: {
    setToken: (store, { token }) => {
      store.token = token
    },
    setRefreshToken: (store, { refreshToken }) => {
      store.refreshToken = refreshToken
    },
    setUser: (store, { user }) => store.user = user
  },
  actions: {
    login: async (store, { email, password }) => {
      const { data: { token, refreshToken } } = await axios.post('/api/authentication', { email, password })

      store.commit('setToken', { token })
      store.commit('setRefreshToken', { refreshToken })

      localStorage.setItem('refreshToken', refreshToken)
    },
    logout: async (store) => {
      store.commit('setToken', { token: null })
      store.commit('setRefreshToken', { refreshToken: null })
      store.commit('setUser', { user: null })

      localStorage.removeItem('refreshToken')
    },
    fetchUser: async (store) => {
      const { data } = await axios.get('/api/me')

      store.commit('setUser', { user: data })
    },
    fetchToken: async (store) => {
      const { data: { token, refreshToken } } = await axios.post('/api/token/refresh', { refreshToken: localStorage.getItem('refreshToken') })

      store.commit('setToken', { token })
      store.commit('setRefreshToken', { refreshToken })

      localStorage.setItem('refreshToken', refreshToken)
    }
  }
}

export default auth
