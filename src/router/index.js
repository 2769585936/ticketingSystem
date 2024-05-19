import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => {
    return { top: 0 }
  },
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
              component: () => import('@/views/cinema/cinema.vue'),
              children: [
                {
                  path: '',
                  component: () => import('@/views/cinema/components/chooseACinema.vue')
                },
                {
                  path: 'choosedate',
                  component: () => import('@/views/cinema/components/chooseDate.vue')
                }
              ]
            },
            {
              path: 'ticketpurchasestage',
              component: () => import('@/views/ticketPurchaseStage/index.vue'),
              children: [
                {
                  path: '',
                  component: () => import('@/views/ticketPurchaseStage/components/ChooseSeat.vue')
                },
                {
                  path: 'confirmorder',
                  component: () => import('@/views/ticketPurchaseStage/components/ConfirmOrder.vue')
                },
                {
                  path: 'orderpass',
                  component: () => import('@/views/ticketPurchaseStage/components/OrderPass.vue')
                }
              ]
            },
            // 我的资料
            {
              path: 'myprofile',
              component: () => import('@/views/myprofile/index.vue'),
              children: [
                {
                  path: '',
                  component: () => import('@/views/myprofile/components/AllOrder.vue')
                },
                {
                  path: 'orderdetails/:id',
                  component: () => import('@/views/myprofile/components/OrderDetails.vue')
                }
              ]
            }
          ]
        },
        {
          path: 'login',
          component: () => import('@/views/login/login.vue')
        }
      ]
    }
  ]
})

export default router
