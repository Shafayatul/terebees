<template>
  <main class="site-main about grey-background">
    <section class="page-header">
      <h1 class="text-center text-white text-uppercase fw-700 mb-0">
        إنشاء حساب
      </h1>
    </section>
    <!-- end .page-header -->

    <v-row 
      class="justify-center"
    >
      <v-col 
        cols="12"
        lg="4"
        md="4"
        sm="8"
        max="auto"
        class="sl"
      >
        <v-card
          class="overflow-hidden"
          color="purple lighten-1"
          dark
        >
          <v-form
            ref="form"
            v-model="valid"
            class="signup purple lighten-1"
            color=""
            dark
          >
            <v-row>
              <v-col 
                cols="12"
                lg="6"
                md="6"
                sm="12"
                max="auto"
              >
                <v-text-field
                  v-model="first_name"             
                  name="first_name"
                  label="الاسم"
                  required
                  :rules="rules.name"
                />
              </v-col>
              <v-col 
                cols="12"
                lg="6"
                md="6"
                sm="12"
                max="auto"
              >
                <v-text-field
                  v-model="last_name"
             
                  name="last_name"
                  label="اسم العائلة"
                  required
                  :rules="rules.name"
                /> 
              </v-col>
              <v-col 
                cols="12"
                lg="12"
                md="12"
                sm="12"
                max="auto"
              >
                <v-text-field
                  v-model="family"
             
                  name="family"
                  label="العائلة"
                  :rules="rules.family"
                  required
                />
              </v-col>
              <v-col 
                cols="12"
                lg="12"
                md="12"
                sm="12"
                max="auto"
              >
                <v-text-field
                  v-model="age"
                  class="text-write text--white"
                  name="age"
                  label="العمر"
                  required
                /> 
              </v-col>
              <v-col 
                cols="12"
                lg="12"
                md="12"
                sm="12"
                max="auto"
              >
                <v-text-field
                  v-model="email"
                  :rules="rules.email"              
                  name="email"
                  label="البريد الالكتروني"
                  required
                  class="text--primary"            
                />
              </v-col>
              <v-col 
                cols="12"
                lg="12"
                md="12"
                sm="12"
                max="auto"
              >
                <v-text-field
                  v-model="password"
             
                  name="password"
                  label="كلمة السر"
                  type="password"
                  class="text--primary"            
                />
              </v-col>
              <v-col 
                cols="12"
                lg="12"
                md="12"
                sm="12"
                max="auto"
              >
                <v-text-field
                  v-model="password_confirmation"
             
                  name="password"
                  label="كلمة السر"
                  type="password"
                  class="text--primary"            
                />
              </v-col>
              <v-col 
                cols="12"
                lg="12"
                md="12"
                sm="12"
                max="auto"
              >
                <v-file-input
                  v-model="profile_image"
                  color="white"             
                  placeholder="Upload your documents"
                  label="الصوره الشخصية"             
                />
              </v-col>
            </v-row>
            <v-card-actions>      
              <button
                :disabled="!valid"
                class="btn btn-theme"
                @click="signUp"
              >
                إنشاء حساب
              </button>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>

    <section
      id="about"
      class="top-full bottom-half"
    >
      <div class="container">      
        <div class="row">
          <div class="col-12 col-md-6">
            <figure class="about-man">
              <img
                src="@/assets/img/about-man.png"
                class="img-fluid"
                alt=""
              >
            </figure>
          </div> <!-- end .col-12.col-md-6 -->
          <div class="col-12 col-md-6 col-lg-5 offset-lg-1">
            <article class="about-article">
              <h2 class="fw-700 gradient-text text-uppercase">
                المشروععنوان  <br> رئيسي عن الصفحة او
              </h2>
              <p class="text-white ">
                الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية و يتوفر به جميع الأدوات والمعدات المطلوبة و نظافة المكان و أن تشعر فيه بالراحة. أما إذا كنت ترغب في ممارسة الرياضة في منزلك وهذا ما يفعله المعظم و طبعاً مزاياه لا رسوم دخول ولاحشود ويمكنك الأنتقال من تمرين إلى آخر دون راحة والعيب هو أنه ليس لديك أحد كي يشجعك أو يوجهك الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية و يتوفر به جميع الأدوات والمعدات المطلوبة و نظافة المكان و أن تشعر فيه بالراحة. أما إذا كنت ترغب في ممارسة الرياضة في منزلك وهذا ما يفعله المعظم و طبعاً مزاياه لا رسوم دخول ولاحشودز
              </p>
              <p class="d-none d-sm-block d-md-none">
                ويمكنك الأنتقال من تمرين إلى آخر دون راحة والعيب هو أنه ليس لديك أحد كي يشجعك أو يوجهك الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية و يتوفر به جميع الأدوات والمعدات المطلوبة و نظافة المكان و أن تشعر فيه بالراحة. أما إذا كنت ترغب في ممارسة الرياضة في منزلك وهذا ما يفعله المعظم و طبعاً مزاياه لا رسوم دخول ولاحشود ويمكنك الأنتقال من تمرين إلى آخر دون راحة والعيب هو أنه ليس لديك أحد كي يشجعك أو يوجهك الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية و يتوفر به جميع الأدوات والمعدات المطلوبة و نظافة المكان و أن تشعر فيه بالراحة. أما إذا كنت ترغب في ممارسة الرياضة في منزلك وهذا ما يفعله المعظم و طبعاً مزاياه لا رسوم دخول ولاحشود ويمكنك الأنتقال من تمرين إلى آخر دون راحة والعيب هو أنه ليس لديك أحد كي يشجعك أو يوجهك
              </p>
            </article>
          </div> <!-- end .col-12.col-md-6 -->
        </div> <!-- end .row -->
      </div> <!-- end .container -->
    </section> <!-- end #about -->
    <!-- end .row -->
    <!-- end #our-trainers -->
  </main> <!-- end .site-main -->
</template>

<script>
import AuthService from '@/services/auth.service.js';
import client from '../module/client'
export default {
 
  data() {
    return {
      valid: true,
      first_name: '',
      last_name: '',
      family: '',
      age: '',
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
    client().get('/signup').then(response => {

    // get body data
    console.log(response)

  }, response => {
    // error callback
  });
  },
  methods: {
    getFormData(formData,object) {
        // const formData = new FormData();
        Object.keys(object).forEach(key => formData.append(key, object[key]));
        return formData;
    },
    signUp(){
        let formData = new FormData;
        let credentials = {
         first_name: this.first_name,
         last_name: this.last_name,
         family: this.family,
         age: this.age,
         email: this.email,
         password: this.password,
         password_confirmation: this.password_confirmation,
         profile_image: this.profile_image,
        };
        this.getFormData(formData,credentials)
        console.log(this.profile_image)
        formData.append('profile_image',this.profile_image)
          

        // this.$http.post('/api', data, {
        //   headers: {
        //       'Content-Type': 'multipart/form-data'
        //   }
        // })

        client().post('/customer/signup', 
                   formData
                )
              .then(response=> {
                this.$router.push({
                  name: 'login'
                })
              })
              .catch(error=> {
                console.log(error.data);
              });
    }
  }
};
</script>
<style scoped>
.signup{
   border: 3px solid #ca0000;    
    height: auto;
    margin: 0 auto;
    padding: 30px;
    color: #fff;
}
.sl{
  margin-top: -12px;
}

</style>