 import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./stores";
import appstore from './helpers/AppStorage'
import AuthService from './services/auth.service'
import "@/assets/scss/style.scss";
import jQuery from 'jquery'
import axios from 'axios';
import VueAxios from 'vue-axios'
import vuetify from '@/plugins/vuetify'
import CKEditor from '@ckeditor/ckeditor5-vue';
import { ValidationProvider } from 'vee-validate';
import Swal from 'sweetalert2'
import 'bootstrap'
Vue.component('ValidationProvider', ValidationProvider);
Vue.use(VueAxios, axios);
Vue.use( CKEditor );


window.Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
window.appstore = appstore;
window.AuthService = AuthService;
// import 'bootstrap/dist/css/bootstrap.css'
import VueCoreVideoPlayer from 'vue-core-video-player'
Vue.use(VueCoreVideoPlayer)

global.jQuery = jQuery
global .$ = jQuery

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth) && !AuthService.loggedIn()) {
    next({ path: '/dashboard/adminlogin', query: { redirect: to.fullPath }});
  } else {
    next();
  }
});


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
