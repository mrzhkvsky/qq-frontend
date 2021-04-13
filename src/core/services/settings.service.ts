interface ISettings {
  appEnv: string,
  apiHost: string,
  isDev: boolean
}

const SettingsService: ISettings = {
  appEnv: process.env.NODE_ENV,
  apiHost: process.env.VUE_APP_API_HOST,
  isDev: process.env.NODE_ENV === 'development'
}

export default SettingsService
