import { createApp } from 'vue'
import App from '@/app/app'
import errorService from '@/app/shared/services/error.service'

import router from '@/plugins/router'
import store from '@/plugins/store'
import FeatherIcon from '@/plugins/feather-icons'
import VueClickAway from '@/plugins/v-click-away'
import VueI18n from '@/plugins/vue-i18n'

const app = createApp(App)

app.use(store)
  .use(router)
  .use(FeatherIcon)
  .use(VueClickAway)
  .use(VueI18n)
  .mount('#app')

app.config.errorHandler = (error) => {
  errorService.handle(error)
}
