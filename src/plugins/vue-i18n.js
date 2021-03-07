import { createI18n } from 'vue-i18n/dist/vue-i18n.esm-bundler.js'
import Modules from '@/modules'

const messages = {}

Object.keys(Modules).forEach(function(key) {
  if (Modules[key].locales) {
    Object.assign(messages, Modules[key].locales)
  }
})

export default {
  install: (app) => {
    const i18n = createI18n({
      locale: 'ru',
      fallbackLocale: 'ru',
      messages
    })

    app.use(i18n)
  }
}
