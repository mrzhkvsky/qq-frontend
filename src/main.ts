import init from '@/core/init'
import { createApp } from 'vue'
import App from '@/core/app.vue'
import errorService from '@/core/services/error.service'

import router from '@/plugins/router'
import store from '@/plugins/store'
import VueClickAway from '@/plugins/v-click-away'
import VueI18n from '@/plugins/vue-i18n'
import FeatherIcon from '@/plugins/feather-icons'

(async () => {
  try {
    await init()
  } catch (e) {
    console.error(e)
  }

  const app = createApp(App)
  app.use(store)
      .use(router)
      .use(VueClickAway)
      .use(FeatherIcon)
      .use(VueI18n)
      .mount('#app')

  app.config.errorHandler = (error) => {
    errorService.handle(error)
  }
})()
