<template>
  <div id="itfest-map">
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
    <div id="mapid" v-bind:style="{ height: windowHeight + 'px' }"></div>
  </div>
</template>

<script src="https://unpkg.com/leaflet@1.3.4/dist/leaflet.js"></script>

<script>
import L from 'leaflet'

export default {
  name: 'itfest-map',

  data() {
    return {
      windowHeight: window.innerHeight
    }
  },

  mounted () {
    this.initMap()
  },

  methods: {
    initMap () {
      var mymap = L.map('mapid').setView([-6.8915, 107.6102], 16)
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 25,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiYXVkcnlueW9uYXRhIiwiYSI6ImNqcTlnenBudjExdnozeHQ1bnIzN3czdmoifQ.6cGjJzKovHB68ExIIbcCng'
      }).addTo(mymap)
    }
  }
}
</script>

<style>
#mapid { height: 200px; }

h2 {
  color: white;
}

a {
  font-size: 13px;
  color: white;
  text-decoration: none;
}

#head {
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
