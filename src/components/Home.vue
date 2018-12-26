<template>
  <div id="home">
    <div id="head">
      <h2>Arkavidia 5.0</h2>
      <br>
      <ul class="nav">
        <li><router-link v-bind:to="'/'" id="link1"><b>Home</b></router-link></li>
        <li><router-link v-bind:to="'/map'" id="link2">Map</router-link></li>
      </ul>
    </div>
    <div id="content">
      <div id="points">
        <h1>Your Points</h1>
        <div id="point">147</div>
        <h3>Visit all cluster and get<br>additional point!</h3>
      </div>
      <hr>
      <div id="history">
        <h4>Transaction History</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style>
h1 {
  color: #646464;
}

h2 {
  color: white;
}

h3 {
  color: #a2b0bd;
}

h4 {
  padding: 10px 0 10px 0;
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

#points {
  padding: 20px 0 20px 0;
}

#point {
  color: #fdbc02;
  font-size: 75px;
  font-weight: bold;
}

</style>
