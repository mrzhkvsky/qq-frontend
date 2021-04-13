import { LocaleMessageDictionary, VueMessageType } from 'vue-i18n'

interface LocalesType extends Record<string, LocaleMessageDictionary<VueMessageType>> {
  en: LocaleMessageDictionary<VueMessageType>
  ru: LocaleMessageDictionary<VueMessageType>
}

export default LocalesType
