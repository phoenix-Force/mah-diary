import Vue from 'vue'
import Head from './components/shared/Header.vue'
import Container from './components/server/container.vue'
import Footer from "./components/shared/Footer.vue"
new Vue({
  el: '#header',
  render: h => h(Head)
})

new Vue({
  el: "#container",
  render: h => h(Container)
})
new Vue({
  el: "#footer",
  render: h => h(Footer)

})
