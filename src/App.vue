<script>
import Equipos from '@/components/Equipos.vue'
import Ligas from "@/components/Ligas.vue";
import Estadios from "@/components/Estadios.vue";

export default {
  name: 'App',
  components: {Equipos, Ligas, Estadios},
}
</script>

<template>
  <div>
    <nav>
      <router-link to="/">Equipos</router-link>
      <router-link to="/Ligas">Ligas</router-link>
      <router-link to="/Estadios">Estadios</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
