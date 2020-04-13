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
        <ul class="navbar-nav  mx-auto ">
          <li>
            <router-link
              to="/login"
             data-text="تسجيل دخول"
            >
              <span>تسجيل دخول</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/home"
              data-text="الصفحة الرئيسية"
            >
              <span> الصفحة الرئيسية</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/about"
             data-text="معلومات عنا"
            >
              <span>معلومات عنا</span>
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
              data-text="اسأل المدرب"
            >
              <span>اسأل المدرب</span>
            </router-link>
          </li>
            <li>
            <router-link
              to="/dietTraning"
             data-text="برامج التداريب و الاشتراكات"
            >
              <span>برامج التداريب و الاشتراكات</span>
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
.router-link-active:before {
				-webkit-transform: scaleX(1);
				transform: scaleX(1);
      }
      
.navbar-nav > li > a.router-link-active span {
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
}      
</style>>
    
