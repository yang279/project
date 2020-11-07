import Vue from 'vue'
import VueRouter from 'vue-router'
import HOME from './home'
import POSITION from './position'
import MORE from './more'
import MINE from './mine'
import CITY from './city'
import SEARCH from './search'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    HOME,
    POSITION,
    MORE,
    MINE,
    CITY,
    SEARCH,
    {
      path: '/*',
      redirect: '/home'
    }
  ]
})

export default router
