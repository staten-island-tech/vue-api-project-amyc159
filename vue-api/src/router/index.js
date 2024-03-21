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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/bar2',
      name: 'bar2',
      component: () => import('../views/BarView.vue')
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
