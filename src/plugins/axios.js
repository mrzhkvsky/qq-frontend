import axios from 'axios'
import store from '@/store'
import router from '@/router'

export default {
  install: () => {
    axios.defaults.baseURL = process.env.VUE_APP_API_HOST

    axios.interceptors.request.use((config) => {
      if (store.getters['auth/token']) {
        config.headers.Authorization = 'Bearer ' + store.getters['auth/token']
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
  }
}
