import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/bar',
      name: 'bar',
      component: () => import('../views/BarChart.vue')
    },
    {
      path: '/circle',
      name: 'circle',
      component: () => import('../views/CircleView.vue')
    },
  ]
})

export default router
