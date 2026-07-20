import Ejercicio1 from '../views/Ejercicio1.vue'
import Home from '../views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/ejercicio1",
      name: "ejercicio1",
      component: Ejercicio1
    }
  ],
})

export default router
