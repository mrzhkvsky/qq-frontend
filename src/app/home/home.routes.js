import authMiddleware from '@/app/shared/middlewares/auth.middleware'

const homeRoutes = [
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "default-layout" */ '@/app/shared/layouts/default'),
    meta: {
      middlewares: [authMiddleware]
    },
    children: [
      {
        path: '',
        name: 'home-index',
        component: () => import(/* webpackChunkName: "home-index" */ '@/app/home/pages/index')
      },
      {
        path: 'test',
        name: 'home-test',
        component: () => import(/* webpackChunkName: "home-test" */ '@/app/home/pages/test')
      }
    ]
  }
]

export default homeRoutes
