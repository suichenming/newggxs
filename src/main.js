import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../scss/home/index.css'
import $ from 'jquery'
import "bootstrap"



import navheader from './components/header.vue'
Vue.component('navheader', navheader);
import footer from './components/footer.vue'
Vue.component('FooTer', footer);
Vue.use(ElementUI)

if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'http://218.17.253.244:8081' // 线上ip
} else {
  axios.defaults.baseURL = 'http://192.168.51.166:8080'  // 本地开发ip
}
Vue.config.productionTip = false
Vue.prototype.$axios = axios

// router.beforeEach((to,from,next) =>{
//   console.log(to.path)
//   // if(to.path === '/'){
//   //   next()
//   // } else {
//   //   next()
//   // }
// })

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
