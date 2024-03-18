import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CrashData from '../views/CrashData.vue'

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
      component: AboutView //() => import('../views/AboutView.vue')
    },
    /* {
      path: '/CrashData/:id',
      name: 'CrashData',
      component: CrashData //() => import('../views/CrashData.vue')
    } */
  ]
})

export default router
