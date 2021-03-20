import guestMiddleware from '@/app/shared/middlewares/guest.middleware'

const securityRoutes = [
  {
    path: '/security',
    component: () => import('@/app/security/security'),
    meta: {
      middlewares: [guestMiddleware]
    },
    children: [
      {
        path: 'login',
        name: 'security-login',
        component: () => import(/* webpackChunkName: "security-login" */ '@/app/security/pages/login'),

      }
    ]
  }
]

export default securityRoutes
