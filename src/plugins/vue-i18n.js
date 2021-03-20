import { createI18n } from 'vue-i18n/dist/vue-i18n.esm-bundler.js'
import messages from '@/app/locales'

export default {
  install: (app) => {
    const i18n = createI18n({
      locale: 'ru',
      fallbackLocale: 'en',
      messages
    })

    app.use(i18n)
  }
}
