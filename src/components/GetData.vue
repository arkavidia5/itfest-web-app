<template>
  <div class="GetData">
    <button v-on:click="getData">GET</button>
    <div v-if="msg != null">
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'GetData',
  data () {
    return {
      msg: null
    }
  },
  methods: {
    getData: function (event) {
      axios
        .get('https://api.github.com/zen')
        .then(response => (this.msg = response.data))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
