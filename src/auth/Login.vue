<template>
  <v-app
    id="inspire"
    class="site-main dark-bg"
  >
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
          <v-form>
            <v-card class="elevation-12">
              <v-toolbar
                dark
                color="blue"
              >
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
             
              <v-card-text>
                <v-text-field
                  v-model="username"
                  prepend-icon="person"
                  name="username"
                  label="username"
                  type="text"
                />

                <v-text-field
                  v-model="password"
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  type="password"
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
              <p v-if="msg">{{ msg }}</p>
            </v-card>
          </v-form>
        </v-col>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
import AuthService from '@/services/AuthService.js';
export default {
    data() {
    return {
    username: '',
    password: '',
    msg: ''
    
   
    };
    },
    methods: {
    async login() {
    try {
    const credentials = {
    username: this.username,
    password: this.password
    };
    const response = await AuthService.login(credentials);
    this.msg = response.msg;
    const token = response.token;
    const user = response.user;
    this.$store.dispatch('login', { token, user });
    this.$router.push('/');
    } catch (error) {
     this.msg = error.response.data.msg;
    }
    }
    }
};
</script>
   