<template>
  <v-app
    id="inspire"
    class="site-main dark-bg"
  >
  <section class="login">
    <v-container
      fill-height
    >
      <v-layout
        align-center
        justify-center
      >
        <v-col
          md="6"
          offset-md="3"
        >
          <v-form
            ref="form"
           v-model="valid"
           lazy-validation
          >
            <v-card class="elevation-12">
              <v-toolbar
                dark
                color="blue"
              >
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
             
              <v-card-text>
                <v-text-field
                  v-model="form.username"
                  prepend-icon="person"
                  name="username"
                  label="username"
                  type="text"
                  required
                  :rules="userRules"
                />

                <v-text-field
                  v-model="form.password"
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  type="password"
                  required
                  :rules="password"
                />
              </v-card-text>
              <v-divider light />
              <v-card-actions>
                <v-btn
                  to="/signup"                  
                  color="indigo"
                  dark
                >
                  Sign up
                </v-btn>
                <v-spacer />
                <v-btn                  
                  color="primary"
                  dark
                  @click="login"
                >
                  Login
                  <v-icon>keyboard_arrow_right</v-icon>
                </v-btn>
              </v-card-actions>
            
            </v-card>
          </v-form>
        </v-col>
      </v-layout>
    </v-container>
  </section>
  </v-app>
</template>
<script>
import AuthService from '@/services/auth.service.js';
export default {
  name: 'Login',
  data() {
    return {
      form:{
        username:null,
        password:null
      },
      loading: false,
      message: '',
      valid: true,
      password : [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],    
     userRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/dashboard/profile');
    }
  },
  methods: {
  login() {
      this.loading = true;
      this.$refs.form.validate()
        if (this.form.username && this.form.password) {
          const response =  AuthService.login(this.form);
          // console.log(response)
          this.$router.push('/login');
            error => {
              this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          
        }
      }
    }
  
};
</script>
<style scoped>
.login{
  background: #8e0e00;
  background: -webkit-gradient(linear,left bottom,left top,from(#000),color-stop(#8e0e00),to(#fc811d));
  background: linear-gradient(0deg,#000,#8e0e00,#fc811d);
  height: 100%;
}
</style>
   