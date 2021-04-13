import { App } from '@vue/runtime-core'
import FeatherIcon from '@/core/components/FeatherIcon.vue'

export default {
  install: (app: App) =>
  {
    const Vue = app
    Vue.component(FeatherIcon.name, FeatherIcon)
  }
}
