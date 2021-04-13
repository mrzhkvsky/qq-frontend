import { RouteRecordRaw } from 'vue-router'
import modules from '@/core/modules'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/core/layouts/default.vue'),
    children: [
      {
        path: '',
        redirect: { name: 'home-index' },
      },
      {
        path: ':path',
        name: 'not-found',
        component: () => import(/* webpackChunkName: "not-found" */ '@/core/components/NotFound.vue')
      }
    ]
  }
]

modules.forEach((module) => {
  if (module.routes !== undefined) {
    routes.push(...module.routes)
  }
})

export default routes
