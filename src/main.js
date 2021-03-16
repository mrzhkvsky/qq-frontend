import { createApp } from 'vue'
import App from '@/components/App'
import store from '@/store'
import router from '@/router'
import errorService from '@/services/error.service'

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
