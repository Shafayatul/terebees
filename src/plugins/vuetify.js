import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import axios from "axios";

window.axios = axios;
const passportToken  = `Bearer ${localStorage.getItem('token')}`;
window.axios.defaults.headers.common['Authorization'] = passportToken;

Vue.use(Vuetify)

export default new Vuetify({
  rtl: true,
  theme: {
    themes: {
      light: {
        primary: '#8c180c',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
       
      },
    },
  },
})