import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Login from './components/Login'
import Map from './components/Map'
import { L } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'

Vue.use(VueRouter)
Vue.use(Vuetify)

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

const routes = [
  { path: '/', component: Home },
  { path: '/map', component: Map },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')
