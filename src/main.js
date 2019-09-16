import Vue from 'vue'
import Home from './components/Home.vue'
import VueRouter from "vue-router"
import {
  routes
} from "./Route.js"

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'history'

})

new Vue({
  el: '#app',
  render: h => h(Home)
})
