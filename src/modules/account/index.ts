import ModuleType from '@/core/types/module.type'
import accountRoutes from '@/modules/account/account.routes'

const AccountModule: ModuleType = {
  name: 'account',
  routes: accountRoutes
}

export default AccountModule
