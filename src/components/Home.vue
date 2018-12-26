<template>
  <div id="home">
    <div id="head">
      <v-flex>
        <v-card color="#0b6ad6">
          <v-card-text><h2>Arkavidia 5.0</h2></v-card-text>
          <ul class="nav">
            <li><router-link v-bind:to="'/'" id="link1"><b>Home</b></router-link></li>
            <li><router-link v-bind:to="'/map'" id="link2">Map</router-link></li>
          </ul>
        </v-card>
      </v-flex>
    </div>
    <div id="content">
      <div id="points">
        <h1>Your Points</h1>
        <div id="point">{{ point }}</div>
        <h3>Visit all cluster and get<br>additional point!</h3>
      </div>
      <hr>
      <div id="history">
        <h4>Transaction History</h4>
        <br>
        <br>
        <div v-for="data in transaction" :key="data.name">
          <span class="tpoint"><b>{{ data.points }} Point</b></span> <span class="tname"><b>{{ data.name }}</b></span>
          <br>
          <br>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      point: 144,
      transaction: [
        { name: 'Bukalapak', points: 100 },
        { name: 'Goodie Bag', points: 50 },
        { name: 'Agate', points: 75 }
      ]
    }
  }
}
</script>

<style>
hr {
  border: none;
  width: 90%;
  height: 1px;
  background-color: #cccccc;
  margin-left: 5%;
}

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
  margin-top: 10px;
  margin-left: 5%;
  float: left;
}

a {
  font-size: 13px;
  color: white;
  text-decoration: none;
}

body {
  background-color: white;
}

#head {
  background-color: #0b6ad6;
}

#head, #content {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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

.tpoint {
  float: left;
  margin-left: 5%;
  margin-top: 8px;
  color: #369fb2;
  font-size: 16px;
}

.tname {
  float: right;
  margin-top: 8px;
  margin-right: 5%;
  color: #aaaaaa;
  font-size: 16px;
}

</style>
