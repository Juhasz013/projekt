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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/tablazat',
      name: 'tablazat',
      component: () => import('../views/Tablazat.vue')
    },
    {
      path: '/kartya',
      name: 'kartya',
      component: () => import('../views/Kartya.vue')
    },
  ]
})

export default router
