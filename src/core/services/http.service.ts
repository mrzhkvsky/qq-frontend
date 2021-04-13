import axios from 'axios'
import router from '@/plugins/router'
import env from '@/core/services/settings.service'
import authService from '@/modules/auth/services/auth.service'

axios.defaults.baseURL = env.apiHost

axios.interceptors.request.use((config) => {
  if (authService.getToken() !== null) {
    config.headers.Authorization = 'Bearer ' + authService.getToken()
  }

  return config
})

axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error.response.status === 401) {
      return Promise.reject(router.push({ name: 'auth-login' }))
  }

  return Promise.reject(error);
})

const get = async (url: string) => {
  return await axios.get(url)
}

const post = async (url: string, data: any) => {
  return await axios.post(url, data)
}

const HttpService = {
  get,
  post
}

export default HttpService
