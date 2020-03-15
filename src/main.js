import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/scss/style.scss";
import jQuery from 'jquery'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'

// import 'bootstrap/dist/css/bootstrap.css'

global.jQuery = jQuery
global .$ = jQuery

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
