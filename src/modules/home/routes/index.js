export default [
  {
    path: '/',
    component: () => import('@/modules/core/layouts/default'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/modules/home/pages/index')
      },
      {
        path: '/home/test',
        name: 'home-test',
        component: () => import('@/modules/home/pages/test')
      }
    ]
  }
]
