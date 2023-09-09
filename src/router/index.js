import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Ancient from '../views/Ancient.vue'
import Health from '../views/Health.vue'
import Beach from '../views/Beach.vue'
import Religious from '../views/Religious.vue'
import Famous_Eg from '../views/Famous_Eg.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/About',
      name: 'About',
     component: About
    },
    {
      path: '/Ancient',
      name: 'Ancient',
     component: Ancient
    },
    {
      path: '/Health',
      name: 'Health',
     component: Health
    },
    {
      path: '/Beach',
      name: 'Beach',
     component: Beach
    },
    {
      path: '/Religious',
      name: 'Religious',
     component: Religious
    },
    {
    path: '/Famous_Eg',
    name: 'Famous_Eg',
    component: Famous_Eg
    }
  ]
})

export default router
