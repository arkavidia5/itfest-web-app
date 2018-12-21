import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Login from './components/Login'
import Map from './components/Map'

Vue.use(VueRouter)
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
