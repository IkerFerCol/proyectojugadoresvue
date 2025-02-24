<script>
import axios from "axios"
export default {
  data() {
    return {
      nombre_web: "Lista de Jugadores",
      ligas: []
    }
  },
  async mounted() {
    let res = await axios.get("http://localhost:8086/jug/ligas")
    this.ligas = res.data;
  }
}

</script>

<template>
  <h1 style="margin-top: 50px">{{nombre_web}}</h1>

  <table style="margin-top: 50px">
    <thead>
    <tr>
      <th>Id</th>
      <th>Liga</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="liga in ligas">
      <td>{{ liga.id }}</td>
      <td>{{ liga.nombre }}</td>

    </tr>
    </tbody>
  </table>
</template>

<style scoped>
</style>
