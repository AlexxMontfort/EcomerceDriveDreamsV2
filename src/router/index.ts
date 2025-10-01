import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const MainLayout = () => import('../layouts/MainLayout.vue')
const AdminLayout = () => import('../layouts/AdminLayout.vue')

const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')

const AdminDashboard = () => import('../views/admin/AdminDashboard.vue')
const AdminUsers = () => import('../views/admin/AdminUsers.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', name: 'Home', component: Home },
      { path: 'about', name: 'About', component: About }
    ]
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      { path: '', name: 'AdminDashboard', component: AdminDashboard },
      { path: 'users', name: 'AdminUsers', component: AdminUsers }
    ]
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
