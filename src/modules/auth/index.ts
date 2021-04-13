import ModuleType from '@/core/types/module.type'
import authRoutes from '@/modules/auth/auth.routes'
import authLocales from '@/modules/auth/locales'

const AuthModule: ModuleType = {
  name: 'auth',
  routes: authRoutes,
  locales: authLocales
}

export default AuthModule
