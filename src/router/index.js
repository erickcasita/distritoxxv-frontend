import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/addaffiliations',
      name: 'addaffiliations',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AffiliationsFormView.vue')
    },
    {
      path: '/searchaffiliations',
      name: 'searchaffiliations',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SerchAffiliationsView.vue')
    },
  ]
})

export default router
