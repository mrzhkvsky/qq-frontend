import LocalesType from '@/core/types/locales.type'
import modules from '@/core/modules'
import appEnLocale from '@/core/locales/app-en.locale'
import appRuLocale from '@/core/locales/app-ru.locale'

let locales: LocalesType = {
  en: { app: appEnLocale },
  ru: { app: appRuLocale }
}

modules.forEach((module) => {
  if (module.locales !== undefined) {
    const loc = module.locales
    Object.keys(locales).forEach((key) => {
      // @ts-ignore
      locales[key][module.name] = module.locales[key]
    })
  }
})

export default locales
