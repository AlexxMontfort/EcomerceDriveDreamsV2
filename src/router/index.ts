import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const Home = () => import('../views/Home.vue')
const Admin = () => import('../views/Admin.vue')
const NotFound = () => import('../views/NotFound.vue')

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: Home },
  { path: '/admin', name: 'Admin', component: Admin },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
