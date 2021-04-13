import { App } from '@vue/runtime-core'
import VueClickAway from "vue3-click-away"

export default {
  install: (app: App) => {
    app.use(VueClickAway)
  }
}
