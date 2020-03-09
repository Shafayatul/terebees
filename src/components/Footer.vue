<template>
    <footer class="site-footer" :class="$route.meta.footerTop === true ? 'bottom-full': 'section-full'" v-if="$route.path !== '/404'">
        <div class="footer-top-shape"  v-if="$route.meta.footerTop === true">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 341" style="enable-background:new 0 0 1920 341;" xml:space="preserve">                
                <g>
                    <polygon class="step-2" points="0,270 0,270 0,341 959.9,191 1920,341 1920,270 960,120   "/>
                    <polygon class="step-1" points="0,200 0,200 0,251 959.9,101 1920,251 1920,200 960,50    "/>
                    <polygon class="step-0" points="960,0 0,150 0,150 0,181 959.9,31 1920,181 1920,150  "/>
                </g>
            </svg>
            
            <!-- for ie -->
            <img src="@/assets/img/footer-top-shape.svg" alt="">
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto">
                    <figure class="footer-logo text-center mb-45">
                        <img src="@/assets/img/logo-color.png" alt="Squat">
                    </figure>
                    <ul class="text-write footer-nav title-font list-unstyled flex align-center justify-center text-uppercase fw-700 mb-40">
                        <li><router-link to="/login">تسجيل الدخول</router-link></li>
                        <li><router-link to="/"> الصفحة الرئيسية</router-link></li>
                        <li><router-link to="/about">معلومات عنا </router-link></li>
                        <li><router-link to="/clasess"> المقالات الرياضية </router-link></li>
                        <li><router-link to="/our-trainer">برامج التدريب </router-link></li>                      
                        <li><router-link to="/contact">  تواصل معنا</router-link></li>
                    </ul>
                    <div class="buttons-group flex align-items-center justify-center mt-30 d-flex d-sm-none">
                        <a href="#" class="btn btn-sm btn-bottom-border mr-20"></a>
                        <a href="#" class="btn btn-sm btn-bottom-border mr-20"><i class="fas fa-instagram"></i></a>
                        <a href="#" class="btn btn-sm btn-bottom-border"><i class="fa fa-linkedin"></i></a>
                    </div>
                    <div class="buttons-group text-center">
                        <a href="#" class="btn btn-bottom-border ">فيسبوك<i class="mr-2 fa fa-facebook ft-icon"></i></a>
                        <a href="#" class="btn btn-bottom-border mr-20 ">انستجرام <i class="mr-2 fa fa-instagram ft-icon"></i></a>
                        <a href="#" class="btn btn-bottom-border  mr-20">فيسبوك <i class="mr-2 fa fa-linkedin ft-icon"></i></a>
                    </div>
                    <p class="text-center mt-45 mb-0">Copyright (c) 2018, All Rights Reserved to Me</p>
                </div>
            </div> <!-- end .row -->
        </div> <!-- end .container -->
    </footer> <!-- end .site-footer -->

</template>

<script>
export default{
    name: 'Footer'
}

</script>
<style type="text/css">
    .step-0{fill:#FE3E0B;}
    .step-1{fill:#E5180A;}
    .step-2{fill:#FC0247;}
 .ft-icon {
    background-image: -webkit-gradient(linear, left top, right top, from(#fe3e0b), to(#fa004a));
    padding:5px 7px;
    border-radius: 68%;
}
.ft-icon:hover{
    background-image: none;
} 

</style>