<template>
  <div id="map">
    <div id="head">
      <h2>Arkavidia 5.0</h2>
      <router-link v-bind:to="'/'">Home</router-link>
      <router-link v-bind:to="'/map'">Map</router-link>
    </div>
    <div id="content">
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

#head, #content {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#content {
  background-color: white;
}
</style>
