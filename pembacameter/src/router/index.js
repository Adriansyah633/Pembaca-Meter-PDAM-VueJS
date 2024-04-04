import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/Contact.vue'
import Register from '../views/RegisterView.vue'
import Login from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import EditView from '../views/EditView.vue'
import NolanggView from '../views/NolanggView.vue'
import RiwayatView from '../views/RiwayatView.vue'


Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'contacts',
    component: ContactView
  },
  {
    path: '/register',
    name: 'register',
    component : Register
  },
  {
    path: '/Login',
    name: 'Login',
    component : Login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component : DashboardView
  },
  {
    path: '/edit/:nolangg',
    name: 'edit',
    component : EditView
  },
  {
    path: '/nolangg/',
    name: 'nolangg',
    component : NolanggView
  },
  {
    path: '/riwayat',
    name: 'riwayat',
    component : RiwayatView
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
