<template>
  <v-app
    id="inspire"
    class="site-main dark-bg top-half"
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
         
          class="mx-auto mt-12"
        >
          <v-form
            ref="form"
            v-model="valid"
          >
            <v-text-field
              v-model="first_name"
              prepend-icon="person"
              name="first_name"
              label="Frist Name"
              required
              :rules="rules.name"
            />
            <v-text-field
              v-model="last_name"
              prepend-icon="person"
              name="last_name"
              label="Lest Name"
              required
              :rules="rules.name"
            /> 
            <v-text-field
              v-model="family"
              prepend-icon="person"
              name="family"
              label="family"
              :rules="rules.family"
              required
            />
            <v-text-field
              v-model="age"
              prepend-icon="person"
              name="age"
              label="Age"
              required
            /> 
            <v-text-field
              v-model="email"
              :rules="rules.email"
              prepend-icon="email"
              name="email"
              label="Email"
              required            
            />

            <v-text-field
              v-model="password"
              prepend-icon="lock"
              name="password"
              label="Password"
              type="password"
            />

            <v-text-field
              v-model="password_confirmation"
              prepend-icon="lock"
              name="password"
              label="Confirm Password"
              type="password"              
            />
            <v-file-input
              v-model="profile_image"             
              placeholder="Upload your documents"
              label="File input"
              multiple
              prepend-icon="mdi-paperclip"
            />
            <v-card-actions>      
              <v-btn
                :disabled="!valid"
                color="black"
                @click="signUp"
              >
                Register
                <v-icon>keyboard_arrow_up</v-icon>
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-col>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import AuthService from '@/services/AuthService.js';
import client from '../module/client'
export default {
 
  data() {
    return {
      valid: true,
      first_name: '',
      last_name: '',
      family: '',
      age: 0,
      email: '',
      password:'',
      password_confirmation: '',      
      profile_image:[],     
      rules: {
          // age: [
          //   v => !!v || 'Name is required',
          //   v => (v && v.val <= 5) || 'Name must be less than 10 characters',
          // ], 
           name: [
              v => !!v || 'Name is required',
              v => (v && v.length <= 10) || 'Name must be less than 10 characters',
          ],
          family:[
              v => !!v || 'family is required',
              v => (v && v.length <= 10) || 'Name must be less than 10 characters',
          ],      
          email: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
          ],
        },
     
      

    };
  },
  created(){
      // GET /someUrl
    client().get('/articles').then(response => {

    // get body data
    console.log(response)

  }, response => {
    // error callback
  });
  },
  methods: {
    signUp(){

        const credentials = {
         first_name: this.first_name,
         last_name: this.last_name,
         family: this.family,
         age: this.age,
         email: this.email,
         password: this.password,
         password_confirmation: this.password_confirmation,
        //  profile_image: this.profile_image,
        };
        console.log(credentials);

        // this.$http.post('/api', data, {
        //   headers: {
        //       'Content-Type': 'multipart/form-data'
        //   }
        // })

        client().post('/customer/signup', 
                   credentials
                )
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error.data);
              });
    }
  }
};
</script>
