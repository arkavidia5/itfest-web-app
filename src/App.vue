<template>
  <div id="app">
    <v-app>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  .futura-bt {
    font-family: 'Futura Md BT Bold'
  }
  .futura-bt.bold {
    font-family: 'Futura Md BT Bold';
  }
  .futura-lt.bold {
    font-family: 'FuturaLT'
  }
  .futura-lt.bold {
    font-family: 'FuturaLT-Bold'
  }
  #app {
    background: #fffff2;
    background-image: url('./assets/bg_pattern.png');
    background-size: 100%;
  }
</style>
