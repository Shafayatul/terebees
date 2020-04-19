<template>
  <main
    :key="componentKey"
    class="site-main home grey-background"
  >   
    <VueSlickCarousel
      class="main-banner-slider"
      v-bind="settings"
    >               
      <section class="main-banner p-relative swiper-slide">
        <div class="banner-content ov-hidden">
          <div class="caption-mobile text-center">
            <h3>طبيعي</h3>
            <!--<p class="mb-0 mt-20">Get in Shape Now!</p>-->
          </div>
          <div
            class="caption1"
            data-paroller-factor="0.2"
            data-paroller-type="foreground"
            data-paroller-direction="horizontal"
          >
            <h3>طبيعي</h3>                
          </div>
          <img
            src="@/assets/img/banner-man-2.png"
            class="man-desktop img-fluid"
            alt=""
          >
          <div
            class="caption2 text-right"
            data-paroller-factor="-0.2"
            data-paroller-type="foreground"
            data-paroller-direction="horizontal"
          >
            <h3>خليك#</h3>
          </div>
        </div>
        <!-- end .banner-content -->
        <div class="video-button right flex align-center">
          <a
            href="#"
            class="play-icon mfp-iframe"
            data-toggle="modal"
            data-target="#myModal"            
          >
            <span class="gradient-bg flex align-center justify-center">
              <i class="ti-control-play" />
            </span> 
          </a>
        <div><h6 class="text-uppercase text-bold text-left gradient-title"> شاهدة المقدمة المتحركة </h6><p class="mb-0 mr-2 text-white">سوف تحب رؤية هذا التدريب</p></div>
        </div>
        <div id="fire-flame" />
      </section>
      <section class="main-banner p-relative swiper-slide">
        <div class="banner-content ov-hidden">
          <div class="caption-mobile text-center">
            <h3>طبيعي</h3>
            <!--<p class="mb-0 mt-20">Get in Shape Now!</p>-->
          </div>
          <div
            class="caption1"
            data-paroller-factor="0.2"
            data-paroller-type="foreground"
            data-paroller-direction="horizontal"
          >
            <h3>طبيعي</h3>                
          </div>
          <img
            src="@/assets/img/01_Home.png"
            class="man-desktop img-fluid"
            alt=""
          >
          <div
            class="caption2 text-right"
            data-paroller-factor="-0.2"
            data-paroller-type="foreground"
            data-paroller-direction="horizontal"
          >
            <!--<p>Fitness Reveals Pleasure</p>-->
            <h3>خليك#</h3>
          </div>
        </div>
        <!-- end .banner-content -->
        <div class="video-button right flex align-center">
          <a
            href="#"
            class="play-icon mfp-iframe"             
            data-toggle="modal"
            data-target="#myModal"
          >
            <span class="gradient-bg flex align-center justify-center">
              <i class="ti-control-play" />
            </span>
          </a>
          <div><h6 class="text-uppercase text-bold text-left gradient-title"> شاهدة المقدمة المتحركة </h6><p class="mb-0 mr-2 text-white">سوف تحب رؤية هذا التدريب</p></div>
        </div>
        <div id="fire-flame" />
      </section> 
      <section class="main-banner p-relative swiper-slide">
        <div class="banner-content ov-hidden">
          <div class="caption-mobile text-center">
            <h3>طبيعي</h3>
            <!--<p class="mb-0 mt-20">Get in Shape Now!</p>-->
          </div>
          <div
            class="caption1"
            data-paroller-factor="0.2"
            data-paroller-type="foreground"
            data-paroller-direction="horizontal"
          >
            <h3>طبيعي</h3>                
          </div>
          <img
            src="@/assets/img/banner-man-2.png"
            class="man-desktop img-fluid"
            alt=""
          >
          <div
            class="caption2 text-right"
            data-paroller-factor="-0.2"
            data-paroller-type="foreground"
            data-paroller-direction="horizontal"
          >
            <!--<p>Fitness Reveals Pleasure</p>-->
            <h3>خليك#</h3>
          </div>
        </div>
        <!-- end .banner-content -->
        <div class="video-button right flex align-center">
          <a
            href="#"
            class="play-icon mfp-iframe"
            data-toggle="modal"
            data-target="#myModal"
          >
            <span class="gradient-bg flex align-center justify-center">
              <i class="ti-control-play" />
            </span>
          </a>
        <div><h6 class="text-uppercase text-bold text-left gradient-title"> شاهدة المقدمة المتحركة </h6><p class="mb-0 mr-2 text-white">سوف تحب رؤية هذا التدريب</p></div>
        </div>
        <div id="fire-flame" />
      </section>
      <section class="main-banner p-relative swiper-slide">
        <div class="banner-content ov-hidden">
          <div class="caption-mobile text-center">
            <h3>طبيعي</h3>
            <!--<p class="mb-0 mt-20">Get in Shape Now!</p>-->
          </div>
          <div
            class="caption1"
            data-paroller-factor="0.2"
            data-paroller-type="foreground"
            data-paroller-direction="horizontal"
          >
            <h3>طبيعي</h3>                
          </div>
          <img
            src="@/assets/img/banner-man-2.png"
            class="man-desktop img-fluid"
            alt=""
          >
          <div
            class="caption2 text-right"
            data-paroller-factor="-0.2"
            data-paroller-type="foreground"
            data-paroller-direction="horizontal"
          >
            <!--<p>Fitness Reveals Pleasure</p>-->
            <h3>خليك#</h3>
          </div>
        </div>
        <!-- end .banner-content -->
        <div class="video-button right flex align-center">
          <a
            href="#"
            class="play-icon mfp-iframe"
            data-toggle="modal"
            data-target="#myModal"
          >
            <span class="gradient-bg flex align-center justify-center">
              <i class="ti-control-play" />
            </span>
          </a>
          <div><h6 class="text-uppercase text-bold text-left gradient-title"> شاهدة المقدمة المتحركة </h6><p class="mb-0 mr-2 text-white">سوف تحب رؤية هذا التدريب</p></div>
        </div>
        <div id="fire-flame" />
      </section>    
    </VueSlickCarousel>
    <!-- Large modal -->



   
    <section class="hidevideo">
      <div
        id="myModal"
        class="modal fade"
        role="dialog"
      >
        <div class="modal-dialog  modal-lg">             
          <div class="modal-content ">
            <button
              type="button"
              class="close iconclose"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
       
         
            <div class="modal-body embed-responsive embed-responsive-16by9">
              <video
                id="video"
                muted              
                width="320"
                height="240"
                controls
              >
                <source
                  src="@/assets/img/Tarabees_Introduction_HD.mp4"
                  type="video/mp4"
                >
  
 
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>     
    <!-- <video id="videofr"  muted autoplay width="320" height="240" controls>
  <source src="@/assets/img/Tarabees_Introduction_HD.mp4" type="video/mp4">
  
 
</video> -->
                   
    
   
    <!-- end .main-banner -->
      
    <!-- end #features -->
    <section
      id="about"
      class="p-relative ov-hidden"
    >
      <div class="watermark-title">
        معلومات عنا
      </div>
      <div class="container z-index-1 p-relative">
        <div class="row align-center">
          <div class="col-12 col-md-6">
            <figure class="about-man">
              <img
                src="@/assets/img/about-man.png"
                class="img-fluid"
                alt=""
              >
            </figure>
          </div>
          <!-- end .col-12.col-md-6 -->
          <div class="col-12 col-md-6 col-lg-5 offset-lg-1">
            <article class="about-article">
              <h2 class="">
                معلومات عنا
              </h2>                   
              <p class="font-primary">
                كتير بنواجه مشكلة ضيق الوقت الي بيمنعنا من إنه نروح على النوادي الرياضية والجيمات. غير عن إنه هاي النوادي ما بتعطيك الاهتمام اللي أنت محتاجه بما إنه في غيرك متدربين كثير و ما رح يكون في مدرب خاص الك يشجعك ويعطيك النصائح اللي أنت محتاجها. بس هسا مع ترابيس صار بإمكانك توخذ جدول تدريبي خاص فيك سواء كنت بدك تنحف أو تتخن شوي أو يصير عندك بنية ضخمة زي أبطال كمال الأجسام. كمان ترابيس بقدملك كثير من جداول التغذية اللي رح تضمنلك اخذك المكملات الغذائية المناسبة الك. 
              </p>
              <button class="float-left btn btn-theme-1 mb-30">
                اعرف اكثر
              </button>
            </article>
          </div>
                          
          <!-- end .col-12.col-md-6 -->
        </div>

        <!-- end .row -->
      </div>
      <!-- end .container -->
    </section>
    <!-- end #about -->
    <section
      id="our-services"
      class="bottom-full top-half p-relative ov-hidden"
    >
      <div class="watermark-title">
        التمرينات
      </div>
      <div class="container z-index-1 p-relative">
        <div class="row">
          <!-- end .col-12 -->
          <div class="col-md-4 col-12 p2" />
          <div class="col-12 col-md-4 offset-2 section-heading mb-100 text-center">           
            <p class="gradient-text text-uppercase fw-500 inline-flex align-items-center">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 19 30"
                style="enable-background:new 0 0 19 30;"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      class="svg-fill-text"
                      d="M14,0v30h5V0H14z M7,30h5V0H7V30z M0,25h5V5H0V25z"
                    />
                  </g>
                </g>
              </svg>
              <span class="ml-15 mr-15 font-weight-bold">نحن ترابيس. هذا هو مانقوم به</span>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 19 30"
                style="enable-background:new 0 0 19 30;"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      class="svg-fill-text"
                      d="M0,30h5V0H0V30z M7,30h5V0H7V30z M14,5v20h5V5H14z"
                    />
                  </g>
                </g>
              </svg>
            </p>
            <h2 class="font-primary fw-700 text-uppercase mb-25">
              هذا هو ما نقدمه
            </h2>
            <p class="mb-0">
              الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 mx-auto col-md-6 col-lg-4">
            <div class="item-card animated-border service-item p-relative ov-hidden">
              <figure class="p-relative mb-0">
                <img
                  src="@/assets/img/Training-03.jpg"
                  class="img-fluid w-100"
                  alt=""
                >
                <figcaption>
                  <h4 class="text-uppercase fw-700 dark-color fs-18">
                    اسم التمرين
                  </h4>
                  <p class="dark-color">
                    ما يعرف   الذهاب  والإياب يجب أن
                  </p>
                </figcaption>
              </figure>
              <div
                class="item-card-hover gradient-border"
                data-bgc="#030409,80"
              >
                <a
                  href="#"
                  class="btn popup-icon link-white gradient-bg"
                >
                  <i class="ti-fullscreen" />
                </a>
              </div>
            </div>
            <!-- end .item-card service-item -->
          </div>
          <!-- end .col-12.col-md-4 -->
          <div class="col-12 col-md-6 col-lg-4">
            <div class="item-card animated-border service-item p-relative ov-hidden">
              <figure class="p-relative mb-0">
                <img
                  src="@/assets/img/Training-02.jpg"
                  class="img-fluid w-100"
                  alt=""
                >
                <figcaption>
                  <h4 class="text-uppercase fw-700 dark-color fs-18">
                    اسم التمرين
                  </h4>
                  <p class="dark-color">
                    ما يعرف   الذهاب  والإياب يجب أن
                  </p>
                </figcaption>
              </figure>
              <div
                class="item-card-hover gradient-border"
                data-bgc="#030409,80"
              >
                <a
                  href="#"
                  class="btn popup-icon link-white gradient-bg"
                >
                  <i class="ti-fullscreen" />
                </a>
              </div>
            </div>
            <!-- end .item-card service-item -->
          </div>
          <!-- end .col-12.col-md-4 -->
          <div class="col-12 col-md-6 col-lg-4">
            <div class="item-card animated-border service-item p-relative ov-hidden">
              <figure class="p-relative mb-0">
                <img
                  src="@/assets/img/Training-01.jpg"
                  class="img-fluid w-100"
                  alt=""
                >
                <figcaption>
                  <h4 class="text-uppercase fw-700 dark-color fs-18">
                    اسم التمرين
                  </h4>
                  <p class="dark-color">
                    ما يعرف   الذهاب  والإياب يجب أن
                  </p>
                </figcaption>
              </figure>
              <div
                class="item-card-hover gradient-border"
                data-bgc="#030409,80"
              >
                <a
                  href="#"
                  class="btn popup-icon link-white gradient-bg"
                >
                  <i class="ti-fullscreen" />
                </a>
              </div>
            </div>
            <!-- end .item-card service-item -->
          </div>
          <!-- end .col-12.col-md-4 -->
        </div>
        <!-- end .row -->
      </div>
      <!-- end .chat -->
    </section>
    <!-- end #our-services -->
    <section
      id="our-trainers"
      class=" top-full bottom-full p-relative ov-hidden"
    >
      <div class="watermark-title ">
        الجداول
      </div>
      <div class="container p-relative">
        <img
          src="@/assets/img/trainers.png"
          class="img-fluid trainer-imgs"
          alt=""
        >  
        <div class="row">
          <div class="section-heading mb-100 col-12 text-center">
            <p class="gradient-text text-uppercase fw-500 inline-flex align-items-center">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 19 30"
                style="enable-background:new 0 0 19 30;"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      class="svg-fill-text"
                      d="M14,0v30h5V0H14z M7,30h5V0H7V30z M0,25h5V5H0V25z"
                    />
                  </g>
                </g>
              </svg>
              <span class="ml-15 mr-15 font-weight-bold">نحن ترابيس. هذا هو مانقوم به</span>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 19 30"
                style="enable-background:new 0 0 19 30;"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      class="svg-fill-text"
                      d="M0,30h5V0H0V30z M7,30h5V0H7V30z M14,5v20h5V5H14z"
                    />
                  </g>
                </g>
              </svg>
            </p>
            <h2 class="font-primary fw-700 text-uppercase mb-25">
              مدربينا 
            </h2>
            <p class="mb-0 font-primary">
              الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً <br> في المصاريف الشهرية
            </p>
          </div>
          <!-- end .col-12 -->
        </div>
        <!-- end .row -->
        <template>
          <div class="trainer-slider">
            <VueSlickCarousel
              ref="carousel"
              class=""
              v-bind="trainerslider"
            >
              <div class="row trainer-bio d-flex align-items-center">                
                <div class="col-12 col-md-6 col-lg-6">
                  <h3 class="font-primary text-uppercase fw-700 font-primary mb-30">
                    اسم الجدول
                  </h3>
                  <p class="font-primary">
                   كتير بنواجه مشكلة ضيق الوقت الي بيمنعنا من إنه نروح على النوادي الرياضية والجيمات. غير عن إنه هاي النوادي ما بتعطيك الاهتمام اللي أنت محتاجه بما إنه في غيرك متدربين كثير و ما رح يكون في مدرب خاص الك يشجعك ويعطيك النصائح اللي أنت محتاجها. بس هسا مع ترابيس صار بإمكانك توخذ جدول تدريبي خاص فيك سواء كنت بدك تنحف أو تتخن شوي أو يصير عندك بنية ضخمة زي أبطال كمال الأجسام. كمان ترابيس بقدملك كثير من جداول التغذية اللي رح تضمنلك اخذك المكملات الغذائية المناسبة الك. 
                  </p>
                  <a
                    href="#"
                    class="btn btn-theme-1 mb-30 font-primary"
                  >اعرف المزيد</a>
                </div>
                <!-- end .col-12 col-lg-5 lg-push-1 -->
                <div class="col-12 col-md-6 col-lg-5 offset-lg-1">
                  <img
                    src="@/assets/img/about/layer-5.png"
                    class="img-fluid trainer-img"
                    alt=""
                  >
                </div>
              </div>
              <div class="row trainer-bio d-flex align-items-center">                
                <div class="col-12 col-md-6 col-lg-6">
                  <h3 class="font-primary text-uppercase fw-700 font-primary mb-30">
                    اسم الجدول
                  </h3>
                  <p class="font-primary">
                   كتير بنواجه مشكلة ضيق الوقت الي بيمنعنا من إنه نروح على النوادي الرياضية والجيمات. غير عن إنه هاي النوادي ما بتعطيك الاهتمام اللي أنت محتاجه بما إنه في غيرك متدربين كثير و ما رح يكون في مدرب خاص الك يشجعك ويعطيك النصائح اللي أنت محتاجها. بس هسا مع ترابيس صار بإمكانك توخذ جدول تدريبي خاص فيك سواء كنت بدك تنحف أو تتخن شوي أو يصير عندك بنية ضخمة زي أبطال كمال الأجسام. كمان ترابيس بقدملك كثير من جداول التغذية اللي رح تضمنلك اخذك المكملات الغذائية المناسبة الك. 
                  </p>
                  <a
                    href="#"
                    class="btn btn-theme-1 mb-30 font-primary"
                  >اعرف المزيد</a>
                </div>
                <!-- end .col-12 col-lg-5 lg-push-1 -->
                <div class="col-12 col-md-6 col-lg-5 offset-lg-1">
                  <img
                    src="@/assets/img/about/layer-5.png"
                    class="img-fluid trainer-img"
                    alt=""
                  >
                </div>
              </div>
              <div class="row trainer-bio d-flex align-items-center">                
                <div class="col-12 col-md-6 col-lg-6">
                  <h3 class="font-primary text-uppercase fw-700 font-primary mb-30">
                    اسم الجدول
                  </h3>
                  <p class="font-primary">
                   كتير بنواجه مشكلة ضيق الوقت الي بيمنعنا من إنه نروح على النوادي الرياضية والجيمات. غير عن إنه هاي النوادي ما بتعطيك الاهتمام اللي أنت محتاجه بما إنه في غيرك متدربين كثير و ما رح يكون في مدرب خاص الك يشجعك ويعطيك النصائح اللي أنت محتاجها. بس هسا مع ترابيس صار بإمكانك توخذ جدول تدريبي خاص فيك سواء كنت بدك تنحف أو تتخن شوي أو يصير عندك بنية ضخمة زي أبطال كمال الأجسام. كمان ترابيس بقدملك كثير من جداول التغذية اللي رح تضمنلك اخذك المكملات الغذائية المناسبة الك. 
                  </p>
                  <a
                    href="#"
                    class="btn btn-theme-1 mb-30 font-primary"
                  >اعرف المزيد</a>
                </div>
                <!-- end .col-12 col-lg-5 lg-push-1 -->
                <div class="col-12 col-md-6 col-lg-5 offset-lg-1">
                  <img
                    src="@/assets/img/about/layer-5.png"
                    class="img-fluid trainer-img"
                    alt=""
                  >
                </div>
              </div>
              <!-- end #trainer-bio -->
            </VueSlickCarousel>
            <div class="custom-arrow">
              <button
                class="slick-prev slick-arrow gradient-bg gradient-hover"
                @click="showPrev"
              >
                <i class="ti-angle-left" />
              </button> 
              <button
                class="slick-next slick-arrow gradient-bg gradient-hover"
                @click="showNext"
              >
                <i class="ti-angle-right" />
              </button>
            </div>
          </div>
        </template>
        <!-- end .trainer-slide -->
      </div>
      <!-- end .container -->
    </section>
    <!-- end #our-trainers -->
   <section
      id="testimonials"
      class=" p-relative top-half  paroller"
    >
      <img
        class="top-img"
        src="@/assets/img/layer-1.png"
      >
      <div class="section-arrows">
        <svg
          class="arrow-top"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1920 150"
          style="enable-background:new 0 0 1920 150;"
          xml:space="preserve"
        >
          <polygon
            class="svg-fill-dark"
            points="0,150 959.9,0 1920,150 1920,0 0,0 "
          />
        </svg>
        <svg
          class="arrow-bottom"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1920 150"
          style="enable-background:new 0 0 1920 150;"
          xml:space="preserve"
        >
          <polygon
            class="svg-fill-dark"
            points="0,150 959.9,0 1920,150 "
          />
        </svg>
      </div>
      <div class="container">
       
        <!-- end .testimonials -->
      </div>
      <!-- end .container -->
    </section>
    <!-- end #testimonials -->
      
    <section
      id="our-pricing"
      class="top-half bottom-full p-relative ov-hidden"
    >
      <div class="watermark-title">
        الاشتراك
      </div>
      <div class="container z-index-1 p-relative">
         
        <div class="row">
           
          <div class="section-heading col-12 mb-100 text-center">
           
            <p class="gradient-text text-uppercase fw-500 inline-flex align-items-center">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 19 30"
                style="enable-background:new 0 0 19 30;"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      class="svg-fill-text"
                      d="M14,0v30h5V0H14z M7,30h5V0H7V30z M0,25h5V5H0V25z"
                    />
                  </g>
                </g>
              </svg>
              <span class="ml-15 mr-15 font-weight-bold">نحن ترابيس. هذا هو مانقوم به</span>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 19 30"
                style="enable-background:new 0 0 19 30;"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      class="svg-fill-text"
                      d="M0,30h5V0H0V30z M7,30h5V0H7V30z M14,5v20h5V5H14z"
                    />
                  </g>
                </g>
              </svg>
            </p>
            <h2 class="font-primary fw-700 text-uppercase mb-25">
                  الإشتراكات   
            </h2>
            <p class="mb-0">
              الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون <br>مناسباً في المصاريف الشهرية
            </p>
          </div>
          <!-- end .col-12 -->
          <div class="col-12 col-md-4 col-lg-3 col-length-3">
            <div class="item-card animated-border item-card-pt p-relative">
              <figure class="pt-image p-relative mb-0">
                <img
                  src="@/assets/img/layer-10.png"
                  class="img-fluid w-100"
                  alt=""
                >
                <figcaption class="pt-caption">
                  <h4 class="text-uppercase fw-700 dark-color">
                    اسم المدرب
                  </h4>
                  <p class="mb-0 dark-color">
                    الذهاب إلى مركز رياضي أو ما يعرف
                  </p>
                </figcaption>
              </figure>
              <!-- end .pt-image -->
              <!-- end .pt-image -->
              <div
                class="item-card-hover gradient-border flex align-end"
                data-bgc="#030409,80"
              >
                <div>
                  <a
                    href="#"
                    class="btn btn-theme-1"
                    v-on="on"
                  ><i class="ti-unlock ml-15" />إشترك الان</a>
                  <span class="pt-tag gradient-text text-uppercase fw-700 title-font">200 د أ</span>
                  <h4 class="fw-700 text-uppercase fs-18 font-primary mb-15">
                    اسم التدريب
                  </h4>
                  <p>اسم التدريب</p>
                  <ul class="list-double-arrow">
                    <li>الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية </li>
                    <li>الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية </li>
                    <li>الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية </li>
                  </ul>
                </div>
              </div>
              <!-- end .pt-hover -->
            </div>
            <!-- end .pt-item -->
          </div>
          <div class="col-12 col-md-6 col-lg-3 col-length-3">
            <div class="item-card animated-border item-card-pt p-relative">
              <figure class="pt-image p-relative mb-0">
                <img
                  src="@/assets/img/layer-9.png"
                  class="img-fluid w-100"
                  alt=""
                >
                <figcaption class="pt-caption">
                  <h4 class="text-uppercase fw-700 dark-color">
                    اسم المدرب
                  </h4>
                  <p class="mb-0 dark-color">
                    الذهاب إلى مركز رياضي أو ما يعرف
                  </p>
                </figcaption>
              </figure>
              <!-- end .pt-image -->
              <div
                class="item-card-hover gradient-border flex align-end"
                data-bgc="#030409,80"
              >
                <div>
                  <a
                    href="#"
                    class="btn btn-theme-1"
                  ><i class="ti-unlock ml-15" />إشترك الان</a>
                  <span class="pt-tag gradient-text text-uppercase fw-700 title-font">200 د أ</span>
                  <h4 class="fw-700 text-uppercase fs-18 font-primary mb-15">
                    اسم التدريب
                  </h4>
                  <p>الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية </p>
                  <ul class="list-double-arrow">
                    <li>الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية </li>
                    <li>الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية </li>
                    <li>الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية </li>
                  </ul>
                </div>
              </div>
              <!-- end .pt-hover -->
            </div>
            <!-- end .pt-item -->
          </div>
          <!-- end .col-12.col-md-4 -->
          <div class="col-12 col-md-6 col-lg-3 col-length-3">
            <div class="item-card animated-border item-card-pt p-relative">
              <figure class="pt-image p-relative mb-0">
                <img
                  src="@/assets/img/layer-11.png"
                  class="img-fluid w-100"
                  alt=""
                >
                <figcaption class="pt-caption">
                  <h4 class="text-uppercase fw-700 dark-color">
                    اسم المدرب
                  </h4>
                  <p class="mb-0 dark-color">
                    الذهاب إلى مركز رياضي أو ما يعرف
                  </p>
                </figcaption>
              </figure>
              <!-- end .pt-image -->
              <!-- end .pt-image -->
              <div
                class="item-card-hover gradient-border flex align-end"
                data-bgc="#030409,80"
              >
                <div>
                  <a
                    href="#"
                 
                    class="btn btn-theme-1"
                  ><i class="ti-unlock ml-15" />إشترك الان</a>
                  <span class="pt-tag gradient-text text-uppercase fw-700 title-font">200 د أ</span>
                  <h4 class="fw-700 text-uppercase fs-18 font-primary mb-15">
                    اسم التدريب
                  </h4>
                  <p>اسم التدريب</p>
                  <ul class="list-double-arrow">
                    <li>الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية </li>
                    <li>الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية </li>
                    <li>الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية </li>
                  </ul>
                </div>
              </div>
              <!-- end .pt-hover -->
            </div>
            <!-- end .pt-item -->
          </div>
          <!-- end .col-12.col-md-4 -->
          <div class="col-12 col-md-6 col-lg-3 col-length-3">
            <div class="item-card animated-border item-card-pt p-relative">
              <figure class="pt-image p-relative mb-0">
                <img
                  src="@/assets/img/layer-9.png"
                  class="img-fluid w-100"
                  alt=""
                >
                <figcaption class="pt-caption">
                  <h4 class="text-uppercase fw-700 dark-color">
                    اسم المدرب
                  </h4>
                  <p class="mb-0 dark-color">
                    الذهاب إلى مركز رياضي أو ما يعرف
                  </p>
                </figcaption>
              </figure>
              <!-- end .pt-image -->
              <div
                class="item-card-hover gradient-border flex align-end"
                data-bgc="#030409,80"
              >
                <div>
                  <a
                    href="#"
                    class="btn btn-theme-1"
                  ><i class="ti-unlock ml-15" />إشترك الان</a>
                  <span class="pt-tag gradient-text text-uppercase fw-700 title-font">200 د أ</span>
                  <h4 class="fw-700 text-uppercase fs-18 font-primary mb-15">
                    اسم التدريب
                  </h4>
                  <p>الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية </p>
                  <ul class="list-double-arrow">
                    <li>الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية </li>
                    <li>الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية </li>
                    <li>الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية </li>
                  </ul>
                </div>
              </div>
              <!-- end .pt-hover -->
            </div>
            <!-- end .pt-item -->
          </div>
          <!-- end .col-12.col-md-4 -->
        </div>
        <!-- end .row -->
      </div>
      <!-- end .container -->
    </section>
    <!-- end #our-pricing -->
      
      
    <section
      id="latest-posts"
      class="section-full pt-0"
    >
      <img
        class="top-img"
        src="@/assets/img/hartwork.png"
      >
      <div class="container">
        <div class="row">
          <div class="section-heading col-12 mb-100 text-center">
           
            <p class="gradient-text text-uppercase fw-500 inline-flex align-items-center">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 19 30"
                style="enable-background:new 0 0 19 30;"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      class="svg-fill-text"
                      d="M14,0v30h5V0H14z M7,30h5V0H7V30z M0,25h5V5H0V25z"
                    />
                  </g>
                </g>
              </svg>
              <span class="ml-15 mr-15 font-weight-bold">نحن ترابيس. هذا هو مانقوم به</span>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 19 30"
                style="enable-background:new 0 0 19 30;"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      class="svg-fill-text"
                      d="M0,30h5V0H0V30z M7,30h5V0H7V30z M14,5v20h5V5H14z"
                    />
                  </g>
                </g>
              </svg>
            </p>
            <h2 class="font-primary fw-700 text-uppercase mb-25">
              مقالات رياضية
            </h2>
            <p class="mb-0">
              الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون  <br>مناسباً في المصاريف الشهرية 
            </p>
          </div>
          <!-- end .col-12 -->
          <div class="col-12 col-lg-6 col-length-3">
            <div class="item-card animated-border item-card-blog p-relative">
              <figure class="blog-image p-relative mb-0">
                <img
                  src="@/assets/img/post-1.jpg"
                  class="img-fluid w-100"
                  alt=""
                >
                <figcaption class="blog-caption">
                  <h4 class="text-uppercase fw-700 dark-color">
                    اسم المقال
                  </h4>
                  <p class="mb-0 dark-color">
                    الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية 
                  </p>
                </figcaption>
              </figure>
              <!-- end .blog-image -->
              <div
                class="item-card-hover gradient-border flex align-end"
                data-bgc="#030409,80"
              >
                <div>
                  <a
                    href="#"
                    class="btn btn-theme-1"
                  ><i class="ti-arrow-right ml-15" />اقرأ المزيد</a>
                  <h4 class="fw-700 text-uppercase fs-18 font-primary mb-15">
                    Standard Blog Post 01
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt dolore magna aliqua.</p>
                  <div class="blog-tags flex">
                    <a href="#">Mark Wiens,</a>
                    <a href="#">Image,</a>
                    <a href="#">203 likes,</a>
                    <a href="#">05 comments</a>
                  </div>
                </div>
              </div>
              <!-- end .pt-hover -->
            </div>
            <!-- end .blog-item -->
          </div>
          <!-- end .col-12.col-lg-4 -->
          <div class="col-12 col-lg-6">
            <div class="item-card animated-border item-card-blog p-relative">
              <figure class="blog-image p-relative mb-0">
                <img
                  src="@/assets/img/post-2.jpg"
                  class="img-fluid"
                  alt=""
                >
                <figcaption class="blog-caption">
                  <h4 class="text-uppercase fw-700 dark-color">
                    اسم المقال
                  </h4>
                  <p class="mb-0 dark-color">
                    الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية 
                  </p>
                </figcaption>
              </figure>
              <!-- end .blog-image -->
              <div
                class="item-card-hover gradient-border flex align-end"
                data-bgc="#030409,80"
              >
                <div>
                  <a
                    href="#"
                    class="btn btn-theme-1"
                    v-on="on"
                  ><i class="ti-arrow-right ml-15" />اقرأ المزيد</a>
                  <h4 class="fw-700 text-uppercase fs-18 font-primary mb-15">
                    Standard Blog Post 02
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt dolore magna aliqua.</p>
                  <div class="blog-tags flex">
                    <a href="#">Mark Wiens,</a>
                    <a href="#">Image,</a>
                    <a href="#">203 likes,</a>
                    <a href="#">05 comments</a>
                  </div>
                </div>
              </div>
              <!-- end .pt-hover -->
            </div>
            <!-- end .blog-item -->
          </div>

          <!-- end .col-12.col-lg-4 -->
        </div>
        <!-- end .row -->
      </div>
    
      <!-- end .container -->
    </section>
    <div class=" cart-overlay">
      <a
        v-show="isNinja"
        href="#"
        class="rel"
        @click="isNinja = !isNinja"
      >
        <img
          width="300"
          src="@/assets/img/home/chat.png"
        >
        <div class="overlay top-img">
          <h4 class="over-text">اسأل <br> المدرب</h4>
        </div>
      </a>
    </div>
    <div
      v-show="!isNinja"
      class="chat-content"
      role="document"
    >
      <div class="modal-content">
        <div class="modal-header chat-header">
          <img src="@/assets/img/home/chat.png">
          <button
            type="button"
            class="close chat-close"
            @click="isNinja = !isNinja"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <h5 class="modal-title text-center">
            اسأل المدرب
          </h5>
        </div>
        <div class="modal-body">
          <div class="chat"> 
            <img
              src="@/assets/img/home/ryan.png"
              alt="Avatar"
              class="right"
              style="width:100%;"
            >
            <p class="pl-2">
              مرحبا كيف بقدر اجاوبك
            </p>
          </div>

          <div class="darker">
            <p>عندي سؤال بموضوع التغذية</p>
                            
            <img
              src="@/assets/img/home/user.png"
              alt="chat"
              style="width:100%;"
            >                           
          </div>
        </div>
                         
        <div class="modal-footer">
          <span class="btn-te justify-center">اكتب رسالتك هنا... </span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
//  import Subscriptions from './Subscriptions'
 import VueSlickCarousel from 'vue-slick-carousel'
 import 'vue-slick-carousel/dist/vue-slick-carousel.css' 
 
export default {
  name: 'Home',
  components: { VueSlickCarousel  },
  data() {
    return {
      isNinja: true,    
      playerReady: false,      
      options: {
			
	      			autoplay: true,
			},
       settings: {
          arrows: false,
          dots: true,
          dotsClass: "slick-man ",
          // edgeFriction: 0.35,
          // infinite: false,
         slidesToShow:1,
         slidesToScroll: 1,
         rtl: true 
         
        },
        trainerslider: {         
          edgeFriction: 0.35,
          infinite: false,
          arrows: false,


        },
        testimonials: {
          arrows: false,

        },
      componentKey: 0,
     
    };
  },
  methods: {   
    showNext() {
        this.$refs.carousel.next()
      },
    showPrev() {
        this.$refs.carousel.prev()
      },
       onReady() {
            this.playerReady = true
        },
        play () {
            this.$refs.player.play()
        },
        pause () {
            this.$refs.player.pause()
        },
        changeSetting(value) {
      this.isNinja = 'updated'
    },
    },
    
   
  
}

</script>
<style  scoped>
.nav-dark li a{
  color: #fff !important;
}
.main-banner-slider{
  overflow: hidden;
}
.trainer-slider{
	position: relative;
}
.item-card .pt-caption{  
  left: 0 !important;
}
.custom-arrow{
	position :absolute;
	right: 41.6%;
	bottom: 0;
}
.trainer-slider .custom-arrow .slick-prev {
    left: -webkit-calc(50% + 15px);
    left: -moz-calc(50% + 15px);
    left: calc(50% + 15px);
    bottom: 70px;
}
.trainer-img{
	max-height: 100%;
background-size: cover;
height: 640px;
}

.list-double-arrow{
  color:#fff;
 
}
.list-double-arrow li{
  padding-right: 0;
  padding-left: inherit;

}
.list-double-arrow li::before {
	   content: "\e662";   
    font-family: "themify";
   right: 0;
    margin-right: -24px;
    position: absolute;
    left: inherit;
    top: 0;
}
.item-card-hover p{
  color: #fff;
}
.trainer-imgs{
    position: absolute;
    z-index: 2000;
    top: 0%;
    margin: auto;
    left: 0;
    right: 0;
    -webkit-transform: translateY(-78%);
    transform: translateY(-78%);
    max-width: 200px;
}
.gradient-title{
 color: rgb(202, 0, 0);


}
.site-footer {
    /* background: #010208 !important; */
    border-top: none;
}
.modal-lg {
    max-width: 100%;
}

.iconclose{
    padding: 10px 15px 10px 15px;
    border-radius: 25px;
    z-index: 2000;
    border: 2px solid #fd2c1d;
    opacity: 5;
    width: 50px;
    color: #fd2c1d;
}
.iconclose:hover .btnspan{
  background:#fd2c1d;
  display: none !important;
}
</style>
