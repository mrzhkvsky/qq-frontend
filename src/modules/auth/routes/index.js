export default [
  {
    path: '/auth',
    component: () => import('@/modules/auth/layouts/auth'),
    children: [
      {
        path: 'login',
        name: 'auth-login',
        component: () => import(/* webpackChunkName: "auth-login" */ '@/modules/auth/pages/login')
      }
    ]
  }
]

