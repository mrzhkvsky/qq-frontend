import apiService from '@/app/shared/services/api.service'
import { ref } from 'vue'

let token = null
let refreshToken = localStorage.getItem('refreshToken')
const user = ref(null)

const getToken = () => token

const getRefreshToken = () => refreshToken

const getUser = () => user.value

const isAuth = () => !!token && user.value !== null

const login = async ({ email, password }) => {
  const { data } = await apiService.post('/api/login', { email, password })

  token = data.token
  refreshToken = data.refreshToken
  localStorage.setItem('refreshToken', data.refreshToken)

  await fetchUser()
}

const logout = async () => {
  token = null
  refreshToken = null
  localStorage.removeItem('refreshToken')
}

const fetchToken = async () => {
  const { data } = await apiService.post('/api/token/refresh', { refreshToken })

  token = data.token
  refreshToken = data.refreshToken
  localStorage.setItem('refreshToken', data.refreshToken)
}

const fetchUser = async () => {
  const { data } = await apiService.get('/api/me')

  user.value = data
}

const authService = {
  getToken,
  getRefreshToken,
  getUser,
  isAuth,
  login,
  logout,
  fetchToken,
  fetchUser
}

export default authService
