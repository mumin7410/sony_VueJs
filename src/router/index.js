import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Transaction from '../views/Transaction.vue'
import Camera from '../views/Camera.vue'
import AddEmp from '../views/AddEmp.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/transaction',
    name: 'transaction',
    component: Transaction
  },
  {
    path: '/camera',
    name: 'camera',
    component: Camera
  },
  {
    path: '/AddEmp',
    name: 'AddEmp',
    component: AddEmp
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
