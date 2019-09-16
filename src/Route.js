import Login from "./components/server/Login.vue"
import Home from "./components/Home.vue"

export const route = [{
    path: '/',
    components: Home
  },
  {
    path: '/login',
    components: Login
  }
]
