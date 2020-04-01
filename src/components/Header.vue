<template>
  <header
    v-if="$route.path !== '/404'"
    class="site-header navbar navbar-expand-lg"
    :class="$route.meta.header === true ? 'bottom-full': 'section-full'"
  >
    <div
      v-if="$route.meta.header === true"
      class="container"
    >
      <router-link
        to="/"
        class="navbar-brand"
        data-text="Home"
      >
        <img
          src="@/assets/img/logo-color.png"
          alt="logo"
          width="100px"
        >
      </router-link><!-- end .navbar-brand -->
      <button
        class="navbar-toggler white"
        type="button"
        data-toggle="collapse"
        data-target="#primary-nav"
      >
        <span class="menu-icon hover-target">
          <span class="menu-icon__line menu-icon__line-left" />
          <span class="menu-icon__line" />
          <span class="menu-icon__line menu-icon__line-right" />
        </span>
      </button> <!-- end .navbar-toggler -->
      <nav
        id="primary-nav"
        class="primary-nav collapse navbar-collapse"
      >
        <ul class="navbar-nav ml-auto">
          <li>
            <router-link
              to="/login"
              data-text="تسجيل الدخول"
            >
              <span>تسجيل الدخول</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/"
              data-text="الصفحة الرئيسية"
            >
              <span> الصفحة الرئيسية</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/about"
              data-text="معلومات عن"
            >
              <span>معلومات عن</span>
            </router-link>
          </li>
          <li>
            <router-link 
              to="/article"
              data-text="المقالات الرياضية"
            >
              <span>المقالات الرياضية</span>
            </router-link>
          </li>         
          <li>
            <router-link
              to="/Ask_Trainer"
              data-text="إسأل المدرب"
            >
              <span>إسأل المدرب</span>
            </router-link>
          </li>
            <li>
            <router-link
              to="/dietTraning"
              data-text="برامج التدريب والاشتراكات"
            >
              <span>برامج التدريب والاشتراكات </span>
            </router-link>
          </li>
           <li>
            <router-link
              to="/contact"
              data-text="تواصل معنا"
            >
              <span>تواصل معنا </span>
            </router-link>
          </li>
         
          <!--   <li><div id="google_translate_element"></div></li> -->
        </ul> <!-- end .navbar-nav -->
      </nav> <!-- end #primary-nav -->
    </div> <!-- end .container -->
  </header> <!-- end .site-header -->
</template>

<script>


export default {
     name: 'Header',
  
};
</script>
<style  scoped>

</style>>
    
