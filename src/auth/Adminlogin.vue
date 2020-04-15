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
            md="4"
            max="auto"
          >
            <v-form
              ref="form"             
              lazy-validation
            >
              <v-card 
                class="overflow-hidden"
              > 
                <div class="text-center">
                  <img
                    max="auto"
                    width="70%"
                    src="@/assets/img/tarabees_character.png"
                  >
                </div>           
                <v-card-text>
                  <v-text-field
                    v-model="user.username"                  
                    name="username"
                    label="البريد الإلكتروني"
                    type="text"                
                   
                    outlined                    
                  />

                  <v-text-field
                    v-model="user.password"                  
                    name="password"
                    label="كلمة السر"
                    type="password"
                    outlined
                  />
                </v-card-text>           
                <v-card-actions>
                  <v-btn
                    x-large
                    block
                    color="primary"            
                             
                    @click="login"
                  >                
                    تسجيل الدخول
                  </v-btn>
                </v-card-actions>
                <div class="text-center">
                  <span class="black--text">
                    <img
                      src="@/assets/img/logo-color.png"
                      alt="logo"
                      width="150px"
                    ><br> © 2020
                  </span>
                </div>
              </v-card>
            </v-form>
          </v-col>
         
          <v-snackbar
            v-model="snackbar"
            :timeout="timeout"
            right
             color="primary"  
          >
            {{ text }}
           
          </v-snackbar>
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
     user:{
        username:null,
        password:null,
       
      },        
      snackbar: false,
      text: 'حدث خطأ اثناء تسجيل الدخول البريد الالكتروني او كلمة السر غير صحيحة',
      timeout: 2000,
     
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  
  methods: {
  login() {
      this.loading = true;
      this.$refs.form.validate()
        if (this.user.username && this.user.password) {
              AuthService.login(this.user).then(
              res=> {
               this.snackbar = false 
               AuthService.responseAfterLogin(res)
             
            } )
            .catch(error=>{
              this.snackbar = true
               console.log(error)
               this.errors = error
            })
         
          
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
   