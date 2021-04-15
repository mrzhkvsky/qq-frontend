import { ref } from 'vue'
import rpcService from '@/core/services/rpc.service'
import HttpService from '@/core/services/http.service'
import AuthError from '@/modules/auth/errors/auth.error'
import HttpError from '@/core/errors/http.error'

let token: string|null = null
let refreshToken = localStorage.getItem('refreshToken')
const user = ref<object|null>(null)

const getToken = () => token

const getRefreshToken = () => refreshToken

const getUser = () => user.value

const isAuth = () => !!token && user.value !== null

const login = async (email: string, password: string) => {
  try {
    const { data } = await HttpService.post('/api/login', { email, password })

    token = data.token
    refreshToken = data.refreshToken
    localStorage.setItem('refreshToken', data.refreshToken)

    await fetchUser()
    startRefreshTimer(data.ttl)
  } catch (e) {
    if (e instanceof HttpError) {
      if (e.response !== undefined && e.response.status === 401) {
        throw new AuthError()
      }
    }

    throw e
  }



}

const logout = () => {
  token = null
  refreshToken = null
  localStorage.removeItem('refreshToken')
}

const fetchToken = async () => {
  if (refreshToken === null) {
    throw new AuthError('Token missing')
  }

  const { data } = await HttpService.post('/api/token/refresh', { refreshToken })

  token = data.token
  refreshToken = data.refreshToken
  localStorage.setItem('refreshToken', data.refreshToken)

  startRefreshTimer(data.ttl)
}

const fetchUser = async () => {
  const { result } = await rpcService.request('account.getProfileInfo')

  user.value = result
}

const startRefreshTimer = (ttl: number) => {
  setTimeout(async () => {
    await fetchToken()
  }, ttl * 1000)
}

const AuthService = {
  getToken,
  getRefreshToken,
  getUser,
  isAuth,
  login,
  logout,
  fetchToken,
  fetchUser
}

export default AuthService
