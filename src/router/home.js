import auth from '@/middlewares/auth'

const home = [
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
        component: () => import(/* webpackChunkName: "home-index" */ '@/pages/home')
      },
      {
        path: 'test',
        name: 'home-test',
        component: () => import(/* webpackChunkName: "home-test" */ '@/pages/home/test')
      }
    ]
  }
]

export default home
