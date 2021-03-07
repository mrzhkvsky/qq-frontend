export default [
  {
    path: '/',
    component: () => import('@/modules/auth/layouts/auth'),
    children: [
      {
        path: '/auth/login',
        name: 'auth-login',
        component: () => import('@/modules/auth/pages/login')
      },
      {
        path: '/auth/register',
        name: 'auth-register',
        component: () => import('@/modules/auth/pages/register')
      }
    ]
  }
]

