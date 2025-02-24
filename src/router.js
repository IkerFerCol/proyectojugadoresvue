import { createRouter, createWebHistory } from 'vue-router'
import Equipos from '@/components/Equipos.vue'
import Ligas from "@/components/Ligas.vue";
import Estadios from "@/components/Estadios.vue";

const routes = [
  { path: '/', component: Equipos },
  { path: '/ligas', component: Ligas },
  { path: '/estadios', component: Estadios },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
