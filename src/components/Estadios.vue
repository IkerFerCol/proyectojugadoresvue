<script>
import axios from "axios"
export default {
  data() {
    return {
      nombre_web: "Lista de Jugadores",
      estadios: []
    }
  },
  async mounted() {
    let res = await axios.get("http://localhost:8086/jug/estadios")
    this.estadios = res.data;
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
      <th>Capacidad</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="estadio in estadios">
      <td>{{ estadio.id }}</td>
      <td>{{ estadio.nombre }}</td>
      <td>{{ estadio.capacidad }}</td>

    </tr>
    </tbody>
  </table>
</template>

<style scoped>
</style>
