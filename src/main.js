import { createApp } from 'vue'
import App from '@/components/App'
import store from '@/store'
import router from '@/router'

import FeatherIcon from '@/plugins/feather-icons'
import VueClickAway from '@/plugins/v-click-away'
import VueI18n from '@/plugins/vue-i18n'
import axios from '@/plugins/axios'

const app = createApp(App)

app.use(store)
  .use(router)
  .use(FeatherIcon)
  .use(VueClickAway)
  .use(VueI18n)
  .use(axios)
  .mount('#app')
