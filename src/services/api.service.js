import axios from 'axios'
import authService from '@/services/auth.service'
import { useRouter } from 'vue-router'

const router = useRouter()

axios.defaults.baseURL = process.env.VUE_APP_API_HOST

axios.interceptors.request.use((config) => {

  if (authService.getToken()) {
    config.headers.Authorization = 'Bearer ' + authService.getToken()
  }

  return config
})

axios.interceptors.response.use((response) => {
  return response;
}, function (error) {
  if (error.response.status === '401') {
    return Promise.reject(router.push({ name: 'auth-login' }))
  }

  if (error.response.status === '500') {
    console.log('Server error')
  }

  return Promise.reject(error)
})

const get = (url) => {
  return axios.get(url)
}

const post = (url, data = undefined) => {
  return axios.post(url, data)
}

const put = (url, data = undefined) => {
  return axios.put(url, data)
}

const patch = (url, data = undefined) => {
  return axios.patch(url, data)
}

const apiService = {
  get,
  post,
  put,
  patch
}

export default apiService
