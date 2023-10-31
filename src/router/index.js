import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import IndexView from '../views/IndexView.vue'
import AgendasView from '../views/AgendasView.vue'
import CitasView from '../views/CitasView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/index',
    name: 'Index',
    component: IndexView
  },
  {
    path: '/agendas',
    name: 'Agendas',
    component: AgendasView
  },
  {
    path: '/citas',
    name: 'Citas',
    component: CitasView
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
