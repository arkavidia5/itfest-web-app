<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'

export default {
  name: 'app',
  components: {
    LMap,
    LTileLayer,
    LMarker
  }
}
</script>

<style>
body {
  background-color: #0b6ad6;
}
</style>
