<script>
import axios from "axios"
export default {
  data() {
    return {
      nombre_web: "Lista de Jugadores",
      jugadores: []
    }
  },
  async mounted() {
    let res = await axios.get("http://localhost:8086/jug/equipos")
    this.jugadores = res.data;
  }
}

</script>

<template>
  <h1 style="margin-top: 50px">{{nombre_web}}</h1>

  <table style="margin-top: 50px">
    <thead>
    <tr>
      <th>Id</th>
      <th>Equipo</th>
      <th>Lugar</th>
      <th>Mejor Jugador</th>
      <th>Imagen</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="jugador in jugadores">
      <td>{{ jugador.id }}</td>
      <td>{{ jugador.equipo }}</td>
      <td>{{ jugador.lugar}}</td>
      <td>{{ jugador.mejorjugador }}</td>
      <td>
        <img :src="jugador.imagen" alt="" style="width:75px"/>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
</style>
