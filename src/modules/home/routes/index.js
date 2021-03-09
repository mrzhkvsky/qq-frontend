import auth from '@/middlewares/auth'

export default [
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "home-layout" */ '@/layouts/default'),
    meta: {
      middlewares: [auth]
    },
    children: [
      {
        path: '',
        name: 'home-index',
        component: () => import(/* webpackChunkName: "home-index" */ '@/modules/home/pages/index')
      },
      {
        path: 'test',
        name: 'home-test',
        component: () => import(/* webpackChunkName: "home-test" */ '@/modules/home/pages/test')
      }
    ]
  }
]
