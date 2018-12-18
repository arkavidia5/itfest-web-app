// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import GetData from './components/GetData'
import About from './components/About'

Vue.use(VueRouter)
const routes = [
  { path: '/Explore-Vue', component: GetData },
  { path: '/Explore-Vue/about', component: About }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')
