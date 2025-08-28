import { createRouter, createWebHistory } from 'vue-router'
import Home       from '@/views/Home.vue'
import Favorites  from '@/views/Favorites.vue'
import Cart       from '@/views/Cart.vue'
import Login      from '@/views/Login.vue'
import Register   from '@/views/Register.vue'
import Admin      from '@/views/Admin.vue'

const routes = [
  { path: '/',           name: 'Home',       component: Home },
  { path: '/favorites',  name: 'Favorites',  component: Favorites },
  { path: '/cart',       name: 'Cart',       component: Cart },
  { path: '/login',      name: 'Login',      component: Login },
  { path: '/register',   name: 'Register',   component: Register },
  { 
    path: '/admin', 
    name: 'Admin', 
    component: Admin, 
    meta: { requiresAuth: true } 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Guard para rutas protegidas
router.beforeEach((to, from, next) => {
  const loggedIn = !!localStorage.getItem('token')  // o desde tu store de usuario
  if (to.meta.requiresAuth && !loggedIn) next('/login')
  else next()
})

export default router