<template>
  <div id="home">
    <div id="head">
      <h2>Arkavidia 5.0</h2>
      <br>
      <ul class="nav">
        <li><router-link v-bind:to="'/'" id="link1">Home</router-link></li>
        <li><router-link v-bind:to="'/map'" id="link2"><b>Map</b></router-link></li>
      </ul>
    </div>
    <div id="content">
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
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
  margin-top: 20px;
}

#content {
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
