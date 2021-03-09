export default [
  {
    path: '/auth',
    component: () => import('@/modules/auth/layouts/auth'),
    children: [
      {
        path: 'login',
        name: 'auth-login',
        component: () => import(/* webpackChunkName: "auth-login" */ '@/modules/auth/pages/login')
      },
      {
        path: 'register',
        name: 'auth-register',
        component: () => import(/* webpackChunkName: "auth-register" */ '@/modules/auth/pages/register')
      }
    ]
  }
]

