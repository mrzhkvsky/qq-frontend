import { App } from '@vue/runtime-core'
import messages from '@/core/locales'
import { createI18n } from 'vue-i18n'

export default {
  install: (app: App) => {
    const i18n = createI18n({
      locale: 'ru',
      fallbackLocale: 'en',
      messages
    })

    app.use(i18n)
  }
}
