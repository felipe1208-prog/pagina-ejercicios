import { createRouter, createWebHistory } from 'vue-router'
import Ejercicio2 from '@/views/Ejercicio2/Dolar.vue'
import Home from '@/views/Home.vue'
import Ejercicio1 from '../views/Ejercicio1.vue'
import Dolar from '@/views/Ejercicio2/Dolar.vue'
import Euro from '@/views/Ejercicio2/Euro.vue'
import Usdt from '@/views/Ejercicio2/Usdt.vue'
import HomeEjercicio2 from '@/views/Ejercicio2/HomeEjercicio2.vue'
import Inicio from '@/views/Ejercicio2/Inicio.vue'

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
    },
    {
      path: "/ejercicio2",
      component: HomeEjercicio2,
      redirect: "/ejercicio2/inicio",
      children: [
        {
          path: "inicio",
          name: "Inicio",
          component: Inicio
        },
        {
          path: "dolar",
          name: "Dolar",
          component: Dolar
        },
        {
          path: "euro",
          name: "Euro",
          component: Euro
        },
        {
          path: "usdt",
          name: "Usdt",
          component: Usdt
        },
      ]
    }
  ],
})

export default router
