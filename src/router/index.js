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
              path: 'presell',
              component: () => import('@/views/preSell/preSell.vue')
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
              meta: {
                isToken: true
              },
              component: () => import('@/views/ticketPurchaseStage/index.vue')
            },
            // 影城
            {
              path: 'movietheatre',
              component: () => import('@/views/movietheatre/index.vue')
            },
            // 我的资料
            {
              path: 'myprofile',
              meta: {
                isToken: true
              },
              component: () => import('@/views/myprofile/index.vue'),
              redirect: 'myprofile/personal',
              children: [
                {
                  path: 'personal',
                  meta: {
                    isToken: true
                  },
                  component: () => import('@/views/myprofile/components/PersonalData.vue')
                },
                {
                  path: 'order/:type',
                  meta: {
                    isToken: true
                  },
                  component: () => import('@/views/myprofile/components/Order.vue')
                },
                {
                  path: 'orderdetails/:id',
                  meta: {
                    isToken: true
                  },
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

router.beforeEach((to, from, next) => {
  if (!to.meta.isToken) return next()
  if (localStorage.token) {
    next()
  } else {
    next({
      path: '/login',
      query: {
        fromRoute: from.path
      }
    })
  }
})

export default router
