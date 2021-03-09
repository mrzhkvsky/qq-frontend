import { createI18n } from 'vue-i18n/dist/vue-i18n.esm-bundler.js'
import messages from '@/locales'
import modules from '@/modules'

modules.forEach((module) => {
  if ('locales' in module) {
    Object.assign(messages, module.locales)
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
