import LocalesType from '@/core/types/locales.type'
import authRuLocales from '@/modules/auth/locales/auth-ru.locale'
import authEnLocales from '@/modules/auth/locales/auth-en.locale'

const authLocales: LocalesType = {
  en: authEnLocales,
  ru: authRuLocales
}

export default authLocales
