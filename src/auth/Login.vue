<template>
  <main class="site-main about grey-background">
    <section class="page-header">
      <h1 class="text-center text-white text-uppercase fw-700 mb-0">
       تسجيل دخول
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
      >
        <v-form class="loginForm">
          <v-card class="elevation-12">
            <v-card-text>
              <v-text-field
                v-model="username"               
                name="username"
                label="البريد الالكتروني*"
                type="text"
              />

              <v-text-field
                v-model="password"              
                name="password"
                label="كلمة السر*"
                type="password"
              />
            </v-card-text>
            <v-divider light />
            <v-card-actions>
              <v-btn                  
                 class="btn btn-theme"
                dark
                @click="login"
              >
               تسجيل دخول
               
              </v-btn>
              <v-spacer />
              <v-btn
                to="/signup"                  
                color="indigo"
                dark
              >
                Sign up
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
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
export default {
    data() {
    return {
    username: '',
    password: '',   
    
   
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
    console.log(response)
    const token = response.access_token;
    // const user = response.user;
    this.$store.dispatch('login', { token });
    this.$router.push('/dashboard');
    } catch (error) {
    
    }
    }
    }
};
</script>
<style scoped>
.loginForm {
    border: 3px solid #ca0000;    
    height: auto;
    margin: 0 auto;
    padding: 30px;
    color: #fff;
}



</style>
   