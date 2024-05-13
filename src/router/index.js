import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      redirect: '',
      children: [
        {
          path: '',
          redirect: 'index',
          component: () => import('@/views/layout/layout.vue'),
          children: [
            {
              path: 'index',
              component: () => import('@/views/home/home.vue')
            },
            {
              path: 'hotsell',
              component: () => import('@/views/hotSell/hotSell.vue')
            },
            {
              path: 'cinema',
              component: () => import('@/views/cinema/cinema.vue')
            }
          ]
        }
      ]
    }
  ]
})

export default router
