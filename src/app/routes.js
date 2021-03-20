import securityRoutes from '@/app/security/security.routes'
import homeRoutes from '@/app/home/home.routes'

const routes = [
  {
    path: '/',
    component: () => import('@/app/shared/layouts/default'),
    children: [
      {
        path: '',
        redirect: { name: 'home-index' },
      },
      {
        path: ':path',
        name: 'not-found',
        component: () => import(/* webpackChunkName: "not-found" */ '@/app/shared/components/NotFound')
      }
    ]
  },
  ...securityRoutes,
  ...homeRoutes
]

export default routes
