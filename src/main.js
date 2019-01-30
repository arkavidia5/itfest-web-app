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

Vue.use(Vuetify, {
  theme: {
    primary: '#04464F',
    secondary: '#FFFFF2',
    accent: '#F69320'
  }
})
Vue.use(VueCookie)

const routes = [
  { path: '/', component: Home },
  { path: '/map', component: Map },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes
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
    .then(response => {
      store.commit('changepoint', response.data.point)
      getTransaction(userId)
    })
}

function getTransaction (userId) {
  axios
    .get('https://itfest.arkavidia.id/api/transaction/user/' + userId)
    .then(response => (store.commit('changetrans', response.data)))
}

router.beforeEach((to, from, next) => {
  if ((to.path === '/') || (to.path === '/map')) {
    if (getCookie('user_id') === '') {
      next({ path: '/login' })
    } else {
      submit(getCookie('user_id'))
    }
  } else if (to.path === '/login') {
    if (getCookie('user_id') !== '') {
      submit(getCookie('user_id'))
      next({ path: '/' })
    }
  }
  next()
})
window.setInterval(() => {
  submit(getCookie('user_id'))
}, 5000)

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')
