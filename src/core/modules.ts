import ModuleType from '@/core/types/module.type'
import AuthModule from '@/modules/auth'
import HomeModule from '@/modules/home'
import AccountModule from '@/modules/account'

const modules: ModuleType[] = [
  AuthModule,
  HomeModule,
  AccountModule

]

export default modules
