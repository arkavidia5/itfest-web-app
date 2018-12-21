<template>
  <div id="login">
    <img src="../assets/logo.png" width="100px">
    <br>
    <h2>Arkavidia 5.0</h2>
    <br>
    <form action="/">
      <input type="text" v-model="code" placeholder="Input your code..">
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      code: null
    }
  },
  methods: {
    submit () {
      axios
        .post('')
        .then()
    }
  }
}
</script>

<style>
h2 {
  color: white;
}

#login {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
