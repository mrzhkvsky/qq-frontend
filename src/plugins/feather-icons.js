import { AirplayIcon, SearchIcon, BellIcon, UserIcon, SettingsIcon, LogOutIcon, MessageSquareIcon } from '@zhuowenli/vue-feather-icons'

export default {
  install: (app) => {
      app.component(AirplayIcon.name, AirplayIcon)
        .component(SearchIcon.name, SearchIcon)
        .component(BellIcon.name, BellIcon)
        .component(UserIcon.name, UserIcon)
        .component(SettingsIcon.name, SettingsIcon)
        .component(LogOutIcon.name, LogOutIcon)
        .component(MessageSquareIcon.name, MessageSquareIcon)
  }
}
