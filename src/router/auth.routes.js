import guestMiddleware from '@/middlewares/guest.middleware'

const authRoutes = [
  {
    path: '/auth',
    component: () => import('@/layouts/auth'),
    meta: {
      middlewares: [guestMiddleware]
    },
    children: [
      {
        path: 'login',
        name: 'auth-login',
        component: () => import(/* webpackChunkName: "auth-login" */ '@/pages/auth/login'),

      }
    ]
  }
]

export default authRoutes
