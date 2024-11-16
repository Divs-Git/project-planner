import EditProject from '@/views/EditProject.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/add',
      name: 'addProject',
      component: () => import('../views/AddProject.vue'),
    },
    {
      path: '/edit-project/:id',
      name: 'editProject',
      component: EditProject,
      props: true,
    },
  ],
})

export default router
