import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      redirect: 'index',
      children: [
        {
          path: 'index',
          component: () => import('@/views/layout/layout.vue')
        }
      ]
    }
  ]
})

export default router
