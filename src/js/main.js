
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.config.debug = true
Vue.config.devTools = true

// import components
import app from './components/App.vue'

// import map
import routes from './router/routes.js'

/**
  VUE ROUTER CONFIGURATION
*/

// Make new VueRouter Instance
Vue.use(VueRouter)
let router = new VueRouter({ routes })
/**
  MOUNT THE VUE
*/
new Vue(Vue.util.extend({ router }, app)).$mount('app')
