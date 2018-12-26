<template>
  <div id="home">
    <div id="head">
      <v-flex>
        <v-card color="#0b6ad6">
          <v-card-text><h2>Arkavidia 5.0</h2></v-card-text>
          <ul class="nav">
            <li><router-link v-bind:to="'/'" id="link1">Home</router-link></li>
            <li><router-link v-bind:to="'/map'" id="link2"><b>Map</b></router-link></li>
          </ul>
        </v-card>
      </v-flex>
    </div>
    <l-map ref="map" :zoom=13 :center="[47.413220, -1.219482]">
      <l-tile-layer url="" ></l-tile-layer>
    </l-map>
  </div>
</template>

<script>
export default {
  name: 'map',
  data: () => ({ maps: null }),
  mounted () {
    this.$nextTick(() => {
      this.maps = this.$refs.map.mapObject
    })
  }
}
</script>

<style>
h2 {
  color: white;
}

a {
  font-size: 13px;
  color: white;
  text-decoration: none;
}

#head, #content {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  background-color: white;
}

.nav {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

.nav li {
  display: inline;
  padding: 10%;
}

.nav a {
  display: inline-block;
  padding: 4px;
}
</style>
