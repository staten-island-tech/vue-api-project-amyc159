import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CrashData from '../views/CrashData.vue'
import BarChart from '../views/BarChart.vue'
import DoughNut from '../views/DoughNut.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/crashdata',
      name: 'Data',
      component: CrashData
    },
    {
      path: '/bar',
      name: 'Bar Chart',
      component: BarChart
    },
    {
      path: '/doughnut',
      name: 'Doughnut',
      component: DoughNut
    }
  ]
})

export default router
