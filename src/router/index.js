import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import List from '../views/list.vue'
import Newlist from '../views/Newlist.vue'
import details from '../views/details.vue'
Vue.use(Router)
export default new Router({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      alias: '/',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/newlist',
      name: 'newlist',
      component: Newlist
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '**',
      redirect: '/home'
  }
  ]
})
