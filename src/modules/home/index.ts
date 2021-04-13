import ModuleType from '@/core/types/module.type'
import homeRoutes from '@/modules/home/home.routes'

const HomeModule: ModuleType = {
  name: 'home',
  routes: homeRoutes
}

export default HomeModule
