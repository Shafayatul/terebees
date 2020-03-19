 import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./stores/store";
import "@/assets/scss/style.scss";
import jQuery from 'jquery'
import axios from 'axios';
import VueAxios from 'vue-axios'
import vuetify from '@/plugins/vuetify'
import 'bootstrap'


Vue.use(VueAxios, axios);
axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;


// import 'bootstrap/dist/css/bootstrap.css'

global.jQuery = jQuery
global .$ = jQuery

Vue.config.productionTip = false

var VueResource = require('vue-resource');

Vue.use(VueResource);


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
