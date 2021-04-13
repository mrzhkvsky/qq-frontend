import ModuleType from '@/core/types/module.type'
import AuthModule from '@/modules/auth'
import HomeModule from '@/modules/home'

const modules: ModuleType[] = [
  AuthModule,
  HomeModule
]

export default modules
