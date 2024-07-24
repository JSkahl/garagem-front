import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import('@/views/HomeView.vue'),

    },
    {
      name: "acessorios",
      path: "/acessorios",
      component: () => import('@/views/AcessorioView.vue'),
    }
  ]
})

export default router
