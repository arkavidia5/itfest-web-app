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
  </div>
</template>

<script>
export default {
  name: 'map'
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
