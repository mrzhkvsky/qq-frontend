import guest from '@/middlewares/guest'

const auth = [
  {
    path: '/auth',
    component: () => import('@/layouts/auth'),
    meta: {
      middlewares: [guest]
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

export default auth
