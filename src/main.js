import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Login from './components/Login'
import Map from './components/Map'
import { store } from './store/store'

Vue.use(VueRouter)
Vue.use(Vuetify)

const routes = [
  { path: '/', component: Home },
  { path: '/map', component: Map },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if ((to.path === '/') || (to.path === '/map')) {
    if (store.getters.id == null) {
      next({ path: '/login' })
    }
  }
  next()
})

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')
