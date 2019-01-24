import Vue from 'vue'
import Vuetify from 'vuetify'
import VueCookie from 'vue-cookie'
import 'vuetify/dist/vuetify.min.css'
import App from './App'
import axios from 'axios'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Login from './components/Login'
import Map from './components/Map'
import { store } from './store/store'

Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(VueCookie)

const routes = [
  { path: '/', component: Home },
  { path: '/map', component: Map },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

function getCookie (cname) {
  var name = cname + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

function submit (userId) {
  axios
    .get('https://itfest.arkavidia.id/api/user/' + userId)
    .then(response => (
      store.commit('changepoint', response.data.point), getTransaction(userId)
    ))
}

function getTransaction (userId) {
  axios
    .get('https://itfest.arkavidia.id/api/transaction/user/' + userId)
    .then(response => (store.commit('changetrans', response.data)))
}

router.beforeEach((to, from, next) => {
  if ((to.path === '/') || (to.path === '/map')) {
    if (document.cookie[0] == null) {
      next({ path: '/login' })
    } else {
      submit(getCookie('user_id'))
    }
  } else if (to.path === '/login') {
    if (document.cookie[0] != null) {
      submit(getCookie('user_id'))
      next({ path: '/' })
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
